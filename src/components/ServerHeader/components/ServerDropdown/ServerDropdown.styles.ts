import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const dropdownStyle = css`
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

  padding: ${dropdownOpen ? "1rem 0.9rem 0" : "1rem 0.9rem 1.2rem"};

  width: 5.6rem;
  height: ${dropdownOpen ? "6.2rem" : "8rem"};

  cursor: pointer;
`;

export const selectedSeverStyle = css`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  width: 4rem;
  height: 4rem;
`;

export const divideLineStyle = css`
  width: 100%;

  border-bottom: 1px solid ${theme.color.primaryBlue0};
`;

export const listStyle = css`
  display: flex;

  flex-direction: column;
  align-items: center;

  gap: 1.2rem;

  padding: 0.7rem 0.5rem 0;
  border-radius: 0 0 1rem 1rem;

  width: 100%;

  background-color: ${theme.color.primaryBlue2};
`;

export const itemStyle = css`
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 0.5rem;

  width: 4rem;
  height: 4rem;

  cursor: pointer;
`;

export const bottomArrowIcon = css`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 1.2rem 0 1.6rem 0;

  width: 100%;

  path {
    stroke: #fff;
    stroke-width: 2px;
  }

  cursor: pointer;
`;
