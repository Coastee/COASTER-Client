import { CloseNavIcon, ExitRoomIcon, ProfileIcon } from "@/assets/svg";
import { Divider } from "@/components";
import ProfileMenu from "@/components/ProfileMenu/ProfileMenu";
import * as s from "@/components/SideMenuBar/SideMenuBar.styles";
import UserBox from "@/components/UserBox/UserBox";
import { useMenuBarAction, useMenuBarContent, useMenuBarIsOpen } from "@/stores/useMenuBarStore";
import { type KeyboardEvent, type MouseEvent, useEffect, useState } from "react";

const SideMenuBar = () => {
  const members = useMenuBarContent();
  const [selectedMember, setSelectedMember] = useState<{ id: number; rect: DOMRect } | null>(null);
  const { closeMenuBar } = useMenuBarAction();
  const isOpen = useMenuBarIsOpen();

  const handleMemberInteraction = (
    member: (typeof members)[0],
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
  ) => {
    const rect = (event.currentTarget as HTMLButtonElement).getBoundingClientRect();
    setSelectedMember((prev) => (prev?.id === member.id ? null : { id: member.id, rect }));
  };

  // 메뉴바가 닫힐 때 선택된 멤버 초기화
  useEffect(() => {
    if (!isOpen) {
      setSelectedMember(null);
    }
  }, [isOpen]);

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
            {members.map((member, index) => (
              <div key={member.id} css={s.itemWrapperStyle}>
                <button
                  type="button"
                  css={s.itemStyle}
                  onClick={(e) => handleMemberInteraction(member, e)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleMemberInteraction(member, e);
                    }
                  }}
                >
                  <UserBox name={member.user.nickname} size="small" variant="default" />
                  <p>{member.user.nickname}</p>
                </button>
                {members.length > 1 && index < members.length - 1 && <Divider css={{ backgroundColor: "#4A6285" }} />}
                {selectedMember?.id === member.id && (
                  <div css={s.profileMenuWrapperStyle(selectedMember)}>
                    <ProfileMenu
                      name={member.user.nickname}
                      expYears={member.user.userIntro.expYears}
                      job={member.user.userIntro.job}
                      linkedInVerify={member.user.linkedInVerify}
                    />
                  </div>
                )}
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
