import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const pageStyle = css`
  padding: 4.2rem 3.3rem;
`;

export const titleStyle = css`
  margin-bottom: 1.8rem;

  ${theme.font.title2}
`;

export const formStyle = css`
  display: flex;

  width: 100%;
  min-width: 65rem;

  padding: 2.3rem 3.1rem;
  margin-bottom: 2.5rem;

  flex-direction: column;
  gap: 1.6rem;

  border-radius: 1rem;

  background-color: ${theme.color.dark3};
`;

export const fieldStyle = css`
  display: flex;

  flex-direction: column;

  gap: 0.5rem;
`;

export const labelStyle = css`
  display: flex;
  align-items: center;

  color: ${theme.color.gray2};
  ${theme.font.body2};

  white-space: nowrap;
`;

export const lengthStyle = css`
  ${labelStyle}

  color: ${theme.color.primaryBlue2};
`;

export const datePickerStyle = css`
  display: flex;

  gap: 0.8rem;

& > p {
  display: flex;
  align-items: center;

  white-space: nowrap;

  color: ${theme.color.gray2};
  ${theme.font.body2};
}
`;

export const checkboxStyle = css`
  display: flex;

  margin-right: 12rem;

  align-items: center;
  gap: 1.3rem;

  & > div {
    margin: 3rem 0 0 2rem;
  }
`;

export const iconStyle = css`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  & > svg {
    padding: 1rem;

    box-sizing: content-box;

    cursor: pointer;
  }
`;

export const buttonLayoutStyle = css`
  display: flex;

  justify-content: flex-end;
  gap: 2rem;
`;
