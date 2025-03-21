export type HashtagTypes = {
  id: number;
  content: string;
};

export type UserIntroTypes = {
  headline: string;
  job: string;
  expYears: number;
};

export type UserTypes = {
  id: number;
  profileImage: string;
  nickname: string;
  userIntro: UserIntroTypes;
};

export type AddressTypes = {
  location: string | null;
  details: string | null;
};

export type PeriodTypes = {
  startDate: number[] | null;
  endDate: number[] | null;
};

export type ChatRoomTypes = {
  id: number;
  thumbnail: string | null;
  title: string;
  content: string;
  period: PeriodTypes;
  user: UserTypes;
  address: AddressTypes;
  hasEntered: boolean | null;
  maxCount: number;
  currentCount: number;
  hashTagList: HashtagTypes[];
};

export type PageInfoTypes = {
  lastPage: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
};

export type ChatTypes = {
  id: number;
  user: UserTypes;
  content: string;
  createdDate: number[];
  type: string;
};

export type HomeDataTypes = {
  hashTagList: HashtagTypes[];
  groupChatRoom: {
    pageInfo: PageInfoTypes;
    chatRoomList: ChatRoomTypes[];
  };
  meetingChatRoom: {
    pageInfo: PageInfoTypes;
    chatRoomList: ChatRoomTypes[];
  };
  notice: {
    pageInfo: PageInfoTypes;
    noticeList:
      | {
          id: number;
          title: string;
          content: string;
        }[];
  } | null;
  chat: {
    pageInfo: PageInfoTypes;
    chatList: ChatTypes[];
  } | null;
};

export type HomeResponseTypes = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: HomeDataTypes;
};
