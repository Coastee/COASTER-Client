import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const sectionStyle = css`
  position: relative;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  justify-content: center;
  align-items: center;

  padding: 4.4rem 7.8rem 3.5rem 6rem;

  row-gap: 3.4rem;

  border-radius: 2.5rem;

  background-color: ${theme.color.dark3};
`;

export const textLayoutStyle = css`
  display: flex;
  flex-direction: column;

  align-items: center;

  row-gap: 0.9rem;
`;

export const titleLayoutStyle = css`
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const titleStyle = css`
  padding: 0 0.2rem;

  z-index: 1;

  ${theme.font.body2};
  font-weight: 600;
`;

export const underBarStyle = css`
  position: absolute;

  bottom: 0;
  left: 0;

  width: 100%;
  height: 0.5rem;

  background-color: ${theme.color.primaryBlue2};
`;
export const descStyle = css`
  ${theme.font.body2};
  font-weight: 400;
`;

export const backgroundStyle = css`
  position: absolute;

  padding: 1.2rem 5.2rem;

  height: 100%;

  background-position: center;
  background-size: cover;
`;
