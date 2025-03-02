import { ReturnIcon } from "@/assets/svg";
import type { ServerInfoType } from "@/constants/serverInfo";
import useGlobalMenuStore from "@/stores/useGlobalMenuStore";
import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./ServerDropdown.styles";

interface DropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  options: ServerInfoType[];
  currentServer?: ServerInfoType | undefined;
  setCurrentServer: (item: ServerInfoType) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
}

const ServerDropdown = ({
  options,
  currentServer,
  setCurrentServer,
  dropdownOpen,
  setDropdownOpen,
  ...props
}: DropdownProps) => {
  const { setSelectedGlobalMenu } = useGlobalMenuStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (item: ServerInfoType) => {
    setSelectedGlobalMenu(undefined);
    setCurrentServer(item);
    const menu = pathname.split("/")[2] || "home";
    navigate(`/${item.id}/${menu}`);
    setDropdownOpen(false);
  };

  return (
    <div css={s.serverDropdownStyle}>
      <div css={s.dropdownTopStyle(dropdownOpen)}>
        {currentServer && (
          <div
            css={s.currentIconStyle(dropdownOpen)}
            onClick={() => handleItemClick(currentServer)}
            onKeyDown={() => handleItemClick(currentServer)}
          >
            <currentServer.icon css={{ width: "100%", height: "100%" }} />
          </div>
        )}
        <div
          css={s.currentIconBottomStyle(dropdownOpen)}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          onKeyDown={() => setDropdownOpen(!dropdownOpen)}
        >
          {dropdownOpen ? <div css={s.divideLineStyle} /> : <ReturnIcon width={14} height={8} />}
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
          <div
            css={s.bottomArrowIcon}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onKeyDown={() => setDropdownOpen(!dropdownOpen)}
          >
            <ReturnIcon width={14} height={8} css={{ transform: "rotate(180deg)" }} />
          </div>
        </>
      )}
    </div>
  );
};

export default ServerDropdown;
