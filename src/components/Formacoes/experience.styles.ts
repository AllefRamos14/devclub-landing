import { motion } from 'framer-motion';
import styled from 'styled-components';


interface ModuleButtonProps {
  $active?: boolean;
  $locked?: boolean;
}

export const ExperienceBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 999;

  display: grid;
  place-items: center;

  padding: 48px;

  background: rgba(5, 8, 20, 0.82);
  backdrop-filter: blur(18px);

  @media (max-width: 900px) {
    padding: 16px;
  }
`;

export const ExperiencePanel = styled(motion.div)`
  width: min(1450px, 100%);
  height: min(92vh, 960px);

  overflow: hidden;

  border: 1px solid rgba(124, 92, 255, 0.18);
  border-radius: 28px;

  background:
    radial-gradient(
      circle at top right,
      rgba(124, 92, 255, 0.16),
      transparent 35%
    ),
    ${({ theme }) => theme.color.surface};

  box-shadow:
    0 40px 120px rgba(0, 0, 0, 0.55),
    inset 0 1px rgba(255, 255, 255, 0.04);

  display: flex;
  flex-direction: column;

  @media (max-width:700px){
    width:100vw;
    height:100vh;
    border-radius:0;
}
`;

export const ExperienceHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 28px 34px;

  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  @media(max-width:700px){
    flex-direction:column;
    align-items:flex-start;
    gap:20px;
    padding:20px;
}
`;

export const ExperienceHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const HeaderIcon = styled.div`
  width: 68px;
  height: 68px;

  border-radius: 20px;

  display: grid;
  place-items: center;

  background: linear-gradient(
    145deg,
    rgba(124, 92, 255, .25),
    rgba(124, 92, 255, .05)
  );

  color: ${({ theme }) => theme.color.accent};

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const ExperienceEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
`;

export const ExperienceTitle = styled.h2`
  margin-top: 8px;

  font-size: clamp(2rem, 4vw, 3rem);

  font-weight: 700;
  line-height: 1.05;

  color: ${({ theme }) => theme.color.text};
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const HeaderMeta = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width:900px){
    display:none;
  }
`;

export const HeaderMetaItem = styled.div`
  display:flex;
  align-items:center;
  gap:8px;

  padding:10px 14px;

  border:1px solid ${({theme})=>theme.color.border};
  border-radius:999px;

  color:${({theme})=>theme.color.textMuted};

  font-size:.85rem;

  svg{
    color:${({theme})=>theme.color.accent};
  }
`;

export const CloseButton = styled.button`
  width:46px;
  height:46px;

  border:none;
  border-radius:14px;

  display:grid;
  place-items:center;

  cursor:pointer;

  background:rgba(255,255,255,.04);

  color:${({theme})=>theme.color.text};

  transition:.25s;

  &:hover{
    background:${({theme})=>theme.color.accent};
    color:#fff;
    transform:rotate(90deg);
  }
`;

export const ExperienceBody = styled.div`
  flex:1;

  display:grid;
  grid-template-columns:330px 1fr;

  overflow:hidden;

  @media(max-width:1000px){
    grid-template-columns:1fr;
    overflow:auto;
  }
`;

export const ExperienceSidebar = styled.aside`
  border-right:1px solid ${({theme})=>theme.color.border};

  overflow:auto;

  padding:28px;
`;

export const ExperienceContent = styled.main`
  overflow:auto;

  padding:42px;

   @media (max-width: 1000px) {
    padding: 24px;
  }

  @media (max-width: 700px) {
    padding: 20px;
  }
`;

export const SidebarHeader = styled.div`
  margin-bottom:30px;
`;

export const SidebarLabel = styled.div`
  color:${({theme})=>theme.color.accent};

  font-size:11px;

  font-family:${({theme})=>theme.font.mono};

  text-transform:uppercase;
  letter-spacing:.08em;
`;

export const SidebarTitle = styled.h3`
  margin-top:8px;

  font-size:1.4rem;

  color:${({theme})=>theme.color.text};
`;

export const ProgressHeader = styled.div`
  display:flex;
  justify-content:space-between;

  margin-top:22px;
`;

export const ProgressLabel = styled.span`
  color:${({theme})=>theme.color.textMuted};
  font-size:.8rem;
`;

export const ProgressValue = styled.span`
  color:${({theme})=>theme.color.accent};
  font-weight:700;
`;

export const ProgressBar = styled.div`
  margin-top:10px;

  width:100%;
  height:8px;

  overflow:hidden;

  border-radius:999px;

  background:${({theme})=>theme.color.border};
`;

export const ProgressFill = styled(motion.div)`
  height:100%;

  border-radius:999px;

  background:linear-gradient(
      90deg,
      #7c5cff,
      #5be7ff
  );
`;

