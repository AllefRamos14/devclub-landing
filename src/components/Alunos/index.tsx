import {
  useCallback,
  useRef,
  useState,
} from 'react';

import {
  BadgeCheck,
  BriefcaseBusiness,
  Laptop2,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';

import {
  LayoutGroup,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import { Container, Eyebrow } from '../ui/Layout';

import {
  linha1,
  linha2,
} from './data';

import { renderCards } from './renderCards';
import { StudentCaseModal } from './StudentCaseModal';

import type { SelectedStudent } from './types';

import {
  BannerContent,
  BannerDescription,
  BannerEyebrow,
  BannerIndicator,
  BannerTitle,
  BottomBanner,
  EyebrowWrapper,
  Header,
  HeaderBadge,
  HeaderBadges,
  HeaderMain,
  HeaderSide,
  Lead,
  LeftLight,
  MarqueeSection,
  MarqueeTrack,
  MarqueeViewport,
  RightLight,
  SectionBg,
  StatCard,
  StatIcon,
  StatLabel,
  StatsPanel,
  StatValue,
  Title,
} from './styles';

export function Alunos() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [selectedStudent, setSelectedStudent] =
    useState<SelectedStudent | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    mass: 0.45,
  });

  const titleY = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReducedMotion ? [0, 0] : [24, -12],
  );

  const handleCloseModal = useCallback(() => {
    setSelectedStudent(null);
  }, []);

  return (
    <LayoutGroup id="students-cases">
      <SectionBg
        id="alunos"
        ref={sectionRef}
      >
        <LeftLight />
        <RightLight />

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
                  margin: '-60px',
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Eyebrow>histórias reais</Eyebrow>
              </EyebrowWrapper>

              <Title
                style={{ y: titleY }}
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
                  margin: '-70px',
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Resultados que começaram com{' '}
                <span>uma única decisão.</span>
              </Title>
            </HeaderMain>

            <HeaderSide
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-70px',
              }}
              transition={{
                duration: 0.7,
                delay: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Lead>
                Pessoas comuns, vindas de diferentes profissões,
                decidiram aprender tecnologia e construir uma nova
                trajetória.{' '}
                <strong>
                  Cada história abaixo começou exatamente do zero.
                </strong>
              </Lead>

              <HeaderBadges>
                <HeaderBadge>
                  <BadgeCheck strokeWidth={1.7} />
                  histórias verificadas
                </HeaderBadge>

                <HeaderBadge>
                  <TrendingUp strokeWidth={1.7} />
                  evolução profissional
                </HeaderBadge>

                <HeaderBadge>
                  <Sparkles strokeWidth={1.7} />
                  novas carreiras
                </HeaderBadge>
              </HeaderBadges>
            </HeaderSide>
          </Header>

          <StatsPanel
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                    scale: 0.99,
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
              duration: 0.72,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <StatCard>
              <StatIcon>
                <Users strokeWidth={1.7} />
              </StatIcon>

              <StatValue>+25 mil</StatValue>
              <StatLabel>
                alunos impactados por uma formação prática.
              </StatLabel>
            </StatCard>

            <StatCard>
              <StatIcon>
                <BriefcaseBusiness strokeWidth={1.7} />
              </StatIcon>

              <StatValue>+300</StatValue>
              <StatLabel>
                empresas conectadas à nossa comunidade.
              </StatLabel>
            </StatCard>

            <StatCard>
              <StatIcon>
                <Laptop2 strokeWidth={1.7} />
              </StatIcon>

              <StatValue>Do zero</StatValue>
              <StatLabel>
                ao primeiro projeto e à primeira oportunidade.
              </StatLabel>
            </StatCard>
          </StatsPanel>
        </Container>

        <MarqueeSection>
          <MarqueeViewport>
            <MarqueeTrack
              $duration={48}
              $paused={Boolean(selectedStudent)}
              aria-label="Depoimentos de alunos"
            >
              {renderCards({
                items: linha1,
                rowName: 'linha-1-a',
                onSelect: setSelectedStudent,
              })}

              {renderCards({
                items: linha1,
                rowName: 'linha-1-b',
                onSelect: setSelectedStudent,
              })}
            </MarqueeTrack>
          </MarqueeViewport>

          <MarqueeViewport>
            <MarqueeTrack
              $duration={44}
              $reverse
              $paused={Boolean(selectedStudent)}
              aria-label="Mais depoimentos de alunos"
            >
              {renderCards({
                items: linha2,
                rowName: 'linha-2-a',
                onSelect: setSelectedStudent,
              })}

              {renderCards({
                items: linha2,
                rowName: 'linha-2-b',
                onSelect: setSelectedStudent,
              })}
            </MarqueeTrack>
          </MarqueeViewport>
        </MarqueeSection>

        <Container>
          <BottomBanner
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                    scale: 0.99,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: '-80px',
            }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <BannerContent>
              <BannerEyebrow>
                <Sparkles strokeWidth={1.7} />
                próximo capítulo
              </BannerEyebrow>

              <BannerTitle>
                Toda grande mudança começa quando alguém decide
                tentar.
              </BannerTitle>

              <BannerDescription>
                As experiências são diferentes, mas todas têm algo
                em comum: uma decisão, consistência e a construção
                de habilidades que o mercado realmente procura.
              </BannerDescription>
            </BannerContent>

            <BannerIndicator aria-hidden="true">
              <TrendingUp strokeWidth={1.6} />
            </BannerIndicator>
          </BottomBanner>
        </Container>
      </SectionBg>

      <StudentCaseModal
        selectedStudent={selectedStudent}
        onClose={handleCloseModal}
      />
    </LayoutGroup>
  );
}