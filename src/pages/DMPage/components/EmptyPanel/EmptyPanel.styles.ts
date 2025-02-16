import { theme } from "@/styles/theme/theme";
import bgImg from "@assets/img/dmEmptyBgImg.png";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;

  width: 100%;
  height: 100vh;

  padding: 5.3rem 4.5rem 4.2rem 4.5rem;

  z-index: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;

  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 2.5rem 0 0 2.5rem;

  background-color: ${theme.color.dark3};

  & > h1 {
    ${theme.font.title2};
  }

  & > p {
    color: ${theme.color.gray2};

    ${theme.font.body1};
  }
`;
