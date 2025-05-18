import {
  CloseButton,
  Drawer,
  Heading,
  HStack,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import { TbMenu } from 'react-icons/tb';
import { SimpleGrid, Box } from '@chakra-ui/react';

const NavigationBurger: React.FC<unknown> = () => {
  const placement = 'top';
  return (
    <HStack wrap='wrap'>
      <Drawer.Root key={placement} placement={placement} size='full'>
        <Drawer.Trigger asChild>
          <TbMenu size={28} />
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content backgroundColor='primary'>
              <SimpleGrid mt='4em' color='white' fontSize='5xl' columns={2}>
                <Box padding={20} borderY='solid'>
                  Our Spectrum
                </Box>
                <Box padding={20} borderLeft='solid' borderY='solid'>
                  About Us
                </Box>
                <Box padding={20} borderBottom='solid'>
                  Spectrum Approach
                </Box>
                <Box padding={20} borderLeft='solid' borderBottom='solid'>
                  News
                </Box>
              </SimpleGrid>
              <SimpleGrid mt='1em' color='white' fontSize='5xl' columns={2}>
                <Box>
                  <VStack paddingX={20} alignItems='start'>
                    <Heading>Our Office</Heading>
                    <Heading>London</Heading>
                    <Text fontSize='lg'>Covent Street, Kensington ABC DEF</Text>
                  </VStack>
                </Box>
                {/* <Box>About Us</Box> */}
              </SimpleGrid>

              <Drawer.Footer></Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size='sm' />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </HStack>
  );
};

export default NavigationBurger;
