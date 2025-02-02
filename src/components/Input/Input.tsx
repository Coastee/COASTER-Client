import * as s from "@/components/Input/Input.styles";
import SupportingText from "@/components/SupportingText/SupportingText";
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
        </div>
        {isError && supportingText && (
          <SupportingText>{supportingText}</SupportingText>
        )}
      </div>
    );
  }
);

export default Input;
