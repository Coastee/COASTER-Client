import { ReturnIcon } from "@/assets/svg";
import type { ServerInfoType } from "@/constants/serverInfo";
import * as s from "./ServerDropdown.styles";

interface DropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  options: ServerInfoType[];
  item?: ServerInfoType;
  setItem: (item: ServerInfoType) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
}

const ServerDropdown = ({
  options,
  item,
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
    <div css={s.serverDropdownStyle}>
      <div
        css={s.dropdownTopStyle(dropdownOpen)}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        onKeyDown={() => setDropdownOpen(!dropdownOpen)}
      >
        <div css={s.currentIconStyle(dropdownOpen)}>
          {item && <item.icon css={{ width: "100%", height: "100%" }} />}
        </div>
        <div css={s.currentIconBottomStyle(dropdownOpen)}>
          {dropdownOpen ? (
            <div css={s.divideLineStyle} />
          ) : (
            <ReturnIcon width={14} height={8} />
          )}
        </div>
      </div>

      {dropdownOpen && (
        <>
          <ul css={s.listStyle} {...props}>
            {options.map((option) => (
              <li
                key={option.id}
                css={s.itemStyle}
                onClick={() => handleItemClick(option)}
                onKeyDown={() => handleItemClick(option)}
              >
                <option.icon css={s.iconStyle} />
              </li>
            ))}
          </ul>
          <div css={s.bottomArrowIcon}>
            <ReturnIcon
              width={14}
              height={8}
              css={{ transform: "rotate(180deg)" }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ServerDropdown;
