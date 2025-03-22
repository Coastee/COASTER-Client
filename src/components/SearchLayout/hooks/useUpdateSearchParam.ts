import type { QueryParamTypes } from "@/components/SearchLayout/types/searchTypes";

export const useUpdateSearchParam = (param: QueryParamTypes, setParam: (param: QueryParamTypes) => void) => {
  const updateField = (field: keyof QueryParamTypes, value: string | number | string[]) => {
    setParam({
      ...param,
      [field]: value,
    });
  };

  const updateTagList = (tagContent: string) => {
    const isTagExist = param.tags.includes(tagContent);

    const updatedTagList = isTagExist
      ? param.tags.filter((tagContentInList) => tagContentInList !== tagContent)
      : [...param.tags, tagContent];

    updateField("tags", updatedTagList);
  };

  return { updateField, updateTagList };
};
