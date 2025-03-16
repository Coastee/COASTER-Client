import { CloseNavIcon, ProfileIcon } from "@/assets/svg";
import { Divider } from "@/components";
import * as s from "@/components/SideMenuBar/SideMenuBar.styles";
import UserBox from "@/components/UserBox/UserBox";
import { useMenuBarAction, useMenuBarContent, useMenuBarIsOpen } from "@/stores/useMenuBarStore";
import { theme } from "@/styles/theme/theme";

const SideMenuBar = () => {
  const members = useMenuBarContent();
  const { closeMenuBar } = useMenuBarAction();
  const isOpen = useMenuBarIsOpen();

  if (!isOpen) return null;

  return (
    <nav css={s.wrapperStyle(isOpen)}>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div css={s.closeNavIconWrapperStyle} onClick={closeMenuBar}>
        <CloseNavIcon width={20} height={10} />
        <p>접어두기</p>
      </div>
      <div>
        <ProfileIcon width={15} height={14} />
        <h1>멤버 목록</h1>
      </div>
      <div css={s.listWrapperStyle}>
        <ul css={s.listStyle}>
          {members.map((member, index) => (
            <li key={member.id} css={s.itemStyle}>
              <UserBox name={member.name} />
              <p>{member.name}</p>
              {members.length > 1 && index < members.length - 1 && (
                <Divider css={{ backgroundColor: theme.color.dark5 }} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideMenuBar;
