import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const supportingTextStyle = (position: "start" | "end") => css`
  position: absolute;
  display: flex;

  width: 100%;

  justify-content: ${position === "end" ? "flex-end" : "flex-start"};

  padding-top: 0.6rem;

  color: ${theme.color.primaryPink1};
  ${theme.font.body2};

  white-space: nowrap;
`;
