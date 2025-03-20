export interface QueryParamTypes {
  page: number;
  sort: "name" | "remain" | "";
  scope: "joined" | "owner" | "";
  keyword: string;
  tagList: string[];
}

export interface SearchParamTypes {
  serverId: number;
  type: string;
  queryParam: QueryParamTypes;
}


