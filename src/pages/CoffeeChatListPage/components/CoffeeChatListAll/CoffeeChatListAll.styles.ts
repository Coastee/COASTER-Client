import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";
import * as baseStyle from "../CoffeeChatList/CoffeeChatList.styles";

export const listContainerStyle = (itemsCount?: number) => css`
  display: grid;

  box-sizing: content-box;

  border-radius: 1rem;

  grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));

  gap: 1.3rem;

  padding: 0;

  background-color: transparent;
`;

export const listItemStyle = css`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 100%;
  min-width: 21.6rem;

  cursor: pointer;
`;

export const infoLayoutStyle = css`
  ${baseStyle.infoLayoutStyle};

  padding: 1.7rem 1.5rem;

  height: 12rem;

  border-radius: 1rem;

  background: ${theme.color.dark3};
`;

export const titleLayoutStyle = css`
  ${baseStyle.titleLayoutStyle};
`;

export const detailLayoutStyle = css`
  ${baseStyle.detailLayoutStyle};
`;

export const detailText = css`
  ${baseStyle.detailText};
`;

export const listTitleStyle = css`
  ${baseStyle.listTitleStyle};
`;

export const listUsersStyle = css`
  ${baseStyle.listUsersStyle};
`;

export const listDescStyle = css`
  ${baseStyle.listDescStyle};
`;

export const circle = css`
  ${baseStyle.circle};
`;

export const thumbnailImgStyle = css`
  ${baseStyle.thumbnailImgStyle};
`;

export const verticalLineStyle = css`
  ${baseStyle.verticalLineStyle};
`;
