import { PlusIcon } from "@/assets/svg";
import ServerDropdown from "@/components/ServerHeader/components/ServerDropdown/ServerDropdown";
import {
  GLOBAL_MENUS,
  type GlobalMenuTypes,
  SERVERINFO,
} from "@/constants/serverInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./ServerHeader.styles";

const ServerHeader = () => {
  const navigate = useNavigate();

  const [myServerIdList, setMyServers] = useState<number[]>([2, 6, 10, 15, 22]); // dummy
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentServer, setCurrentServer] = useState(SERVERINFO[0]);
  const [selectedGlobalMenu, setSelectedGlobalMenu] = useState<
    GlobalMenuTypes | undefined
  >(undefined);
  const [hoveredGlobalMenuId, setHoveredGlobalMenuId] = useState<
    string | undefined
  >(undefined);

  const myServerSet = new Set(myServerIdList);

  const exceptCurrentServer = currentServer
    ? SERVERINFO.filter(
        (server) => myServerSet.has(server.id) && server.id !== currentServer.id
      )
    : [];

  return (
    <header css={s.containerStyle}>
      <div css={s.topMenuStyle}>
        <ServerDropdown
          options={exceptCurrentServer}
          item={currentServer}
          setItem={setCurrentServer}
          setSelectedGlobalMenu={setSelectedGlobalMenu}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
        <button type="button" css={s.plusButtonStyle}>
          <PlusIcon />
        </button>
      </div>

      <ul css={s.globalMenuListStyle}>
        {GLOBAL_MENUS.map((menu) => (
          <li
            key={menu.id}
            css={s.globalMenuItemStyle}
            onClick={() => {
              setSelectedGlobalMenu(menu);
              navigate(`/${menu.id}`);
            }}
            onKeyDown={() => setSelectedGlobalMenu(menu)}
            onMouseEnter={() => setHoveredGlobalMenuId(menu.id)}
            onMouseLeave={() => setHoveredGlobalMenuId(undefined)}
          >
            <div>
              {menu.id === selectedGlobalMenu?.id ||
              hoveredGlobalMenuId === menu.id ? (
                <menu.activeIcon />
              ) : (
                <menu.icon />
              )}
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default ServerHeader;
