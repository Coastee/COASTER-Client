import * as React from "react";
import type { SVGProps } from "react";
const SvgStarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      stroke="#4A6285"
      d="M6.049 1.49c.3-.92 1.603-.92 1.902 0l.845 2.601a1 1 0 0 0 .951.691h2.735c.969 0 1.371 1.24.588 1.81l-2.213 1.607a1 1 0 0 0-.363 1.118l.845 2.6c.3.922-.755 1.688-1.539 1.119l-2.212-1.608a1 1 0 0 0-1.176 0L4.2 13.036c-.784.569-1.838-.197-1.539-1.118l.845-2.601a1 1 0 0 0-.363-1.118L.93 6.59c-.783-.57-.38-1.809.588-1.809h2.735a1 1 0 0 0 .95-.69z"
    />
  </svg>
);
export default SvgStarIcon;
