import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;

  width: 100%;

  align-items: center;

  border: none;

  color: ${theme.color.white};
  background-color: transparent;

  ${theme.font.body1};

  outline: none;

  ::placeholder {
    color: ${theme.color.gray1};
  }
`;
