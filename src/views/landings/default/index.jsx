'use client';

import { useEffect, useState } from 'react';

// @third-party
import axios from 'axios';

// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { Feature15, Feature20, FeatureProducts } from '@/blocks/feature';
import { Process1 } from '@/blocks/process';
import { Hero17 } from '@/blocks/hero';
import ContainerWrapper from '@/components/ContainerWrapper';
import LazySection from '@/components/LazySection';

// @data
import {
  metrics,
  faq,
  aboutCapitalta,
  feature20,
  hero
} from './data';

/***************************  PAGE - MAIN  ***************************/

export default function Main() {
  const [monto, setMonto] = useState(250000);
  const [plazo, setPlazo] = useState(24);
  const [tipoCredito, setTipoCredito] = useState('simple');
  const [tasaAnual, setTasaAnual] = useState(18);

  const tasaMensual = tasaAnual / 12 / 100;
  const pagoMensual =
    tasaMensual > 0 && plazo > 0
      ? (monto * tasaMensual * Math.pow(1 + tasaMensual, plazo)) / (Math.pow(1 + tasaMensual, plazo) - 1)
      : 0;
  const totalPagar = pagoMensual * plazo;
  const interesTotal = totalPagar - monto;

  const capitaltaProcess = {
    heading: 'Proceso operativo Capitalta en 7 pasos',
    caption:
      'Desde la solicitud inicial hasta el seguimiento posterior al desembolso, te acompañamos con un flujo claro, incluyendo la cita presencial para firma y entrega de garantía.',
    defaultExpanded: 'panel0',
    cards: [
      {
        title: '1. Solicitud inicial',
        description: 'Inicias tu proceso de crédito compartiendo datos básicos y el objetivo del financiamiento.',
        icon: 'tabler-file-plus',
        list: [
          { primary: 'Llenado de solicitud y definición del tipo de crédito' },
          { primary: 'Identificación del monto y plazo que estás buscando' }
        ]
      },
      {
        title: '2. Integración de expediente',
        description: 'Reunimos la documentación necesaria para analizar tu operación con detalle.',
        icon: 'tabler-folder',
        list: [
          { primary: 'Documentación personal, financiera y legal del solicitante' },
          { primary: 'Validación de que el expediente esté completo y actualizado' }
        ]
      },
      {
        title: '3. Avalúo y verificación de garantía',
        description: 'Evaluamos el inmueble o garantía ofrecida para respaldar el crédito.',
        icon: 'tabler-building-skyscraper',
        list: [
          { primary: 'Coordinación de avalúo profesional de la garantía' },
          { primary: 'Revisión de situación legal y valor de referencia del inmueble' }
        ]
      },
      {
        title: '4. Revisión y aprobación por comité de crédito',
        description: 'Nuestro comité analiza la operación para tomar una decisión informada.',
        icon: 'tabler-checkup-list',
        list: [
          { primary: 'Análisis de capacidad de pago y riesgos de la operación' },
          { primary: 'Emisión de resolución por parte del comité de crédito' }
        ]
      },
      {
        title: '5. Formalización notarial',
        description: 'Preparamos la documentación legal y coordinamos la firma del crédito.',
        icon: 'tabler-signature',
        list: [
          { primary: 'Elaboración y revisión de contratos y escrituras correspondientes' },
          { primary: 'Generación de cita presencial para firma y entrega de garantía' }
        ]
      },
      {
        title: '6. Fondeo o disposición de crédito',
        description: 'Liberamos los recursos conforme a lo acordado para que puedas ejecutar tu plan.',
        icon: 'tabler-credit-card',
        list: [
          { primary: 'Verificación de condiciones previas al fondeo' },
          { primary: 'Confirmación de la recepción de los recursos por parte del cliente' }
        ]
      },
      {
        title: '7. Seguimiento y cobranza',
        description: 'Te acompañamos durante la vida del crédito y damos seguimiento a tus pagos.',
        icon: 'tabler-handshake',
        list: [
          { primary: 'Monitoreo de pagos y desempeño del crédito' },
          { primary: 'Posibilidad de reestructuras o nuevos créditos según tus necesidades' }
        ]
      }
    ]
  };

  return (
    <>
      <Hero17 {...hero} />
      <FeatureProducts {...feature20} />
      <Feature15 {...aboutCapitalta} />
      <ContainerWrapper>
        <Box
          sx={{
            mt: { xs: 4, sm: 6 },
            mb: { xs: 4, sm: 6 }
          }}
        >
          <Stack sx={{ gap: 3 }}>
            <Stack sx={{ textAlign: 'center', gap: 1 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 1 }}>
                Nuestros valores
              </Typography>
              <Typography variant="h3">Fundamentos que guían cada crédito</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto' }}>
                En Capitalta ponemos por delante la transparencia, la responsabilidad y la cercanía para construir relaciones de largo plazo.
              </Typography>
            </Stack>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    bgcolor: 'background.paper',
                    height: '100%'
                  }}
                >
                  <Stack sx={{ gap: 1 }}>
                    <Typography variant="h6">Honestidad</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Transparencia total en condiciones, costos y riesgos en cada operación.
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    bgcolor: 'background.paper',
                    height: '100%'
                  }}
                >
                  <Stack sx={{ gap: 1 }}>
                    <Typography variant="h6">Responsabilidad</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Diseñamos créditos sostenibles, alineados a la capacidad de pago de cada cliente.
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    bgcolor: 'background.paper',
                    height: '100%'
                  }}
                >
                  <Stack sx={{ gap: 1 }}>
                    <Typography variant="h6">Lealtad</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Construimos relaciones de confianza, acompañando a nuestros clientes en cada etapa.
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    bgcolor: 'background.paper',
                    height: '100%'
                  }}
                >
                  <Stack sx={{ gap: 1 }}>
                    <Typography variant="h6">Respeto</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Escuchamos cada historia y tratamos a todas las personas con empatía y equidad.
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    bgcolor: 'background.paper',
                    height: '100%'
                  }}
                >
                  <Stack sx={{ gap: 1 }}>
                    <Typography variant="h6">Trabajo en equipo</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Colaboramos con clientes, aliados e inversionistas para lograr mejores resultados.
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </ContainerWrapper>
      <ContainerWrapper>
        <Box
          sx={{
            mt: { xs: 6, sm: 8 },
            mb: { xs: 6, sm: 8 },
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            bgcolor: 'primary.lighter',
            border: '1px solid',
            borderColor: 'primary.light'
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack spacing={2.5}>
                <Typography variant="h3">Calculadora rápida de crédito</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Ingresa un monto y plazo estimado para conocer un pago mensual aproximado. Los resultados son informativos y pueden variar según
                  análisis de Capitalta.
                </Typography>
                <TextField
                  label="Monto solicitado (MXN)"
                  type="number"
                  value={monto}
                  onChange={(event) => setMonto(Number(event.target.value) || 0)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                  }}
                />
                <TextField
                  label="Plazo en meses"
                  type="number"
                  value={plazo}
                  onChange={(event) => setPlazo(Number(event.target.value) || 0)}
                />
                <TextField select label="Tipo de crédito" value={tipoCredito} onChange={(event) => setTipoCredito(event.target.value)}>
                  <MenuItem value="simple">Crédito Simple</MenuItem>
                  <MenuItem value="empresarial">Crédito Empresarial</MenuItem>
                  <MenuItem value="revolvente">Crédito Revolvente</MenuItem>
                  <MenuItem value="venta-key">Crédito Venta Key</MenuItem>
                </TextField>
                <TextField
                  label="Tasa anual estimada (%)"
                  type="number"
                  value={tasaAnual}
                  onChange={(event) => setTasaAnual(Number(event.target.value) || 0)}
                />
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="primary" href={`/calculadoras/calculadora-${tipoCredito}`}>
                    Ver calculadora completa
                  </Button>
                  <Button variant="outlined" color="primary" href="/auth/registro">
                    Solicitar este crédito
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography variant="h5">Resultados estimados</Typography>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'grey.200'
                  }}
                >
                  <Stack spacing={1.5}>
                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        Pago mensual estimado
                      </Typography>
                      <Typography variant="h5">
                        {pagoMensual > 0 ? pagoMensual.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }) : '--'}
                      </Typography>
                    </Stack>
                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        Interés total estimado
                      </Typography>
                      <Typography variant="body1">
                        {interesTotal > 0 ? interesTotal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }) : '--'}
                      </Typography>
                    </Stack>
                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        Monto total a pagar
                      </Typography>
                      <Typography variant="body1">
                        {totalPagar > 0 ? totalPagar.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }) : '--'}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </ContainerWrapper>

      <Process1 {...capitaltaProcess} />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/metrics').then((module) => ({ default: module.Metrics5 })), props: metrics }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq6 })), props: faq }
        ]}
        offset="200px"
      />
    </>
  );
}

