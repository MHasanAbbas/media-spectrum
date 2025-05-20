import {
  Container,
  Text,
  SimpleGrid,
  Heading,
  GridItem,
  Image,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const WhoWeAre = () => {
  const router = useRouter();
  return (
    <Container
      bgImage={'/common/imgs/diversity.png'}
      fluid
      bgColor='default'
      textAlign='left'
    >
      <SimpleGrid maxW='7xl' columns={{ base: 1, md: 2 }} pb={10}>
        <GridItem marginX={{ base: 0, md: 20 }} marginY={10}>
          <Image
            src='/about/who-we-are.png'
            alt='Spectrum Media Sales mug'
            width={{ base: '100%', md: '90%' }}
            ml='10'
          />
        </GridItem>
        <GridItem my='auto'>
          <Heading size={{ base: '3xl', md: '4xl' }} color='white'>
            Who We Are
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: '2xl' }}
            fontWeight='normal'
            mt={5}
            color={'white'}
            textJustify={'middle'}
          >
            For more than a century, we&#39;ve grown into a diverse,
            cross-cultural media agency as dynamic as the world we live in. Our
            passion is forging meaningful connections between brands and the
            communities that matter bringing their stories to audiences
            everywhere.
          </Text>
          <Button
            mt={5}
            bg='primary'
            color='white'
            size='lg'
            _hover={{ bg: 'primaryHover' }}
            onClick={() => {
              router.push('/about');
            }}
          >
            Our Story
          </Button>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
export default WhoWeAre;
