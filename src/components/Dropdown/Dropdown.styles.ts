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
