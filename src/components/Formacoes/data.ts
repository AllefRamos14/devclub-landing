import {
  Bot,
  BriefcaseBusiness,
  Code2,
  Layers3,
  MonitorSmartphone,
  Network,
} from 'lucide-react';

import type { Formacao } from './types';

export const formacoes: Formacao[] = [
  {
    id: '01',
    tag: 'full stack',
    title: 'Formação Full Stack',
    description:
      'A jornada completa para sair do zero e conquistar sua primeira oportunidade: front-end, back-end, banco de dados, deploy e projetos reais.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Docker',
    ],
    icon: Layers3,
    level: 3,
    levelLabel: 'do zero ao profissional',
    featured: true,
    href: '#full-stack',

    duration: '12 meses',
    totalLessons: 186,
    progress: 72,

    headline: 'Construa aplicações completas de ponta a ponta.',

    outcome:
      'Ao concluir esta formação, você estará preparado para desenvolver, testar e publicar aplicações completas utilizando tecnologias modernas do mercado.',

    modules: [
      {
        id: 'fullstack-01',
        number: '01',
        title: 'Fundamentos da programação',
        description:
          'Lógica de programação, algoritmos, variáveis, funções e resolução de problemas.',
        duration: '24 aulas',
        status: 'completed',
      },
      {
        id: 'fullstack-02',
        number: '02',
        title: 'HTML e CSS',
        description:
          'Estrutura semântica, layouts modernos, responsividade e animações.',
        duration: '28 aulas',
        status: 'completed',
      },
      {
        id: 'fullstack-03',
        number: '03',
        title: 'JavaScript profissional',
        description:
          'DOM, arrays, objetos, consumo de APIs e programação assíncrona.',
        duration: '36 aulas',
        status: 'active',
      },
      {
        id: 'fullstack-04',
        number: '04',
        title: 'React e TypeScript',
        description:
          'Componentes, estados, hooks, rotas e aplicações escaláveis.',
        duration: '42 aulas',
        status: 'locked',
      },
      {
        id: 'fullstack-05',
        number: '05',
        title: 'Node.js e APIs REST',
        description:
          'Back-end, autenticação, regras de negócio e arquitetura.',
        duration: '32 aulas',
        status: 'locked',
      },
      {
        id: 'fullstack-06',
        number: '06',
        title: 'Banco de dados e deploy',
        description:
          'PostgreSQL, Prisma, Docker, testes e publicação em produção.',
        duration: '24 aulas',
        status: 'locked',
      },
    ],

    finalProject: {
      title: 'Plataforma SaaS completa',
      description:
        'Crie uma aplicação com autenticação, dashboard, API REST, banco de dados, controle de acesso e deploy.',
      features: [
        'Autenticação JWT',
        'Dashboard responsivo',
        'API REST',
        'PostgreSQL e Prisma',
        'Deploy em produção',
      ],
    },
  },

  {
    id: '02',
    tag: 'front-end',
    title: 'Formação Front-End',
    description:
      'Crie interfaces modernas, responsivas e performáticas para produtos digitais que entregam uma experiência memorável.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'TypeScript',
      'Styled Components',
    ],
    icon: Code2,
    level: 2,
    levelLabel: 'iniciante ao avançado',
    href: '#front-end',

    duration: '6 meses',
    totalLessons: 112,
    progress: 64,

    headline: 'Transforme ideias em experiências digitais memoráveis.',

    outcome:
      'Você aprenderá a desenvolver interfaces responsivas, acessíveis, animadas e preparadas para aplicações reais.',

    modules: [
      {
        id: 'frontend-01',
        number: '01',
        title: 'HTML semântico',
        description:
          'Estrutura de páginas, acessibilidade e boas práticas.',
        duration: '18 aulas',
        status: 'completed',
      },
      {
        id: 'frontend-02',
        number: '02',
        title: 'CSS moderno',
        description:
          'Flexbox, Grid, responsividade, animações e design systems.',
        duration: '26 aulas',
        status: 'completed',
      },
      {
        id: 'frontend-03',
        number: '03',
        title: 'JavaScript',
        description:
          'Manipulação do DOM, eventos, módulos e consumo de APIs.',
        duration: '28 aulas',
        status: 'active',
      },
      {
        id: 'frontend-04',
        number: '04',
        title: 'React',
        description:
          'Componentes, hooks, estado, contexto e roteamento.',
        duration: '30 aulas',
        status: 'locked',
      },
      {
        id: 'frontend-05',
        number: '05',
        title: 'Performance e publicação',
        description:
          'Otimização, testes, acessibilidade e deploy.',
        duration: '10 aulas',
        status: 'locked',
      },
    ],

    finalProject: {
      title: 'Landing page de alto impacto',
      description:
        'Desenvolva uma experiência responsiva com animações, acessibilidade e alta performance.',
      features: [
        'Design responsivo',
        'Framer Motion',
        'Styled Components',
        'Acessibilidade',
        'Deploy na Vercel',
      ],
    },
  },

  {
    id: '03',
    tag: 'avançada',
    title: 'Engenharia de Software',
    description:
      'Domine arquitetura, escalabilidade e decisões técnicas para construir sistemas preparados para crescer.',
    technologies: [
      'Arquitetura',
      'Clean Code',
      'System Design',
      'Testes',
      'Cloud',
    ],
    icon: Network,
    level: 3,
    levelLabel: 'nível avançado',
    href: '#engenharia',

    duration: '8 meses',
    totalLessons: 96,
    progress: 48,

    headline: 'Pense como engenheiro. Construa como especialista.',

    outcome:
      'Você desenvolverá uma visão técnica mais estratégica para criar sistemas escaláveis, seguros e fáceis de manter.',

    modules: [
      {
        id: 'engenharia-01',
        number: '01',
        title: 'Clean Code',
        description:
          'Princípios para escrever códigos legíveis, previsíveis e sustentáveis.',
        duration: '18 aulas',
        status: 'completed',
      },
      {
        id: 'engenharia-02',
        number: '02',
        title: 'Arquitetura de software',
        description:
          'Camadas, dependências, modularização e Clean Architecture.',
        duration: '22 aulas',
        status: 'active',
      },
      {
        id: 'engenharia-03',
        number: '03',
        title: 'Testes automatizados',
        description:
          'Testes unitários, integração, mocks e estratégias de qualidade.',
        duration: '20 aulas',
        status: 'locked',
      },
      {
        id: 'engenharia-04',
        number: '04',
        title: 'System Design',
        description:
          'Escalabilidade, cache, filas, bancos e sistemas distribuídos.',
        duration: '24 aulas',
        status: 'locked',
      },
      {
        id: 'engenharia-05',
        number: '05',
        title: 'Cloud e observabilidade',
        description:
          'Deploy, métricas, logs, monitoramento e disponibilidade.',
        duration: '12 aulas',
        status: 'locked',
      },
    ],

    finalProject: {
      title: 'Arquitetura de uma plataforma escalável',
      description:
        'Projete uma aplicação preparada para grande volume de usuários e evolução contínua.',
      features: [
        'Clean Architecture',
        'Testes automatizados',
        'Cache e filas',
        'Documentação técnica',
        'Observabilidade',
      ],
    },
  },

  {
    id: '04',
    tag: 'ia para devs',
    title: 'Inteligência Artificial',
    description:
      'Aplique IA na rotina de desenvolvimento com prompting técnico, agentes, automações e integrações inteligentes.',
    technologies: [
      'LLMs',
      'Prompt Engineering',
      'Agentes',
      'APIs',
      'Automação',
    ],
    icon: Bot,
    level: 2,
    levelLabel: 'nível intermediário',
    href: '#ia',

    duration: '4 meses',
    totalLessons: 68,
    progress: 35,

    headline: 'Use inteligência artificial para multiplicar sua produtividade.',

    outcome:
      'Você aprenderá a integrar modelos de inteligência artificial em produtos, fluxos e aplicações reais.',

    modules: [
      {
        id: 'ia-01',
        number: '01',
        title: 'Fundamentos de IA generativa',
        description:
          'Modelos de linguagem, tokens, contexto e limitações.',
        duration: '14 aulas',
        status: 'completed',
      },
      {
        id: 'ia-02',
        number: '02',
        title: 'Prompt Engineering',
        description:
          'Criação de instruções claras, estruturadas e reutilizáveis.',
        duration: '16 aulas',
        status: 'active',
      },
      {
        id: 'ia-03',
        number: '03',
        title: 'Integração com APIs',
        description:
          'Consumo de modelos e construção de experiências inteligentes.',
        duration: '16 aulas',
        status: 'locked',
      },
      {
        id: 'ia-04',
        number: '04',
        title: 'Agentes e automações',
        description:
          'Ferramentas, memória, workflows e execução de tarefas.',
        duration: '14 aulas',
        status: 'locked',
      },
      {
        id: 'ia-05',
        number: '05',
        title: 'Produto com inteligência artificial',
        description:
          'Planejamento, implementação e publicação de uma solução real.',
        duration: '8 aulas',
        status: 'locked',
      },
    ],

    finalProject: {
      title: 'Assistente inteligente para desenvolvedores',
      description:
        'Crie uma aplicação com chat, histórico, contexto e integração com modelos de IA.',
      features: [
        'Integração com LLM',
        'Histórico de conversas',
        'Prompt dinâmico',
        'Streaming de respostas',
        'Interface responsiva',
      ],
    },
  },

  {
    id: '05',
    tag: 'mobile',
    title: 'Formação Mobile',
    description:
      'Desenvolva aplicativos modernos para iOS e Android, da primeira tela até a publicação nas lojas.',
    technologies: [
      'React Native',
      'TypeScript',
      'Expo',
      'iOS',
      'Android',
    ],
    icon: MonitorSmartphone,
    level: 2,
    levelLabel: 'iniciante ao avançado',
    href: '#mobile',

    duration: '6 meses',
    totalLessons: 104,
    progress: 28,

    headline: 'Crie experiências que acompanham o usuário em qualquer lugar.',

    outcome:
      'Você estará preparado para desenvolver aplicativos multiplataforma e publicá-los para Android e iOS.',

    modules: [
      {
        id: 'mobile-01',
        number: '01',
        title: 'Fundamentos do React Native',
        description:
          'Componentes, estilos, propriedades e estado.',
        duration: '22 aulas',
        status: 'completed',
      },
      {
        id: 'mobile-02',
        number: '02',
        title: 'Navegação e interfaces',
        description:
          'Rotas, layouts, formulários e experiência mobile.',
        duration: '24 aulas',
        status: 'active',
      },
      {
        id: 'mobile-03',
        number: '03',
        title: 'APIs e persistência',
        description:
          'Integrações, armazenamento local e autenticação.',
        duration: '24 aulas',
        status: 'locked',
      },
      {
        id: 'mobile-04',
        number: '04',
        title: 'Recursos nativos',
        description:
          'Câmera, notificações, localização e permissões.',
        duration: '20 aulas',
        status: 'locked',
      },
      {
        id: 'mobile-05',
        number: '05',
        title: 'Publicação',
        description:
          'Build, testes e envio para Google Play e App Store.',
        duration: '14 aulas',
        status: 'locked',
      },
    ],

    finalProject: {
      title: 'Aplicativo de agendamentos',
      description:
        'Desenvolva um aplicativo completo com autenticação, agenda, notificações e integração com uma API.',
      features: [
        'Autenticação',
        'Navegação',
        'Notificações',
        'Integração com API',
        'Build para Android e iOS',
      ],
    },
  },

  {
    id: '06',
    tag: 'carreira',
    title: 'Trilha de Empregabilidade',
    description:
      'Construa um portfólio forte, melhore seu LinkedIn e se prepare para entrevistas técnicas e processos seletivos.',
    technologies: [
      'Portfólio',
      'LinkedIn',
      'Currículo',
      'Entrevistas',
      'Networking',
    ],
    icon: BriefcaseBusiness,
    level: 1,
    levelLabel: 'preparação profissional',
    href: '#empregabilidade',

    duration: '8 semanas',
    totalLessons: 42,
    progress: 84,

    headline: 'Transforme conhecimento técnico em oportunidade profissional.',

    outcome:
      'Você sairá com perfil profissional preparado, portfólio organizado e maior segurança para participar de processos seletivos.',

    modules: [
      {
        id: 'carreira-01',
        number: '01',
        title: 'Posicionamento profissional',
        description:
          'Objetivo de carreira, especialidade e apresentação pessoal.',
        duration: '8 aulas',
        status: 'completed',
      },
      {
        id: 'carreira-02',
        number: '02',
        title: 'Currículo e LinkedIn',
        description:
          'Otimização de perfil, palavras-chave e apresentação de resultados.',
        duration: '10 aulas',
        status: 'completed',
      },
      {
        id: 'carreira-03',
        number: '03',
        title: 'Portfólio profissional',
        description:
          'Escolha de projetos, documentação e apresentação visual.',
        duration: '10 aulas',
        status: 'active',
      },
      {
        id: 'carreira-04',
        number: '04',
        title: 'Entrevistas técnicas',
        description:
          'Preparação, comunicação e resolução de desafios.',
        duration: '8 aulas',
        status: 'locked',
      },
      {
        id: 'carreira-05',
        number: '05',
        title: 'Networking e candidaturas',
        description:
          'Conexões estratégicas, mensagens e acompanhamento de vagas.',
        duration: '6 aulas',
        status: 'locked',
      },
    ],

    finalProject: {
      title: 'Kit profissional completo',
      description:
        'Finalize a trilha com currículo, LinkedIn e portfólio prontos para candidaturas reais.',
      features: [
        'Currículo otimizado',
        'Perfil do LinkedIn',
        'Portfólio publicado',
        'Pitch profissional',
        'Plano de candidaturas',
      ],
    },
  },
];
