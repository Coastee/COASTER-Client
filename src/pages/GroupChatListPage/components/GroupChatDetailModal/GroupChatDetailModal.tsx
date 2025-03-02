import detailBgImg from "@/assets/img/detailBgImg.png";
import { SideModal, TagChip } from "@/components";
import type { SideModalProps } from "@/components/SideModal/types/sideModalTypes";
import ChatDetailUserInfo from "@/pages/GroupChatListPage/components/ChatDetailUserInfo/ChatDetailUserInfo";
import HamburgerMenu from "@/pages/GroupChatListPage/components/HamburgerMenu/HamburgerMenu";
import { useState } from "react";
import * as s from "./GroupChatDetailModal.styles";

interface GroupChatDetailModalProps extends SideModalProps {
  id: number;
  title: string;
  thumbnail?: string | null;
  content: string;
  hashTagList: { id: number; content: string }[];
  nickname: string;
  expYears: number;
  job: string;
}

const GroupChatDetailModal = ({
  id,
  title,
  thumbnail,
  content,
  hashTagList,
  nickname,
  expYears,
  job,
  isVisible,
  setIsVisible,
}: GroupChatDetailModalProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SideModal
      modalStyle={{ width: "100%", maxWidth: "70rem" }}
      title={title}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      extraButton={<HamburgerMenu isVisible={isMenuOpen} setIsVisible={setIsMenuOpen} />}
    >
      <div css={s.contentStyle}>
        <ChatDetailUserInfo nickname={nickname} expYears={expYears} job={job} />
        <img src={thumbnail || detailBgImg} css={s.imageStyle} alt="썸네일" />
        <ul css={s.hashTagListStyle}>
          {hashTagList.map((tag) => (
            <li key={tag.id}>
              <TagChip showCloseButton={false} id={tag.id} content={tag.content} />
            </li>
          ))}
        </ul>
        <div css={s.descriptionStyle}>{content}</div>
      </div>
    </SideModal>
  );
};

export default GroupChatDetailModal;
