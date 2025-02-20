import * as React from "react";
import type { SVGProps } from "react";
const SvgShadowPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 110 110"
    {...props}
  >
    <g filter="url(#shadowPlusIcon_svg__a)">
      <circle cx={50.985} cy={50.873} r={40} fill="#6B8AFD" />
      <circle cx={50.985} cy={50.873} r={40} stroke="#F6F6F6" strokeWidth={5} />
    </g>
    <g stroke="#F6F6F6" strokeLinecap="round" strokeWidth={4}>
      <path d="M37.619 50.874H64.35M50.985 37.507V64.24" />
    </g>
    <defs>
      <filter
        id="shadowPlusIcon_svg__a"
        width={109}
        height={109}
        x={0.485}
        y={0.374}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={4} dy={4} />
        <feGaussianBlur stdDeviation={6} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_633_925" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_633_925"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgShadowPlusIcon;
