import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = (size: "medium" | "large") => css`
  display: flex;
  width: ${size === "large" ? "5.4rem" : "4.3rem"};
  height: ${size === "large" ? "5.4rem" : "4.3rem"};

  padding: 1rem;

  justify-content: center;
  align-items: center;

  border: 1px solid ${theme.color.dark1};
  border-radius: 1rem;

  background-color: ${theme.color.dark3};

  ${size === "large" ? theme.font.title2 : theme.font.title4};
  font-weight: 400;
`;
