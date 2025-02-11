import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const listWrapperStyle = (isMarked: boolean) => css`
  display: flex;

  width: 16.8rem;

  padding: 1rem 0.9rem;

  justify-content: space-between;
  gap: 0.7rem;

  border-radius: 0.5rem;

  background-color: ${theme.color.dark3};

  cursor: pointer;

  :hover {
    background-color: ${theme.color.dark2};

    transition: 0.2s ease-in;
  }

  svg {
    :nth-child(2) {
      path {
        fill: ${isMarked ? theme.color.primaryBlue2 : "transparent"};
        stroke: ${isMarked ? theme.color.primaryBlue2 : theme.color.dark1}
      }
    }
  }
`;

export const layoutStyle = css`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  word-break: keep-all;

  ${theme.font.body2}
`;
