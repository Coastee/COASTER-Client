import type { AddCoffeeChatTypes } from "@/pages/CoffeeChatListPage/types/coffeeChatTypes";

export const MAX_LENGTH = {
  title: 20,
  content: 80,
  maxCount: 1000,
  details: 30,
};

export const CHAT_FORM_FIELDS = {
  title: {
    headerTxt: "오프라인 커피챗 제목",
    placeholder: "오프라인 커피챗 제목을 입력해주세요.",
  },
  content: {
    headerTxt: "오프라인 커피챗 상세 설명",
    placeholder: "오프라인 커피챗 상세 설명을 입력하세요.",
  },
  hashtags: {
    headerTxt: "해시태그",
    detailTxt: "해시태그는 최대 10개까지 입력 가능합니다.",
  },
  maxCount: {
    headerTxt: "참여 인원",
    detailTxt: "최소 참여 인원은 2명입니다.",
  },
  dateTime: {
    headerTxt: "진행 날짜 및 시간",
    placeholder: "날짜 선택",
  },
  location: {
    headerTxt: "진행 장소",
    placeholders: [
      "진행할 장소를 입력하세요 (ex. 서울시 용산구 ㅇㅇ로)",
      "장소에 대한 설명을 입력하세요 (ex. 강남역 6번출구)",
    ],
  },
  file: {
    headerTxt: "사진 등록하기",
  },
};

export const DEFAULT_COFFEE_CHAT_VALUES: AddCoffeeChatTypes = {
  title: "",
  content: "",
  hashTags: [],
  maxCount: 2,
  startDate: [0, 0, 0, 0, 0, 0, 0],
  endDate: [0, 0, 0, 0, 0, 0, 0],
  location: "",
  details: "",
};

export const DEFAULT_DATE_TIME_VALUE = {
  date: "",
  start: "오후/12/00",
  end: "오후/1/00",
};
