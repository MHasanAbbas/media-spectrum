'use client';

import Hero from '@/compoents/hero';
import OurSpectrum from '@/compoents/our-spectrum';
import Services from '@/compoents/services';
import ScrollToHash from '@/compoents/ui';
import WhoWeAre from '@/compoents/who-we-are';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <Hero />
      <Box id='our-spectrum'>
        <OurSpectrum />
      </Box>
      <Box id='services'>
        <Services />
      </Box>
      <WhoWeAre />
    </>
  );
}
