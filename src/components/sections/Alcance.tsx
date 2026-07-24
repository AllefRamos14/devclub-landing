import { useId, useRef } from 'react';

import {
  BadgeCheck,
  Building2,
  Globe2,
  MapPin,
  Radio,
  Satellite,
  Signal,
  Sparkles,
  Users,
  Wifi,
} from 'lucide-react';

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import styled, { keyframes } from 'styled-components';

import { Container, Eyebrow } from '../ui/Layout';

interface RadarNode {
  radius: number;
  angle: number;
  size: number;
  delay: number;
  city: string;
  state: string;
  connections: string;
}

interface NodeAnimationProps {
  $delay: number;
}

interface FloatingCardProps {
  $position: 'left' | 'right';
}

interface ParticleProps {
  $left: number;
  $top: number;
  $size: number;
  $duration: number;
  $delay: number;
}

const RadarSection = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  padding-top: clamp(110px, 13vw, 190px);

  border-top: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  background:
    radial-gradient(
      circle at 50% 36%,
      rgba(124, 92, 255, 0.14),
      transparent 33%
    ),
    radial-gradient(
      circle at 50% 70%,
      rgba(83, 58, 191, 0.08),
      transparent 42%
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
    z-index: -5;

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
      black 90%,
      transparent
    );

    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 34%;
    left: 50%;
    z-index: -4;

    width: min(1200px, 96vw);
    height: 620px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.06);
    filter: blur(190px);
    transform: translateX(-50%);

    pointer-events: none;
  }
`;

const AmbientLight = styled.div`
  position: absolute;
  z-index: -3;

  border-radius: 50%;
  filter: blur(160px);

  pointer-events: none;
`;

const LeftAmbient = styled(AmbientLight)`
  top: 16%;
  left: -280px;

  width: 560px;
  height: 560px;

  background: rgba(124, 92, 255, 0.07);
`;

const RightAmbient = styled(AmbientLight)`
  right: -300px;
  bottom: 5%;

  width: 600px;
  height: 600px;

  background: rgba(0, 255, 156, 0.028);
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(300px, 0.88fr);
  align-items: end;

  gap: clamp(40px, 8vw, 110px);
  margin-bottom: clamp(48px, 7vw, 86px);

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: 1fr;
    align-items: start;
    gap: ${({ theme }) => theme.space(7)};
  }
`;

const HeaderMain = styled.div`
  max-width: 860px;
`;

const EyebrowWrapper = styled(motion.div)`
  display: inline-flex;
`;

const Title = styled(motion.h2)`
  max-width: 15ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2.7rem, 5.5vw, 5.3rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 0.96;
  letter-spacing: -0.07em;

  span {
    background: ${({ theme }) => theme.gradient.text};
    background-clip: text;
    -webkit-background-clip: text;

    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: clamp(2.35rem, 12vw, 3.75rem);
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

const StatusBar = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(5)};
  margin-bottom: ${({ theme }) => theme.space(6)};
  padding: ${({ theme }) =>
    `${theme.space(4)} ${theme.space(5)}`};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.028),
      rgba(255, 255, 255, 0.007)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StatusMain = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space(4)};
`;

const statusPulse = keyframes`
  0%,
  100% {
    box-shadow:
      0 0 0 0 rgba(0, 255, 156, 0.2),
      0 0 16px rgba(0, 255, 156, 0.35);
  }

  50% {
    box-shadow:
      0 0 0 8px rgba(0, 255, 156, 0),
      0 0 26px rgba(0, 255, 156, 0.55);
  }
