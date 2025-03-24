import { useSearch } from "@/components/SearchLayout/hooks/useSearch";
import type { QueryParamTypes } from "@/components/SearchLayout/types/searchTypes";

export const useHomeSearch = (serverId: number, queryParam: QueryParamTypes) => {
  const { data: groupsSearchResult } = useSearch({ serverId, type: "groups", queryParam });
  const { data: meetingsSearchResult } = useSearch({ serverId, type: "meetings", queryParam });

  return {
    homeGroupRooms: groupsSearchResult?.result.chatRoomList.slice(0, 3) || [],
    homeMeetingRooms: meetingsSearchResult?.result.chatRoomList.slice(0, 3) || [],
  };
};
