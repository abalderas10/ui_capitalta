import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';

export const metadata = {
  title: 'Productos de crédito | Capitalta'
};

const productos = [
  {
    key: 'simple',
    title: 'Crédito Simple',
    resumen: 'Un solo desembolso para impulsar proyectos específicos o capital de trabajo.',
    monto: '$30,000 - $10,000,000 MXN',
    plazo: '3 a 60 meses',
    perfil: 'Personas físicas con actividad empresarial y empresas que requieren liquidez puntual.',
    href: '/calculadoras/calculadora-simple'
  },
  {
    key: 'empresarial',
    title: 'Crédito Empresarial',
    resumen: 'Estructuras de financiamiento a medida para crecimiento, expansión o refinanciamientos.',
    monto: '$500,000 - $50,000,000 MXN',
    plazo: '12 a 120 meses',
    perfil: 'Empresas con necesidades de inversión de mediano y largo plazo.',
    href: '/calculadoras/calculadora-empresarial'
  },
  {
    key: 'revolvente',
    title: 'Crédito Revolvente',
    resumen: 'Línea de crédito renovable para acompañar el ciclo operativo de tu negocio.',
    monto: '$300,000 - $50,000,000 MXN',
    plazo: 'Línea renovable con revisiones periódicas',
    perfil: 'Empresas con requerimientos constantes de capital de trabajo.',
    href: '/calculadoras/calculadora-revolvente'
  },
  {
    key: 'venta-key',
    title: 'Crédito Venta Key',
    resumen: 'Liquidez a partir de tu inmueble, manteniendo claridad en condiciones y plazos.',
    monto: '30% - 40% del valor del inmueble',
    plazo: 'Plazos flexibles según el proyecto',
    perfil: 'Personas y empresas con activos inmobiliarios que buscan capital para nuevos proyectos.',
    href: '/calculadoras/calculadora-venta-key'
  }
];

export default function ProductosPage() {
  return (
    <>
      <SectionHero heading="Productos de crédito Capitalta" search={false} offer />
      <ContainerWrapper>
        <Stack sx={{ gap: 4, py: { xs: 4, sm: 6 } }}>
          <Stack sx={{ gap: 1.5, maxWidth: 720 }}>
            <Typography variant="h3">Elige el crédito que mejor se adapta a tu proyecto</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Capitalta diseña estructuras de financiamiento claras y responsables para cada etapa de crecimiento. Revisa las
              características de cada producto y utiliza nuestras calculadoras para estimar pagos y plazos.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {productos.map((producto) => (
              <Grid item xs={12} md={6} key={producto.key}>
                <Box
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    bgcolor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5
                  }}
                >
                  <Stack sx={{ gap: 1 }}>
                    <Typography variant="h5">{producto.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {producto.resumen}
                    </Typography>
                  </Stack>

                  <Stack sx={{ gap: 1.25 }}>
                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        Monto aproximado
                      </Typography>
                      <Typography variant="body1">{producto.monto}</Typography>
                    </Stack>
                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        Plazo de referencia
                      </Typography>
                      <Typography variant="body1">{producto.plazo}</Typography>
                    </Stack>
                    <Stack sx={{ gap: 0.5 }}>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        Perfil recomendado
                      </Typography>
                      <Typography variant="body2">{producto.perfil}</Typography>
                    </Stack>
                  </Stack>

                  <Stack direction="row" sx={{ gap: 1.5, mt: 'auto' }}>
                    <Button variant="contained" color="primary" href={producto.href}>
                      Ver calculadora
                    </Button>
                    <Button variant="outlined" color="primary" href="/auth/registro">
                      Solicitar este crédito
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </ContainerWrapper>
    </>
  );
}

