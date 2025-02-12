import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const layoutStyle = (supportingText: boolean) => css`
  position: relative;

  margin-bottom: ${supportingText ? "1.5rem" : "0"};

  width: 100%;
`;

export const wrapperStyle = (isError: boolean) => css`
  position: relative;
  display: flex;

  width: 100%;

  padding: 1.55rem 1.8rem;

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

export const textareaStyle = css`
  width: 100%;
  height: 100%;

  resize: none;

  color: ${theme.color.white};

  ::placeholder {
    ${theme.font.body1};
    color: ${theme.color.gray1};
  }
`;

export const countStyle = css`
  display: flex;
  position: absolute;

  right: 1.5rem;
  bottom: 1.2rem;

  ${theme.font.body3};
  color: ${theme.color.gray1};

  & > p {
    ${theme.font.body3}
  }
`;
