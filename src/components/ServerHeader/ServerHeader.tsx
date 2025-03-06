import { PlusIcon } from "@/assets/svg";
import ServerDropdown from "@/components/ServerHeader/components/ServerDropdown/ServerDropdown";
import { GLOBAL_MENUS, type MenuTypes } from "@/constants/menu";
import { SERVERINFO, type ServerInfoTypes } from "@/constants/serverInfo";
import ScheduleSideModal from "@/pages/HomePage/components/ScheduleSideModal/ScheduleSideModal";
import { useGlobalMenu, useGlobalMenuAction } from "@/stores/useGlobalMenuStore";
import { useGlobalServer, useGlobalServerAction } from "@/stores/useGlobalServerStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./ServerHeader.styles";

const ServerHeader = () => {
  const navigate = useNavigate();
  const globalMenu = useGlobalMenu();
  const globalServer = useGlobalServer();

  const { setGlobalMenu } = useGlobalMenuAction();
  const { setGlobalServer } = useGlobalServerAction();

  const [myServerIdList] = useState<number[]>([2, 6, 10, 15, 22]);
  const currentServerInfo = SERVERINFO.find((server) => server.id === myServerIdList[0]);

  const [currentServer, setCurrentServer] = useState<ServerInfoTypes | undefined>(currentServerInfo);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScheduleVisible, setIsScheduleVisible] = useState(false);
  const [hoveredGlobalMenuId, setHoveredGlobalMenuId] = useState<string | null>(null);
  const [previousMenu, setPreviousMenu] = useState<MenuTypes | null>(globalMenu);

  const myServerSet = new Set(myServerIdList);

  const exceptCurrentServer = currentServer
    ? SERVERINFO.filter((server) => myServerSet.has(server.id) && server.id !== currentServer.id)
    : [];

  const handleGlobalMenuClick = (menu: MenuTypes) => {
    setPreviousMenu(globalMenu);
    setGlobalMenu(menu);
    menu?.id === "schedule" ? setIsScheduleVisible(true) : navigate(`/${menu?.id}`);
  };

  const handleServerChange = (server: ServerInfoTypes) => {
    setGlobalServer(server);
    setCurrentServer(server);
  };

  useEffect(() => {
    !isScheduleVisible && globalMenu?.id === "schedule" && setGlobalMenu(previousMenu);
  }, [isScheduleVisible, globalMenu, previousMenu, setGlobalMenu]);

  useEffect(() => {
    globalServer && setCurrentServer(globalServer);
  }, [globalServer]);

  return (
    <header css={s.containerStyle}>
      <div css={s.topMenuStyle}>
        <ServerDropdown
          options={exceptCurrentServer}
          currentServer={currentServer}
          setCurrentServer={setCurrentServer}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          onServerChange={handleServerChange}
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
