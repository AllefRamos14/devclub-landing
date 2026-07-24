import {
  useRef,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
} from 'react';

import {
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  Code2,
  Cpu,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Users,
  type LucideIcon
} from 'lucide-react';

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import styled from 'styled-components';

import { Container, Eyebrow, Section } from '../ui/Layout';

interface TutorMetric {
  value: string;
  label: string;
}

interface Tutor {
  initials: string;
  hue: number;
  name: string;
  role: string;
  bio: string;
  icon: LucideIcon;
  experience: string;
  specialty: string;
  technologies: string[];
  metrics?: TutorMetric[];
  featured?: boolean;
}

interface FeaturedProps {
  $featured?: boolean;
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
      rgba(124, 92, 255, 0.075),
      transparent 33%
    ),
    linear-gradient(
      180deg,
      ${({ theme }) => theme.color.bg},
      ${({ theme }) => theme.color.bgElevated}
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
      black 12%,
      black 88%,
      transparent
    );

    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 12%;
    left: 50%;
    z-index: -3;

    width: min(1100px, 90vw);
    height: 600px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.045);
    filter: blur(190px);
    transform: translateX(-50%);

    pointer-events: none;
  }
`;

const AmbientLight = styled.div`
  position: absolute;
  z-index: -2;

  border-radius: 50%;
  filter: blur(160px);

  pointer-events: none;
`;

const PurpleLight = styled(AmbientLight)`
  top: 22%;
  left: -300px;

  width: 600px;
  height: 600px;

  background: rgba(124, 92, 255, 0.06);
`;

const GreenLight = styled(AmbientLight)`
  right: -290px;
  bottom: -210px;

  width: 580px;
  height: 580px;

  background: rgba(0, 255, 156, 0.035);
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
  align-items: end;

  gap: clamp(40px, 8vw, 120px);
  margin-bottom: clamp(52px, 7vw, 96px);

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: 1fr;
    align-items: start;
    gap: ${({ theme }) => theme.space(7)};
  }
`;

const HeaderMain = styled.div`
  max-width: 800px;
`;

const EyebrowWrapper = styled(motion.div)`
  display: inline-flex;
`;

const Title = styled(motion.h2)`
  max-width: 16ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2.5rem, 5vw, 4.8rem);
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
    font-size: clamp(2.25rem, 12vw, 3.6rem);
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

const ExpertiseStrip = styled.div`
  position: relative;
  overflow: hidden;

  margin-bottom: ${({ theme }) => theme.space(6)};
  padding: 13px 0;

  border-top: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  mask-image: linear-gradient(
    90deg,
    transparent,
    black 8%,
    black 92%,
    transparent
  );
`;

const ExpertiseTrack = styled(motion.div)`
  display: flex;
  width: max-content;

  gap: 48px;

  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`;

const ExpertiseItem = styled.span`
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;

  gap: 13px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.13em;
  text-transform: uppercase;

  &::before {
    content: '';

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 12px ${({ theme }) => theme.color.accent};
  }
`;

const TutorsLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(340px, 0.85fr);

  gap: ${({ theme }) => theme.space(5)};

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: 1fr;
  }
`;

const SpecialistsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: ${({ theme }) => theme.space(5)};

  @media (
    min-width: ${({ theme }) => theme.breakpoint.mobile}
  ) and (
    max-width: ${({ theme }) => theme.breakpoint.desktop}
  ) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    article:last-child {
      grid-column: 1 / -1;
    }
  }
`;

