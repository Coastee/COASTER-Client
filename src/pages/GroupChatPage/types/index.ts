interface Period {
  startDate: string | null;
  endDate: string | null;
}

interface ChatRoom {
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

interface ChatRoomResult {
  pageInfo: PageInfo;
  chatRoomList: ChatRoom[];
}

export interface ChatListTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: ChatRoomResult;
}
