import {
  useRef,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
} from 'react';

import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  Laptop2,
  Quote as QuoteIcon,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import styled, { keyframes } from 'styled-components';

import { Container, Eyebrow, Section } from '../ui/Layout';

interface Depoimento {
  quote: string;
  name: string;
  role: string;
  previousArea: string;
  time: string;
  modality: string;
  initials: string;
  hue: number;
}

interface MarqueeTrackProps {
  $duration: number;
  $reverse?: boolean;
}

interface HueProps {
  $hue: number;
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
    radial-gradient(
      circle at 50% 0%,
      rgba(124, 92, 255, 0.08),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      ${({ theme }) => theme.color.bgElevated},
      ${({ theme }) => theme.color.bg}
    );

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -4;

    background-image:
      linear-gradient(
        rgba(255, 255, 255, 0.014) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.014) 1px,
        transparent 1px
      );

    background-size: 72px 72px;

    mask-image: linear-gradient(
      to bottom,
      transparent,
      black 10%,
      black 88%,
      transparent
    );

    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 16%;
    left: 50%;
    z-index: -3;

    width: min(1100px, 92vw);
    height: 540px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.05);
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

const LeftLight = styled(AmbientLight)`
  top: 28%;
  left: -260px;

  width: 520px;
  height: 520px;

  background: rgba(124, 92, 255, 0.07);
`;

const RightLight = styled(AmbientLight)`
  right: -280px;
  bottom: 5%;

  width: 560px;
  height: 560px;

  background: rgba(0, 255, 156, 0.035);
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.85fr);
  align-items: end;

  gap: clamp(40px, 8vw, 110px);
  margin-bottom: clamp(48px, 7vw, 88px);

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: 1fr;
    align-items: start;
    gap: ${({ theme }) => theme.space(7)};
  }
`;

const HeaderMain = styled.div`
  max-width: 820px;
`;

const EyebrowWrapper = styled(motion.div)`
  display: inline-flex;
`;

const Title = styled(motion.h2)`
  max-width: 15ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2.6rem, 5.2vw, 5rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 0.98;
  letter-spacing: -0.065em;

  span {
    background: ${({ theme }) => theme.gradient.text};
    background-clip: text;
    -webkit-background-clip: text;

    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: clamp(2.3rem, 12vw, 3.7rem);
  }
`;

const HeaderSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Lead = styled.p`
  max-width: 47ch;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: clamp(1rem, 1.25vw, 1.08rem);
  line-height: 1.8;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.weight.medium};
  }
`;

const HeaderBadges = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.space(3)};
  margin-top: ${({ theme }) => theme.space(6)};
`;

const HeaderBadge = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 8px;
  min-height: 32px;
  padding: 7px 11px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(255, 255, 255, 0.018);
  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  svg {
    width: 13px;
    height: 13px;

    color: ${({ theme }) => theme.color.accent};
  }
`;

const StatsPanel = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 1px;
  margin-bottom: clamp(52px, 7vw, 82px);

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background: ${({ theme }) => theme.color.border};

  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  position: relative;
  overflow: hidden;

  min-height: 160px;
  padding: clamp(24px, 4vw, 36px);

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.025),
      transparent
    ),
    ${({ theme }) => theme.color.surface};

  &::before {
    content: '';
    position: absolute;
    top: -70px;
    right: -60px;

    width: 150px;
    height: 150px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.08);
    filter: blur(48px);

    pointer-events: none;
  }
`;

const StatIcon = styled.div`
  display: grid;
  place-items: center;

  width: 40px;
  height: 40px;

  border: 1px solid rgba(124, 92, 255, 0.15);
  border-radius: 13px;

  background: rgba(124, 92, 255, 0.055);
  color: ${({ theme }) => theme.color.accent};

  svg {
    width: 17px;
    height: 17px;
  }
`;

const StatValue = styled.strong`
  position: relative;
  z-index: 1;

  display: block;

  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.65rem, 3vw, 2.5rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.05em;
`;

const StatLabel = styled.span`
  position: relative;
  z-index: 1;

  display: block;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.86rem;
  line-height: 1.5;
`;

const marquee = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
`;

