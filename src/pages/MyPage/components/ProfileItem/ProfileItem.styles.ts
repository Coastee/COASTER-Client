import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;

  padding: 0 0 2rem 0;

  flex-direction: column;
  gap: 1.8rem;

  cursor: pointer;
`;

export const itemWrapperStyle = css`
  display: flex;

  align-items: center;
  gap: 1.8rem;
`;

export const itemLayoutStyle = css`
  display: flex;

  flex-direction: column;
  gap: 0.3rem;
`;

export const nameStyle = css`
  ${theme.font.body1};

  white-space: nowrap;
`;

export const descLayoutStyle = css`
  display: inline-flex;

  max-width: 28rem;

  align-items: center;
  gap: 0.6rem;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const carrerStyle = css`
  color: ${theme.color.gray1};

  ${theme.font.body2};

  white-space: nowrap;
`;

export const descStyle = css`
  color: ${theme.color.gray1};

  ${theme.font.body2};

  white-space: nowrap;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const imgStyle = css`
  width: 5rem;
  height: 5rem;

  object-fit: cover;
`;

export const circleStyle = css`
  color: ${theme.color.gray1};

  ${theme.font.body2}
`;
