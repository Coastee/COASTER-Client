import { tokenInstance } from "@/apis/instance";
import type { HashTagResponse } from "@/components/SearchLayout/types/searchTypes";
import type { HashtagTypes } from "@/pages/HomePage/types/homeDataTypes";

export interface FetchHashtagSerachProps {
  serverId: number;
  keyword?: string;
  tags?: string[];
}

export const fetchHashtagSerach = async ({
  serverId,
  keyword,
  tags,
}: FetchHashtagSerachProps): Promise<HashtagTypes[] | []> => {
  try {
    const queryParams = new URLSearchParams();

    if (keyword) queryParams.append("keyword", keyword);
    if (tags && tags.length > 0) {
      for (const tag of tags) {
        queryParams.append("tags", tag);
      }
    }
    const response: HashTagResponse = await tokenInstance.get(`api/v1/servers/${serverId}/tags?${queryParams}`).json();
    return response.result.hashTagList;
  } catch (error) {
    console.error("해시태그 검색 실패:", error);
    throw error;
  }
};
