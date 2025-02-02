import * as s from "@/components/CheckBox/Checkbox.styles";
import type { HTMLAttributes } from "react";

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
}

const CheckBox = ({ id, isChecked, onChange, ...props }: CheckBoxProps) => {
  return (
    <div css={s.boxWrapperStyle}>
      <input
        type="checkbox"
        id={id}
        css={s.checkboxStyle}
        onChange={onChange}
        checked={isChecked}
        aria-checked={isChecked}
        {...props}
      />
    </div>
  );
};

export default CheckBox;
