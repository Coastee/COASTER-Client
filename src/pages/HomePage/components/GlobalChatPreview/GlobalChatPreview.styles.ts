import gradientBarImg from "@/assets/img/gradientBarImg.png";
import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const layoutStyle = css`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  width: 28rem;
`;

export const noticeStyle = css`
  display: flex;

  align-items: center;

  gap: 0.5rem;

  padding: 1.1rem 1.6rem;

  width: 100%;
  height: 3.6rem;
  flex-shrink: 0;

  border-radius: 1rem;

  background-image: url(${gradientBarImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  svg {
    flex-shrink: 0;
  }

  p {
    ${theme.font.body2}
    white-space: nowrap;
  }

  p:first-of-type {
    font-weight: 500;
  }

  p:last-of-type {
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

export const chatStyle = css`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  padding: 1.6rem 1.4rem;

  width: 28rem;

  border-radius: 1rem;
  background-color: ${theme.color.dark3};
`;

export const chatBarStyle = css`
  /* border: 1px solid green; */
  display: flex;

  align-items: center;

  gap: 1rem;

  button {
    ${theme.font.body2}
    font-weight: 500;

    :hover {
      scale: 1;
      background-color: ${theme.color.dark2};
      cursor: auto;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    ${theme.font.body3}
    font-weight: 400;
    color: ${theme.color.white2};
  }
`;
