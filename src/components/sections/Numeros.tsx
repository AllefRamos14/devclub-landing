import { useEffect, useRef, useState } from 'react';

import {
  Building2,
  CheckCircle2,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from 'framer-motion';

import styled from 'styled-components';

import {
  Container,
  Eyebrow,
  Section,
} from '../ui/Layout';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
}

interface Stat {
  target: number;
  suffix: string;
  prefix: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

const NumbersSection = styled(Section)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(124, 92, 255, 0.16),
      transparent 36%
    ),
    radial-gradient(
      circle at 8% 70%,
      rgba(124, 92, 255, 0.07),
      transparent 30%
    ),
    radial-gradient(
      circle at 92% 78%,
      rgba(0, 245, 160, 0.035),
      transparent 28%
    ),
    ${({ theme }) => theme.color.bg};

  border-top: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: -3;

  background-image:
    linear-gradient(
      rgba(255, 255, 255, 0.014) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.014) 1px,
      transparent 1px
    );

  background-size: 72px 72px;
  opacity: 0.7;

  pointer-events: none;
`;

const Glow = styled.div`
  position: absolute;
  top: -230px;
  left: 50%;
  z-index: -2;

  width: 680px;
  height: 450px;

  border-radius: 50%;

  background: rgba(124, 92, 255, 0.11);

  filter: blur(150px);
  transform: translateX(-50%);

  pointer-events: none;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  align-items: end;

  gap: clamp(42px, 8vw, 110px);
  margin-bottom: clamp(54px, 8vw, 90px);

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: 1fr;
    align-items: start;

    gap: ${({ theme }) => theme.space(6)};
  }
`;

const HeaderMain = styled.div`
  max-width: 850px;
`;

const EyebrowWrapper = styled(motion.div)`
  display: inline-flex;
`;

const Title = styled(motion.h2)`
  max-width: 14ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2.7rem, 6vw, 5.7rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 0.95;
  letter-spacing: -0.07em;

  span {
    background: ${({ theme }) => theme.gradient.text};
    background-clip: text;
    -webkit-background-clip: text;

    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: clamp(2.35rem, 12vw, 4rem);
  }
`;

const HeaderSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Description = styled.p`
  max-width: 48ch;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: clamp(1rem, 1.4vw, 1.08rem);
  line-height: 1.8;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.weight.medium};
  }
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;

  gap: 9px;
  margin-top: ${({ theme }) => theme.space(6)};
  padding: 9px 13px;

  border: 1px solid rgba(0, 245, 160, 0.14);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(0, 245, 160, 0.035);
  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const Dashboard = styled(motion.div)`
  position: relative;
  overflow: hidden;

  padding: clamp(18px, 2vw, 24px);

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.006)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 50px 140px rgba(0, 0, 0, 0.34),
    0 0 90px rgba(124, 92, 255, 0.045),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);
`;

const DashboardAccent = styled.div`
  position: absolute;
  top: 0;
  right: 14%;
  left: 14%;

  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(124, 92, 255, 0.72),
    transparent
  );

  pointer-events: none;
`;

const DashboardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};

  padding-top: ${({ theme }) => theme.space(3)};
  padding-right: ${({ theme }) => theme.space(3)};
  padding-bottom: ${({ theme }) => theme.space(6)};
  padding-left: ${({ theme }) => theme.space(3)};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const DashboardLabel = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  color: ${({ theme }) => theme.color.textMuted};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.09em;
  text-transform: uppercase;

  svg {
    width: 15px;
    height: 15px;

    color: ${({ theme }) => theme.color.accent};
  }
