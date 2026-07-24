import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  animate,
  useInView,
  useReducedMotion,
} from 'framer-motion';

import { BigNumber } from './styles';

import type { CounterProps } from './types';

export function Counter({
  target,
  suffix = '',
  prefix = '',
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  const prefersReducedMotion = useReducedMotion();

  const [display, setDisplay] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (prefersReducedMotion) {
      setDisplay(target);
      setCompleted(true);
      return;
    }

    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: value => {
        setDisplay(Math.round(value));
      },
      onComplete: () => {
        setCompleted(true);
      },
    });

    return () => {
      controls.stop();
    };
  }, [isInView, prefersReducedMotion, target]);

  return (
    <BigNumber
      ref={ref}
      animate={
        completed && !prefersReducedMotion
          ? {
              scale: [1, 1.035, 1],
            }
          : {
              scale: 1,
            }
      }
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {prefix}
      {display.toLocaleString('pt-BR')}
      {suffix}
    </BigNumber>
  );
}
