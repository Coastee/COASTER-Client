import type { ButtonHTMLAttributes } from "react";

import { buttonStyle, variantStyles } from "./Button.style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text" | "sorting";
}

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  return (
    <button type="button" css={[buttonStyle, variantStyles[variant]]} {...props}>
      {children}
    </button>
  );
};

export default Button;
