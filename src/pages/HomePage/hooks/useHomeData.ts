import useDebounce from "@/components/SearchLayout/hooks/useDebounce";
import { fetchServerHome } from "@/components/ServerHeader/apis/server";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useHomeData = (serverId?: number, queryParam?: { keyword: string; tags: string[] }) => {
  const debouncedServerId = useDebounce(serverId, 500);
  const debouncedQueryParam = useDebounce(queryParam, 500);

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching((debouncedQueryParam?.keyword ?? "").trim() !== "" || (debouncedQueryParam?.tags?.length ?? 0) > 0);
  }, [debouncedQueryParam]);

  const queryResult = useQuery({
    queryKey: ["serverHome", debouncedServerId, debouncedQueryParam],
    queryFn: async () => {
      if (debouncedServerId === undefined) {
        return Promise.reject(new Error("serverId is undefined"));
      }

      const response = await fetchServerHome(debouncedServerId, debouncedQueryParam);

      const homeGroupRooms = response.groupChatRoom.chatRoomList;
      const homeMeetingRooms = response.meetingChatRoom.chatRoomList;
      const hashTagList = response?.hashTagList;
      const notice = response?.notice;
      const chat = response?.chat;

      return { homeGroupRooms, homeMeetingRooms, hashTagList, notice, chat };
    },
    enabled: !!debouncedServerId && !!debouncedQueryParam,
    placeholderData: keepPreviousData,
  });

  return { ...queryResult, isSearching };
};
