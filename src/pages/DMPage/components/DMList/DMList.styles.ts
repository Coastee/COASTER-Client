import { scrollStyle } from "@/styles/scrollStyle";
import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const sectionStyle = css`
  width: 100%;
  max-width: 46rem;
  height: 100vh;

  padding: 0 2.3rem 3.3rem 1.6rem;

  background-color: ${theme.color.dark4};
`;

export const headerStyle = css`
  display: flex;

  top: 0;

  padding: 2.8rem 0 0 1.2rem;

  flex-direction: column;
  gap: 1.7rem;

  background-color: ${theme.color.dark4};

  & > h1 {
    ${theme.font.title2}
  }
`;

export const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  padding-right: 1rem;
  margin-top: 3rem;

  max-height: calc(100vh - 19rem);
  overflow-y: auto;

  ${scrollStyle}

  ::-webkit-scrollbar-thumb {
    background: ${theme.color.dark2};
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;
