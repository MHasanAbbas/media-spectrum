// Footer.tsx
'use client';

import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

/**
 * Sticky-when-needed footer.  Remove `position: fixed`; instead, let the parent
 * flex layout push it to the bottom when content is short.  In any page or
 * layout where you want the footer to behave like a classic "sticky footer",
 * wrap the main content + footer in a column-flex container with
 * `minH="100vh"` and give the content `flex="1"`.
 */
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
