import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const layoutStyle = css`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;


  align-items: center;

  gap: 2.3rem;

  & > p {
    margin-left: -1.5rem;
    white-space: nowrap;

    ${theme.font.body1};
  }


`;
