import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

import profileMenuBg from "@/assets/img/menuWrapperImg.png";

export const layoutStyle = css`
  display: flex;
  flex-direction: column;

  height: 100dvh;

  padding: 4.9rem 0;

  background-color: ${theme.color.dark3};
`;

export const wrapperStyle = (isOpen: boolean) => css`
  position: sticky;
  display: flex;
  top: 0;
  right: ${isOpen ? "0" : "-27.9rem"};

  min-width: 27.9rem;
  height: calc(100vh - 9.8rem);

  padding: 0 6.4rem 0 2.5rem;

  flex-direction: column;
  gap: 1.3rem;

  border-left: 1px solid #455163;

  background-color: ${theme.color.dark3};

  z-index: 3;
  transition: all 0.4s ease-in-out;
`;

export const closeNavIconWrapperStyle = css`
  display: flex;

  align-items: center;
  gap: 1.8rem;

  padding: 0.5rem;

  cursor: pointer;

  & > p {
    ${theme.font.body1};
    font-weight: 400;
  }
`;

export const titleLayoutStyle = css`
  display: flex;

  align-items: center;
  gap: 1.8rem;

  margin-top: 1.6rem;

  & > h1 {
    ${theme.font.body1};
    font-weight: 500;
  }
`;

export const listWrapperStyle = css`
  display: flex;

  padding: 0.5rem;
  flex-direction: column;

  min-width: 18rem;

  border-radius: 0.8rem;

  background-color: #404A58;

  cursor: pointer;
`;

export const listStyle = css`
  display: flex;
  flex-direction: column;


  background-color: #404A58;

  border-radius: 0.8rem;
`;

export const itemWrapperStyle = css`
  display: flex;
  position: relative;

  flex-direction: column;

  padding: 0 0.3rem;

  background-color: #404A58;
`;

export const itemStyle = css`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  height: 5rem;

  padding: 0.5rem 0.6rem;

  border-radius: 0.8rem;

  background-color: #404A58;

  white-space: nowrap;

  & > p {
    ${theme.font.body2};
    font-weight: 400;

    color: ${theme.color.white};
  }

  &:hover {
    background-color: ${theme.color.dark3};

    transition: all 0.2s ease-in-out;

    & > p {
      font-weight: 700;
    }
  }

  &:active {
    background-color: ${theme.color.dark4};

    transition: all 0.1s ease-in-out;
  }
`;

export const exitRoomWrapperStyle = css`
  display: flex;

  height: 100dvh;

  flex-direction: column;
  align-items: end;
  justify-content: end;

  gap: 1.8rem;

  cursor: pointer;

  & > p {
    ${theme.font.body3};
    font-weight: 400;
  }
`;

export const profileMenuWrapperStyle = css`
  position: absolute;

  right: 5%;
  top: 80%;

  width: 21.8rem;
  height: 22.5rem;

  background-image: url(${profileMenuBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 21.8rem 19.4rem;

  border-radius: 1rem;

  z-index: 999;
`;
