'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';

// export const metadata = {
//   title: 'Calculadoras Financieras | Capitalta'
// };

const calculadoras = [
  {
    key: 'simple',
    title: 'Calculadora Crédito Simple',
    resumen: 'Simula pagos e intereses de un crédito simple con montos y plazos realistas.',
    monto: '$30,000 - $10,000,000 MXN',
    plazo: '3 a 60 meses',
    href: '/calculadoras/calculadora-simple',
    productoHref: '/productos/credito-simple'
  },
  {
    key: 'empresarial',
    title: 'Calculadora Crédito Empresarial',
    resumen: 'Proyecta un crédito empresarial para expansión, inversión o refinanciamientos.',
    monto: '$500,000 - $50,000,000 MXN',
    plazo: '12 a 120 meses',
    href: '/calculadoras/calculadora-empresarial',
    productoHref: '/productos/credito-empresarial'
  },
  {
    key: 'revolvente',
    title: 'Calculadora Crédito Revolvente',
    resumen: 'Analiza el impacto de usar distintos porcentajes de una línea revolvente.',
    monto: '$300,000 - $50,000,000 MXN',
    plazo: 'Línea renovable con revisiones periódicas',
    href: '/calculadoras/calculadora-revolvente',
    productoHref: '/productos/credito-revolvente'
  },
  {
    key: 'venta-key',
    title: 'Calculadora Crédito Venta Key',
    resumen: 'Calcula monto de crédito, comisiones e intereses a partir del valor de tu inmueble.',
    monto: '30% - 40% del valor del inmueble',
    plazo: '6 a 18 meses',
    href: '/calculadoras/calculadora-venta-key',
    productoHref: '/productos/credito-venta-key'
  }
];

export default function CalculadorasPage() {
  return (
    <>
      <SectionHero heading="Calculadoras de crédito Capitalta" search={false} offer />
      <ContainerWrapper>
        <Stack sx={{ gap: 4, py: { xs: 4, sm: 6 } }}>
          <Stack sx={{ gap: 1.5, maxWidth: 720 }}>
            <Typography variant="h3">Simula tus créditos antes de tomar decisiones</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Utiliza las calculadoras específicas para cada producto de Capitalta y revisa pagos, intereses y plazos estimados. Podrás
              descargar una cotización en PDF y compartirla con tu equipo.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {calculadoras.map((calculadora) => (
              <Grid item xs={12} md={6} key={calculadora.key}>
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
                    <Typography variant="h5">{calculadora.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {calculadora.resumen}
                    </Typography>
                  </Stack>

                  <Stack sx={{ gap: 1.25 }}>
                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        Monto de referencia
                      </Typography>
                      <Typography variant="body1">{calculadora.monto}</Typography>
                    </Stack>
                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        Plazo de referencia
                      </Typography>
                      <Typography variant="body1">{calculadora.plazo}</Typography>
                    </Stack>
                  </Stack>

                  <Stack direction="row" sx={{ gap: 1.5, mt: 'auto' }}>
                    <Button variant="contained" color="primary" href={calculadora.href}>
                      Abrir calculadora
                    </Button>
                    <Button variant="outlined" color="primary" href={calculadora.productoHref}>
                      Ver producto
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


