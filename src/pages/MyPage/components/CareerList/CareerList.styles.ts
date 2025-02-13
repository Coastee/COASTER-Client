import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const layoutStyle = css`
  display: flex;

  max-width: 65rem;

  justify-content:space-between;
  align-items: center;
`;

export const titleStyle = css`
  ${theme.font.title3}
`;

export const listStyle = css`
 display: flex;

 flex-direction: column;
 gap: 1.3rem;

 padding-bottom: 7rem;
`;
