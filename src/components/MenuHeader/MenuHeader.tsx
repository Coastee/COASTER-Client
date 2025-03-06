import { Logo4Icon, RotateLogoIcon } from "@/assets/svg";
import { MENU } from "@/constants/menu";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as s from "./MenuHeader.styles";

interface MenuHeaderProps {
  iconOnly?: boolean;
}

const MenuHeader = ({ iconOnly = false }: MenuHeaderProps) => {
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
    <header css={s.containerStyle(iconOnly)}>
      {iconOnly ? (
        <RotateLogoIcon width={55} height={53} css={{ padding: "1rem", cursor: "pointer" }} />
      ) : (
        <Logo4Icon />
      )}
      <div css={s.menuListStyle}>
        {MENU.map((menu) => (
          <button
            key={menu.id}
            type="button"
            css={[s.menuItemStyle(iconOnly), isActiveMenu(menu.path) && s.activeMenuItemStyle]}
            onClick={() => handleNavigate(menu.path)}
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
