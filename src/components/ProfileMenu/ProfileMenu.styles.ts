import { css } from "@emotion/react";

import { theme } from "@/styles/theme/theme";

export const wrapperStyle = css`
  display: flex;

  width: 100%;
  height: 100%;

  padding: 4rem 1.3rem 3rem 1.3rem;

  flex-direction: column;
  justify-content: space-between;
  gap: 1.1rem;

  z-index: 10;
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

  align-items: center;
  gap: 0.2rem;

  color: ${theme.color.gray1};

  & > h2 {
    ${theme.font.body3};
    font-weight: 500;
  }

  & > p {
    ${theme.font.body3};
    font-weight: 500;
  }
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

    &:hover {
      background-color: ${theme.color.dark1};

      transition: all 0.2s ease-in-out;
    }
  }
`;
