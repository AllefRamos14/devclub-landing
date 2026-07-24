import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

import { Section } from '../ui/Layout';

import type {
  BrandColorProps,
  CodeItemProps,
  CompanyCardProps,
  CompanyLogoWrapperProps,
  FloatingMetricProps,
  MarqueeTrackProps,
  PaginationDotProps,
  ParticleProps,
} from './types';

export const systemPulse = keyframes`
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

export const particleFloat = keyframes`
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

export const orbitSpin = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const orbitSpinReverse = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;

export const centerShine = keyframes`
  0%,
  22% {
    left: -55%;
  }

  72%,
  100% {
    left: 135%;
  }
`;

export const codeScroll = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
`;

export const scrollLeft = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-50% - 8px));
  }
`;

export const scrollRight = keyframes`
  from {
    transform: translateX(calc(-50% - 8px));
  }

  to {
    transform: translateX(0);
  }
`;

export const SectionBg = styled(Section)`
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

export const AmbientLight = styled.div`
  position: absolute;
  z-index: -3;

  border-radius: 50%;
  filter: blur(170px);

  pointer-events: none;
`;

export const LeftLight = styled(AmbientLight)`
  top: 7%;
  left: -300px;

  width: 610px;
  height: 610px;

  background: rgba(124, 92, 255, 0.075);
`;

export const RightLight = styled(AmbientLight)`
  right: -320px;
  bottom: 3%;

  width: 640px;
  height: 640px;

  background: rgba(0, 255, 156, 0.025);
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);
  align-items: end;

  gap: clamp(42px, 8vw, 116px);
  margin-bottom: clamp(58px, 8vw, 100px);

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    align-items: start;

    gap: ${({ theme }) => theme.space(7)};
  }
`;

export const HeaderMain = styled.div`
  max-width: 880px;
`;

export const EyebrowWrap = styled(motion.div)`
  display: inline-flex;
`;

export const Title = styled(motion.h2)`
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

  @media screen and (max-width: 600px) {
    font-size: clamp(2.35rem, 12vw, 3.8rem);
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

  font-size: clamp(1rem, 1.3vw, 1.08rem);
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

export const SystemBar = styled(motion.div)`
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

  @media screen and (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const SystemMain = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space(4)};
`;

export const SystemIcon = styled.div`
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

export const SystemContent = styled.div`
  min-width: 0;
`;

export const SystemLabel = styled.span`
  display: block;

  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const SystemDescription = styled.span`
  display: block;
  margin-top: 5px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.88rem;
  line-height: 1.5;
`;

export const SystemStatus = styled.span`
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

export const TalentTerminal = styled(motion.div)`
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

  @media screen and (max-width: 900px) {
    min-height: 720px;
  }

  @media screen and (max-width: 600px) {
    min-height: 700px;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

export const Spotlight = styled(motion.div)<Pick<BrandColorProps, '$brandColorRgb'>>`
  position: absolute;
  top: -260px;
  left: -260px;
  z-index: 1;

  width: 520px;
  height: 520px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.22) 0%,
    rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.1) 34%,
    transparent 70%
  );

  filter: blur(10px);
  opacity: 0.85;

  pointer-events: none;
`;

export const TerminalTopbar = styled.div`
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

  @media screen and (max-width: 600px) {
    padding: ${({ theme }) => theme.space(4)};
  }
`;

export const TerminalTitle = styled.span`
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

export const TerminalStatus = styled.span`
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

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ParticleLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  pointer-events: none;
`;

export const Particle = styled.span<ParticleProps>`
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

export const OrbitOuter = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  z-index: 2;

  width: 630px;
  height: 630px;

  border: 1px solid rgba(124, 92, 255, 0.11);
  border-radius: 50%;

  animation: ${orbitSpin} 42s linear infinite;

  @media screen and (max-width: 900px) {
    width: 520px;
    height: 520px;
  }

  @media screen and (max-width: 600px) {
    width: 390px;
    height: 390px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: translate(-50%, -50%);
  }
`;

export const OrbitInner = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  z-index: 3;

  width: 480px;
  height: 480px;

  border: 1px solid rgba(124, 92, 255, 0.09);
  border-radius: 50%;

  animation: ${orbitSpinReverse} 28s linear infinite;

  @media screen and (max-width: 900px) {
    width: 390px;
    height: 390px;
  }

  @media screen and (max-width: 600px) {
    width: 290px;
    height: 290px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: translate(-50%, -50%);
  }
`;

export const OrbitNode = styled.div`
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

  @media screen and (max-width: 600px) {
    width: 35px;
    height: 35px;

    border-radius: 11px;
  }
`;

export const TerminalCenter = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  z-index: 9;

  width: min(470px, calc(100% - 40px));

  transform: translate(-50%, -50%);

  @media screen and (max-width: 600px) {
    top: 49%;
    width: calc(100% - 28px);
  }
`;

export const CenterCard = styled(motion.article)<BrandColorProps>`
  position: relative;
  overflow: hidden;

  min-height: 390px;
  padding: clamp(25px, 4vw, 42px);

  border: 1px solid rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.34);
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.18),
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
    0 0 90px rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.12),
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

