import * as React from "react";
import type { SVGProps } from "react";
const SvgProfileMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 35 35"
    {...props}
  >
    <circle cx={17.125} cy={17.694} r={17.079} fill="#6B8AFD" />
    <ellipse cx={17.123} cy={14.635} fill="#B6CBFF" rx={6.097} ry={5.987} />
    <path
      fill="#B6CBFF"
      fillRule="evenodd"
      d="M8.372 32.363v-4.682a5.15 5.15 0 0 1 5.148-5.148h7.208a5.15 5.15 0 0 1 5.148 5.148v4.683a17 17 0 0 1-8.752 2.41 17 17 0 0 1-8.752-2.41"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProfileMenuIcon;
