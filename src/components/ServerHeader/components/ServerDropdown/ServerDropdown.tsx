import { ArrowDownIcon } from "@/assets/svg";
import type { ServerInfoType } from "@/constants/serverInfo";
import * as s from "./ServerDropdown.styles";

interface DropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  options: ServerInfoType[];
  setItem: (item: ServerInfoType) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
}

const ServerDropdown = ({
  options,
  setItem,
  dropdownOpen,
  setDropdownOpen,
  ...props
}: DropdownProps) => {
  const handleItemClick = (item: ServerInfoType) => {
    setItem(item);
    setDropdownOpen(false);
  };

  return (
    <div css={s.sortingStyle}>
      <button
        type="button"
        css={s.buttonStyle}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <ArrowDownIcon
          width={10}
          style={{
            transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {dropdownOpen && (
        <ul css={s.listStyle} {...props}>
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
      )}
    </div>
  );
};

export default ServerDropdown;
