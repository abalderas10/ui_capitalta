// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Soluciones de crédito hechas para tu crecimiento
        </Typography>
        <Chip
          label="Capitalta"
          slotProps={{ label: { sx: { px: 1.5, typography: 'caption', color: 'primary.main' } } }}
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75 }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/shared/celebration.gif"
              sx={{ width: 16, height: 16, pl: 0.5 }}
              alt="capitalta"
              loading="lazy"
            />
          }
        />
      </>
    )
  },
  headLine: 'Tu crecimiento no se detiene. Nuestro apoyo tampoco.',
  captionLine: 'Soluciones financieras ágiles y flexibles para personas y negocios en México.',
  primaryBtn: { children: 'Solicitar crédito ahora', href: '/auth/registro' },
  // TODO: Replace with Capitalta video when available
  videoSrc: '', // Previously: Capitalta-intro.mp4
  videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png',
  listData: []
};
