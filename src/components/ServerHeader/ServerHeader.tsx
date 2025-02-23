import { PlusIcon } from "@/assets/svg";
import ServerDropdown from "@/components/ServerHeader/components/ServerDropdown/ServerDropDown";
import { SERVERINFO } from "@/constants/serverInfo";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./ServerHeader.styles";

const ServerHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [myServers, setMyServers] = useState([1, 3, 5, 9]); // dummy data
  const myServerSet = new Set(myServers);

  const handleNavigate = (serverId: number) => {
    const menu = pathname.split("/")[2] || "home";
    navigate(`/${serverId}/${menu}`);
  };

  const filteredServers = SERVERINFO.filter((server) =>
    myServerSet.has(server.id)
  );

  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [item, setItem] = useState(SERVERINFO[3]);

  return (
    <header css={s.containerStyle}>
      <ServerDropdown
        options={filteredServers}
        item={item}
        setItem={setItem}
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
