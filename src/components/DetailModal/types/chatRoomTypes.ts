export interface ChatRoomTypes {
  id: number;
  thumbnail: string | null;
  title: string;
  content: string;
  period: {
    startDate: number[];
    endDate: number[];
  };
  user: {
    id: number;
    profileImage: string;
    nickname: string;
    linkedInVerify: boolean;
    userIntro: {
      headline: string;
      job: string;
      expYears: number;
    };
  };
  address: {
    location: string;
    details: string;
  };
  hasEntered: boolean;
  maxCount: number;
  currentCount: number;
  hashTagList: {
    id: number;
    content: string;
  }[];
}
