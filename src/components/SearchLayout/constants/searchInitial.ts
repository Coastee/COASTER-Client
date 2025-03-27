import type { HomeQueryParamTypes, QueryParamTypes } from "@/components/SearchLayout/types/searchTypes";

export const INITIAL_SELECTED_ITEM = { id: null, type: null };

export const INITIAL_QUERY_PARAM: QueryParamTypes = {
  page: 0,
  sort: "",
  scope: "",
  keyword: "",
  tags: [],
};

export const HOME_QUERY_PARAM: HomeQueryParamTypes = {
  keyword: "",
  tags: [],
};
