import * as React from "react";
import type { SVGProps } from "react";
const SvgReturnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 8"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="m12.125 1-5.5 5-5.5-5"
    />
  </svg>
);
export default SvgReturnIcon;
