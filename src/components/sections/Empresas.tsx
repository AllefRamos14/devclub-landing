import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react';

import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  Code2,
  Network,
  Rocket,
  Sparkles,
  Terminal,
  Users,
  Zap,
} from 'lucide-react';

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import styled, { keyframes } from 'styled-components';

import { Container, Eyebrow, Section } from '../ui/Layout';

interface Company {
  name: string;
  category: string;
  description: string;
  status: string;
  code: string;
  featured?: boolean;
}

interface MarqueeTrackProps {
  $reverse?: boolean;
  $duration: number;
}

interface CompanyCardProps {
  $featured?: boolean;
}

interface ParticleProps {
  $left: number;
  $top: number;
  $size: number;
  $delay: number;
  $duration: number;
}

interface FloatingMetricProps {
  $side: 'left' | 'right';
}

interface CodeItemProps {
  $accent?: boolean;
}

const systemPulse = keyframes`
  0%,
  100% {
    opacity: 0.55;
    transform: scale(0.92);
  }

  50% {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const particleFloat = keyframes`
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.65);
  }

  25% {
    opacity: 0.72;
  }

  75% {
    opacity: 0.3;
  }

  100% {
    opacity: 0;
    transform: translateY(-92px) scale(1.1);
  }
`;

const orbitSpin = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const orbitSpinReverse = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;

const centerShine = keyframes`
  0%,
  22% {
    left: -55%;
  }

  72%,
  100% {
    left: 135%;
  }
`;

const codeScroll = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
`;

const scrollLeft = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-50% - 8px));
  }
`;

const scrollRight = keyframes`
  from {
    transform: translateX(calc(-50% - 8px));
  }

  to {
    transform: translateX(0);
  }
`;

const SectionBg = styled(Section)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 50% 18%,
      rgba(124, 92, 255, 0.15),
      transparent 28%
    ),
    radial-gradient(
      circle at 50% 64%,
      rgba(68, 42, 170, 0.07),
      transparent 42%
    ),
    linear-gradient(
      180deg,
      ${({ theme }) => theme.color.bgElevated},
      ${({ theme }) => theme.color.bg}
    );

  border-top: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

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

    background-size: 68px 68px;
    pointer-events: none;
  }
`;

const AmbientLight = styled.div`
  position: absolute;
  z-index: -3;

  border-radius: 50%;
  filter: blur(170px);

  pointer-events: none;
`;

const LeftLight = styled(AmbientLight)`
  top: 7%;
  left: -300px;

  width: 610px;
  height: 610px;

  background: rgba(124, 92, 255, 0.075);
`;

const RightLight = styled(AmbientLight)`
  right: -320px;
  bottom: 3%;

  width: 640px;
  height: 640px;

  background: rgba(0, 255, 156, 0.025);
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);
  align-items: end;

  gap: clamp(42px, 8vw, 116px);
  margin-bottom: clamp(58px, 8vw, 100px);

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: 1fr;
    align-items: start;

    gap: ${({ theme }) => theme.space(7)};
  }
`;

const HeaderMain = styled.div`
  max-width: 880px;
`;

const EyebrowWrap = styled(motion.div)`
  display: inline-flex;
`;

const Title = styled(motion.h2)`
  max-width: 15ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2.7rem, 5.6vw, 5.5rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 0.95;
  letter-spacing: -0.072em;

  span {
    background: ${({ theme }) => theme.gradient.text};
    background-clip: text;
    -webkit-background-clip: text;

    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: clamp(2.35rem, 12vw, 3.8rem);
  }
`;

const HeaderSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Lead = styled.p`
  max-width: 49ch;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: clamp(1rem, 1.3vw, 1.08rem);
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

const SystemBar = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(5)};
  margin-bottom: ${({ theme }) => theme.space(6)};
  padding-block: ${({ theme }) => theme.space(4)};
  padding-inline: ${({ theme }) => theme.space(5)};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.03),
      rgba(255, 255, 255, 0.005)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 24px 75px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const SystemMain = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space(4)};
`;

