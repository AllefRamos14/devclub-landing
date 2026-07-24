import type {
  KeyboardEvent as ReactKeyboardEvent,
} from 'react';

import {
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import { useTiltCard } from '../../hooks/useTiltCard';

import {
  Avatar,
  AvatarArea,
  AvatarGlow,
  AvatarRing,
  Bio,
  Card,
  CardActions,
  CardArrow,
  CardFooter,
  CardHeader,
  CardNoise,
  CodeMark,
  Divider,
  FounderBadge,
  FounderName,
  Identity,
  MetaGrid,
  MetaItem,
  MetaLabel,
  MetaValue,
  MetricCard,
  MetricLabel,
  MetricsGrid,
  MetricValue,
  Role,
  StatusBadge,
  StatusRow,
  Technologies,
  TechPill,
} from './styles';

import type {
  SpotlightStyle,
  TutorCardProps,
} from './types';

export function FeaturedTutorCard({
  tutor,
  reducedMotion,
  onSelect,
}: Omit<TutorCardProps, 'index'>) {
  const {
    cardRef,
    smoothRotateX,
    smoothRotateY,
    handleMouseMove,
    handleMouseLeave,
  } = useTiltCard({
    reducedMotion,
  });

  function handleKeyDown(
    event: ReactKeyboardEvent<HTMLElement>,
  ) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(tutor);
    }
  }

  return (
    <Card
      ref={cardRef}
      $featured
      layoutId={`tutor-card-${tutor.name}`}
      role="button"
      tabIndex={0}
      aria-label={`Abrir perfil de ${tutor.name}`}
      onClick={() => onSelect(tutor)}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        perspective: 1000,
      } as SpotlightStyle}
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 30,
              scale: 0.985,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: '-70px',
      }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <CardNoise />

      <CardHeader>
        <AvatarArea>
          <AvatarGlow $hue={tutor.hue} />
          <AvatarRing
            data-avatar-ring="true"
            $hue={tutor.hue}
          />

          {/* <Avatar data-avatar="true" $hue={tutor.hue}>
            {tutor.initials}
          </Avatar> */}
          <Avatar data-avatar="true" $hue={tutor.hue}>
  {tutor.image ? (
    <img
      src={tutor.image}
      alt={`Foto de ${tutor.name}`}
    />
  ) : (
    tutor.initials
  )}
</Avatar>
        </AvatarArea>

        <CardActions>
          <CodeMark
            data-code-mark="true"
            aria-hidden="true"
          >
            {'</>'}
          </CodeMark>

          <CardArrow
            data-card-arrow="true"
            aria-hidden="true"
          >
            <ArrowUpRight strokeWidth={1.7} />
          </CardArrow>
        </CardActions>
      </CardHeader>

      <StatusRow>
        <StatusBadge>ativo no mercado</StatusBadge>

        <FounderBadge>
          <Sparkles strokeWidth={1.7} />
          fundador
        </FounderBadge>
      </StatusRow>

      <Identity>
        <FounderName>{tutor.name}</FounderName>
        <Role>{tutor.role}</Role>
      </Identity>

      <Bio>{tutor.bio}</Bio>

      {tutor.metrics && (
        <>
          <Divider />

          <MetricsGrid>
            {tutor.metrics.map((metric) => (
              <MetricCard key={metric.label}>
                <MetricValue>{metric.value}</MetricValue>
                <MetricLabel>{metric.label}</MetricLabel>
              </MetricCard>
            ))}
          </MetricsGrid>
        </>
      )}

      <Divider />

      <MetaGrid>
        <MetaItem>
          <MetaValue>{tutor.experience}</MetaValue>
          <MetaLabel>experiência</MetaLabel>
        </MetaItem>

        <MetaItem>
          <MetaValue>{tutor.specialty}</MetaValue>
          <MetaLabel>especialidade</MetaLabel>
        </MetaItem>
      </MetaGrid>

      <CardFooter>
        <Technologies>
          {tutor.technologies.map((technology) => (
            <TechPill
              key={technology}
              data-tech-pill="true"
            >
              {technology}
            </TechPill>
          ))}
        </Technologies>
      </CardFooter>
    </Card>
  );
}