`;

const StatusIcon = styled.div`
  position: relative;

  display: grid;
  flex: 0 0 auto;
  place-items: center;

  width: 45px;
  height: 45px;

  border: 1px solid rgba(0, 255, 156, 0.15);
  border-radius: 14px;

  background: rgba(0, 255, 156, 0.045);
  color: ${({ theme }) => theme.color.success};

  animation: ${statusPulse} 3s ease-in-out infinite;

  svg {
    width: 18px;
    height: 18px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const StatusContent = styled.div`
  min-width: 0;
`;

const StatusLabel = styled.span`
  display: block;

  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const StatusDescription = styled.span`
  display: block;

  margin-top: 5px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.88rem;
  line-height: 1.5;
`;

const StatusRight = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

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
      0 0 16px rgba(0, 255, 156, 0.55);
  }
`;

const RadarShell = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  min-height: 760px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    radial-gradient(
      circle at 50% 100%,
      rgba(124, 92, 255, 0.15),
      transparent 45%
    ),
    radial-gradient(
      circle at 50% 56%,
      rgba(124, 92, 255, 0.055),
      transparent 33%
    ),
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.032),
      rgba(255, 255, 255, 0.005)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 55px 150px rgba(0, 0, 0, 0.36),
    0 0 90px rgba(124, 92, 255, 0.045),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -3;

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

    background-size: 52px 52px;

    mask-image: radial-gradient(
      circle at 50% 100%,
      black,
      transparent 73%
    );

    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    right: 10%;
    bottom: -180px;
    left: 10%;
    z-index: -2;

    height: 280px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.12);
    filter: blur(100px);

    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-height: 650px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-height: 610px;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

const RadarTopbar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 12;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
  padding: ${({ theme }) => theme.space(5)};

  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  background: rgba(8, 8, 13, 0.54);
  backdrop-filter: blur(20px);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: ${({ theme }) => theme.space(4)};
  }
`;

const RadarTopbarTitle = styled.span`
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

const RadarCoordinates = styled.span`
  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

const ParticleLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  overflow: hidden;

  pointer-events: none;
`;

const particleFloat = keyframes`
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.6);
  }

  25% {
    opacity: 0.75;
  }

  75% {
    opacity: 0.35;
  }

  100% {
    opacity: 0;
    transform: translateY(-90px) scale(1.1);
  }
`;

const Particle = styled.span<ParticleProps>`
  position: absolute;
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;

  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  border-radius: 50%;

  background: rgba(192, 182, 255, 0.85);

  box-shadow:
    0 0 8px rgba(124, 92, 255, 0.5),
    0 0 18px rgba(124, 92, 255, 0.22);

  animation: ${particleFloat}
    ${({ $duration }) => $duration}s linear infinite;

  animation-delay: ${({ $delay }) => $delay}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.4;
  }
`;

const RadarStage = styled.div`
  position: absolute;
  inset: 80px 0 0;
  z-index: 2;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  pointer-events: none;
`;

const radarFloat = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
`;

const RadarMotionWrap = styled(motion.div)`
  position: relative;

  width: min(1220px, 116vw);

  animation: ${radarFloat} 9s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const RadarSvg = styled.svg`
  display: block;

  width: 100%;
  height: auto;

  overflow: visible;
`;

const sweep = keyframes`
  0% {
    transform: rotate(-70deg);
    opacity: 0.28;
  }

  50% {
    opacity: 0.8;
  }

  100% {
    transform: rotate(70deg);
    opacity: 0.28;
  }
`;

const SweepGroup = styled.g`
  transform-origin: 550px 500px;

  animation: ${sweep} 7s ease-in-out infinite alternate;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: rotate(12deg);
  }
`;

const ringRotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ringRotateReverse = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const CoreOrbitOuter = styled.g`
  transform-origin: 550px 500px;

  animation: ${ringRotate} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const CoreOrbitInner = styled.g`
  transform-origin: 550px 500px;

  animation: ${ringRotateReverse} 11s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const breathe = keyframes`
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

const CoreGlow = styled.circle`
  transform-origin: center;
  transform-box: fill-box;

  animation: ${breathe} 4s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const nodePulse = keyframes`
  0%,
  100% {
    opacity: 0.25;
    transform: scale(0.7);
  }

  45% {
    opacity: 1;
    transform: scale(1.24);
  }

  72% {
    opacity: 0.55;
    transform: scale(1);
  }
`;