`;

const DashboardStatus = styled.div`
  display: flex;
  align-items: center;

  gap: 9px;

  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const StatusDot = styled.span`
  display: inline-block;

  width: 6px;
  min-width: 6px;
  height: 6px;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.color.success};

  box-shadow:
    0 0 0 5px rgba(0, 245, 160, 0.05),
    0 0 16px rgba(0, 245, 160, 0.5);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: ${({ theme }) => theme.space(4)};

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.article)`
  position: relative;
  overflow: hidden;

  min-height: 310px;
  padding: clamp(24px, 3vw, 34px);

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(124, 92, 255, 0.09),
      transparent 46%
    ),
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.034),
      rgba(255, 255, 255, 0.005)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 24px 75px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.025);

  transition:
    border-color 300ms ease,
    box-shadow 300ms ease,
    transform 300ms ease;

  &:hover {
    border-color: rgba(124, 92, 255, 0.24);

    box-shadow:
      0 34px 90px rgba(0, 0, 0, 0.3),
      0 0 55px rgba(124, 92, 255, 0.07),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);

    transform: translateY(-6px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const CardAccent = styled.div`
  position: absolute;
  top: 0;
  right: 22%;
  left: 22%;

  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(124, 92, 255, 0.58),
    transparent
  );

  opacity: 0.85;
  pointer-events: none;
`;

const CardGlow = styled.div`
  position: absolute;
  top: -100px;
  right: -100px;

  width: 220px;
  height: 220px;

  border-radius: 50%;

  background: rgba(124, 92, 255, 0.07);

  filter: blur(70px);

  pointer-events: none;
`;

const CardTop = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
`;

const IconBox = styled.div`
  display: grid;
  place-items: center;

  width: 48px;
  height: 48px;

  border: 1px solid rgba(124, 92, 255, 0.18);
  border-radius: 15px;

  background: rgba(124, 92, 255, 0.07);
  color: ${({ theme }) => theme.color.accent};

  box-shadow:
    0 14px 38px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  svg {
    width: 19px;
    height: 19px;
  }
`;

const CardIndex = styled.span`
  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.09em;
`;

const NumberArea = styled.div`
  position: relative;
  z-index: 2;

  margin-top: clamp(38px, 5vw, 58px);
`;

const BigNumber = styled(motion.div)`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(3rem, 5.7vw, 5rem);
  font-weight: ${({ theme }) => theme.weight.black};
  line-height: 0.9;
  letter-spacing: -0.065em;

  background: ${({ theme }) => theme.gradient.text};
  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  -webkit-text-fill-color: transparent;
`;

const Label = styled.h3`
  position: relative;
  z-index: 2;

  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weight.medium};
  line-height: 1.3;
`;

const CardDescription = styled.p`
  position: relative;
  z-index: 2;

  max-width: 30ch;
  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.8rem;
  line-height: 1.6;
`;

const Progress = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  height: 2px;

  background: rgba(255, 255, 255, 0.035);
`;

const ProgressFill = styled(motion.div)`
  width: 100%;
  height: 100%;

  background: linear-gradient(
    90deg,
    rgba(124, 92, 255, 0.3),
    rgba(124, 92, 255, 1),
    rgba(0, 245, 160, 0.6)
  );

  transform-origin: left;
`;

const Footer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(5)};
  margin-top: ${({ theme }) => theme.space(6)};
  padding: ${({ theme }) => theme.space(5)};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: rgba(255, 255, 255, 0.015);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const FooterMain = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space(4)};
`;

const FooterIcon = styled.div`
  display: grid;
  place-items: center;

  width: 42px;
  min-width: 42px;
  height: 42px;

  border: 1px solid rgba(0, 245, 160, 0.14);
  border-radius: 13px;

  background: rgba(0, 245, 160, 0.035);
  color: ${({ theme }) => theme.color.success};

  svg {
    width: 17px;
    height: 17px;
  }
`;

const FooterText = styled.div`
  strong {
    display: block;

    color: ${({ theme }) => theme.color.text};

    font-size: 0.92rem;
    font-weight: ${({ theme }) => theme.weight.medium};
  }

  span {
    display: block;
    margin-top: 5px;

    color: ${({ theme }) => theme.color.textMuted};

    font-size: 0.77rem;
    line-height: 1.5;
  }
`;

const FooterBadge = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 7px;
  padding: 7px 10px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.pill};

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  svg {
    width: 12px;
    height: 12px;

    color: ${({ theme }) => theme.color.accent};
  }
`;

