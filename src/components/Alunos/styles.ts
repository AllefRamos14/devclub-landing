import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

import { Section } from '../ui/Layout';

import type {
  HueProps,
  MarqueeTrackProps,
} from './types';

export const SectionBg = styled(Section)`
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

export const AmbientLight = styled.div`
  position: absolute;
  z-index: -2;

  border-radius: 50%;
  filter: blur(150px);

  pointer-events: none;
`;

export const LeftLight = styled(AmbientLight)`
  top: 28%;
  left: -260px;

  width: 520px;
  height: 520px;

  background: rgba(124, 92, 255, 0.07);
`;

export const RightLight = styled(AmbientLight)`
  right: -280px;
  bottom: 5%;

  width: 560px;
  height: 560px;

  background: rgba(0, 255, 156, 0.035);
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.85fr);
  align-items: end;

  gap: clamp(40px, 8vw, 110px);
  margin-bottom: clamp(48px, 7vw, 88px);

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    align-items: start;
    gap: ${({ theme }) => theme.space(7)};
  }
`;

export const HeaderMain = styled.div`
  max-width: 820px;
`;

export const EyebrowWrapper = styled(motion.div)`
  display: inline-flex;
`;

export const Title = styled(motion.h2)`
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

  @media screen and (max-width: 600px) {
    font-size: clamp(2.3rem, 12vw, 3.7rem);
  }
`;

export const HeaderSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Lead = styled.p`
  max-width: 47ch;

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

export const StatsPanel = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 1px;
  margin-bottom: clamp(52px, 7vw, 82px);

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background: ${({ theme }) => theme.color.border};

  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
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

export const StatIcon = styled.div`
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

export const StatValue = styled.strong`
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

export const StatLabel = styled.span`
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

export const MarqueeSection = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space(5)};
`;

export const MarqueeViewport = styled.div`
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

  @media screen and (max-width: 600px) {
    mask-image: linear-gradient(
      90deg,
      transparent,
      black 2%,
      black 98%,
      transparent
    );
  }
`;

export const MarqueeTrack = styled.div<MarqueeTrackProps>`
  display: flex;
  width: max-content;

  gap: ${({ theme }) => theme.space(5)};

  animation: ${marquee} ${({ $duration }) => $duration}s linear infinite;
  animation-direction: ${({ $reverse }) =>
    $reverse ? 'reverse' : 'normal'};

  animation-play-state: ${({ $paused }) =>
    $paused ? 'paused' : 'running'};

  &:hover,
  &:focus-within {
    animation-play-state: paused;
  }

  @media screen and (max-width: 600px) {
    gap: ${({ theme }) => theme.space(4)};
  }

  @media (prefers-reduced-motion: reduce) {
    animation-play-state: paused;
  }
`;


export const TestimonialCard = styled(motion.article)`
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: min(430px, calc(100vw - 42px));
  min-height: 480px;
  padding: clamp(24px, 3vw, 31px);

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.lg};

  outline: none;

  background:
    linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.038),
        rgba(255, 255, 255, 0.008)
      )
      padding-box,
    radial-gradient(
        260px circle at var(--mouse-x) var(--mouse-y),
        rgba(124, 92, 255, 0.88),
        rgba(255, 255, 255, 0.075) 50%,
        transparent 74%
      )
      border-box,
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.025);

  cursor: pointer;

  transition:
    transform ${({ theme }) => theme.transition.base},
    box-shadow ${({ theme }) => theme.transition.base};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;

    background: radial-gradient(
      540px circle at var(--mouse-x) var(--mouse-y),
      rgba(124, 92, 255, 0.14),
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
    transform: translateY(-7px);

    box-shadow:
      0 38px 100px rgba(0, 0, 0, 0.32),
      0 0 60px rgba(124, 92, 255, 0.07);
  }

  &:hover::before,
  &:focus-visible::before {
    opacity: 1;
  }

  &:focus-visible {
    box-shadow:
      0 0 0 3px rgba(124, 92, 255, 0.25),
      0 38px 100px rgba(0, 0, 0, 0.32);
  }

  &:hover [data-avatar='true'] {
    transform: scale(1.07);
  }

  &:hover [data-card-arrow='true'],
  &:focus-visible [data-card-arrow='true'] {
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

export const CardNoise = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  opacity: 0.016;

  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");

  pointer-events: none;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
`;

