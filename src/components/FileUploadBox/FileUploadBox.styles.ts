import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

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

  border-radius: 1rem;
  border: 1px solid ${theme.color.dark1};

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