function Counter({
  target,
  suffix = '',
  prefix = '',
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  const prefersReducedMotion = useReducedMotion();

  const [display, setDisplay] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (prefersReducedMotion) {
      setDisplay(target);
      setCompleted(true);
      return;
    }

    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: value => {
        setDisplay(Math.round(value));
      },
      onComplete: () => {
        setCompleted(true);
      },
    });

    return () => {
      controls.stop();
    };
  }, [isInView, prefersReducedMotion, target]);

  return (
    <BigNumber
      ref={ref}
      animate={
        completed && !prefersReducedMotion
          ? {
              scale: [1, 1.035, 1],
            }
          : {
              scale: 1,
            }
      }
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {prefix}
      {display.toLocaleString('pt-BR')}
      {suffix}
    </BigNumber>
  );
}

const stats: Stat[] = [
  {
    target: 25000,
    suffix: '+',
    prefix: '',
    label: 'alunos formados',
    description:
      'Pessoas que deram o primeiro passo para uma nova carreira.',
    icon: Users,
  },
  {
    target: 300,
    suffix: '+',
    prefix: '',
    label: 'empresas parceiras',
    description:
      'Organizações conectadas aos talentos da comunidade.',
    icon: Building2,
  },
  {
    target: 92,
    suffix: '%',
    prefix: '',
    label: 'satisfação dos alunos',
    description:
      'Experiências positivas durante a formação e a comunidade.',
    icon: TrendingUp,
  },
  {
    target: 6,
    suffix: ' meses',
    prefix: '',
    label: 'tempo médio até a 1ª vaga',
    description:
      'Tempo médio para transformar estudo em oportunidade real.',
    icon: Rocket,
  },
];

export function Numeros() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <NumbersSection id="numeros">
      <GridOverlay />
      <Glow />

      <Container>
        <Header>
          <HeaderMain>
            <EyebrowWrapper
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 14,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.7,
              }}
              transition={{
                duration: 0.55,
              }}
            >
              <Eyebrow>impacto em números</Eyebrow>
            </EyebrowWrapper>

            <Title
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Resultados que não cabem apenas em{' '}
              <span>linhas de código.</span>
            </Title>
          </HeaderMain>

          <HeaderSide
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.65,
              delay: 0.16,
            }}
          >
            <Description>
              Cada número representa uma pessoa que
              decidiu começar, evoluir e construir uma
              carreira em tecnologia.{' '}
              <strong>
                O próximo resultado pode ser o seu.
              </strong>
            </Description>

            <StatusBadge>
              <CheckCircle2 strokeWidth={1.8} />
              dados reais da comunidade
            </StatusBadge>
          </HeaderSide>
        </Header>

        <Dashboard
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 36,
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
            amount: 0.18,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <DashboardAccent />

          <DashboardTop>
            <DashboardLabel>
              <Sparkles strokeWidth={1.7} />
              devclub impact dashboard
            </DashboardLabel>

            <DashboardStatus>
              <StatusDot />
              atualizado em tempo real
            </DashboardStatus>
          </DashboardTop>

          <Grid>
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <StatCard
                  key={stat.label}
                  initial={
                    prefersReducedMotion
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
                      initial={{
                        scaleX: 0,
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.1,
                        delay: 0.35 + index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </Progress>
                </StatCard>
              );
            })}
          </Grid>

          <Footer
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
          >
            <FooterMain>
              <FooterIcon>
                <Rocket strokeWidth={1.7} />
              </FooterIcon>

              <FooterText>
                <strong>
                  Mais do que métricas. Histórias reais de
                  transformação.
                </strong>

                <span>
                  Alunos aprendendo, evoluindo e conquistando
                  novas oportunidades.
                </span>
              </FooterText>
            </FooterMain>

            <FooterBadge>
              <Sparkles strokeWidth={1.7} />
              próximo capítulo
            </FooterBadge>
          </Footer>
        </Dashboard>
      </Container>
    </NumbersSection>
  );
}