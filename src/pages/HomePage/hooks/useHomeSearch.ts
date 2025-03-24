import { useSearch } from "@/components/SearchLayout/hooks/useSearch";
import { useEffect, useState } from "react";
import type { QueryParamTypes } from "@/components/SearchLayout/types/searchTypes";

export const useHomeSearch = (serverId: number, queryParam: QueryParamTypes, delay: number) => {
  const { data: groupsSearchResult } = useSearch({ serverId, type: "groups", queryParam });
  const { data: meetingsSearchResult } = useSearch({ serverId, type: "meetings", queryParam });

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSearching(queryParam.keyword !== "" || queryParam.tags.length > 0);
    }, delay);

    return () => clearTimeout(timeout);
  }, [queryParam, delay]);

  return {
    homeGroupRooms: groupsSearchResult?.result.chatRoomList.slice(0, 3) || [],
    homeMeetingRooms: meetingsSearchResult?.result.chatRoomList.slice(0, 3) || [],
    isSearching,
  };
};