const MarqueeSection = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space(5)};
`;

const MarqueeViewport = styled.div`
  position: relative;
  overflow: hidden;

  padding: 8px 0 14px;

  mask-image: linear-gradient(
    90deg,
    transparent,
    black 7%,
    black 93%,
    transparent
  );

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    mask-image: linear-gradient(
      90deg,
      transparent,
      black 2%,
      black 98%,
      transparent
    );
  }
`;

const MarqueeTrack = styled.div<MarqueeTrackProps>`
  display: flex;
  width: max-content;

  gap: ${({ theme }) => theme.space(5)};

  animation: ${marquee} ${({ $duration }) => $duration}s linear infinite;
  animation-direction: ${({ $reverse }) =>
    $reverse ? 'reverse' : 'normal'};

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: ${({ theme }) => theme.space(4)};
  }

  @media (prefers-reduced-motion: reduce) {
    animation-play-state: paused;
  }
`;

const TestimonialCard = styled.article`
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: min(420px, calc(100vw - 42px));
  min-height: 390px;
  padding: clamp(24px, 3vw, 31px);

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.035),
      rgba(255, 255, 255, 0.008)
    ) padding-box,
    radial-gradient(
      240px circle at var(--mouse-x) var(--mouse-y),
      rgba(124, 92, 255, 0.85),
      rgba(255, 255, 255, 0.07) 48%,
      transparent 72%
    ) border-box,
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.02);

  transition:
    transform ${({ theme }) => theme.transition.base},
    box-shadow ${({ theme }) => theme.transition.base};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;

    background:
      radial-gradient(
        520px circle at var(--mouse-x) var(--mouse-y),
        rgba(124, 92, 255, 0.13),
        transparent 43%
      );

    opacity: 0;

    transition: opacity ${({ theme }) => theme.transition.base};

    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -110px;
    right: -100px;
    z-index: -3;

    width: 250px;
    height: 250px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.075);
    filter: blur(60px);

    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);

    box-shadow:
      0 34px 90px rgba(0, 0, 0, 0.28),
      0 0 50px rgba(124, 92, 255, 0.055);
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover [data-avatar='true'] {
    transform: scale(1.06) rotate(-2deg);
  }

  &:hover [data-card-arrow='true'] {
    transform: rotate(45deg);

    border-color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.color.accent};
    color: #ffffff;
  }

  &:hover [data-meta-pill='true'] {
    border-color: rgba(124, 92, 255, 0.18);
    background: rgba(124, 92, 255, 0.055);
    color: ${({ theme }) => theme.color.text};
  }
`;

const CardNoise = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  opacity: 0.016;

  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");

  pointer-events: none;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
`;

const VerificationBadge = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 7px;
  padding: 6px 10px;

  border: 1px solid rgba(0, 255, 156, 0.13);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(0, 255, 156, 0.04);
  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.09em;
  text-transform: uppercase;

  svg {
    width: 12px;
    height: 12px;
  }
`;

const CardArrow = styled.span`
  display: grid;
  place-items: center;

  width: 37px;
  height: 37px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.018);
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

const Rating = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;
  margin-top: ${({ theme }) => theme.space(6)};

  color: #f5c451;

  svg {
    width: 14px;
    height: 14px;

    fill: currentColor;
  }
`;

const QuoteSymbol = styled.div`
  display: grid;
  place-items: center;

  width: 46px;
  height: 46px;

  margin-top: ${({ theme }) => theme.space(5)};

  border: 1px solid rgba(124, 92, 255, 0.13);
  border-radius: 15px;

  background: rgba(124, 92, 255, 0.05);
  color: ${({ theme }) => theme.color.accent};

  svg {
    width: 19px;
    height: 19px;
  }
`;

const QuoteText = styled.p`
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1rem, 1.3vw, 1.08rem);
  font-weight: ${({ theme }) => theme.weight.medium};
  line-height: 1.7;
  letter-spacing: -0.015em;
`;

const CardDivider = styled.div`
  width: 100%;
  height: 1px;

  margin: ${({ theme }) => theme.space(6)} 0;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.border},
    rgba(124, 92, 255, 0.2),
    transparent
  );
`;

const Author = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space(4)};
`;

const AuthorAvatarWrapper = styled.div`
  position: relative;

  flex: 0 0 auto;
`;

const AvatarGlow = styled.div<HueProps>`
  position: absolute;
  inset: -8px;

  border-radius: 18px;

  background: ${({ $hue }) =>
    `hsla(${$hue}, 80%, 58%, 0.34)`};

  filter: blur(16px);
  opacity: 0.35;

  pointer-events: none;
`;

