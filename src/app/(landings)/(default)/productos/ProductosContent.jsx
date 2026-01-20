'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';

const productos = [
  {
    key: 'simple',
    title: 'Crédito Simple',
    resumen: 'Un solo desembolso para impulsar proyectos específicos o capital de trabajo.',
    monto: '$30,000 - $10,000,000 MXN',
    plazo: '3 a 60 meses',
    href: '/calculadoras/calculadora-simple',
    productoHref: '/productos/credito-simple'
  },
  {
    key: 'empresarial',
    title: 'Crédito Empresarial',
    resumen: 'Estructuras de financiamiento a medida para crecimiento, expansión o refinanciamientos.',
    monto: '$500,000 - $50,000,000 MXN',
    plazo: '12 a 120 meses',
    href: '/calculadoras/calculadora-empresarial',
    productoHref: '/productos/credito-empresarial'
  },
  {
    key: 'revolvente',
    title: 'Crédito Revolvente',
    resumen: 'Línea de crédito renovable para acompañar el ciclo operativo de tu negocio.',
    monto: '$300,000 - $50,000,000 MXN',
    plazo: 'Línea renovable con revisiones periódicas',
    href: '/calculadoras/calculadora-revolvente',
    productoHref: '/productos/credito-revolvente'
  },
  {
    key: 'venta-key',
    title: 'Crédito Venta Key',
    resumen: 'Liquidez a partir de tu inmueble, manteniendo claridad en condiciones y plazos.',
    monto: '30% - 40% del valor del inmueble',
    plazo: 'Plazos flexibles según el proyecto',
    href: '/calculadoras/calculadora-venta-key',
    productoHref: '/productos/credito-venta-key'
  }
];

export default function ProductosContent() {
  return (
    <>
      <SectionHero heading="Productos de crédito Capitalta" search={false} offer />
      <ContainerWrapper>
        <Stack sx={{ gap: 4, py: { xs: 4, sm: 6 } }}>
          <Stack sx={{ gap: 1.5, maxWidth: 720, mx: 'auto', textAlign: 'center' }}>
            <Typography variant="h3">Elige el crédito que mejor se adapta a tu proyecto</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Capitalta diseña estructuras de financiamiento claras y responsables para cada etapa de crecimiento. Revisa las
              características de cada producto y utiliza nuestras calculadoras para estimar pagos y plazos.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {productos.map((producto) => (
              <Grid size={{ xs: 12, md: 6 }} key={producto.key}>
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
                        Monto de referencia
                      </Typography>
                      <Typography variant="body1">{producto.monto}</Typography>
                    </Stack>
                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        Plazo de referencia
                      </Typography>
                      <Typography variant="body1">{producto.plazo}</Typography>
                    </Stack>
                  </Stack>

                  <Stack direction="row" sx={{ gap: 1.5, mt: 'auto' }}>
                    <Button variant="contained" color="primary" href={producto.href}>
                      Abrir calculadora
                    </Button>
                    <Button variant="outlined" color="primary" href={producto.productoHref}>
                      Ver detalles
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
