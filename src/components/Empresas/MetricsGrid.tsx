import {
  Building2,
  Rocket,
  Users,
} from 'lucide-react';

import {
  Metric,
  MetricIcon,
  MetricLabel,
  MetricsGrid as MetricsGridContainer,
  MetricValue,
} from './styles';

interface MetricsGridProps {
  reducedMotion: boolean | null;
}

export function MetricsGrid({
  reducedMotion,
}: MetricsGridProps) {
  return (
    <MetricsGridContainer
      initial={
        reducedMotion
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
        margin: '-80px',
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Metric>
        <MetricIcon>
          <Users strokeWidth={1.7} />
        </MetricIcon>

        <MetricValue>+25 mil</MetricValue>

        <MetricLabel>
          alunos impactados pela comunidade DevClub
        </MetricLabel>
      </Metric>

      <Metric>
        <MetricIcon>
          <Building2 strokeWidth={1.7} />
        </MetricIcon>

        <MetricValue>+300</MetricValue>

        <MetricLabel>
          empresas conectadas aos nossos talentos
        </MetricLabel>
      </Metric>

      <Metric>
        <MetricIcon>
          <Rocket strokeWidth={1.7} />
        </MetricIcon>

        <MetricValue>Em produção</MetricValue>

        <MetricLabel>
          profissionais atuando em produtos reais
        </MetricLabel>
      </Metric>
    </MetricsGridContainer>
  );
}
