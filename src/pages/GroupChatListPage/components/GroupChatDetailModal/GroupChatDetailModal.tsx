import thumbnail from "@//assets/img/detailBgImg.png";
import { HamburgerIcon } from "@/assets/svg";
import { SideModal, TagChip, UserBox } from "@/components";
import type { SideModalProps } from "@/components/SideModal/types/sideModalTypes";
import * as s from "./GroupChatDetailModal.styles";

import { GROUP_CHAT_DETAIL_DUMMY } from "@/pages/GroupChatListPage/constants/groupChatDetailDummy";

const GroupChatDetailModal = ({ isVisible, setIsVisible }: SideModalProps) => {
  const detail = GROUP_CHAT_DETAIL_DUMMY;
  return (
    <SideModal
      modalStyle={{ width: "100%", maxWidth: "70rem" }}
      title={detail.title}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      extraButton={<HamburgerIcon width={30} height={20} />}
    >
      <div css={s.contentStyle}>
        <div css={s.userStyle}>
          <UserBox name="이영희" />
          <div css={{ display: "flex", flexDirection: "column", gap: "0.34rem" }}>
            <div css={s.userInfoTopStyle}>
              <h1>{detail.user.nickname}</h1>
              <div>방장</div>
            </div>
            <div css={s.userInfoBottomStyle}>
              <p>{detail.user.userIntro.expYears}년차</p>
              <div />
              <p>{detail.user.userIntro.job}</p>
            </div>
          </div>
        </div>
        <img src={detail.thumbnail || thumbnail} css={s.imageStyle} alt="썸네일" />
        <ul css={s.hashTagListStyle}>
          {detail.hashTagList.map((tag) => (
            <li key={tag.id}>
              <TagChip showCloseButton={false} id={tag.id} content={tag.content} />
            </li>
          ))}
        </ul>
        <div css={s.descriptionStyle}>
          <p>{detail.content}</p>
        </div>
      </div>
    </SideModal>
  );
};

export default GroupChatDetailModal;
