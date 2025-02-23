import { PlusIcon } from "@/assets/svg";
import ServerDropdown from "@/components/ServerHeader/components/ServerDropdown/ServerDropdown";
import { getServerInfo } from "@/components/ServerHeader/utils/getServerInfo";
import { SERVERINFO } from "@/constants/serverInfo";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./ServerHeader.styles";

const ServerHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [myServerIdList, setMyServers] = useState([2, 6, 10, 15, 22]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentServer, setCurrentServer] = useState(
    getServerInfo(myServerIdList[0])
  );

  const myServerSet = new Set(myServerIdList);

  const handleNavigate = useCallback(
    (currentServerId: number) => {
      const menu = pathname.split("/")[2] || "home";
      navigate(`/${currentServerId}/${menu}`);
    },
    [pathname, navigate]
  );

  const exceptCurrentServer = currentServer
    ? SERVERINFO.filter(
        (server) => myServerSet.has(server.id) && server.id !== currentServer.id
      )
    : [];

  useEffect(() => {
    if (currentServer) {
      handleNavigate(currentServer.id);
    }
  }, [currentServer, handleNavigate]);

  return (
    <header css={s.containerStyle}>
      <ServerDropdown
        options={exceptCurrentServer}
        item={currentServer}
        setItem={setCurrentServer}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />
      <button type="button" css={s.plusButtonStyle}>
        <PlusIcon />
      </button>
    </header>
  );
};

export default ServerHeader;
