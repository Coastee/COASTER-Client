export interface ChatRoomTypes {
  id: number;
  thumbnail: string | null;
  title: string;
  content: string;
  period: {
    startDate: number[] | null;
    endDate: number[] | null;
  };
  user: {
    id: number;
    profileImage: string;
    nickname: string;
    linkedInVerify?: boolean;
    userIntro: {
      headline: string;
      job: string;
      expYears: number;
    };
  };
  address: {
    location: string | null;
    details: string | null;
  };
  hasEntered: boolean | null;
  maxCount: number;
  currentCount: number;
  hashTagList: {
    id: number;
    content: string;
  }[];
}