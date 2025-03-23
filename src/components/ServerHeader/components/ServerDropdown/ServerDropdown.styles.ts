import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const serverDropdownStyle = css`
  display: flex;

  flex-direction: column;
  align-items: center;

  margin-left: auto;

  border-radius: 1rem;

  background-color: ${theme.color.primaryBlue2};
`;

export const dropdownTopStyle = (dropdownOpen: boolean) => css`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  padding: ${dropdownOpen ? "0.9rem 0.5rem 0" : "0.9rem 0.5rem 0.9rem"};

  width: 5.6rem;
  height: ${dropdownOpen ? "5.6rem" : "7.6rem"};

  cursor: pointer;
`;

export const currentIconStyle = css`
  display: flex;
  flex-shrink: 0;

  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 3.6rem;
`;

export const currentIconBottomStyle = (dropdownOpen: boolean) => css`
  display: flex;

  justify-content: center;
  align-items: ${dropdownOpen ? "end" : "center"};

  width: 4rem;
  height: ${dropdownOpen ? "3rem" : "100%"};
`;

export const divideLineStyle = css`
  width: 100%;

  border-bottom: 1px solid ${theme.color.primaryBlue0};
`;

export const listStyle = css`
  display: flex;

  flex-direction: column;
  align-items: center;

  gap: 0.8rem;

  padding: 0.8rem 0.8rem 0;

  width: 100%;
`;

export const itemStyle = css`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 3.6rem;

  cursor: pointer;
`;

export const iconStyle = css`
  width: 100%;
  height: 100%;

  :hover {
    scale: 1.05;
  }
`;

export const bottomArrowIcon = css`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 1.4rem 0 2.1rem 0;

  width: 100%;

  cursor: pointer;
`;
