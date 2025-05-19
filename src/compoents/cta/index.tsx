import {
  Box,
  Container,
  Text,
  Heading,
  VStack,
  HStack,
  Button,
  Stack,
  Input,
} from '@chakra-ui/react';

const CallToAction = () => {
  return (
    <Box
      //   bg='accent'
      //   backgroundImage='linear-gradient(135deg, rgba(29, 99, 175, 0.95) 0%, rgba(29, 99, 175, 0.8) 100%)'
      borderRadius='xl'
      overflow='hidden'
      boxShadow='lg'
      position='relative'
    >
      <Container maxW='7xl' py={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          gap={8}
          align={{ base: 'center', md: 'center' }}
          justify='space-between'
        >
          <VStack gap={4} align='flex-start' maxW={{ base: 'full', md: '50%' }}>
            <Heading
              color='primary'
              fontSize={{ base: '2xl', md: '3xl' }}
              lineHeight='1.2'
            >
              Ready to Connect with Your Communities?
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }}>
              Start creating authentic connections with audiences across the
              cultural spectrum. Our team is ready to craft a customized
              strategy for your brand.
            </Text>
          </VStack>

          <VStack gap={4} align='stretch' w={{ base: 'full', md: 'auto' }}>
            <HStack>
              <Input
                placeholder='Enter your email'
                bg='white'
                color='gray.700'
                // border='none'
                _placeholder={{ color: 'gray.400' }}
                size='lg'
                rounded='md'
              />
              <Button
                bg={'primary'}
                color='white'
                size='lg'
                px={6}
                fontWeight='bold'
                rounded='md'
                _hover={{ bg: '#d13428' }}
              >
                Get Started
              </Button>
            </HStack>
            <Text
              fontSize='sm'
              //   color='white'
              opacity={0.8}
              textAlign={{ base: 'center', md: 'left' }}
            >
              Join over 500+ brands connecting authentically with diverse
              audiences.
            </Text>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToAction;