export const ModuleList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const ModuleButton = styled.button<ModuleButtonProps>`
  position: relative;

  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) 8px;
  align-items: center;

  width: 100%;
  gap: 12px;
  padding: 13px;

  border: 1px solid
    ${({ theme, $active }) =>
      $active
        ? theme.color.accentDim
        : theme.color.border};

  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ $active }) =>
    $active
      ? 'rgba(124, 92, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.012)'};

  color: inherit;

  font: inherit;
  text-align: left;

  cursor: ${({ $locked }) =>
    $locked ? 'not-allowed' : 'pointer'};

  opacity: ${({ $locked }) => ($locked ? 0.48 : 1)};

  transition:
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast},
    transform ${({ theme }) => theme.transition.fast},
    opacity ${({ theme }) => theme.transition.fast};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.color.accentDim};
    background: rgba(124, 92, 255, 0.07);
    transform: translateX(4px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.accent};
    outline-offset: 3px;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover:not(:disabled) {
      transform: none;
    }
  }
`;

export const ModuleNumber = styled.span`
  display: grid;
  place-items: center;

  width: 38px;
  height: 38px;

  border: 1px solid rgba(124, 92, 255, 0.18);
  border-radius: 12px;

  background: rgba(124, 92, 255, 0.07);
  color: ${({ theme }) => theme.color.accent};

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const ModuleInfo = styled.span`
  display: flex;
  flex-direction: column;

  min-width: 0;
  gap: 4px;
`;

export const ModuleTitle = styled.span`
  overflow: hidden;

  color: ${({ theme }) => theme.color.text};

  font-size: 0.88rem;
  font-weight: ${({ theme }) => theme.weight.medium};
  line-height: 1.35;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ModuleDuration = styled.span`
  color: ${({ theme }) => theme.color.textFaint};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const ModuleStatus = styled.span`
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: ${({ theme }) => theme.color.border};

  &[data-status='completed'] {
    background: ${({ theme }) => theme.color.success};
    box-shadow: 0 0 10px rgba(0, 255, 156, 0.55);
  }

  &[data-status='active'] {
    background: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 10px rgba(124, 92, 255, 0.75);
  }

  &[data-status='locked'] {
    background: ${({ theme }) => theme.color.textFaint};
    box-shadow: none;
  }
`;

export const ExperienceHeadline = styled.h3`
  max-width: 18ch;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
`;

export const ExperienceDescription = styled.p`
  max-width: 68ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 1rem;
  line-height: 1.75;
`;

export const ActiveModuleContent = styled(motion.section)`
  position: relative;
  overflow: hidden;

  margin-top: ${({ theme }) => theme.space(8)};
  padding: ${({ theme }) => theme.space(7)};

  border: 1px solid rgba(124, 92, 255, 0.17);
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    radial-gradient(
      circle at 90% 0%,
      rgba(124, 92, 255, 0.14),
      transparent 38%
    ),
    rgba(255, 255, 255, 0.02);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.035),
    0 20px 60px rgba(0, 0, 0, 0.16);

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
      rgba(124, 92, 255, 0.65),
      transparent
    );
  }
`;

export const ActiveModuleHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: ${({ theme }) => theme.space(5)};

  @media screen and (max-width: 620px) {
    flex-direction: column;
  }
`;

export const ActiveModuleInfo = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space(4)};
`;

export const ActiveModuleIcon = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;

  width: 52px;
  height: 52px;

  border: 1px solid rgba(124, 92, 255, 0.22);
  border-radius: 16px;

  background: linear-gradient(
    145deg,
    rgba(124, 92, 255, 0.21),
    rgba(124, 92, 255, 0.045)
  );

  color: ${({ theme }) => theme.color.accent};

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const ActiveModuleLabel = styled.span`
  display: block;

  color: ${({ theme }) => theme.color.accent};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

export const ActiveModuleTitle = styled.h4`
  margin-top: 6px;

  color: ${({ theme }) => theme.color.text};

  font-size: clamp(1.3rem, 2vw, 1.75rem);
  line-height: 1.15;
  letter-spacing: -0.025em;
`;

export const ActiveModuleDescription = styled.p`
  max-width: 70ch;
  margin-top: ${({ theme }) => theme.space(5)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.95rem;
  line-height: 1.75;
`;

interface StartButtonProps {
  $primary?: boolean;
}

