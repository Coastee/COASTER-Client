import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const layoutStyle = (supportingText: boolean) => css`
  position: relative;

  width: 100%;

  margin-bottom: ${supportingText ? "1.5rem" : "0"};
`;

export const wrapperStyle = (
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
  isError: boolean
) => css`
  position: relative;
  display: flex;

  width: 100%;
  height: 5rem;

  padding: 1.55rem 1.8rem;

  gap: ${hasLeftIcon && "1.35rem"};
  justify-content: ${hasRightIcon && "space-between"};

  align-items: center;

  border-radius: 10px;
  box-shadow: inset 0 0 0 1px
    ${isError ? theme.color.primaryPink1 : theme.color.dark1};

  background-color: #2d3643;

  transition: 0.2s ease-in-out;

  :focus-within {
    box-shadow: inset 0 0 0 1px ${theme.color.primaryBlue3};
  }
`;

export const inputStyle = css`
  display: flex;

  width: 100%;

  align-items: center;

  border: none;

  color: ${theme.color.white};
  background-color: transparent;

  ${theme.font.body1};

  outline: none;

  ::placeholder {
    color: ${theme.color.gray1};
  }
`;

export const countStyle = css`
  position: absolute;
  right: 1.5rem;
  bottom: 1.2rem;
  display: flex;
  ${theme.font.body3};
  color: ${theme.color.gray1};

  & > p {
    ${theme.font.body3}
  }
`;
