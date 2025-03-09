import type { Dispatch, SetStateAction } from "react";

export type RequestDateType = [number, number, number, number, number, number, number];

export interface FormDateTimeTypes {
  date: string;
  start: string;
  end: string;
}

export interface UseAddCoffeeChatProps {
  dateTime: { date: string; start: string; end: string };
  setDateTime: Dispatch<SetStateAction<{ date: string; start: string; end: string }>>;
  setRequest: Dispatch<SetStateAction<AddCoffeeChatTypes>>;
  maxLengths: Record<string, number>;
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
