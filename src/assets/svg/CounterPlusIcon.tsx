import * as React from "react";
import type { SVGProps } from "react";
const SvgCounterPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <circle cx={17.384} cy={16.936} r={16.5} fill="#6B8AFD" />
    <g stroke="#F6F6F6" strokeLinecap="round" strokeWidth={1.5}>
      <path d="M12.384 16.936h10M17.384 11.936v10" />
    </g>
  </svg>
);
export default SvgCounterPlusIcon;
