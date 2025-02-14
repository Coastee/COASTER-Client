import * as s from "@/components/Input/Input.styles";
import SupportingText from "@/components/SupportingText/SupportingText";
import { theme } from "@/styles/theme/theme";
import {
  type ForwardedRef,
  type InputHTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  maxLength?: number;
  supportingText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isError = false,
      leftIcon,
      rightIcon,
      placeholder,
      id,
      value,
      maxLength,
      supportingText,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div css={s.layoutStyle(!!supportingText && isError)}>
        <div css={s.wrapperStyle(!!leftIcon, !!rightIcon, isError)}>
          {leftIcon}
          <input
            css={s.inputStyle}
            placeholder={placeholder}
            id={id}
            ref={ref}
            value={value}
            tabIndex={0}
            {...props}
          />
          <div css={{ cursor: "pointer" }}>{rightIcon}</div>
          {maxLength && (
            <div css={s.countStyle}>
              <p css={{ color: `${theme.color.primaryBlue2}` }}>
                {value ? value.toString().length : 0}
              </p>
              / {maxLength}
            </div>
          )}
        </div>
        {isError && supportingText && (
          <SupportingText>{supportingText}</SupportingText>
        )}
      </div>
    );
  }
);

export default Input;
