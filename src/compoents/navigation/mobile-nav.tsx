import { Button, CloseButton, Drawer, HStack, Portal } from '@chakra-ui/react';
import { TbMenu } from 'react-icons/tb';

const NavigationBurger: React.FC<unknown> = () => {
  const placement = 'top';
  return (
    <HStack wrap='wrap'>
      <Drawer.Root key={placement} placement={placement}>
        <Drawer.Trigger asChild>
          <TbMenu size={28} />
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content
              roundedTop={undefined}
              roundedBottom={placement === 'top' ? 'l3' : undefined}
            >
              <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  <Button variant='outline'>Cancel</Button>
                </Drawer.ActionTrigger>
                <Button>Save</Button>
              </Drawer.Footer>
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
