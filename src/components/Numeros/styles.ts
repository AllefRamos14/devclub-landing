import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Section } from '../ui/Layout';

export const NumbersSection = styled(Section)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(124, 92, 255, 0.16),
      transparent 36%
    ),
    radial-gradient(
      circle at 8% 70%,
      rgba(124, 92, 255, 0.07),
      transparent 30%
    ),
    radial-gradient(
      circle at 92% 78%,
      rgba(0, 245, 160, 0.035),
      transparent 28%
    ),
    ${({ theme }) => theme.color.bg};

  border-top: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const GridOverlay = styled.div`
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

  background-size: 72px 72px;
  opacity: 0.7;

  pointer-events: none;
`;

export const Glow = styled.div`
  position: absolute;
  top: -230px;
  left: 50%;
  z-index: -2;

  width: 680px;
  height: 450px;

  border-radius: 50%;

  background: rgba(124, 92, 255, 0.11);

  filter: blur(150px);
  transform: translateX(-50%);

  pointer-events: none;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  align-items: end;

  gap: clamp(42px, 8vw, 110px);
  margin-bottom: clamp(54px, 8vw, 90px);

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    align-items: start;

    gap: ${({ theme }) => theme.space(6)};
  }
`;

export const HeaderMain = styled.div`
  max-width: 850px;
`;

export const EyebrowWrapper = styled(motion.div)`
  display: inline-flex;
`;

export const Title = styled(motion.h2)`
  max-width: 14ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2.7rem, 6vw, 5.7rem);
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 0.95;
  letter-spacing: -0.07em;

  span {
    background: ${({ theme }) => theme.gradient.text};
    background-clip: text;
    -webkit-background-clip: text;

    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 600px) {
    font-size: clamp(2.35rem, 12vw, 4rem);
  }
`;

export const HeaderSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Description = styled.p`
  max-width: 48ch;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: clamp(1rem, 1.4vw, 1.08rem);
  line-height: 1.8;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.weight.medium};
  }
`;

export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;

  gap: 9px;
  margin-top: ${({ theme }) => theme.space(6)};
  padding: 9px 13px;

  border: 1px solid rgba(0, 245, 160, 0.14);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(0, 245, 160, 0.035);
  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const Dashboard = styled(motion.div)`
  position: relative;
  overflow: hidden;

  padding: clamp(18px, 2vw, 24px);

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.006)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 50px 140px rgba(0, 0, 0, 0.34),
    0 0 90px rgba(124, 92, 255, 0.045),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);
`;

export const DashboardAccent = styled.div`
  position: absolute;
  top: 0;
  right: 14%;
  left: 14%;

  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(124, 92, 255, 0.72),
    transparent
  );

  pointer-events: none;
`;

 

