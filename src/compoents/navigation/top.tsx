'use client';

import { Box, Stack, Flex, Image, Button } from '@chakra-ui/react';

import { FaPhone } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import NavigationBurger from './mobile-nav';

const TopNavigation = () => {
  const router = useRouter();
  return (
    <Box
      bg='white'
      position='sticky'
      top={0}
      py={5}
      alignSelf='flex-start'
      zIndex={5}
      // shadow='sm'
    >
      <Flex justify={{ base: 'space-between' }}>
        <Box display={{ base: 'block', md: 'none' }} w='full'>
          {/* <MobileNav /> */}
        </Box>
        <Box
          my={1}
          width={{ base: 'fit-content' }}
          mx={{ base: 0, md: '10em' }}
          cursor='pointer'
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
        <Box display={{ base: 'none', md: 'block' }}>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            gapX={2}
          >
            <Box
              my={3}
              mr={{ base: 0, md: '1em' }}
              cursor='pointer'
              color='black'
            >
              <Button
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
              my={4}
              mr={{ base: 0, md: '10em' }}
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
