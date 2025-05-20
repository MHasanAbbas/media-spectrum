'use client';

import CallToAction from '@/compoents/cta';
import Hero from '@/compoents/hero';
import OurSpectrum from '@/compoents/our-spectrum';
import Services from '@/compoents/services';
import WhoWeAre from '@/compoents/who-we-are';
import { Separator } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Hero />
      <Separator mx='40' />
      <OurSpectrum />
      <Services />
      <WhoWeAre />
      <CallToAction />
    </>
  );
}
