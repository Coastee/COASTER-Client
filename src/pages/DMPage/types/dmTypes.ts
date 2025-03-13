export interface UserIntroTypes {
  headline: string;
  job: string;
  expYears: number;
}

export interface UserTypes {
  id: number;
  profileImage: string;
  nickname: string;
  linkedInVerify: boolean;
  userIntro: UserIntroTypes;
}

export interface DMTypes {
  id: number;
  user: UserTypes;
  content: string;
  createdDate: number[];
  type: "TALK" | string;
  dmRoomId: number;
}

export interface DMRoomTypes {
  id: number;
  user: UserTypes;
  dm: DMTypes;
}

export interface DMResponseTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    pageInfo: {
      lastPage: boolean;
      totalPages: number;
      totalElements: number;
      size: number;
    };
    dmRoomList: DMRoomTypes[];
  };
}

export interface DMLogResponseTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    pageInfo: {
      lastPage: boolean;
      totalPages: number;
      totalElements: number;
      size: number;
    };
    dmList: DMTypes[];
  };
}