export const VerificationBadge = styled.span`
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

export const CardArrow = styled.span`
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

export const Rating = styled.div`
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

export const QuoteSymbol = styled.div`
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

export const QuoteText = styled.p`
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1rem, 1.3vw, 1.08rem);
  font-weight: ${({ theme }) => theme.weight.medium};
  line-height: 1.7;
  letter-spacing: -0.015em;
`;

export const CardDivider = styled.div`
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

export const Author = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space(4)};
`;

export const AuthorAvatarWrapper = styled.div`
  position: relative;

  flex: 0 0 auto;
`;

export const AvatarGlow = styled.div<HueProps>`
  position: absolute;
  inset: -8px;

  border-radius: 18px;

  background: ${({ $hue }) =>
    `hsla(${$hue}, 80%, 58%, 0.34)`};

  filter: blur(16px);
  opacity: 0.35;

  pointer-events: none;
`;


export const AuthorAvatar = styled(motion.div)<HueProps>`
  position: relative;
  overflow: hidden;

  display: grid;
  place-items: center;

  width: 62px;
  height: 62px;

  border: 2px solid transparent;
  border-radius: 19px;

  background:
    linear-gradient(
        ${({ theme }) => theme.color.surface},
        ${({ theme }) => theme.color.surface}
      )
      padding-box,
    ${({ $hue }) =>
        `linear-gradient(
          135deg,
          hsla(${$hue}, 85%, 68%, 0.9),
          hsla(${$hue + 38}, 85%, 54%, 0.38)
        )`}
      border-box;

  box-shadow:
    0 18px 38px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);

  color: #ffffff;

  font-family: ${({ theme }) => theme.font.display};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: -0.04em;

  transition: transform ${({ theme }) => theme.transition.base};

  img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center top;

    transition: transform ${({ theme }) => theme.transition.base};
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;

    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.14),
      transparent 45%
    );

    pointer-events: none;
  }
`;

export const AuthorContent = styled.div`
  min-width: 0;
`;

export const AuthorName = styled(motion.strong)`
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

export const AuthorRole = styled.span`
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

export const MetaList = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
  margin-top: auto;
  padding-top: ${({ theme }) => theme.space(5)};
`;

export const MetaPill = styled.span`
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

export const BottomBanner = styled(motion.div)`
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

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;

  max-width: 640px;
`;

export const BannerEyebrow = styled.span`
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

export const BannerTitle = styled.h3`
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.7rem, 3.4vw, 2.8rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1.08;
  letter-spacing: -0.05em;
`;

export const BannerDescription = styled.p`
  max-width: 55ch;
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.95rem;
  line-height: 1.7;
`;

export const BannerIndicator = styled.div`
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
export const CareerPath = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;

  gap: 12px;
  margin-top: ${({ theme }) => theme.space(6)};
  padding: 15px;

  border: 1px solid rgba(255, 255, 255, 0.055);
  border-radius: 16px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.025),
      transparent
    ),
    rgba(255, 255, 255, 0.012);
`;

export const CareerStage = styled.div`
  min-width: 0;
`;

export const CareerLabel = styled.span`
  display: block;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const CareerValue = styled.strong`
  display: block;
  overflow: hidden;

  margin-top: 5px;

  color: ${({ theme }) => theme.color.text};

  font-size: 0.83rem;
  font-weight: ${({ theme }) => theme.weight.semibold};

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CareerArrow = styled.div`
  display: grid;
  place-items: center;

  width: 30px;
  height: 30px;

  border: 1px solid rgba(124, 92, 255, 0.15);
  border-radius: 50%;

  background: rgba(124, 92, 255, 0.055);
  color: ${({ theme }) => theme.color.accent};

  svg {
    width: 13px;
    height: 13px;
  }