const Card = styled(motion.article)<FeaturedProps>`
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  min-height: ${({ $featured }) => ($featured ? '690px' : '210px')};
  padding: ${({ $featured, theme }) =>
    $featured
      ? `clamp(28px, 4vw, 46px)`
      : theme.space(5)};

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.035),
      rgba(255, 255, 255, 0.008)
    ) padding-box,
    radial-gradient(
      260px circle at var(--mouse-x) var(--mouse-y),
      rgba(124, 92, 255, 0.85),
      rgba(255, 255, 255, 0.07) 48%,
      transparent 72%
    ) border-box,
    ${({ theme }) => theme.color.surface};

  box-shadow:
    ${({ $featured }) =>
      $featured
        ? '0 42px 120px rgba(0, 0, 0, 0.32), 0 0 70px rgba(124, 92, 255, 0.06)'
        : '0 20px 58px rgba(0, 0, 0, 0.17)'};

  transform-style: preserve-3d;

  transition:
    border-color ${({ theme }) => theme.transition.base},
    box-shadow ${({ theme }) => theme.transition.base};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;

    background:
      radial-gradient(
        540px circle at var(--mouse-x) var(--mouse-y),
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
        circle at 100% 0%,
        ${({ $featured }) =>
          $featured
            ? 'rgba(0, 255, 156, 0.07)'
            : 'rgba(124, 92, 255, 0.065)'},
        transparent 35%
      );

    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    box-shadow:
      0 38px 105px rgba(0, 0, 0, 0.3),
      0 0 55px rgba(124, 92, 255, 0.065);
  }

  &:hover [data-avatar='true'] {
    transform: translateZ(35px) translateY(-4px) scale(1.055);
  }

  &:hover [data-avatar-ring='true'] {
    opacity: 0.82;
    transform: scale(1.13);
  }

  &:hover [data-card-arrow='true'] {
    transform: rotate(45deg);

    border-color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.color.accent};
    color: #ffffff;
  }

  &:hover [data-tech-pill='true'] {
    border-color: rgba(124, 92, 255, 0.2);
    background: rgba(124, 92, 255, 0.06);
    color: ${({ theme }) => theme.color.text};
  }

  &:hover [data-code-mark='true'] {
    color: ${({ theme }) => theme.color.accent};
    opacity: 1;
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-height: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`;

const CardNoise = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  opacity: 0.017;

  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");

  pointer-events: none;
`;

const CardHeader = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
`;

const AvatarArea = styled.div`
  position: relative;

  width: fit-content;
`;

const AvatarRing = styled.div<HueProps>`
  position: absolute;
  inset: -9px;

  border: 1px solid
    ${({ $hue }) => `hsla(${$hue}, 80%, 62%, 0.24)`};

  border-radius: 26px;

  opacity: 0.42;

  transition:
    transform ${({ theme }) => theme.transition.slow},
    opacity ${({ theme }) => theme.transition.base};

  pointer-events: none;
`;

const AvatarGlow = styled.div<HueProps>`
  position: absolute;
  top: -45px;
  left: -45px;
  z-index: -1;

  width: 170px;
  height: 170px;

  border-radius: 50%;

  background: ${({ $hue }) =>
    `hsla(${$hue}, 84%, 58%, 0.5)`};

  filter: blur(58px);
  opacity: 0.2;

  pointer-events: none;
`;

const Avatar = styled.div<HueProps>`
  position: relative;

  display: grid;
  place-items: center;

  width: 78px;
  height: 78px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 22px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.16),
      rgba(255, 255, 255, 0.015)
    ),
    ${({ $hue }) =>
      `linear-gradient(
        135deg,
        hsl(${$hue}, 76%, 58%),
        hsl(${$hue + 38}, 78%, 49%)
      )`};

  box-shadow:
    0 20px 42px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  color: #ffffff;

  font-family: ${({ theme }) => theme.font.display};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: -0.04em;

  transition: transform ${({ theme }) => theme.transition.base};

  &::after {
    content: '';
    position: absolute;
    inset: 1px;

    border-radius: 20px;

    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.14),
      transparent 48%
    );

    pointer-events: none;
  }
`;

const SpecialistAvatar = styled(Avatar)`
  width: 58px;
  height: 58px;

  border-radius: 17px;

  font-size: 1.05rem;

  &::after {
    border-radius: 15px;
  }
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space(2)};
`;

const CodeMark = styled.span`
  display: grid;
  place-items: center;

  width: 36px;
  height: 36px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;

  opacity: 0.46;

  transition:
    opacity ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast},
    transform ${({ theme }) => theme.transition.base};
`;

