import thumbnail from "@//assets/img/detailBgImg.png";
import { SideModal, TagChip } from "@/components";
import type { SideModalProps } from "@/components/SideModal/types/sideModalTypes";
import * as s from "./GroupChatDetailModal.styles";

import ChatDetailUserInfo from "@/pages/GroupChatListPage/components/ChatDetailUserInfo/ChatDetailUserInfo";
import HamburgerMenu from "@/pages/GroupChatListPage/components/HamburgerMenu/HamburgerMenu";
import { GROUP_CHAT_DETAIL_DUMMY } from "@/pages/GroupChatListPage/constants/groupChatDetailDummy";
import { useState } from "react";

const GroupChatDetailModal = ({ isVisible, setIsVisible }: SideModalProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const detail = GROUP_CHAT_DETAIL_DUMMY;

  return (
    <SideModal
      modalStyle={{ width: "100%", maxWidth: "70rem" }}
      title={detail.title}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      extraButton={<HamburgerMenu isVisible={isMenuOpen} setIsVisible={setIsMenuOpen} />}
    >
      <div css={s.contentStyle}>
        <ChatDetailUserInfo
          nickname={detail.user.nickname}
          expYears={detail.user.userIntro.expYears}
          job={detail.user.userIntro.job}
        />
        <img src={detail.thumbnail || thumbnail} css={s.imageStyle} alt="썸네일" />
        <ul css={s.hashTagListStyle}>
          {detail.hashTagList.map((tag) => (
            <li key={tag.id}>
              <TagChip showCloseButton={false} id={tag.id} content={tag.content} />
            </li>
          ))}
        </ul>
        <div css={s.descriptionStyle}>{detail.content}</div>
      </div>
    </SideModal>
  );
};

export default GroupChatDetailModal;
