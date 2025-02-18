export interface UseAddCoffeeChatProps {
  dateTime: { date: string; start: string; end: string };
  setDateTime: React.Dispatch<
    React.SetStateAction<{ date: string; start: string; end: string }>
  >;
  request: AddCoffeeChatTypes;
  setRequest: React.Dispatch<React.SetStateAction<AddCoffeeChatTypes>>;
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
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
