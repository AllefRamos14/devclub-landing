import type { MouseEvent as ReactMouseEvent } from 'react';

import type { MotionValue } from 'framer-motion';

import { milestones } from './data';
import { MilestoneCard } from './MilestoneCard';

import {
  TimelineColumn,
  TimelineList,
  TimelineProgress,
  TimelineTrack,
} from './styles';

interface TimelineProps {
  progress: MotionValue<number>;
  prefersReducedMotion: boolean | null;
  onSpotlight: (event: ReactMouseEvent<HTMLDivElement>) => void;
}

export function Timeline({
  progress,
  prefersReducedMotion,
  onSpotlight,
}: TimelineProps) {
  return (
    <TimelineColumn>
      <TimelineTrack aria-hidden="true">
        <TimelineProgress
          style={{
            scaleY: prefersReducedMotion ? 1 : progress,
          }}
        />
      </TimelineTrack>
    
      <TimelineList>
        {milestones.map((milestone, index) => (
          <MilestoneCard
            key={`${milestone.year}-${milestone.title}`}
            milestone={milestone}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
            onSpotlight={onSpotlight}
          />
        ))}
      </TimelineList>
    </TimelineColumn>
  );
}
