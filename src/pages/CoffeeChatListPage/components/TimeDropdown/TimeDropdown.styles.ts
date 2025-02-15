import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const timeContainerStyle = css`
  display: flex;

  justify-content: space-between;
  align-items: end;
  gap: 1.2rem;
`;

export const timeTextLayoutStyle = css`
  position: relative;
  display: flex;

  align-items: center;

  padding: 1rem 1.8rem;

  width: 15rem;

  border-radius: 1rem;
  border: 1px solid ${theme.color.dark1};

  background-color: transparent;
  background-color: #2d3643;

  transition: 0.3s ease-in-out;

  cursor: pointer;

  :hover {
    box-shadow: inset 0 0 0 1px ${theme.color.primaryBlue3};
  }
`;

export const textStyle = css`
  ${theme.font.body2};
  font-weight: 400;
  color: ${theme.color.white};

  white-space: nowrap;

  /* border: 1px solid yellow; */
  margin-right: 0.4rem;
  padding: 0.6rem 0.5rem;
`;

export const dateDropdownContainerStyle = css`
  display: flex;

  align-items: center;

  padding-left: 1rem;
`;

export const timeLayoutStyle = css`
  display: flex;

  align-items: end;
  gap: 1rem;
  border: 1px solid red;
`;

export const fromToStyle = css`
  padding-bottom: 0.2rem;

  ${theme.font.body3};
  font-weight: 400;
  color: ${theme.color.gray1};

  white-space: nowrap;
`;
