import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface ScrollRevealOptions {
  once?: boolean;
  margin?: string;
  amount?: number;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const { once = true, margin = '-80px', amount = 0.2 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: margin as any,
    amount,
  });

  return { ref, isInView };
};