const SystemIcon = styled.div`
  position: relative;

  display: grid;
  flex: 0 0 auto;
  place-items: center;

  width: 46px;
  height: 46px;

  border: 1px solid rgba(0, 255, 156, 0.15);
  border-radius: 15px;

  background: rgba(0, 255, 156, 0.045);
  color: ${({ theme }) => theme.color.success};

  &::after {
    content: '';
    position: absolute;
    inset: -5px;

    border: 1px solid rgba(0, 255, 156, 0.06);
    border-radius: 19px;

    animation: ${systemPulse} 3s ease-in-out infinite;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`;

const SystemContent = styled.div`
  min-width: 0;
`;

const SystemLabel = styled.span`
  display: block;

  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const SystemDescription = styled.span`
  display: block;
  margin-top: 5px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.88rem;
  line-height: 1.5;
`;

const SystemStatus = styled.span`
  display: flex;
  align-items: center;

  gap: 9px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &::before {
    content: '';

    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: ${({ theme }) => theme.color.success};

    box-shadow:
      0 0 0 5px rgba(0, 255, 156, 0.05),
      0 0 16px rgba(0, 255, 156, 0.5);
  }
`;

const TalentTerminal = styled(motion.div)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  min-height: 790px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    radial-gradient(
      circle at 50% 50%,
      rgba(124, 92, 255, 0.13),
      transparent 31%
    ),
    radial-gradient(
      circle at 50% 100%,
      rgba(124, 92, 255, 0.12),
      transparent 48%
    ),
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.032),
      rgba(255, 255, 255, 0.004)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 55px 150px rgba(0, 0, 0, 0.36),
    0 0 100px rgba(124, 92, 255, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);

  perspective: 1200px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-height: 720px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-height: 700px;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

const Spotlight = styled(motion.div)`
  position: absolute;
  top: -260px;
  left: -260px;
  z-index: 1;

  width: 520px;
  height: 520px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(124, 92, 255, 0.16) 0%,
    rgba(124, 92, 255, 0.08) 34%,
    transparent 70%
  );

  filter: blur(10px);
  opacity: 0.85;

  pointer-events: none;
`;

const TerminalTopbar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 15;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
  padding: ${({ theme }) => theme.space(5)};

  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  background: rgba(8, 8, 13, 0.58);
  backdrop-filter: blur(22px);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: ${({ theme }) => theme.space(4)};
  }
`;

const TerminalTitle = styled.span`
  display: flex;
  align-items: center;

  gap: 10px;

  color: ${({ theme }) => theme.color.textMuted};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  svg {
    width: 14px;
    height: 14px;

    color: ${({ theme }) => theme.color.accent};
  }
`;

const TerminalStatus = styled.span`
  display: flex;
  align-items: center;

  gap: 8px;

  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &::before {
    content: '';

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: ${({ theme }) => theme.color.success};

    box-shadow: 0 0 12px rgba(0, 255, 156, 0.55);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

const ParticleLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  pointer-events: none;
`;

const Particle = styled.span<ParticleProps>`
  position: absolute;
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;

  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  border-radius: 50%;

  background: rgba(203, 195, 255, 0.82);

  box-shadow:
    0 0 9px rgba(124, 92, 255, 0.55),
    0 0 20px rgba(124, 92, 255, 0.22);

  animation: ${particleFloat}
    ${({ $duration }) => $duration}s linear infinite;

  animation-delay: ${({ $delay }) => $delay}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.35;
  }
`;

const OrbitOuter = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  z-index: 2;

  width: 630px;
  height: 630px;

  border: 1px solid rgba(124, 92, 255, 0.11);
  border-radius: 50%;

  animation: ${orbitSpin} 42s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 520px;
    height: 520px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 390px;
    height: 390px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: translate(-50%, -50%);
  }