export const CenterHeader = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
`;

export const CenterStatus = styled.span<BrandColorProps>`
  display: inline-flex;
  align-items: center;

  gap: 8px;
  min-height: 30px;
  padding: 6px 10px;

  border: 1px solid rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.24);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.07);
  color: ${({ $brandColor }) => $brandColor};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const CenterIndex = styled.span`
  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
`;

/* export const CompanyLogoWrapper = styled.div<CompanyLogoWrapperProps>`
  position: relative;
  z-index: 2;
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: ${({ $size }) => ($size === 'large' ? '72px' : '48px')};
  height: ${({ $size }) => ($size === 'large' ? '72px' : '48px')};
  margin-top: ${({ $size, theme }) => $size === 'large' ? theme.space(7) : '0'};
  border: 1px solid rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.3);
  border-radius: ${({ $size }) => ($size === 'large' ? '22px' : '15px')};
  background:
    radial-gradient(circle at 35% 25%, rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.28), transparent 58%),
    rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.09);
  box-shadow:
    0 16px 44px rgba(0, 0, 0, 0.28),
    0 0 32px rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  color: ${({ $brandColor }) => $brandColor};
  overflow: hidden;

  &::after {
    content: attr(data-fallback);
    color: ${({ $brandColor }) => $brandColor};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: ${({ $size }) => ($size === 'large' ? '1rem' : '0.72rem')};
    font-weight: ${({ theme }) => theme.weight.bold};
    letter-spacing: -0.04em;
  }

  &:has(img:not([style*='display: none']))::after {
    display: none;
  }
`; */

/* export const CompanyLogoImage = styled.img`
  display: block;
  width: 68%;
  height: 68%;
  object-fit: contain;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.22));
  transition: transform 260ms ease, filter 260ms ease;
`; */

export const CenterCategory = styled.span<Pick<BrandColorProps, '$brandColor'>>`
  position: relative;
  z-index: 2;

  display: block;
  margin-top: ${({ theme }) => theme.space(6)};

  color: ${({ $brandColor }) => $brandColor};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const CenterName = styled.h3`
  position: relative;
  z-index: 2;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2.2rem, 5vw, 4.2rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 0.95;
  letter-spacing: -0.065em;
`;

export const CenterDescription = styled.p`
  position: relative;
  z-index: 2;

  max-width: 43ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.94rem;
  line-height: 1.7;
`;

export const CodeLine = styled.div`
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

export const CenterFooter = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
  margin-top: ${({ theme }) => theme.space(5)};
`;

export const CenterFooterLabel = styled.span`
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

export const Pagination = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;
`;

export const PaginationDot = styled.span<PaginationDotProps>`
  width: ${({ $active }) => ($active ? '22px' : '6px')};
  height: 6px;

  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ $active, $brandColor }) =>
    $active ? $brandColor : 'rgba(255, 255, 255, 0.13)'};

  box-shadow: ${({ $active, $brandColor }) =>
    $active ? `0 0 16px ${$brandColor}66` : 'none'};

  transition: width 240ms ease, background 240ms ease, box-shadow 240ms ease;
