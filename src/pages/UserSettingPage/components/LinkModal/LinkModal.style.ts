import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const backgroundStyle = css`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const modalStyle = css`
  position: fixed;
  display: flex;
  flex-direction: column;

  padding: 2.8rem 1.3rem 0 1.3rem;
  border-radius: 10px;

  width: 38.6rem;
  height: 17rem;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  gap: 1.5rem;

  background-color: ${theme.color.dark3};
`;

export const titleStyle = css`
  ${theme.font.body1};
  font-weight: 400;

  text-align: center;
`;

export const linkInputLayoutStyle = css`
  display: flex;

  padding: 0 2.9rem;

  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const inputWrapperStyle = css`
  position: relative;
  display: flex;

  width: 100%;
  height: 3.3rem;

  padding: 0.8rem 1.2rem;

  align-items: center;

  border-radius: 7px;
  box-shadow: inset 0 0 0 1px ${theme.color.dark2};

  background-color: #2d3643;


  transition: 0.2s ease-in-out;

  :focus-within {
    box-shadow: inset 0 0 0 1px ${theme.color.primaryBlue3};
  }
`;

export const inputStyle = css`
  display: flex;

  width: 100%;

  align-items: center;

  border: none;

  color: ${theme.color.white};
  background-color: transparent;

  ${theme.font.body1};

  outline: none;
`;

export const buttonLayout = css`
  display: flex;

  justify-content: space-between;

  border-top: 1px solid ${theme.color.dark2};

  & > button {
    padding: 1.8rem 6.7rem;

    ${theme.font.body1};
  }
`;

export const cancelBtnStyle = css`
  color: ${theme.color.gray2};
`;

export const addBtnStyle = css`
  color: ${theme.color.primaryBlue1};
`;

export const otherIconStyle = css`
  color: ${theme.color.gray2};

  width: 3.3rem;
  height: 3.3rem;
`;