const CardArrow = styled.span`
  display: grid;
  place-items: center;

  width: 38px;
  height: 38px;

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

const StatusRow = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: ${({ theme }) => theme.space(3)};
  margin-top: ${({ theme }) => theme.space(7)};
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 8px;
  padding: 6px 10px;

  border: 1px solid rgba(0, 255, 156, 0.13);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(0, 255, 156, 0.045);
  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  &::before {
    content: '';

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: currentColor;

    box-shadow:
      0 0 0 4px rgba(0, 255, 156, 0.06),
      0 0 13px rgba(0, 255, 156, 0.5);
  }
`;

const FounderBadge = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 7px;
  padding: 6px 10px;

  border: 1px solid rgba(124, 92, 255, 0.17);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(124, 92, 255, 0.055);
  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  svg {
    width: 12px;
    height: 12px;
  }
`;

const Identity = styled.div`
  position: relative;
  z-index: 2;

  margin-top: ${({ theme }) => theme.space(6)};
`;

const FounderName = styled.h3`
  max-width: 13ch;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2rem, 4vw, 3.4rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.055em;
`;

const SpecialistName = styled.h3`
  color: ${({ theme }) => theme.color.text};

  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.weight.semibold};
  line-height: 1.15;
  letter-spacing: -0.03em;
`;

const Role = styled.span`
  display: block;

  margin-top: 9px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.075em;
  text-transform: uppercase;
`;

const Bio = styled.p`
  position: relative;
  z-index: 2;

  max-width: 58ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.94rem;
  line-height: 1.75;
`;

const SpecialistBio = styled(Bio)`
  margin-top: ${({ theme }) => theme.space(4)};

  font-size: 0.86rem;
  line-height: 1.65;
`;

const Divider = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  height: 1px;

  margin: ${({ theme }) => theme.space(6)} 0;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.border},
    rgba(124, 92, 255, 0.25),
    transparent
  );
`;

const MetricsGrid = styled.div`
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: ${({ theme }) => theme.space(3)};
`;

const MetricCard = styled.div`
  position: relative;
  overflow: hidden;

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
      rgba(124, 92, 255, 0.5),
      transparent
    );
  }
`;

const MetricValue = styled.strong`
  display: block;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.45rem, 3vw, 2rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.045em;
`;

const MetricLabel = styled.span`
  display: block;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const MetaGrid = styled.div`
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: ${({ theme }) => theme.space(4)};
`;

const MetaItem = styled.div`
  min-width: 0;
`;

const MetaValue = styled.strong`
  display: block;

  overflow: hidden;

  color: ${({ theme }) => theme.color.text};

  font-size: 0.92rem;
  font-weight: ${({ theme }) => theme.weight.semibold};
  line-height: 1.35;
  letter-spacing: -0.02em;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MetaLabel = styled.span`
  display: block;

  margin-top: 5px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const CardFooter = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space(4)};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.space(6)};
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
`;

const TechPill = styled.span`
  display: inline-flex;
  align-items: center;

  min-height: 28px;
  padding: 5px 9px;

  border: 1px solid rgba(255, 255, 255, 0.055);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(255, 255, 255, 0.015);
  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.055em;
  text-transform: uppercase;

  transition:
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};
`;

const SpecialistContent = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);

  gap: ${({ theme }) => theme.space(4)};
`;

const SpecialistText = styled.div`
  min-width: 0;
`;

const SpecialistFooter = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.space(5)};
`;

const SpecialistIcon = styled.div`
  display: grid;
  flex: 0 0 auto;
  place-items: center;

  width: 38px;
  height: 38px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.018);
  color: ${({ theme }) => theme.color.accent};

  svg {
    width: 16px;
    height: 16px;
  }
`;