`;

export const FloatingMetric = styled(motion.div)<FloatingMetricProps>`
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

  @media screen and (max-width: 900px) {
    width: 160px;
  }

  @media screen and (max-width: 600px) {
    top: auto;
    bottom: 18px;

    width: calc(50% - 22px);

    ${({ $side }) =>
      $side === 'left'
        ? 'left: 14px;'
        : 'right: 14px;'}
  }
`;

export const FloatingMetricTop = styled.span`
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

export const FloatingMetricValue = styled.strong`
  display: block;
  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.3rem, 2vw, 1.8rem);
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const FloatingMetricLabel = styled.span`
  display: block;
  margin-top: 7px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.74rem;
  line-height: 1.45;
`;

export const CodeMarquee = styled.div`
  overflow: hidden;
  margin-top: ${({ theme }) => theme.space(6)};

  border-top: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  background: rgba(6, 6, 10, 0.48);
`;

export const CodeTrack = styled.div`
  display: flex;
  align-items: center;

  width: max-content;

  animation: ${codeScroll} 32s linear infinite;
`;

export const CodeItem = styled.span<CodeItemProps>`
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

export const MarqueeArea = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space(4)};
  margin-top: clamp(60px, 8vw, 100px);
`;

export const MarqueeViewport = styled.div`
  overflow: hidden;
`;

export const MarqueeTrack = styled.div<MarqueeTrackProps>`
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

/* export const CompanyCard = styled.article<CompanyCardProps>`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space(6)};
  width: clamp(270px, 28vw, 370px);
  min-height: 128px;
  padding: ${({ theme }) => theme.space(5)};
  border: 1px solid rgba(${({ $brandColorRgb }) => $brandColorRgb}, ${({ $featured }) => ($featured ? 0.34 : 0.2)});
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    radial-gradient(circle at 10% 15%, rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.12), transparent 42%),
    linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.006)),
    ${({ theme }) => theme.color.surface};
  box-shadow: 0 18px 54px rgba(0,0,0,0.22), 0 0 0 rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0);
  transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(120deg, transparent 18%, rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.11), transparent 72%);
    opacity: 0;
    transform: translateX(-28%);
    transition: opacity 260ms ease, transform 420ms ease;
  }

  > svg {
    flex: 0 0 auto;
    color: rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.82);
    transition: transform 260ms ease, color 260ms ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.5);
    box-shadow: 0 25px 70px rgba(0,0,0,0.3), 0 0 42px rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.14);

    &::before { opacity: 1; transform: translateX(14%); }
    ${CompanyLogoImage} { transform: scale(1.08); }
    > svg { color: ${({ $brandColor }) => $brandColor}; transform: translate(2px,-2px); }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover { transform: none; }
  }
`; */

export const CompanyLogoWrapper = styled.div<CompanyLogoWrapperProps>`
  position: relative;
  z-index: 2;
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: ${({ $size }) => ($size === 'large' ? '72px' : '48px')};
  height: ${({ $size }) => ($size === 'large' ? '72px' : '48px')};
  margin-top: ${({ $size, theme }) => $size === 'large' ? theme.space(7) : '0'};
  border: 1px solid rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.3);
  border-radius: ${({ $size }) => ($size === 'large' ? '22px' : '15px')};
  background:
    radial-gradient(circle at 35% 25%, rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.28), transparent 58%),
    rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.09);
  box-shadow:
    0 16px 44px rgba(0, 0, 0, 0.28),
    0 0 32px rgba(${({ $brandColorRgb }) => $brandColorRgb}, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  color: ${({ $brandColor }) => $brandColor};
  overflow: hidden;

  &::after {
    content: attr(data-fallback);
    color: ${({ $brandColor }) => $brandColor};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: ${({ $size }) => ($size === 'large' ? '1rem' : '0.72rem')};
    font-weight: ${({ theme }) => theme.weight.bold};
    letter-spacing: -0.04em;
  }

  &:has(img:not([style*='display: none']))::after {
    display: none;
  }
`;


