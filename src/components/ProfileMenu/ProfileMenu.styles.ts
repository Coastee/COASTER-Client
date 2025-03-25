import { css } from "@emotion/react";

import profileMenuBg from "@/assets/img/menuWrapperImg.png";
import { theme } from "@/styles/theme/theme";

export const wrapperStyle = css`
  display: flex;

  flex-direction: column;

  background-image: url(${profileMenuBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 21.8rem 22.5rem;
  object-fit: cover;
`;

export const layoutStyle = css`
  display: flex;

  align-items: center;
  gap: 1rem;

`;

export const nameStyle = css`
  ${theme.font.body1};

  font-weight: 700;
`;

export const infoStyle = css`
  display: flex;

  ${theme.font.body3};

  font-weight: 700;

  gap: 0.4rem;
`;

export const infoLayoutStyle = css`
  display: flex;

  flex-direction: column;

  gap: 0.3rem;
`;

export const verifyLayoutStyle = css`
  display: flex;

  align-items: center;
  gap: 0.4rem;
`;
