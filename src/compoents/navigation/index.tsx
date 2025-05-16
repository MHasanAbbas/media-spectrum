import React, { FC } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai'; // Close icon
import { GiHamburgerMenu } from 'react-icons/gi'; // Hamburger menu icon

const LINKS: Array<string> = [
  'Home',
  'Services',
  'Case Studies',
  'About Us',
  'Contact',
];

interface NavLinkProps {
  children: string;
}

const NavLink: FC<NavLinkProps> = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded='md'
    _hover={{ textDecoration: 'none', bg: '#E34234', color: 'white' }}
    href={`#${children.toLowerCase().replace(/\s+/g, '-')}`}
  >
    {children}
  </Link>
);

const Navigation: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg='#1D63AF' px={4} color='white'>
      <Flex
        h={16}
        alignItems='center'
        justifyContent='space-between'
        maxW='6xl'
        mx='auto'
      >
        <IconButton
          size='md'
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        >
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </IconButton>
        <HStack gap={8} alignItems='center'>
          <Box fontSize='xl' fontWeight='bold'>
            Media Spectrum Sales
          </Box>
          <HStack as='nav' gap={4} display={{ base: 'none', md: 'flex' }}>
            {LINKS.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems='center'>
          <Button bg='#158743' _hover={{ bg: '#126c36' }} size='sm'>
            Get Started
          </Button>
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as='nav' gap={4}>
            {LINKS.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navigation;
