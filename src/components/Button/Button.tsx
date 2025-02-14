import type { ButtonHTMLAttributes } from "react";

import { buttonStyle, sizeStyle, variantStyles } from "./Button.style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text" | "sorting" | "hashtag";
  size?: "medium" | "semiLarge" | "large";
}

const Button = ({ variant = "primary", size = "large", children, ...props }: ButtonProps) => {
  return (
    <button type="button" css={[buttonStyle, variantStyles[variant], sizeStyle[size]]} {...props}>
      {children}
    </button>
  );
};

export default Button;