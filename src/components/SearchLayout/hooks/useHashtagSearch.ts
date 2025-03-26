import { type FetchHashtagSerachProps, fetchHashtagSerach } from "@/components/SearchLayout/apis/hashtagSearch";
import { useQuery } from "@tanstack/react-query";

export const useHashtagSearch = ({ serverId, keyword, tags }: FetchHashtagSerachProps) => {
  return useQuery({
    queryKey: ["searchResult", serverId, keyword, tags],
    queryFn: () =>
      fetchHashtagSerach({
        serverId,
        keyword,
        tags,
      }),
    enabled: !!serverId,
  });
};
