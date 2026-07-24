import {
  CardAccent,
  CardDescription,
  CardGlow,
  CardIndex,
  CardTop,
  IconBox,
  Label,
  NumberArea,
  Progress,
  ProgressFill,
  StatCard as StatCardContainer,
} from './styles';

import { Counter } from './Counter';

import type { StatCardProps } from './types';

export function StatCard({
  stat,
  index,
  reducedMotion,
}: StatCardProps) {
  const Icon = stat.icon;

  return (
    <StatCardContainer
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 26,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <CardAccent />
      <CardGlow />

      <CardTop>
        <IconBox>
          <Icon strokeWidth={1.7} />
        </IconBox>

        <CardIndex>
          0{index + 1} / 04
        </CardIndex>
      </CardTop>

      <NumberArea>
        <Counter
          target={stat.target}
          suffix={stat.suffix}
          prefix={stat.prefix}
        />
      </NumberArea>

      <Label>{stat.label}</Label>

      <CardDescription>
        {stat.description}
      </CardDescription>

      <Progress>
        <ProgressFill
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.1,
            delay: 0.35 + index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </Progress>
    </StatCardContainer>
  );
}
