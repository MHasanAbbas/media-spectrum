import { defineTokens } from '@chakra-ui/react';

export const tokens = defineTokens({
  colors: {
    // base colours
    primary: { value: '#E34234' }, // Vermilion
    secondary: { value: '#126c36' }, // Deep green
    accent: { value: '#1D63AF' }, // Royal blue
    default: { value: '#3A393B' }, // Black
    // optional surface
    // background:  { value: '#F7FAFC' },

    /* hover / focus-visible variants (≈ +15 % lightness) */
    primaryHover: { value: '#E75E52' }, // lighter vermilion
    secondaryHover: { value: '#1A9D4E' }, // lighter green
    accentHover: { value: '#2379D6' }, // lighter blue
  },
});
