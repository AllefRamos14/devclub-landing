import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { Container, Section } from "../ui/Layout";

import {
  blink,
  borderTravel,
  floatTerminal,
  glowPulse,
  pulseDot,
  shineResult,
} from "./animations";

export const HeroSection = styled(Section)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  padding-top: ${({ theme }) => theme.space(20)};
  background: ${({ theme }) => theme.gradient.hero};

  &::before {
    content: "";
    position: absolute;
    top: -240px;
    right: -270px;
    z-index: -2;

    width: 720px;
    height: 720px;
    border-radius: 50%;

    background: rgba(124, 92, 255, 0.13);
    filter: blur(150px);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -290px;
    left: -220px;
    z-index: -2;

    width: 580px;
    height: 580px;
    border-radius: 50%;

    background: rgba(0, 255, 156, 0.045);
    filter: blur(160px);
    pointer-events: none;
  }
`;

export const HeroContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 1.04fr)
    minmax(430px, 0.96fr);

  align-items: center;
  gap: ${({ theme }) => theme.space(16)};

  @media screen and (max-width: 1200px) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.space(14)};
  }

  @media screen and (max-width: 600px) {
    gap: ${({ theme }) => theme.space(11)};
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  min-width: 0;
`;

export const Headline = styled(motion.h1)`
  max-width: 12ch;
  margin-top: ${({ theme }) => theme.space(5)};

  font-size: clamp(2.65rem, 5.5vw, 4.8rem);
  line-height: 1.03;
  letter-spacing: -0.05em;

  span {
    background: ${({ theme }) => theme.gradient.text};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 1200px) {
    max-width: 14ch;
  }

  @media screen and (max-width: 600px) {
    font-size: clamp(2.3rem, 11vw, 3.6rem);
  }
`;

export const Subhead = styled(motion.p)`
  max-width: 48ch;
  margin-top: ${({ theme }) => theme.space(6)};

  color: ${({ theme }) => theme.color.textMuted};
  font-size: 1.15rem;
  line-height: 1.72;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.weight.medium};
  }
`;

export const CTARow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: ${({ theme }) => theme.space(5)};
  margin-top: ${({ theme }) => theme.space(9)};
`;

export const PrimaryCTA = styled(motion.a)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space(2)};

  min-height: 50px;
  padding: ${({ theme }) => `${theme.space(4)} ${theme.space(7)}`};

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ theme }) => theme.color.accent};
  color: #fff;

  font-weight: ${({ theme }) => theme.weight.semibold};

  box-shadow:
    0 12px 35px rgba(124, 92, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);

  transition:
    transform ${({ theme }) => theme.transition.base},
    box-shadow ${({ theme }) => theme.transition.base},
    filter ${({ theme }) => theme.transition.fast};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;

    background: linear-gradient(
      110deg,
      transparent 25%,
      rgba(255, 255, 255, 0.18) 45%,
      transparent 65%
    );

    transform: translateX(-120%);
    transition: transform 700ms ease;
  }

  span {
    transition: transform ${({ theme }) => theme.transition.fast};
  }

  &:hover {
    transform: translateY(-3px);
    filter: brightness(1.08);

    box-shadow:
      0 18px 45px rgba(124, 92, 255, 0.28),
      ${({ theme }) => theme.shadow.glow};

    &::before {
      transform: translateX(120%);
    }

    span {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.text};
    outline-offset: 4px;
  }
`;

export const SecondaryCTA = styled(motion.a)`
  position: relative;
  padding: 8px 0;

  color: ${({ theme }) => theme.color.textMuted};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 14px;

  transition: color ${({ theme }) => theme.transition.fast};

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 3px;
    left: 0;

    height: 1px;

    background: ${({ theme }) => theme.color.border};
    transform-origin: left;

    transition:
      transform ${({ theme }) => theme.transition.base},
      background ${({ theme }) => theme.transition.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.color.text};

    &::after {
      background: ${({ theme }) => theme.color.accent};
      transform: scaleX(0.58);
    }
  }

  &:focus-visible {
    border-radius: 4px;
    outline: 2px solid ${({ theme }) => theme.color.accent};
    outline-offset: 4px;
  }
`;

