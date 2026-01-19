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
  videoSrc: 'https://d2elhhoq00m1pj.cloudfront.net/saasable-intro.mp4',
  videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png',
  listData: [
    { image: '/assets/images/shared/react.svg', title: 'React 19' },
    { image: '/assets/images/shared/next-js.svg', title: 'Next.js' },
    { image: '/assets/images/shared/material-ui.svg', title: 'Material UI v7' },
    { image: '/assets/images/shared/typescript.svg', title: 'TypeScript' },
    { image: '/assets/images/shared/javascript.svg', title: 'JavaScript' },
    { image: '/assets/images/shared/m3.svg', title: 'Material 3' },
    { image: '/assets/images/shared/figma.svg', title: 'Figma' }
  ]
};
