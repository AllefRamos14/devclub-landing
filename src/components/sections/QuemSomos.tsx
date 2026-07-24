import {
  useRef,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
} from 'react';

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react';

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';

import styled from 'styled-components';

import { Container, Eyebrow, Section } from '../ui/Layout';

interface Milestone {
  year: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  highlight?: boolean;
}

interface HighlightProps {
  $highlight?: boolean;
}

interface SpotlightStyle extends CSSProperties {
  '--mouse-x': string;
  '--mouse-y': string;
}

const SectionBg = styled(Section)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  border-top: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  background:
    linear-gradient(
      180deg,
      ${({ theme }) => theme.color.bgElevated},
      ${({ theme }) => theme.color.bg}
    );

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -3;

    background-image:
      linear-gradient(
        rgba(255, 255, 255, 0.018) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.018) 1px,
        transparent 1px
      );

    background-size: 72px 72px;

    mask-image: linear-gradient(
      to bottom,
      transparent,
      black 18%,
      black 82%,
      transparent
    );

    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -340px;
    left: 50%;
    z-index: -2;

    width: 900px;
    height: 620px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.1);
    filter: blur(180px);
    transform: translateX(-50%);

    pointer-events: none;
  }
`;

const AmbientLight = styled.div`
  position: absolute;
  z-index: -2;

  border-radius: 50%;
  filter: blur(150px);

  pointer-events: none;
`;

const PurpleLight = styled(AmbientLight)`
  top: 28%;
  left: -260px;

  width: 540px;
  height: 540px;

  background: rgba(124, 92, 255, 0.07);
`;

const GreenLight = styled(AmbientLight)`
  right: -260px;
  bottom: -180px;

  width: 540px;
  height: 540px;

  background: rgba(0, 255, 156, 0.045);
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(310px, 0.8fr) minmax(0, 1.2fr);
  align-items: start;

  gap: clamp(64px, 8vw, 132px);

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space(12)};
  }
`;

const IntroColumn = styled.div`
  position: sticky;
  top: 96px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    position: static;
  }
`;

const EyebrowWrapper = styled(motion.div)`
  display: inline-flex;
`;

const Title = styled(motion.h2)`
  max-width: 12ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2.45rem, 4.8vw, 4.5rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 0.99;
  letter-spacing: -0.06em;

  span {
    display: inline;

    background: ${({ theme }) => theme.gradient.text};
    background-clip: text;
    -webkit-background-clip: text;

    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 15ch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: clamp(2.25rem, 12vw, 3.5rem);
  }
`;

const Lead = styled(motion.p)`
  max-width: 48ch;
  margin-top: ${({ theme }) => theme.space(6)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: clamp(1rem, 1.25vw, 1.08rem);
  line-height: 1.8;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.weight.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 64ch;
  }
`;

const ManifestCard = styled(motion.div)`
  position: relative;
  overflow: hidden;

  max-width: 430px;
  margin-top: ${({ theme }) => theme.space(8)};
  padding: 1px;

  border-radius: ${({ theme }) => theme.radius.lg};

  background: linear-gradient(
    135deg,
    rgba(124, 92, 255, 0.65),
    rgba(255, 255, 255, 0.06) 42%,
    rgba(0, 255, 156, 0.35)
  );

  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.22),
    0 0 50px rgba(124, 92, 255, 0.04);

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 620px;
  }
`;

const ManifestInner = styled.div`
  position: relative;
  overflow: hidden;

  padding: ${({ theme }) => theme.space(6)};

  border-radius: calc(${({ theme }) => theme.radius.lg} - 1px);

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.03),
      rgba(255, 255, 255, 0.008)
    ),
    ${({ theme }) => theme.color.surface};

  backdrop-filter: blur(20px);

  &::before {
    content: '';
    position: absolute;
    top: -90px;
    right: -70px;

    width: 190px;
    height: 190px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.15);
    filter: blur(65px);

    pointer-events: none;
  }
`;

const ManifestHeader = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
`;

const ManifestLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 9px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const Status = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &::before {
    content: '';

    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: ${({ theme }) => theme.color.success};

    box-shadow:
      0 0 0 4px rgba(0, 255, 156, 0.08),
      0 0 14px rgba(0, 255, 156, 0.6);

    animation: statusPulse 2.2s ease-in-out infinite;
  }

  @keyframes statusPulse {
    0%,
    100% {
      opacity: 0.6;
      transform: scale(0.9);
    }

    50% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`;

const ManifestText = styled.p`
  position: relative;
  z-index: 1;

  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.94rem;
  line-height: 1.7;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.weight.semibold};
  }
