import { theme } from "@/styles/theme/theme";
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

export const iconStyle = css`
  position: relative;

  display: flex;

  & > p {
    position: absolute;
    top: 3.2rem;
    left: 50%;
    transform: translateX(-42%);

    ${theme.font.body3};
    font-weight: 400;
    white-space: nowrap;
  }
`;
