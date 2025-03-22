import type { DropdownOptionTypes } from "@/constants/dropdown";
import * as s from "./Dropdown.styles";

interface DropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  options: DropdownOptionTypes[];
  setItem: (item: DropdownOptionTypes) => void;
  dropDownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
}

const Dropdown = ({
  options,
  setItem,
  dropDownOpen,
  setDropdownOpen,
  ...props
}: DropdownProps) => {
  const handleItemClick = (item: DropdownOptionTypes) => {
    setItem(item);
    setDropdownOpen(false);
  };

  return (
    <ul
      css={[s.containerStyle, { display: dropDownOpen ? "flex" : "none" }]}
      {...props}
    >
      {options.map((option) => (
      <li
        key={option.id}
        css={s.listBarStyle}
        onClick={() => handleItemClick(option)}
        onKeyDown={() => handleItemClick(option)}
      >
        {option.name}
      </li>
      ))}
    </ul>
  );
};

export default Dropdown;
