import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Heading,
  GridItem,
  Flex,
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

const Services = () => {
  const cards = [
    {
      icon: FaGlobe,
      title: 'Media Planning & Buying',
      description:
        'Customised strategies across TV, digital, social media, press, radio, events, bloggers, and influencers to ensure your message reaches the right audience at the right time.',
    },
    {
      icon: FaLightbulb,
      title: 'Collaborations with Media Agencies',
      description:
        'We work closely with leading media agencies to plan and execute seamless, high-impact campaigns that align with your brand goals.',
    },
    {
      icon: FaShareAlt,
      title: 'Influencer & Event Management',
      description:
        'Connecting your brand with influential figures and organizing memorable events that amplify your message authentically.',
    },
    {
      icon: FaUsers,
      title: 'Real-Time Campaign Insights',
      description:
        'Providing clients with transparent dashboards that offer live updates on media plans, bookings, and performance for full control and visibility.',
    },
  ];

  interface SpectrumCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    index: number;
  }

  const SpectrumCard: React.FC<SpectrumCardProps> = ({
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
      BAR_COLORS.default,
    ];
    const cardColor = colors[index % colors.length];

    const bgColor = 'white';

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
          <Heading as='h3' size='md' color={cardColor} transition='colors 0.3s'>
            {title}
          </Heading>

          <Text lineHeight='tall'>{description}</Text>
        </VStack>
      </Box>
    );
  };

  return (
    <Container fluid position='relative' zIndex={1} textAlign='left' py={10}>
      <Box borderRadius='xl' px={{ base: 4, md: '7em' }} mb={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <GridItem colSpan={{ base: 1, md: 2 }} mb={10} textAlign='left'>
            <Heading size={{ base: '3xl', md: '5xl' }} color='primary'>
              Services
              <Box mt={5}>
                <ColorBars />
              </Box>
            </Heading>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight='medium'
              mt={6}
            >
              At Spectrum Media, we offer a full suite of services to help your
              brand engage multicultural audiences with precision and
              authenticity.
            </Text>
          </GridItem>

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

export default Services;
