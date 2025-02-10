import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;

  width: 100%;
  max-width: 65rem;

  padding: 2.7rem 1.4rem;

  border-radius: 1rem;

  flex-direction: column;
  gap: 1.4rem;

  background-color: ${theme.color.dark3};
`;

export const layoutStyle = css`
  display: flex;

  align-items: center;
  gap: 1.3rem;
`;

export const titleStyle = css`
  font-weight: 500;
  ${theme.font.body1};
`;

export const periodStyle = css`
  color: ${theme.color.gray1};

  ${theme.font.body2};
`;

export const itemStyle = css`
  ${theme.font.body2};
`;

export const listLayoutStyle = css`
  display: flex;

  margin-left: 2.3rem;

  flex-direction: column;
  gap: 0.8rem;
`;
