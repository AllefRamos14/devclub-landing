export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLinkItem[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Formações',
    links: [
      { label: 'Full Stack', href: '#formacoes' },
      { label: 'Front-End', href: '#formacoes' },
      { label: 'Mobile', href: '#formacoes' },
    ],
  },
  {
    title: 'DevClub',
    links: [
      { label: 'Quem somos', href: '#quem-somos' },
      { label: 'Tutores', href: '#tutores' },
      { label: 'Alunos', href: '#alunos' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Empresas', href: '#empresas' },
      { label: 'Resultados', href: '#numeros' },
      { label: 'Começar agora', href: '#formacoes' },
    ],
  },
];
