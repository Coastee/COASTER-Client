import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

import * as baseStyle from "../GroupChatList/GroupChatList.styles";

export const listContainerStyle = (itemsCount: number) => css`
  ${baseStyle.listContainerStyle};

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  row-gap: 1.2rem;
  column-gap: 1.2rem;

  border-radius: 0;

  background-color: transparent;

  ${itemsCount === 1 &&
  css`
    grid-template-columns: repeat(1, 1fr);
  `}

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const listItemStyle = css`
  ${baseStyle.listItemStyle};

  padding: 0;
`;

export const infoLayoutStyle = css`
  ${baseStyle.infoLayoutStyle};

  padding: 0 1.8rem;

  width: 100%;

  border-radius: 1rem;

  background: ${theme.color.dark3};
`;

export const textLayoutStyle = css`
  ${baseStyle.textLayoutStyle};

  gap: 1rem;
`;

export const listTitleStyle = css`
  ${baseStyle.listTitleStyle};
`;

export const listUsersStyle = css`
  ${baseStyle.listUsersStyle};
`;

export const listDescStyle = css`
  ${baseStyle.listDescStyle};

  padding: 0 0 0 3rem;
`;

export const circle = css`
  ${baseStyle.circle};
`;

export const thumbnailImgStyle = css`
  ${baseStyle.thumbnailImgStyle};
  width: 9.8rem;
  height: 9.8rem;
`;
