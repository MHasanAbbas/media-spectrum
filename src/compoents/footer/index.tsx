import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Separator,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg='#1D63AF' color='white' py={10}>
      <Container maxW='6xl'>
        <Stack gap={6} textAlign='center'>
          <Text fontSize='sm'>
            &copy; {new Date().getFullYear()} Media Spectrum Sales. All rights
            reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
export default Footer;
