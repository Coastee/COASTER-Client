import { HomeIcon, PlusIcon } from "@/assets/svg";
import ServerDropdown from "@/components/ServerHeader/components/ServerDropdown/ServerDropdown";
import { useMyServerList } from "@/components/ServerHeader/hooks/useServerList";
import { GLOBAL_MENUS, type MenuTypes } from "@/constants/menu";
import { SERVERINFO, type ServerInfoTypes } from "@/constants/serverInfo";
import ScheduleSideModal from "@/pages/HomePage/components/ScheduleSideModal/ScheduleSideModal";
import { useGlobalMenu, useGlobalMenuAction } from "@/stores/useGlobalMenuStore";
import { useGlobalServerAction } from "@/stores/useGlobalServerStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./ServerHeader.styles";

const ServerHeader = () => {
  const navigate = useNavigate();

  const globalMenu = useGlobalMenu();

  const { setGlobalMenu } = useGlobalMenuAction();
  const { setGlobalServer } = useGlobalServerAction();

  const [currentServer, setCurrentServer] = useState<ServerInfoTypes | undefined>(undefined);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScheduleVisible, setIsScheduleVisible] = useState(false);
  const [hoveredGlobalMenuId, setHoveredGlobalMenuId] = useState<string | null>(null);
  const [previousMenu, setPreviousMenu] = useState<MenuTypes | null>(globalMenu);

  const { data: myServerInfo } = useMyServerList();
  const myServerIdTitleList = myServerInfo?.result.serverList || [];

  const myServerList = Array.from(
    new Map(
      myServerIdTitleList.map((server) => {
        const serverInfo = SERVERINFO.find((item) => item.title === server.title);
        return [
          server.id,
          {
            id: server.id,
            title: server.title,
            icon: serverInfo?.icon || HomeIcon,
          },
        ];
      })
    ).values()
  );

  const exceptCurrentServer = currentServer
    ? myServerList.filter((server) => server.id !== currentServer.id)
    : myServerList;

  useEffect(() => {
    if (myServerList.length > 0 && !currentServer) {
      setCurrentServer(myServerList[0]);
      setGlobalServer(myServerList[0]);
    }
  }, [myServerList, currentServer, setGlobalServer]);

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
        <button
          type="button"
          css={s.plusButtonStyle}
          onClick={() => {
            navigate("/server-edit");
          }}
        >
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
