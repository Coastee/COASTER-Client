export interface QueryParamTypes {
  page: number;
  sort: string;
  scope: "joined" | "owner" | "";
  keyword: string;
  tagList: string[];
}

export interface SearchParamTypes {
  serverId: number;
  type: string;
  queryParam: QueryParamTypes;
}