`;

const OrbitInner = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  z-index: 3;

  width: 480px;
  height: 480px;

  border: 1px solid rgba(124, 92, 255, 0.09);
  border-radius: 50%;

  animation: ${orbitSpinReverse} 28s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 390px;
    height: 390px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 290px;
    height: 290px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: translate(-50%, -50%);
  }
`;

const OrbitNode = styled.div`
  position: absolute;

  display: grid;
  place-items: center;

  width: 44px;
  height: 44px;

  border: 1px solid rgba(124, 92, 255, 0.2);
  border-radius: 14px;

  background: rgba(14, 13, 23, 0.92);
  color: ${({ theme }) => theme.color.textMuted};

  box-shadow:
    0 14px 38px rgba(0, 0, 0, 0.3),
    0 0 22px rgba(124, 92, 255, 0.07);

  transform: translate(-50%, -50%);

  svg {
    width: 17px;
    height: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 35px;
    height: 35px;

    border-radius: 11px;
  }
`;

const TerminalCenter = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  z-index: 9;

  width: min(470px, calc(100% - 40px));

  transform: translate(-50%, -50%);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    top: 49%;
    width: calc(100% - 28px);
  }
`;

const CenterCard = styled(motion.article)`
  position: relative;
  overflow: hidden;

  min-height: 390px;
  padding: clamp(25px, 4vw, 42px);

  border: 1px solid rgba(124, 92, 255, 0.23);
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(124, 92, 255, 0.15),
      transparent 54%
    ),
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.06),
      rgba(255, 255, 255, 0.009)
    ),
    rgba(10, 10, 17, 0.88);

  box-shadow:
    0 40px 110px rgba(0, 0, 0, 0.43),
    0 0 80px rgba(124, 92, 255, 0.075),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);

  backdrop-filter: blur(26px);
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    top: -90%;
    left: -35%;

    width: 38%;
    height: 290%;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.08),
      transparent
    );

    transform: rotate(20deg);
    animation: ${centerShine} 6s ease-in-out infinite;

    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`;

const CenterHeader = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
`;

const CenterStatus = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 8px;
  min-height: 30px;
  padding: 6px 10px;

  border: 1px solid rgba(0, 255, 156, 0.13);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(0, 255, 156, 0.035);
  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const CenterIndex = styled.span`
  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
`;

const CenterIcon = styled.div`
  position: relative;
  z-index: 2;

  display: grid;
  place-items: center;

  width: 62px;
  height: 62px;
  margin-top: ${({ theme }) => theme.space(7)};

  border: 1px solid rgba(124, 92, 255, 0.2);
  border-radius: 20px;

  background: rgba(124, 92, 255, 0.08);
  color: ${({ theme }) => theme.color.accent};

  svg {
    width: 25px;
    height: 25px;
  }
`;

const CenterCategory = styled.span`
  position: relative;
  z-index: 2;

  display: block;
  margin-top: ${({ theme }) => theme.space(6)};

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

const CenterName = styled.h3`
  position: relative;
  z-index: 2;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2.2rem, 5vw, 4.2rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 0.95;
  letter-spacing: -0.065em;
`;

const CenterDescription = styled.p`
  position: relative;
  z-index: 2;

  max-width: 43ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.94rem;
  line-height: 1.7;
`;

const CodeLine = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 8px;
  margin-top: ${({ theme }) => theme.space(6)};
  padding: ${({ theme }) => theme.space(4)};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.sm};

  background: rgba(5, 5, 9, 0.58);

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  line-height: 1.5;

  strong {
    color: ${({ theme }) => theme.color.success};
  }
`;

const CenterFooter = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
  margin-top: ${({ theme }) => theme.space(5)};
