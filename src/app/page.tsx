'use client';

import Hero from '@/compoents/hero';
import OurSpectrum from '@/compoents/our-spectrum';
import Services from '@/compoents/services';
import AnimatedSection from '@/compoents/ui/animate-section';
import ScrollToHash from '@/compoents/ui/scroll-to-hash';
import WhoWeAre from '@/compoents/who-we-are';

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <Hero />

      <AnimatedSection id='our-spectrum'>
        <OurSpectrum />
      </AnimatedSection>
      <AnimatedSection id='services'>
        <Services />
      </AnimatedSection>
      <AnimatedSection id='who-we-are'>
        <WhoWeAre />
      </AnimatedSection>
    </>
  );
}
