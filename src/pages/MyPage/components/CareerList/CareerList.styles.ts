import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const titleStyle = css`
  margin-bottom: 1.5rem;

  ${theme.font.title3}
`;

export const listStyle = css`
 display: flex;

 flex-direction: column;
 gap: 1.3rem;
`;