const AuthorAvatar = styled.div<HueProps>`
  position: relative;

  display: grid;
  place-items: center;

  width: 50px;
  height: 50px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.16),
      rgba(255, 255, 255, 0.015)
    ),
    ${({ $hue }) =>
      `linear-gradient(
        135deg,
        hsl(${$hue}, 75%, 58%),
        hsl(${$hue + 34}, 76%, 49%)
      )`};

  box-shadow:
    0 16px 34px rgba(0, 0, 0, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  color: #ffffff;

  font-family: ${({ theme }) => theme.font.display};
  font-size: 0.93rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: -0.04em;

  transition: transform ${({ theme }) => theme.transition.base};
`;

const AuthorContent = styled.div`
  min-width: 0;
`;

const AuthorName = styled.strong`
  display: block;

  overflow: hidden;

  color: ${({ theme }) => theme.color.text};

  font-size: 0.92rem;
  font-weight: ${({ theme }) => theme.weight.semibold};
  line-height: 1.3;
  letter-spacing: -0.02em;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

const AuthorRole = styled.span`
  display: block;

  overflow: hidden;

  margin-top: 4px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  line-height: 1.5;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MetaList = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
  margin-top: auto;
  padding-top: ${({ theme }) => theme.space(5)};
`;

const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 6px;
  min-height: 28px;
  padding: 5px 9px;

  border: 1px solid rgba(255, 255, 255, 0.055);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(255, 255, 255, 0.015);
  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.045em;
  text-transform: uppercase;

  transition:
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};

  svg {
    width: 11px;
    height: 11px;
  }
`;

const BottomBanner = styled(motion.div)`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(6)};
  margin-top: clamp(52px, 7vw, 88px);
  padding: clamp(26px, 4vw, 40px);

  border: 1px solid rgba(124, 92, 255, 0.16);
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    radial-gradient(
      circle at 0% 50%,
      rgba(124, 92, 255, 0.1),
      transparent 38%
    ),
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.03),
      rgba(255, 255, 255, 0.008)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 30px 85px rgba(0, 0, 0, 0.22),
    0 0 60px rgba(124, 92, 255, 0.045);

  &::after {
    content: '';
    position: absolute;
    right: -120px;
    bottom: -150px;

    width: 340px;
    height: 340px;

    border-radius: 50%;

    background: rgba(0, 255, 156, 0.055);
    filter: blur(80px);

    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 1;

  max-width: 640px;
`;

const BannerEyebrow = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 8px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.09em;
  text-transform: uppercase;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const BannerTitle = styled.h3`
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.7rem, 3.4vw, 2.8rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1.08;
  letter-spacing: -0.05em;
`;

const BannerDescription = styled.p`
  max-width: 55ch;
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.95rem;
  line-height: 1.7;
`;

const BannerIndicator = styled.div`
  position: relative;
  z-index: 1;

  display: grid;
  flex: 0 0 auto;
  place-items: center;

  width: 72px;
  height: 72px;

  border: 1px solid rgba(124, 92, 255, 0.17);
  border-radius: 22px;

  background: rgba(124, 92, 255, 0.06);
  color: ${({ theme }) => theme.color.accent};

  box-shadow: 0 18px 50px rgba(124, 92, 255, 0.09);

  svg {
    width: 27px;
    height: 27px;
  }
`;

const linha1: Depoimento[] = [
  {
    quote:
      'Eu era técnica em enfermagem. Em oito meses de DevClub consegui minha primeira vaga como desenvolvedora front-end júnior.',
    name: 'Juliana Alves',
    role: 'Front-End Jr.',
    previousArea: 'Enfermagem',
    time: '8 meses',
    modality: 'Remoto',
    initials: 'JA',
    hue: 258,
  },
  {
    quote:
      'O que mais me marcou foi o suporte próximo. Não é um curso gravado e abandonado. Alguém realmente acompanha o seu progresso.',
    name: 'Marcos Vinícius',
    role: 'Full Stack Jr.',
    previousArea: 'Comercial',
    time: '10 meses',
    modality: 'Híbrido',
    initials: 'MV',
    hue: 20,
  },
  {
    quote:
      'Troquei de carreira aos 34 anos. Hoje ganho mais do que na minha função anterior e tenho a liberdade de trabalhar remotamente.',
    name: 'Patrícia Lima',
    role: 'Back-End Jr.',
    previousArea: 'Contabilidade',
    time: '11 meses',
    modality: 'Remoto',
    initials: 'PL',
    hue: 190,
  },
  {
    quote:
      'A trilha de empregabilidade fez toda diferença. Sem ela, eu nem saberia por onde começar a procurar minha primeira oportunidade.',
    name: 'Diego Ferreira',
    role: 'Front-End Jr.',
    previousArea: 'Logística',
    time: '7 meses',
    modality: 'Presencial',
    initials: 'DF',
    hue: 145,
  },
];

