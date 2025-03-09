import { PlusIcon } from "@/assets/svg";
import ServerDropdown from "@/components/ServerHeader/components/ServerDropdown/ServerDropdown";
import { GLOBAL_MENUS, type GlobalMenuTypes, SERVERINFO, type ServerInfoType } from "@/constants/serverInfo";
import ScheduleSideModal from "@/pages/HomePage/components/ScheduleSideModal/ScheduleSideModal";
import { useGlobalMenu, useGlobalMenuAction } from "@/stores/useGlobalMenuStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./ServerHeader.styles";

const ServerHeader = () => {
  const navigate = useNavigate();
  const globalMenu = useGlobalMenu();
  const { setGlobalMenu } = useGlobalMenuAction();

  const [myServerIdList] = useState<number[]>([2, 6, 10, 15, 22]);
  const currentServerInfo = SERVERINFO.find((server) => server.id === myServerIdList[0]);
  const [currentServer, setCurrentServer] = useState<ServerInfoType | undefined>(currentServerInfo);
  const [prevGlobalMenu, setPrevGlobalMenu] = useState(globalMenu);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScheduleVisible, setIsScheduleVisible] = useState(false);
  const [hoveredGlobalMenuId, setHoveredGlobalMenuId] = useState<string | null>(null);

  const myServerSet = new Set(myServerIdList);

  const exceptCurrentServer = currentServer
    ? SERVERINFO.filter((server) => myServerSet.has(server.id) && server.id !== currentServer.id)
    : [];

  const handleGlobalMenuClick = (menu: GlobalMenuTypes | null) => {
    setPrevGlobalMenu(globalMenu);
    setGlobalMenu(menu);
    if (menu?.id === "schedule") {
      setIsScheduleVisible(true);
    } else {
      navigate(`/${menu?.id}`);
    }
  };

  useEffect(() => {
    if (!isScheduleVisible && globalMenu?.id === "schedule") {
      setGlobalMenu(prevGlobalMenu);
    }
  }, [globalMenu, isScheduleVisible, prevGlobalMenu, setGlobalMenu]);

  return (
    <header css={s.containerStyle}>
      <div css={s.topMenuStyle}>
        <ServerDropdown
          options={exceptCurrentServer}
          currentServer={currentServer}
          setCurrentServer={setCurrentServer}
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
            onClick={() => handleGlobalMenuClick(menu)}
            onKeyDown={() => handleGlobalMenuClick(menu)}
            onMouseEnter={() => setHoveredGlobalMenuId(menu.id)}
            onMouseLeave={() => setHoveredGlobalMenuId(null)}
          >
            <div>
              {menu.id === globalMenu?.id || hoveredGlobalMenuId === menu.id ? <menu.activeIcon /> : <menu.icon />}
            </div>
          </li>
        ))}
      </ul>
      <ScheduleSideModal isVisible={isScheduleVisible} setIsVisible={setIsScheduleVisible} />
    </header>
  );
};

export default ServerHeader;
