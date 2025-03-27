import * as React from "react";
import type { SVGProps } from "react";
const SvgXIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <rect width={33} height={33} x={0.035} y={0.446} fill="#000" rx={7} />
    <path
      fill="#fff"
      d="m6.229 7.127 7.997 10.832-8.048 8.807H7.99l7.046-7.71 5.692 7.71h6.164l-8.447-11.441 7.49-8.198h-1.811l-6.489 7.101-5.243-7.101zm2.663 1.352h2.832l12.504 16.935h-2.832z"
    />
  </svg>
);
export default SvgXIcon;
