import type { Depoimento } from './types';

import AlineSousaImage from '../../../public/students/aline-souza.webp';
import brunacostaImage from '../../../public/students/bruna-costa.webp';
import diegoferreiraImage from '../../../public/students/diego-ferreira.webp';
import feliperochaImage from '../../../public/students/felipe-rocha.webp';
import julianaalvesImage from '../../../public/students/juliana-alves.webp';
import marcosviniciusImage from '../../../public/students/marcos-vinicius.webp';
import patricialimaImage from '../../../public/students/patricia-lima.webp';
import rafaelnunesImage from '../../../public/students/rafael-nunes.webp';

export const linha1: Depoimento[] = [
  {
    id: 'juliana-alves',
    quote:
      'Eu era técnica em enfermagem. Em oito meses de DevClub consegui minha primeira vaga como desenvolvedora front-end júnior.',
    name: 'Juliana Alves',
    role: 'Front-End Jr.',
    previousArea: 'Enfermagem',
    time: '8 meses',
    modality: 'Remoto',
    initials: 'JA',
    hue: 258,
     image: julianaalvesImage,
    badge: 'Primeira vaga',
    story:
      'Depois de anos trabalhando na área da saúde, Juliana decidiu iniciar uma transição profissional. Começou sem experiência em programação, construiu seus primeiros projetos e desenvolveu um portfólio focado em aplicações front-end modernas.',
    stack: ['React', 'TypeScript', 'JavaScript', 'Git', 'APIs REST'],
    achievements: [
      'Primeira vaga em tecnologia',
      'Trabalho totalmente remoto',
      'Portfólio com projetos reais',
    ],
    journey: [
      {
        label: 'Antes',
        title: 'Técnica em enfermagem',
        description:
          'Trabalhava na área da saúde e nunca havia programado.',
      },
      {
        label: 'Formação',
        title: 'Desenvolvimento Front-End',
        description:
          'Estudou React, TypeScript, APIs e construção de portfólio.',
      },
      {
        label: 'Hoje',
        title: 'Front-End Jr.',
        description:
          'Atua remotamente desenvolvendo interfaces modernas.',
      },
    ],
  },
  {
    id: 'marcos-vinicius',
    quote:
      'O que mais me marcou foi o suporte próximo. Não é um curso gravado e abandonado. Alguém realmente acompanha o seu progresso.',
    name: 'Marcos Vinícius',
    role: 'Full Stack Jr.',
    previousArea: 'Comercial',
    time: '10 meses',
    modality: 'Híbrido',
    initials: 'MV',
    hue: 20,
     image: marcosviniciusImage,
    badge: 'Mudança de carreira',
    story:
      'Marcos trabalhava na área comercial e procurava uma profissão que oferecesse mais possibilidades de crescimento. Durante sua formação, desenvolveu aplicações completas e passou a compreender todo o fluxo entre front-end, back-end e banco de dados.',
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    achievements: [
      'Transição completa de carreira',
      'Projetos full stack publicados',
      'Primeira oportunidade profissional',
    ],
    journey: [
      {
        label: 'Antes',
        title: 'Área comercial',
        description:
          'Atuava com vendas e atendimento a clientes.',
      },
      {
        label: 'Formação',
        title: 'Desenvolvimento Full Stack',
        description:
          'Construiu aplicações completas com React e Node.js.',
      },
      {
        label: 'Hoje',
        title: 'Full Stack Jr.',
        description:
          'Participa do desenvolvimento de produtos digitais.',
      },
    ],
  },
  {
    id: 'patricia-lima',
    quote:
      'Troquei de carreira aos 34 anos. Hoje ganho mais do que na minha função anterior e tenho a liberdade de trabalhar remotamente.',
    name: 'Patrícia Lima',
    role: 'Back-End Jr.',
    previousArea: 'Contabilidade',
    time: '11 meses',
    modality: 'Remoto',
    initials: 'PL',
    hue: 190,
     image: patricialimaImage,
    badge: 'Carreira remota',
    story:
      'Patrícia começou sua transição aos 34 anos. Aproveitou sua experiência com organização e análise de dados para se especializar em desenvolvimento back-end, bancos de dados e criação de APIs.',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'REST'],
    achievements: [
      'Trabalho remoto',
      'Especialização em back-end',
      'Evolução profissional e financeira',
    ],
    journey: [
      {
        label: 'Antes',
        title: 'Contabilidade',
        description:
          'Trabalhava com processos financeiros e administrativos.',
      },
      {
        label: 'Formação',
        title: 'Back-End e APIs',
        description:
          'Aprendeu Node.js, bancos de dados e arquitetura de APIs.',
      },
      {
        label: 'Hoje',
        title: 'Back-End Jr.',
        description:
          'Desenvolve serviços e integrações para aplicações web.',
      },
    ],
  },
  {
    id: 'diego-ferreira',
    quote:
      'A trilha de empregabilidade fez toda diferença. Sem ela, eu nem saberia por onde começar a procurar minha primeira oportunidade.',
    name: 'Diego Ferreira',
    role: 'Front-End Jr.',
    previousArea: 'Logística',
    time: '7 meses',
    modality: 'Presencial',
    initials: 'DF',
    hue: 145,
     image: diegoferreiraImage,
    badge: 'Contratado em 7 meses',
    story:
      'Diego conciliou os estudos com o trabalho na área de logística. Além da parte técnica, concentrou-se na preparação para processos seletivos, melhoria de currículo, LinkedIn e apresentação de projetos.',
    stack: ['React', 'JavaScript', 'CSS', 'Git', 'Figma'],
    achievements: [
      'Contratação em sete meses',
      'Primeira experiência profissional',
      'Portfólio preparado para entrevistas',
    ],
    journey: [
      {
        label: 'Antes',
        title: 'Logística',
        description:
          'Trabalhava com operações e controle de processos.',
      },
      {
        label: 'Formação',
        title: 'Front-End e empregabilidade',
        description:
          'Criou projetos e se preparou para processos seletivos.',
      },
      {
        label: 'Hoje',
        title: 'Front-End Jr.',
        description:
          'Desenvolve interfaces para sistemas corporativos.',
      },
    ],
  },
];