const linha2: Depoimento[] = [
  {
    quote:
      'Eu já trabalhava com suporte técnico, mas não conseguia evoluir. O DevClub me deu o caminho estruturado que eu não encontrava sozinho.',
    name: 'Bruna Costa',
    role: 'Full Stack Jr.',
    previousArea: 'Suporte técnico',
    time: '9 meses',
    modality: 'Remoto',
    initials: 'BC',
    hue: 300,
  },
  {
    quote:
      'As mentorias coletivas resolvem dúvidas que poderiam travar um projeto inteiro. Isso economiza semanas de estudo tentando descobrir tudo sozinho.',
    name: 'Felipe Rocha',
    role: 'Mobile Jr.',
    previousArea: 'Atendimento',
    time: '10 meses',
    modality: 'Híbrido',
    initials: 'FR',
    hue: 40,
  },
  {
    quote:
      'Publiquei meu primeiro projeto real no terceiro mês. Foi isso que me deu confiança para começar a enviar currículos e participar de entrevistas.',
    name: 'Aline Souza',
    role: 'Front-End Jr.',
    previousArea: 'Administração',
    time: '6 meses',
    modality: 'Remoto',
    initials: 'AS',
    hue: 210,
  },
  {
    quote:
      'Sem faculdade e sem experiência anterior, consegui minha primeira vaga usando apenas o portfólio construído durante a formação.',
    name: 'Rafael Nunes',
    role: 'Back-End Jr.',
    previousArea: 'Construção civil',
    time: '12 meses',
    modality: 'Remoto',
    initials: 'RN',
    hue: 165,
  },
];

interface TestimonialCardProps {
  testimonial: Depoimento;
  cardKey: string;
}

