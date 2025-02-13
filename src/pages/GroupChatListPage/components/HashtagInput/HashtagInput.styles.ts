import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const addHashtagStyle = (fontWidth: number) => css`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 0.8rem;

  width: ${fontWidth && fontWidth > 90
    ? fontWidth
    : 90}px;

  padding: 0.8rem 1.7rem;

  border-radius: 1rem;

  ${theme.font.body2};
  font-weight: 400;
  color: ${theme.color.gray2};

  background-color: #404a58;

  white-space: nowrap;

  border: none;
  outline: none;
  box-sizing: border-box;
`;

export const hiddenSpanStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  padding: 0.8rem 1.7rem;
  display: inline-block;
  width: max-content;
  ${theme.font.body2};
  font-weight: 400;
`;
