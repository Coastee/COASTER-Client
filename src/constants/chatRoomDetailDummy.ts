import rotateLogoImg from "../assets/img/rotateLogoImg.png";

export interface ChatRoomDetailType {
  id: number;
  title: string;
  currentUsers: number | undefined;
  maxUsers: number | undefined;
  desc: string;
  imgSrc: string;
}

export const CHAT_ROOM_DETAIL_DUMMY: ChatRoomDetailType = {
  id: 1,
  title:
    "강남 프엔 번개 모임 강남 프엔 번개 모임강남 프엔 번개 모임 강남 프엔 번개 모임",
  currentUsers: undefined,
  maxUsers: undefined,
  desc: "프론트엔드 관련해서 여러가지 정보를 공유하는 방입니다! 도배글 작성 시 바로 강퇴합니다.",
  imgSrc: rotateLogoImg,
};
