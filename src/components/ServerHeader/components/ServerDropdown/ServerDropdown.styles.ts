import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const containerStyle = css`
  position: absolute;

  flex-direction: column;
  row-gap: 0.3rem;
  flex-shrink: 0;

  margin-top: 4rem;

  padding: 0.8rem;
  border: 1px solid ${theme.color.dark1};
  border-radius: 0.8rem;

  background-color: ${theme.color.dark3};

  z-index: 1;
`;

export const sortingStyle = css`
  display: flex;

  flex-direction: column;
  align-items: end;

  margin-left: auto;

  button {
    padding: 1.3rem 1rem 0.7rem 1rem;
  }
`;

export const buttonStyle = css`
  width: 5.6rem;
  height: 7rem;
`;

export const listStyle = css``;

export const listBarStyle = css`
  display: flex;
  align-items: center;

  padding: 0 1.2rem;

  width: 10rem;
  height: 2.6rem;

  border-radius: 0.6rem;

  ${theme.font.body2};
  color: ${theme.color.primaryBlue1};

  cursor: pointer;

  &:hover {
    background-color: ${theme.color.dark2};
  }
`;
