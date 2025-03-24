import type { CareerResponseTypes, ExperienceTypes } from "@/pages/UserSettingPage/types/career";
import { formatDate } from "@/pages/UserSettingPage/utils/date";
import { useCallback, useState } from "react";

export const useEditCareerForm = (data?: ExperienceTypes) => {
  const [careerData, setCareerData] = useState<CareerResponseTypes>({
    title: data?.title ?? "",
    contentList: data?.contentList ?? [""],
    startDate: data?.startDate ? formatDate(data.startDate.join("")) : "",
    endDate: data?.endDate ? formatDate(data.endDate.join("")) : "",
  });

  const handleInputChange = useCallback((key: keyof CareerResponseTypes, value: string) => {
    setCareerData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleDetailChange = useCallback((index: number, value: string) => {
    setCareerData((prev) => ({
      ...prev,
      contentList: prev.contentList.map((detail, i) => (i === index ? value : detail)),
    }));
  }, []);

  const handleAddDetailInput = () => {
    setCareerData((prev) => ({
      ...prev,
      contentList: [...prev.contentList, ""],
    }));
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
      endDate: isCurrent ? "" : prev.endDate,
    }));
  };

  const handleDateInput = useCallback((e: React.ChangeEvent<HTMLInputElement>, dateType: "startDate" | "endDate") => {
    const value = e.target.value.replace(/\D/g, ""); // 숫자만 남기기
    if (value === "") {
      setCareerData((prev) => ({ ...prev, [dateType]: "" }));
      return;
    }

    const formattedValue = formatDate(value);
    setCareerData((prev) => ({ ...prev, [dateType]: formattedValue }));
  }, []);

  return {
    careerData,
    setCareerData,
    handleInputChange,
    handleDetailChange,
    handleAddDetailInput,
    handleDeleteDetailInput,
    setIsCurrentJob,
    handleDateInput,
  };
};