const NodeGlow = styled.circle<NodeAnimationProps>`
  transform-origin: center;
  transform-box: fill-box;

  animation: ${nodePulse} 3.6s
    cubic-bezier(0.4, 0, 0.2, 1) infinite;

  animation-delay: ${({ $delay }) => $delay}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const NodeCore = styled.circle<NodeAnimationProps>`
  transform-origin: center;
  transform-box: fill-box;

  animation: ${nodePulse} 3.6s
    cubic-bezier(0.4, 0, 0.2, 1) infinite;

  animation-delay: ${({ $delay }) => $delay}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const lineFlow = keyframes`
  from {
    stroke-dashoffset: 34;
  }

  to {
    stroke-dashoffset: 0;
  }
`;

const ConnectionLine = styled.line<NodeAnimationProps>`
  stroke-dasharray: 3 8;

  animation: ${lineFlow} 2.2s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const NodeLabel = styled.text`
  fill: rgba(229, 225, 250, 0.72);

  font-family: monospace;
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const NodeValue = styled.text`
  fill: rgba(176, 168, 216, 0.48);

  font-family: monospace;
  font-size: 7px;
  letter-spacing: 0.06em;
`;

const CorePanel = styled(motion.div)`
  position: absolute;
  right: 50%;
  bottom: 8%;
  z-index: 8;

  width: min(310px, calc(100% - 36px));
  padding: ${({ theme }) => theme.space(5)};

  border: 1px solid rgba(124, 92, 255, 0.2);
  border-radius: ${({ theme }) => theme.radius.md};

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(124, 92, 255, 0.11),
      transparent 60%
    ),
    rgba(10, 10, 17, 0.82);

  box-shadow:
    0 28px 80px rgba(0, 0, 0, 0.34),
    0 0 60px rgba(124, 92, 255, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  backdrop-filter: blur(22px);

  transform: translateX(50%);

  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    bottom: 4%;
  }
`;

const CorePanelTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  svg {
    width: 13px;
    height: 13px;
  }
`;

const CorePanelValue = styled.strong`
  display: block;

  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.06em;
`;

const CorePanelLabel = styled.span`
  display: block;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.79rem;
  line-height: 1.5;
`;

const FloatingCard = styled(motion.div)<FloatingCardProps>`
  position: absolute;
  z-index: 9;

  width: 195px;
  padding: ${({ theme }) => theme.space(4)};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.055),
      rgba(255, 255, 255, 0.008)
    ),
    rgba(11, 11, 18, 0.78);

  box-shadow:
    0 25px 70px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  backdrop-filter: blur(22px);

  ${({ $position }) =>
    $position === 'left'
      ? `
        top: 23%;
        left: 5%;
      `
      : `
        top: 31%;
        right: 5%;
      `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 165px;

    ${({ $position }) =>
      $position === 'left'
        ? `
          top: 19%;
          left: 3%;
        `
        : `
          top: 28%;
          right: 3%;
        `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    top: 15%;
    width: calc(50% - 24px);
    padding: ${({ theme }) => theme.space(3)};

    ${({ $position }) =>
      $position === 'left'
        ? `
          left: 12px;
        `
        : `
          right: 12px;
        `}
  }
`;

const FloatingCardHeader = styled.div`
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

const FloatingValue = styled.strong`
  display: block;

  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.25rem, 2vw, 1.7rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.04em;
`;

const FloatingDescription = styled.span`
  display: block;

  margin-top: 7px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.74rem;
  line-height: 1.45;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 0.65rem;
  }
`;

const FloatingStatus = styled.span`
  display: flex;
  align-items: center;

  gap: 7px;
  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 7px;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  &::before {
    content: '';

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: ${({ theme }) => theme.color.success};

    box-shadow: 0 0 10px rgba(0, 255, 156, 0.5);
  }
`;

const Reflection = styled.div`
  position: absolute;
  right: 10%;
  bottom: -42px;
  left: 10%;
  z-index: 1;

  height: 100px;

  border-radius: 50%;

  background: radial-gradient(
    ellipse at center,
    rgba(124, 92, 255, 0.13),
    transparent 70%
  );

  filter: blur(24px);

  pointer-events: none;
`;

const StoryBlock = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
  align-items: center;

  gap: clamp(40px, 8vw, 110px);
  padding: clamp(64px, 8vw, 110px) 0
    clamp(110px, 14vw, 190px);

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: 1fr;
  }
