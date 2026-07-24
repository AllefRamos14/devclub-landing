import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Code2,
  Layers3,
  MonitorSmartphone,
  Network,
  type LucideIcon,
} from 'lucide-react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Container, Eyebrow, Section } from '../ui/Layout';

interface FeaturedProps {
  $featured?: boolean;
}

interface Formacao {
  id: string;
  tag: string;
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  level: number;
  levelLabel: string;
  featured?: boolean;
  href: string;
}

const FormationsSection = styled(Section)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 80px;
    right: -180px;
    z-index: -1;

    width: 460px;
    height: 460px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.08);
    filter: blur(130px);

    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -180px;
    left: -160px;
    z-index: -1;

    width: 380px;
    height: 380px;

    border-radius: 50%;

    background: rgba(0, 255, 156, 0.035);
    filter: blur(130px);

    pointer-events: none;
  }
`;

const Header = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(300px, 0.6fr);
  align-items: end;

  gap: ${({ theme }) => theme.space(10)};
  margin-bottom: ${({ theme }) => theme.space(14)};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space(5)};
  }
`;

const HeaderMain = styled.div`
  max-width: 700px;
`;

const Title = styled.h2`
  max-width: 16ch;
  margin-top: ${({ theme }) => theme.space(4)};

  font-size: clamp(2.2rem, 4vw, 3.4rem);
  line-height: 1.08;
  letter-spacing: -0.04em;

  span {
    background: ${({ theme }) => theme.gradient.text};
    background-clip: text;
    -webkit-background-clip: text;

    color: transparent;
    -webkit-text-fill-color: transparent;
  }
`;

const Lead = styled.p`
  max-width: 49ch;
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 1.05rem;
  line-height: 1.7;
`;

const HeaderInfo = styled.div`
  justify-self: end;

  max-width: 330px;
  padding: ${({ theme }) => theme.space(5)};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: rgba(255, 255, 255, 0.018);
  backdrop-filter: blur(14px);

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    justify-self: start;
    max-width: 100%;
  }
`;

const HeaderInfoLabel = styled.span`
  display: flex;
  align-items: center;

  gap: 8px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &::before {
    content: '';

    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: ${({ theme }) => theme.color.success};
    box-shadow: 0 0 10px rgba(0, 255, 156, 0.65);
  }
`;

const HeaderInfoText = styled.p`
  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.9rem;
  line-height: 1.55;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.weight.semibold};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));

  gap: ${({ theme }) => theme.space(5)};

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.a)<FeaturedProps>`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  min-height: ${({ $featured }) => ($featured ? '390px' : '340px')};
  grid-column: ${({ $featured }) => ($featured ? 'span 6' : 'span 3')};

  padding: ${({ theme }) => theme.space(7)};

  border: 1px solid
    ${({ theme, $featured }) =>
      $featured ? theme.color.accentDim : theme.color.border};

  border-radius: ${({ theme }) => theme.radius.lg};

  background: ${({ theme }) => theme.color.surface};
  color: inherit;

  text-decoration: none;

  box-shadow: ${({ $featured }) =>
    $featured
      ? '0 28px 80px rgba(0, 0, 0, 0.26)'
      : '0 14px 45px rgba(0, 0, 0, 0.14)'};

  transition:
    border-color ${({ theme }) => theme.transition.base},
    transform ${({ theme }) => theme.transition.base},
    box-shadow ${({ theme }) => theme.transition.base};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;

    background:
      radial-gradient(
        circle at 85% 5%,
        rgba(124, 92, 255, 0.15),
        transparent 38%
      ),
      ${({ theme }) => theme.gradient.card};

    opacity: ${({ $featured }) => ($featured ? 0.8 : 0)};

    transition: opacity ${({ theme }) => theme.transition.base};

    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -55%;
    left: -40%;
    z-index: -1;

    width: 35%;
    height: 210%;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.06),
      transparent
    );

    transform: rotate(18deg) translateX(-220%);
    transition: transform 850ms ease;

    pointer-events: none;
  }

  &:hover {
    transform: translateY(-7px);

    border-color: ${({ theme }) => theme.color.accentDim};

    box-shadow:
      0 28px 75px rgba(0, 0, 0, 0.27),
      0 0 35px rgba(124, 92, 255, 0.07);
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover::after {
    transform: rotate(18deg) translateX(620%);
  }

  &:hover [data-card-arrow='true'] {
    color: #ffffff;

    border-color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.color.accent};

    transform: rotate(45deg);
  }

  &:hover [data-stack-pill='true'] {
    color: ${({ theme }) => theme.color.textMuted};

    border-color: rgba(124, 92, 255, 0.18);
    background: rgba(124, 92, 255, 0.035);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.accent};
    outline-offset: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-column: auto;
    min-height: 350px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-height: 320px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color ${({ theme }) => theme.transition.fast};

    &:hover {
      transform: none;
    }

    &::after {
      display: none;
    }
  }
