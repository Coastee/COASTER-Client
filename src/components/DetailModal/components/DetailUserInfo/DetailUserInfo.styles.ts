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

export const contentStyle = css`
  display: flex;
  flex-direction: column;

  height: calc(100vh - 14.1rem);
`;

export const userStyle = css`
  display: flex;

  align-items: center;

  gap: 1.3rem;

  padding: 1.3rem 0 2.4rem 0;
`;

export const userInfoTopStyle = css`
  display: flex;

  align-items: center;

  gap: 0.6rem;

  h1 {
    ${theme.font.body1}
    font-weight: 500;
  }

  div {
    display: flex;

    justify-content: center;
    align-items: center;

    padding: 0.2rem 0.8rem;

    border-radius: 0.6rem;

    background-color: #404a58;

    ${theme.font.body2}
    font-weight: 400;
    color: ${theme.color.gray1};
  }
`;

export const userInfoBottomStyle = css`
  display: flex;

  align-items: center;

  gap: 1rem;

  p {
    ${theme.font.body2};
    font-weight: 400;
    color: ${theme.color.gray1};
  }

  div {
    width: 0.3rem;
    height: 0.3rem;

    border-radius: 100%;

    background-color: ${theme.color.gray1};
  }
`;

export const imageStyle = css`
  width: 43.2rem;
  height: 26rem;

  border-radius: 1rem;

  flex-shrink: 0;

  object-fit: cover;
`;

export const hashTagListStyle = css`
  display: flex;
  flex-wrap: wrap;

  gap: 0.8rem;

  padding: 1.4rem 0;
`;

export const descriptionStyle = css`
  /* border: 1px solid red; */
  width: 48rem;
  min-height: 14rem;

  padding: 2.2rem 2.5rem;

  border-radius: 1rem;
  background-color: #404a58;

  p {
    ${theme.font.body1};
    color: ${theme.color.white2};
    font-weight: 400;
    line-height: 1.5;
  }
`;
