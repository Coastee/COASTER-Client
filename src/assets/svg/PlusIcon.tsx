import * as React from "react";
import type { SVGProps } from "react";
const SvgPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="#B6CBFF" strokeLinecap="round" strokeWidth={3}>
      <path d="M1.625 12.178h20M11.625 2.178v20" />
    </g>
  </svg>
);
export default SvgPlusIcon;
