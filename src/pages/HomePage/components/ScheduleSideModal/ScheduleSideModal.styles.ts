import { scrollDarkStyle } from "@/styles/scrollStyle";
import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const titleChildrenStyle = css`
  display: flex;

  align-items: center;
  gap: 1.8rem;

  padding-bottom: 0.6rem;

  h1 {
    max-width: 40rem;

    ${theme.font.title2};
  }

  span {
    padding-top: 0.6rem;

    ${theme.font.body1};
    font-weight: 400;
    color: ${theme.color.gray2};
  }
`;

export const sortingStyle = css`
  position: absolute;
  top: 11rem;
  right: 7rem;
  display: flex;

  flex-direction: column;
  align-items: end;

  margin-left: auto;

  button {
    padding: 1.3rem 1rem 0.7rem 1rem;
  }
`;

export const contentStyle = css`
  display: flex;

  flex-direction: column;
  row-gap: 1rem;

  padding-top: 2.2rem;

  height: calc(100vh - 14.1rem);

  border-top: 1px solid ${theme.color.dark2};

  overflow-y: scroll;
  ${scrollDarkStyle}
`;
