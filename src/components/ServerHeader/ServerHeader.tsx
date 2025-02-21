import { PlusIcon } from "@/assets/svg";
import ServerDropdown from "@/components/ServerHeader/components/ServerDropdown/ServerDropDown";
import { SERVERINFO } from "@/constants/serverInfo";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./ServerHeader.styles";

const ServerHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [myServers, setMyServers] = useState([1, 4, 5, 9]); // dummy data
  const myServerSet = new Set(myServers);


  const handleNavigate = (serverId: number) => {
    const menu = pathname.split("/")[2] || "home";
    navigate(`/${serverId}/${menu}`);
  };

  const filteredServers = SERVERINFO.filter((server) =>
    myServerSet.has(server.id)
  );

  const [dropdownOpen, setDropdownOpen] = useState(true);

  return (
    <header css={s.containerStyle}>
      {/* <div css={s.serverListStyle}>
        {filteredServers.map((server) => {
          return (
            <button
              key={server.id}
              type="button"
              css={s.serverItemStyle}
              onClick={() => handleNavigate(server.id)}
            >
              <server.icon />
            </button>
          );
        })}
      </div> */}
      <ServerDropdown
        options={SERVERINFO},
        setItem={SERVERINFO[0]},
        dropdownOpen={dropdownOpen},
        setDropdownOpen={setDropdownOpen}/>
      <button type="button" css={s.plusButtonStyle}>
        <PlusIcon />
      </button>
    </header>
  );
};

export default ServerHeader;
