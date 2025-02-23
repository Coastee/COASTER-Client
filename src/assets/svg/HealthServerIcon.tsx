import * as React from "react";
import type { SVGProps } from "react";
const SvgHealthServerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 27"
    {...props}
  >
    <g stroke="#fff" strokeWidth={1.5}>
      <rect
        width={13}
        height={24}
        x={14.625}
        y={25.734}
        fill="#6B8AFD"
        rx={6.5}
        transform="rotate(-180 14.625 25.734)"
      />
      <path fill="#fff" d="M14.625 13.734h-13v-5.5a6.5 6.5 0 1 1 13 0z" />
    </g>
  </svg>
);
export default SvgHealthServerIcon;
