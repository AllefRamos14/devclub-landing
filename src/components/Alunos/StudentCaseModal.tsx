import {
    useEffect,
    useId,
} from 'react';

import { createPortal } from 'react-dom';

import {
    ArrowDown,
    BriefcaseBusiness,
    Check,
    Clock3,
    Laptop2,
    Quote,
    Sparkles,
    X,
} from 'lucide-react';

import {
    AnimatePresence,
    useReducedMotion,
} from 'framer-motion';

import type { StudentCaseModalProps } from './types';

import {
    AchievementItem,
    AchievementsGrid,
    ModalAvatar,
    ModalAvatarGlow,
    ModalBackdrop,
    ModalBody,
    ModalClose,
    ModalContent,
    ModalDescription,
    ModalHero,
    ModalHeroContent,
    ModalJourney,
    ModalJourneyConnector,
    ModalJourneyDescription,
    ModalJourneyIcon,
    ModalJourneyItem,
    ModalJourneyLabel,
    ModalJourneyTitle,
    ModalMeta,
    ModalMetaItem,
    ModalName,
    ModalQuote,
    ModalRole,
    ModalSection,
    ModalSectionEyebrow,
    ModalSectionTitle,
    ModalStack,
    ModalStackItem,
} from './styles';

export function StudentCaseModal({
  selectedStudent,
  onClose,
}: StudentCaseModalProps) {
  const prefersReducedMotion = useReducedMotion();
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!selectedStudent) {
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
  }, [selectedStudent, onClose]);

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {selectedStudent && (
        <ModalBackdrop
          key="student-modal"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0 }
          }
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <ModalContent
            layoutId={`student-card-${selectedStudent.cardKey}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            tabIndex={-1}
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                    scale: 0.97,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.42,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ModalClose
              type="button"
              onClick={onClose}
              aria-label="Fechar história"
            >
              <X strokeWidth={1.7} />
            </ModalClose>

            <ModalHero>
              <ModalAvatarGlow
                $hue={selectedStudent.testimonial.hue}
              />

              <ModalAvatar
                layoutId={`student-avatar-${selectedStudent.cardKey}`}
                $hue={selectedStudent.testimonial.hue}
              >
                {selectedStudent.testimonial.image ? (
                  <img
                    src={selectedStudent.testimonial.image}
                    alt={`Foto de ${selectedStudent.testimonial.name}`}
                  />
                ) : (
                  selectedStudent.testimonial.initials
                )}
              </ModalAvatar>

              <ModalHeroContent>
                <ModalSectionEyebrow>
                  <Sparkles strokeWidth={1.7} />
                  case de transformação
                </ModalSectionEyebrow>

                <ModalName
                  id={titleId}
                  layoutId={`student-name-${selectedStudent.cardKey}`}
                >
                  {selectedStudent.testimonial.name}
                </ModalName>

                <ModalRole>
                  {selectedStudent.testimonial.role}
                </ModalRole>

                <ModalMeta>
                  <ModalMetaItem>
                    <Clock3 strokeWidth={1.7} />
                    {selectedStudent.testimonial.time}
                  </ModalMetaItem>

                  <ModalMetaItem>
                    <Laptop2 strokeWidth={1.7} />
                    {selectedStudent.testimonial.modality}
                  </ModalMetaItem>

                  <ModalMetaItem>
                    <BriefcaseBusiness strokeWidth={1.7} />
                    {selectedStudent.testimonial.previousArea}
                  </ModalMetaItem>
                </ModalMeta>
              </ModalHeroContent>
            </ModalHero>

            <ModalBody>
              <ModalQuote>
                <Quote strokeWidth={1.6} />
                <p>{selectedStudent.testimonial.quote}</p>
              </ModalQuote>

              <ModalDescription id={descriptionId}>
                {selectedStudent.testimonial.story}
              </ModalDescription>

              <ModalSection>
                <ModalSectionEyebrow>
                  trajetória profissional
                </ModalSectionEyebrow>

                <ModalSectionTitle>
                  Uma decisão que mudou o próximo capítulo.
                </ModalSectionTitle>

                <ModalJourney>
                  {selectedStudent.testimonial.journey.map(
                    (step, index) => (
                      <ModalJourneyItem
                        key={`${selectedStudent.testimonial.id}-${step.label}`}
                      >
                        <ModalJourneyIcon>
                          {index <
                          selectedStudent.testimonial.journey
                            .length -
                            1 ? (
                            <ArrowDown strokeWidth={1.7} />
                          ) : (
                            <Check strokeWidth={1.8} />
                          )}
                        </ModalJourneyIcon>

                        <div>
                          <ModalJourneyLabel>
                            {step.label}
                          </ModalJourneyLabel>

                          <ModalJourneyTitle>
                            {step.title}
                          </ModalJourneyTitle>

                          <ModalJourneyDescription>
                            {step.description}
                          </ModalJourneyDescription>
                        </div>

                        {index <
                          selectedStudent.testimonial.journey
                            .length -
                            1 && <ModalJourneyConnector />}
                      </ModalJourneyItem>
                    ),
                  )}
                </ModalJourney>
              </ModalSection>

              <ModalSection>
                <ModalSectionEyebrow>
                  tecnologias desenvolvidas
                </ModalSectionEyebrow>

                <ModalSectionTitle>
                  Habilidades construídas durante a formação.
                </ModalSectionTitle>

                <ModalStack>
                  {selectedStudent.testimonial.stack.map(
                    (technology) => (
                      <ModalStackItem
                        key={`${selectedStudent.testimonial.id}-${technology}`}
                      >
                        {technology}
                      </ModalStackItem>
                    ),
                  )}
                </ModalStack>
              </ModalSection>

              <ModalSection>
                <ModalSectionEyebrow>
                  principais conquistas
                </ModalSectionEyebrow>

                <ModalSectionTitle>
                  Resultados construídos com consistência.
                </ModalSectionTitle>

                <AchievementsGrid>
                  {selectedStudent.testimonial.achievements.map(
                    (achievement) => (
                      <AchievementItem
                        key={`${selectedStudent.testimonial.id}-${achievement}`}
                      >
                        <Check strokeWidth={1.8} />
                        <span>{achievement}</span>
                      </AchievementItem>
                    ),
                  )}
                </AchievementsGrid>
              </ModalSection>
            </ModalBody>
          </ModalContent>
        </ModalBackdrop>
      )}
    </AnimatePresence>,
    document.body,
  );
}