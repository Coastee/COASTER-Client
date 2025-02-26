import * as s from "@/components/SupportingText/SupportingText.style";
import type { ComponentPropsWithRef } from "react";

interface SupportingTextProps extends ComponentPropsWithRef<"p"> {
  position?: "start" | "end";
}

const SupportingText = ({ position = "end", children, ...props }: SupportingTextProps) => {
  return (
    <p css={s.supportingTextStyle(position)} {...props}>
      {children}
    </p>
  );
};

export default SupportingText;
