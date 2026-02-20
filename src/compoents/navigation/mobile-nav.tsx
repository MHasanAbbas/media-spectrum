// NavigationBurger.tsx (updated with #1D63AF blue background + premium green Contact Us button)
import {
  Image,
  Drawer,
  Heading,
  HStack,
  Portal,
  Text,
  VStack,
  Button,
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
  borderTop?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
}

const navItems: NavItem[] = [
  {
    label: 'Our Spectrum',
    href: '/#our-spectrum',
    borderTop: true,
    borderBottom: true,
    borderLeft: true,
    borderRight: true,
  },
  { label: 'About Us', href: '/about#about-detail', borderTop: true },
  { label: 'Services', href: '/#services' },
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
            {/* 🔵 Updated background to #1D63AF */}
            <Drawer.Content backgroundColor='#1D63AF' color='white'>
              <HStack
                justifyContent='space-between'
                alignItems='center'
                paddingX={{ base: 5, md: 40 }}
                mt={{ base: '1em', md: '2em' }}
                mb={{ base: '2em', md: '2em' }}
              >
                <Image
                  src='/common/imgs/logo-orange.png'
                  alt='Media Spectrum Sales Logo'
                  style={{
                    width: '60px',
                    cursor: 'pointer',
                  }}
                  onClick={() => router.push('/')}
                />

                {/* CONTACT BUTTON + CLOSE */}
                <Box display={'flex'}>
                  {/* 🔥 Premium green Contact Us button */}
                  <Box
                    mr={{ base: 4, md: '1em' }}
                    cursor='pointer'
                  >
                    <Button
                      onClick={() => {
                        setOpen(false);
                        router.push('/contact-us');
                      }}
                      size='sm'
                      bgColor='#126C36'
                      _hover={{
                        bgColor: '#0e512a',
                      }}
                      color='white'
                      borderRadius='4xl'
                    >
                      Contact us
                    </Button>
                  </Box>

                  {/* CLOSE ICON */}
                  <Box
                    _hover={{
                      bg: 'white',
                      color: 'primary',
                      borderRadius: 'full',
                      paddingX: '0.5em',
                    }}
                  >
                    <MdOutlineClose
                      style={{ marginTop: '0.3em' }}
                      cursor='pointer'
                      size={28}
                      onClick={toggleDrawer}
                    />
                  </Box>
                </Box>
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
                    borderY='solid'
                    borderRight={{ base: 'none', md: 'solid' }}
                    borderYWidth='0.5px'
                    paddingY={{ base: 10, md: 20 }}
                    // 🔵 Updated hover to darker premium blue
                    _hover={{
                      bgColor: '#164f8a',
                      transition: '0.2s ease-in-out',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleNavigate(item.href)}
                  >
                    <Text
  fontWeight='medium'
  whiteSpace="nowrap"
  display="block"
  lineHeight="1.2"
>
  {item.label}
</Text>

                  </Box>
                ))}
              </SimpleGrid>

              {/* Office blurb */}
              <SimpleGrid
                mt='0.5em'
                fontSize='5xl'
                px={{ base: 5, md: 40 }}
                gap={5}
                columns={{ base: 1, md: 2 }}
              >
                <VStack alignItems='start'>
                  <Heading size='lg'>Our Office</Heading>
                  <Heading size='lg' fontWeight='medium'>
                    London
                  </Heading>
                  <Text fontSize='lg'>Spectrum Media Sales Ltd Building 2 , 1st Floor Croxley Business Park WD18 8AY</Text>
                </VStack>

                <Box spaceY={5} px={{ base: 0, md: 20 }}>
                  <Heading size='lg'>Follow us</Heading>
                  <HStack gapX={5}>
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
