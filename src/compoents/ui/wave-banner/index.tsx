import { Box,} from '@chakra-ui/react';

const WaveBanner = () => {
  return (
    <Box
      position='relative'
      color='primary'
      h='300px'
      display='flex'
      alignItems='center'
      px='10'
      overflow='hidden'
    >
      {/* SVG background */}
      <Box position='absolute' top='0' left='0' w='100%' h='100%' zIndex='0'>
        <svg
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
          width='100%'
          height='100%'
        >
          <path
            fill='none'
            stroke='#68aee0'
            strokeWidth='1'
            d='M0,96 C480,192 960,0 1440,96'
          />
          <path
            fill='none'
            stroke='#68aee0'
            strokeWidth='1'
            d='M0,160 C480,256 960,64 1440,160'
          />
          <path
            fill='none'
            stroke='#68aee0'
            strokeWidth='1'
            d='M0,224 C480,320 960,128 1440,224'
          />
          <path
            fill='none'
            stroke='#68aee0'
            strokeWidth='1'
            d='M0,288 C480,384 960,192 1440,288'
          />
        </svg>
      </Box>
    </Box>
  );
};

export default WaveBanner;
