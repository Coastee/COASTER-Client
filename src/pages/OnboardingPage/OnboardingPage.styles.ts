import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const commonBtnStyle = css`
  display: flex;

  width: 100%;

  padding: 1.4rem 9.8rem;

  align-items: center;
  justify-content: center;
  gap: 0.95rem;

  border: none;
  border-radius: 1rem;

  font-weight: 500;
  ${theme.font.body1};

  white-space: nowrap;

  cursor: pointer;
`;

export const sideStyle = css`
  display: flex;

  flex-direction: column;
  gap: 1.8rem;
`;

export const googleBtnStyle = css`
  border: 1px solid ${theme.color.dark1};

  color: ${theme.color.white};
  background-color: transparent;
`;

export const kakaoBtnStyle = css`
  color: ${theme.color.dark3};
  background-color: ${theme.color.yellow};
`;

export const naverBtnStyle = css`
  color: ${theme.color.white};
  background-color: ${theme.color.green};
`;
