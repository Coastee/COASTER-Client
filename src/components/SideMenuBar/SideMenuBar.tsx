import { CloseNavIcon, ExitRoomIcon, ProfileIcon } from "@/assets/svg";
import { Divider } from "@/components";
import ProfileMenu from "@/components/ProfileMenu/ProfileMenu";

import { useExitChatRoom } from "@/components/DetailModal/hooks/useExitChatRoom";
import * as s from "@/components/SideMenuBar/SideMenuBar.styles";
import UserBox from "@/components/UserBox/UserBox";
import type { ChatRoomTypes } from "@/pages/ChatPage/types";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useMenuBarAction, useMenuBarContent, useMenuBarIsOpen } from "@/stores/useMenuBarStore";
import { type MouseEvent, useEffect, useState } from "react";

interface SideMenuBarProps {
  serverId: number;
  chatRoomType: string;
  selectedItemId: number;
  setSelectedRoom: (room: ChatRoomTypes | null) => void;
}

const SideMenuBar = ({ serverId, chatRoomType, selectedItemId, setSelectedRoom }: SideMenuBarProps) => {
  const [selectedMember, setSelectedMember] = useState<{ id: number } | null>(null);

  const { mutate: exitChatRoom } = useExitChatRoom();
  const members = useMenuBarContent();

  const { closeMenuBar } = useMenuBarAction();
  const isOpen = useMenuBarIsOpen();

  const menuBarRef = useOutsideClick<HTMLElement>(closeMenuBar);
  const profileMenuRef = useOutsideClick<HTMLDivElement>(() => setSelectedMember(null));

  const handleMemberInteraction = (member: (typeof members)[0], e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedMember((prev) => (prev?.id === member.id ? null : { id: member.id }));
  };

  useEffect(() => {
    if (!isOpen) {
      setSelectedMember(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExitClick = () => {
    exitChatRoom({ serverId, chatRoomType, groupId: selectedItemId });
    setSelectedRoom(null);
    closeMenuBar();
  };

  return (
    <nav css={s.layoutStyle} ref={menuBarRef}>
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
            {members.map((member, index) => (
              <div key={member.id} css={s.itemWrapperStyle}>
                <button
                  type="button"
                  css={s.itemStyle}
                  onClick={(e) => handleMemberInteraction(member, e)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleMemberInteraction(member, e as unknown as MouseEvent<HTMLButtonElement>);
                    }
                  }}
                >
                  <UserBox
                    name={member.user.nickname}
                    size="small"
                    variant="default"
                    profileImage={member.user.profileImage}
                  />
                  <p>{member.user.nickname}</p>
                </button>
                {members.length > 1 && index < members.length - 1 && <Divider css={{ backgroundColor: "#4A6285" }} />}
                {selectedMember?.id === member.id && (
                  <div css={s.profileMenuWrapperStyle} ref={profileMenuRef}>
                    <ProfileMenu {...member.user} />
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
        <div css={s.exitRoomWrapperStyle} onClick={handleExitClick} onKeyDown={handleExitClick}>
          <ExitRoomIcon width={27} height={26} />
          <p>나가기</p>
        </div>
      </div>
    </nav>
  );
};

export default SideMenuBar;
