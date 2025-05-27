// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client';

import { useEffect } from 'react';
import { useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from '../motion';
import { BoxProps } from '@chakra-ui/react';

interface AnimatedSectionProps extends BoxProps {
  children: React.ReactNode;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function AnimatedSection({
  children,
  ...props
}: AnimatedSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <MotionBox
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
      {...props}
    >
      {children}
    </MotionBox>
  );
}
