import { keyframes } from "styled-components";

export const glowPulse = keyframes`
  0%,
  100% {
    box-shadow:
      0 34px 100px rgba(0, 0, 0, 0.5),
      0 0 0 rgba(124, 92, 255, 0);
  }

  50% {
    box-shadow:
      0 34px 100px rgba(0, 0, 0, 0.5),
      0 0 38px rgba(124, 92, 255, 0.18);
  }
`;

export const floatTerminal = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }
`;


export const borderTravel = keyframes`
  0% {
    transform: translateX(-130%);
    opacity: 0;
  }

  15% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    transform: translateX(280%);
    opacity: 0;
  }
`;

export const blink = keyframes`
  0%,
  45% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0;
  }
`;

export const pulseDot = keyframes`
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(0.75);
    opacity: 0.6;
  }
`;

export const shineResult = keyframes`
  0% {
    transform: translateX(-150%) rotate(18deg);
  }

  100% {
    transform: translateX(350%) rotate(18deg);
  }
`;

