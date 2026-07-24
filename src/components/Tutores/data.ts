import {
  Braces,
  Code2,
  Smartphone,
  Terminal,
} from 'lucide-react';

import type { Tutor } from './types';

import GabrielMoriImage from '../../assets/GabrielMori.webp';
import GabrielQuadrosImage from '../../assets/GabrielQuadros.webp';
import LaisSuellenImage from '../../assets/LaisSuellen.webp';
import rodolfoMoriImage from '../../assets/Rodolfo.webp';


export const expertise = [
  'Full Stack',
  'Front-End',
  'Back-End',
  'Mobile',
  'Cloud',
  'Carreira',
  'Arquitetura',
  'Produto',
];

export const tutors: Tutor[] = [
  {
    initials: 'RM',
    image: rodolfoMoriImage,
    hue: 258,
    name: 'Rodolfo Mori',
    role: 'Fundador · Full Stack',
    bio:
      'De eletricista a desenvolvedor sênior, transformou a própria mudança de carreira em um método direto, prático e conectado às exigências reais do mercado de tecnologia.',
    longBio:
      'Depois de viver na prática os desafios de uma mudança de carreira, Rodolfo construiu uma metodologia que aproxima o aluno do cotidiano de um desenvolvedor profissional. Seu trabalho combina fundamentos sólidos, projetos reais, orientação de carreira e uma visão completa sobre como produtos digitais são construídos.',
    icon: Code2,
    experience: '+10 anos',
    specialty: 'Full Stack',
    technologies: [
      'JavaScript',
      'React',
      'Node.js',
      'Arquitetura',
    ],
    highlights: [
      'Experiência prática em projetos completos, do front-end ao deploy.',
      'Metodologia construída para acelerar mudanças de carreira.',
      'Conteúdo conectado às exigências reais das empresas.',
      'Visão técnica, profissional e estratégica do mercado.',
    ],
    journey: [
      {
        period: 'Início',
        title: 'Mudança de carreira',
        description:
          'Começou uma nova trajetória profissional estudando desenvolvimento e construindo projetos reais.',
      },
      {
        period: 'Evolução',
        title: 'Desenvolvedor sênior',
        description:
          'Consolidou experiência em aplicações completas, arquitetura e liderança técnica.',
      },
      {
        period: 'Hoje',
        title: 'Fundador e mentor',
        description:
          'Transforma experiência profissional em uma formação prática para novos desenvolvedores.',
      },
    ],
    metrics: [
      {
        value: '+25 mil',
        label: 'alunos impactados',
      },
      {
        value: '+300',
        label: 'empresas conectadas',
      },
    ],
    featured: true,
  },
  {
    initials: 'GM',
    image: GabrielMoriImage ,
    hue: 190,
    name: 'Gabriel Mori',
    role: 'Full Stack Engineer ',
    bio:
      'Especialista em interfaces modernas, experiência do usuário, animações fluidas e performance.',
    longBio:
      'Gabriel atua na construção de experiências digitais modernas, combinando design, performance e engenharia de front-end. Em suas aulas, demonstra como transformar interfaces estáticas em produtos fluidos, acessíveis e preparados para produção.',
    icon: Braces,
    experience: 'Senior',
    specialty: 'Front-End',
    technologies: [
      'React',
      'TypeScript',
      'Motion',
      'Design Systems',
    ],
    highlights: [
      'Construção de interfaces escaláveis e reutilizáveis.',
      'Animações orientadas à experiência do usuário.',
      'Boas práticas de performance e acessibilidade.',
      'Organização profissional de projetos front-end.',
    ],
    journey: [
      {
        period: 'Fundamentos',
        title: 'Interfaces modernas',
        description:
          'Desenvolveu domínio sobre componentes, responsividade e experiência do usuário.',
      },
      {
        period: 'Especialização',
        title: 'Full Stack Engineer',
        description:
          'Aprofundou conhecimentos em arquitetura, TypeScript, performance e animações.',
      },
      {
        period: 'Atual',
        title: 'Liderança técnica',
        description:
          'Orienta decisões técnicas e ajuda equipes a entregarem produtos consistentes.',
      },
    ],
  },
  {
    initials: 'GS',
    image: GabrielQuadrosImage,
    hue: 20,
    name: 'Gabriel Quadros',
    role: 'Back-End & Infra',
    bio:
      'Desenvolve APIs, integrações e estruturas escaláveis para produtos digitais de alta disponibilidade.',
    longBio:
      'Gabriel trabalha com os bastidores que mantêm produtos digitais funcionando. Sua experiência envolve APIs, bancos de dados, integrações, infraestrutura e decisões arquiteturais voltadas para segurança, desempenho e escalabilidade.',
    icon: Terminal,
    experience: 'Senior',
    specialty: 'Back-End',
    technologies: [
      'Node.js',
      'APIs',
      'Cloud',
      'PostgreSQL',
    ],
    highlights: [
      'Desenvolvimento de APIs seguras e escaláveis.',
      'Modelagem de dados orientada ao produto.',
      'Integrações entre serviços e plataformas.',
      'Infraestrutura preparada para ambientes reais.',
    ],
    journey: [
      {
        period: 'Base',
        title: 'Lógica e servidores',
        description:
          'Construiu uma base sólida em programação, bancos de dados e desenvolvimento de APIs.',
      },
      {
        period: 'Produção',
        title: 'Sistemas escaláveis',
        description:
          'Passou a desenvolver serviços preparados para alto volume e disponibilidade.',
      },
      {
        period: 'Atual',
        title: 'Back-end e infraestrutura',
        description:
          'Integra arquitetura, cloud e desenvolvimento para entregar produtos confiáveis.',
      },
    ],
  },
  {
    initials: 'CM',
    image: LaisSuellenImage,
    hue: 145,
    name: 'Lais Suellen',
    role: 'Mobile & Carreira',
    bio:
      'Ajuda alunos a criarem aplicativos, portfólios profissionais e estratégias para conquistar oportunidades.',
    longBio:
      'Lais conecta desenvolvimento mobile, experiência do usuário e posicionamento profissional. Seu trabalho ajuda alunos a transformarem conhecimento técnico em aplicativos relevantes, portfólios sólidos e uma apresentação profissional mais competitiva.',
    icon: Smartphone,
    experience: 'Mentoria',
    specialty: 'Mobile',
    technologies: [
      'React Native',
      'UX',
      'Carreira',
      'Produto',
    ],
    highlights: [
      'Desenvolvimento de aplicativos multiplataforma.',
      'Construção de portfólios orientados a resultados.',
      'Preparação para entrevistas e processos seletivos.',
      'Visão de produto aplicada aos projetos dos alunos.',
    ],
    journey: [
      {
        period: 'Produto',
        title: 'Experiência mobile',
        description:
          'Aprofundou conhecimentos em interfaces, aplicativos e comportamento do usuário.',
      },
      {
        period: 'Mercado',
        title: 'Projetos profissionais',
        description:
          'Participou da criação de produtos com foco em usabilidade e resultados.',
      },
      {
        period: 'Atual',
        title: 'Mentoria e carreira',
        description:
          'Orienta alunos na construção de projetos e no posicionamento profissional.',
      },
    ],
  },
];