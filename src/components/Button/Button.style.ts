import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

import type { ButtonProps } from "./Button";

export const buttonStyle = css`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 0.8rem;

  border-radius: 10px;

  font-weight: 500;
  color: ${theme.color.white};

  white-space: nowrap;

  transition: all 0.1s ease-in;

  &:hover {
    scale: 1.02;
  }

  &:disabled {
  }
`;

const textBaseStyle = css`
  padding: 1rem;

  ${theme.font.body1};
  color: ${theme.color.primaryBlue1};
`;

export const variantStyles: Record<Required<ButtonProps>["variant"], ReturnType<typeof css>> = {
  primary: css`
    background-color: ${theme.color.primaryBlue2};

    &:hover {
      background-color: ${theme.color.primaryBlue3};
    }

    &:disabled {
      color: ${theme.color.gray3};
      background-color: ${theme.color.dark2};
      cursor: default;
    }
  `,

  secondary: css`
    border: 1px solid ${theme.color.dark1};

    background-color: ${theme.color.dark3};

    &:hover {
      background-color: ${theme.color.dark2};
    }
  `,

  small: css`
    padding: 0.6rem 1rem;

    border-radius: 0.7rem;

    background-color: ${theme.color.dark2};

    ${theme.font.body2};
    color: ${theme.color.white};
  `,

  tertiary: css`
    background-color: ${theme.color.dark2};

    &:hover {
      background-color: ${theme.color.dark1};
    }
  `,

  text: css`
    ${textBaseStyle};
    text-decoration: underline;
  `,

  sorting: css`
    gap: 0.6rem;

    margin-left: auto;

    ${textBaseStyle};
    :hover {
      scale: 1;
    }
  `,

  hashtag: css`
    padding: 0.8rem 1.7rem;

    border-radius: 1rem;

    background-color: ${theme.color.dark3};

    ${theme.font.body3};
    color: ${theme.color.gray3};
    font-weight: 400;

    &:hover {
      color: ${theme.color.white};
    }
  `,
};

export const sizeStyle: Record<Required<ButtonProps>["size"], ReturnType<typeof css>> = {
  medium: css`
    padding: 0.6rem 1rem;

    ${theme.font.body2}
  `,

  large: css`
    padding: 1rem 2.6rem;

    ${theme.font.body1};
  `,
};
