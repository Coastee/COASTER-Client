import * as s from "@/components/Divider/Divider.style";

import type { HTMLAttributes } from "react";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: "single" | "date";
  direction?: "vertical" | "horizontal";
}

const Divider = ({ variant = "single", direction = "vertical", children, ...props }: DividerProps) => {
  return (
    <div css={s.wrapperStyle(variant)} {...props}>
      <hr css={s.dividerStyle(direction)} />
      {variant === "date" && <p css={s.childrenStyle}>{children}</p>}
      <hr css={s.dividerStyle(direction)} />
    </div>
  );
};

export default Divider;
