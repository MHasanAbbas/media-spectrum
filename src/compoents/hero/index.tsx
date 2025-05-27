import React, { FC } from 'react';
import { Box, Container, Flex, Heading, Text, HStack } from '@chakra-ui/react';

interface Feature {
  title: string;
  Icon: React.ElementType;
}

const features: Feature[] = [
  // { title: 'Media Planning', Icon: FiTarget },
  // { title: 'Programmatic Buying', Icon: FiBarChart2 },
  // { title: 'Performance Analytics', Icon: FiTrendingUp },
];

const Hero: FC = () => (
  <Box
    position='relative'
    color='white'
    py={{ base: '40%', md: '16.3%' }}
    overflow='hidden'
  >
    {/* Video background */}
    <Box position='absolute' inset={0} zIndex={0} overflow='hidden'>
      <video
        src='/hero-video.mp4' // ⬅️ place your video here
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
          display: 'block',
        }}
      />
      {/* Optional overlay for better contrast with text */}
      <Box position='absolute' inset={0} bg='blackAlpha.600' />
    </Box>

    {/* Content */}
    <Container
      maxW='7xl'
      position='relative'
      zIndex={1}
      textAlign='left'
      color='white'
    >
      <Flex align='left' mb={6}>
        <Heading
          as='h1'
          fontSize={{ base: '3xl', md: '5xl' }}
          fontFamily='Montserrat, sans-serif'
          fontWeight='extrabold'
          letterSpacing='tight'
        >
          Navigating the Future of Multicultural Communication
          {/* <Text as='span' display='block' mt={7}></Text> */}
        </Heading>
      </Flex>

      <Text
        fontSize={{ base: 'md', md: 'xl' }}
        fontFamily='Open Sans, sans-serif'
        mb={10}
        color='white'
        mx='auto'
      >
        At SMS, we understand that reaching diverse audiences in today&#39;s
        multicultural landscape can be complex and challenging. That&#39;s why
        we&#39;re here—to simplify the process and provide a breath of fresh air
        in media sales. With our extensive expertise in media planning and
        buying, we specialise in connecting brands with the diverse communities
        they seek to engage.
      </Text>

      {/* Feature Highlights */}
      <HStack gap={{ base: 8, md: 16 }} justify='center'>
        {features &&
          features.map(({ title, Icon }) => (
            <HStack key={title} gap={3} align='center'>
              <Box as={Icon} boxSize={6} />
              <Text
                fontSize='lg'
                fontWeight='semibold'
                fontFamily='Open Sans, sans-serif'
              >
                {title}
              </Text>
            </HStack>
          ))}
      </HStack>
    </Container>
  </Box>
);

export default Hero;