function Testimonial({
  testimonial,
  cardKey,
}: TestimonialCardProps) {
  function handleMouseMove(
    event: ReactMouseEvent<HTMLElement>,
  ) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${mouseX}px`);
    card.style.setProperty('--mouse-y', `${mouseY}px`);
  }

  return (
    <TestimonialCard
      key={cardKey}
      onMouseMove={handleMouseMove}
      style={
        {
          '--mouse-x': '50%',
          '--mouse-y': '50%',
        } as SpotlightStyle
      }
    >
      <CardNoise />

      <CardHeader>
        <VerificationBadge>
          <BadgeCheck strokeWidth={1.8} />
          história verificada
        </VerificationBadge>

        <CardArrow
          data-card-arrow="true"
          aria-hidden="true"
        >
          <ArrowUpRight strokeWidth={1.7} />
        </CardArrow>
      </CardHeader>

      <Rating aria-label="Avaliação máxima de cinco estrelas">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={`${testimonial.name}-star-${index}`}
            strokeWidth={1.7}
          />
        ))}
      </Rating>

      <QuoteSymbol aria-hidden="true">
        <QuoteIcon strokeWidth={1.7} />
      </QuoteSymbol>

      <QuoteText>{testimonial.quote}</QuoteText>

      <CardDivider />

      <Author>
        <AuthorAvatarWrapper>
          <AvatarGlow $hue={testimonial.hue} />

          <AuthorAvatar
            data-avatar="true"
            $hue={testimonial.hue}
          >
            {testimonial.initials}
          </AuthorAvatar>
        </AuthorAvatarWrapper>

        <AuthorContent>
          <AuthorName>{testimonial.name}</AuthorName>
          <AuthorRole>{testimonial.role}</AuthorRole>
        </AuthorContent>
      </Author>

      <MetaList>
        <MetaPill data-meta-pill="true">
          <BriefcaseBusiness strokeWidth={1.7} />
          antes: {testimonial.previousArea}
        </MetaPill>

        <MetaPill data-meta-pill="true">
          <Clock3 strokeWidth={1.7} />
          {testimonial.time}
        </MetaPill>

        <MetaPill data-meta-pill="true">
          <Laptop2 strokeWidth={1.7} />
          {testimonial.modality}
        </MetaPill>
      </MetaList>
    </TestimonialCard>
  );
}

function renderCards(
  items: Depoimento[],
  rowName: string,
) {
  return items.map((testimonial, index) => (
    <Testimonial
      key={`${rowName}-${testimonial.name}-${index}`}
      testimonial={testimonial}
      cardKey={`${rowName}-${testimonial.name}-${index}`}
    />
  ));
}

export function Alunos() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    mass: 0.45,
  });

  const titleY = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReducedMotion ? [0, 0] : [24, -12],
  );

  return (
    <SectionBg
      id="alunos"
      ref={sectionRef}
    >
      <LeftLight />
      <RightLight />

      <Container>
        <Header>
          <HeaderMain>
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
              <Eyebrow>histórias reais</Eyebrow>
            </EyebrowWrapper>

            <Title
              style={{
                y: titleY,
              }}
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
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
              Resultados que começaram com{' '}
              <span>uma única decisão.</span>
            </Title>
          </HeaderMain>

          <HeaderSide
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
              delay: 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Lead>
              Pessoas comuns, vindas de diferentes profissões, decidiram
              aprender tecnologia e construir uma nova trajetória.{' '}
              <strong>
                Cada história abaixo começou exatamente do zero.
              </strong>
            </Lead>

            <HeaderBadges>
              <HeaderBadge>
                <BadgeCheck strokeWidth={1.7} />
                histórias verificadas
              </HeaderBadge>

              <HeaderBadge>
                <TrendingUp strokeWidth={1.7} />
                evolução profissional
              </HeaderBadge>

              <HeaderBadge>
                <Sparkles strokeWidth={1.7} />
                novas carreiras
              </HeaderBadge>
            </HeaderBadges>
          </HeaderSide>
        </Header>

        <StatsPanel
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                  scale: 0.99,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: '-70px',
          }}
          transition={{
            duration: 0.72,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <StatCard>
            <StatIcon>
              <Users strokeWidth={1.7} />
            </StatIcon>

            <StatValue>+25 mil</StatValue>
            <StatLabel>
              alunos impactados por uma formação prática.
            </StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <BriefcaseBusiness strokeWidth={1.7} />
            </StatIcon>

            <StatValue>+300</StatValue>
            <StatLabel>
              empresas conectadas à nossa comunidade.
            </StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <Laptop2 strokeWidth={1.7} />
            </StatIcon>

            <StatValue>Do zero</StatValue>
            <StatLabel>
              ao primeiro projeto e à primeira oportunidade.
            </StatLabel>
          </StatCard>
        </StatsPanel>
      </Container>

      <MarqueeSection>
        <MarqueeViewport>
          <MarqueeTrack
            $duration={48}
            aria-label="Depoimentos de alunos"
          >
            {renderCards(linha1, 'linha-1-a')}
            {renderCards(linha1, 'linha-1-b')}
          </MarqueeTrack>
        </MarqueeViewport>

        <MarqueeViewport>
          <MarqueeTrack
            $duration={44}
            $reverse
            aria-label="Mais depoimentos de alunos"
          >
            {renderCards(linha2, 'linha-2-a')}
            {renderCards(linha2, 'linha-2-b')}
          </MarqueeTrack>
        </MarqueeViewport>
      </MarqueeSection>

      <Container>
        <BottomBanner
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                  scale: 0.99,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
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
          <BannerContent>
            <BannerEyebrow>
              <Sparkles strokeWidth={1.7} />
              próximo capítulo
            </BannerEyebrow>

            <BannerTitle>
              Toda grande mudança começa quando alguém decide tentar.
            </BannerTitle>

            <BannerDescription>
              As experiências são diferentes, mas todas têm algo em comum:
              uma decisão, consistência e a construção de habilidades que o
              mercado realmente procura.
            </BannerDescription>
          </BannerContent>

          <BannerIndicator aria-hidden="true">
            <TrendingUp strokeWidth={1.6} />
          </BannerIndicator>
        </BottomBanner>
      </Container>
    </SectionBg>
  );
}