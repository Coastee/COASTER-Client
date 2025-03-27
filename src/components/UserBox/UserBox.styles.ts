import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = (size: "small" | "medium" | "large", variant: "default" | "outline") => css`
  display: flex;
  width: ${size === "large" ? "5.4rem" : size === "medium" ? "4.3rem" : "2.7rem"};
  height: ${size === "large" ? "5.4rem" : size === "medium" ? "4.3rem" : "2.7rem"};

  padding: 1rem;

  justify-content: center;
  align-items: center;

  border: 1px solid ${variant === "outline" ? theme.color.dark1 : "#2D3643"};
  border-radius: ${variant === "outline" ? "1rem" : "0.5rem"};

  background-color: ${variant === "outline" ? theme.color.dark3 : "#2D3643"};
  color: ${variant === "outline" ? theme.color.white : theme.color.primaryBlue1};

  ${size === "large" ? theme.font.title2 : size === "medium" ? theme.font.title4 : theme.font.body2};
  font-weight: 400;
`;

export const imageStyle = css`
  width: inherit;
  height: inherit;

  object-fit: cover;
  border-radius: inherit;
`;
