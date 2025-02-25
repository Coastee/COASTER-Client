import type { CheckBoxProps } from "@/components/CheckBox/Checkbox";
import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const boxWrapperStyle: Record<Required<CheckBoxProps>["variant"], ReturnType<typeof css>> = {
  square: css`
    display: flex;

    width: 2.4rem;
    height: 2.4rem;

    padding: 0.35rem;

    border: 1px solid ${theme.color.dark1};
    border-radius: 5px;
  `,

  round: css`
    display: flex;

    width: 2.1rem;
    height: 2.1rem;

    padding: 0.4rem;

    border-radius: 100%;

    background-color: ${theme.color.dark2};
  `,
};

export const variantStyles: Record<Required<CheckBoxProps>["variant"], ReturnType<typeof css>> = {
  square: css`
    appearance: none;

    width: 1.5rem;
    height: 1.5rem;

    border-radius: 3px;

    flex-shrink: 0;

    cursor: pointer;

    &:checked {
      background-color: ${theme.color.primaryBlue1};

      transition: 0.2s ease-in-out;
    }
  `,

  round: css`
    appearance: none;

    width: 1.3rem;
    height: 1.3rem;

    border-radius: 100%;

    flex-shrink: 0;

    cursor: pointer;

    &:checked {
      background-color: ${theme.color.primaryBlue2};

      transition: 0.2s ease-in-out;
    }
  `,
};
