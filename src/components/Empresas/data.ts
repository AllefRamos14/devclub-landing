import type { Company } from './types';

export const companies: Company[] = [
  {
    name: 'Nubank',
    slug: 'nubank',
    category: 'serviços financeiros',
    description: 'Produtos digitais usados por milhões de pessoas todos os dias.',
    status: 'talentos em produção',
    code: 'career.deploy("nubank")',
    logo: '/companies/nubank.svg',
    color: '#820AD1',
    colorRgb: '130, 10, 209',
    contrastColor: '#FFFFFF',
    featured: true,
  },
  {
    name: 'iFood',
    slug: 'ifood',
    category: 'tecnologia e delivery',
    description: 'Tecnologia, logística e produtos digitais em escala nacional.',
    status: 'novas oportunidades',
    code: 'talent.connect("ifood")',
    logo: '/companies/ifood.svg',
    color: '#EA1D2C',
    colorRgb: '234, 29, 44',
    contrastColor: '#FFFFFF',
    featured: true,
  },
  {
    name: 'Mercado Livre',
    slug: 'mercado-livre',
    category: 'comércio eletrônico',
    description: 'Infraestrutura e experiências digitais usadas em toda a América Latina.',
    status: 'engenharia em escala',
    code: 'developer.ship("meli")',
    logo: '/companies/mercado-livre.svg',
    color: '#FFE600',
    colorRgb: '255, 230, 0',
    contrastColor: '#2D3277',
    featured: true,
  },
  {
    name: 'VTEX',
    slug: 'vtex',
    category: 'digital commerce',
    description: 'Tecnologia brasileira impulsionando operações globais de comércio.',
    status: 'produto global',
    code: 'career.unlock("vtex")',
    logo: '/companies/vtex.svg',
    color: '#F71963',
    colorRgb: '247, 25, 99',
    contrastColor: '#FFFFFF',
    featured: true,
  },
  {
    name: 'Stone',
    slug: 'stone',
    category: 'soluções financeiras',
    description: '', status: '', code: '',
    logo: '/companies/stone.svg',
    color: '#00A868', colorRgb: '0, 168, 104', contrastColor: '#FFFFFF',
  },
  {
    name: 'QuintoAndar',
    slug: 'quintoandar',
    category: 'tecnologia imobiliária',
    description: '', status: '', code: '',
    logo: '/companies/quintoandar.svg',
    color: '#FF5A5F', colorRgb: '255, 90, 95', contrastColor: '#FFFFFF',
  },
  {
    name: 'C6 Bank',
    slug: 'c6-bank',
    category: 'serviços financeiros',
    description: '', status: '', code: '',
    logo: '/companies/c6-bank.svg',
    color: '#242424', colorRgb: '36, 36, 36', contrastColor: '#FFFFFF',
  },
  {
    name: 'Creditas',
    slug: 'creditas',
    category: 'fintech',
    description: '', status: '', code: '',
    logo: '/companies/creditas.svg',
    color: '#6B2AE8', colorRgb: '107, 42, 232', contrastColor: '#FFFFFF',
  },
  {
    name: 'Wellhub',
    slug: 'wellhub',
    category: 'bem-estar corporativo',
    description: '', status: '', code: '',
    logo: '/companies/wellhub.svg',
    color: '#8CFF00', colorRgb: '140, 255, 0', contrastColor: '#111111',
  },
  {
    name: 'Loggi',
    slug: 'loggi',
    category: 'logística e tecnologia',
    description: '', status: '', code: '',
    logo: '/companies/loggi.svg',
    color: '#00BAFF', colorRgb: '0, 186, 255', contrastColor: '#FFFFFF',
  },
  {
    name: 'Hotmart',
    slug: 'hotmart',
    category: 'economia digital',
    description: '', status: '', code: '',
    logo: '/companies/hotmart.svg',
    color: '#F04E23', colorRgb: '240, 78, 35', contrastColor: '#FFFFFF',
  },
  {
    name: 'Loft',
    slug: 'loft',
    category: 'real estate tech',
    description: '', status: '', code: '',
    logo: '/companies/loft.svg',
    color: '#7A35FF', colorRgb: '122, 53, 255', contrastColor: '#FFFFFF',
  },
];

export const featuredCompanies = companies.filter(company => company.featured);
export const firstRow = companies.slice(0, 6);
export const secondRow = companies.slice(6);

export const particles = Array.from({ length: 24 }, (_, index) => ({
  left: (index * 31) % 100,
  top: 14 + ((index * 19) % 76),
  size: 1 + (index % 3),
  delay: (index % 8) * 0.62,
  duration: 5 + (index % 6),
}));

export const outerNodeStyles = [
  { top: '0%', left: '50%' },
  { top: '25%', left: '93%' },
  { top: '75%', left: '93%' },
  { top: '100%', left: '50%' },
  { top: '75%', left: '7%' },
  { top: '25%', left: '7%' },
];

export const innerNodeStyles = [
  { top: '0%', left: '50%' },
  { top: '50%', left: '100%' },
  { top: '100%', left: '50%' },
  { top: '50%', left: '0%' },
];

export const codeItems = [
  { text: 'career.deploy()', accent: true },
  { text: 'firstJob.unlocked()' },
  { text: 'talent.hired()', accent: true },
  { text: 'skills.toProduction()' },
  { text: 'developer.connected()', accent: true },
  { text: 'newChapter.start()' },
];
