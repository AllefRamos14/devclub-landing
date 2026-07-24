import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Section } from '../ui/Layout';

import type {
  FeaturedProps,
  HueProps,
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

export const AmbientLight = styled.div`
  position: absolute;
  z-index: -2;

  border-radius: 50%;
  filter: blur(160px);

  pointer-events: none;
`;

export const PurpleLight = styled(AmbientLight)`
  top: 22%;
  left: -300px;

  width: 600px;
  height: 600px;

  background: rgba(124, 92, 255, 0.06);
`;

export const GreenLight = styled(AmbientLight)`
  right: -290px;
  bottom: -210px;

  width: 580px;
  height: 580px;

  background: rgba(0, 255, 156, 0.035);
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
  align-items: end;

  gap: clamp(40px, 8vw, 120px);
  margin-bottom: clamp(52px, 7vw, 96px);

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    align-items: start;
    gap: ${({ theme }) => theme.space(7)};
  }
`;

export const HeaderMain = styled.div`
  max-width: 800px;
`;

export const EyebrowWrapper = styled(motion.div)`
  display: inline-flex;
`;

export const Title = styled(motion.h2)`
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

  @media screen and (max-width: 600px) {
    font-size: clamp(2.25rem, 12vw, 3.6rem);
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

export const ExpertiseStrip = styled.div`
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

export const ExpertiseTrack = styled(motion.div)`
  display: flex;
  width: max-content;

  gap: 48px;

  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`;

export const ExpertiseItem = styled.span`
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

export const TutorsLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(340px, 0.85fr);

  gap: ${({ theme }) => theme.space(5)};

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const SpecialistsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: ${({ theme }) => theme.space(5)};

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    article:last-child {
      grid-column: 1 / -1;
    }
  }
`;

export const Card = styled(motion.article)<FeaturedProps>`
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;
  isolation: isolate;
  overflow: hidden;
    cursor: pointer;
  outline: none;
  

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
    &:focus-visible {
    border-color: rgba(124, 92, 255, 0.7);

    box-shadow:
      0 0 0 4px rgba(124, 92, 255, 0.12),
      0 38px 105px rgba(0, 0, 0, 0.3),
      0 0 55px rgba(124, 92, 255, 0.08);
  }

  &:focus-visible [data-card-arrow='true'] {
    border-color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.color.accent};
    color: #ffffff;
    transform: rotate(45deg);
  }

  @media screen and (max-width: 600px) {
    min-height: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`;

export const CardNoise = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  opacity: 0.017;

  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");

  pointer-events: none;
`;

export const CardHeader = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
`;

export const AvatarArea = styled.div`
  position: relative;

  width: fit-content;
`;

export const AvatarRing = styled.div<HueProps>`
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

export const AvatarGlow = styled.div<HueProps>`
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


  // export const Avatar = styled.div<HueProps>`
  //   position: relative;
  //   overflow: hidden;

  //   display: grid;
  //   place-items: center;

  //   width: 78px;
  //   height: 78px;

  //   border: 1px solid rgba(255, 255, 255, 0.12);
  //   border-radius: 22px;

  //   background:
  //     linear-gradient(
  //       145deg,
  //       rgba(255, 255, 255, 0.16),
  //       rgba(255, 255, 255, 0.015)
  //     ),
  //     ${({ $hue }) =>
  //       `linear-gradient(
  //         135deg,
  //         hsl(${$hue}, 76%, 58%),
  //         hsl(${$hue + 38}, 78%, 49%)
  //       )`};

  //   box-shadow:
  //     0 20px 42px rgba(0, 0, 0, 0.25),
  //     inset 0 1px 0 rgba(255, 255, 255, 0.2);

  //   color: #ffffff;

  //   font-family: ${({ theme }) => theme.font.display};
  //   font-size: 1.4rem;
  //   font-weight: ${({ theme }) => theme.weight.bold};
  //   letter-spacing: -0.04em;

  //   transition: transform ${({ theme }) => theme.transition.base};

  //   img {
  //     position: relative;
  //     z-index: 1;

  //     display: block;

  //     width: 100%;
  //     height: 100%;

  //     object-fit: cover;
  //     object-position: center top;

  //     border-radius: inherit;
  //   }

  //   &::after {
  //     content: '';
  //     position: absolute;
  //     inset: 1px;
  //     z-index: 2;

  //     border-radius: 20px;

  //     background: linear-gradient(
  //       145deg,
  //       rgba(255, 255, 255, 0.14),
  //       transparent 48%
  //     );

  //     pointer-events: none;
  //   }
  // `;

  export const Avatar = styled.div<HueProps>`
  position: relative;
  overflow: hidden;

  display: grid;
  place-items: center;

  width: 78px;
  height: 78px;

  border: 2px solid transparent;
  border-radius: 22px;

  background:
    linear-gradient(
      ${({ theme }) => theme.color.surface},
      ${({ theme }) => theme.color.surface}
    ) padding-box,
    ${({ $hue }) =>
      `linear-gradient(
        135deg,
        hsla(${$hue}, 88%, 70%, 1),
        hsla(${$hue + 35}, 82%, 56%, 1)
      )`} border-box;

  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.05),
    0 16px 40px rgba(0, 0, 0, 0.32),
    0 0 36px ${({ $hue }) => `hsla(${$hue}, 82%, 58%, .22)`};

  color: #fff;

  font-family: ${({ theme }) => theme.font.display};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: -0.04em;

  transition:
    transform ${({ theme }) => theme.transition.base},
    box-shadow ${({ theme }) => theme.transition.base};

  img {
    position: relative;
    z-index: 1;

    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center top;

    border-radius: inherit;

    transition: transform 0.55s cubic-bezier(.16,1,.3,1);
  }

  &::before {
    content: '';

    position: absolute;
    inset: 0;
    z-index: 2;

    background:
      radial-gradient(
        circle at 20% 15%,
        rgba(255,255,255,.22),
        transparent 45%
      );

    pointer-events: none;
  }

  &::after {
    content: '';

    position: absolute;
    inset: 1px;
    z-index: 3;

    border-radius: 20px;

    background:
      linear-gradient(
        145deg,
        rgba(255,255,255,.16),
        transparent 45%
      );

    pointer-events: none;
  }

  ${Card}:hover & {
    transform: translateY(-2px);

    box-shadow:
      0 0 0 1px rgba(255,255,255,.08),
      0 22px 55px rgba(0,0,0,.36),
      0 0 48px ${({ $hue }) => `hsla(${$hue},82%,58%,.30)`};
  }

  ${Card}:hover & img {
    transform: scale(1.08);
  }
`;


export const SpecialistAvatar = styled.div<HueProps>`
  position: relative;
  overflow: hidden;

  display: grid;
  place-items: center;

  width: 58px;
  height: 58px;

  border: 1px solid
    ${({ $hue }) => `hsla(${$hue}, 85%, 65%, 0.65)`};
  border-radius: 18px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.015)
    ),
    ${({ $hue }) =>
      `linear-gradient(
        135deg,
        hsl(${$hue}, 76%, 52%),
        hsl(${$hue + 38}, 78%, 42%)
      )`};

  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.28),
    0 0 24px
      ${({ $hue }) => `hsla(${$hue}, 82%, 58%, 0.16)`};

  color: #ffffff;

  font-family: ${({ theme }) => theme.font.display};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: -0.04em;

  img {
    position: relative;
    z-index: 1;

    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center top;

    border-radius: inherit;

    transition: transform 0.5s
      cubic-bezier(0.16, 1, 0.3, 1);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    z-index: 2;

    border-radius: 16px;

    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.15),
      transparent 48%
    );

    pointer-events: none;
  }

  ${Card}:hover & img {
    transform: scale(1.08);
  }
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space(2)};
`;

export const CodeMark = styled.span`
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

export const CardArrow = styled.span`
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

export const StatusRow = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: ${({ theme }) => theme.space(3)};
  margin-top: ${({ theme }) => theme.space(7)};
`;

export const StatusBadge = styled.span`
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

export const FounderBadge = styled.span`
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

export const Identity = styled.div`
  position: relative;
  z-index: 2;

  margin-top: ${({ theme }) => theme.space(6)};
`;

export const FounderName = styled.h3`
  max-width: 13ch;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2rem, 4vw, 3.4rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.055em;
`;

export const SpecialistName = styled.h3`
  color: ${({ theme }) => theme.color.text};

  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.weight.semibold};
  line-height: 1.15;
  letter-spacing: -0.03em;
