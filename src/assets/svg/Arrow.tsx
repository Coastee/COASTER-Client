import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 9 14"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m1.022 12.971 6-6-6-6"
    />
  </svg>
);
export default SvgArrow;
