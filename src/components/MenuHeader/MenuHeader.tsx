import { Logo4Icon, RotateLogoIcon } from "@/assets/svg";
import { MENUS, type MenuTypes } from "@/constants/menu";
import { useGlobalMenuAction } from "@/stores/useGlobalMenuStore";
import { useGlobalServer } from "@/stores/useGlobalServerStore";
import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./MenuHeader.styles";

interface MenuHeaderProps {
  iconOnly?: boolean;
}

const MenuHeader = ({ iconOnly = false }: MenuHeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const globalServer = useGlobalServer();
  const serverId = globalServer?.id;

  const { setGlobalMenu } = useGlobalMenuAction();

  const handleNavigate = (menu: MenuTypes) => {
    if (!serverId) return;
    setGlobalMenu(menu);
    navigate(`/${serverId}/${menu.id}`);
  };

  const isActiveMenu = (menuId: string) => {
    return location.pathname.startsWith(`/${serverId}/${menuId}`);
  };

  return (
    <header css={s.containerStyle(iconOnly)}>
      {iconOnly ? (
        <RotateLogoIcon width={55} height={53} css={{ padding: "1rem", cursor: "pointer" }} />
      ) : (
        <Logo4Icon />
      )}
      <div css={s.menuListStyle}>
        {MENUS.map((menu) => (
          <button
            key={menu.id}
            type="button"
            css={[s.menuItemStyle(iconOnly), isActiveMenu(menu.id) && s.activeMenuItemStyle]}
            onClick={() => handleNavigate(menu)}
          >
            <menu.icon />
            {!iconOnly && <span css={{ whiteSpace: "nowrap" }}>{menu.name}</span>}
          </button>
        ))}
      </div>
    </header>
  );
};

export default MenuHeader;
