import { tokenInstance } from "@/apis/instance";
import type { SearchParamTypes } from "@/components/SearchLayout/types/searchTypes";
import type { GroupChatListResponse } from "@/pages/GroupChatListPage/types/groupChatTypes";

export const fetchSearchResult = async ({
  serverId,
  type,
  queryParam,
}: SearchParamTypes): Promise<GroupChatListResponse> => {
  try {
    const { page, sort, scope, keyword, tagList } = queryParam;

    const queryParams = new URLSearchParams();

    queryParams.append("page", page.toString());
    if (sort && sort !== "default") queryParams.append("sort", sort);
    if (scope) queryParams.append("scope", scope);
    if (keyword) queryParams.append("keyword", keyword);
    if (tagList && tagList.length > 0) {
      for (const tag of tagList) {
        queryParams.append("tagList", tag);
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
