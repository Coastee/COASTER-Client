import * as s from "@/components/Textarea/Textarea.styles";
import { theme } from "@/styles/theme/theme";
import {
  type ForwardedRef,
  type TextareaHTMLAttributes,
  forwardRef,
} from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
  variant?: "default" | "modalSingleLine" | "modalMultiLine";
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      isError = false,
      placeholder,
      id,
      value = "",
      maxLength,
      onChange = () => {},
      variant = "default",
      ...props
    }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div css={s.variantWrapperStyles[variant](isError)}>
        <textarea
          css={s.variantTextareaStyles[variant]}
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
    );
  }
);

export default Textarea;
