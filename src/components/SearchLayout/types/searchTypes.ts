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
