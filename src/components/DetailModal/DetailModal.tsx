import detailBgImg from "@/assets/img/detailBgImg.png";
import { SideModal, TagChip } from "@/components";
import DetailMeta from "@/components/DetailModal/components/DetailMeta/DetailMeta";
import DetailUserInfo from "@/components/DetailModal/components/DetailUserInfo/DetailUserInfo";
import HamburgerMenu from "@/components/DetailModal/components/HamburgerMenu/HamburgerMenu";
import type { SideModalProps } from "@/components/SideModal/types/sideModalTypes";
import { useState } from "react";
import * as s from "./DetailModal.styles";

interface DetailModalProps extends SideModalProps {
  id: number;
  title: string;
  thumbnail: string | null;
  content: string;
  hashTagList: { id: number; content: string }[];
  nickname: string;
  expYears: number;
  job: string;
  currentCount?: number;
  maxCount?: number;
  location?: string;
  details?: string;
  startDate?: number[];
  endDate?: number[];
  isCoffeeChat?: boolean;
}

const DetailModal = ({
  id,
  title,
  thumbnail = detailBgImg,
  content,
  currentCount,
  maxCount,
  hashTagList,
  nickname,
  expYears,
  job,
  location = "",
  details = "",
  startDate = [0, 0, 0, 0, 0, 0, 0],
  endDate = [0, 0, 0, 0, 0, 0, 0],
  isCoffeeChat = false,
  isVisible,
  setIsVisible,
}: DetailModalProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SideModal
      modalStyle={{ width: "100%", maxWidth: "70rem" }}
      title={title}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      currentUsers={currentCount}
      maxUsers={maxCount}
      extraButton={<HamburgerMenu isVisible={isMenuOpen} setIsVisible={setIsMenuOpen} />}
    >
      <div css={s.contentStyle}>
        <DetailUserInfo nickname={nickname} expYears={expYears} job={job} />
        {isCoffeeChat && <DetailMeta location={location} details={details} startDate={startDate} endDate={endDate} />}
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

export default DetailModal;
