import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const timeWrapperStyle = (size: "medium" | "large") => css`
  display: flex;

  width: fit-content;
  height: fit-content;

  padding: ${size === "medium" ? "0.2rem 0.8rem" : "0.6rem 1.4rem"};

  justify-content: center;
  align-items: center;

  border: 1px solid ${theme.color.dark2};
  border-radius: 0.6rem;

  color: ${theme.color.gray1};

  white-space: nowrap;

  ${size === "medium" ? theme.font.body3 : theme.font.body1};
`;
