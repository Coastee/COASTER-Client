import { SUPPORTING_TEXT } from "@/constants/supportingText";
import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import type { CareerContentTypes } from "@/pages/UserSettingPage/types/career";
import { useCallback } from "react";

export const useCareerValidation = (data: CareerContentTypes) => {
  const isTitleError = data.title.length > MAX_LENGTH.CAREER_DETAIL_TITLE || data.title.length === 0;

  const isContentError = data.contentList.map((content) => content.length > MAX_LENGTH.DETAIL);

  const isDateError = !Array.isArray(data.startDate) || (data.endDate !== null && !Array.isArray(data.endDate));

  const handleSupportingText = useCallback(
    (key: keyof CareerContentTypes, index?: number) => {
      if (key === "contentList" && typeof index === "number") {
        return isContentError[index] ? SUPPORTING_TEXT.CONTENT : "";
      }

      switch (key) {
        case "title":
          return isTitleError ? SUPPORTING_TEXT.CAREER_DETAIL_TITLE : "";
        case "startDate":
        case "endDate":
          return isDateError ? SUPPORTING_TEXT.DATE : "";
        default:
          return "";
      }
    },
    [isTitleError, isContentError, isDateError],
  );

  return { isTitleError, isContentError, isDateError, handleSupportingText };
};
