'use client';

import Hero from '@/compoents/hero';
import OurSpectrum from '@/compoents/our-spectrum';
import { Separator } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Hero />
      <Separator mx='40' />
      <OurSpectrum />
    </>
  );
}
