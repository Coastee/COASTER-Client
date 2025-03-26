import * as React from "react";
import type { SVGProps } from "react";
const SvgFacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <circle cx={16.535} cy={17.446} r={16.5} fill="url(#facebookIcon_svg__a)" />
    <path
      fill="#fff"
      d="m22.723 22.03.734-4.583h-4.4v-3.209c0-1.283.458-2.291 2.475-2.291h2.108V7.73c-1.192-.183-2.475-.367-3.667-.367-3.758 0-6.416 2.292-6.416 6.417v3.667H9.432v4.583h4.125v11.642q1.374.275 2.75.275 1.374 0 2.75-.275V22.03z"
    />
    <defs>
      <linearGradient
        id="facebookIcon_svg__a"
        x1={16.535}
        x2={16.535}
        y1={0.946}
        y2={33.946}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#189AFF" />
        <stop offset={1} stopColor="#016FFF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgFacebookIcon;