`;

const StoryIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StoryBadge = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 8px;
  min-height: 31px;
  padding: 6px 11px;

  border: 1px solid rgba(0, 255, 156, 0.14);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(0, 255, 156, 0.04);
  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  svg {
    width: 13px;
    height: 13px;
  }
`;

const StoryTitle = styled.h3`
  max-width: 14ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2rem, 4.2vw, 3.7rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.058em;
`;

const StoryContent = styled.div`
  max-width: 680px;
`;

const StoryLead = styled.p`
  color: ${({ theme }) => theme.color.textMuted};

  font-size: clamp(1rem, 1.3vw, 1.08rem);
  line-height: 1.8;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.weight.medium};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 1px;
  margin-top: ${({ theme }) => theme.space(7)};

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.color.border};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  position: relative;
  overflow: hidden;

  min-height: 145px;
  padding: ${({ theme }) => theme.space(5)};

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.027),
      transparent
    ),
    ${({ theme }) => theme.color.surface};

  &::before {
    content: '';
    position: absolute;
    top: -55px;
    right: -45px;

    width: 120px;
    height: 120px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.07);
    filter: blur(40px);

    pointer-events: none;
  }
`;

const StatIcon = styled.div`
  display: grid;
  place-items: center;

  width: 36px;
  height: 36px;

  border: 1px solid rgba(124, 92, 255, 0.15);
  border-radius: 12px;

  background: rgba(124, 92, 255, 0.05);
  color: ${({ theme }) => theme.color.accent};

  svg {
    width: 15px;
    height: 15px;
  }
`;

const StatValue = styled.strong`
  position: relative;
  z-index: 1;

  display: block;

  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.text};

  font-size: 1.35rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.045em;
`;

const StatLabel = styled.span`
  position: relative;
  z-index: 1;

  display: block;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

const ClosingMessage = styled(motion.div)`
  position: relative;
  overflow: hidden;

  margin-top: ${({ theme }) => theme.space(8)};
  padding: clamp(28px, 4vw, 42px);

  border: 1px solid rgba(124, 92, 255, 0.17);
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    radial-gradient(
      circle at 0% 50%,
      rgba(124, 92, 255, 0.11),
      transparent 42%
    ),
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.03),
      rgba(255, 255, 255, 0.007)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 32px 90px rgba(0, 0, 0, 0.25),
    0 0 60px rgba(124, 92, 255, 0.04);

  &::after {
    content: '';
    position: absolute;
    right: -100px;
    bottom: -130px;

    width: 300px;
    height: 300px;

    border-radius: 50%;

    background: rgba(0, 255, 156, 0.04);
    filter: blur(80px);

    pointer-events: none;
  }
`;

const ClosingEyebrow = styled.span`
  display: flex;
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

const ClosingTitle = styled.h4`
  position: relative;
  z-index: 1;

  max-width: 16ch;
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1.05;
  letter-spacing: -0.05em;
`;

const radii = [100, 190, 290, 420];

