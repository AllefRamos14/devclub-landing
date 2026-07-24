# 🚀 DevClub Landing Page

Landing page institucional moderna e responsiva, desenvolvida como parte do **desafio técnico Full Stack (PJ, remoto)** do DevClub.

O objetivo foi construir uma experiência visual premium — inspirada em produtos SaaS — com foco em animações, microinterações, performance e organização de código, utilizando o ecossistema React moderno.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?logo=styledcomponents)
![Framer Motion](https://img.shields.io/badge/Framer--Motion-Animations-black)
![License](https://img.shields.io/badge/license-MIT-green)
![Deploy](https://img.shields.io/badge/deploy-Vercel-000000?logo=vercel)

---

## 📑 Índice

- [Preview](#-preview)
- [Demo](#-demo)
- [Sobre o desafio](#-sobre-o-desafio)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Decisões técnicas](#-decisões-técnicas)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como executar](#-como-executar)
- [Objetivos do projeto](#-objetivos-do-projeto)
- [Destaques](#-destaques)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 📸 Preview

<p align="center">
  <img src="./assets/Preview.png" alt="Preview da aplicação" width="1000">
</p>

> 💡 Dica: um GIF mostrando scroll, animações e microinterações costuma comunicar muito mais impacto visual do que um print estático — vale considerar substituir ou complementar.

---

## 🔗 Demo

🌐 **Projeto online:** [devclub-landing.vercel.app](https://SEU-PROJETO.vercel.app)

---

## 🎯 Sobre o desafio

Este projeto foi desenvolvido para o processo seletivo de **Programador(a) Full Stack (contrato PJ, remoto)** do DevClub. O desafio consistia em criar uma página institucional disruptiva, cobrindo seções como formações, sobre a empresa, alunos, empresas parceiras e tutores — sem obrigatoriedade de dados reais.

Critérios de avaliação do desafio:

| Critério | Peso |
|---|---|
| Impacto visual e originalidade | 50% |
| Animações e microinterações | 30% |
| Qualidade e organização do código | 20% |

---

## ✨ Funcionalidades

- 🎨 Interface moderna inspirada em produtos SaaS
- 📱 Layout 100% responsivo (desktop, tablet e mobile)
- ⚡ Animações fluidas com Framer Motion
- ✨ Microinterações em botões, cards e navegação
- 📊 Dashboard com métricas animadas
- 🖥️ Componentização reutilizável e escalável
- ♿ Boas práticas de acessibilidade
- 🚀 Foco em performance e carregamento rápido

---

## 🛠 Tecnologias

- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Vite 7](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

---

## 🧠 Decisões técnicas

- **Styled Components** em vez de Tailwind: escolhido para ter controle total sobre theming dinâmico (dark mode) e escopo de estilos por componente, facilitando a escalabilidade da UI.
- **Framer Motion**: usado para animações de entrada, transições de seção e microinterações, mantendo uma API declarativa e boa performance.
- **Vite**: build tool escolhida pela velocidade de desenvolvimento (HMR) e build de produção otimizado.
- **Arquitetura por seções (`sections/`)**: cada bloco da landing page é isolado, favorecendo reuso, testes e manutenção independente.

---

## 📂 Estrutura do projeto

```text
src/
│
├── components/
│   ├── layout/
│   ├── ui/
│   └── common/
│
├── sections/
│   ├── Hero/
│   ├── Manifesto/
│   ├── Formations/
│   ├── Students/
│   ├── Companies/
│   ├── Tutors/
│   ├── Metrics/
│   ├── FinalCTA/
│   └── Footer/
│
├── pages/
├── styles/
├── hooks/
├── utils/
└── theme/
```

---

## 🚀 Como executar

**Pré-requisitos:** Node.js 18+ e npm instalados.

```bash
# Clone o projeto
git clone https://github.com/SEU-USUARIO/devclub-landing.git

# Entre na pasta
cd devclub-landing

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Gere o build de produção
npm run build
```

---

## 🎯 Objetivos do projeto

- Criar uma landing page impactante e disruptiva
- Aplicar boas práticas de front-end moderno
- Demonstrar organização e legibilidade de código
- Desenvolver componentes reutilizáveis e escaláveis
- Explorar animações sem comprometer performance

---

## 📈 Destaques

- Código 100% em TypeScript
- Componentização escalável e reutilizável
- Estilização com Styled Components e tema centralizado
- Responsividade completa (desktop, tablet e mobile)
- Microinterações e animações com Framer Motion
- Foco constante em UX/UI

---

## 💻 Autor

**Allef Sousa** — Full Stack Developer

Desenvolvedor com mais de 2 anos de experiência freelance, atuando com React, TypeScript, Node.js e APIs REST.

🔗 [LinkedIn](https://www.linkedin.com/in/allef-ramos/)
🐙 [GitHub](https://github.com/AllefRamos14)

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e participação no desafio técnico do DevClub. Distribuído sob a licença MIT — veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
