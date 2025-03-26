interface UserIntro {
  headline: string;
  job: string;
  expYears: number;
}

interface User {
  id: number;
  profileImage: string;
  nickname: string;
  linkedInVerify: boolean;
  userIntro: UserIntro;
}

export interface ChatTypes {
  id: number;
  user: User;
  content: string;
  createdDate: number[];
  type: string;
  chatRoomId: number;
}

export interface PageInfoTypes {
  lastPage: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
}

export interface ChatListResponseTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    pageInfo: PageInfoTypes;
    chatList: ChatTypes[];
  };
}

interface UserListTypes {
  id: number;
  linkedInVerify: boolean;
  profileImage: string;
  nickname: string;
  userIntro: {
    headline: string;
    job: string;
    expYears: number;
  };
}

export interface ChatMemberResponseTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    pageInfo: PageInfoTypes;
    userList: UserListTypes[];
  };
}
