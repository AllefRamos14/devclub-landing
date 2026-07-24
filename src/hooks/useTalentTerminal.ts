import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react';

import {
  useMotionValue,
  useSpring,
} from 'framer-motion';

import type { TalentTerminalHookOptions } from '../types';

export function useTalentTerminal({
  prefersReducedMotion,
  companyCount,
}: TalentTerminalHookOptions) {
  const terminalRef = useRef<HTMLDivElement>(null);

  const [activeCompany, setActiveCompany] = useState(0);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const spotlightX = useMotionValue(260);
  const spotlightY = useMotionValue(260);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 160,
    damping: 22,
    mass: 0.5,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 160,
    damping: 22,
    mass: 0.5,
  });

  const smoothSpotlightX = useSpring(spotlightX, {
    stiffness: 120,
    damping: 24,
    mass: 0.45,
  });

  const smoothSpotlightY = useSpring(spotlightY, {
    stiffness: 120,
    damping: 24,
    mass: 0.45,
  });

  useEffect(() => {
    if (prefersReducedMotion || companyCount <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveCompany((current) =>
        current === companyCount - 1 ? 0 : current + 1,
      );
    }, 4200);

    return () => {
      window.clearInterval(interval);
    };
  }, [companyCount, prefersReducedMotion]);

  function handleTerminalMove(
    event: MouseEvent<HTMLDivElement>,
  ) {
    const terminal = terminalRef.current;

    if (!terminal || prefersReducedMotion) {
      return;
    }

    const bounds = terminal.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    spotlightX.set(x);
    spotlightY.set(y);

    rotateY.set((x / bounds.width - 0.5) * 7);
    rotateX.set((y / bounds.height - 0.5) * -7);
  }

  function handleTerminalLeave() {
    const terminal = terminalRef.current;

    rotateX.set(0);
    rotateY.set(0);

    if (terminal) {
      spotlightX.set(terminal.clientWidth / 2);
      spotlightY.set(terminal.clientHeight / 2);
    }
  }

  return {
    terminalRef,
    activeCompany,
    smoothRotateX,
    smoothRotateY,
    smoothSpotlightX,
    smoothSpotlightY,
    handleTerminalMove,
    handleTerminalLeave,
  };
}
