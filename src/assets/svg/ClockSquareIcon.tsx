import * as React from "react";
import type { SVGProps } from "react";
const SvgClockSquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 27 27"
    {...props}
  >
    <rect width={26} height={26} x={0.615} y={0.887} fill="#6B8AFD" rx={7} />
    <circle cx={13.616} cy={13.847} r={7} fill="#D9D9D9" />
    <circle cx={13.616} cy={13.847} r={6} fill="#fff" />
    <path stroke="#B9B9B9" d="M13.522 9.597v4.681h2.942" />
  </svg>
);
export default SvgClockSquareIcon;
