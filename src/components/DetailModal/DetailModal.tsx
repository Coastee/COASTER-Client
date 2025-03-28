import detailBgImg from "@/assets/img/detailBgImg.png";
import { SideModal, TagChip } from "@/components";
import DetailMeta from "@/components/DetailModal/components/DetailMeta/DetailMeta";
import DetailUserInfo from "@/components/DetailModal/components/DetailUserInfo/DetailUserInfo";
import HamburgerMenu from "@/components/DetailModal/components/HamburgerMenu/HamburgerMenu";
import type { ChatRoomTypes } from "@/components/DetailModal/types/chatRoomTypes";
import { useState } from "react";
import * as s from "./DetailModal.styles";

interface DetailModalProps {
  data: ChatRoomTypes;
  serverId: number;
  selectedItemId: number;
  isCoffeeChat?: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const DetailModal = ({ data, serverId, selectedItemId, isCoffeeChat = false, setIsVisible }: DetailModalProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const chatRoomType = isCoffeeChat ? "meetings" : "groups";

  return (
    <SideModal
      modalStyle={{ width: "100%", maxWidth: "70rem" }}
      title={data.title}
      isVisible={true}
      setIsVisible={setIsVisible}
      extraButton={
        <HamburgerMenu
          serverId={serverId}
          chatRoomType={chatRoomType}
          selectedItemId={selectedItemId}
          isVisible={isMenuOpen}
          setIsVisible={setIsMenuOpen}
        />
      }
      {...(isCoffeeChat ? { currentUsers: data.currentCount, maxUsers: data.maxCount } : {})}
    >
      <div css={s.contentStyle}>
        <DetailUserInfo
          nickname={data.user.nickname}
          expYears={data.user.userIntro.expYears}
          job={data.user.userIntro.job}
          profileImage={data.user.profileImage}
        />
        {isCoffeeChat && (
          <DetailMeta
            location={data.address.location}
            details={data.address.details}
            startDate={data.period.startDate}
            endDate={data.period.endDate}
          />
        )}
        <img
          src={data.thumbnail || detailBgImg}
          onError={(e) => {
            e.currentTarget.src = detailBgImg;
          }}
          css={s.imageStyle}
          alt="썸네일"
        />
        <ul css={s.hashTagListStyle}>
          {data.hashTagList.map((tag) => (
            <li key={tag.id}>
              <TagChip showCloseButton={false} id={tag.id} content={tag.content} />
            </li>
          ))}
        </ul>
        <div css={s.descriptionStyle}>{data.content}</div>
      </div>
    </SideModal>
  );
};

export default DetailModal;
