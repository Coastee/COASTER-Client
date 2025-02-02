import { Logo4Icon } from "@/assets/svg";
import { MENU } from "@/constants/menu";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as s from "./MenuHeader.styles";

const MenuHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { serverId } = useParams();

  const handleNavigate = (menu: string) => {
    if (!serverId) return;
    navigate(`/${serverId}/${menu}`);
  };

  const isActiveMenu = (menu: string) => {
    return location.pathname.startsWith(`/${serverId}/${menu}`);
  };

  return (
    <header css={s.containerStyle}>
      <Logo4Icon />
      <div css={s.menuListStyle}>
        {MENU.map((menu) => {
          return (
            <button
              key={menu.id}
              type="button"
              css={[
                s.menuItemStyle,
                isActiveMenu(menu.path) && s.activeMenuItemStyle,
              ]}
              onClick={() => handleNavigate(menu.path)}
            >
              <menu.icon />
              <span css={{ whiteSpace: "nowrap" }}>{menu.name}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default MenuHeader;
