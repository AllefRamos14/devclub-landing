import { Sparkles } from 'lucide-react';

import {
  Closing as ClosingContainer,
  ClosingLabel,
  ClosingTitle,
} from './styles';

interface ClosingProps {
  reducedMotion: boolean | null;
}

export function Closing({
  reducedMotion,
}: ClosingProps) {
  return (
    <ClosingContainer
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-70px',
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <ClosingLabel>
        <Sparkles strokeWidth={1.7} />
        o próximo deploy pode ser o seu
      </ClosingLabel>

      <ClosingTitle>
        Eles não chegaram lá por acaso.{' '}
        <span>Eles começaram.</span>
      </ClosingTitle>
    </ClosingContainer>
  );
}
