import { useRef } from 'react';

import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
} from 'lucide-react';

import {
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import { Container, Eyebrow } from '../ui/Layout';

import { Closing } from './Closing';
import { CodeMarquee } from './CodeMarquee';
import { CompanyMarquee } from './CompanyMarquee';
import { MetricsGrid } from './MetricsGrid';
import { TalentTerminal } from './TalentTerminal';

import {
  EyebrowWrap,
  Header,
  HeaderBadge,
  HeaderBadges,
  HeaderMain,
  HeaderSide,
  Lead,
  LeftLight,
  RightLight,
  SectionBg,
  Title,
} from './styles';

export function Empresas() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.45,
  });

  const titleY = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReducedMotion ? [0, 0] : [26, -12],
  );

  const terminalY = useTransform(
    smoothProgress,
    [0.1, 0.82],
    prefersReducedMotion ? [0, 0] : [30, -18],
  );

  return (
    <SectionBg
      id="empresas"
      ref={sectionRef}
      $noPadTop={false}
    >
      <LeftLight />
      <RightLight />

      <Container>
        <Header>
          <HeaderMain>
            <EyebrowWrap
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
              viewport={{ once: true }}
            >
              <Eyebrow>onde nossos alunos estão</Eyebrow>
            </EyebrowWrap>

            <Title style={{ y: titleY }}>
              Eles aprenderam a programar.{' '}
              <span>
                Agora constroem produtos para milhões.
              </span>
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
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Lead>
              O que começa com uma aula pode terminar dentro do time de
              tecnologia de uma das maiores empresas do país.{' '}
              <strong>
                Nossos alunos já estão ocupando esses espaços.
              </strong>
            </Lead>

            <HeaderBadges>
              <HeaderBadge>
                <BriefcaseBusiness strokeWidth={1.7} />
                carreiras reais
              </HeaderBadge>

              <HeaderBadge>
                <Code2 strokeWidth={1.7} />
                código em produção
              </HeaderBadge>

              <HeaderBadge>
                <BadgeCheck strokeWidth={1.7} />
                mercado validado
              </HeaderBadge>
            </HeaderBadges>
          </HeaderSide>
        </Header>

        <TalentTerminal
          prefersReducedMotion={prefersReducedMotion}
          terminalY={terminalY}
        />

        <CodeMarquee />
      </Container>

      <CompanyMarquee />

      <Container>
        <MetricsGrid reducedMotion={prefersReducedMotion} />
        <Closing reducedMotion={prefersReducedMotion} />
      </Container>
    </SectionBg>
  );
}
