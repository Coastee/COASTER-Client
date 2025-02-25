import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const pageStyle = css`
  display: flex;

  padding: 0 0 5rem 3.3rem;

  width: 100%;
  height: 100vh;
  max-width: 65rem;

  flex-direction: column;

  overflow-y: auto;

  scroll-behavior: smooth;
  overflow: visible;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const fixedLayoutStyle = css`
  position: fixed;
  display: flex;

  flex-direction: column;

  width: 100%;

  padding: 4.2rem 0 1.8rem 0;

  align-items: flex-start;

  z-index: 1;

  background-color: ${theme.color.dark4};
`;

export const titleStyle = css`
  width: 100%;

  margin-bottom: 1.8rem;

  ${theme.font.title3}
`;

export const plusButtonStyle = css`
  display: flex;

  padding: 2.6rem 29.8rem;

  border-radius: 1rem;

  background-color: ${theme.color.primaryBlue2};

  & > svg {
    flex-shrink: 0;
  }

    &:hover {
      background-color: ${theme.color.primaryBlue3};

      transition: 0.15s ease-in;
      transform: scale(1.005)
    }

`;

export const listStyle = css`
 display: flex;

 padding-top: 19rem;

 flex-direction: column;
 gap: 1.3rem;

 padding-bottom: 3.3rem;
`;

export const buttonLayoutStyle = css`
  display: flex;

  justify-content: flex-end;

  & > button {
    border-radius: 0.8rem;
  }
`;
