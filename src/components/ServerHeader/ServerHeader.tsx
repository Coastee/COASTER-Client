import { PlusIcon } from "@/assets/svg";
import ServerDropdown from "@/components/ServerHeader/components/ServerDropdown/ServerDropdown";
import { GLOBAL_MENUS, type GlobalMenuTypes, SERVERINFO } from "@/constants/serverInfo";
import ScheduleSideModal from "@/pages/HomePage/components/ScheduleSideModal/ScheduleSideModal";
import useGlobalMenuStore from "@/stores/useGlobalMenuStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./ServerHeader.styles";

const ServerHeader = () => {
  const navigate = useNavigate();
  const { selectedGlobalMenu, setSelectedGlobalMenu } = useGlobalMenuStore();

  const [prevGlobalMenu, setPrevGlobalMenu] = useState(selectedGlobalMenu);
  const [myServerIdList] = useState<number[]>([2, 6, 10, 15, 22]); // dummy
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScheduleVisible, setIsScheduleVisible] = useState(false);
  const [currentServer, setCurrentServer] = useState(SERVERINFO[0]);
  const [hoveredGlobalMenuId, setHoveredGlobalMenuId] = useState<string | undefined>(undefined);

  const myServerSet = new Set(myServerIdList);

  const exceptCurrentServer = currentServer
    ? SERVERINFO.filter((server) => myServerSet.has(server.id) && server.id !== currentServer.id)
    : [];

  const handleGlobalMenuClick = (menu: GlobalMenuTypes | undefined) => {
    setPrevGlobalMenu(selectedGlobalMenu);
    setSelectedGlobalMenu(menu);
    if (menu?.id === "schedule") {
      setIsScheduleVisible(true);
    } else {
      navigate(`/${menu?.id}`);
    }
  };

  useEffect(() => {
    if (!isScheduleVisible && selectedGlobalMenu?.id === "schedule") {
      setSelectedGlobalMenu(prevGlobalMenu);
    }
  }, [selectedGlobalMenu, isScheduleVisible, prevGlobalMenu, setSelectedGlobalMenu]);

  return (
    <header css={s.containerStyle}>
      <div css={s.topMenuStyle}>
        <ServerDropdown
          options={exceptCurrentServer}
          currentServer={currentServer}
          setCurrentServer={setCurrentServer}
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
            onClick={() => handleGlobalMenuClick(menu)}
            onKeyDown={() => handleGlobalMenuClick(menu)}
            onMouseEnter={() => setHoveredGlobalMenuId(menu.id)}
            onMouseLeave={() => setHoveredGlobalMenuId(undefined)}
          >
            <div>
              {menu.id === selectedGlobalMenu?.id || hoveredGlobalMenuId === menu.id ? (
                <menu.activeIcon />
              ) : (
                <menu.icon />
              )}
            </div>
          </li>
        ))}
      </ul>
      <ScheduleSideModal isVisible={isScheduleVisible} setIsVisible={setIsScheduleVisible} />
    </header>
  );
};

export default ServerHeader;
