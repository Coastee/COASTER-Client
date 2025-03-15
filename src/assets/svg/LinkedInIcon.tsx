import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <rect width={33} height={33} x={0.437} y={0.5} fill="#4788C9" rx={7} />
    <path fill="#fff" d="M7.187 13.25h4.5v13.5h-4.5z" />
    <circle cx={9.437} cy={9.5} r={2.25} fill="#fff" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M17.687 13.25h-4.5v13.5h4.5v-7.501c.697-2.322 2.113-2.621 3.587-2.29.798.18 1.287.953 1.287 1.77v8.021h4.125v-8.982c0-.26-.032-.524-.11-.773-1.648-5.192-7.058-4.068-8.89-1.87z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLinkedInIcon;
