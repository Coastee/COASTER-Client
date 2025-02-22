import * as React from "react";
import type { SVGProps } from "react";
const SvgFlagSquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 27 27"
    {...props}
  >
    <rect width={26} height={26} x={0.615} y={0.471} fill="#6B8AFD" rx={7} />
    <path fill="#fff" d="M8.482 6.874h12.132v7.5H8.482z" />
    <path fill="#CACACA" d="M6.616 5.971h1.867v15H6.616z" />
  </svg>
);
export default SvgFlagSquareIcon;