const AuthorityPanel = styled(motion.div)`
  position: relative;
  overflow: hidden;

  display: grid;
  grid-template-columns: minmax(220px, 0.75fr) minmax(0, 1.25fr);
  align-items: stretch;

  gap: ${({ theme }) => theme.space(6)};
  margin-top: clamp(46px, 7vw, 86px);
  padding: 1px;

  border-radius: ${({ theme }) => theme.radius.lg};

  background: linear-gradient(
    130deg,
    rgba(124, 92, 255, 0.7),
    rgba(255, 255, 255, 0.06) 42%,
    rgba(0, 255, 156, 0.4)
  );

  box-shadow:
    0 34px 100px rgba(0, 0, 0, 0.25),
    0 0 70px rgba(124, 92, 255, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: 1fr;
  }
`;

const AuthorityIntro = styled.div`
  position: relative;
  overflow: hidden;

  padding: clamp(25px, 4vw, 40px);

  border-radius: calc(${({ theme }) => theme.radius.lg} - 1px);

  background:
    linear-gradient(
      145deg,
      rgba(124, 92, 255, 0.09),
      rgba(255, 255, 255, 0.012)
    ),
    ${({ theme }) => theme.color.surface};

  &::after {
    content: '';
    position: absolute;
    top: -90px;
    right: -70px;

    width: 210px;
    height: 210px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.17);
    filter: blur(70px);

    pointer-events: none;
  }
`;

const AuthorityLabel = styled.span`
  position: relative;
  z-index: 1;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const AuthorityTitle = styled.h3`
  position: relative;
  z-index: 1;

  max-width: 13ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.65rem, 3vw, 2.5rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1.08;
  letter-spacing: -0.045em;
`;

const AuthorityStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 1px;

  border-radius: calc(${({ theme }) => theme.radius.lg} - 1px);

  background: ${({ theme }) => theme.color.border};

  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const AuthorityStat = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 190px;
  padding: clamp(24px, 4vw, 38px);

  background: ${({ theme }) => theme.color.surface};

  &::before {
    content: '';
    position: absolute;
    top: -80px;
    right: -80px;

    width: 160px;
    height: 160px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.07);
    filter: blur(50px);

    pointer-events: none;
  }
`;

const AuthorityValue = styled.strong`
  position: relative;
  z-index: 1;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.05em;
`;

const AuthorityDescription = styled.span`
  position: relative;
  z-index: 1;

  max-width: 18ch;
  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.85rem;
  line-height: 1.55;
`;

const expertise = [
  'Full Stack',
  'Front-End',
  'Back-End',
  'Mobile',
  'Cloud',
  'Carreira',
  'Arquitetura',
  'Produto',
];

const tutors: Tutor[] = [
  {
    initials: 'RM',
    hue: 258,
    name: 'Rodolfo Mori',
    role: 'Fundador · Full Stack',
    bio:
      'De eletricista a desenvolvedor sênior, transformou a própria mudança de carreira em um método direto, prático e conectado às exigências reais do mercado de tecnologia.',
    icon: Code2,
    experience: '+10 anos',
    specialty: 'Full Stack',
    technologies: ['JavaScript', 'React', 'Node.js', 'Arquitetura'],
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
    initials: 'AG',
    hue: 190,
    name: 'Andrey Guimarães',
    role: 'Front-End Lead',
    bio:
      'Especialista em interfaces modernas, experiência do usuário, animações fluidas e performance.',
    icon: Braces,
    experience: 'Senior',
    specialty: 'Front-End',
    technologies: ['React', 'TypeScript', 'Motion'],
  },
  {
    initials: 'GS',
    hue: 20,
    name: 'Gabriel Santos',
    role: 'Back-End & Infra',
    bio:
      'Desenvolve APIs, integrações e estruturas escaláveis para produtos digitais de alta disponibilidade.',
    icon: Terminal,
    experience: 'Senior',
    specialty: 'Back-End',
    technologies: ['Node.js', 'APIs', 'Cloud'],
  },
  {
    initials: 'CM',
    hue: 145,
    name: 'Camila Marques',
    role: 'Mobile & Carreira',
    bio:
      'Ajuda alunos a criarem aplicativos, portfólios profissionais e estratégias para conquistar oportunidades.',
    icon: Smartphone,
    experience: 'Mentoria',
    specialty: 'Mobile',
    technologies: ['React Native', 'UX', 'Carreira'],
  },
];

