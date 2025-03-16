import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  position: fixed;
  display: flex;

  top: 0;
  left: 0;

  width: 27.9rem;
  height: 100vh;

  padding: 4.9rem 6.4rem 4.2rem 2.5rem;

  flex-direction: column;

  border-right: 1px solid #455163;

  background-color: ${theme.color.dark4};
`;

export const closeNavIconWrapperStyle = css`
  display: flex;

  align-items: center;
  gap: 1.8rem;

  & > p {
    ${theme.font.body1};
  }
`;

export const listWrapperStyle = css`
  display: flex;

  padding: 0.5rem 0.6rem;
  flex-direction: column;
`;

export const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const itemStyle = css`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  padding: 0.5rem 0.6rem;

  border-radius: 1rem;

  background-color: ${theme.color.dark3};
`;
