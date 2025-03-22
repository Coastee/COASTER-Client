import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const scrollStyle = css`
  ::-webkit-scrollbar {
    width: 0.6rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.color.primaryBlue2};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.color.dark2};
    border-radius: 10px;
  }

  scroll-behavior: smooth;
`;

export const scrollDarkStyle = css`
  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.color.dark2};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  scroll-behavior: smooth;
`;