`;

export const Role = styled.span`
  display: block;

  margin-top: 9px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.075em;
  text-transform: uppercase;
`;

export const Bio = styled.p`
  position: relative;
  z-index: 2;

  max-width: 58ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.94rem;
  line-height: 1.75;
`;

export const SpecialistBio = styled(Bio)`
  margin-top: ${({ theme }) => theme.space(4)};

  font-size: 0.86rem;
  line-height: 1.65;
`;

export const Divider = styled.div`
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

export const MetricsGrid = styled.div`
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: ${({ theme }) => theme.space(3)};
`;

export const MetricCard = styled.div`
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

export const MetricValue = styled.strong`
  display: block;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.45rem, 3vw, 2rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.045em;
`;

export const MetricLabel = styled.span`
  display: block;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const MetaGrid = styled.div`
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: ${({ theme }) => theme.space(4)};
`;

export const MetaItem = styled.div`
  min-width: 0;
`;

export const MetaValue = styled.strong`
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

export const MetaLabel = styled.span`
  display: block;

  margin-top: 5px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const CardFooter = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space(4)};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.space(6)};
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
`;

export const TechPill = styled.span`
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

export const SpecialistContent = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);

  gap: ${({ theme }) => theme.space(4)};
`;

export const SpecialistText = styled.div`
  min-width: 0;
