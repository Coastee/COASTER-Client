import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const containerStyle = (iconOnly: boolean) => css`
  display: flex;
  flex-direction: column;

  gap: ${iconOnly ? "2rem" : "1.8rem"};

  padding: ${iconOnly ? "4.4rem 1.8rem" : "2.8rem 3.4rem"};

  width: ${iconOnly ? "9.3rem" : "23.2rem"};
  height: 100vh;

  border-radius: 0 2.5rem 2.5rem 0;

  background-color: ${theme.color.dark3};

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const menuListStyle = css`
  display: flex;
  flex-direction: column;

  align-items: baseline;

  gap: 1.4rem;

  width: 100%;
`;

export const menuItemStyle = (iconOnly: boolean) => css`
  display: flex;

  align-items: center;

  gap: 1.4rem;

  padding: ${iconOnly ? "1.5rem 1.7rem" : "1.8rem 2rem"};

  width: 100%;
  height: 5rem;

  border: 1px solid ${theme.color.dark1};
  border-radius: 1rem;

  transition: border-color 0.3s ease, background-color 0.3s ease;

  svg {
    height: 100%;

    path {
      fill: ${theme.color.primaryBlue1};
      transition: fill 0.3s ease;
    }
  }

  span {
    margin: 0;
    padding: 0;

    ${theme.font.body1};
    font-weight: 500;
    color: ${theme.color.white};
  }

  :hover {
    border-color: ${theme.color.primaryBlue2};

    background-color: ${theme.color.primaryBlue2};

    scale: 1.05;

    svg path {
      fill: ${theme.color.white};
    }
  }
`;

export const activeMenuItemStyle = css`
  border-color: ${theme.color.primaryBlue2};

  background-color: ${theme.color.primaryBlue2};

  svg path {
    fill: ${theme.color.white};
  }

  span {
    color: ${theme.color.white};
  }
`;
