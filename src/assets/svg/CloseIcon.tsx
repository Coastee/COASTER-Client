import * as React from "react";
import type { SVGProps } from "react";
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="m1.397 24.76 23-23m-23 0 23 23"
    />
  </svg>
);
export default SvgCloseIcon;
