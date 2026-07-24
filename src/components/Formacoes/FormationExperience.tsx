import {
    useEffect,
    useRef,
    useState,
} from 'react';

import type {
    MouseEvent,
    KeyboardEvent as ReactKeyboardEvent,
} from 'react';

import {
    AnimatePresence,
    motion,
} from 'framer-motion';

import {
    ArrowRight,
    BookOpen,
    Check,
    CheckCircle2,
    Clock3,
    Code2,
    GraduationCap,
    LockKeyhole,
    Play,
    Sparkles,
    Target,
    X,
} from 'lucide-react';

import type {
    FormationExperienceProps,
    FormationModule,
} from './types';

import {
    ActiveModuleContent,
    ActiveModuleDescription,
    ActiveModuleHeader,
    ActiveModuleIcon,
    ActiveModuleInfo,
    ActiveModuleLabel,
    ActiveModuleTitle,
    CloseButton,
    ExperienceBackdrop,
    ExperienceBody,
    ExperienceContent,
    ExperienceDescription,
    ExperienceEyebrow,
    ExperienceHeader,
    ExperienceHeaderContent,
    ExperienceHeadline,
    ExperiencePanel,
    ExperienceSidebar,
    ExperienceTitle,
    FinalProjectCard,
    FinalProjectDescription,
    FinalProjectFeature,
    FinalProjectFeatures,
    FinalProjectHeader,
    FinalProjectIcon,
    FinalProjectLabel,
    FinalProjectTitle,
    HeaderActions,
    HeaderIcon,
    HeaderMeta,
    HeaderMetaItem,
    ModuleButton,
    ModuleDuration,
    ModuleInfo,
    ModuleList,
    ModuleNumber,
    ModuleStatus,
    ModuleTitle,
    OutcomeCard,
    OutcomeIcon,
    OutcomeText,
    ProgressBar,
    ProgressFill,
    ProgressHeader,
    ProgressLabel,
    ProgressValue,
    SidebarHeader,
    SidebarLabel,
    SidebarTitle,
    StartButton,
    Technology,
    TechnologyList,
    TechnologySection,
    TechnologyTitle,
} from './experience.styles';

const entranceContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.08,
    },
  },
};

const entranceItem = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function getInitialModule(
  modules: FormationModule[],
): FormationModule {
  const activeModule = modules.find(
    (module) => module.status === 'active',
  );

  const firstUnlockedModule = modules.find(
    (module) => module.status !== 'locked',
  );

  return activeModule ?? firstUnlockedModule ?? modules[0];
}