export const CompanyLogoImage = styled.img`
  display: block;
  width: 68%;
  height: 68%;
  object-fit: contain;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.22));
  transition: transform 260ms ease, filter 260ms ease;
`;

export const CompanyCard = styled.article<CompanyCardProps>`
  --brand-color: ${({ $brandColor }) => $brandColor};
  --brand-rgb: ${({ $brandColorRgb }) => $brandColorRgb};
  --border-opacity: ${({ $featured }) =>
    $featured ? '0.34' : '0.2'};

  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(6)};

  width: clamp(270px, 28vw, 370px);
  min-height: 128px;
  padding: ${({ theme }) => theme.space(5)};

  border: 1px solid
    rgba(var(--brand-rgb), var(--border-opacity));

  border-radius: ${({ theme }) => theme.radius.md};

  background:
    radial-gradient(
      circle at 10% 15%,
      rgba(var(--brand-rgb), 0.12),
      transparent 42%
    ),
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.006)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 18px 54px rgba(0, 0, 0, 0.22),
    0 0 0 rgba(var(--brand-rgb), 0);

  transition:
    transform 260ms ease,
    border-color 260ms ease,
    box-shadow 260ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;

    background: linear-gradient(
      120deg,
      transparent 18%,
      rgba(var(--brand-rgb), 0.11),
      transparent 72%
    );

    opacity: 0;
    transform: translateX(-28%);

    transition:
      opacity 260ms ease,
      transform 420ms ease;
  }

  > svg {
    flex: 0 0 auto;

    color: rgba(var(--brand-rgb), 0.82);

    transition:
      color 260ms ease,
      transform 260ms ease;
  }

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(var(--brand-rgb), 0.5);

    box-shadow:
      0 25px 70px rgba(0, 0, 0, 0.3),
      0 0 42px rgba(var(--brand-rgb), 0.14);

    &::before {
      opacity: 1;
      transform: translateX(14%);
    }

    ${CompanyLogoImage} {
      transform: scale(1.08);

      filter:
        drop-shadow(0 8px 16px rgba(0, 0, 0, 0.22))
        drop-shadow(
          0 0 12px rgba(var(--brand-rgb), 0.32)
        );
    }

    > svg {
      color: var(--brand-color);
      transform: translate(2px, -2px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before,
    ${CompanyLogoImage},
    > svg {
      transition: none;
    }

    &:hover {
      transform: none;
    }
  }
`;

export const CompanyMain = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space(4)};
  min-width: 0;
`;

export const CompanyInfo = styled.div`
  min-width: 0;
`;

export const CompanyName = styled.strong`
  display: block;

  color: ${({ theme }) => theme.color.text};

  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weight.medium};
`;

export const CompanyCategory = styled.span`
  display: block;
  margin-top: 7px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.075em;
  text-transform: uppercase;
`;

export const CompanyStatus = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 10px;
  color: ${({ theme }) => theme.color.textFaint};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 7px;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.success};
    box-shadow: 0 0 12px rgba(0, 255, 156, 0.5);
  }
`;

export const MetricsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 1px;
  margin-top: clamp(60px, 8vw, 100px);

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background: ${({ theme }) => theme.color.border};

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Metric = styled.div`
  min-height: 190px;
  padding: clamp(26px, 4vw, 40px);

  background: ${({ theme }) => theme.color.surface};
`;

export const MetricIcon = styled.div`
  display: grid;
  place-items: center;

  width: 39px;
  height: 39px;

  border: 1px solid rgba(124, 92, 255, 0.15);
  border-radius: 12px;

  color: ${({ theme }) => theme.color.accent};
`;

export const MetricValue = styled.strong`
  display: block;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.9rem, 3vw, 2.8rem);
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const MetricLabel = styled.span`
  display: block;
  margin-top: 10px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.86rem;
`;

export const Closing = styled(motion.div)`
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

export const ClosingLabel = styled.span`
  display: flex;
  align-items: center;

  gap: 9px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const ClosingTitle = styled.h3`
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
