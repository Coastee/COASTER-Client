import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import type { CareerContentTypes } from "@/pages/UserSettingPage/types/career";

export const useCareerValidation = (data: CareerContentTypes) => {
  const isTitleError = data.title.length > MAX_LENGTH.CAREER_DETAIL_TITLE || data.title.length === 0;

  const isContentError = data.contentList.map((content) => content.length > MAX_LENGTH.DETAIL);

  const isDateError = !Array.isArray(data.startDate) || (data.endDate !== null && !Array.isArray(data.endDate));

  return { isTitleError, isContentError, isDateError };
};
