import type { Dispatch, SetStateAction } from "react";

export interface UseAddCoffeeChatProps {
  dateTime: { date: string; start: string; end: string };
  setDateTime: Dispatch<
    SetStateAction<{ date: string; start: string; end: string }>
  >;
  setRequest: Dispatch<SetStateAction<AddCoffeeChatTypes>>;
  maxLengths: Record<string, number>;
}

export interface AddCoffeeChatTypes {
  title: string;
  content: string;
  hashTags: string[];
  maxCount: number;
  startDate: [number, number, number, number, number, number, number];
  endDate: [number, number, number, number, number, number, number];
  location: string;
  details: string;
}
