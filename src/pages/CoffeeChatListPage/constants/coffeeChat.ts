import type { AddCoffeeChatTypes } from "@/pages/CoffeeChatListPage/types/coffeeChatTypes";

export const TEXT_MAX_LENGTH = {
  title: 20,
  content: 80,
  maxCount: 1000,
  details: 30,
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
