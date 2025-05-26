import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Heading,
  GridItem,
  Flex,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { FaGlobe, FaLightbulb, FaShareAlt, FaUsers } from 'react-icons/fa';
import { useState } from 'react';

const BAR_COLORS = {
  accent: '#1D63AF', // Royal blue
  secondary: '#158743', // Deep green (updated to match your provided green)
  primary: '#E34234', // Vermilion
  default: '#3A393B', // Black
};

const ColorBars = () => {
  return (
    <Flex w='20%' h='14px'>
      {Object.values(BAR_COLORS).map((hex, i) => (
        <Box key={i} flex='1' bg={hex} />
      ))}
    </Flex>
  );
};

const OurSpectrum = () => {
  const cards = [
    {
      icon: FaGlobe,
      title: 'Connecting Brands to Communities That Truly Matter',
      description:
        'We build meaningful connections by reflecting the languages, values, and traditions of diverse cultural groups. Our campaigns are rooted in authenticity and crafted to resonate deeply.',
    },
    {
      icon: FaLightbulb,
      title: 'Culturally Savvy Strategy',
      description:
        'With 35+ years of experience, we go beyond demographics to engage with faith, heritage, and identity. Our strategies are tailored to speak directly to people with cultural nuance and integrity.',
    },
    {
      icon: FaShareAlt,
      title: 'Omnichannel Media Mastery',
      description:
        'We co-create with influencers and grassroots media to ensure every campaign feels local and authentic. Transparent dashboards provide real-time performance insights and measurable impact.',
    },
    {
      icon: FaUsers,
      title: 'Community-Centric Collaborations',
      description:
        'We co-create with influencers and grassroots media to ensure every campaign feels local and authentic. Transparent dashboards provide real-time performance insights and measurable impact.',
    },
  ];

  interface SpectrumCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    index: number;
  }

  const SpectrumCard: React.FC<SpectrumCardProps> = ({
    icon,
    title,
    description,
    index,
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Alternate colors between primary, secondary, accent
    const colors = [
      BAR_COLORS.primary,
      BAR_COLORS.secondary,
      BAR_COLORS.accent,
      BAR_COLORS.primary,
    ];
    const cardColor = colors[index % colors.length];
    const hoverColor = {
      [BAR_COLORS.primary]: '#d13428',
      [BAR_COLORS.secondary]: '#107035',
      [BAR_COLORS.accent]: '#165293',
    }[cardColor];

    const bgColor = 'white';
    const textColor = 'gray.600';

    return (
      <Box
        borderRadius='xl'
        overflow='hidden'
        boxShadow='lg'
        bg={bgColor}
        borderTop='5px solid'
        borderTopColor={cardColor}
        transition='all 0.3s'
        transform={isHovered ? 'scale(1.05)' : 'scale(1)'}
        _hover={{ boxShadow: '2xl' }}
        height='full'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <VStack gap={4} p={3} height='full' align='flex-start'>
          <Flex
            w='16'
            h='16'
            rounded='full'
            bg={isHovered ? hoverColor : cardColor}
            color='white'
            alignItems='center'
            justifyContent='center'
            transition='all 0.3s'
            transform={isHovered ? 'scale(1.1)' : 'scale(1)'}
          >
            <Icon as={icon} boxSize='10' />
          </Flex>

          <Heading as='h3' size='md' color={cardColor} transition='colors 0.3s'>
            {title}
          </Heading>

          <Text color={textColor} lineHeight='tall'>
            {description}
          </Text>
        </VStack>
      </Box>
    );
  };

  return (
    <Container
      fluid
      position='relative'
      zIndex={1}
      textAlign='left'
      bg='secondary'
      color='white'
      py={10}
    >
      <GridItem
        colSpan={2}
        mb={10}
        textAlign='left'
        px={{ base: 4, md: '7em' }}
      >
        <Heading size={{ base: '3xl', md: '5xl' }} color='white'>
          Our Spectrum
          <Box mt={5}>
            <ColorBars />
          </Box>
        </Heading>

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight='medium'
          mt={6}
          // maxW='3xl'
        >
          We empower brands to thrive by delivering inclusive, cross-cultural
          media strategies that connect authentically, resonate deeply, and
          drive real impact across every community.
        </Text>
      </GridItem>

      <Box borderRadius='xl' px={{ base: 4, md: '7em' }} mb={10}>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={6}>
          {cards.map((card, index) => (
            <SpectrumCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default OurSpectrum;
