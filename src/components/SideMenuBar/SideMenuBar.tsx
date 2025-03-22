import { CloseNavIcon, ExitRoomIcon, ProfileIcon } from "@/assets/svg";
import { Divider } from "@/components";
import * as s from "@/components/SideMenuBar/SideMenuBar.styles";
import UserBox from "@/components/UserBox/UserBox";
import { useMenuBarAction, useMenuBarContent, useMenuBarIsOpen } from "@/stores/useMenuBarStore";

const SideMenuBar = () => {
  const members = useMenuBarContent();

  const MEMBER_LIST = [
    {
      name: "김철수",
      image: "https://via.placeholder.com/150",
      id: "1",
    },
    {
      name: "이영희",
      image: "https://via.placeholder.com/150",
      id: "2",
    },
    {
      name: "박영수",
      image: "https://via.placeholder.com/150",
      id: "3",
    },
  ];

  const { closeMenuBar } = useMenuBarAction();
  const isOpen = useMenuBarIsOpen();

  if (!isOpen) return null;

  return (
    <nav css={s.layoutStyle}>
      <div css={s.wrapperStyle(isOpen)}>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div css={s.closeNavIconWrapperStyle} onClick={closeMenuBar}>
          <CloseNavIcon width={20} height={20} />
          <p>접어두기</p>
        </div>
        <div css={s.titleLayoutStyle}>
          <ProfileIcon width={15} height={14} />
          <h1>멤버 목록</h1>
        </div>
        <div css={s.listWrapperStyle}>
          <ul css={s.listStyle}>
            {MEMBER_LIST.map((member, index) => (
              <div key={member.id} css={s.itemWrapperStyle}>
                <li css={s.itemStyle}>
                  <UserBox name={member.name} size="small" variant="default" />
                  <p>{member.name}</p>
                </li>
                {members.length > 1 && index < members.length - 1 && <Divider css={{ backgroundColor: "#4A6285 " }} />}
              </div>
            ))}
          </ul>
        </div>
        <div css={s.exitRoomWrapperStyle}>
          <ExitRoomIcon width={27} height={26} />
          <p>나가기</p>
        </div>
      </div>
    </nav>
  );
};

export default SideMenuBar;
