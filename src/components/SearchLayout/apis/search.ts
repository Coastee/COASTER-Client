import { tokenInstance } from "@/apis/instance";
import type { SearchParamTypes } from "@/components/SearchLayout/types/searchTypes";
import type { GroupChatListResponse } from "@/pages/GroupChatListPage/types/groupChatTypes";

export const fetchSearchResult = async ({
  serverId,
  type,
  queryParam,
}: SearchParamTypes): Promise<GroupChatListResponse> => {
  try {
    const { page, sort, scope, keyword, tags } = queryParam;

    const queryParams = new URLSearchParams();

    queryParams.append("page", page.toString());
    if (sort && sort !== "default") queryParams.append("sort", sort);
    if (scope) queryParams.append("scope", scope);
    if (keyword) queryParams.append("keyword", keyword);
    if (tags && tags.length > 0) {
      for (const tag of tags) {
        queryParams.append("tags", tag);
      }
    }

    const response: GroupChatListResponse = await tokenInstance
      .get(`api/v1/servers/${serverId}/${type}?${queryParams}`)
      .json();

    return response;
  } catch (error) {
    console.error("검색 실패:", error);
    throw error;
  }
};
