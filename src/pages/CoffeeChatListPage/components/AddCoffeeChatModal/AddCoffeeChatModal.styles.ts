import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const modalContentStyle = css`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  height: calc(100vh - 14.1rem);

  overflow-y: scroll;
`;

export const contentListStyle = css`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  row-gap: 2.5rem;

  padding-top: 3rem;
  padding-bottom: 6rem;
`;

export const questionContainer = css`
  display: flex;

  flex-direction: column;

  row-gap: 1.3rem;

  ${theme.font.body2};
`;

export const textareaTitleStyle = css`
  ${theme.font.body1};
  font-weight: 500;

  #required {
    padding-left: 0.5rem;
    color: ${theme.color.primaryPink1};
    ${theme.font.body1};
    font-weight: 500;
  }
  #sub {
    margin-left: 0.6rem;

    ${theme.font.body3};
    font-weight: 400;
    color: ${theme.color.gray2};
  }
`;

export const hashtagListContainer = css`
  display: flex;
  flex-wrap: wrap;

  gap: 0.8rem;

  padding: 0.5rem 0;
`;

export const fileButtonStyle = css`
  display: flex;

  align-items: center;

  padding: 1.6rem;

  width: 100%;
  max-width: 35rem;

  ${theme.font.body2};
  font-weight: 400;
  color: ${theme.color.gray2};

  text-decoration-line: underline;
  text-underline-position: from-font;

  border-radius: 10px;
  border: 1px solid ${theme.color.dark1};

  background-color: #2d3643;

  transition: 0.3s ease-in-out;

  cursor: pointer;
`;

export const counterStyle = css`
  display: flex;

  align-items: center;

  gap: 2.2rem;

  svg {
    cursor: pointer;
    transition: 0.1s ease-in-out;
    :hover {
      scale: 1.05;
    }
  }

  p {
    ${theme.font.body1};
    color: ${theme.color.white};
  }
`;

export const dateTimeLayoutStyle = css`
  display: flex;

  justify-content: space-between;
  gap: 1.2rem;
`;

export const dateTimeContainerStyle = css`
  position: relative;
  display: flex;

  align-items: center;

  padding: 1.6rem 1.8rem;

  width: 15rem;

  ${theme.font.body2};
  font-weight: 400;
  color: ${theme.color.white};

  white-space: nowrap;

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

export const editButtonListStyle = css`
  display: flex;

  justify-content: flex-end;

  gap: 1.6rem;
`;

export const buttonContainer = css`
  display: flex;

  justify-content: flex-end;
`;
