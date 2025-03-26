import type { HashtagTypes, PageInfoTypes } from "@/pages/HomePage/types/homeDataTypes";

export interface QueryParamTypes {
  page: number;
  sort: string;
  scope: "joined" | "owner" | "";
  keyword: string;
  tags: string[];
}

export interface HomeQueryParamTypes {
  keyword: string;
  tags: string[];
}

export interface SearchParamTypes {
  serverId: number;
  type: string;
  queryParam: QueryParamTypes;
}

export interface HashTagResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    pageInfo: PageInfoTypes;
    hashTagList: HashtagTypes[];
  };
}
