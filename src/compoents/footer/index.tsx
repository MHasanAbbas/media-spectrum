import { Container, Stack, Image, Flex, Box } from '@chakra-ui/react';

import { Text, type TextProps } from '@chakra-ui/react';

const Copyright = (props: TextProps) => {
  return (
    <Text fontSize='xs' {...props}>
      &copy; {new Date().getFullYear()} Spectrum Meda Sales Ltd. All rights
      reserved.
    </Text>
  );
};
const BAR_COLORS = {
  accent: '#1D63AF', // Royal blue
  secondary: '#126c36', // Deep green
  primary: '#E34234', // Vermilion
  default: '#3A393B', // Black
};

const ColorBars: React.FC = () => {
  return (
    <Flex w='100%' h='5px'>
      {Object.values(BAR_COLORS).map((hex, i) => (
        <Box key={i} flex='1' bg={hex} />
      ))}
    </Flex>
  );
};

const Footer = () => (
  <>
    <ColorBars />
    <Container as='footer' bg='white' fluid py={{ base: '10', md: '5' }}>
      <Stack gap='6' maxW='7xl' mx='auto'>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify='space-between'
          align='center'
        >
          <Image
            src='/common/imgs/primary-logo-trans.png'
            height='12'
            alt='Spectrum Media Logo'
          />
          <Copyright />
          {/* <HStack gap='4'>
          {socialLinks.map(({ href, icon }, index) => (
            <Link key={index} href={href} colorPalette='gray'>
              <Icon color='white' size='md'>
                {icon}
              </Icon>
            </Link>
          ))}
        </HStack> */}
        </Stack>
      </Stack>
    </Container>
  </>
);

export default Footer;
