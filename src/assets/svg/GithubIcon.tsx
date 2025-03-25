import * as React from "react";
import type { SVGProps } from "react";
const SvgGithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <rect width={33} height={33} x={0.035} y={0.446} fill="#fff" rx={7} />
    <circle cx={16.535} cy={16.946} r={9.5} fill="#000" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M11.335 12.134v2.46c-.612.727-.966 1.59-.966 2.515 0 2.154 1.92 3.968 4.539 4.52a2 2 0 0 0-.738 1.231h-.793c-.672 0-1.3-.338-1.75-.836-.812-.898-1.948-1.896-1.948-1.188 0 .147.075.214.21.336.15.134.374.335.653.786.812 1.312 2.084 2.356 3.599 2.338v2.151h4.738v-3.244c0-.626-.288-1.185-.739-1.552 2.674-.523 4.649-2.358 4.649-4.542 0-.853-.302-1.653-.828-2.343v-2.632a.5.5 0 0 0-.68-.466l-2.63 1.017a8 8 0 0 0-2.072-.268c-.696 0-1.366.086-1.99.246l-2.573-.995a.5.5 0 0 0-.68.466"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGithubIcon;
