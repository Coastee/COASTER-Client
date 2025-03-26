import { scrollStyle } from "@/styles/scrollStyle";
import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const sectionStyle = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  align-items: center;

  padding: 4.2rem 3.3rem;

  gap: 1rem;

  width: 24.8rem;
  height: 100vh;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const nameStyle = css`
  align-self: baseline;

  margin-bottom: 1.5rem;

  ${theme.font.title3};
  font-weight: 500;
`;

export const titleStyle = css`
  align-self: baseline;

  ${theme.font.body1};
  font-weight: 500;
`;

export const listStyle = css`
  max-height: 20rem;

  padding: 0.5rem 0.6rem;

  border-radius: 1rem;

  background-color: ${theme.color.dark3};

  overflow-y: auto;

  ${scrollStyle}
`;

export const listWrapperStyle = css`
  padding: 0.5rem 0.6rem;

  border-radius: 1rem;

  background-color: ${theme.color.dark3};
`;
