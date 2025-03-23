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

export const currentItemStyle = css`
  display: flex;
  flex-shrink: 0;

  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 3.6rem;

  &:hover .current-server-desc {
    display: block;
  }
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
  height: 31rem;

  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const itemStyle = css`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 3.6rem;

  cursor: pointer;

  &:hover .servers-desc {
    display: block;
  }
`;

export const iconStyle = css`
  width: 100%;
  height: 100%;

  :hover {
    scale: 1.05;
  }
`;

export const serverDescStyle = (scrollTop: number) => css`
  position: fixed;
  left: 6.8rem;

  transform: translateY(-${scrollTop}px);

  margin-left: 0.2rem;
  padding: 0.6rem 0.8rem;

  ${theme.font.body3}
  font-weight: 400;
  white-space: nowrap;

  border: 1px solid ${theme.color.dark1};
  border-radius: 0.6rem;

  background: rgba(63, 75, 93, 0.8);

  display: none;

  z-index: 1;
`;

export const bottomArrowIcon = css`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 1.4rem 0 2.1rem 0;

  width: 100%;

  cursor: pointer;
`;
