// Footer.tsx
'use client';

import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

const Footer: React.FC = () => (
  <Box
    as='footer'
    bg='#1D63AF'
    color='white'
    py={3}
    position='fixed'
    bottom={0}
    left={0}
    w='100%'
    zIndex={1}
  >
    <Container maxW='6xl' textAlign='center'>
      <Text fontSize='sm'>
        &copy; {new Date().getFullYear()} Media Spectrum Sales. All rights
        reserved.
      </Text>
    </Container>
  </Box>
);

export default Footer;
