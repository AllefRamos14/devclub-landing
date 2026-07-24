import type { MouseEvent as ReactMouseEvent } from 'react';

import { ArrowUpRight } from 'lucide-react';
import {
  CardArrow,
  CardEyebrow,
  CardTop,
  Milestone,
  MilestoneCard as MilestoneCardContainer,
  MilestoneDescription,
  MilestoneTitle,
  StatCard,
  StatLabel,
  StatsGrid,
  StatValue,
  TimelineMarker,
  YearLabel,
} from './styles';

import type {
  Milestone as MilestoneData,
  SpotlightStyle,
} from './types';

interface MilestoneCardProps {
  milestone: MilestoneData;
  index: number;
  prefersReducedMotion: boolean | null;
  onSpotlight: (event: ReactMouseEvent<HTMLDivElement>) => void;
}

export function MilestoneCard({
  milestone,
  index,
  prefersReducedMotion,
  onSpotlight,
}: MilestoneCardProps) {
  const Icon = milestone.icon;

  return (
    <Milestone
      key={`${milestone.year}-${milestone.title}`}
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              x: 28,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        margin: '-70px',
      }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.09, 0.27),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <TimelineMarker
        data-timeline-marker="true"
        $highlight={milestone.highlight}
        aria-hidden="true"
      >
        <Icon strokeWidth={1.65} />
      </TimelineMarker>

      <MilestoneCardContainer
        $highlight={milestone.highlight}
        onMouseMove={onSpotlight}
        style={
          {
            '--mouse-x': '50%',
            '--mouse-y': '50%',
          } as SpotlightStyle
        }
      >

        <CardTop>
          <CardEyebrow
            $highlight={milestone.highlight}
          >
            {milestone.eyebrow}
          </CardEyebrow>

          <CardArrow
            data-card-arrow="true"
            aria-hidden="true"
          >
            <ArrowUpRight strokeWidth={1.7} />
          </CardArrow>
        </CardTop>

        <YearLabel>{milestone.year}</YearLabel>

        <MilestoneTitle>
          {milestone.title}
        </MilestoneTitle>

        <MilestoneDescription>
          {milestone.description}
        </MilestoneDescription>

        {milestone.stats && (
          <StatsGrid>
            {milestone.stats.map((stat) => (
              <StatCard key={stat.label}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        )}
      </MilestoneCardContainer>
    </Milestone>
  );
}
