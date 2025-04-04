import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const listContainerStyle = (itemsCount = 0) => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(33%, auto));

  padding: 1.3rem 0;

  box-sizing: content-box;

  border-radius: 1rem;

  background: ${theme.color.dark3};

  ${itemsCount !== undefined &&
  css`
    width: ${itemsCount === 1 ? "21.6rem" : itemsCount === 2 ? "43.2rem" : "auto"};
    min-width: ${itemsCount === 3 ? "73rem" : ""};
  `}
`;

export const listItemStyle = ({ itemCount, idx }: { itemCount: number; idx: number }) => css`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  row-gap: 1.3rem;

  padding: 0.4rem 1.6rem 0.8rem 1.6rem;

  width: 100%;

  border-right: ${itemCount > 1 && idx < itemCount - 1 ? "1px solid #414e5f" : "none"};

  cursor: pointer;
`;

export const infoLayoutStyle = css`
  display: flex;

  flex-direction: column;
  flex-shrink: 0;

  height: 8.4rem;
`;

export const titleLayoutStyle = css`
  display: flex;

  align-items: center;

  gap: 0.9rem;

  padding-bottom: 0.6rem;
`;

export const detailLayoutStyle = css`
  display: flex;

  align-items: center;

  gap: 0.7rem;

  padding-bottom: 0.9rem;
  padding-left: 0.4rem;

  white-space: nowrap;

  p:nth-of-type(4) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const detailText = css`
  color: ${theme.color.gray3};

  ${theme.font.body3};
  font-weight: 400;
`;

export const listTitleStyle = css`
  display: -webkit-box;

  overflow: hidden;

  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  ${theme.font.body1};
  color: ${theme.color.white};
  font-weight: 500;
`;

export const listUsersStyle = css`
  ${theme.font.body2};
  color: ${theme.color.gray1};
  font-weight: 400;
  white-space: nowrap;
`;

export const listDescStyle = css`
  display: -webkit-box;

  overflow: hidden;

  padding-left: 0.4rem;

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
  overflow: hidden;

  width: 100%;
  height: 100%;

  border-radius: 10px;

  object-fit: cover;
  aspect-ratio: 16 / 9;
`;

export const verticalLineStyle = css`
  padding: 0 1.3rem;

  height: 100%;

  border-left: 1px solid #414e5f;
`;