`;

const CenterFooterLabel = styled.span`
  display: flex;
  align-items: center;

  gap: 8px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  svg {
    width: 13px;
    height: 13px;

    color: ${({ theme }) => theme.color.success};
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;
`;

const PaginationDot = styled.span<{ $active?: boolean }>`
  width: ${({ $active }) => ($active ? '22px' : '6px')};
  height: 6px;

  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ $active, theme }) =>
    $active
      ? theme.color.accent
      : 'rgba(255, 255, 255, 0.13)'};
`;

const FloatingMetric = styled(motion.div)<FloatingMetricProps>`
  position: absolute;
  z-index: 12;

  width: 190px;
  padding: ${({ theme }) => theme.space(4)};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: rgba(11, 11, 18, 0.82);
  backdrop-filter: blur(22px);

  ${({ $side }) =>
    $side === 'left'
      ? 'top: 24%; left: 4%;'
      : 'top: 36%; right: 4%;'}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 160px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    top: auto;
    bottom: 18px;

    width: calc(50% - 22px);

    ${({ $side }) =>
      $side === 'left'
        ? 'left: 14px;'
        : 'right: 14px;'}
  }
`;

const FloatingMetricTop = styled.span`
  display: flex;
  align-items: center;

  gap: 8px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  svg {
    width: 13px;
    height: 13px;

    color: ${({ theme }) => theme.color.accent};
  }
`;

const FloatingMetricValue = styled.strong`
  display: block;
  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.3rem, 2vw, 1.8rem);
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const FloatingMetricLabel = styled.span`
  display: block;
  margin-top: 7px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.74rem;
  line-height: 1.45;
`;

const CodeMarquee = styled.div`
  overflow: hidden;
  margin-top: ${({ theme }) => theme.space(6)};

  border-top: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  background: rgba(6, 6, 10, 0.48);
`;

const CodeTrack = styled.div`
  display: flex;
  align-items: center;

  width: max-content;

  animation: ${codeScroll} 32s linear infinite;
`;

const CodeItem = styled.span<CodeItemProps>`
  display: inline-flex;
  align-items: center;

  gap: 9px;
  min-height: 52px;
  padding: 0 30px;

  border-right: 1px solid ${({ theme }) => theme.color.border};

  color: ${({ $accent, theme }) =>
    $accent
      ? theme.color.success
      : theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

const MarqueeArea = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space(4)};
  margin-top: clamp(60px, 8vw, 100px);
`;

const MarqueeViewport = styled.div`
  overflow: hidden;
`;

const MarqueeTrack = styled.div<MarqueeTrackProps>`
  display: flex;
  align-items: stretch;

  gap: ${({ theme }) => theme.space(4)};
  width: max-content;

  animation-name: ${({ $reverse }) =>
    $reverse ? scrollRight : scrollLeft};

  animation-duration: ${({ $duration }) => $duration}s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const CompanyCard = styled.article<CompanyCardProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(6)};

  width: clamp(250px, 27vw, 350px);
  min-height: 120px;
  padding: ${({ theme }) => theme.space(5)};

  border: 1px solid
    ${({ $featured, theme }) =>
      $featured
        ? 'rgba(124, 92, 255, 0.24)'
        : theme.color.border};

  border-radius: ${({ theme }) => theme.radius.md};

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.032),
      rgba(255, 255, 255, 0.005)
    ),
    ${({ theme }) => theme.color.surface};
`;

const CompanyMain = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space(4)};
`;

const CompanyIcon = styled.div`
  display: grid;
  place-items: center;

  width: 44px;
  height: 44px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 14px;

  color: ${({ theme }) => theme.color.textFaint};
`;

const CompanyInfo = styled.div`
  min-width: 0;
`;

const CompanyName = styled.strong`
  display: block;

  color: ${({ theme }) => theme.color.text};

  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const CompanyCategory = styled.span`
  display: block;
  margin-top: 7px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.075em;
  text-transform: uppercase;
`;

const MetricsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 1px;
  margin-top: clamp(60px, 8vw, 100px);

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background: ${({ theme }) => theme.color.border};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Metric = styled.div`
  min-height: 190px;
  padding: clamp(26px, 4vw, 40px);

  background: ${({ theme }) => theme.color.surface};
`;

