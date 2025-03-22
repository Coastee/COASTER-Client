import { ArrowDownIcon } from "@/assets/svg";
import { Button } from "@/components";
import type { DropdownOptionTypes } from "@/constants/dropdown";
import type { HTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import * as s from "./TitleContainer.styles";

export interface TitleContainerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  textButton?: string;
  handleTextButtonClick?: () => void;
  sortingOptions?: DropdownOptionTypes[];
  sortingOption?: DropdownOptionTypes;
  setSortingOption?: (option: DropdownOptionTypes) => void;
  children?: ReactNode;
}

const TitleContainer = ({
  title,
  textButton,
  handleTextButtonClick,
  sortingOptions,
  sortingOption,
  setSortingOption,
  children,
  ...props
}: TitleContainerProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div css={s.titleContainerStyle} {...props}>
      <div css={s.headerStyle}>
        <h1 css={s.titleStyle}>{title}</h1>

        {textButton && handleTextButtonClick && (
          <Button variant="text" size="large" css={{ padding: "0.6rem 1.2rem" }} onClick={handleTextButtonClick}>
            {textButton}
          </Button>
        )}

        {sortingOptions && sortingOption && setSortingOption && (
          <div css={s.sortingStyle}>
            <Button variant="sorting" onClick={() => setDropdownOpen((prev) => !prev)}>
              <ArrowDownIcon
                width={10}
                style={{
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
              {sortingOption.name}
            </Button>
            {dropdownOpen && (
              <Dropdown
                options={sortingOptions}
                setItem={setSortingOption}
                dropDownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
              />
            )}
          </div>
        )}
      </div>
      <div css={s.contentStyle}>{children}</div>
    </div>
  );
};

export default TitleContainer;
