import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;
  width: 5.4rem;
  height: 5.4rem;

  padding: 1rem;

  justify-content: center;
  align-items: center;

  border: 1px solid ${theme.color.dark1};
  border-radius: 1rem;

  ${theme.font.title2};
  font-weight: 400;
`;