export const StartButton = styled.button<StartButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  margin-top: ${({ theme }) => theme.space(6)};
  padding: 13px 18px;

  border: 1px solid
    ${({ theme, $primary }) =>
      $primary
        ? theme.color.accent
        : theme.color.accentDim};

  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme, $primary }) =>
    $primary
      ? theme.color.accent
      : 'rgba(124, 92, 255, 0.08)'};

  color: ${({ theme, $primary }) =>
    $primary ? '#ffffff' : theme.color.text};

  font: inherit;
  font-size: 0.88rem;
  font-weight: ${({ theme }) => theme.weight.semibold};

  cursor: pointer;

  box-shadow: ${({ $primary }) =>
    $primary
      ? '0 14px 35px rgba(124, 92, 255, 0.25)'
      : 'none'};

  transition:
    transform ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast},
    box-shadow ${({ theme }) => theme.transition.fast};

  svg {
    transition: transform ${({ theme }) => theme.transition.fast};
  }

  &:hover {
    transform: translateY(-2px);

    border-color: ${({ theme }) => theme.color.accent};

    box-shadow: ${({ $primary }) =>
      $primary
        ? '0 18px 45px rgba(124, 92, 255, 0.34)'
        : '0 12px 30px rgba(124, 92, 255, 0.12)'};
  }

  &:hover svg:last-child {
    transform: translateX(4px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.accent};
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover,
    &:hover svg:last-child {
      transform: none;
    }
  }
`;

export const TechnologySection = styled.section`
  margin-top: ${({ theme }) => theme.space(8)};
`;

export const TechnologyTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.color.text};

  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weight.semibold};

  svg {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const TechnologyList = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 12px;
  margin-top: ${({ theme }) => theme.space(5)};
`;

export const Technology = styled(motion.div)`
  padding: 10px 14px;

  border: 1px solid rgba(124, 92, 255, 0.18);
  border-radius: ${({ theme }) => theme.radius.md};

  background: rgba(124, 92, 255, 0.06);

  color: ${({ theme }) => theme.color.text};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 0.8rem;

  transition:
    transform ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast};

  &:hover {
    transform: translateY(-3px);

    border-color: ${({ theme }) => theme.color.accent};
    background: rgba(124, 92, 255, 0.12);
  }
`;

export const OutcomeCard = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 18px;

  margin-top: ${({ theme }) => theme.space(8)};
  padding: ${({ theme }) => theme.space(6)};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background: rgba(255,255,255,.02);
`;

export const OutcomeIcon = styled.div`
  width: 54px;
  height: 54px;

  display: grid;
  place-items: center;

  flex-shrink: 0;

  border-radius: 16px;

  background: linear-gradient(
    145deg,
    rgba(124,92,255,.18),
    rgba(124,92,255,.04)
  );

  color: ${({ theme }) => theme.color.accent};

  svg{
    width:24px;
    height:24px;
  }
`;

export const OutcomeText = styled.p`
  margin-top: 8px;

  color: ${({ theme }) => theme.color.textMuted};

  line-height: 1.75;
`;

export const FinalProjectCard = styled.section`
  margin-top: ${({ theme }) => theme.space(8)};
  padding: ${({ theme }) => theme.space(7)};

  border: 1px solid rgba(124,92,255,.18);
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    radial-gradient(
      circle at top right,
      rgba(124,92,255,.12),
      transparent 35%
    ),
    rgba(255,255,255,.02);
`;

export const FinalProjectHeader = styled.div`
  display:flex;
  align-items:center;
  gap:18px;
`;

export const FinalProjectIcon = styled.div`
  width:60px;
  height:60px;

  display:grid;
  place-items:center;

  border-radius:18px;

  background:linear-gradient(
      145deg,
      rgba(124,92,255,.2),
      rgba(124,92,255,.05)
  );

  color:${({theme})=>theme.color.accent};

  svg{
    width:28px;
    height:28px;
  }
`;

export const FinalProjectLabel = styled.span`
  color:${({theme})=>theme.color.accent};

  font-family:${({theme})=>theme.font.mono};
  font-size:10px;

  letter-spacing:.08em;
  text-transform:uppercase;
`;

export const FinalProjectTitle = styled.h3`
  margin-top:8px;

  color:${({theme})=>theme.color.text};

  font-size:1.5rem;
`;

export const FinalProjectDescription = styled.p`
  margin-top:${({theme})=>theme.space(5)};

  color:${({theme})=>theme.color.textMuted};

  line-height:1.8;
`;

export const FinalProjectFeatures = styled.div`
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));

  gap:16px;

  margin-top:${({theme})=>theme.space(6)};

  @media(max-width:760px){
    grid-template-columns:1fr;
  }
`;

export const FinalProjectFeature = styled.div`
  display:flex;
  align-items:center;

  gap:10px;

  padding:12px 14px;

  border-radius:${({theme})=>theme.radius.md};

  background:rgba(255,255,255,.025);

  color:${({theme})=>theme.color.text};

  svg{
    color:${({theme})=>theme.color.success};
    flex-shrink:0;
  }
`;

