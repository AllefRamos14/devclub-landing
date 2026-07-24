import {
  Rocket,
  Sparkles,
} from 'lucide-react';

import { stats } from './data';

import { StatCard } from './StatCard';

import {
  Dashboard as DashboardContainer,
  DashboardAccent,
  DashboardLabel,
  DashboardStatus,
  DashboardTop,
  Footer,
  FooterBadge,
  FooterIcon,
  FooterMain,
  FooterText,
  Grid,
  StatusDot,
} from './styles';

import type { DashboardProps } from './types';

export function Dashboard({
  reducedMotion,
}: DashboardProps) {
  return (
    <DashboardContainer
      initial={
        reducedMotion
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
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            stat={stat}
            index={index}
            reducedMotion={reducedMotion}
          />
        ))}
      </Grid>

      <Footer
        initial={
          reducedMotion
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
              Mais do que métricas. Histórias reais de transformação.
            </strong>

            <span>
              Alunos aprendendo, evoluindo e conquistando novas oportunidades.
            </span>
          </FooterText>
        </FooterMain>

        <FooterBadge>
          <Sparkles strokeWidth={1.7} />
          próximo capítulo
        </FooterBadge>
      </Footer>
    </DashboardContainer>
  );
}
