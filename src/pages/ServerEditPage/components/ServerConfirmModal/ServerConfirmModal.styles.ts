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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 2.8rem 1.3rem 0 1.3rem;

  width: 38.6rem;
  height: 17rem;

  border-radius: 10px;

  background-color: ${theme.color.dark3};
`;

export const titleStyle = css`
  padding-bottom: 1.4rem;

  ${theme.font.body1};
  font-weight: 400;
  text-align: center;
`;

export const serverNameStyle = css`
  margin-bottom: 2rem;
  padding: 0.6rem 1.1rem;

  width: fit-content;

  border: 1px solid ${theme.color.dark2};
  border-radius: 1rem;

  ${theme.font.body2}
  font-weight: 400;
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

export const addBtnStyle = (modalType: string) => css`
  color: ${modalType === "server-enter" ? theme.color.primaryBlue1 : theme.color.primaryPink1};
`;
