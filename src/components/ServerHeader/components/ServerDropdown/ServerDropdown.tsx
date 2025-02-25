import { ReturnIcon } from "@/assets/svg";
import type { GlobalMenuTypes, ServerInfoType } from "@/constants/serverInfo";
import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./ServerDropdown.styles";

interface DropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  options: ServerInfoType[];
  item?: ServerInfoType;
  setItem: (item: ServerInfoType) => void;
  setSelectedGlobalMenu: (menu: GlobalMenuTypes | undefined) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
}

const ServerDropdown = ({
  options,
  item,
  setItem,
  setSelectedGlobalMenu,
  dropdownOpen,
  setDropdownOpen,
  ...props
}: DropdownProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (item: ServerInfoType) => {
    setSelectedGlobalMenu(undefined);
    const menu = pathname.split("/")[2] || "home";
    navigate(`/${item.id}/${menu}`);
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
