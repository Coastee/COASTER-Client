import type { ChatRoomTypes } from "@/components/DetailModal/types/chatRoomTypes";
import type { PageInfoTypes } from "@/pages/HomePage/types/homeDataTypes";
import type { Dispatch, SetStateAction } from "react";

export type RequestDateType = [number, number, number, number, number, number, number];

export interface FormDateTimeTypes {
  date: string;
  start: string;
  end: string;
}

export interface AddCoffeeChatTypes {
  title: string;
  content: string;
  hashTags: string[];
  maxCount: number;
  startDate: RequestDateType;
  endDate: RequestDateType;
  location: string;
  details: string;
}

export interface UseAddCoffeeChatProps {
  request: AddCoffeeChatTypes;
  setRequest: Dispatch<SetStateAction<AddCoffeeChatTypes>>;
  dateTime: { date: string; start: string; end: string };
  setDateTime: Dispatch<SetStateAction<{ date: string; start: string; end: string }>>;
  maxLengths: Record<string, number>;
  setIsVisible: (isVisible: boolean) => void;
  globalServer: { id: number } | null;
  image: File | null;
}

export interface CoffeeChatListResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    pageInfo: PageInfoTypes;
    chatRoomList: ChatRoomTypes[];
  };
}
