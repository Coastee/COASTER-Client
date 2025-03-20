import type { QueryParamTypes } from "@/components/SearchLayout/types/searchTypes";

export const useUpdateSearchParam = (param: QueryParamTypes, setParam: (param: QueryParamTypes) => void) => {
  const updateField = (field: keyof QueryParamTypes, value: string | number | string[]) => {
    setParam({
      ...param,
      [field]: value,
    });
  };

  const updateTagList = (tagContent: string) => {
    const isTagExist = param.tagList.includes(tagContent);

    const updatedTagList = isTagExist
      ? param.tagList.filter((tagContentInList) => tagContentInList !== tagContent)
      : [...param.tagList, tagContent];

    updateField("tagList", updatedTagList);
  };

  return { updateField, updateTagList };
};
