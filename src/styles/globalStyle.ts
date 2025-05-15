import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const globalStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");

  :root {
    overflow: auto;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-size: 62.5%;
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  html,
  body {
    color: ${theme.color.white};
    background-color: ${theme.color.dark4};
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