`;

export const OpenHint = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 10px;
  margin-top: ${({ theme }) => theme.space(5)};
  padding-top: ${({ theme }) => theme.space(4)};

  border-top: 1px solid rgba(255, 255, 255, 0.045);

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  svg {
    width: 14px;
    height: 14px;

    color: ${({ theme }) => theme.color.accent};
  }
`;
export const ModalBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;

  overflow-y: auto;

  display: grid;
  place-items: center;

  padding: clamp(16px, 4vw, 48px);

  background: rgba(5, 5, 12, 0.82);
  backdrop-filter: blur(18px);
`;

export const ModalContent = styled(motion.article)`
  position: relative;
  overflow: hidden;

  width: min(920px, 100%);
  max-height: calc(100vh - 32px);

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: clamp(22px, 3vw, 32px);

  background:
    radial-gradient(
      circle at 10% 0%,
      rgba(124, 92, 255, 0.14),
      transparent 34%
    ),
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.035),
      rgba(255, 255, 255, 0.008)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 50px 160px rgba(0, 0, 0, 0.55),
    0 0 90px rgba(124, 92, 255, 0.08);

  @media screen and (max-width: 600px) {
    max-height: calc(100dvh - 20px);
    border-radius: 22px;
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 5;

  display: grid;
  place-items: center;

  width: 42px;
  height: 42px;
  padding: 0;

  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 50%;

  background: rgba(10, 10, 20, 0.62);
  color: ${({ theme }) => theme.color.textMuted};

  cursor: pointer;

  backdrop-filter: blur(12px);

  transition:
    transform ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};

  &:hover {
    transform: rotate(8deg);

    border-color: rgba(124, 92, 255, 0.3);
    background: rgba(124, 92, 255, 0.13);
    color: ${({ theme }) => theme.color.text};
  }

  &:focus-visible {
    outline: 3px solid rgba(124, 92, 255, 0.25);
    outline-offset: 3px;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ModalHero = styled.header`
  position: relative;

  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;

  gap: clamp(22px, 4vw, 38px);
  padding: clamp(30px, 5vw, 56px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    align-items: flex-start;
  }
`;

export const ModalAvatarGlow = styled.div<HueProps>`
  position: absolute;
  top: 50px;
  left: 35px;

  width: 180px;
  height: 180px;

  border-radius: 50%;

  background: ${({ $hue }) =>
    `hsla(${$hue}, 85%, 58%, 0.22)`};

  filter: blur(70px);

  pointer-events: none;
`;

export const ModalAvatar = styled(motion.div)<HueProps>`
  position: relative;
  overflow: hidden;

  display: grid;
  place-items: center;

  width: clamp(112px, 16vw, 148px);
  height: clamp(112px, 16vw, 148px);

  border: 2px solid transparent;
  border-radius: clamp(26px, 4vw, 38px);

  background:
    linear-gradient(
        ${({ theme }) => theme.color.surface},
        ${({ theme }) => theme.color.surface}
      )
      padding-box,
    ${({ $hue }) =>
        `linear-gradient(
          135deg,
          hsla(${$hue}, 85%, 70%, 0.9),
          hsla(${$hue + 42}, 85%, 52%, 0.36)
        )`}
      border-box;

  box-shadow:
    0 32px 70px rgba(0, 0, 0, 0.38),
    0 0 55px ${({ $hue }) =>
      `hsla(${$hue}, 85%, 58%, 0.16)`};

  color: #ffffff;

  font-size: 2rem;
  font-weight: ${({ theme }) => theme.weight.bold};

  img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center top;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;

    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.16),
      transparent 42%
    );

    pointer-events: none;
  }
`;

export const ModalHeroContent = styled.div`
  position: relative;
  z-index: 1;

  min-width: 0;
`;

export const ModalName = styled(motion.h3)`
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2.2rem, 6vw, 4.7rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 0.95;
  letter-spacing: -0.065em;
`;

export const ModalRole = styled.p`
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 0.72rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const ModalMeta = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 9px;
  margin-top: ${({ theme }) => theme.space(5)};
`;

export const ModalMetaItem = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 7px;
  min-height: 32px;
  padding: 7px 11px;

  border: 1px solid rgba(255, 255, 255, 0.065);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(255, 255, 255, 0.018);
  color: ${({ theme }) => theme.color.textMuted};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  svg {
    width: 13px;
    height: 13px;

    color: ${({ theme }) => theme.color.accent};
  }
`;

export const ModalBody = styled.div`
  overflow-y: auto;

  max-height: calc(100vh - 300px);
  padding: clamp(28px, 5vw, 56px);

  @media screen and (max-width: 600px) {
    max-height: calc(100dvh - 300px);
  }
`;

export const ModalQuote = styled.blockquote`
  position: relative;

  display: grid;
  grid-template-columns: auto minmax(0, 1fr);

  gap: ${({ theme }) => theme.space(4)};
  padding: clamp(20px, 4vw, 30px);

  border: 1px solid rgba(124, 92, 255, 0.14);
  border-radius: 20px;

  background: rgba(124, 92, 255, 0.045);

  svg {
    width: 22px;
    height: 22px;

    color: ${({ theme }) => theme.color.accent};
  }

  p {
    color: ${({ theme }) => theme.color.text};

    font-size: clamp(1.05rem, 2vw, 1.3rem);
    font-weight: ${({ theme }) => theme.weight.medium};
    line-height: 1.65;
    letter-spacing: -0.025em;
  }
`;

export const ModalDescription = styled.p`
  max-width: 72ch;
  margin-top: ${({ theme }) => theme.space(6)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 1rem;
  line-height: 1.85;
`;

export const ModalSection = styled.section`
  margin-top: clamp(42px, 7vw, 66px);
`;

export const ModalSectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 8px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.11em;
  text-transform: uppercase;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ModalSectionTitle = styled.h4`
  max-width: 20ch;
  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.55rem, 3.5vw, 2.5rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1.08;
  letter-spacing: -0.05em;
`;

export const ModalJourney = styled.div`
  display: grid;

  gap: 0;
  margin-top: ${({ theme }) => theme.space(7)};
`;

export const ModalJourneyItem = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: auto minmax(0, 1fr);

  gap: ${({ theme }) => theme.space(4)};
  padding-bottom: ${({ theme }) => theme.space(7)};

  &:last-child {
    padding-bottom: 0;
  }
`;

export const ModalJourneyIcon = styled.div`
  position: relative;
  z-index: 2;

  display: grid;
  place-items: center;

  width: 40px;
  height: 40px;

  border: 1px solid rgba(124, 92, 255, 0.18);
  border-radius: 14px;

  background: rgba(124, 92, 255, 0.065);
  color: ${({ theme }) => theme.color.accent};

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ModalJourneyConnector = styled.div`
  position: absolute;
  top: 42px;
  left: 19px;

  width: 1px;
  height: calc(100% - 40px);

  background: linear-gradient(
    to bottom,
    rgba(124, 92, 255, 0.35),
    rgba(124, 92, 255, 0.04)
  );
`;

export const ModalJourneyLabel = styled.span`
  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

export const ModalJourneyTitle = styled.h5`
  margin-top: 5px;

  color: ${({ theme }) => theme.color.text};

  font-size: 1.05rem;
  font-weight: ${({ theme }) => theme.weight.semibold};
`;

export const ModalJourneyDescription = styled.p`
  max-width: 58ch;
  margin-top: 7px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.9rem;
  line-height: 1.65;
`;

export const ModalStack = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
  margin-top: ${({ theme }) => theme.space(6)};
`;

export const ModalStackItem = styled.span`
  padding: 9px 13px;

  border: 1px solid rgba(124, 92, 255, 0.14);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(124, 92, 255, 0.045);
  color: ${({ theme }) => theme.color.text};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.055em;
  text-transform: uppercase;
`;

export const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: ${({ theme }) => theme.space(4)};
  margin-top: ${({ theme }) => theme.space(6)};

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const AchievementItem = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 12px;
  min-height: 110px;
  padding: 20px;

  border: 1px solid rgba(255, 255, 255, 0.065);
  border-radius: 18px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.025),
      transparent
    ),
    rgba(255, 255, 255, 0.01);

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.9rem;
  line-height: 1.55;

  svg {
    flex: 0 0 auto;

    width: 17px;
    height: 17px;
    margin-top: 2px;

    color: ${({ theme }) => theme.color.success};
  }
`;
