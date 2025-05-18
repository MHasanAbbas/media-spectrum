'use client';

import { Box, Stack, Flex, Image, Button } from '@chakra-ui/react';

import { useRouter } from 'next/navigation';
import NavigationBurger from './mobile-nav';

const TopNavigation = () => {
  const router = useRouter();
  return (
    <Box
      bg='white'
      position='sticky'
      top={0}
      alignSelf='flex-start'
      zIndex={5}
      // shadow='sm'
    >
      <Flex px={{ base: 3, md: 1 }} justify={{ base: 'space-between' }}>
        <Box
          width={{ base: 'fit-content' }}
          mx={{ base: 0, md: '10em' }}
          cursor='pointer'
          my={3}
        >
          <Image
            src='/common/imgs/alt-logo.png'
            alt='Media Spectrum Sales Logo'
            style={{
              width: '180px',
              cursor: 'pointer',
            }}
            onClick={() => router.push('/')}
          />
        </Box>
        <Box>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            gapX={2}
          >
            <Box
              my={3}
              mr={{ base: 4, md: '1em' }}
              cursor='pointer'
              color='black'
            >
              <Button
                display={{ base: 'none', md: 'block' }}
                onClick={() => {
                  router.push('/contact-us');
                }}
                size='sm'
                bgColor='primary'
                _hover={{
                  bgColor: 'secondary',
                }}
                color='white'
                borderRadius={'4xl'}
              >
                Contact us
              </Button>
            </Box>
            <Box
              my={{ base: 4, md: 4 }}
              mr={{ base: '1em', md: '10em' }}
              cursor='pointer'
              color='black'
              _hover={{
                color: 'secondary',
              }}
            >
              <NavigationBurger />
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default TopNavigation;
