import type {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from 'react';

import {
  AvatarArea,
  AvatarGlow,
  AvatarRing,
  Card,
  CardNoise,
  Role,
  SpecialistAvatar,
  SpecialistBio,
  SpecialistContent,
  SpecialistFooter,
  SpecialistIcon,
  SpecialistName,
  SpecialistText,
  TechPill,
  Technologies,
} from './styles';

import type {
  SpotlightStyle,
  TutorCardProps,
} from './types';

export function SpecialistTutorCard({
  tutor,
  index,
  reducedMotion,
  onSelect,
}: TutorCardProps) {
  const Icon = tutor.icon;

  function handleMouseMove(
    event: ReactMouseEvent<HTMLElement>,
  ) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${mouseX}px`);
    card.style.setProperty('--mouse-y', `${mouseY}px`);
  }

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
      layoutId={`tutor-card-${tutor.name}`}
      role="button"
      tabIndex={0}
      aria-label={`Abrir perfil de ${tutor.name}`}
      onClick={() => onSelect(tutor)}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      style={
        {
          '--mouse-x': '50%',
          '--mouse-y': '50%',
        } as SpotlightStyle
      }
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              x: 24,
              scale: 0.985,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: '-60px',
      }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.08, 0.24),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <CardNoise />

      <SpecialistContent>
        <AvatarArea>
          <AvatarGlow $hue={tutor.hue} />

          <AvatarRing
            data-avatar-ring="true"
            $hue={tutor.hue}
          />

                      <SpecialistAvatar
              data-avatar="true"
              $hue={tutor.hue}
            >
              {tutor.image ? (
                <img
                  src={tutor.image}
                  alt={`Foto de ${tutor.name}`}
                />
              ) : (
                tutor.initials
              )}
</SpecialistAvatar>
        </AvatarArea>

        <SpecialistText>
          <SpecialistName>{tutor.name}</SpecialistName>
          <Role>{tutor.role}</Role>
          <SpecialistBio>{tutor.bio}</SpecialistBio>
        </SpecialistText>
      </SpecialistContent>

      <SpecialistFooter>
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

        <SpecialistIcon aria-hidden="true">
          <Icon strokeWidth={1.7} />
        </SpecialistIcon>
      </SpecialistFooter>
    </Card>
  );
}