import * as s from "@/components/CheckBox/Checkbox.styles";
import type { HTMLAttributes } from "react";

export interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  variant?: "square" | "round";
  isChecked: boolean;
}

const CheckBox = ({ id, variant = "square", isChecked, onChange, ...props }: CheckBoxProps) => {
  return (
    <div css={s.boxWrapperStyle[variant]}>
      <input
        type="checkbox"
        id={id}
        css={s.variantStyles[variant]}
        onChange={onChange}
        checked={isChecked}
        aria-checked={isChecked}
        {...props}
      />
    </div>
  );
};

export default CheckBox;
