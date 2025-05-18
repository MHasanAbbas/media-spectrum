// Footer.tsx
'use client';

import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

const Footer: React.FC = () => (
  <Box as='footer' w='100%' bg='accent' color='white' py={3} mt='auto'>
    <Container maxW='7xl' textAlign='center'>
      <Text fontSize='sm'>
        &copy; {new Date().getFullYear()} Media Spectrum Sales. All rights
        reserved.
      </Text>
    </Container>
  </Box>
);

export default Footer;
