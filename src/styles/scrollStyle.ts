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
