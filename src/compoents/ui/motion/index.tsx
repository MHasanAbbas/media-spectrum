// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { chakra } from '@chakra-ui/react';
import { shouldForwardProp } from '@chakra-ui/system';
import { isValidMotionProp, motion } from 'framer-motion';

export const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop: string) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
