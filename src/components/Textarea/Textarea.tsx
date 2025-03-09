import SupportingText from "@/components/SupportingText/SupportingText";
import * as s from "@/components/Textarea/Textarea.styles";
import { theme } from "@/styles/theme/theme";
import {
  type ForwardedRef,
  type TextareaHTMLAttributes,
  forwardRef,
} from "react";
import { inputStyle } from "../Input/Input.styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "primary" | "secondary";
  isError?: boolean;
  supportingText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = "primary",
      isError = false,
      placeholder,
      id,
      value = "",
      supportingText,
      maxLength,
      onChange,
      ...props
    }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div css={s.layoutStyle(!!supportingText && isError)}>
        <div css={s.wrapperStyle(variant, isError)}>
          <textarea
            css={[inputStyle, s.textareaStyle]}
            placeholder={placeholder}
            id={id}
            ref={ref}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            tabIndex={0}
            {...props}
          />
          {maxLength && (
            <div css={s.countStyle}>
              <p css={{ color: `${theme.color.primaryBlue2}` }}>
                {value.toString().length}
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

export default Textarea;
