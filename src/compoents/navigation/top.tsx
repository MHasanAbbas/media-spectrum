'use client';

import { Box, Stack, Button, Flex, Text } from '@chakra-ui/react';

import { FaPhone } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const TopNavigation: React.FC<any> = () => {
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
          <Box
            as='img'
            src='/common/imgs/alt-logo.png'
            alt='Media Spectrum Sales Logo'
            width={{ base: '100px', md: '220px' }}
            // height={{ base: '30px', md: '100px' }}
            p={'0.27em'}
            onClick={() => router.push('/')}
            px={'0.27em'}
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
              mr={{ base: 0, md: '10em' }}
              cursor='pointer'
              color='black'
              onClick={() => {
                router.push('/contact-us');
              }}
              _hover={{
                color: 'orange.600',
              }}
            >
              <Text fontWeight='semibold' textStyle='md'>
                Contact
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box
          pr={3}
          w='full'
          display={{ base: 'flex', md: 'none' }}
          justifyContent='flex-end'
        >
          <FaPhone
            size={25}
            style={{
              marginTop: '0.4em',
              color: '#3E7B27',
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default TopNavigation;