/* ==========================================================================
   ESTATÍSTICAS
   ========================================================================== */

export const Stats = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.space(10)};
  margin-top: ${({ theme }) => theme.space(14)};
  padding-top: ${({ theme }) => theme.space(8)};

  border-top: 1px solid ${({ theme }) => theme.color.border};

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: ${({ theme }) => theme.space(6)};
    margin-top: ${({ theme }) => theme.space(11)};
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.font.display};
    font-size: 1.65rem;
    line-height: 1.1;
  }

  span {
    max-width: 18ch;

    color: ${({ theme }) => theme.color.textFaint};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    line-height: 1.5;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
`;

/* ==========================================================================
   COLUNA VISUAL
   ========================================================================== */

export const VisualColumn = styled.div`
  position: relative;
  isolation: isolate;

  min-width: 0;
  padding: 52px 28px;

  border-radius: 34px;

  background:
    linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px);

  background-size: 34px 34px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;

    border-radius: inherit;

    background:
      radial-gradient(
        circle at 78% 12%,
        rgba(124, 92, 255, 0.12),
        transparent 36%
      ),
      radial-gradient(
        circle at 10% 88%,
        rgba(0, 255, 156, 0.04),
        transparent 32%
      );
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;

    border: 1px solid rgba(255, 255, 255, 0.045);
    border-radius: inherit;

    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent);

    pointer-events: none;
  }

  @media screen and (max-width: 1200px) {
    max-width: 760px;
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    padding: 38px 0 0;
    background-size: 26px 26px;
  }
