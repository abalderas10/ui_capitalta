-- ------------------------------------------------------------
-- 6. TABLA: citas (Citas presenciales)
-- ------------------------------------------------------------
create table if not exists public.citas (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamptz default now(),
  fecha date not null,
  hora text not null,
  sucursal_id text not null,
  nombre_cliente text not null,
  email text,
  telefono text,
  codigo_cita text unique not null,
  status text default 'programada', -- programada, confirmada, cancelada, completada
  notas text
);

-- RLS para citas
alter table public.citas enable row level security;

-- Permitir inserción pública (para que el Chatbot y la Web puedan agendar sin login estricto si es necesario, 
-- aunque idealmente debería ser authenticated. Para MVP/Chatbot, permitimos anon por ahora con validación en backend).
create policy "Permitir inserción pública de citas"
  on public.citas for insert
  with check (true);

-- Permitir lectura solo a usuarios autenticados (staff) o al propio usuario (si tuviéramos user_id)
create policy "Solo staff ve todas las citas"
  on public.citas for select
  using ( auth.role() = 'service_role' );