export function FormationExperience({
  formacao,
  onClose,
}: FormationExperienceProps) {
  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  const panelRef =
    useRef<HTMLDivElement>(null);

  const previousFocusedElement =
    useRef<HTMLElement | null>(null);

  const [selectedModule, setSelectedModule] =
    useState<FormationModule>(() =>
      getInitialModule(formacao.modules),
    );

  const Icon = formacao.icon;

  useEffect(() => {
    setSelectedModule(
      getInitialModule(formacao.modules),
    );
  }, [formacao.id, formacao.modules]);

  useEffect(() => {
    previousFocusedElement.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 250);

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener(
      'keydown',
      handleEscape,
    );

    return () => {
      window.clearTimeout(focusTimer);

      document.removeEventListener(
        'keydown',
        handleEscape,
      );

      previousFocusedElement.current?.focus();
    };
  }, [onClose]);

  function handleBackdropClick(
    event: MouseEvent<HTMLDivElement>,
  ) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleSelectModule(
    module: FormationModule,
  ) {
    if (module.status === 'locked') {
      return;
    }

    setSelectedModule(module);
  }

  function handleExploreFormation() {
  onClose();

  window.setTimeout(() => {
    const finalCta =
      document.getElementById('cta-final');

    if (!finalCta) {
      return;
    }

    finalCta.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    finalCta.classList.add('cta-highlight');

    window.setTimeout(() => {
      finalCta.classList.remove('cta-highlight');
    }, 1800);
  }, 450);
}

  function handleDialogKeyDown(
    event: ReactKeyboardEvent<HTMLDivElement>,
  ) {
    if (event.key !== 'Tab') {
      return;
    }

    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const focusableElements =
      panel.querySelectorAll<HTMLElement>(
        [
          'button:not([disabled])',
          'a[href]',
          'input:not([disabled])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          '[tabindex]:not([tabindex="-1"])',
        ].join(','),
      );

    if (focusableElements.length === 0) {
      event.preventDefault();
      panel.focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement =
      focusableElements[
        focusableElements.length - 1
      ];

    if (
      event.shiftKey &&
      document.activeElement === firstElement
    ) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (
      !event.shiftKey &&
      document.activeElement === lastElement
    ) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  return (
    <ExperienceBackdrop
      role="presentation"
      onMouseDown={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <ExperiencePanel
        ref={panelRef}
        layoutId={`formation-card-${formacao.id}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`formation-title-${formacao.id}`}
        aria-describedby={`formation-description-${formacao.id}`}
        tabIndex={-1}
        onKeyDown={handleDialogKeyDown}
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 30,
          scale: 0.98,
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <ExperienceHeader>
          <ExperienceHeaderContent>
            <HeaderIcon aria-hidden="true">
              <Icon strokeWidth={1.7} />
            </HeaderIcon>

            <div>
              <ExperienceEyebrow>
                <Sparkles size={13} />
                {formacao.tag}
              </ExperienceEyebrow>

              <ExperienceTitle
                id={`formation-title-${formacao.id}`}
              >
                {formacao.title}
              </ExperienceTitle>
            </div>
          </ExperienceHeaderContent>

          <HeaderActions>
            <HeaderMeta>
              <HeaderMetaItem>
                <Clock3 size={14} />
                {formacao.duration}
              </HeaderMetaItem>

              <HeaderMetaItem>
                <BookOpen size={14} />
                {formacao.totalLessons} aulas
              </HeaderMetaItem>
            </HeaderMeta>

            <CloseButton
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={`Fechar detalhes da formação ${formacao.title}`}
            >
              <X aria-hidden="true" />
            </CloseButton>
          </HeaderActions>
        </ExperienceHeader>

        <ExperienceBody>
          <ExperienceSidebar>
            <SidebarHeader>
              <div>
                <SidebarLabel>
                  conteúdo da formação
                </SidebarLabel>

                <SidebarTitle>
                  Jornada de aprendizado
                </SidebarTitle>
              </div>

              <ProgressHeader>
                <ProgressLabel>
                  progresso
                </ProgressLabel>

                <ProgressValue>
                  {formacao.progress}%
                </ProgressValue>
              </ProgressHeader>

              <ProgressBar
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={formacao.progress}
                aria-label={`Progresso da formação: ${formacao.progress}%`}
              >
                <ProgressFill
                  initial={{ width: 0 }}
                  animate={{
                    width: `${formacao.progress}%`,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </ProgressBar>
            </SidebarHeader>

            <ModuleList>
              {formacao.modules.map(
                (module, index) => {
                  const isSelected =
                    selectedModule.id === module.id;

                  const isLocked =
                    module.status === 'locked';

                  return (
                    <motion.div
                      key={module.id}
                      initial={{
                        opacity: 0,
                        x: -14,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.12 + index * 0.055,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <ModuleButton
                        type="button"
                        $active={isSelected}
                        $locked={isLocked}
                        disabled={isLocked}
                        onClick={() =>
                          handleSelectModule(module)
                        }
                        aria-pressed={isSelected}
                        aria-label={
                          isLocked
                            ? `${module.title}, módulo bloqueado`
                            : `Selecionar módulo ${module.title}`
                        }
                      >
                        <ModuleNumber
                          aria-hidden="true"
                        >
                          {module.status ===
                            'completed' && (
                            <Check size={14} />
                          )}

                          {module.status ===
                            'active' && (
                            <Play
                              size={12}
                              fill="currentColor"
                            />
                          )}

                          {isLocked && (
                            <LockKeyhole size={13} />
                          )}
                        </ModuleNumber>

                        <ModuleInfo>
                          <ModuleTitle>
                            {module.number}.{' '}
                            {module.title}
                          </ModuleTitle>

                          <ModuleDuration>
                            {module.duration}
                          </ModuleDuration>
                        </ModuleInfo>

                        <ModuleStatus
                          data-status={module.status}
                          aria-hidden="true"
                        />
                      </ModuleButton>
                    </motion.div>
                  );
                },
              )}
            </ModuleList>
          </ExperienceSidebar>

          <ExperienceContent>
            <motion.div
              variants={entranceContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={entranceItem}>
                <ExperienceHeadline>
                  {formacao.headline}
                </ExperienceHeadline>

                <ExperienceDescription
                  id={`formation-description-${formacao.id}`}
                >
                  {formacao.description}
                </ExperienceDescription>
              </motion.div>

              <AnimatePresence mode="wait">
                <ActiveModuleContent
                  key={selectedModule.id}
                  aria-live="polite"
                  initial={{
                    opacity: 0,
                    y: 18,
                    scale: 0.985,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    scale: 0.99,
                  }}
                  transition={{
                    duration: 0.32,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <ActiveModuleHeader>
                    <ActiveModuleInfo>
                      <ActiveModuleIcon
                        aria-hidden="true"
                      >
                        {selectedModule.status ===
                        'completed' ? (
                          <CheckCircle2 />
                        ) : (
                          <Play fill="currentColor" />
                        )}
                      </ActiveModuleIcon>

                      <div>
                        <ActiveModuleLabel>
                          módulo selecionado
                        </ActiveModuleLabel>

                        <ActiveModuleTitle>
                          {selectedModule.title}
                        </ActiveModuleTitle>
                      </div>
                    </ActiveModuleInfo>

                    <ModuleDuration>
                      {selectedModule.duration}
                    </ModuleDuration>
                  </ActiveModuleHeader>

                  <ActiveModuleDescription>
                    {selectedModule.description}
                  </ActiveModuleDescription>

                  <StartButton type="button">
                    {selectedModule.status ===
                    'completed'
                      ? 'Revisar módulo'
                      : 'Continuar aprendizado'}

                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                    />
                  </StartButton>
                </ActiveModuleContent>
              </AnimatePresence>

              <motion.div variants={entranceItem}>
                <TechnologySection>
                  <TechnologyTitle>
                    <Code2
                      size={15}
                      aria-hidden="true"
                    />
                    Tecnologias da formação
                  </TechnologyTitle>

                  <TechnologyList>
                    {formacao.technologies.map(
                      (technology, index) => (
                        <Technology
                          key={technology}
                          initial={{
                            opacity: 0,
                            y: 10,
                            scale: 0.96,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          transition={{
                            duration: 0.35,
                            delay:
                              0.25 + index * 0.045,
                            ease: [
                              0.16,
                              1,
                              0.3,
                              1,
                            ],
                          }}
                          whileHover={{
                            y: -4,
                            scale: 1.03,
                          }}
                        >
                          {technology}
                        </Technology>
                      ),
                    )}
                  </TechnologyList>
                </TechnologySection>
              </motion.div>

              <motion.div variants={entranceItem}>
                <OutcomeCard>
                  <OutcomeIcon aria-hidden="true">
                    <Target />
                  </OutcomeIcon>

                  <div>
                    <ActiveModuleLabel>
                      resultado esperado
                    </ActiveModuleLabel>

                    <OutcomeText>
                      {formacao.outcome}
                    </OutcomeText>
                  </div>
                </OutcomeCard>
              </motion.div>

              <motion.div variants={entranceItem}>
                <FinalProjectCard>
                  <FinalProjectHeader>
                    <FinalProjectIcon
                      aria-hidden="true"
                    >
                      <GraduationCap />
                    </FinalProjectIcon>

                    <div>
                      <FinalProjectLabel>
                        projeto final
                      </FinalProjectLabel>

                      <FinalProjectTitle>
                        {
                          formacao.finalProject
                            .title
                        }
                      </FinalProjectTitle>
                    </div>
                  </FinalProjectHeader>

                  <FinalProjectDescription>
                    {
                      formacao.finalProject
                        .description
                    }
                  </FinalProjectDescription>

                  <FinalProjectFeatures>
                    {formacao.finalProject.features.map(
                      (feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            delay:
                              0.35 +
                              index * 0.055,
                          }}
                        >
                          <FinalProjectFeature>
                            <CheckCircle2
                              size={15}
                              aria-hidden="true"
                            />

                            {feature}
                          </FinalProjectFeature>
                        </motion.div>
                      ),
                    )}
                  </FinalProjectFeatures>
                </FinalProjectCard>
              </motion.div>

              <motion.div variants={entranceItem}>
            
<StartButton
  type="button"
  $primary
  onClick={handleExploreFormation}
  aria-label={`Quero começar a formação ${formacao.title}`}
>
  <GraduationCap
    size={17}
    aria-hidden="true"
  />

  Escolher minha formação

  <ArrowRight
    size={17}
    aria-hidden="true"
  />
</StartButton>



              </motion.div>
            </motion.div>
          </ExperienceContent>
        </ExperienceBody>
      </ExperiencePanel>
    </ExperienceBackdrop>
  );
}