import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  position: relative;
  display: flex;

  width: 100%;

  border-radius: 1rem;

  flex-direction: column;
  gap: 1.4rem;

  background-color: ${theme.color.dark3};
`;
