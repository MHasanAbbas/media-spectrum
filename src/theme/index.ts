import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { tokens } from './token';

const theme = defineConfig({
  theme: {
    breakpoints: {
      base: '0rem', // 0px (mobile-first)
      sm: '30rem', // 480px (small mobile devices)
      md: '40rem', // 640px (tablets, small devices)
      lg: '64rem', // 1024px (medium to small laptops)
      xl: '80rem', // 1280px (large laptops, 15.6" screens)
      '2xl': '96rem', // 1536px (large desktop screens)
      '3xl': '120rem', // 1920px (extra-wide, ultra-high resolution screens)
    },
    tokens,
  },
});

export default createSystem(defaultConfig, theme);