const MetricIcon = styled.div`
  display: grid;
  place-items: center;

  width: 39px;
  height: 39px;

  border: 1px solid rgba(124, 92, 255, 0.15);
  border-radius: 12px;

  color: ${({ theme }) => theme.color.accent};
`;

const MetricValue = styled.strong`
  display: block;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.9rem, 3vw, 2.8rem);
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const MetricLabel = styled.span`
  display: block;
  margin-top: 10px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.86rem;
`;

const Closing = styled(motion.div)`
  margin-top: ${({ theme }) => theme.space(8)};
  padding: clamp(30px, 5vw, 52px);

  border: 1px solid rgba(124, 92, 255, 0.2);
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    radial-gradient(
      circle at 0% 50%,
      rgba(124, 92, 255, 0.12),
      transparent 42%
    ),
    ${({ theme }) => theme.color.surface};
`;

const ClosingLabel = styled.span`
  display: flex;
  align-items: center;

  gap: 9px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

const ClosingTitle = styled.h3`
  max-width: 15ch;
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2rem, 4.3vw, 4rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.06em;

  span {
    color: ${({ theme }) => theme.color.accent};
  }
`;

const companies: Company[] = [
  {
    name: 'Nubank',
    category: 'serviços financeiros',
    description:
      'Produtos digitais usados por milhões de pessoas todos os dias.',
    status: 'talentos em produção',
    code: 'career.deploy("nubank")',
    featured: true,
  },
  {
    name: 'iFood',
    category: 'tecnologia e delivery',
    description:
      'Tecnologia, logística e produtos digitais em escala nacional.',
    status: 'novas oportunidades',
    code: 'talent.connect("ifood")',
    featured: true,
  },
  {
    name: 'Mercado Livre',
    category: 'comércio eletrônico',
    description:
      'Infraestrutura e experiências digitais usadas em toda a América Latina.',
    status: 'engenharia em escala',
    code: 'developer.ship("meli")',
    featured: true,
  },
  {
    name: 'VTEX',
    category: 'digital commerce',
    description:
      'Tecnologia brasileira impulsionando operações globais de comércio.',
    status: 'produto global',
    code: 'career.unlock("vtex")',
    featured: true,
  },
  {
    name: 'Stone',
    category: 'soluções financeiras',
    description: '',
    status: '',
    code: '',
  },
  {
    name: 'QuintoAndar',
    category: 'tecnologia imobiliária',
    description: '',
    status: '',
    code: '',
  },
  {
    name: 'C6 Bank',
    category: 'serviços financeiros',
    description: '',
    status: '',
    code: '',
  },
  {
    name: 'Creditas',
    category: 'fintech',
    description: '',
    status: '',
    code: '',
  },
  {
    name: 'Wellhub',
    category: 'bem-estar corporativo',
    description: '',
    status: '',
    code: '',
  },
  {
    name: 'Loggi',
    category: 'logística e tecnologia',
    description: '',
    status: '',
    code: '',
  },
  {
    name: 'Hotmart',
    category: 'economia digital',
    description: '',
    status: '',
    code: '',
  },
  {
    name: 'Loft',
    category: 'real estate tech',
    description: '',
    status: '',
    code: '',
  },
];

const featuredCompanies = companies.filter(
  company => company.featured,
);

const firstRow = companies.slice(0, 6);
const secondRow = companies.slice(6);

const particles = Array.from(
  {
    length: 24,
  },
  (_, index) => ({
    left: (index * 31) % 100,
    top: 14 + ((index * 19) % 76),
    size: 1 + (index % 3),
    delay: (index % 8) * 0.62,
    duration: 5 + (index % 6),
  }),
);

