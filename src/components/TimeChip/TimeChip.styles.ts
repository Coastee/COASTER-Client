import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const timeWrapperStyle = css`
  display: flex;

  width: fit-content;
  height: fit-content;

  padding: 0.2rem 0.8rem;

  justify-content: center;
  align-items: center;

  border: 1px solid ${theme.color.dark2};
  border-radius: 0.6rem;

  color: ${theme.color.gray1};

  ${theme.font.body3};
`;
