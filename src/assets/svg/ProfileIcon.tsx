import * as React from "react";
import type { SVGProps } from "react";
const SvgProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 23 22"
    {...props}
  >
    <ellipse cx={14.351} cy={5.083} fill="#697B96" rx={4.676} ry={4.592} />
    <path
      fill="#697B96"
      d="M5.964 14.783c0-1.974 1.6-3.575 3.575-3.575h9.624c1.974 0 3.575 1.6 3.575 3.575v3.729H5.964z"
    />
    <ellipse
      cx={9.675}
      cy={7.081}
      fill="#2B3340"
      stroke="#fff"
      strokeWidth={1.287}
      rx={4.676}
      ry={4.592}
    />
    <path
      fill="#2B3340"
      stroke="#fff"
      strokeWidth={1.287}
      d="M1.288 16.782c0-1.975 1.6-3.575 3.575-3.575h9.624c1.974 0 3.574 1.6 3.574 3.575v3.728H1.288z"
    />
  </svg>
);
export default SvgProfileIcon;