const outerNodeStyles = [
  { top: '0%', left: '50%' },
  { top: '25%', left: '93%' },
  { top: '75%', left: '93%' },
  { top: '100%', left: '50%' },
  { top: '75%', left: '7%' },
  { top: '25%', left: '7%' },
];

const innerNodeStyles = [
  { top: '0%', left: '50%' },
  { top: '50%', left: '100%' },
  { top: '100%', left: '50%' },
  { top: '50%', left: '0%' },
];

const codeItems = [
  {
    text: 'career.deploy()',
    accent: true,
  },
  {
    text: 'firstJob.unlocked()',
  },
  {
    text: 'talent.hired()',
    accent: true,
  },
  {
    text: 'skills.toProduction()',
  },
  {
    text: 'developer.connected()',
    accent: true,
  },
  {
    text: 'newChapter.start()',
  },
];

function renderCompanies(
  list: Company[],
  rowId: string,
) {
  return [...list, ...list].map(
    (company, index) => (
      <CompanyCard
        key={`${rowId}-${company.name}-${index}`}
        $featured={company.featured}
      >
        <CompanyMain>
          <CompanyIcon>
            <Building2 strokeWidth={1.7} />
          </CompanyIcon>

          <CompanyInfo>
            <CompanyName>
              {company.name}
            </CompanyName>

            <CompanyCategory>
              {company.category}
            </CompanyCategory>
          </CompanyInfo>
        </CompanyMain>

        <Rocket
          size={17}
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </CompanyCard>
    ),
  );
}

