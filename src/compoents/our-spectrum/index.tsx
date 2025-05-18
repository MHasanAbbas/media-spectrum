import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Heading,
  GridItem,
  Flex,
} from '@chakra-ui/react';

const BAR_COLORS = {
  primary: '#E34234', // Vermilion
  secondary: '#126c36', // Deep green
  accent: '#1D63AF', // Royal blue
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
      bgImage={'/common/imgs/diversity.png'}
      position='relative'
      zIndex={1}
      textAlign='left'
      color='blackAlpha.800'
    >
      <SimpleGrid columns={{ base: 1, md: 2 }}>
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
      </SimpleGrid>
    </Container>
  );
};
export default OurSpectrum;
