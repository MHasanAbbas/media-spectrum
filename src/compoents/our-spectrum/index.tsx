import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Heading,
  GridItem,
  Flex,
  Card,
} from '@chakra-ui/react';

const BAR_COLORS = {
  accent: '#1D63AF', // Royal blue
  secondary: '#126c36', // Deep green
  primary: '#E34234', // Vermilion
  default: '#3A393B', // Black
};

const ColorBars: React.FC = () => {
  return (
    <Flex w='20%' h='14px'>
      {Object.values(BAR_COLORS).map((hex, i) => (
        <Box key={i} flex='1' bg={hex} />
      ))}
    </Flex>
  );
};

const OurSpectrum = () => {
  return (
    <Container
      maxW='7xl'
      // bgImage={'/common/imgs/diversity.png'}
      position='relative'
      zIndex={1}
      textAlign='left'
      color='blackAlpha.800'
    >
      <GridItem colSpan={2} spaceY={10} paddingY={5} textAlign='left'>
        <Heading size='6xl' color='primary'>
          Our Spectrum
          <Box mt={5}>
            <ColorBars />
          </Box>
        </Heading>

        <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='medium' mb={10}>
          We empower brands to thrive by delivering inclusive, cross-cultural
          media strategies that connect authentically, resonate deeply, and
          drive real impact across every community.
        </Text>
      </GridItem>

      <SimpleGrid columns={{ base: 1, md: 2 }} pb={10} gapX={5} gapY={5}>
        <Card.Root width='full'>
          <Card.Body gap='2'>
            <Card.Title mt='2'>
              Connecting Brands to Communities That Truly Matter
            </Card.Title>
            <Card.Description>
              At Spectrum Media, we don’t just reach audiences — we forge
              meaningful connections. We specialize in communication across the
              full spectrum of cultures, rooted in authenticity, nuance, and
              impact. Our campaigns are thoughtfully designed to reflect the
              languages, traditions, and values spanning the broad continuum of
              cultural identities everywhere.
            </Card.Description>
          </Card.Body>
        </Card.Root>
        <Card.Root width='full'>
          <Card.Body gap='2'>
            <Card.Title mt='2'>Culturally Savvy Strategy</Card.Title>
            <Card.Description>
              With over 35 years of expertise, we craft media plans that go
              beyond simple demographics. We dive into language, faith,
              heritage, and core beliefs — empowering brands to speak to
              individuals, not just segments. Whether through multi-lingual
              storytelling or culturally attuned narratives, our strategies are
              tailored to resonate with depth and integrity across the diverse
              range of cultural expressions.
            </Card.Description>
          </Card.Body>
        </Card.Root>
        <Card.Root width='full'>
          <Card.Body gap='2'>
            <Card.Title mt='2'>Omnichannel Media Mastery</Card.Title>
            <Card.Description>
              Your audience inhabits many spaces — so do we. From TV, digital,
              social media, and radio to live events, bloggers, press, and
              influencers, our expansive multi-platform approach ensures your
              message lands where your audience is most engaged. Every campaign
              is customized to maximize reach, relevance, and engagement across
              the entire spectrum of platforms.
            </Card.Description>
          </Card.Body>
        </Card.Root>
        <Card.Root width='full'>
          <Card.Body gap='2'>
            <Card.Title mt='2'>Community-Centric Collaborations</Card.Title>
            <Card.Description>
              We partner closely with influencers, creatives, and niche
              community media to deliver authentic campaigns with tangible
              impact. Our transparent client dashboards offer real-time insights
              into campaign performance. From strategic alliances to
              cost-effective content creation, we design campaigns by the
              community, for the community — always delivering measurable
              results across the full range of cultural landscapes.
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>
    </Container>
  );
};
export default OurSpectrum;
