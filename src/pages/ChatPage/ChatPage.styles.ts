import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const layoutStyle = css`
  display: flex;

  width: 100%;
`;

export const backgroundStyle = css`
  display: flex;

  width: 100%;
  height: 100vh;

  background-color: ${theme.color.dark3};

  border-radius: 2.5rem 0 0 2.5rem;
`;
