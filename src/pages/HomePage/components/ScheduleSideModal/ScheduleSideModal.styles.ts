import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";
import { scrollDarkStyle } from "@/styles/scrollStyle";

export const titleChildrenStyle = css`
  display: flex;

  align-items: center;
  gap: 1.8rem;

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