`;

export const SpecialistFooter = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.space(5)};
`;

export const SpecialistIcon = styled.div`
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

export const AuthorityPanel = styled(motion.div)`
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

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const AuthorityIntro = styled.div`
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

export const AuthorityLabel = styled.span`
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

export const AuthorityTitle = styled.h3`
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

export const AuthorityStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 1px;

  border-radius: calc(${({ theme }) => theme.radius.lg} - 1px);

  background: ${({ theme }) => theme.color.border};

  overflow: hidden;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const AuthorityStat = styled.div`
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

export const AuthorityValue = styled.strong`
  position: relative;
  z-index: 1;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.05em;
`;

export const AuthorityDescription = styled.span`
  position: relative;
  z-index: 1;

  max-width: 18ch;
  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.85rem;
  line-height: 1.55;
`;

export const ModalBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: grid;
  place-items: center;

  overflow-y: auto;

  padding: clamp(16px, 4vw, 48px);

  background: rgba(5, 5, 10, 0.82);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  overscroll-behavior: contain;
`;

export const ModalContent = styled(motion.article)<HueProps>`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  width: min(1080px, 100%);
  max-height: calc(100vh - 48px);
  overflow-y: auto;

  padding: clamp(24px, 5vw, 56px);

  border: 1px solid transparent;
  border-radius: clamp(24px, 3vw, 36px);

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.045),
      rgba(255, 255, 255, 0.01)
    ) padding-box,
    linear-gradient(
      130deg,
      ${({ $hue }) =>
        `hsla(${$hue}, 82%, 65%, 0.7)`},
      rgba(255, 255, 255, 0.07) 42%,
      rgba(0, 255, 156, 0.4)
    ) border-box,
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 60px 180px rgba(0, 0, 0, 0.6),
    0 0 100px
      ${({ $hue }) => `hsla(${$hue}, 80%, 58%, 0.11)`};

  scrollbar-width: thin;
  scrollbar-color:
    rgba(124, 92, 255, 0.32)
    transparent;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;

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

    background-size: 58px 58px;

    mask-image: linear-gradient(
      to bottom,
      black,
      transparent 72%
    );

    pointer-events: none;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: rgba(124, 92, 255, 0.32);
  }

  @media screen and (max-width: 600px) {
    max-height: calc(100vh - 20px);
    padding: 22px;
    border-radius: 24px;
  }
`;

export const ModalAvatarGlow = styled.div<HueProps>`
  position: absolute;
  top: -180px;
  left: -140px;
  z-index: -1;

  width: 520px;
  height: 520px;

  border-radius: 50%;

  background: ${({ $hue }) =>
    `hsla(${$hue}, 82%, 58%, 0.18)`};

  filter: blur(120px);

  pointer-events: none;
