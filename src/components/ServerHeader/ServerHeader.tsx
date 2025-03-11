import { PlusIcon, RotateLogoIcon } from "@/assets/svg";
import ServerDropdown from "@/components/ServerHeader/components/ServerDropdown/ServerDropdown";
import { useAllServerList, useMyServerList } from "@/components/ServerHeader/hooks/useServerList";
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

  const { data: myServerInfo } = useMyServerList();
  const { data: allServerInfo } = useAllServerList();
  console.log(allServerInfo);
  const myServerIdTitleList = myServerInfo?.result.serverList || [];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScheduleVisible, setIsScheduleVisible] = useState(false);
  const [hoveredGlobalMenuId, setHoveredGlobalMenuId] = useState<string | null>(null);
  const [previousMenu, setPreviousMenu] = useState<MenuTypes | null>(globalMenu);

  const myServerList = Array.from(
    new Map(
      myServerIdTitleList.map((server) => {
        const serverInfo = SERVERINFO.find((item) => item.title === server.title);
        return [
          server.id,
          {
            id: server.id,
            title: server.title,
            icon: serverInfo?.icon || RotateLogoIcon,
          },
        ];
      })
    ).values()
  );

  const [currentServer, setCurrentServer] = useState<ServerInfoTypes | null>(null);

  useEffect(() => {
    if (myServerList.length > 0 && !currentServer) {
      setCurrentServer(myServerList[0]);
      setGlobalServer(myServerList[0]);
    }
  }, [myServerList, currentServer, setGlobalServer]);

  console.log("myServerList: ", myServerList);
  console.log("currentServer: ", currentServer);

  const exceptCurrentServer = currentServer
    ? myServerList.filter((server) => server.id !== currentServer.id)
    : myServerList; // currentServer가 없으면 전체 리스트 반환

  console.log("exceptCurrentServer", exceptCurrentServer);

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
    if (!isScheduleVisible && globalMenu?.id === "schedule") {
      setGlobalMenu(previousMenu);
    }
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
