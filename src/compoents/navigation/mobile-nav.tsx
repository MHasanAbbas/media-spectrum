// NavigationBurger.tsx (improved with original imports retained)
import {
  Image,
  Drawer,
  Heading,
  HStack,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import { TbMenu } from 'react-icons/tb';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Our Spectrum', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Solutions', href: '/approach' },
  { label: 'News', href: '/news' },
];

const NavigationBurger: React.FC = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const placement = 'top';

  const toggleDrawer = () => setOpen((prev) => !prev);
  const closeDrawer = () => setOpen(false);
  const handleNavigate = (href: string) => {
    closeDrawer();
    router.push(href);
  };

  return (
    <HStack wrap='wrap'>
      <Drawer.Root
        open={isOpen}
        onOpenChange={(e) => setOpen(e.open)}
        key={placement}
        placement={placement}
        size='full'
      >
        {/* Burger icon */}
        <Drawer.Trigger asChild>
          <TbMenu size={28} onClick={toggleDrawer} />
        </Drawer.Trigger>

        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content backgroundColor='primary' color='white'>
              <HStack
                justifyContent='space-between'
                alignItems='center'
                paddingX={{ base: 2, md: 40 }}
                my={{ base: '1em', md: '2em' }}
              >
                <Image
                  src='/common/imgs/logo-orange.png'
                  alt='Media Spectrum Sales Logo'
                  style={{
                    width: '80px',
                    cursor: 'pointer',
                  }}
                  onClick={() => router.push('/')}
                />

                <MdOutlineClose
                  cursor='pointer'
                  size={28}
                  onClick={toggleDrawer}
                />
              </HStack>
              {/* Main navigation grid */}
              <SimpleGrid
                fontSize={{ base: '3xl', md: '5xl' }}
                columns={{ base: 1, md: 2 }}
              >
                {navItems.map((item, index) => (
                  <Box
                    key={item.label}
                    paddingX={{
                      base: 5,
                      md: index % 2 === 1 ? 20 : 40,
                    }}
                    paddingY={{ base: 10, md: 20 }}
                    borderTop='solid'
                    borderBottom='solid'
                    borderLeft={{
                      base: 'none',
                      md: index % 2 === 1 ? 'solid' : 'none',
                    }}
                    _hover={{ bgColor: 'primaryHover', cursor: 'pointer' }}
                    onClick={() => handleNavigate(item.href)}
                  >
                    <Text fontWeight='medium'>{item.label}</Text>
                  </Box>
                ))}
              </SimpleGrid>

              {/* Office blurb */}
              <SimpleGrid
                mt='0.5em'
                fontSize='5xl'
                px={{ base: 5, md: 40 }}
                gap={10}
                columns={{ base: 1, md: 2 }}
              >
                <VStack alignItems='start'>
                  <Heading size='lg'>Our Office</Heading>
                  <Heading size='lg' fontWeight='medium'>
                    London
                  </Heading>
                  <Text fontSize='lg'>Covent Street, Kensington ABC DEF</Text>
                </VStack>
                <Box spaceY={5} px={{ base: 0, md: 20 }}>
                  <Heading size='lg'>Follow us</Heading>
                  <HStack gapX={10}>
                    <FaFacebook cursor='pointer' size={28} />
                    <FaInstagram cursor='pointer' size={28} />
                    <FaXTwitter cursor='pointer' size={28} />
                  </HStack>
                </Box>
              </SimpleGrid>

              <Drawer.Footer />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </HStack>
  );
};

export default NavigationBurger;
