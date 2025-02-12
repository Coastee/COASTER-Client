import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const supportingTextStyle = css`
  position: absolute;
  display: flex;

  width: 100%;

  justify-content: flex-end;

  padding-top: 0.8rem;

  color: ${theme.color.primaryPink1};

  ${theme.font.body2};
`;
