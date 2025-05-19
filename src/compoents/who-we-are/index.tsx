import {
  Container,
  Text,
  SimpleGrid,
  Heading,
  GridItem,
  Image,
  Button,
} from '@chakra-ui/react';

const WhoWeAre = () => {
  return (
    <Container
      bgImage={'/common/imgs/diversity.png'}
      bg='secondary'
      mb={10}
      borderRadius='xl'
      textAlign='left'
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} pb={10}>
        <GridItem marginX={20} marginY={10}>
          <Image
            src='/about/who-we-are.png'
            alt='Spectrum Media Sales mug'
            width='90%'
          />
        </GridItem>
        <GridItem my='auto'>
          <Heading size={{ base: '3xl', md: '4xl' }} color='white'>
            Who We Are
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: '2xl' }}
            color='white'
            fontWeight='normal'
            mt={5}
            textJustify={'middle'}
          >
            For more than a century, we&#39;ve grown into a diverse,
            cross-cultural new-media agency as dynamic as the world we live in.
            Our passion is forging meaningful connections between brands and the
            communities that matter bringing their stories to audiences
            everywhere.
          </Text>
          <Button
            mt={5}
            bg='primary'
            color='white'
            size='lg'
            _hover={{ bg: 'primaryHover' }}
          >
            Our Story
          </Button>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
export default WhoWeAre;
