import styled from "styled-components";

export const Container = styled.div`
  width: min(1280px, 100%);
  margin-right: auto;
  margin-left: auto;

  padding-right: clamp(20px, 4vw, 40px);
  padding-left: clamp(20px, 4vw, 40px);
`;

export const Section = styled.section<{
  $noPadTop?: boolean;
  $noPadBottom?: boolean;
}>`
  position: relative;
  isolation: isolate;

  padding-top: ${({ $noPadTop }) =>
    $noPadTop ? "0" : "clamp(96px, 12vw, 180px)"};

  padding-bottom: ${({ $noPadBottom }) =>
    $noPadBottom ? "0" : "clamp(96px, 12vw, 180px)"};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: ${({ $noPadTop }) =>
      $noPadTop ? "0" : "clamp(72px, 10vw, 110px)"};

    padding-bottom: ${({ $noPadBottom }) =>
      $noPadBottom ? "0" : "clamp(72px, 10vw, 110px)"};
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 10px;

  padding-top: 8px;
  padding-right: 14px;
  padding-bottom: 8px;
  padding-left: 14px;

  border: 1px solid rgba(124, 92, 255, 0.18);
  border-radius: 999px;

  background: rgba(124, 92, 255, 0.06);

  backdrop-filter: blur(12px);

  color: ${({ theme }) => theme.color.textMuted};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.weight.medium};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 10px 30px rgba(0, 0, 0, 0.12);

  &::before {
    content: "";

    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: ${({ theme }) => theme.color.accent};

    box-shadow:
      0 0 0 4px rgba(124, 92, 255, 0.08),
      0 0 18px ${({ theme }) => theme.color.accentGlow};
  }
`;