import * as React from "react";
import type { SVGProps } from "react";
const SvgFaviconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 29 29"
    {...props}
  >
    <rect width={28} height={28} x={0.619} y={0.524} fill="#1D2229" rx={8} />
    <path stroke="#3D66FF" strokeWidth={1.5} d="M13.754 6.524a8 8 0 1 1 0 16" />
    <path
      stroke="#6B8AFD"
      strokeWidth={1.5}
      d="M12.501 6.525c-2.771 0-5.018 2.638-5.018 5.894 0 3.255 2.247 5.894 5.018 5.894"
    />
    <path
      stroke="#B6CBFF"
      strokeWidth={1.5}
      d="M13.715 18.313h.5a4.53 4.53 0 0 0 4.533-4.533"
    />
  </svg>
);
export default SvgFaviconIcon;
