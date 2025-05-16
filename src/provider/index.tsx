'use client';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '@/theme';

function ChakraUIProvider({ children }: React.PropsWithChildren) {
  return <ChakraProvider value={theme}>{children}</ChakraProvider>;
}

export default ChakraUIProvider;
