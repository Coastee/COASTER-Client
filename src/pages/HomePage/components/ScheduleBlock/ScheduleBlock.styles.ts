import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const layoutStyle = css`
  display: flex;

  flex-direction: column;
  row-gap: 0.6rem;
`;

export const headerStyle = css`
  display: flex;

  align-items: center;
  gap: 0.6rem;

  h1 {
    ${theme.font.body1}
    font-weight: 500;
    color: ${theme.color.white};
  }

  p {
    ${theme.font.body2}
    font-weight: 400;
    color: ${theme.color.gray2};
  }
`;

export const statusStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0.9rem;

  border-radius: 0.7rem;
  background-color: #404a58;

  ${theme.font.body3}
  font-weight: 400;
  color: ${theme.color.primaryBlue0};
`;

export const bodyStyle = css`
  display: flex;

  gap: 1.2rem;
`;

export const verticalBoxStyle = css`
  display: flex;

  flex-direction: column;
  align-items: center;
  row-gap: 1.2rem;

  padding-top: 0.6rem;
`;

export const verticalLineStyle = css`
  width: 0.1rem;
  height: 8.6rem;

  background-color: ${theme.color.dark1};
`;

export const contentStyle = css`
  display: flex;
  flex-direction: column;
`;

export const titleStyle = css`
  display: flex;

  align-items: center;
  gap: 1rem;

  padding: 0.6rem 1.5rem 0.6rem 0;
  margin-bottom: 0.6rem;

  cursor: pointer;

  h2 {
    ${theme.font.body1}
    font-weight: 500;
    color: ${theme.color.white};
  }
`;

export const infoStyle = css`
  display: flex;
  gap: 0.6rem;
`;

export const textStyle = css`
  display: flex;

  align-items: center;
  gap: 0.6rem;

  padding: 0.5rem 1rem;

  border-radius: 0.7rem;
  border: 1px solid ${theme.color.dark2};

  p {
    ${theme.font.body2};
    font-weight: 400;
    color: ${theme.color.white};
  }
`;

export const circleStyle = css`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: ${theme.color.white};
`;