`;

export const ModalClose = styled.button`
  position: sticky;
  top: 0;
  z-index: 10;

  display: grid;
  place-items: center;

  width: 42px;
  height: 42px;
  margin-left: auto;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 50%;

  background: rgba(10, 10, 16, 0.72);
  color: ${({ theme }) => theme.color.textMuted};

  cursor: pointer;

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  transition:
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast},
    transform ${({ theme }) => theme.transition.base};

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    border-color: rgba(124, 92, 255, 0.45);
    background: ${({ theme }) => theme.color.accent};
    color: #ffffff;
    transform: rotate(90deg);
  }

  &:focus-visible {
    outline: 3px solid rgba(124, 92, 255, 0.24);
    outline-offset: 3px;
  }
`;

export const ModalHeader = styled.header`
  padding-bottom: clamp(32px, 5vw, 58px);

  border-bottom: 1px solid
    ${({ theme }) => theme.color.border};
`;

export const ModalHero = styled.div`
  display: flex;
  align-items: center;

  gap: clamp(18px, 3vw, 30px);
  margin-top: -20px;

  @media screen and (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 8px;
  }
`;

export const ModalAvatar = styled.div<HueProps>`
  position: relative;

  display: grid;
  flex: 0 0 auto;
  place-items: center;

  width: clamp(82px, 10vw, 112px);
  height: clamp(82px, 10vw, 112px);

  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 30px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.18),
      rgba(255, 255, 255, 0.02)
    ),
    ${({ $hue }) =>
      `linear-gradient(
        135deg,
        hsl(${$hue}, 76%, 58%),
        hsl(${$hue + 38}, 78%, 49%)
      )`};

  box-shadow:
    0 28px 60px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.24);

  color: #ffffff;

  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(1.45rem, 3vw, 2rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: -0.05em;

   overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    border-radius: inherit;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -8px;

    border: 1px solid
      ${({ $hue }) => `hsla(${$hue}, 80%, 62%, 0.25)`};

    border-radius: 36px;

    pointer-events: none;
  }

`;

export const ModalIdentity = styled.div`
  min-width: 0;
`;

export const ModalBadges = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
`;

export const ModalBadge = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 7px;
  padding: 6px 10px;

  border: 1px solid rgba(124, 92, 255, 0.18);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(124, 92, 255, 0.055);
  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.09em;
  text-transform: uppercase;

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const ModalTitle = styled.h2`
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2.1rem, 6vw, 4.3rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 0.96;
  letter-spacing: -0.065em;
`;

export const ModalRole = styled.span`
  display: block;

  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const ModalBio = styled.p`
  max-width: 76ch;
  margin-top: clamp(28px, 4vw, 42px);

  color: ${({ theme }) => theme.color.textMuted};

  font-size: clamp(0.98rem, 1.4vw, 1.08rem);
  line-height: 1.85;
`;

export const ModalMain = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(270px, 0.65fr);

  gap: clamp(32px, 6vw, 76px);
  padding: clamp(38px, 6vw, 68px) 0;

  border-bottom: 1px solid
    ${({ theme }) => theme.color.border};

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ModalSection = styled.section`
  padding-top: clamp(34px, 5vw, 56px);

  ${ModalMain} & {
    padding-top: 0;
  }
`;

export const ModalSectionLabel = styled.span`
  display: block;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const ModalSectionTitle = styled.h3`
  max-width: 18ch;
  margin-top: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.65rem, 3vw, 2.6rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1.05;
  letter-spacing: -0.05em;
`;

export const ModalTopics = styled.div`
  display: grid;

  gap: ${({ theme }) => theme.space(3)};
  margin-top: ${({ theme }) => theme.space(6)};
`;

export const ModalTopic = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;

  gap: ${({ theme }) => theme.space(3)};
  padding: ${({ theme }) => theme.space(4)};

  border: 1px solid rgba(255, 255, 255, 0.055);
  border-radius: ${({ theme }) => theme.radius.md};

  background: rgba(255, 255, 255, 0.018);
  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.9rem;
  line-height: 1.6;

  > span {
    display: grid;
    place-items: center;

    width: 25px;
    height: 25px;

    border-radius: 8px;

    background: rgba(0, 255, 156, 0.07);
    color: ${({ theme }) => theme.color.success};
  }

  svg {
    width: 13px;
    height: 13px;
  }
