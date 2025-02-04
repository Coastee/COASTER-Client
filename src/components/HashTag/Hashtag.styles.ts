import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const hashtagStyle = css`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 0.8rem;

  padding: 0.8rem 1.7rem;

  border-radius: 1rem;

  background-color: ${theme.color.dark3};

  ${theme.font.body3};
  color: ${theme.color.gray3};
  font-weight: 400;

  white-space: nowrap;

  transition: all 0.1s ease-in;

  cursor: pointer;

  &:hover {
    scale: 1.02;
    color: ${theme.color.white};
  }
`;
