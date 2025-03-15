import type { ChatRoomTypes, PageInfoTypes } from "@/pages/HomePage/types/homeDataTypes";

export interface GroupChatListResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    pageInfo: PageInfoTypes;
    chatRoomList: ChatRoomTypes[];
  };
}
