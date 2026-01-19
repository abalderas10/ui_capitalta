// @mui
import Typography from '@mui/material/Typography';

/***************************  SMALL HERO - HEADLINE  ***************************/

function HeadlineTextAbout() {
  return <Typography variant="h2">Our Passionate Team is here to Deliver Value to You</Typography>;
}

function HeadlineText() {
  return <Typography variant="h2">Our Full Range of Courses</Typography>;
}

function HeadlineTextBlog() {
  return <Typography variant="h2">Explore our knowledge hub</Typography>;
}

/***************************  SMALL-HERO - DATA  ***************************/

export const aboutSmallHero1 = {
  chip: {
    label: 'About us'
  },
  captionLine: `Discover a world of knowledge, connect with expert instructors, and achieve your goals
 with our live, interactive learning experiences.`,
  headLine: <HeadlineTextAbout />
};

export const smallHero1 = {
  chip: {
    label: 'Our All Courses'
  },
  captionLine: `A world of learning at your fingertips. Discover courses designed 
to inspire and empower.`,
  headLine: <HeadlineText />
};

export const blogSmallHero1 = {
  chip: {
    label: 'Blog'
  },
  captionLine: `A treasure trove of insights and information. Dive in to learn, grow, and innovate.`,
  headLine: <HeadlineTextBlog />
};
