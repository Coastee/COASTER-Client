interface Period {
  startDate: number[] | null;
  endDate: number[] | null;
}

export interface ChatRoomTypes {
  id: number;
  thumbnail: string | null;
  title: string;
  content: string;
  period: Period;
}

interface PageInfo {
  lastPage: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
}

export interface ChatRoomResult {
  pageInfo: PageInfo;
  chatRoomList: ChatRoomTypes[];
}

export interface ChatListTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: ChatRoomResult;
}