`;


const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
`;

const IconBox = styled.div<FeaturedProps>`
  display: grid;
  place-items: center;
  flex-shrink: 0;

  width: ${({ $featured }) => ($featured ? '52px' : '46px')};
  height: ${({ $featured }) => ($featured ? '52px' : '46px')};

  border: 1px solid rgba(124, 92, 255, 0.2);
  border-radius: 15px;

  background: linear-gradient(
    145deg,
    rgba(124, 92, 255, 0.2),
    rgba(124, 92, 255, 0.035)
  );

  color: ${({ theme }) => theme.color.accent};

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 12px 25px rgba(124, 92, 255, 0.08);

  svg {
    width: ${({ $featured }) => ($featured ? '24px' : '21px')};
    height: ${({ $featured }) => ($featured ? '24px' : '21px')};
  }
`;

const ArrowBox = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;

  width: 34px;
  height: 34px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 50%;

  color: ${({ theme }) => theme.color.textFaint};

  transition:
    color ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast},
    transform ${({ theme }) => theme.transition.base};

  svg {
    width: 15px;
    height: 15px;
  }
`;

const CardTag = styled.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;

  margin-top: ${({ theme }) => theme.space(6)};
  padding: 5px 10px;

  border: 1px solid rgba(124, 92, 255, 0.15);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(124, 92, 255, 0.08);
  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

const CardTitle = styled.h3<FeaturedProps>`
  max-width: 15ch;
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.text};

  font-size: ${({ $featured }) =>
    $featured ? 'clamp(1.75rem, 2.4vw, 2.2rem)' : '1.35rem'};

  line-height: 1.15;
  letter-spacing: -0.025em;
`;

const CardDescription = styled.p`
  max-width: 47ch;
  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.93rem;
  line-height: 1.65;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space(4)};

  margin-top: auto;
  padding-top: ${({ theme }) => theme.space(6)};
`;

const LevelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const LevelTrack = styled.div`
  display: flex;
  flex-shrink: 0;

  gap: 4px;

  span {
    width: 20px;
    height: 3px;

    border-radius: 999px;

    background: ${({ theme }) => theme.color.border};
  }

  span[data-active='true'] {
    background: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 8px rgba(124, 92, 255, 0.35);
  }
`;

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 7px;
`;

const StackPill = styled.span`
  padding: 5px 9px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.sm};

  background: rgba(255, 255, 255, 0.015);
  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;

  transition:
    color ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast};
`;