`;

export const InteractiveGlow = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  width: 340px;
  height: 340px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(124, 92, 255, 0.16),
    rgba(124, 92, 255, 0.065) 38%,
    transparent 72%
  );

  filter: blur(20px);
  opacity: 0.9;
  pointer-events: none;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const TerminalWrapper = styled.div`
  position: relative;
  z-index: 3;
  min-width: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 14% 7% -9%;
    z-index: -1;

    border-radius: 40px;

    background: rgba(124, 92, 255, 0.2);
    filter: blur(70px);

    pointer-events: none;
  }

  @media (min-width: 1100px) {
    animation: ${floatTerminal} 6.5s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ExperienceBadge = styled(motion.div)`
  position: absolute;
  top: 25px;
  right: 50px;
  z-index: 8;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 13px;

  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(13, 10, 22, 0.78);
  backdrop-filter: blur(20px);

  color: ${({ theme }) => theme.color.textMuted};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.045em;

  box-shadow:
    0 16px 45px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.055);

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;

    background: ${({ theme }) => theme.color.success};
    box-shadow: 0 0 12px rgba(0, 255, 156, 0.85);

    animation: ${pulseDot} 2s ease-in-out infinite;
  }

  @media screen and (max-width: 600px) {
    top: 16px;
    right: 13px;
  }

  @media (prefers-reduced-motion: reduce) {
    span {
      animation: none;
    }
  }
`;


export const FloatingCard = styled(motion.div)`
  position: absolute;
  z-index: 9;

  display: flex;
  align-items: center;

  gap: 11px;
  padding: 12px 15px;

  border: 1px solid rgba(255, 255, 255, 0.085);
  border-radius: 16px;

  background:
    linear-gradient(
      145deg,
      rgba(22, 16, 34, 0.94),
      rgba(10, 8, 17, 0.82)
    );

  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);

  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.37),
    0 0 36px rgba(124, 92, 255, 0.055),
    inset 0 1px 0 rgba(255, 255, 255, 0.065);

  font-family: ${({ theme }) => theme.font.mono};

  cursor: default;
  will-change: transform;

  transition:
    border-color ${({ theme }) =>
      theme.transition.base},
    box-shadow ${({ theme }) =>
      theme.transition.base},
    background ${({ theme }) =>
      theme.transition.base};

  &::before {
    content: '';
    position: absolute;
    inset: 0;

    border-radius: inherit;

    background: linear-gradient(
      120deg,
      transparent 20%,
      rgba(255, 255, 255, 0.045),
      transparent 70%
    );

    opacity: 0;
    transition: opacity ${({ theme }) =>
      theme.transition.base};

    pointer-events: none;
  }

  &:hover {
    border-color: rgba(124, 92, 255, 0.24);

    background:
      linear-gradient(
        145deg,
        rgba(28, 20, 42, 0.96),
        rgba(12, 9, 20, 0.88)
      );

    box-shadow:
      0 30px 75px rgba(0, 0, 0, 0.44),
      0 0 48px rgba(124, 92, 255, 0.11),
      inset 0 1px 0 rgba(255, 255, 255, 0.085);

    &::before {
      opacity: 1;
    }
  }

  strong {
    display: block;

    color: ${({ theme }) => theme.color.text};

    font-size: 12px;
    font-weight: ${({ theme }) =>
      theme.weight.semibold};
    line-height: 1.3;
  }

  span {
    display: block;

    margin-top: 3px;

    color: ${({ theme }) => theme.color.textFaint};

    font-size: 9px;
    line-height: 1.4;
  }

  @media (max-width: 1180px) {
    display: none;
  }
`;

export const CareerCard = styled(FloatingCard)`
  top: 145px;
  left: -16px;
`;

export const StudentsCard = styled(FloatingCard)`
  right: -12px;
  bottom: 125px;

 
`;

export const CardIcon = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;

  width: 36px;
  height: 36px;

  border: 1px solid rgba(124, 92, 255, 0.2);
  border-radius: 11px;

  background: linear-gradient(
    145deg,
    rgba(124, 92, 255, 0.23),
    rgba(124, 92, 255, 0.045)
  );

  color: #b8aeff;
  font-size: 16px;

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 8px 20px rgba(124, 92, 255, 0.08);
`;

/* ==========================================================================
   TERMINAL
   ========================================================================== */

export const TerminalWindow = styled(motion.div)<{
  $active: boolean;
}>`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 23px;

  background: linear-gradient(
    145deg,
    rgba(23, 18, 34, 0.96),
    rgba(9, 7, 15, 0.99)
  );

  backdrop-filter: blur(26px);

  box-shadow:
    0 34px 100px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(124, 92, 255, 0.035),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);

  ${({ $active }) =>
    $active &&
    css`
      animation: ${glowPulse} 3s ease-in-out infinite;
    `}

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;

    background:
      radial-gradient(
        circle at 84% 4%,
        rgba(124, 92, 255, 0.18),
        transparent 34%
      ),
      radial-gradient(
        circle at 5% 96%,
        rgba(0, 255, 156, 0.04),
        transparent 36%
      );

    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const BorderLight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 12;

  width: 40%;
  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(184, 174, 255, 0.95),
    transparent
  );

  animation: ${borderTravel} 6s ease-in-out infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const TerminalTitleBar = styled.div`
  display: grid;
  grid-template-columns: 70px minmax(0, 1fr) 72px;
  align-items: center;

  min-height: 50px;
  padding: 0 ${({ theme }) => theme.space(4)};

  border-bottom: 1px solid rgba(255, 255, 255, 0.055);

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.008)
  );

  @media screen and (max-width: 600px) {
    grid-template-columns: 58px minmax(0, 1fr) 62px;
    padding: 0 ${({ theme }) => theme.space(3)};
  }
`;

export const Dots = styled.div`
  display: flex;
  gap: 7px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;

    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.2),
      0 2px 6px rgba(0, 0, 0, 0.25);
  }

  span:first-child {
    background: #ff5f57;
  }

  span:nth-child(2) {
    background: #febc2e;
  }

  span:nth-child(3) {
    background: #28c840;
  }
`;

export const TerminalLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-width: 0;

  color: ${({ theme }) => theme.color.textMuted};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;

  > span:last-child {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: 500;
  }

  small {
    color: ${({ theme }) => theme.color.textFaint};
    font-size: inherit;
  }
