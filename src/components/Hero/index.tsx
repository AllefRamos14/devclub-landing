import {
  useRef,
  type MouseEvent,
} from 'react';

import {
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

import { useTypewriter } from '../../hooks/useTypewriter';

import { Eyebrow } from '../ui/Layout';

import { script } from './data';
import { Terminal } from './Terminal';

import {
  CardIcon,
  CareerCard,
  Content,
  CTARow,
  ExperienceBadge,
  Grid,
  Headline,
  HeroContainer,
  HeroSection,
  InteractiveGlow,
  PrimaryCTA,
  SecondaryCTA,
  Stat,
  Stats,
  StudentsCard,
  Subhead,
  VisualColumn,
} from './styles';

const premiumEase = [0.16, 1, 0.3, 1] as const;

const contentAnimation = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
};

export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  const { lines, isDone } = useTypewriter(
    script,
    !prefersReducedMotion,
  );

  const mouseX = useMotionValue(250);
  const mouseY = useMotionValue(220);

  const smoothX = useSpring(mouseX, {
    stiffness: 75,
    damping: 22,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 75,
    damping: 22,
    mass: 0.8,
  });

  const glowX = useTransform(
    smoothX,
    (value) => value - 170,
  );

  const glowY = useTransform(
    smoothY,
    (value) => value - 170,
  );

  const progress = isDone
    ? 100
    : Math.min(
        Math.max(
          (lines.length / script.length) * 100,
          4,
        ),
        96,
      );

  function handleMouseMove(
    event: MouseEvent<HTMLDivElement>,
  ) {
    if (prefersReducedMotion) {
      return;
    }

    const bounds =
      visualRef.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    mouseX.set(event.clientX - bounds.left);
    mouseY.set(event.clientY - bounds.top);
  }

  function handleMouseLeave() {
    if (prefersReducedMotion) {
      return;
    }

    const visual = visualRef.current;

    if (!visual) {
      return;
    }

    mouseX.set(visual.clientWidth / 2);
    mouseY.set(visual.clientHeight / 2);
  }

  return (
    <HeroSection
      id="inicio"
      $noPadBottom
      aria-labelledby="hero-title"
    >
      <HeroContainer>
        <Grid>
          <Content>
            <Eyebrow>
              <span aria-hidden="true">
                DevClub/&gt;
              </span>{' '}
              escola de programação
            </Eyebrow>

            <Headline
              id="hero-title"
              initial={
                prefersReducedMotion
                  ? false
                  : contentAnimation.hidden
              }
              animate={contentAnimation.visible}
              transition={{
                duration: 0.85,
                ease: premiumEase,
              }}
            >
              Programar não é apenas sobre{' '}
              <span>código</span>. É sobre reescrever
              o seu futuro.
            </Headline>

            <Subhead
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.14,
                ease: premiumEase,
              }}
            >
              Uma formação completa para transformar
              curiosidade em carreira. Aprenda programação
              do zero, desenvolva projetos reais e avance
              até a sua primeira oportunidade como{' '}
              <strong>
                Desenvolvedor Full Stack.
              </strong>
            </Subhead>

            <CTARow
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.28,
                ease: premiumEase,
              }}
            >
              <PrimaryCTA
                href="#formacoes"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -3,
                        scale: 1.02,
                      }
                }
                whileTap={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
              >
                Conhecer as formações

                <span aria-hidden="true">
                  →
                </span>
              </PrimaryCTA>

              <SecondaryCTA
                href="#quem-somos"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        x: 4,
                      }
                }
                whileTap={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
              >
                Conhecer nossa história

                <span aria-hidden="true">
                  →
                </span>
              </SecondaryCTA>
            </CTARow>

            <Stats
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 16,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.46,
                ease: premiumEase,
              }}
              aria-label="Resultados do DevClub"
            >
              <Stat>
                <strong>+25 mil</strong>
                <span>alunos impactados</span>
              </Stat>

              <Stat>
                <strong>+300</strong>
                <span>empresas parceiras</span>
              </Stat>

              <Stat>
                <strong>6 meses</strong>
                <span>
                  tempo médio até a primeira vaga
                </span>
              </Stat>
            </Stats>
          </Content>

          <VisualColumn
            ref={visualRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            aria-label="Demonstração interativa da jornada de aprendizado"
          >
            <InteractiveGlow
              aria-hidden="true"
              style={{
                x: glowX,
                y: glowY,
              }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      opacity: [0.68, 0.9, 0.68],
                      scale: [1, 1.06, 1],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <ExperienceBadge
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 14,
                      scale: 0.96,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.72,
                ease: premiumEase,
              }}
            >
              <span aria-hidden="true" />

              história real · impacto real
            </ExperienceBadge>

            <CareerCard
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 22,
                      scale: 0.94,
                    }
              }
              animate={
                prefersReducedMotion
                  ? {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      y: [0, -8, 0],
                    }
              }
              transition={{
                opacity: {
                  duration: 0.65,
                  delay: 0.92,
                },
                x: {
                  duration: 0.65,
                  delay: 0.92,
                  ease: premiumEase,
                },
                scale: {
                  duration: 0.65,
                  delay: 0.92,
                  ease: premiumEase,
                },
                y: {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.6,
                },
              }}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale: 1.035,
                      y: -6,
                    }
              }
            >
              <CardIcon aria-hidden="true">
                ↗
              </CardIcon>

              <div>
                <strong>
                  Carreira transformada
                </strong>

                <span>
                  do primeiro código à primeira vaga
                </span>
              </div>
            </CareerCard>

            <StudentsCard
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -22,
                      scale: 0.94,
                    }
              }
              animate={
                prefersReducedMotion
                  ? {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      y: [0, 8, 0],
                    }
              }
              transition={{
                opacity: {
                  duration: 0.65,
                  delay: 1.06,
                },
                x: {
                  duration: 0.65,
                  delay: 1.06,
                  ease: premiumEase,
                },
                scale: {
                  duration: 0.65,
                  delay: 1.06,
                  ease: premiumEase,
                },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.8,
                },
              }}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale: 1.035,
                      y: 4,
                    }
              }
            >
              <CardIcon aria-hidden="true">
                +
              </CardIcon>

              <div>
                <strong>25 mil alunos</strong>

                <span>
                  construindo novos futuros
                </span>
              </div>
            </StudentsCard>

            <Terminal
              lines={lines}
              isDone={isDone}
              progress={progress}
            />
          </VisualColumn>
        </Grid>
      </HeroContainer>
    </HeroSection>
  );
}