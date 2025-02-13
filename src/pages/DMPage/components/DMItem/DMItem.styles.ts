import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const itemWrapperStyle = css`
  display: flex;

  justify-content: space-between;
  align-items: center;
  gap: 1.7rem;
`;

export const layoutStyle = css`
  display: flex;

  align-items: center;
  gap: 1.7rem;

`;

export const infoStyle = css`
  display: flex;

  flex-direction: column;
  gap: 0.7rem;

  & > h2 {
    ${theme.font.body1};
    font-weight: 500;
  }

  & > div > p {
    ${theme.font.body2};
    font-weight: 500;
  }
`;

export const contentStyle = css`
  display: flex;

  justify-content: space-around;
  align-items: center;
  gap: 0.6rem;
`;

export const messageStyle = (isRead: boolean) => css`
  max-width: 19.5rem;

  color: ${isRead ? theme.color.gray2 : theme.color.white};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const circleStyle = css`
  width: 0.4rem;
  height: 0.4rem;

  border-radius: 100%;

  background-color: ${theme.color.gray2};

`;

export const blueCircleStyle = css`
  width: 1rem;
  height: 1rem;

  border-radius: 100%;

  background-color: ${theme.color.primaryBlue2};
`;
