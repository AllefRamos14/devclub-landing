import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Users,
} from 'lucide-react';

import type { Milestone } from './types';

export const milestones: Milestone[] = [
  {
    year: '2018',
    eyebrow: 'decisão',
    title: 'Do eletricista ao primeiro emprego como desenvolvedor',
    description:
      'Uma mudança de carreira iniciada do zero. Foram meses de estudo, prática e persistência até conquistar a primeira oportunidade como programador em uma grande instituição financeira.',
    icon: Code2,
  },
  {
    year: '2020',
    eyebrow: 'propósito',
    title: 'A experiência se transforma no nascimento do DevClub',
    description:
      'Depois de viver cada dificuldade da transição profissional, Rodolfo Mori criou a escola que gostaria de ter encontrado quando começou: prática, direta e conectada ao mercado.',
    icon: GraduationCap,
  },
  {
    year: '2022',
    eyebrow: 'comunidade',
    title: 'Milhares de pessoas começam novas histórias na tecnologia',
    description:
      'A comunidade cresceu, atravessou fronteiras e reuniu alunos de diferentes realidades com um mesmo objetivo: construir uma carreira por meio da programação.',
    icon: Users,
  },
  {
    year: 'hoje',
    eyebrow: 'impacto',
    title: 'Uma das maiores comunidades de formação tecnológica do Brasil',
    description:
      'O DevClub segue aproximando novos talentos das oportunidades do mercado, com ensino prático, suporte e uma comunidade que cresce junto.',
    icon: BriefcaseBusiness,
    highlight: true,
    stats: [
      {
        value: '+25 mil',
        label: 'alunos impactados',
      },
      {
        value: '+300',
        label: 'empresas conectadas',
      },
    ],
  },
];