`;

export const LiveDot = styled.span<{ $active: boolean }>`
  flex-shrink: 0;

  width: 6px;
  height: 6px;
  border-radius: 50%;

  background: ${({ theme, $active }) =>
    $active ? theme.color.success : theme.color.textFaint};

  box-shadow: ${({ $active }) =>
    $active ? "0 0 8px rgba(0, 255, 156, 0.85)" : "none"};

  transition:
    background ${({ theme }) => theme.transition.base},
    box-shadow ${({ theme }) => theme.transition.base};

  ${({ $active }) =>
    $active &&
    css`
      animation: ${pulseDot} 1.8s ease-in-out infinite;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const TerminalStatus = styled.span<{ $done: boolean }>`
  justify-self: end;

  padding: 4px 7px;

  border: 1px solid
    ${({ $done }) =>
      $done ? "rgba(0, 255, 156, 0.17)" : "rgba(124, 92, 255, 0.2)"};

  border-radius: 999px;

  background: ${({ $done }) =>
    $done ? "rgba(0, 255, 156, 0.065)" : "rgba(124, 92, 255, 0.075)"};

  color: ${({ theme, $done }) =>
    $done ? theme.color.success : theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const ProgressTrack = styled.div`
  position: relative;
  height: 2px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.025);
`;

export const ProgressBar = styled.div<{ $progress: number }>`
  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.accent},
    #b36cff,
    ${({ theme }) => theme.color.success}
  );

  box-shadow: 0 0 15px rgba(124, 92, 255, 0.65);

  transition: width 320ms ease;
`;

export const CommandLine = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  padding: ${({ theme }) =>
    `${theme.space(4)} ${theme.space(5)} ${theme.space(2)}`};

  color: ${({ theme }) => theme.color.textFaint};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;

  span:first-child {
    color: #b8aeff;
  }

  strong {
    color: ${({ theme }) => theme.color.success};
    font-weight: 400;
  }

  span:last-child {
    color: ${({ theme }) => theme.color.textMuted};
  }

  @media screen and (max-width: 600px) {
    padding-right: ${({ theme }) => theme.space(4)};
    padding-left: ${({ theme }) => theme.space(4)};
    font-size: 11px;
  }
`;

export const TerminalBody = styled.div`
  min-height: 360px;
  padding: ${({ theme }) => `${theme.space(2)} 0 ${theme.space(4)}`};

  overflow-x: auto;

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13.5px;
  line-height: 1.85;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => `${theme.color.border} transparent`};

  @media screen and (max-width: 600px) {
    min-height: 338px;
    font-size: 11.5px;
  }
`;

export const CodeRow = styled(motion.div)`
  display: flex;

  min-height: 25px;
  padding-right: ${({ theme }) => theme.space(4)};

  transition: background ${({ theme }) => theme.transition.fast};

  &:hover {
    background: rgba(255, 255, 255, 0.018);
  }
`;

export const LineNo = styled.span`
  flex-shrink: 0;

  width: 42px;
  margin-right: ${({ theme }) => theme.space(4)};
  padding-left: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.textFaint};
  text-align: right;
  user-select: none;
  opacity: 0.4;

  @media screen and (max-width: 600px) {
    width: 34px;
    margin-right: ${({ theme }) => theme.space(3)};
    padding-left: ${({ theme }) => theme.space(2)};
  }
`;

export const CodeText = styled.span`
  min-width: 0;

  color: ${({ theme }) => theme.color.textMuted};
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`;

export const Comment = styled.span`
  color: ${({ theme }) => theme.color.textFaint};
  font-style: italic;
`;

export const Keyword = styled.span`
  color: #c792ea;
`;

export const PropertyToken = styled.span`
  color: #82aaff;
`;

export const FunctionToken = styled.span`
  color: #7fdbca;
`;

export const StringToken = styled.span`
  color: ${({ theme }) => theme.color.success};
