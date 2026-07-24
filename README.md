# DevClub — Página Institucional

Projeto para o desafio da DevClub (concurso de vaga Full Stack PJ).

## Stack
- React + TypeScript
- styled-components (tema com design tokens em `src/styles/theme.ts`)
- framer-motion (animações e scroll-reveal)
- Vite

## Rodando localmente
\`\`\`bash
npm install
npm run dev
\`\`\`

## Build de produção
\`\`\`bash
npm run build
npm run preview
\`\`\`

## Deploy (Vercel)
1. Suba este repositório no GitHub
2. Importe o repo na Vercel (vercel.com/new)
3. Framework preset: Vite — build command \`npm run build\`, output dir \`dist\`
4. Deploy automático a cada push

## Estrutura
- \`src/styles/theme.ts\` — design tokens (cor, tipografia, espaçamento)
- \`src/styles/GlobalStyles.ts\` — reset global + import de fontes
- \`src/components/ui/\` — componentes reutilizáveis (Layout, NavBar)
- \`src/components/sections/\` — cada seção da página (Hero, Formações, Quem Somos, Tutores, Alunos, Empresas, Números, CTA Final, Footer)
- \`src/hooks/useTypewriter.ts\` — hook do efeito de digitação do terminal no Hero

## Conteúdo
Todo o conteúdo (depoimentos, nomes de tutores, empresas, números) é fictício/inventado para fins do desafio, exceto a linha do tempo institucional que reflete a história pública do fundador.
