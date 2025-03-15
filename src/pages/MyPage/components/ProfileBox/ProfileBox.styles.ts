import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  position: relative;
  display: flex;

  min-width: 65rem;

  margin-bottom: 0.6rem;

  flex-direction: column;
`;

export const layoutStyle = css`
  display: flex;

  padding: 3.6rem 3.5rem 2.5rem;

  flex-direction: column;
  gap: 0.95rem;

  border-radius: 0 0 1rem 1rem;

  background-color: ${theme.color.dark3};
`;

export const linkLayoutStyle = css`
  display: flex;

  margin-left: auto;

  gap: 0.6rem;
  flex-wrap: wrap;
`;

export const linkStyle = css`
  width: 3.3rem;
  height: 3.3rem;

  border-radius: 0.8rem;

  background: ${theme.color.dark2};
`;

export const nameStyle = css`
  ${theme.font.title2};

  white-space: nowrap;
`;

export const jobLayoutStyle = css`
  display: flex;

  align-items: center;
  gap: 0.8rem;

  & > p {
    color: ${theme.color.primaryBlue0};

    ${theme.font.body1};

    white-space: nowrap;
  }
`;

export const oneLineIntroStyle = css`
  ${theme.font.body1};
`;

export const introStyle = css`
  max-width: 58rem;

  color: ${theme.color.gray1};

  ${theme.font.body2};
`;

export const profileImgStyle = css`
  position: absolute;

  top: 6.5rem;
  left: 3.5rem;

  width: 10rem;
  height: 10rem;

  border: 4px solid ${theme.color.dark3};
  border-radius: 1.2rem;

  background-color: ${theme.color.dark3};

  object-fit: cover;
`;

export const backgroundImgStyle = css`
  width: 65rem;
  height: 13rem;

  border-radius: 10px 10px 0px 0px;
`;

export const editBtnStyle = css`
  position: absolute;
  display: flex;

  right: 3.3rem;
  top: 2.4rem;

  padding: 0.6rem 1rem;

  gap: 0.8rem;

  border-radius: 0.7rem;

  background-color: rgba(43, 51, 64, 0.5);

  color: ${theme.color.white};
  ${theme.font.body3};

  &:hover {
    background-color: ${theme.color.dark2};

    transition: 0.2s ease-in-out;
  }
`;

export const rowStyle = css`
  display: flex;

  align-items: center;
  gap: 1.4rem;
`;
