import { expertise } from './data';

import {
  ExpertiseItem,
  ExpertiseStrip as ExpertiseStripContainer,
  ExpertiseTrack,
} from './styles';

interface ExpertiseStripProps {
  reducedMotion: boolean | null;
}

export function ExpertiseStrip({
  reducedMotion,
}: ExpertiseStripProps) {
  return (
    <ExpertiseStripContainer aria-hidden="true">
      <ExpertiseTrack
        animate={
          reducedMotion
            ? undefined
            : {
                x: ['0%', '-50%'],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...expertise, ...expertise].map((item, index) => (
          <ExpertiseItem key={`${item}-${index}`}>
            {item}
          </ExpertiseItem>
        ))}
      </ExpertiseTrack>
    </ExpertiseStripContainer>
  );
}
