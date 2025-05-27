'use client';

import CallToAction from '@/compoents/cta';
import ScrollToHash from '@/compoents/ui/scroll-to-hash';
import {
  Container,
  Text,
  SimpleGrid,
  Box,
  Heading,
  GridItem,
  Image,
} from '@chakra-ui/react';
import React, { FC } from 'react';

const AboutUsPage: FC = () => {
  return (
    <>
      <ScrollToHash />
      <Box bg='secondary'>
        <Container maxW='7xl' py={10}>
          <Heading
            px={{ base: 4, md: '0' }}
            size={{ base: '3xl', md: '7xl' }}
            color='white'
          >
            Connected. Diverse. Transformative.
          </Heading>
          <Box>
            <Heading
              textAlign='left'
              size={{ base: 'xl', md: '2xl' }}
              mt={5}
              px={4}
              color='white'
              fontWeight='semibold'
            >
              We help brands grow through inclusive, cross-cultural media that
              truly connects.
            </Heading>
          </Box>
        </Container>
      </Box>
      <Container maxW='7xl' py={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} px={5} gapX={10}>
          <GridItem colSpan={2} borderRadius='md' my={{ base: 5, md: 10 }}>
            <Heading size={{ base: '3xl', md: '2xl' }} color='primary'>
              About Us
            </Heading>
          </GridItem>
          <GridItem pb={{ base: 20, md: 5 }}>
            <Text
              fontSize='lg'
              color='black'
              fontWeight='medium'
              textJustify={'middle'}
            >
              Spectrum Media is a premier media sales agency with over 35 years
              of experience helping brands connect meaningfully with a broad
              range of audiences. <br />
              <br />
              In today’s dynamic media landscape, we help brands move from
              simply broadcasting messages to building genuine, relevant
              connections. Our mission is to empower clients with tailored media
              strategies that are thoughtful, culturally aware, and rooted in
              real-world impact. We bring deep expertise in multi-channel
              execution, covering TV, digital, social media, press, radio,
              events, bloggers, and influencers. This ensures your message
              reaches the right audience, at the right time, on the platforms
              they trust.
              <br />
              <br /> A key strength of ours is developing innovative media
              partnerships that go beyond reach — delivering campaigns that are
              both effective and efficient. We collaborate not only with
              community voices and content creators, but also with creative and
              media agencies to ensure your campaign is aligned across every
              touchpoint. Many of our campaigns are delivered in multiple
              languages to better reflect the communities they serve.
            </Text>
          </GridItem>
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            py={5}
            display={{ base: 'none', md: 'block' }}
          >
            <Image
              src='/about/about-us.png'
              alt='About Us'
              style={{
                width: '80%',
                height: '80%',
                objectFit: 'cover',
              }}
            />
          </GridItem>
        </SimpleGrid>
      </Container>
      <CallToAction />
    </>
  );
};

export default AboutUsPage;
