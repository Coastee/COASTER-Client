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

  const handleInputChange = useCallback((key: keyof CareerContentTypes, value: string | number[] | null) => {
    setCareerData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleDetailChange = useCallback((index: number, value: string) => {
    setCareerData((prev) => ({
      ...prev,
      contentList: prev.contentList.map((detail, i) => (i === index ? value : detail)),
    }));
  }, []);

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

  return {
    careerData,
    handleInputChange,
    handleDetailChange,
    handleAddDetailInput,
    handleDeleteDetailInput,
    setIsCurrentJob,
  };
};
