import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

import type {
  FloatingCardProps,
  NodeAnimationProps,
  ParticleProps,
} from './types';

export const RadarSection = styled.section`
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

export const AmbientLight = styled.div`
  position: absolute;
  z-index: -3;

  border-radius: 50%;
  filter: blur(160px);

  pointer-events: none;
`;

export const LeftAmbient = styled(AmbientLight)`
  top: 16%;
  left: -280px;

  width: 560px;
  height: 560px;

  background: rgba(124, 92, 255, 0.07);
`;

export const RightAmbient = styled(AmbientLight)`
  right: -300px;
  bottom: 5%;

  width: 600px;
  height: 600px;

  background: rgba(0, 255, 156, 0.028);
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(300px, 0.88fr);
  align-items: end;

  gap: clamp(40px, 8vw, 110px);
  margin-bottom: clamp(48px, 7vw, 86px);

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    align-items: start;
    gap: ${({ theme }) => theme.space(7)};
  }
`;

export const HeaderMain = styled.div`
  max-width: 860px;
`;

export const EyebrowWrapper = styled(motion.div)`
  display: inline-flex;
`;

export const Title = styled(motion.h2)`
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

  @media screen and (max-width: 600px) {
    font-size: clamp(2.35rem, 12vw, 3.75rem);
  }
`;

export const HeaderSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Lead = styled.p`
  max-width: 49ch;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: clamp(1rem, 1.25vw, 1.08rem);
  line-height: 1.8;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.weight.medium};
  }
`;

export const HeaderBadges = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.space(3)};
  margin-top: ${({ theme }) => theme.space(6)};
`;

export const HeaderBadge = styled.span`
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

export const StatusBar = styled(motion.div)`
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

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StatusMain = styled.div`
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

export const StatusIcon = styled.div`
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

export const StatusContent = styled.div`
  min-width: 0;
`;

export const StatusLabel = styled.span`
  display: block;

  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const StatusDescription = styled.span`
  display: block;

  margin-top: 5px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.88rem;
  line-height: 1.5;
`;

export const StatusRight = styled.div`
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

export const RadarShell = styled.div`
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

  @media screen and (max-width: 900px) {
    min-height: 650px;
  }

  @media screen and (max-width: 600px) {
    min-height: 610px;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

export const RadarTopbar = styled.div`
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

  @media screen and (max-width: 600px) {
    padding: ${({ theme }) => theme.space(4)};
  }
`;

export const RadarTopbarTitle = styled.span`
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

export const RadarCoordinates = styled.span`
  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ParticleLayer = styled.div`
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

export const Particle = styled.span<ParticleProps>`
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

export const RadarStage = styled.div`
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

export const RadarMotionWrap = styled(motion.div)`
  position: relative;

  width: min(1220px, 116vw);

  animation: ${radarFloat} 9s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const RadarSvg = styled.svg`
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

export const SweepGroup = styled.g`
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

export const CoreOrbitOuter = styled.g`
  transform-origin: 550px 500px;

  animation: ${ringRotate} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const CoreOrbitInner = styled.g`
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

export const CoreGlow = styled.circle`
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

export const NodeGlow = styled.circle<NodeAnimationProps>`
  transform-origin: center;
  transform-box: fill-box;

  animation: ${nodePulse} 3.6s
    cubic-bezier(0.4, 0, 0.2, 1) infinite;

  animation-delay: ${({ $delay }) => $delay}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const NodeCore = styled.circle<NodeAnimationProps>`
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

export const ConnectionLine = styled.line<NodeAnimationProps>`
  stroke-dasharray: 3 8;

  animation: ${lineFlow} 2.2s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const NodeLabel = styled.text`
  fill: rgba(229, 225, 250, 0.72);

  font-family: monospace;
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const NodeValue = styled.text`
  fill: rgba(176, 168, 216, 0.48);

  font-family: monospace;
  font-size: 7px;
  letter-spacing: 0.06em;
`;

export const CorePanel = styled(motion.div)`
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

  @media screen and (max-width: 600px) {
    bottom: 4%;
  }
`;

export const CorePanelTop = styled.div`
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

export const CorePanelValue = styled.strong`
  display: block;

  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.06em;
`;

export const CorePanelLabel = styled.span`
  display: block;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.79rem;
  line-height: 1.5;
`;

export const FloatingCard = styled(motion.div)<FloatingCardProps>`
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

  @media screen and (max-width: 900px) {
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

  @media screen and (max-width: 600px) {
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

export const FloatingCardHeader = styled.div`
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

export const FloatingValue = styled.strong`
  display: block;

  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.25rem, 2vw, 1.7rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.04em;
`;

export const FloatingDescription = styled.span`
  display: block;

  margin-top: 7px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.74rem;
  line-height: 1.45;

  @media screen and (max-width: 600px) {
    font-size: 0.65rem;
  }
`;

export const FloatingStatus = styled.span`
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

export const Reflection = styled.div`
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

export const StoryBlock = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
  align-items: center;

  gap: clamp(40px, 8vw, 110px);
  padding: clamp(64px, 8vw, 110px) 0
    clamp(110px, 14vw, 190px);

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const StoryIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StoryBadge = styled.span`
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

export const StoryTitle = styled.h3`
  max-width: 14ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2rem, 4.2vw, 3.7rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.058em;
`;

export const StoryContent = styled.div`
  max-width: 680px;
`;

export const StoryLead = styled.p`
  color: ${({ theme }) => theme.color.textMuted};

  font-size: clamp(1rem, 1.3vw, 1.08rem);
  line-height: 1.8;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.weight.medium};
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 1px;
  margin-top: ${({ theme }) => theme.space(7)};

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.color.border};

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
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

export const StatIcon = styled.div`
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

export const StatValue = styled.strong`
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

export const StatLabel = styled.span`
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

export const ClosingMessage = styled(motion.div)`
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

export const ClosingEyebrow = styled.span`
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

export const ClosingTitle = styled.h4`
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