export function Empresas() {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  const [activeCompany, setActiveCompany] =
    useState(0);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const spotlightX = useMotionValue(260);
  const spotlightY = useMotionValue(260);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 160,
    damping: 22,
    mass: 0.5,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 160,
    damping: 22,
    mass: 0.5,
  });

  const smoothSpotlightX = useSpring(
    spotlightX,
    {
      stiffness: 120,
      damping: 24,
      mass: 0.45,
    },
  );

  const smoothSpotlightY = useSpring(
    spotlightY,
    {
      stiffness: 120,
      damping: 24,
      mass: 0.45,
    },
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 80,
      damping: 25,
      mass: 0.45,
    },
  );

  const titleY = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReducedMotion
      ? [0, 0]
      : [26, -12],
  );

  const terminalY = useTransform(
    smoothProgress,
    [0.1, 0.82],
    prefersReducedMotion
      ? [0, 0]
      : [30, -18],
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveCompany(current =>
        current === featuredCompanies.length - 1
          ? 0
          : current + 1,
      );
    }, 4200);

    return () => {
      window.clearInterval(interval);
    };
  }, [prefersReducedMotion]);

  function handleTerminalMove(
    event: MouseEvent<HTMLDivElement>,
  ) {
    const terminal = terminalRef.current;

    if (!terminal || prefersReducedMotion) {
      return;
    }

    const bounds =
      terminal.getBoundingClientRect();

    const x =
      event.clientX - bounds.left;

    const y =
      event.clientY - bounds.top;

    spotlightX.set(x);
    spotlightY.set(y);

    rotateY.set(
      (x / bounds.width - 0.5) * 7,
    );

    rotateX.set(
      (y / bounds.height - 0.5) * -7,
    );
  }

  function handleTerminalLeave() {
    const terminal = terminalRef.current;

    rotateX.set(0);
    rotateY.set(0);

    if (terminal) {
      spotlightX.set(
        terminal.clientWidth / 2,
      );

      spotlightY.set(
        terminal.clientHeight / 2,
      );
    }
  }

  const selectedCompany =
    featuredCompanies[activeCompany];

  return (
    <SectionBg
      id="empresas"
      ref={sectionRef}
      $noPadTop={false}
    >
      <LeftLight />
      <RightLight />

      <Container>
        <Header>
          <HeaderMain>
            <EyebrowWrap
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
              }}
            >
              <Eyebrow>
                onde nossos alunos estão
              </Eyebrow>
            </EyebrowWrap>

            <Title style={{ y: titleY }}>
              Eles aprenderam a programar.{' '}
              <span>
                Agora constroem produtos para
                milhões.
              </span>
            </Title>
          </HeaderMain>

          <HeaderSide>
            <Lead>
              O que começa com uma aula pode
              terminar dentro do time de tecnologia
              de uma das maiores empresas do país.{' '}
              <strong>
                Nossos alunos já estão ocupando
                esses espaços.
              </strong>
            </Lead>

            <HeaderBadges>
              <HeaderBadge>
                <BriefcaseBusiness
                  strokeWidth={1.7}
                />
                carreiras reais
              </HeaderBadge>

              <HeaderBadge>
                <Code2 strokeWidth={1.7} />
                código em produção
              </HeaderBadge>

              <HeaderBadge>
                <BadgeCheck
                  strokeWidth={1.7}
                />
                mercado validado
              </HeaderBadge>
            </HeaderBadges>
          </HeaderSide>
        </Header>

        <SystemBar>
          <SystemMain>
            <SystemIcon>
              <Network strokeWidth={1.7} />
            </SystemIcon>

            <SystemContent>
              <SystemLabel>
                devclub talent network
              </SystemLabel>

              <SystemDescription>
                Talentos conectados a empresas,
                produtos e oportunidades reais.
              </SystemDescription>
            </SystemContent>
          </SystemMain>

          <SystemStatus>
            conexões em tempo real
          </SystemStatus>
        </SystemBar>

        <TalentTerminal
          ref={terminalRef}
          style={{
            y: terminalY,
          }}
          onMouseMove={handleTerminalMove}
          onMouseLeave={handleTerminalLeave}
        >
          <Spotlight
            style={{
              x: smoothSpotlightX,
              y: smoothSpotlightY,
            }}
          />

          <TerminalTopbar>
            <TerminalTitle>
              <Terminal strokeWidth={1.7} />
              career deployment terminal
            </TerminalTitle>

            <TerminalStatus>
              sistema online
            </TerminalStatus>
          </TerminalTopbar>

          <ParticleLayer aria-hidden="true">
            {particles.map(
              (particle, index) => (
                <Particle
                  key={`particle-${index}`}
                  $left={particle.left}
                  $top={particle.top}
                  $size={particle.size}
                  $delay={particle.delay}
                  $duration={particle.duration}
                />
              ),
            )}
          </ParticleLayer>

          <OrbitOuter aria-hidden="true">
            {outerNodeStyles.map(
              (nodeStyle, index) => (
                <OrbitNode
                  key={`outer-node-${index}`}
                  style={nodeStyle}
                >
                  <Building2
                    strokeWidth={1.6}
                  />
                </OrbitNode>
              ),
            )}
          </OrbitOuter>

          <OrbitInner aria-hidden="true">
            {innerNodeStyles.map(
              (nodeStyle, index) => (
                <OrbitNode
                  key={`inner-node-${index}`}
                  style={nodeStyle}
                >
                  <Code2 strokeWidth={1.6} />
                </OrbitNode>
              ),
            )}
          </OrbitInner>

          <TerminalCenter>
            <AnimatePresence mode="wait">
              <CenterCard
                key={selectedCompany.name}
                style={{
                  rotateX: smoothRotateX,
                  rotateY: smoothRotateY,
                }}
                initial={
                  prefersReducedMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.96,
                        y: 18,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  y: -12,
                }}
              >
                <CenterHeader>
                  <CenterStatus>
                    {selectedCompany.status}
                  </CenterStatus>

                  <CenterIndex>
                    0{activeCompany + 1} / 0
                    {featuredCompanies.length}
                  </CenterIndex>
                </CenterHeader>

                <CenterIcon>
                  <Building2
                    strokeWidth={1.6}
                  />
                </CenterIcon>

                <CenterCategory>
                  {selectedCompany.category}
                </CenterCategory>

                <CenterName>
                  {selectedCompany.name}
                </CenterName>

                <CenterDescription>
                  {selectedCompany.description}
                </CenterDescription>

                <CodeLine>
                  <Terminal
                    size={14}
                    strokeWidth={1.7}
                  />

                  <span>
                    {selectedCompany.code}
                  </span>

                  <strong>
                    // success
                  </strong>
                </CodeLine>

                <CenterFooter>
                  <CenterFooterLabel>
                    <Check strokeWidth={1.8} />
                    talento em produção
                  </CenterFooterLabel>

                  <Pagination>
                    {featuredCompanies.map(
                      (company, index) => (
                        <PaginationDot
                          key={company.name}
                          $active={
                            index === activeCompany
                          }
                        />
                      ),
                    )}
                  </Pagination>
                </CenterFooter>
              </CenterCard>
            </AnimatePresence>
          </TerminalCenter>

          <FloatingMetric $side="left">
            <FloatingMetricTop>
              <Users strokeWidth={1.7} />
              talentos
            </FloatingMetricTop>

            <FloatingMetricValue>
              +25 mil
            </FloatingMetricValue>

            <FloatingMetricLabel>
              pessoas impactadas pela comunidade.
            </FloatingMetricLabel>
          </FloatingMetric>

          <FloatingMetric $side="right">
            <FloatingMetricTop>
              <Building2
                strokeWidth={1.7}
              />
              empresas
            </FloatingMetricTop>

            <FloatingMetricValue>
              +300
            </FloatingMetricValue>

            <FloatingMetricLabel>
              organizações conectadas aos nossos
              talentos.
            </FloatingMetricLabel>
          </FloatingMetric>
        </TalentTerminal>

        <CodeMarquee aria-hidden="true">
          <CodeTrack>
            {[...codeItems, ...codeItems].map(
              (item, index) => (
                <CodeItem
                  key={`${item.text}-${index}`}
                  $accent={item.accent}
                >
                  <Zap size={13} />
                  {item.text}
                </CodeItem>
              ),
            )}
          </CodeTrack>
        </CodeMarquee>
      </Container>

      <MarqueeArea>
        <MarqueeViewport>
          <MarqueeTrack $duration={36}>
            {renderCompanies(
              firstRow,
              'first-row',
            )}
          </MarqueeTrack>
        </MarqueeViewport>

        <MarqueeViewport>
          <MarqueeTrack
            $reverse
            $duration={40}
          >
            {renderCompanies(
              secondRow,
              'second-row',
            )}
          </MarqueeTrack>
        </MarqueeViewport>
      </MarqueeArea>

      <Container>
        <MetricsGrid>
          <Metric>
            <MetricIcon>
              <Users strokeWidth={1.7} />
            </MetricIcon>

            <MetricValue>
              +25 mil
            </MetricValue>

            <MetricLabel>
              alunos impactados pela comunidade
              DevClub
            </MetricLabel>
          </Metric>

          <Metric>
            <MetricIcon>
              <Building2
                strokeWidth={1.7}
              />
            </MetricIcon>

            <MetricValue>
              +300
            </MetricValue>

            <MetricLabel>
              empresas conectadas aos nossos
              talentos
            </MetricLabel>
          </Metric>

          <Metric>
            <MetricIcon>
              <Rocket strokeWidth={1.7} />
            </MetricIcon>

            <MetricValue>
              Em produção
            </MetricValue>

            <MetricLabel>
              profissionais atuando em produtos
              reais
            </MetricLabel>
          </Metric>
        </MetricsGrid>

        <Closing>
          <ClosingLabel>
            <Sparkles strokeWidth={1.7} />
            o próximo deploy pode ser o seu
          </ClosingLabel>

          <ClosingTitle>
            Eles não chegaram lá por acaso.{' '}
            <span>Eles começaram.</span>
          </ClosingTitle>
        </Closing>
      </Container>
    </SectionBg>
  );
}
