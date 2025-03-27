import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  align-items: center;
  justify-content: space-between;

  padding: 4.4rem 1.8rem 2rem;

  width: 9.4rem;
  height: 100vh;

  border-radius: 0rem 2.5rem 2.5rem 0rem;

  background: ${theme.color.dark2};

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const topMenuStyle = css`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 2.2rem;
`;

export const serverListStyle = css`
  display: flex;
  flex-direction: column;

  row-gap: 1.3rem;

  width: 100%;
`;

export const serverItemStyle = css`
  aspect-ratio: 1;

  width: 100%;

  border: 1px solid ${theme.color.dark0};
  border-radius: 1rem;

  :hover {
    scale: 1.1;
    transition: scale 0.3s ease;
  }
`;

export const plusButtonStyle = css`
  padding: 1rem;

  width: 4rem;
  height: 4rem;

  :hover {
    scale: 1.2;
    transition: scale 0.1s ease;

    svg path {
      stroke: ${theme.color.white};
    }
  }
`;

export const globalMenuListStyle = css`
  width: 5.4rem;

  li:nth-of-type(1),
  li:nth-of-type(2) {
    border-bottom: 2px solid ${theme.color.dark1};
  }
`;

export const globalMenuItemStyle = css`
  padding: 1.7rem 0.5rem;

  width: 100%;

  &:nth-of-type(2) div {
    padding: 0 0.6rem 0 0.6rem;
  }

  div {
    padding: 0.5rem;
    width: 4.4rem;
    height: 4.4rem;
    cursor: pointer;
  }
`;
