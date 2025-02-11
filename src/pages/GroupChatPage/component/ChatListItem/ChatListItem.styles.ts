import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const listWrapperStyle = css`
  display: flex;

  width: 16.8rem;

  justify-content: space-between;

  border-radius: 0.5rem;
`;

export const layoutStyle = css`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  ${theme.font.body2}
`;
