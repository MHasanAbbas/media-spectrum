import {
  Box,
  Container,
  Text,
  Heading,
  Button,
  Image,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const CallToAction = () => {
  const router = useRouter();
  return (
    <Box borderRadius='xl' overflow='hidden' boxShadow='lg' position='relative'>
      <Container maxW='7xl' py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          <GridItem spaceY={5}>
            <Image
              src='/common/imgs/cta-picture.png'
              alt='Spectrum Media Team'
              objectFit='cover'
              height='60'
              width='100%'
            />

            <Heading size='2xl'>Partner with us</Heading>
            <Text>
              Tell us about your project, and let&#39;s build the future
              together.
            </Text>
            <Button
              bg='primary'
              color='white'
              size='lg'
              _hover={{ bg: 'primaryHover' }}
              onClick={() => {
                router.push('/contact-us');
              }}
            >
              Contact us
            </Button>
          </GridItem>
          <GridItem spaceY={5}>
            <Image
              src='/common/imgs/cta-2.png'
              alt='Spectrum Media Team'
              objectFit='cover'
              height='60'
              width='100%'
            />

            <Heading size='2xl'>Lead and grow</Heading>
            <Text>
              Imagine a career as unique as you are. With us, it&#39;s possible.
            </Text>
            <Button
              bg='primary'
              color='white'
              size='lg'
              _hover={{ bg: 'primaryHover' }}
              onClick={() => {
                router.push('/contact-us');
              }}
            >
              Join us
            </Button>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CallToAction;
