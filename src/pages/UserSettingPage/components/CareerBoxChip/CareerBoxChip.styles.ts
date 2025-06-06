import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  position: relative;
  display: flex;

  width: 100%;

  padding: 2rem 1.4rem;

  border-radius: 1rem;

  flex-direction: column;
  gap: 1.4rem;

  background-color: ${theme.color.dark3};
`;

export const layoutStyle = css`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 1.3rem;
`;

export const titleBoxStyle = css`
  display: flex;

  align-items: center;
  gap: 1.3rem;
`;

export const titleLayoutStyle = css`
  display: flex;

  margin-left: 1.3rem;

  gap: 1rem;
  align-items: center;
`;

export const titleStyle = css`
  font-weight: 500;
  ${theme.font.body1};

  white-space: nowrap;
`;

export const periodStyle = css`
  color: ${theme.color.gray1};

  ${theme.font.body2};

  white-space: nowrap;
`;

export const itemStyle = css`
  ${theme.font.body2};

  white-space: nowrap;
`;

export const listLayoutStyle = css`
  display: flex;

  margin-left: 2.3rem;

  flex-direction: column;
  gap: 0.8rem;
`;

export const editIconStyle = css`
  display: flex;

  padding: 0.5rem;
  margin-right: 2rem;

  flex-shrink: 0;

  box-sizing: content-box;

  cursor: pointer;
`;
