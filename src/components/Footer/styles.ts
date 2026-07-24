import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Section } from '../ui/Layout';

export const CTASection = styled(Section)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  padding-top: clamp(110px, 14vw, 190px);

  text-align: center;

  background:
    radial-gradient(
      circle at 50% 8%,
      rgba(124, 92, 255, 0.2),
      transparent 34%
    ),
    radial-gradient(
      circle at 18% 70%,
      rgba(0, 245, 160, 0.055),
      transparent 30%
    ),
    radial-gradient(
      circle at 84% 72%,
      rgba(124, 92, 255, 0.08),
      transparent 32%
    ),
    ${({ theme }) => theme.gradient.hero};
`;

export const BackgroundGrid = styled.div`
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
  opacity: 0.75;

  pointer-events: none;
`;

export const TopGlow = styled.div`
  position: absolute;
  top: -280px;
  left: 50%;
  z-index: -2;

  width: min(900px, 90vw);
  height: 560px;

  border-radius: 50%;

  background: rgba(124, 92, 255, 0.14);

  filter: blur(150px);
  transform: translateX(-50%);

  pointer-events: none;
`;

export const CTAInner = styled(motion.div)`
  position: relative;

  max-width: 1040px;
  margin-right: auto;
  margin-left: auto;
  padding-top: clamp(42px, 6vw, 72px);
  padding-right: clamp(22px, 5vw, 64px);
  padding-bottom: clamp(42px, 6vw, 72px);
  padding-left: clamp(22px, 5vw, 64px);

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: clamp(26px, 4vw, 42px);

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.008)
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 55px 150px rgba(0, 0, 0, 0.38),
    0 0 100px rgba(124, 92, 255, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
`;

export const CTAAccent = styled.div`
  position: absolute;
  top: 0;
  right: 15%;
  left: 15%;

  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(124, 92, 255, 0.88),
    rgba(0, 245, 160, 0.5),
    transparent
  );

  pointer-events: none;
`;

export const CTAOrb = styled(motion.div)`
  position: absolute;
  top: -70px;
  right: -70px;

  width: 190px;
  height: 190px;

  border-radius: 50%;

  background: rgba(124, 92, 255, 0.09);

  filter: blur(55px);

  pointer-events: none;
`;

export const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;

  gap: 9px;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-left: 12px;

  border: 1px solid rgba(124, 92, 255, 0.22);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(124, 92, 255, 0.065);
  color: ${({ theme }) => theme.color.textMuted};

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

export const CTATitle = styled(motion.h2)`
  max-width: 14ch;
  margin-top: ${({ theme }) => theme.space(6)};
  margin-right: auto;
  margin-left: auto;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2.65rem, 7vw, 6.1rem);
  font-weight: ${({ theme }) => theme.weight.black};
  line-height: 0.94;
  letter-spacing: -0.07em;

  span {
    background: ${({ theme }) => theme.gradient.text};
    background-clip: text;
    -webkit-background-clip: text;

    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: clamp(2.35rem, 13vw, 4.3rem);
  }
`;

export const CTALead = styled(motion.p)`
  max-width: 58ch;
  margin-top: ${({ theme }) => theme.space(6)};
  margin-right: auto;
  margin-left: auto;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: clamp(1rem, 1.6vw, 1.16rem);
  line-height: 1.8;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.weight.medium};
  }
`;

export const CTAActions = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.space(4)};
  margin-top: ${({ theme }) => theme.space(9)};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  min-height: 56px;
  padding-right: ${({ theme }) => theme.space(8)};
  padding-left: ${({ theme }) => theme.space(8)};

  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ theme }) => theme.color.accent};
  color: #ffffff;

  box-shadow:
    0 18px 50px rgba(124, 92, 255, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  font-size: 0.98rem;
  font-weight: ${({ theme }) => theme.weight.semibold};

  transition:
    box-shadow ${({ theme }) => theme.transition.base},
    border-color ${({ theme }) => theme.transition.base};

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.25);

    box-shadow:
      0 24px 70px rgba(124, 92, 255, 0.36),
      inset 0 1px 0 rgba(255, 255, 255, 0.24);
  }
`;

export const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 56px;
  padding-right: ${({ theme }) => theme.space(7)};
  padding-left: ${({ theme }) => theme.space(7)};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.pill};

  background: rgba(255, 255, 255, 0.025);
  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.weight.medium};

  transition:
    color ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast};

  &:hover {
    border-color: rgba(255, 255, 255, 0.14);

    background: rgba(255, 255, 255, 0.045);
    color: ${({ theme }) => theme.color.text};
  }
`;

export const TrustRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: clamp(14px, 3vw, 28px);
  margin-top: ${({ theme }) => theme.space(8)};

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-items: flex-start;
    flex-direction: column;

    width: fit-content;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const TrustItem = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 7px;

  svg {
    width: 13px;
    height: 13px;

    color: ${({ theme }) => theme.color.success};
  }
`;

export const FloatingMark = styled(motion.span)`
  position: absolute;
  z-index: -1;

  color: ${({ theme }) => theme.color.border};

  font-family: ${({ theme }) => theme.font.mono};
  font-weight: ${({ theme }) => theme.weight.bold};

  pointer-events: none;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }
`;

export const FooterWrap = styled.footer`
  position: relative;

  padding-top: clamp(80px, 10vw, 130px);
  padding-bottom: ${({ theme }) => theme.space(8)};

  border-top: 1px solid ${({ theme }) => theme.color.border};

  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.008),
      transparent 30%
    ),
    ${({ theme }) => theme.color.bg};
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.45fr repeat(3, minmax(0, 1fr));

  gap: clamp(40px, 7vw, 88px);

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const BrandBlock = styled.div`
  max-width: 370px;
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;

  gap: 8px;

  color: ${({ theme }) => theme.color.text};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: -0.04em;

  span {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const BrandDot = styled.span`
  display: inline-block;

  width: 8px;
  height: 8px;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.color.success};

  box-shadow: 0 0 16px rgba(0, 245, 160, 0.5);
`;

export const FooterTagline = styled.p`
  max-width: 36ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.textFaint};

  font-size: 0.88rem;
  line-height: 1.75;
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
  margin-top: ${({ theme }) => theme.space(6)};
`;

export const SocialLink = styled.a`
  display: grid;
  place-items: center;

  width: 38px;
  height: 38px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.018);
  color: ${({ theme }) => theme.color.textFaint};

  transition:
    color ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast};

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-color: rgba(124, 92, 255, 0.28);

    background: rgba(124, 92, 255, 0.06);
    color: ${({ theme }) => theme.color.text};
  }
`;

export const FooterColumn = styled.div`
  min-width: 0;
`;

export const ColTitle = styled.h5`
  margin-bottom: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.weight.medium};
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;

  min-height: 36px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.9rem;

  transition:
    color ${({ theme }) => theme.transition.fast},
    transform ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.color.text};
    transform: translateX(4px);
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.space(4)};
  margin-top: clamp(64px, 9vw, 110px);
  padding-top: ${({ theme }) => theme.space(6)};

  border-top: 1px solid ${({ theme }) => theme.color.border};

  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 8px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