`;

const ManifestDivider = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 1px;
  margin: ${({ theme }) => theme.space(5)} 0;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.border},
    rgba(124, 92, 255, 0.35),
    transparent
  );
`;

const ManifestMeta = styled.div`
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: ${({ theme }) => theme.space(4)};
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MetaValue = styled.strong`
  color: ${({ theme }) => theme.color.text};

  font-size: 1.15rem;
  font-weight: ${({ theme }) => theme.weight.semibold};
  letter-spacing: -0.025em;
`;

const MetaLabel = styled.span`
  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const TimelineColumn = styled.div`
  position: relative;
`;

const TimelineTrack = styled.div`
  position: absolute;
  top: 32px;
  bottom: 32px;
  left: 31px;
  z-index: 0;

  width: 2px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.045);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    left: 23px;
  }
`;

const TimelineProgress = styled(motion.div)`
  position: absolute;
  inset: 0;

  border-radius: inherit;

  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.color.accent},
    rgba(124, 92, 255, 0.65) 60%,
    ${({ theme }) => theme.color.success}
  );

  box-shadow:
    0 0 18px rgba(124, 92, 255, 0.35),
    0 0 28px rgba(0, 255, 156, 0.12);

  transform-origin: top;
`;

const TimelineList = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
`;

const Milestone = styled(motion.article)`
  position: relative;

  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);

  gap: ${({ theme }) => theme.space(6)};
  padding-bottom: clamp(28px, 4vw, 48px);

  &:last-child {
    padding-bottom: 0;
  }

  &:hover [data-timeline-marker='true'] {
    transform: scale(1.07);

    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accent};

    box-shadow:
      0 0 0 6px rgba(124, 92, 255, 0.07),
      0 16px 35px rgba(0, 0, 0, 0.3);
  }

  &:hover [data-card-arrow='true'] {
    transform: rotate(45deg) scale(1.04);

    border-color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.color.accent};
    color: #ffffff;
  }

  &:hover [data-card-year='true'] {
    opacity: 0.07;
    transform: translateY(-50%) translateX(-8px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 48px minmax(0, 1fr);
    gap: ${({ theme }) => theme.space(4)};
  }
`;

const TimelineMarker = styled.div<HighlightProps>`
  position: relative;
  z-index: 3;

  display: grid;
  place-items: center;

  width: 64px;
  height: 64px;

  border: 1px solid
    ${({ theme, $highlight }) =>
      $highlight
        ? theme.color.accent
        : theme.color.border};

  border-radius: 20px;

  background:
    ${({ $highlight }) =>
      $highlight
        ? 'linear-gradient(145deg, rgba(124, 92, 255, 0.28), rgba(124, 92, 255, 0.08))'
        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.012))'},
    ${({ theme }) => theme.color.bgElevated};

  color: ${({ theme, $highlight }) =>
    $highlight
      ? theme.color.accent
      : theme.color.textFaint};

  box-shadow:
    ${({ $highlight }) =>
      $highlight
        ? '0 0 0 6px rgba(124, 92, 255, 0.06), 0 18px 45px rgba(0, 0, 0, 0.25)'
        : '0 14px 35px rgba(0, 0, 0, 0.2)'};

  transition:
    transform ${({ theme }) => theme.transition.base},
    border-color ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast},
    box-shadow ${({ theme }) => theme.transition.base};

  svg {
    width: 23px;
    height: 23px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;

    border-radius: inherit;

    background: ${({ $highlight }) =>
      $highlight
        ? 'linear-gradient(135deg, rgba(124, 92, 255, 0.65), rgba(0, 255, 156, 0.25))'
        : 'transparent'};

    filter: blur(13px);
    opacity: ${({ $highlight }) => ($highlight ? 0.55 : 0)};

    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 48px;
    height: 48px;

    border-radius: 15px;

    svg {
      width: 19px;
      height: 19px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const MilestoneCard = styled.div<HighlightProps>`
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;
  isolation: isolate;
  overflow: hidden;

  padding: clamp(24px, 3.3vw, 38px);

  border: 1px solid
    ${({ theme, $highlight }) =>
      $highlight
        ? theme.color.accentDim
        : theme.color.border};

  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.034),
      rgba(255, 255, 255, 0.008)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    ${({ $highlight }) =>
      $highlight
        ? '0 35px 90px rgba(0, 0, 0, 0.3), 0 0 55px rgba(124, 92, 255, 0.07)'
        : '0 18px 55px rgba(0, 0, 0, 0.17)'};

  transition:
    transform ${({ theme }) => theme.transition.base},
    border-color ${({ theme }) => theme.transition.base},
    box-shadow ${({ theme }) => theme.transition.base};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;

    background:
      radial-gradient(
        480px circle at var(--mouse-x) var(--mouse-y),
        rgba(124, 92, 255, 0.15),
        transparent 42%
      );

    opacity: 0;

    transition: opacity ${({ theme }) => theme.transition.base};

    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -3;

    background:
      radial-gradient(
        circle at 96% 0%,
        ${({ $highlight }) =>
          $highlight
            ? 'rgba(0, 255, 156, 0.09)'
            : 'rgba(124, 92, 255, 0.09)'},
        transparent 38%
      );

    pointer-events: none;
  }

  &:hover {
    transform: translateY(-7px);

    border-color: ${({ theme }) => theme.color.accentDim};

    box-shadow:
      0 34px 90px rgba(0, 0, 0, 0.29),
      0 0 45px rgba(124, 92, 255, 0.065);
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: ${({ theme }) => theme.space(5)};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color ${({ theme }) => theme.transition.fast};

    &:hover {
      transform: none;
    }
  }
`;

const CardTop = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
`;

const CardEyebrow = styled.span<HighlightProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  min-height: 27px;
  padding: 5px 11px;

  border: 1px solid
    ${({ $highlight }) =>
      $highlight
        ? 'rgba(0, 255, 156, 0.17)'
        : 'rgba(124, 92, 255, 0.18)'};

  border-radius: ${({ theme }) => theme.radius.pill};

  background:
    ${({ $highlight }) =>
      $highlight
        ? 'rgba(0, 255, 156, 0.065)'
        : 'rgba(124, 92, 255, 0.07)'};

  color: ${({ theme, $highlight }) =>
    $highlight
      ? theme.color.success
      : theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.09em;
  text-transform: uppercase;

  &::before {
    content: '';

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: currentColor;
    box-shadow: 0 0 10px currentColor;
  }
`;

const CardArrow = styled.span`
  display: grid;
  place-items: center;

  width: 35px;
  height: 35px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.015);
  color: ${({ theme }) => theme.color.textFaint};

  transition:
    transform ${({ theme }) => theme.transition.base},
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};

  svg {
    width: 15px;
    height: 15px;
  }
`;

const YearLabel = styled.span`
  position: relative;
  z-index: 2;

  display: block;

  margin-top: ${({ theme }) => theme.space(6)};

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const MilestoneTitle = styled.h3`
  position: relative;
  z-index: 2;

  max-width: 24ch;
  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.35rem, 2.4vw, 1.85rem);
  font-weight: ${({ theme }) => theme.weight.semibold};
  line-height: 1.18;
  letter-spacing: -0.035em;
`;

const MilestoneDescription = styled.p`
  position: relative;
  z-index: 2;

  max-width: 59ch;
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.96rem;
  line-height: 1.75;
`;

const StatsGrid = styled.div`
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: ${({ theme }) => theme.space(3)};
  margin-top: ${({ theme }) => theme.space(6)};

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  position: relative;
  overflow: hidden;

  min-height: 98px;
  padding: ${({ theme }) => theme.space(4)};

  border: 1px solid rgba(255, 255, 255, 0.055);
  border-radius: ${({ theme }) => theme.radius.md};

  background: rgba(255, 255, 255, 0.018);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 156, 0.45),
      transparent
    );
  }
