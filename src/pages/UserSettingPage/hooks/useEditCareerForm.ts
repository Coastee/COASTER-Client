import { SUPPORTING_TEXT } from "@/constants/supportingText";
import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import type { CareerContentTypes } from "@/pages/UserSettingPage/types/career";
import { useCallback, useState } from "react";

export const useEditCareerForm = (data?: CareerContentTypes) => {
  const [careerData, setCareerData] = useState<CareerContentTypes>({
    title: data?.title ?? "",
    contentList: data?.contentList ?? [""],
    startDate: data?.startDate ?? [0, 0, 0, 0, 0, 0, 0],
    endDate: data?.endDate ?? null,
  });

  const handleInputChange = (key: keyof CareerContentTypes, value: string | number[] | null) => {
    setCareerData((prev) => ({ ...prev, [key]: value }));
  };

  const handleDetailChange = (index: number, value: string) => {
    setCareerData((prev) => ({
      ...prev,
      contentList: prev.contentList.map((detail, i) => (i === index ? value : detail)),
    }));
  };

  const handleAddDetailInput = () => {
    if (careerData.contentList.length < MAX_LENGTH.DETAIL_COUNT) {
      setCareerData((prev) => ({
        ...prev,
        contentList: [...prev.contentList, ""],
      }));
    }
  };

  const handleDeleteDetailInput = (index: number) => {
    setCareerData((prev) => ({
      ...prev,
      contentList: prev.contentList.filter((_, i) => i !== index),
    }));
  };

  const setIsCurrentJob = (isCurrent: boolean) => {
    setCareerData((prev) => ({
      ...prev,
      endDate: isCurrent ? null : [0, 0, 0, 0, 0, 0, 0],
    }));
  };

  const isTitleError = careerData.title.length > MAX_LENGTH.CAREER_DETAIL_TITLE || careerData.title.length === 0;
  const isContentError = careerData.contentList.map((content) => content.length > MAX_LENGTH.DETAIL);
  const isDateError =
    !Array.isArray(careerData.startDate) || (careerData.endDate !== null && !Array.isArray(careerData.endDate));

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

  return {
    careerData,
    handleInputChange,
    handleDetailChange,
    handleAddDetailInput,
    handleDeleteDetailInput,
    setIsCurrentJob,
    handleSupportingText,
    isTitleError,
    isContentError,
    isDateError,
  };
};
