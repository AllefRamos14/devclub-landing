import { useEffect, useId } from 'react';
import { createPortal } from 'react-dom';

import {
    ArrowRight,
    Check,
    Clock3,
    Sparkles,
    X,
} from 'lucide-react';

import { AnimatePresence } from 'framer-motion';

import {
    ModalAvatar,
    ModalAvatarGlow,
    ModalBackdrop,
    ModalBadge,
    ModalBadges,
    ModalBio,
    ModalClose,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalHero,
    ModalIdentity,
    ModalJourney,
    ModalJourneyContent,
    ModalJourneyDescription,
    ModalJourneyItem,
    ModalJourneyPeriod,
    ModalJourneyTitle,
    ModalMain,
    ModalMetric,
    ModalMetricLabel,
    ModalMetrics,
    ModalMetricValue,
    ModalPrimaryAction,
    ModalRole,
    ModalSection,
    ModalSectionLabel,
    ModalSectionTitle,
    ModalSidebar,
    ModalSpecialty,
    ModalSpecialtyLabel,
    ModalSpecialtyValue,
    ModalTech,
    ModalTechnologies,
    ModalTitle,
    ModalTopic,
    ModalTopics,
} from './styles';

import type { TutorProfileModalProps } from './types';

export function TutorProfileModal({
  tutor,
  reducedMotion,
  onClose,
}: TutorProfileModalProps) {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!tutor) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [tutor, onClose]);

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {tutor && (
        <ModalBackdrop
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reducedMotion ? 0 : 0.25,
          }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <ModalContent
            layoutId={`tutor-card-${tutor.name}`}
            $hue={tutor.hue}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 32,
                    scale: 0.97,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={
              reducedMotion
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 0,
                    y: 20,
                    scale: 0.98,
                  }
            }
            transition={{
              duration: reducedMotion ? 0 : 0.55,
              ease: [0.16, 1, 0.3, 1],
              layout: {
                duration: reducedMotion ? 0 : 0.55,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
          >
            <ModalAvatarGlow $hue={tutor.hue} />

            <ModalClose
              type="button"
              onClick={onClose}
              aria-label={`Fechar perfil de ${tutor.name}`}
              autoFocus
            >
              <X strokeWidth={1.8} />
            </ModalClose>

            <ModalHeader>
              <ModalHero>
    
                <ModalAvatar $hue={tutor.hue}>
  {tutor.image ? (
    <img
      src={tutor.image}
      alt={`Foto de ${tutor.name}`}
    />
  ) : (
    tutor.initials
  )}
</ModalAvatar>

                <ModalIdentity>
                  <ModalBadges>
                    <ModalBadge>
                      <Sparkles strokeWidth={1.7} />
                      especialista
                    </ModalBadge>

                    <ModalBadge>
                      <Clock3 strokeWidth={1.7} />
                      {tutor.experience}
                    </ModalBadge>
                  </ModalBadges>

                  <ModalTitle id={titleId}>
                    {tutor.name}
                  </ModalTitle>

                  <ModalRole>{tutor.role}</ModalRole>
                </ModalIdentity>
              </ModalHero>

              <ModalBio id={descriptionId}>
                {tutor.longBio}
              </ModalBio>
            </ModalHeader>

            <ModalMain>
              <ModalSection>
                <ModalSectionLabel>
                  diferenciais
                </ModalSectionLabel>

                <ModalSectionTitle>
                  Experiência que vai além da teoria.
                </ModalSectionTitle>

                <ModalTopics>
                  {tutor.highlights.map((highlight) => (
                    <ModalTopic key={highlight}>
                      <span>
                        <Check strokeWidth={2} />
                      </span>

                      {highlight}
                    </ModalTopic>
                  ))}
                </ModalTopics>
              </ModalSection>

              <ModalSidebar>
                <ModalSpecialty>
                  <ModalSpecialtyLabel>
                    especialidade
                  </ModalSpecialtyLabel>

                  <ModalSpecialtyValue>
                    {tutor.specialty}
                  </ModalSpecialtyValue>
                </ModalSpecialty>

                {tutor.metrics && (
                  <ModalMetrics>
                    {tutor.metrics.map((metric) => (
                      <ModalMetric key={metric.label}>
                        <ModalMetricValue>
                          {metric.value}
                        </ModalMetricValue>

                        <ModalMetricLabel>
                          {metric.label}
                        </ModalMetricLabel>
                      </ModalMetric>
                    ))}
                  </ModalMetrics>
                )}

                <ModalTechnologies>
                  {tutor.technologies.map((technology) => (
                    <ModalTech key={technology}>
                      {technology}
                    </ModalTech>
                  ))}
                </ModalTechnologies>
              </ModalSidebar>
            </ModalMain>

            <ModalSection>
              <ModalSectionLabel>
                trajetória
              </ModalSectionLabel>

              <ModalSectionTitle>
                Conhecimento construído no mercado.
              </ModalSectionTitle>

              <ModalJourney>
                {tutor.journey.map((item, index) => (
                  <ModalJourneyItem key={item.title}>
                    <ModalJourneyPeriod>
                      {String(index + 1).padStart(2, '0')}
                      <span>{item.period}</span>
                    </ModalJourneyPeriod>

                    <ModalJourneyContent>
                      <ModalJourneyTitle>
                        {item.title}
                      </ModalJourneyTitle>

                      <ModalJourneyDescription>
                        {item.description}
                      </ModalJourneyDescription>
                    </ModalJourneyContent>
                  </ModalJourneyItem>
                ))}
              </ModalJourney>
            </ModalSection>

            <ModalFooter>
              <ModalDescription>
                Aprenda com quem já enfrentou os desafios que você
                encontrará no mercado.
              </ModalDescription>

              <ModalPrimaryAction
                href="#formacoes"
                onClick={onClose}
              >
                Conhecer formações
                <ArrowRight strokeWidth={1.8} />
              </ModalPrimaryAction>
            </ModalFooter>
          </ModalContent>
        </ModalBackdrop>
      )}
    </AnimatePresence>,
    document.body,
  );
}