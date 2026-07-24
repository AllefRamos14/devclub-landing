import {
  Building2,
  Rocket,
  TrendingUp,
  Users,
} from 'lucide-react';

import type { Stat } from './types';

export const stats: Stat[] = [
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
