import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const hashtagLayoutStyle = css`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

export const hashtagStyle = (variant: "hashTag" | "link") => css`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 0.8rem;

  padding: ${variant === "hashTag" ? "0.8rem 1.7rem" : "1.2rem"};

  border-radius: 1rem;

  ${theme.font.body2};
  font-weight: 400;
  color: ${theme.color.white};

  background-color: #404a58;

  white-space: nowrap;

  transition: all 0.1s ease-in;
`;

export const deleteStyle = css`
  position: absolute;
  top: 0;
  right: 0;

  transform: translate(30%, -30%);
`;