`;

export const NumberToken = styled.span`
  color: #f78c6c;
`;

export const BooleanToken = styled.span`
  color: #ffcb6b;
`;

export const OperatorToken = styled.span`
  color: #89ddff;
`;

export const PunctuationToken = styled.span`
  color: ${({ theme }) => theme.color.textFaint};
`;

export const Cursor = styled.span`
  display: inline-block;

  width: 7px;
  height: 16px;
  margin-left: 3px;

  vertical-align: -2px;

  background: ${({ theme }) => theme.color.success};
  box-shadow: 0 0 9px rgba(0, 255, 156, 0.7);

  animation: ${blink} 0.9s step-end infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* ==========================================================================
   TIMELINE
   ========================================================================== */

export const JourneySteps = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  margin: 0 ${({ theme }) => theme.space(4)};
  padding: ${({ theme }) => `${theme.space(4)} 0 ${theme.space(5)}`};

  border-top: 1px solid rgba(255, 255, 255, 0.045);

  > div {
    position: relative;
    text-align: center;
  }

  > div:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 6px;
    left: calc(50% + 12px);

    width: calc(100% - 24px);
    height: 1px;

    background: linear-gradient(
      90deg,
      rgba(124, 92, 255, 0.5),
      rgba(124, 92, 255, 0.08)
    );
  }

  i {
    position: relative;
    z-index: 2;

    display: block;

    width: 12px;
    height: 12px;
    margin: 0 auto 9px;

    border: 3px solid rgba(124, 92, 255, 0.22);
    border-radius: 50%;

    background: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 15px rgba(124, 92, 255, 0.42);
  }

  strong {
    display: block;

    color: ${({ theme }) => theme.color.textMuted};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  span {
    display: block;
    margin-top: 4px;

    color: ${({ theme }) => theme.color.textFaint};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 8px;
    line-height: 1.4;
  }
`;

/* ==========================================================================
   RESULTADO FINAL
   ========================================================================== */

export const OutputPanel = styled(motion.div)`
  margin: ${({ theme }) => `0 ${theme.space(4)} ${theme.space(4)}`};

  padding: ${({ theme }) => `${theme.space(4)} ${theme.space(1)} 0`};

  border-top: 1px dashed ${({ theme }) => theme.color.border};
`;

export const OutputCommand = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  color: ${({ theme }) => theme.color.textFaint};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;

  span:first-child {
    color: #b8aeff;
  }

  strong {
    color: ${({ theme }) => theme.color.success};
    font-weight: 400;
  }

  span:last-child {
    color: ${({ theme }) => theme.color.textMuted};
  }
`;

export const BuildResult = styled(motion.div)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space(4)};

  margin-top: ${({ theme }) => theme.space(4)};
  padding: ${({ theme }) => theme.space(4)};

  border: 1px solid rgba(0, 255, 156, 0.14);
  border-radius: 16px;

  background: linear-gradient(
    135deg,
    rgba(0, 255, 156, 0.08),
    rgba(124, 92, 255, 0.05)
  );

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 16px 38px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: -60%;
    left: -35%;
    z-index: -1;

    width: 28%;
    height: 220%;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.09),
      transparent
    );

    animation: ${shineResult} 4.5s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      display: none;
    }
  }
`;

export const BuildIcon = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;

  width: 44px;
  height: 44px;

  border: 1px solid rgba(0, 255, 156, 0.22);
  border-radius: 13px;

  background: rgba(0, 255, 156, 0.08);
  color: ${({ theme }) => theme.color.success};

  font-size: 18px;

  box-shadow:
    0 0 24px rgba(0, 255, 156, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
`;

export const BuildContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    color: ${({ theme }) => theme.color.success};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 8px;
    letter-spacing: 0.14em;
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: 13px;
    line-height: 1.45;
  }

  small {
    color: ${({ theme }) => theme.color.textFaint};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 9px;
    line-height: 1.4;
  }
`;

/* ==========================================================================
   SCRIPT DA BIOGRAFIA
   ========================================================================== */
