import { ArrowUpRight } from 'lucide-react';

import type { FormationCardProps } from './types';

import {
  ArrowBox,
  Card,
  CardDescription,
  CardFooter,
  CardTag,
  CardTitle,
  CardTop,
  IconBox,
  LevelRow,
  LevelTrack,
  StackPill,
  StackRow,
} from './styles';

export function FormationCard({
  formacao,
  index,
  onOpen,
}: FormationCardProps) {
  const Icon = formacao.icon;

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLElement>,
  ) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen();
    }
  }

  return (
  
    <Card
  layoutId={`formation-card-${formacao.id}`}
  $featured={formacao.featured}
  onClick={onOpen}
  onKeyDown={handleKeyDown}
  type="button"
  initial={{
    opacity: 0,
    y: 26,
    scale: 0.985,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    margin: '-60px',
  }}
  transition={{
    duration: 0.6,
    delay: Math.min(index * 0.07, 0.3),
    ease: [0.16, 1, 0.3, 1],
  }}
  aria-label={`Abrir detalhes da ${formacao.title}`}
  aria-haspopup="dialog"
>
      <CardTop>
        <IconBox
          $featured={formacao.featured}
          aria-hidden="true"
        >
          <Icon strokeWidth={1.7} />
        </IconBox>

        <ArrowBox
          data-card-arrow="true"
          aria-hidden="true"
        >
          <ArrowUpRight />
        </ArrowBox>
      </CardTop>

      <CardTag>{formacao.tag}</CardTag>

      <CardTitle $featured={formacao.featured}>
        {formacao.title}
      </CardTitle>

      <CardDescription>
        {formacao.description}
      </CardDescription>

      <CardFooter>
        <LevelRow>
          <span>{formacao.levelLabel}</span>

          <LevelTrack aria-hidden="true">
            {[1, 2, 3].map((level) => (
              <span
                key={level}
                data-active={
                  level <= formacao.level ? 'true' : 'false'
                }
              />
            ))}
          </LevelTrack>
        </LevelRow>

        <StackRow>
          {formacao.technologies.map((technology) => (
            <StackPill
              key={technology}
              data-stack-pill="true"
            >
              {technology}
            </StackPill>
          ))}
        </StackRow>
      </CardFooter>
    </Card>
  );
}