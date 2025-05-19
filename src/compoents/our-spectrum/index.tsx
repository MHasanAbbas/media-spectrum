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
        "At Spectrum Media, we don't just reach audiences — we forge meaningful connections. We specialize in communication across the full spectrum of cultures, rooted in authenticity, nuance, and impact. Our campaigns are thoughtfully designed to reflect the languages, traditions, and values spanning the broad continuum of cultural identities everywhere.",
    },
    {
      icon: FaLightbulb,
      title: 'Culturally Savvy Strategy',
      description:
        'With over 35 years of expertise, we craft media plans that go beyond simple demographics. We dive into language, faith, heritage, and core beliefs — empowering brands to speak to individuals, not just segments. Whether through multi-lingual storytelling or culturally attuned narratives, our strategies are tailored to resonate with depth and integrity across the diverse range of cultural expressions.',
    },
    {
      icon: FaShareAlt,
      title: 'Omnichannel Media Mastery',
      description:
        'Your audience inhabits many spaces — so do we. From TV, digital, social media, and radio to live events, bloggers, press, and influencers, our expansive multi-platform approach ensures your message lands where your audience is most engaged. Every campaign is customized to maximize reach, relevance, and engagement across the entire spectrum of platforms.',
    },
    {
      icon: FaUsers,
      title: 'Community-Centric Collaborations',
      description:
        'We partner closely with influencers, creatives, and niche community media to deliver authentic campaigns with tangible impact. Our transparent client dashboards offer real-time insights into campaign performance. From strategic alliances to cost-effective content creation, we design campaigns by the community, for the community — always delivering measurable results across the full range of cultural landscapes.',
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
        <VStack gap={4} p={6} height='full' align='flex-start'>
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
      maxW='7xl'
      position='relative'
      zIndex={1}
      textAlign='left'
      color='blackAlpha.800'
      py={8}
    >
      <GridItem colSpan={2} mb={10} textAlign='left'>
        <Heading size={{ base: '3xl', md: '5xl' }} color={BAR_COLORS.primary}>
          Our Spectrum
          <Box mt={5}>
            <ColorBars />
          </Box>
        </Heading>

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight='medium'
          mt={6}
          maxW='3xl'
        >
          We empower brands to thrive by delivering inclusive, cross-cultural
          media strategies that connect authentically, resonate deeply, and
          drive real impact across every community.
        </Text>
      </GridItem>

      <Box borderRadius='xl'>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
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