interface TutorCardProps {
  tutor: Tutor;
  index: number;
  reducedMotion: boolean | null;
}

function FeaturedTutorCard({
  tutor,
  reducedMotion,
}: Omit<TutorCardProps, 'index'>) {
  const cardRef = useRef<HTMLElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 24,
    mass: 0.45,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 24,
    mass: 0.45,
  });

  function handleMouseMove(
    event: ReactMouseEvent<HTMLElement>,
  ) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${mouseX}px`);
    card.style.setProperty('--mouse-y', `${mouseY}px`);

    if (reducedMotion) {
      return;
    }

    const rotateYValue =
      ((mouseX - rect.width / 2) / rect.width) * 3.2;

    const rotateXValue =
      -((mouseY - rect.height / 2) / rect.height) * 3.2;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <Card
      ref={cardRef}
      $featured
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        perspective: 1000,
      } as SpotlightStyle}
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 30,
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
        margin: '-70px',
      }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <CardNoise />

      <CardHeader>
        <AvatarArea>
          <AvatarGlow $hue={tutor.hue} />

          <AvatarRing
            data-avatar-ring="true"
            $hue={tutor.hue}
          />

          <Avatar
            data-avatar="true"
            $hue={tutor.hue}
          >
            {tutor.initials}
          </Avatar>
        </AvatarArea>

        <CardActions>
          <CodeMark
            data-code-mark="true"
            aria-hidden="true"
          >
            {'</>'}
          </CodeMark>

          <CardArrow
            data-card-arrow="true"
            aria-hidden="true"
          >
            <ArrowUpRight strokeWidth={1.7} />
          </CardArrow>
        </CardActions>
      </CardHeader>

      <StatusRow>
        <StatusBadge>ativo no mercado</StatusBadge>

        <FounderBadge>
          <Sparkles strokeWidth={1.7} />
          fundador
        </FounderBadge>
      </StatusRow>

      <Identity>
        <FounderName>{tutor.name}</FounderName>
        <Role>{tutor.role}</Role>
      </Identity>

      <Bio>{tutor.bio}</Bio>

      {tutor.metrics && (
        <>
          <Divider />

          <MetricsGrid>
            {tutor.metrics.map((metric) => (
              <MetricCard key={metric.label}>
                <MetricValue>{metric.value}</MetricValue>
                <MetricLabel>{metric.label}</MetricLabel>
              </MetricCard>
            ))}
          </MetricsGrid>
        </>
      )}

      <Divider />

      <MetaGrid>
        <MetaItem>
          <MetaValue>{tutor.experience}</MetaValue>
          <MetaLabel>experiência</MetaLabel>
        </MetaItem>

        <MetaItem>
          <MetaValue>{tutor.specialty}</MetaValue>
          <MetaLabel>especialidade</MetaLabel>
        </MetaItem>
      </MetaGrid>

      <CardFooter>
        <Technologies>
          {tutor.technologies.map((technology) => (
            <TechPill
              key={technology}
              data-tech-pill="true"
            >
              {technology}
            </TechPill>
          ))}
        </Technologies>
      </CardFooter>
    </Card>
  );
}

function SpecialistTutorCard({
  tutor,
  index,
  reducedMotion,
}: TutorCardProps) {
  const Icon = tutor.icon;

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
    <Card
      onMouseMove={handleMouseMove}
      style={
        {
          '--mouse-x': '50%',
          '--mouse-y': '50%',
        } as SpotlightStyle
      }
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              x: 24,
              scale: 0.985,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: '-60px',
      }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.08, 0.24),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <CardNoise />

      <SpecialistContent>
        <AvatarArea>
          <AvatarGlow $hue={tutor.hue} />

          <AvatarRing
            data-avatar-ring="true"
            $hue={tutor.hue}
          />

          <SpecialistAvatar
            data-avatar="true"
            $hue={tutor.hue}
          >
            {tutor.initials}
          </SpecialistAvatar>
        </AvatarArea>

        <SpecialistText>
          <SpecialistName>{tutor.name}</SpecialistName>
          <Role>{tutor.role}</Role>

          <SpecialistBio>{tutor.bio}</SpecialistBio>
        </SpecialistText>
      </SpecialistContent>

      <SpecialistFooter>
        <Technologies>
          {tutor.technologies.map((technology) => (
            <TechPill
              key={technology}
              data-tech-pill="true"
            >
              {technology}
            </TechPill>
          ))}
        </Technologies>

        <SpecialistIcon aria-hidden="true">
          <Icon strokeWidth={1.7} />
        </SpecialistIcon>
      </SpecialistFooter>
    </Card>
  );
}

export function Tutores() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 25,
    mass: 0.4,
  });

  const titleY = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReducedMotion ? [0, 0] : [24, -12],
  );

  const featuredTutor = tutors.find(
    (tutor) => tutor.featured,
  );

  const specialistTutors = tutors.filter(
    (tutor) => !tutor.featured,
  );

  return (
    <SectionBg
      id="tutores"
      ref={sectionRef}
    >
      <PurpleLight />
      <GreenLight />

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
              <Eyebrow>especialistas</Eyebrow>
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
              Mentores que não apenas ensinam.{' '}
              <span>Eles constroem, lideram e transformam.</span>
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
              Aprenda com profissionais que trabalham com tecnologia no mundo
              real, enfrentam desafios de produção e transformam essa
              experiência em um ensino{' '}
              <strong>direto, prático e conectado ao mercado.</strong>
            </Lead>

            <HeaderBadges>
              <HeaderBadge>
                <BriefcaseBusiness strokeWidth={1.7} />
                mercado real
              </HeaderBadge>

              <HeaderBadge>
                <ShieldCheck strokeWidth={1.7} />
                conteúdo validado
              </HeaderBadge>

              <HeaderBadge>
                <Users strokeWidth={1.7} />
                suporte próximo
              </HeaderBadge>
            </HeaderBadges>
          </HeaderSide>
        </Header>

        <ExpertiseStrip aria-hidden="true">
          <ExpertiseTrack
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    x: ['0%', '-50%'],
                  }
            }
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...expertise, ...expertise].map(
              (item, index) => (
                <ExpertiseItem
                  key={`${item}-${index}`}
                >
                  {item}
                </ExpertiseItem>
              ),
            )}
          </ExpertiseTrack>
        </ExpertiseStrip>

        <TutorsLayout>
          {featuredTutor && (
            <FeaturedTutorCard
              tutor={featuredTutor}
              reducedMotion={prefersReducedMotion}
            />
          )}

          <SpecialistsGrid>
            {specialistTutors.map((tutor, index) => (
              <SpecialistTutorCard
                key={tutor.name}
                tutor={tutor}
                index={index}
                reducedMotion={prefersReducedMotion}
              />
            ))}
          </SpecialistsGrid>
        </TutorsLayout>

        <AuthorityPanel
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
          <AuthorityIntro>
            <AuthorityLabel>
              <Cpu strokeWidth={1.7} />
              experiência coletiva
            </AuthorityLabel>

            <AuthorityTitle>
              Conhecimento aplicado em produtos reais.
            </AuthorityTitle>
          </AuthorityIntro>

          <AuthorityStats>
            <AuthorityStat>
              <AuthorityValue>+30 anos</AuthorityValue>

              <AuthorityDescription>
                de experiência somada em tecnologia.
              </AuthorityDescription>
            </AuthorityStat>

            <AuthorityStat>
              <AuthorityValue>Produção</AuthorityValue>

              <AuthorityDescription>
                decisões técnicas testadas em projetos reais.
              </AuthorityDescription>
            </AuthorityStat>

            <AuthorityStat>
              <AuthorityValue>Prática</AuthorityValue>

              <AuthorityDescription>
                ensino aplicado desde o primeiro projeto.
              </AuthorityDescription>
            </AuthorityStat>
          </AuthorityStats>
        </AuthorityPanel>
      </Container>
    </SectionBg>
  );
}