import { css } from "@emotion/react";

import { theme } from "@/styles/theme/theme";

export const wrapperStyle = css`
  display: flex;

  width: 21.8rem;
  height: 22.5rem;

  padding: 2rem 1.3rem;

  flex-direction: column;
  justify-content: space-between;
  gap: 1.1rem;

  z-index: 1;
`;

export const layoutStyle = css`
  display: flex;

  align-items: center;
  gap: 1rem;

`;

export const nameStyle = css`
  ${theme.font.body1};

  font-weight: 700;
`;

export const infoStyle = css`
  display: flex;

  gap: 0.1rem;

  ${theme.font.body3};
  font-weight: 700;

  color: ${theme.color.gray1};
`;

export const infoLayoutStyle = css`
  display: flex;

  flex-direction: column;

  gap: 0.4rem;

`;

export const verifyLayoutStyle = css`
  display: flex;

  align-items: center;
  gap: 0.4rem;

  color: #359AFF;
  ${theme.font.body3};

  font-weight: 700;
`;

export const buttonLayoutStyle = css`
  display: flex;

  flex-direction: column;

  padding-top: 0.3rem;
  gap: 0.8rem;

  & > button {
    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;

    padding: 0.6rem 6rem;

    background-color: #404A58;
    color: ${theme.color.white};

    ${theme.font.body2};
    font-weight: 700;

    white-space: nowrap;

    &:last-of-type {
      color: ${theme.color.primaryPink0}
    }

    &:hover {
      background-color: ${theme.color.dark1};

      transition: all 0.2s ease-in-out;
    }
  }




`;
