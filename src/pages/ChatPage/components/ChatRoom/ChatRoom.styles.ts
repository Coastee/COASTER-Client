import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = (isOpen: boolean) => css`
  display: flex;

  max-width: calc(144rem - 33.5rem);
  width: 100%;
  height: 100vh;

  padding: ${isOpen ? "5.3rem 5rem 4.2rem" : "5.3rem 5rem 4.2rem"};

  flex-direction: column;

  z-index: 1;

  border-radius: 2.5rem 0 0 2.5rem;

  background-color: ${theme.color.dark3};
`;

export const headerLayoutStyle = css`
  display: flex;

  justify-content: space-between;
  align-items: center;

  gap: 1rem;

  margin-bottom: 2rem;
`;

export const titleLayoutStyle = css`
  display: flex;

  align-items: center;
  gap: 1.9rem;

  white-space: nowrap;
`;

export const titleStyle = css`
  ${theme.font.title2};
`;

export const timeStyle = css`
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 0.6rem 1.4rem;

  border: 1px solid #3f4b5d;
  border-radius: 0.6rem;

  ${theme.font.body1};
  font-weight: 400;
  color: ${theme.color.gray1};
`;

export const timeNoticeStyle = (bgImg: string) => css`
  display: flex;

  align-items: center;

  gap: 1.8rem;

  padding: 3rem;
  margin-bottom: 1rem;

  width: 100%;
  height: 9rem;

  border-radius: 1rem;

  background-image: url("${bgImg}");
  background-size: cover;
  background-position: center;
`;

export const timeNoticeTextStyle = css`
  display: flex;
  flex-direction: column;

  gap: 0.3rem;

  h1,
  p {
    ${theme.font.body1};
    font-weight: 400;
    white-space: nowrap;

    & span {
      ${theme.font.body1};
      font-weight: 600;
      white-space: nowrap;
    }
  }
`;

export const scrollStyle = css`
  display: flex;
  flex-direction: column;

  gap: 2.5rem;

  height: calc(100vh - 22rem);

  overflow-y: scroll;
  scroll-behavior: smooth;

  padding-bottom: 7rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const layoutStyle = (isUser: boolean) => css`
  display: flex;

  justify-content: ${isUser ? "flex-end" : "flex-start"};
  gap: 1.3rem;
`;

export const nameBoxStyle = (isUser: boolean) => css`
  display: flex;

  justify-content: ${isUser ? "flex-end" : "flex-start"};
  align-items: center;
  gap: 0.6rem;

  ${theme.font.body1};
`;

export const iconStyle = css`
  padding: 1rem;

  box-sizing: content-box;

  cursor: pointer;
`;
