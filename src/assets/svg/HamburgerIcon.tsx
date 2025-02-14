import * as React from "react";
import type { SVGProps } from "react";
const SvgHamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 17"
    {...props}
  >
    <g stroke="#fff" strokeLinecap="round" strokeWidth={1.5}>
      <path d="M.86.961h23M.86 8.461h23M.86 15.961h23" />
    </g>
  </svg>
);
export default SvgHamburgerIcon;