const radarNodes: RadarNode[] = [
  {
    radius: 100,
    angle: 62,
    size: 3.2,
    delay: 0,
    city: 'São Paulo',
    state: 'SP',
    connections: '4.821',
  },
  {
    radius: 190,
    angle: 32,
    size: 4.5,
    delay: 0.9,
    city: 'Salvador',
    state: 'BA',
    connections: '1.744',
  },
  {
    radius: 190,
    angle: 152,
    size: 3,
    delay: 2.1,
    city: 'Curitiba',
    state: 'PR',
    connections: '1.362',
  },
  {
    radius: 290,
    angle: 105,
    size: 3.6,
    delay: 1.5,
    city: 'Brasília',
    state: 'DF',
    connections: '1.589',
  },
  {
    radius: 290,
    angle: 18,
    size: 3,
    delay: 2.8,
    city: 'Recife',
    state: 'PE',
    connections: '1.284',
  },
  {
    radius: 420,
    angle: 58,
    size: 4,
    delay: 0.5,
    city: 'Fortaleza',
    state: 'CE',
    connections: '1.103',
  },
  {
    radius: 420,
    angle: 137,
    size: 2.8,
    delay: 3.4,
    city: 'Manaus',
    state: 'AM',
    connections: '842',
  },
];

const particles = Array.from({ length: 34 }, (_, index) => ({
  left: (index * 29) % 100,
  top: 18 + ((index * 17) % 76),
  size: 1 + (index % 3),
  duration: 5 + (index % 6),
  delay: (index % 8) * 0.65,
}));

const CX = 550;
const CY = 500;

function polar(radius: number, angleDeg: number) {
  const angle = (angleDeg * Math.PI) / 180;

  return {
    x: CX - radius * Math.cos(angle),
    y: CY - radius * Math.sin(angle),
  };
}

