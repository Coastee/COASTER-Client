import { css } from "@emotion/react";

const color = {
  // Black
  black: "#000000",

  // White
  white: "#ffffff",
  white1: "#f6f6f6",
  white2: "#f0f0f0",

  // Gray
  gray0: "#dfdfdf",
  gray1: "#cacaca",
  gray2: "#b9b9b9",
  gray3: "#969696",
  gray4: "#666666",

  // Dark
  dark0: "#5a769f",
  dark1: "#4a6285",
  dark2: "#3f4b5d",
  dark3: "#2b3340",
  dark4: "#1d2229",

  // Primary
  primaryBlue0: "#b6cbff",
  primaryBlue1: "#9fb3ff",
  primaryBlue2: "#6b8afd",
  primaryBlue3: "#3d66ff",
  primaryPink0: "#ff9fbc",
  primaryPink1: "#ff6593",

  // etc
  yellow: "#FFD900",
  green: "#04C75B",
};

const font = {
  title1: css({
    fontSize: "3.2rem",
    letterSpacing: "-0.64px",
  }),

  title2: css({
    fontSize: "2.8rem",
    fontWeight: 600,
    letterSpacing: "-0.64px",
  }),

  title3: css({
    fontSize: "2.2rem",
    fontWeight: 500,
    letterSpacing: "-0.44px",
  }),

  body1: css({
    fontSize: "1.6rem",
    letterSpacing: "-0.32px",
  }),

  body2: css({
    fontSize: "1.4rem",
    letterSpacing: "-0.28px",
  }),

  body3: css({
    fontSize: "1.2rem",
    letterSpacing: "-0.24px",
  }),
};

export const theme = {
  color,
  font,
};