`;

export const ModalSidebar = styled.aside`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space(4)};
`;

export const ModalSpecialty = styled.div`
  padding: ${({ theme }) => theme.space(5)};

  border: 1px solid rgba(124, 92, 255, 0.15);
  border-radius: ${({ theme }) => theme.radius.md};

  background:
    linear-gradient(
      145deg,
      rgba(124, 92, 255, 0.09),
      rgba(255, 255, 255, 0.012)
    );
`;

export const ModalSpecialtyLabel = styled.span`
  display: block;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const ModalSpecialtyValue = styled.strong`
  display: block;

  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: -0.045em;
`;

export const ModalMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: ${({ theme }) => theme.space(3)};
`;

export const ModalMetric = styled.div`
  padding: ${({ theme }) => theme.space(4)};

  border: 1px solid rgba(255, 255, 255, 0.055);
  border-radius: ${({ theme }) => theme.radius.md};

  background: rgba(255, 255, 255, 0.018);
`;

export const ModalMetricValue = styled.strong`
  display: block;

  color: ${({ theme }) => theme.color.text};

  font-size: 1.35rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1;
  letter-spacing: -0.04em;
`;

export const ModalMetricLabel = styled.span`
  display: block;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 7px;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const ModalTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
`;

export const ModalTech = styled.span`
  display: inline-flex;
  align-items: center;

  min-height: 30px;
  padding: 6px 10px;

  border: 1px solid rgba(124, 92, 255, 0.18);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(124, 92, 255, 0.05);
  color: ${({ theme }) => theme.color.textMuted};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const ModalJourney = styled.div`
  display: grid;

  margin-top: ${({ theme }) => theme.space(7)};

  border-top: 1px solid
    ${({ theme }) => theme.color.border};
`;

export const ModalJourneyItem = styled.div`
  display: grid;
  grid-template-columns: minmax(110px, 0.3fr) minmax(0, 1fr);

  gap: clamp(24px, 5vw, 70px);
  padding: clamp(24px, 4vw, 38px) 0;

  border-bottom: 1px solid
    ${({ theme }) => theme.color.border};

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const ModalJourneyPeriod = styled.div`
  display: flex;
  align-items: baseline;

  gap: 12px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 0.75rem;

  > span {
    color: ${({ theme }) => theme.color.textFaint};

    font-size: 8px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;

export const ModalJourneyContent = styled.div`
  min-width: 0;
`;

export const ModalJourneyTitle = styled.h4`
  color: ${({ theme }) => theme.color.text};

  font-size: 1.05rem;
  font-weight: ${({ theme }) => theme.weight.semibold};
  letter-spacing: -0.025em;
`;

export const ModalJourneyDescription = styled.p`
  max-width: 62ch;
  margin-top: 10px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.9rem;
  line-height: 1.7;
`;

export const ModalFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(6)};
  padding-top: clamp(34px, 5vw, 56px);

  @media screen and (max-width: 650px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const ModalDescription = styled.p`
  max-width: 48ch;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.9rem;
  line-height: 1.7;
`;

export const ModalPrimaryAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  min-height: 48px;
  padding: 0 20px;

  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ theme }) => theme.color.accent};
  color: #ffffff;

  font-size: 0.88rem;
  font-weight: ${({ theme }) => theme.weight.semibold};

  box-shadow:
    0 14px 38px rgba(124, 92, 255, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);

  transition:
    transform ${({ theme }) => theme.transition.base},
    box-shadow ${({ theme }) => theme.transition.base};

  svg {
    width: 16px;
    height: 16px;

    transition: transform
      ${({ theme }) => theme.transition.base};
  }

  &:hover {
    transform: translateY(-2px);

    box-shadow:
      0 20px 48px rgba(124, 92, 255, 0.32),
      inset 0 1px 0 rgba(255, 255, 255, 0.22);

    svg {
      transform: translateX(4px);
    }
  }

  &:focus-visible {
    outline: 3px solid rgba(124, 92, 255, 0.24);
    outline-offset: 4px;
  }
`;
