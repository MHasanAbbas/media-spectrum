'use client';

import React, { useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const colors: string[] = ['#fff'];

const LoadingScreen: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      height='100vh'
      width='100vw'
      display='flex'
      justifyContent='center'
      alignItems='center'
      bg={bgColor}
      transition='background-color 1s ease'
      flexDirection='column'
    >
      <Image
        src='/common/imgs/primary-logo-trans.png'
        alt='Spectrum Media Sales'
        height='140px'
        width='220px'
        animation={`${bounce} 1.5s infinite`}
      />
    </Box>
  );
};

export default LoadingScreen;
