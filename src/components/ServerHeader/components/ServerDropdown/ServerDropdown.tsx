import { ReturnIcon } from "@/assets/svg";
import { useScrollPosition } from "@/components/ServerHeader/hooks/useScollPosition";
import type { ServerInfoTypes } from "@/constants/serverInfo";
import { useGlobalMenuAction } from "@/stores/useGlobalMenuStore";
import { useGlobalServer, useGlobalServerAction } from "@/stores/useGlobalServerStore";
import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./ServerDropdown.styles";

interface DropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  options: ServerInfoTypes[];
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
  onServerChange: (server: ServerInfoTypes) => void;
}

const ServerDropdown = ({ options, dropdownOpen, setDropdownOpen, onServerChange, ...props }: DropdownProps) => {
  const { resetGlobalMenu } = useGlobalMenuAction();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const globalServer = useGlobalServer();
  const { setGlobalServer } = useGlobalServerAction();

  const { scrollTop, listRef, handleScroll } = useScrollPosition();

  const handleItemClick = (item: ServerInfoTypes) => {
    resetGlobalMenu();
    setGlobalServer(item);
    onServerChange(item);

    const menu = pathname.split("/")[2] || "home";
    navigate(`/${item.id}/${menu}`);

    setDropdownOpen(false);
  };

  return (
    <div css={s.serverDropdownStyle}>
      <div css={s.dropdownTopStyle(dropdownOpen)}>
        {globalServer && (
          <div
            css={s.currentItemStyle}
            onClick={() => handleItemClick(globalServer)}
            onKeyDown={() => handleItemClick(globalServer)}
          >
            <globalServer.icon css={s.iconStyle} />
            <div css={s.serverDescStyle(0)} className="current-server-desc">
              {globalServer.title}
            </div>
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
          <ul ref={listRef} css={s.listStyle} onScroll={handleScroll} {...props}>
            {options.map((option) => (
              <li
                key={option.id}
                css={s.itemStyle}
                onClick={() => handleItemClick(option)}
                onKeyDown={() => handleItemClick(option)}
              >
                <option.icon css={s.iconStyle} />
                <div css={s.serverDescStyle(scrollTop)} className="servers-desc">
                  {option.title}
                </div>
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