const formacoes: Formacao[] = [
  {
    id: '01',
    tag: 'full stack',
    title: 'Formação Full Stack',
    description:
      'A jornada completa para sair do zero e conquistar sua primeira oportunidade: front-end, back-end, banco de dados, deploy e projetos reais.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    icon: Layers3,
    level: 3,
    levelLabel: 'do zero ao profissional',
    featured: true,
    href: '#full-stack',
  },
  {
    id: '02',
    tag: 'front-end',
    title: 'Formação Front-End',
    description:
      'Crie interfaces modernas, responsivas e performáticas para produtos digitais que entregam uma experiência memorável.',
    technologies: ['React', 'TypeScript', 'CSS'],
    icon: Code2,
    level: 2,
    levelLabel: 'iniciante ao avançado',
    href: '#front-end',
  },
  {
    id: '03',
    tag: 'avançada',
    title: 'Engenharia de Software',
    description:
      'Domine arquitetura, escalabilidade e decisões técnicas para construir sistemas preparados para crescer.',
    technologies: ['Arquitetura', 'System Design', 'Cloud'],
    icon: Network,
    level: 3,
    levelLabel: 'nível avançado',
    href: '#engenharia',
  },
  {
    id: '04',
    tag: 'ia para devs',
    title: 'Inteligência Artificial',
    description:
      'Aplique IA na rotina de desenvolvimento com prompting técnico, agentes, automações e integrações inteligentes.',
    technologies: ['LLMs', 'Agentes', 'Automação'],
    icon: Bot,
    level: 2,
    levelLabel: 'nível intermediário',
    href: '#ia',
  },
  {
    id: '05',
    tag: 'mobile',
    title: 'Formação Mobile',
    description:
      'Desenvolva aplicativos modernos para iOS e Android, da primeira tela até a publicação nas lojas.',
    technologies: ['React Native', 'iOS', 'Android'],
    icon: MonitorSmartphone,
    level: 2,
    levelLabel: 'iniciante ao avançado',
    href: '#mobile',
  },
  {
    id: '06',
    tag: 'carreira',
    title: 'Trilha de Empregabilidade',
    description:
      'Construa um portfólio forte, melhore seu LinkedIn e se prepare para entrevistas técnicas e processos seletivos.',
    technologies: ['Portfólio', 'Entrevistas', 'Networking'],
    icon: BriefcaseBusiness,
    level: 1,
    levelLabel: 'preparação profissional',
    href: '#empregabilidade',
  },
];

export function Formacoes() {
  return (
    <FormationsSection id="formacoes">
      <Container>
        <Header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <HeaderMain>
            <Eyebrow>trilhas de estudo</Eyebrow>

            <Title>
              Uma formação para cada <span>ponto de partida.</span>
            </Title>

            <Lead>
              Não importa se você nunca escreveu uma linha de código ou se já
              programa e quer subir de nível. Existe uma jornada pensada para o
              seu momento profissional.
            </Lead>
          </HeaderMain>

          <HeaderInfo>
            <HeaderInfoLabel>aprendizado direcionado</HeaderInfoLabel>

            <HeaderInfoText>
              Escolha sua trilha e avance com{' '}
              <strong>projetos, suporte e direcionamento</strong> para o mercado.
            </HeaderInfoText>
          </HeaderInfo>
        </Header>

        <Grid>
          {formacoes.map((formacao, index) => {
            const Icon = formacao.icon;

            return (
              <Card
                key={formacao.id}
                href={formacao.href}
                $featured={formacao.featured}
                initial={{
                  opacity: 0,
                  y: 26,
                  scale: 0.985,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  margin: '-60px',
                }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.07, 0.3),
                  ease: [0.16, 1, 0.3, 1],
                }}
                aria-label={`Conhecer ${formacao.title}`}
              >
                <CardTop>
                  <IconBox
                    $featured={formacao.featured}
                    aria-hidden="true"
                  >
                    <Icon strokeWidth={1.7} />
                  </IconBox>

                  <ArrowBox
                    data-card-arrow="true"
                    aria-hidden="true"
                  >
                    <ArrowUpRight />
                  </ArrowBox>
                </CardTop>

                <CardTag>{formacao.tag}</CardTag>

                <CardTitle $featured={formacao.featured}>
                  {formacao.title}
                </CardTitle>

                <CardDescription>
                  {formacao.description}
                </CardDescription>

                <CardFooter>
                  <LevelRow>
                    <span>{formacao.levelLabel}</span>

                    <LevelTrack aria-hidden="true">
                      {[1, 2, 3].map((level) => (
                        <span
                          key={level}
                          data-active={
                            level <= formacao.level ? 'true' : 'false'
                          }
                        />
                      ))}
                    </LevelTrack>
                  </LevelRow>

                  <StackRow>
                    {formacao.technologies.map((technology) => (
                      <StackPill
                        key={technology}
                        data-stack-pill="true"
                      >
                        {technology}
                      </StackPill>
                    ))}
                  </StackRow>
                </CardFooter>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </FormationsSection>
  );
}