export function Alcance() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const rawId = useId();
  const svgId = rawId.replace(/:/g, '');

  const domeFillId = `${svgId}-dome-fill`;
  const coreOuterId = `${svgId}-core-outer`;
  const coreInnerId = `${svgId}-core-inner`;
  const nodeGlowId = `${svgId}-node-glow`;
  const sweepFadeId = `${svgId}-sweep-fade`;
  const arcFadeId = `${svgId}-arc-fade`;
  const connectionId = `${svgId}-connection`;
  const blurId = `${svgId}-blur`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.45,
  });

  const titleY = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReducedMotion ? [0, 0] : [26, -12],
  );

  const radarY = useTransform(
    smoothProgress,
    [0.12, 0.82],
    prefersReducedMotion ? [0, 0] : [30, -18],
  );

  return (
    <RadarSection
      id="alcance"
      ref={sectionRef}
    >
      <LeftAmbient />
      <RightAmbient />

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
              <Eyebrow>rede devclub</Eyebrow>
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
                      y: 26,
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
                duration: 0.78,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              O talento está em todo lugar.{' '}
              <span>A oportunidade também deveria estar.</span>
            </Title>
          </HeaderMain>

          <HeaderSide
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
              duration: 0.72,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Lead>
              Não importa a cidade, a profissão anterior ou o ponto de partida.
              Quando conhecimento, comunidade e oportunidade se encontram,{' '}
              <strong>
                novas histórias começam a ser escritas.
              </strong>
            </Lead>

            <HeaderBadges>
              <HeaderBadge>
                <Globe2 strokeWidth={1.7} />
                alcance nacional
              </HeaderBadge>

              <HeaderBadge>
                <Users strokeWidth={1.7} />
                comunidade ativa
              </HeaderBadge>

              <HeaderBadge>
                <Building2 strokeWidth={1.7} />
                mercado conectado
              </HeaderBadge>
            </HeaderBadges>
          </HeaderSide>
        </Header>

        <StatusBar
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
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
            duration: 0.68,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <StatusMain>
            <StatusIcon>
              <Signal strokeWidth={1.7} />
            </StatusIcon>

            <StatusContent>
              <StatusLabel>rede devclub online</StatusLabel>

              <StatusDescription>
                Novas conexões, projetos e oportunidades surgindo agora.
              </StatusDescription>
            </StatusContent>
          </StatusMain>

          <StatusRight>monitoramento em tempo real</StatusRight>
        </StatusBar>

        <RadarShell>
          <RadarTopbar>
            <RadarTopbarTitle>
              <Radio strokeWidth={1.7} />
              mapa de conexões
            </RadarTopbarTitle>

            <RadarCoordinates>
              brasil · 14.2350° s · 51.9253° w
            </RadarCoordinates>
          </RadarTopbar>

          <ParticleLayer aria-hidden="true">
            {particles.map((particle, index) => (
              <Particle
                key={`particle-${index}`}
                $left={particle.left}
                $top={particle.top}
                $size={particle.size}
                $duration={particle.duration}
                $delay={particle.delay}
              />
            ))}
          </ParticleLayer>

          <RadarStage>
            <RadarMotionWrap
              style={{
                y: radarY,
              }}
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.92,
                    }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                margin: '-90px',
              }}
              transition={{
                duration: 1.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <RadarSvg
                viewBox="0 0 1100 520"
                preserveAspectRatio="xMidYMax meet"
                role="img"
                aria-label="Rede nacional de alunos e empresas conectadas pelo DevClub"
              >
                <defs>
                  <radialGradient
                    id={domeFillId}
                    cx="50%"
                    cy="100%"
                    r="85%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#8A6BFF"
                      stopOpacity="0.34"
                    />

                    <stop
                      offset="34%"
                      stopColor="#6247CC"
                      stopOpacity="0.16"
                    />

                    <stop
                      offset="70%"
                      stopColor="#332966"
                      stopOpacity="0.05"
                    />

                    <stop
                      offset="100%"
                      stopColor="#0A0A0F"
                      stopOpacity="0"
                    />
                  </radialGradient>

                  <radialGradient
                    id={coreOuterId}
                    cx="50%"
                    cy="50%"
                    r="50%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#D3CBFF"
                      stopOpacity="0.66"
                    />

                    <stop
                      offset="100%"
                      stopColor="#7C5CFF"
                      stopOpacity="0"
                    />
                  </radialGradient>

                  <radialGradient
                    id={coreInnerId}
                    cx="50%"
                    cy="50%"
                    r="50%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#FFFFFF"
                      stopOpacity="1"
                    />

                    <stop
                      offset="43%"
                      stopColor="#D9D2FF"
                      stopOpacity="0.94"
                    />

                    <stop
                      offset="100%"
                      stopColor="#7C5CFF"
                      stopOpacity="0"
                    />
                  </radialGradient>

                  <radialGradient
                    id={nodeGlowId}
                    cx="50%"
                    cy="50%"
                    r="50%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#F1EEFF"
                      stopOpacity="1"
                    />

                    <stop
                      offset="100%"
                      stopColor="#8A6BFF"
                      stopOpacity="0"
                    />
                  </radialGradient>

                  <linearGradient
                    id={sweepFadeId}
                    x1="0%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#C8BFFF"
                      stopOpacity="0.62"
                    />

                    <stop
                      offset="100%"
                      stopColor="#B8AEFF"
                      stopOpacity="0"
                    />
                  </linearGradient>

                  <linearGradient
                    id={arcFadeId}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#3A3560"
                      stopOpacity="0"
                    />

                    <stop
                      offset="50%"
                      stopColor="#685EAA"
                      stopOpacity="0.72"
                    />

                    <stop
                      offset="100%"
                      stopColor="#3A3560"
                      stopOpacity="0"
                    />
                  </linearGradient>

                  <linearGradient
                    id={connectionId}
                    x1="0%"
                    y1="100%"
                    x2="50%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#7C5CFF"
                      stopOpacity="0.85"
                    />

                    <stop
                      offset="100%"
                      stopColor="#D7D0FF"
                      stopOpacity="0.2"
                    />
                  </linearGradient>

                  <filter
                    id={blurId}
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur stdDeviation="0.65" />
                  </filter>
                </defs>

                <path
                  d={`M ${CX - 420} ${CY} A 420 420 0 0 1 ${
                    CX + 420
                  } ${CY} Z`}
                  fill={`url(#${domeFillId})`}
                />

                {radii.map((radius, index) => (
                  <path
                    key={radius}
                    d={`M ${
                      CX - radius
                    } ${CY} A ${radius} ${radius} 0 0 1 ${
                      CX + radius
                    } ${CY}`}
                    fill="none"
                    stroke={`url(#${arcFadeId})`}
                    strokeWidth={index === radii.length - 1 ? 1 : 0.75}
                    opacity={0.5 + index * 0.1}
                    filter={`url(#${blurId})`}
                  />
                ))}

                {[30, 60, 90, 120, 150].map((angle) => {
                  const point = polar(420, angle);

                  return (
                    <line
                      key={angle}
                      x1={CX}
                      y1={CY}
                      x2={point.x}
                      y2={point.y}
                      stroke="#36305B"
                      strokeWidth={0.65}
                      opacity={angle === 90 ? 0.76 : 0.48}
                    />
                  );
                })}

                <line
                  x1={CX - 445}
                  y1={CY}
                  x2={CX + 445}
                  y2={CY}
                  stroke="#3A355D"
                  strokeWidth={0.9}
                  opacity={0.78}
                />

                {radarNodes.map((node) => {
                  const point = polar(node.radius, node.angle);

                  return (
                    <ConnectionLine
                      key={`line-${node.city}`}
                      x1={CX}
                      y1={CY}
                      x2={point.x}
                      y2={point.y}
                      stroke={`url(#${connectionId})`}
                      strokeWidth={0.9}
                      opacity={0.42}
                      $delay={node.delay}
                    />
                  );
                })}

                <SweepGroup>
                  <path
                    d={`M ${CX} ${CY} L ${
                      CX - 28
                    } ${CY - 418} A 420 420 0 0 1 ${
                      CX + 58
                    } ${CY - 414} Z`}
                    fill={`url(#${sweepFadeId})`}
                    opacity={0.63}
                  />

                  <line
                    x1={CX}
                    y1={CY}
                    x2={CX + 15}
                    y2={CY - 417}
                    stroke="#E1DCFF"
                    strokeWidth={0.9}
                    opacity={0.52}
                  />
                </SweepGroup>

                {radarNodes.map((node) => {
                  const point = polar(node.radius, node.angle);

                  return (
                    <g key={`${node.city}-${node.state}`}>
                      <NodeGlow
                        cx={point.x}
                        cy={point.y}
                        r={node.size * 3.8}
                        fill={`url(#${nodeGlowId})`}
                        $delay={node.delay}
                      />

                      <NodeCore
                        cx={point.x}
                        cy={point.y}
                        r={node.size}
                        fill="#FFFFFF"
                        $delay={node.delay}
                      />

                      <NodeLabel
                        x={point.x + 12}
                        y={point.y - 11}
                      >
                        {node.city} · {node.state}
                      </NodeLabel>

                      <NodeValue
                        x={point.x + 12}
                        y={point.y + 1}
                      >
                        {node.connections} conexões
                      </NodeValue>
                    </g>
                  );
                })}

                <CoreGlow
                  cx={CX}
                  cy={CY}
                  r={88}
                  fill={`url(#${coreOuterId})`}
                />

                <CoreOrbitOuter>
                  <circle
                    cx={CX}
                    cy={CY}
                    r={54}
                    fill="none"
                    stroke="#9A86FF"
                    strokeWidth={0.9}
                    strokeDasharray="8 14"
                    opacity={0.5}
                  />

                  <circle
                    cx={CX}
                    cy={CY - 54}
                    r={3}
                    fill="#FFFFFF"
                  />
                </CoreOrbitOuter>

                <CoreOrbitInner>
                  <circle
                    cx={CX}
                    cy={CY}
                    r={40}
                    fill="none"
                    stroke="#C9BFFF"
                    strokeWidth={0.7}
                    strokeDasharray="3 8"
                    opacity={0.55}
                  />

                  <circle
                    cx={CX + 40}
                    cy={CY}
                    r={2.5}
                    fill="#A993FF"
                  />
                </CoreOrbitInner>

                <circle
                  cx={CX}
                  cy={CY}
                  r={31}
                  fill={`url(#${coreInnerId})`}
                />

                <circle
                  cx={CX}
                  cy={CY}
                  r={9}
                  fill="#FFFFFF"
                />

                <circle
                  cx={CX}
                  cy={CY}
                  r={3}
                  fill="#7C5CFF"
                />
              </RadarSvg>
            </RadarMotionWrap>
          </RadarStage>

          <FloatingCard
            $position="left"
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    x: -22,
                    scale: 0.96,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <FloatingCardHeader>
              <MapPin strokeWidth={1.7} />
              presença nacional
            </FloatingCardHeader>

            <FloatingValue>26 estados</FloatingValue>

            <FloatingDescription>
              Alunos conectados em capitais e cidades do interior.
            </FloatingDescription>

            <FloatingStatus>rede ativa</FloatingStatus>
          </FloatingCard>

          <FloatingCard
            $position="right"
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    x: 22,
                    scale: 0.96,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.48,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <FloatingCardHeader>
              <Building2 strokeWidth={1.7} />
              mercado
            </FloatingCardHeader>

            <FloatingValue>+300</FloatingValue>

            <FloatingDescription>
              Empresas conectadas à comunidade DevClub.
            </FloatingDescription>

            <FloatingStatus>novas oportunidades</FloatingStatus>
          </FloatingCard>

          <CorePanel
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                    scale: 0.94,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.58,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <CorePanelTop>
              <Satellite strokeWidth={1.7} />
              devclub network
            </CorePanelTop>

            <CorePanelValue>+25 mil</CorePanelValue>

            <CorePanelLabel>
              histórias, talentos e novas possibilidades conectadas.
            </CorePanelLabel>
          </CorePanel>

          <Reflection />
        </RadarShell>

        <StoryBlock
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 26,
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
            duration: 0.78,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <StoryIntro>
            <StoryBadge>
              <BadgeCheck strokeWidth={1.7} />
              alcance nacional
            </StoryBadge>

            <StoryTitle>
              Uma decisão pode começar em qualquer lugar.
            </StoryTitle>
          </StoryIntro>

          <StoryContent>
            <StoryLead>
              De norte a sul, pessoas estão transformando curiosidade em
              conhecimento, conhecimento em projetos e projetos em novas
              carreiras.{' '}
              <strong>
                A distância deixou de limitar até onde alguém pode chegar.
              </strong>
            </StoryLead>

            <StatsGrid>
              <StatCard>
                <StatIcon>
                  <Users strokeWidth={1.7} />
                </StatIcon>

                <StatValue>+25 mil</StatValue>

                <StatLabel>
                  histórias conectadas
                </StatLabel>
              </StatCard>

              <StatCard>
                <StatIcon>
                  <Building2 strokeWidth={1.7} />
                </StatIcon>

                <StatValue>+300</StatValue>

                <StatLabel>
                  empresas na rede
                </StatLabel>
              </StatCard>

              <StatCard>
                <StatIcon>
                  <Wifi strokeWidth={1.7} />
                </StatIcon>

                <StatValue>24h</StatValue>

                <StatLabel>
                  comunidade online
                </StatLabel>
              </StatCard>
            </StatsGrid>

            <ClosingMessage
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
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
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ClosingEyebrow>
                <Sparkles strokeWidth={1.7} />
                você está aqui
              </ClosingEyebrow>

              <ClosingTitle>
                A próxima conexão pode ser a sua.
              </ClosingTitle>
            </ClosingMessage>
          </StoryContent>
        </StoryBlock>
      </Container>
    </RadarSection>
  );
}