import React, { FC } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  HStack,
} from '@chakra-ui/react';
// import { FiTarget, FiBarChart2, FiTrendingUp } from 'react-icons/fi';

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
    bgGradient='linear(to-r, #1D63AF, #E34234)'
    color='white'
    py={{ base: 20, md: 32 }}
    overflow='hidden'
  >
    <Container
      maxW='5xl'
      bgImage={'/common/imgs/diversity.png'}
      position='relative'
      zIndex={1}
      textAlign='center'
      color='blackAlpha.800'
    >
      <Flex justify='center' align='center' mb={6}>
        <Heading
          as='h1'
          fontSize={{ base: '3xl', md: '5xl' }}
          fontFamily='Montserrat, sans-serif'
          fontWeight='extrabold'
          letterSpacing='tight'
        >
          Amplify Your Reach
          <Text as='span' display='block' mt={7}>
            Across Every Channel
          </Text>
        </Heading>
      </Flex>
      {/* Subheading */}
      <Text
        fontSize={{ base: 'md', md: 'xl' }}
        fontFamily='Open Sans, sans-serif'
        mb={10}
        color='blackAlpha.800'
        maxW='3xl'
        mx='auto'
      >
        At Media Spectrum Sales, we craft data-driven ad strategies that connect
        brands to audiences — from digital to broadcast and beyond.
      </Text>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        gap={6}
        justify='center'
        mb={12}
      >
        <Button
          bg='#E34234'
          _hover={{ bg: '#126c36' }}
          size='lg'
          fontFamily='Montserrat, sans-serif'
        >
          Get Started
        </Button>
      </Stack>
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
