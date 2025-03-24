import { fetchSearchResult } from "@/components/SearchLayout/apis/search";
import useDebounce from "@/components/SearchLayout/hooks/useDebounce";
import type { SearchParamTypes } from "@/components/SearchLayout/types/searchTypes";
import { useQuery } from "@tanstack/react-query";

export const useSearch = ({ serverId, type, queryParam }: SearchParamTypes) => {
  const debouncedQueryParam = useDebounce(queryParam, 500);

  return useQuery({
    queryKey: ["searchResult", serverId, type, debouncedQueryParam],
    queryFn: () =>
      fetchSearchResult({
        serverId,
        type,
        queryParam: debouncedQueryParam,
      }),
    enabled: !!serverId && !!type && !!debouncedQueryParam && queryParam !== undefined,
  });
};
