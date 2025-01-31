import * as s from "@/components/SupportingText/SupportingText.style";
import type { ComponentPropsWithRef } from "react";

type SupportingTextType = ComponentPropsWithRef<"p">;

const SupportingText = ({ children, ...props }: SupportingTextType) => {
  return (
    <p css={s.supportingTextStyle} {...props}>
      {children}
    </p>
  );
};

export default SupportingText;
