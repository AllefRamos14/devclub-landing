import {
  useRef,
  type MouseEvent as ReactMouseEvent,
} from 'react';

import {
  useMotionValue,
  useSpring,
} from 'framer-motion';

interface UseTiltCardOptions {
  reducedMotion: boolean | null;
  intensity?: number;
}

export function useTiltCard({
  reducedMotion,
  intensity = 3.2,
}: UseTiltCardOptions) {
  const cardRef = useRef<HTMLElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 24,
    mass: 0.45,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 24,
    mass: 0.45,
  });

  function handleMouseMove(
    event: ReactMouseEvent<HTMLElement>,
  ) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${mouseX}px`);
    card.style.setProperty('--mouse-y', `${mouseY}px`);

    if (reducedMotion) {
      return;
    }

    const rotateYValue =
      ((mouseX - rect.width / 2) / rect.width) * intensity;

    const rotateXValue =
      -((mouseY - rect.height / 2) / rect.height) * intensity;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return {
    cardRef,
    smoothRotateX,
    smoothRotateY,
    handleMouseMove,
    handleMouseLeave,
  };
}
