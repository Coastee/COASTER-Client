import * as React from "react";
import type { SVGProps } from "react";
const SvgLeaveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 21 20"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.6}
      d="M7.516.854h12.641v17.67H7.516"
    />
    <path
      fill="#fff"
      d="M1.758 8.889a.8.8 0 0 0 0 1.6zm10.221 1.366a.8.8 0 0 0 0-1.132l-5.09-5.09a.8.8 0 1 0-1.132 1.13l4.525 4.526-4.525 4.525a.8.8 0 0 0 1.131 1.132zm-10.221.234h9.656v-1.6H1.758z"
    />
  </svg>
);
export default SvgLeaveIcon;
