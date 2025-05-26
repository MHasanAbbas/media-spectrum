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
    <Box overflow='hidden' boxShadow='lg' position='relative'>
      <Container maxW='7xl' py={12}>
        <SimpleGrid columns={{ base: 2, md: 2 }} gap={10}>
          <GridItem spaceY={5}>
            <Image
              src='/common/imgs/cta-picture.png'
              alt='Spectrum Media Team'
              objectFit='cover'
              height='60'
              width='100%'
            />
          </GridItem>
          <GridItem spaceY={5}>
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
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CallToAction;