export const DashboardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};

  padding-top: ${({ theme }) => theme.space(3)};
  padding-right: ${({ theme }) => theme.space(3)};
  padding-bottom: ${({ theme }) => theme.space(6)};
  padding-left: ${({ theme }) => theme.space(3)};

  @media screen and (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const DashboardLabel = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  color: ${({ theme }) => theme.color.textMuted};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.09em;
  text-transform: uppercase;

  svg {
    width: 15px;
    height: 15px;

    color: ${({ theme }) => theme.color.accent};
  }
`;

export const DashboardStatus = styled.div`
  display: flex;
  align-items: center;

  gap: 9px;

  color: ${({ theme }) => theme.color.success};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const StatusDot = styled.span`
  display: inline-block;

  width: 6px;
  min-width: 6px;
  height: 6px;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.color.success};

  box-shadow:
    0 0 0 5px rgba(0, 245, 160, 0.05),
    0 0 16px rgba(0, 245, 160, 0.5);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: ${({ theme }) => theme.space(4)};

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled(motion.article)`
  position: relative;
  overflow: hidden;
 

  min-height: 310px;
  padding: clamp(24px, 3vw, 34px);

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(124, 92, 255, 0.09),
      transparent 46%
    ),
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.034),
      rgba(255, 255, 255, 0.005)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 24px 75px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.025);

  transition:
    border-color 300ms ease,
    box-shadow 300ms ease,
    transform 300ms ease;

  &:hover {
    border-color: rgba(124, 92, 255, 0.24);

    box-shadow:
      0 34px 90px rgba(0, 0, 0, 0.3),
      0 0 55px rgba(124, 92, 255, 0.07),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);

    transform: translateY(-6px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const CardAccent = styled.div`
  position: absolute;
  top: 0;
  right: 22%;
  left: 22%;

  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(124, 92, 255, 0.58),
    transparent
  );

  opacity: 0.85;
  pointer-events: none;
`;

export const CardGlow = styled.div`
  position: absolute;
  top: -100px;
  right: -100px;

  width: 220px;
  height: 220px;

  border-radius: 50%;

  background: rgba(124, 92, 255, 0.07);

  filter: blur(70px);

  pointer-events: none;
`;

export const CardTop = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(4)};
`;

export const IconBox = styled.div`
  display: grid;
  place-items: center;

  width: 48px;
  height: 48px;

  border: 1px solid rgba(124, 92, 255, 0.18);
  border-radius: 15px;

  background: rgba(124, 92, 255, 0.07);
  color: ${({ theme }) => theme.color.accent};

  box-shadow:
    0 14px 38px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  svg {
    width: 19px;
    height: 19px;
  }
`;

export const CardIndex = styled.span`
  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.09em;
`;

export const NumberArea = styled.div`
  position: relative;
  z-index: 2;

  margin-top: clamp(38px, 5vw, 58px);
`;

export const BigNumber = styled(motion.div)`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(3rem, 5.7vw, 5rem);
  font-weight: ${({ theme }) => theme.weight.black};
  line-height: 0.9;
  letter-spacing: -0.065em;

  background: ${({ theme }) => theme.gradient.text};
  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  -webkit-text-fill-color: transparent;
`;

export const Label = styled.h3`
  position: relative;
  z-index: 2;

  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.text};

  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weight.medium};
  line-height: 1.3;
`;

export const CardDescription = styled.p`
  position: relative;
  z-index: 2;

  max-width: 30ch;
  margin-top: ${({ theme }) => theme.space(3)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.8rem;
  line-height: 1.6;
`;

export const Progress = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  height: 2px;

  background: rgba(255, 255, 255, 0.035);
`;

export const ProgressFill = styled(motion.div)`
  width: 100%;
  height: 100%;

  background: linear-gradient(
    90deg,
    rgba(124, 92, 255, 0.3),
    rgba(124, 92, 255, 1),
    rgba(0, 245, 160, 0.6)
  );

  transform-origin: left;
`;

export const Footer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(5)};
  margin-top: ${({ theme }) => theme.space(6)};
  padding: ${({ theme }) => theme.space(5)};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: rgba(255, 255, 255, 0.015);

  @media screen and (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const FooterMain = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space(4)};
`;

export const FooterIcon = styled.div`
  display: grid;
  place-items: center;

  width: 42px;
  min-width: 42px;
  height: 42px;

  border: 1px solid rgba(0, 245, 160, 0.14);
  border-radius: 13px;

  background: rgba(0, 245, 160, 0.035);
  color: ${({ theme }) => theme.color.success};

  svg {
    width: 17px;
    height: 17px;
  }
`;

export const FooterText = styled.div`
  strong {
    display: block;

    color: ${({ theme }) => theme.color.text};

    font-size: 0.92rem;
    font-weight: ${({ theme }) => theme.weight.medium};
  }

  span {
    display: block;
    margin-top: 5px;

    color: ${({ theme }) => theme.color.textMuted};

    font-size: 0.77rem;
    line-height: 1.5;
  }
`;

export const FooterBadge = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 7px;
  padding: 7px 10px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.pill};

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  svg {
    width: 12px;
    height: 12px;

    color: ${({ theme }) => theme.color.accent};
  }
`;
