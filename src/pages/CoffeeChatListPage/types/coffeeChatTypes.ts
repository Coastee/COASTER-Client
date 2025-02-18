export interface UseAddCoffeeChatProps {
  dateTime: { date: string; start: string; end: string };
  setDateTime: React.Dispatch<
    React.SetStateAction<{ date: string; start: string; end: string }>
  >;
  setRequest: React.Dispatch<React.SetStateAction<AddCoffeeChatTypes>>;
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
