import type { Client } from "@stomp/stompjs";

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

export interface ChatRoomProps {
  dmList: DMRoomTypes[];
  userId: number | null;
  roomId: number | null;
  setRoomId: (id: number | null) => void;
  nickname?: string;
  expYears?: number;
  job?: string;
  profileImage: string;
}

export interface DmListProps {
  dmList: DMRoomTypes[];
  setRoomId: (id: number) => void;
  setNewDmRoomId: (id: number) => void;
  setUserId: (id: number) => void;
  nickname: string;
}

export interface StompClientStateTypes {
  client: Client;
  sendMessage: (message: string) => void;
}
