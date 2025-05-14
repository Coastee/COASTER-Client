import { VerifyIcon } from "@/assets/svg";
import UserBox from "@/components/UserBox/UserBox";
import { forwardRef } from "react";

import * as s from "@/components/ProfileMenu/ProfileMenu.styles";
import { PATH } from "@/constants/path";
import { useKickoutMember } from "@/hooks/useKickOutMember";
import type { Member } from "@/stores/useMenuBarStore";
import type { ChatRoom } from "@/types";
import { useNavigate } from "react-router-dom";

interface ProfileMenuProps {
  member: Member;
  dmRoomId: number | null;
  chatRoomType: ChatRoom;
  serverId: number;
  groupId: number;
  onSideBarClose: () => void;
}

const ProfileMenu = forwardRef<HTMLDivElement, ProfileMenuProps>(
  (
    { member, dmRoomId, chatRoomType, serverId, groupId, onSideBarClose },
    ref
  ) => {
    const navigate = useNavigate();
    const { mutate } = useKickoutMember({
      serverId,
      chatRoomType,
      groupId: groupId,
      userId: member.user.id,
    });

    const handleNavigate = () => {
      navigate(`${PATH.MYPAGE}/${member.id}`);
    };

    const handleDM = () => {
      navigate(`${PATH.DM}`, {
        state: {
          userId: member.user.id,
          dmRoomId: dmRoomId,
          nickname: member.user.nickname,
          profileImage: member.user.profileImage,
          expYears: member.user.userIntro.expYears,
          job: member.user.userIntro.job,
        },
      });
    };

    const handleKick = () => {
      mutate();
      onSideBarClose();
    };

    return (
      <article css={s.backgroundStyle} ref={ref}>
        <div css={s.wrapperStyle}>
          <div css={s.layoutStyle}>
            <UserBox
              name={member.user.nickname}
              size="medium"
              profileImage={member.user.profileImage}
            />
            <div css={s.infoLayoutStyle}>
              <h1 css={s.nameStyle}>{member.user.nickname}</h1>
              <div css={s.infoStyle}>
                <h2>{member.user.userIntro.expYears}</h2>
                <p>년차</p>
                <h2>{member.user.userIntro.job}</h2>
              </div>
            </div>
          </div>
          {member.user.linkedInVerify && (
            <div css={s.verifyLayoutStyle}>
              <VerifyIcon width={20} height={20} />
              LinkedIn 인증
            </div>
          )}
          <div css={s.buttonLayoutStyle}>
            <button type="button" onClick={handleDM}>
              DM 보내기
            </button>
            <button type="button" onClick={handleNavigate}>
              상세 프로필 보러가기
            </button>
            <button type="button" onClick={handleKick}>
              강퇴하기
            </button>
          </div>
        </div>
      </article>
    );
  }
);

export default ProfileMenu;
