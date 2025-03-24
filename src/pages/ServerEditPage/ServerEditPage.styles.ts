import { css, keyframes } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;

  width: 100%;
  height: 100vh;

  align-items: center;
  justify-content: center;

  position: relative;

  overflow: hidden;
`;

const fallDownAnimation = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0.3;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const logo1Style = css`
  position: absolute;

  top: 15%;
  left: 0%;

  width: 73.8rem;
  height: 63.7rem;

  animation: ${fallDownAnimation} 2.5s ease-in-out forwards, ${floatAnimation} 2s ease-in-out infinite 3.8s;
`;

export const logo2Style = css`
  position: absolute;

  top: 0%;
  right: 0%;

  width: 61.6rem;
  height: 72.8rem;

  animation: ${fallDownAnimation} 3.5s ease-in-out forwards, ${floatAnimation} 3s ease-in-out infinite 3.8s;
`;
