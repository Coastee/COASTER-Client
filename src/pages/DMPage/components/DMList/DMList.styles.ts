import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const sectionStyle = css`
  width: 100%;
  max-width: 46.6rem;
  height: 100vh;

  padding: 0 3.3rem 3.3rem 1.6rem;

  background-color: ${theme.color.dark4};

  overflow-y: auto;
`;

export const headerStyle = css`
  position: fixed;
  display: flex;

  top: 0;

  width: 100%;

  padding-top: 2.8rem;

  flex-direction: column;
  gap: 1.7rem;

  background-color: ${theme.color.dark4};

  & > h1 {
    ${theme.font.title2}
  }
`;

export const listWrapperStyle = css`
  display: flex;

  margin-top: 18rem;

  flex-direction: column;
  gap: 2.9rem;

  overflow-y: hidden;
`;
