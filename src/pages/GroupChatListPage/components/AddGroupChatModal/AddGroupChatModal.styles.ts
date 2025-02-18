import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const modalContentStyle = css`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  height: calc(100vh - 14.1rem);
`;

export const contentListStyle = css`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  row-gap: 2.5rem;

  padding-top: 3rem;
`;

export const questionContainer = css`
  display: flex;

  flex-direction: column;

  row-gap: 1.3rem;

  ${theme.font.body2};
`;

export const textareaTitleStyle = css`
  ${theme.font.body1};
  font-weight: 500;

  span {
    margin-left: 0.6rem;

    ${theme.font.body3};
    font-weight: 400;
    color: ${theme.color.gray2};
  }
`;

export const hashtagListContainer = css`
  display: flex;
  flex-wrap: wrap;

  gap: 0.8rem;

  padding: 0.5rem 0;
`;

export const fileButtonStyle = css`
  display: flex;

  align-items: center;

  padding: 1.6rem;

  width: 100%;
  max-width: 35rem;

  ${theme.font.body2};
  font-weight: 400;
  color: ${theme.color.gray2};
  text-decoration-line: underline;
  text-underline-position: from-font;

  border-radius: 10px;
  border: 1px solid ${theme.color.dark1};

  background-color: transparent;
  background-color: #2d3643;

  transition: 0.3s ease-in-out;

  cursor: pointer;
`;

export const editButtonListStyle = css`
  display: flex;

  justify-content: flex-end;

  gap: 1.6rem;
`;

export const buttonContainer = css`
  display: flex;

  justify-content: flex-end;
`;

export const addHashtagStyle = (fontWidth: number) => css`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 0.8rem;

  width: ${fontWidth && fontWidth > 90
    ? Math.floor(fontWidth)
    : 90}px !important;

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
  visibility: hidden;

  display: inline-block;

  padding: 0.8rem 1.7rem;

  width: max-content;
  ${theme.font.body2};
  font-weight: 400;
`;
