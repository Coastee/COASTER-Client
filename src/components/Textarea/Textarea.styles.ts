import { theme } from "@/styles/theme/theme";
import { type SerializedStyles, css } from "@emotion/react";

export const layoutStyle = (supportingText: boolean) => css`
  position: relative;
  width: 100%;
  margin-bottom: ${supportingText ? "1.5rem" : "0"};
`;

const commonWrapperStyles = (isError: boolean): SerializedStyles => css`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1.55rem 1.8rem;
  width: 100%;
  border-radius: 10px;
  box-shadow: inset 0 0 0 1px
    ${isError ? theme.color.primaryPink1 : theme.color.dark1};
  background-color: #2d3643;
  transition: 0.2s ease-in-out;

  :focus-within {
    box-shadow: inset 0 0 0 1px ${theme.color.primaryBlue3};
  }
`;

const commonTextareaStyles = (fontStyle: SerializedStyles): SerializedStyles => css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  ${fontStyle};
  color: ${theme.color.white};
  resize: none;

  ::placeholder {
    ${fontStyle};
    color: ${theme.color.gray1};
  }
`;

export const variantWrapperStyles = {
  default: (isError: boolean) => css`
    ${commonWrapperStyles(isError)}
  `,
  modalSingleLine: (isError: boolean) => css`
    ${commonWrapperStyles(isError)}
    padding: 1.6rem 1.8rem;
  `,
  modalMultiLine: (isError: boolean) => css`
    ${commonWrapperStyles(isError)}
  `,
};

export const variantTextareaStyles = {
  default: () => css`
    ${commonTextareaStyles(theme.font.body1)}
  `,

  modalSingleLine: () => css`
    ${commonTextareaStyles(theme.font.body2)}
    height: 1.7rem;
  `,

  modalMultiLine: () => css`
    ${commonTextareaStyles(theme.font.body2)}
    height: 12rem;
  `,
};

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