export const linha2: Depoimento[] = [
  {
    id: 'bruna-costa',
    quote:
      'Eu já trabalhava com suporte técnico, mas não conseguia evoluir. O DevClub me deu o caminho estruturado que eu não encontrava sozinho.',
    name: 'Bruna Costa',
    role: 'Full Stack Jr.',
    previousArea: 'Suporte técnico',
    time: '9 meses',
    modality: 'Remoto',
    initials: 'BC',
    hue: 300,
     image: brunacostaImage,
    badge: 'Evolução profissional',
    story:
      'Bruna já possuía contato com tecnologia, mas sentia dificuldade em organizar seus estudos. Com uma trilha estruturada, evoluiu do suporte técnico para o desenvolvimento de aplicações completas.',
    stack: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Docker'],
    achievements: [
      'Saída do suporte para desenvolvimento',
      'Aplicações full stack completas',
      'Nova posição remota',
    ],
    journey: [
      {
        label: 'Antes',
        title: 'Suporte técnico',
        description:
          'Atendia usuários e solucionava problemas operacionais.',
      },
      {
        label: 'Formação',
        title: 'Desenvolvimento Full Stack',
        description:
          'Aprendeu a construir interfaces, APIs e bancos de dados.',
      },
      {
        label: 'Hoje',
        title: 'Full Stack Jr.',
        description:
          'Trabalha em diferentes camadas de aplicações web.',
      },
    ],
  },
  {
    id: 'felipe-rocha',
    quote:
      'As mentorias coletivas resolvem dúvidas que poderiam travar um projeto inteiro. Isso economiza semanas de estudo tentando descobrir tudo sozinho.',
    name: 'Felipe Rocha',
    role: 'Mobile Jr.',
    previousArea: 'Atendimento',
    time: '10 meses',
    modality: 'Híbrido',
    initials: 'FR',
    hue: 40,
     image: feliperochaImage,
    badge: 'Primeiro app publicado',
    story:
      'Felipe iniciou seus estudos criando pequenos projetos web. Durante sua evolução, descobriu interesse pelo desenvolvimento mobile e passou a construir aplicativos focados em experiências simples e funcionais.',
    stack: ['React Native', 'TypeScript', 'Expo', 'APIs REST', 'Git'],
    achievements: [
      'Primeiro aplicativo publicado',
      'Migração para desenvolvimento mobile',
      'Participação em projetos reais',
    ],
    journey: [
      {
        label: 'Antes',
        title: 'Atendimento',
        description:
          'Trabalhava diretamente com suporte ao cliente.',
      },
      {
        label: 'Formação',
        title: 'Desenvolvimento Mobile',
        description:
          'Construiu aplicações com React Native e integração de APIs.',
      },
      {
        label: 'Hoje',
        title: 'Mobile Jr.',
        description:
          'Desenvolve aplicativos para dispositivos móveis.',
      },
    ],
  },
  {
    id: 'aline-souza',
    quote:
      'Publiquei meu primeiro projeto real no terceiro mês. Foi isso que me deu confiança para começar a enviar currículos e participar de entrevistas.',
    name: 'Aline Souza',
    role: 'Front-End Jr.',
    previousArea: 'Administração',
    time: '6 meses',
    modality: 'Remoto',
    initials: 'AS',
    hue: 210,
     image: AlineSousaImage,
    badge: 'Projeto no 3º mês',
    story:
      'Aline começou construindo páginas simples e rapidamente evoluiu para projetos completos. Publicar seu primeiro projeto foi o ponto de virada que trouxe confiança para iniciar sua busca profissional.',
    stack: ['React', 'TypeScript', 'Styled Components', 'Git', 'Vite'],
    achievements: [
      'Primeiro projeto no terceiro mês',
      'Portfólio profissional publicado',
      'Contratação em seis meses',
    ],
    journey: [
      {
        label: 'Antes',
        title: 'Administração',
        description:
          'Atuava com rotinas administrativas e organização.',
      },
      {
        label: 'Formação',
        title: 'Interfaces modernas',
        description:
          'Desenvolveu projetos responsivos com React e TypeScript.',
      },
      {
        label: 'Hoje',
        title: 'Front-End Jr.',
        description:
          'Trabalha remotamente construindo produtos digitais.',
      },
    ],
  },
  {
    id: 'rafael-nunes',
    quote:
      'Sem faculdade e sem experiência anterior, consegui minha primeira vaga usando apenas o portfólio construído durante a formação.',
    name: 'Rafael Nunes',
    role: 'Back-End Jr.',
    previousArea: 'Construção civil',
    time: '12 meses',
    modality: 'Remoto',
    initials: 'RN',
    hue: 165,
     image: rafaelnunesImage,
    badge: 'Do zero à primeira vaga',
    story:
      'Rafael começou sem formação acadêmica na área e sem experiência com programação. Com consistência, construiu APIs, estudou bancos de dados e transformou seus projetos em um portfólio profissional.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker'],
    achievements: [
      'Primeira vaga sem faculdade',
      'Portfólio focado em back-end',
      'Trabalho remoto',
    ],
    journey: [
      {
        label: 'Antes',
        title: 'Construção civil',
        description:
          'Trabalhava em uma área sem relação com tecnologia.',
      },
      {
        label: 'Formação',
        title: 'Back-End moderno',
        description:
          'Desenvolveu APIs, autenticação e bancos de dados.',
      },
      {
        label: 'Hoje',
        title: 'Back-End Jr.',
        description:
          'Atua construindo serviços para aplicações web.',
      },
    ],
  },
];