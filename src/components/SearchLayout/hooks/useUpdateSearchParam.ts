import type { HomeQueryParamTypes, QueryParamTypes } from "@/components/SearchLayout/types/searchTypes";

export const useUpdateSearchParam = <T extends QueryParamTypes | HomeQueryParamTypes>(
  param: T,
  setParam: (param: T) => void
) => {
  const updateField = (field: keyof T, value: T[keyof T]) => {
    setParam({
      ...param,
      [field]: value,
    });
  };

  const updateTagList = (tagContent: string) => {
    if (!param || !Array.isArray(param.tags)) return; 

    const isTagExist = param.tags.includes(tagContent);
    const updatedTagList = isTagExist
      ? param.tags.filter((tagContentInList) => tagContentInList !== tagContent)
      : [...param.tags, tagContent];

    updateField("tags", updatedTagList as T[keyof T]);
  };

  return { updateField, updateTagList };
};
