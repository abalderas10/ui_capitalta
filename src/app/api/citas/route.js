import { NextResponse } from 'next/server';

import { createSupabaseServerClient } from '@/utils/supabaseClient';

export async function POST(request) {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return NextResponse.json({ error: 'Supabase no está configurado' }, { status: 500 });
  }

  const body = await request.json();

  const { cliente_id, credito_id, sucursal_id, fecha, hora } = body;

  if (!cliente_id || !credito_id || !sucursal_id || !fecha || !hora) {
    return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('citas')
    .insert({
      cliente_id,
      credito_id,
      sucursal_id,
      fecha,
      hora,
      estado: 'confirmada'
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ cita: data }, { status: 201 });
}

export async function GET(request) {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return NextResponse.json({ error: 'Supabase no está configurado' }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const clienteId = searchParams.get('cliente_id');

  if (!clienteId) {
    return NextResponse.json({ error: 'cliente_id es requerido' }, { status: 400 });
  }

  const { data, error } = await supabase.from('citas').select('*').eq('cliente_id', clienteId).order('fecha', { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ citas: data || [] }, { status: 200 });
}