`;

const StatValue = styled.strong`
  display: block;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.6rem, 3vw, 2.15rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.05em;
`;

const StatLabel = styled.span`
  display: block;

  margin-top: 9px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  line-height: 1.45;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const BottomMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(5)};
  margin-top: clamp(56px, 8vw, 110px);
  padding-top: ${({ theme }) => theme.space(8)};

  border-top: 1px solid ${({ theme }) => theme.color.border};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const BottomText = styled.p`
  max-width: 760px;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.3rem, 2.5vw, 2rem);
  font-weight: ${({ theme }) => theme.weight.medium};
  line-height: 1.35;
  letter-spacing: -0.035em;

  span {
    color: ${({ theme }) => theme.color.textMuted};
  }
`;

const BottomIcon = styled.div`
  display: grid;
  flex: 0 0 auto;
  place-items: center;

  width: 52px;
  height: 52px;

  border: 1px solid ${({ theme }) => theme.color.accentDim};
  border-radius: 17px;

  background: rgba(124, 92, 255, 0.08);
  color: ${({ theme }) => theme.color.accent};

  box-shadow: 0 0 30px rgba(124, 92, 255, 0.08);

  svg {
    width: 21px;
    height: 21px;
  }
`;

const milestones: Milestone[] = [
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

export function QuemSomos() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 35%'],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  function handleSpotlight(
    event: ReactMouseEvent<HTMLDivElement>,
  ) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${mouseX}px`);
    card.style.setProperty('--mouse-y', `${mouseY}px`);
  }

  return (
    <SectionBg
      id="quem-somos"
      ref={sectionRef}
    >
      <PurpleLight />
      <GreenLight />

      <Container>
        <ContentGrid>
          <IntroColumn>
            <EyebrowWrapper
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 14,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-60px',
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Eyebrow>quem somos</Eyebrow>
            </EyebrowWrapper>

            <Title
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 22,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-70px',
              }}
              transition={{
                duration: 0.75,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Uma história construída com{' '}
              <span>código, coragem e transformação.</span>
            </Title>

            <Lead
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-70px',
              }}
              transition={{
                duration: 0.7,
                delay: 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Antes de ensinar programação, existiu uma mudança de carreira,
              meses de estudo e uma primeira oportunidade. O DevClub nasceu
              dessa experiência real e hoje ajuda milhares de pessoas a{' '}
              <strong>escreverem uma nova história.</strong>
            </Lead>

            <ManifestCard
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                      scale: 0.985,
                    }
              }
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
                duration: 0.7,
                delay: 0.23,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ManifestInner>
                <ManifestHeader>
                  <ManifestLabel>
                    <Sparkles strokeWidth={1.8} />
                    experiência real
                  </ManifestLabel>

                  <Status>em evolução</Status>
                </ManifestHeader>

                <ManifestText>
                  Uma formação criada por quem viveu a transição e transformou
                  os obstáculos do caminho em um método de ensino{' '}
                  <strong>prático, humano e conectado ao mercado.</strong>
                </ManifestText>

                <ManifestDivider />

                <ManifestMeta>
                  <MetaItem>
                    <MetaValue>Prática</MetaValue>
                    <MetaLabel>desde o início</MetaLabel>
                  </MetaItem>

                  <MetaItem>
                    <MetaValue>Comunidade</MetaValue>
                    <MetaLabel>durante a jornada</MetaLabel>
                  </MetaItem>
                </ManifestMeta>
              </ManifestInner>
            </ManifestCard>
          </IntroColumn>

          <TimelineColumn>
            <TimelineTrack aria-hidden="true">
              <TimelineProgress
                style={{
                  scaleY: prefersReducedMotion ? 1 : progress,
                }}
              />
            </TimelineTrack>

            <TimelineList>
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;

                return (
                  <Milestone
                    key={`${milestone.year}-${milestone.title}`}
                    initial={
                      prefersReducedMotion
                        ? false
                        : {
                            opacity: 0,
                            x: 28,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: '-70px',
                    }}
                    transition={{
                      duration: 0.65,
                      delay: Math.min(index * 0.09, 0.27),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <TimelineMarker
                      data-timeline-marker="true"
                      $highlight={milestone.highlight}
                      aria-hidden="true"
                    >
                      <Icon strokeWidth={1.65} />
                    </TimelineMarker>

                    <MilestoneCard
                      $highlight={milestone.highlight}
                      onMouseMove={handleSpotlight}
                      style={
                        {
                          '--mouse-x': '50%',
                          '--mouse-y': '50%',
                        } as SpotlightStyle
                      }
                    >
                    

                      <CardTop>
                        <CardEyebrow
                          $highlight={milestone.highlight}
                        >
                          {milestone.eyebrow}
                        </CardEyebrow>

                        <CardArrow
                          data-card-arrow="true"
                          aria-hidden="true"
                        >
                          <ArrowUpRight strokeWidth={1.7} />
                        </CardArrow>
                      </CardTop>

                      <YearLabel>{milestone.year}</YearLabel>

                      <MilestoneTitle>
                        {milestone.title}
                      </MilestoneTitle>

                      <MilestoneDescription>
                        {milestone.description}
                      </MilestoneDescription>

                      {milestone.stats && (
                        <StatsGrid>
                          {milestone.stats.map((stat) => (
                            <StatCard key={stat.label}>
                              <StatValue>{stat.value}</StatValue>
                              <StatLabel>{stat.label}</StatLabel>
                            </StatCard>
                          ))}
                        </StatsGrid>
                      )}
                    </MilestoneCard>
                  </Milestone>
                );
              })}
            </TimelineList>
          </TimelineColumn>
        </ContentGrid>

        <BottomMessage
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <BottomText>
            Essa história começou com uma decisão.{' '}
            <span>A próxima transformação pode começar com a sua.</span>
          </BottomText>

          <BottomIcon aria-hidden="true">
            <Target strokeWidth={1.7} />
          </BottomIcon>
        </BottomMessage>
      </Container>
    </SectionBg>
  );
}