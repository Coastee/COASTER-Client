import { css } from "@emotion/react";

export const hamburgerLayoutStyle = css`
  position: absolute;

  top: 8.4rem;
`;

export const extendedMenuStyle = css`
  position: relative;

  display: flex;
  flex-direction: column;

  justify-content: end;
  align-items: center;
`;

export const rectangleStyle = css`
  position: absolute;

  display: flex;

  align-items: center;

  gap: 1rem;

  padding: 0.5rem 0.8rem 0.6rem;

  svg:hover {
    scale: 1.05;
    transition: all 0.5s ease;
  }
`;
