import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const listContainerStyle = css`
  width: 100%;
  min-width: 35rem;

  padding: 0.4rem 0.3rem;

  border-radius: 10px;
  background: ${theme.color.dark3};
`;

export const listItemStyle = css`
  display: flex;

  justify-content: space-between;

  row-gap: 0.8rem;
  padding: 0.8rem 1.8rem;

  width: 100%;

  cursor: pointer;
`;

export const infoLayoutStyle = css`
  display: flex;

  flex-direction: column;
  justify-content: center;

  padding-right: 1.8rem;

  row-gap: 0.4rem;
`;

export const textLayoutStyle = css`
  display: flex;

  align-items: center;

  gap: 0.9rem;
`;

export const listTitleStyle = css`
  display: -webkit-box;

  ${theme.font.body1};
  color: ${theme.color.white};
  font-weight: 500;

  overflow: hidden;

  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const listUsersStyle = css`
  ${theme.font.body2};
  color: ${theme.color.gray1};
  font-weight: 400;

  white-space: nowrap;
`;

export const listDescStyle = css`
  display: -webkit-box;

  padding: 0 1.8rem 0 3.2rem;

  overflow: hidden;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  ${theme.font.body2};
  color: ${theme.color.gray1};
  font-weight: 400;
`;

export const circle = css`
  width: 0.4rem;
  min-width: 0.4rem;
  height: 0.4rem;

  border-radius: 50%;

  background-color: #d9d9d9;
`;

export const thumbnailImgStyle = css`
  width: 7.6rem;
  height: 7.6rem;

  flex-shrink: 0;

  overflow: hidden;

  object-fit: cover;

  border-radius: 10px;
`;

export const DividerStyle = css`
  padding: 0.5rem 1.3rem;

  hr {
    background-color: #414e5f;
  }
`;
