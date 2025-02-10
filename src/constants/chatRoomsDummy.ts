import rotateLogoImg from "../assets/img/rotateLogoImg.png";

export interface chatRooomPreviewTypes {
  id: number;
  title: string;
  currentUsers: number;
  maxUsers: number;
  desc: string;
  imgSrc: string | null;
}

export const CHAT_ROOMS_DUMMY: chatRooomPreviewTypes[] = [
  {
    id: 1,
    title: "강남 프엔 번개 모임 강남 프엔 번개 모임",
    currentUsers: 1,
    maxUsers: 10,
    desc: "프론트엔드 관련해서 여러가지 정보를 공유하는 방입니다! 도배글 작성 시 바로 강퇴합니다.",
    imgSrc: rotateLogoImg,
  },
  {
    id: 2,
    title: "서울 프엔 번개 모임",
    currentUsers: 2,
    maxUsers: 10,
    desc: "자바스크립트와 리액트에 대해 자유롭게 이야기하는 방입니다. 적극적으로 참여해주세요!자바스크립트와 리액트에 대해 자유롭게 이야기하는 방입니다. 적극적으로 참여해주세요!자바스크립트와 리액트에 대해 자유롭게 이야기하는 방입니다. 적극적으로 참여해주세요!자바스크립트와 리액트에 대해 자유롭게 이야기하는 방입니다. 적극적으로 참여해주세요!",
    imgSrc: rotateLogoImg,
  },
  {
    id: 3,
    title: "부산 프엔 번개 모임",
    currentUsers: 3,
    maxUsers: 10,
    desc: "프론트엔드 관련 여러 정보를 교류하는 방입니다. 적극적인 참여가 필요합니다.",
    imgSrc: rotateLogoImg,
  },
  {
    id: 4,
    title: "부산 프엔 번개 모임",
    currentUsers: 3,
    maxUsers: 10,
    desc: "프론트엔드 관련 여러 정보를 교류하는 방입니다. 적극적인 참여가 필요합니다.",
    imgSrc: rotateLogoImg,
  },
  {
    id: 5,
    title: "부산 프엔 번개 모임",
    currentUsers: 3,
    maxUsers: 10,
    desc: "프론트엔드 관련 여러 정보를 교류하는 방입니다. 적극적인 참여가 필요합니다.",
    imgSrc: rotateLogoImg,
  },
  {
    id: 6,
    title: "강남 프엔 번개 모임 강남 프엔 번개 모임",
    currentUsers: 1,
    maxUsers: 10,
    desc: "프론트엔드 관련해서 여러가지 정보를 공유하는 방입니다! 도배글 작성 시 바로 강퇴합니다.",
    imgSrc: rotateLogoImg,
  },
  {
    id: 7,
    title: "서울 프엔 번개 모임",
    currentUsers: 2,
    maxUsers: 10,
    desc: "자바스크립트와 리액트에 대해 자유롭게 이야기하는 방입니다. 적극적으로 참여해주세요!자바스크립트와 리액트에 대해 자유롭게 이야기하는 방입니다. 적극적으로 참여해주세요!자바스크립트와 리액트에 대해 자유롭게 이야기하는 방입니다. 적극적으로 참여해주세요!자바스크립트와 리액트에 대해 자유롭게 이야기하는 방입니다. 적극적으로 참여해주세요!",
    imgSrc: rotateLogoImg,
  },
  {
    id: 8,
    title: "부산 프엔 번개 모임",
    currentUsers: 3,
    maxUsers: 10,
    desc: "프론트엔드 관련 여러 정보를 교류하는 방입니다. 적극적인 참여가 필요합니다.",
    imgSrc: rotateLogoImg,
  },
  {
    id: 9,
    title: "부산 프엔 번개 모임",
    currentUsers: 3,
    maxUsers: 10,
    desc: "프론트엔드 관련 여러 정보를 교류하는 방입니다. 적극적인 참여가 필요합니다.",
    imgSrc: rotateLogoImg,
  },
  {
    id: 10,
    title: "부산 프엔 번개 모임",
    currentUsers: 3,
    maxUsers: 10,
    desc: "프론트엔드 관련 여러 정보를 교류하는 방입니다. 적극적인 참여가 필요합니다.",
    imgSrc: rotateLogoImg,
  },
];
