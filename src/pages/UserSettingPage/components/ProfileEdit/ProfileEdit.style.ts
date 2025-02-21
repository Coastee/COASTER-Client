import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const pageStyle = css`
  display: flex;

  padding: 4.2rem 3.3rem;

  flex-direction: column;
  gap: 1.7rem;

  & > h1 {
    ${theme.font.title2}
  }
`;

export const wrapperStyle = css`
  position: relative;
  display: flex;

  margin-bottom: 0.6rem;

  flex-direction: column;
`;

export const layoutStyle = css`
  display: flex;

  padding: 6.5rem 3.5rem 2.5rem;

  flex-direction: column;
  gap: 1.5rem;

  border-radius: 0 0 1rem 1rem;

  background-color: ${theme.color.dark3};
`;

export const linkLayoutStyle = css`
  display: flex;

  margin-left: auto;

  gap: 0.8rem;
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

export const fieldStyle = css`
  display: flex;

  flex-direction: column;
  align-items: start;
  gap: 0.55rem;

  &:first-child {
    max-width: 19.5rem;
  }
`;

export const boxLayoutStyle = css`
  display: flex;

  width: 100%;

  justify-content: space-between;
`;

export const gridLayoutStyle = css`
  display: grid;

  max-width: 30.5rem;
  grid-template-columns: 2.3fr 1fr;

  gap: 2.3rem;
`;

export const buttonStyle = css`
  padding: 1.1rem 1.4rem;

  border-radius: 0.7rem;

  color: ${theme.color.white};
  background-color: #4788c9;

  ${theme.font.body2};
`;

export const labelStyle = css`
  color: ${theme.color.gray2};

  ${theme.font.body2};
  font-weight: 500;
`;

export const textStyle = css`
  display: flex;

  align-items: center;

  white-space: nowrap;

  ${theme.font.body1};
  font-weight: 400;
`;

export const buttonLayout = css`
  display: flex;

  width: 100%;

  justify-content: flex-end;
  gap: 2rem;

  & > button {
    border-radius: 0.7rem;
  }
`;
