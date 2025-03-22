import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = (variant: "single" | "date") => css`
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: center;

  gap: ${variant === "date" ? "4.1rem" : "0"};
`;

export const dividerStyle = (direction: "vertical" | "horizontal") => css`
  width: ${direction === "vertical" ? "100%" : "0.1rem"} ;
  height: ${direction === "vertical" ? "0.1rem" : "100%"};

  border: none;

  background-color: ${theme.color.dark2};
`;

export const childrenStyle = css`
  white-space: nowrap;

  ${theme.font.body3}

  color: ${theme.color.gray1}
`;
