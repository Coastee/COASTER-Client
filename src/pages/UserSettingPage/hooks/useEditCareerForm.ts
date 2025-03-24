import type { CareerResponseTypes, ExperienceTypes } from "@/pages/UserSettingPage/types/career";
import { formatDate, formatDateArrayToString } from "@/pages/UserSettingPage/utils/date";
import { useCallback, useState } from "react";

export const useEditCareerForm = (data?: ExperienceTypes) => {
  const [careerData, setCareerData] = useState<CareerResponseTypes>({
    title: data?.title ?? "",
    contentList: data?.contentList ?? [""],
    startDate: data?.startDate ? formatDateArrayToString(data.startDate) : "",
    endDate: data?.endDate ? formatDateArrayToString(data.endDate) : "",
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

  const handleCheckBoxChange = () => {
    setCareerData((prev) => ({
      ...prev,
      endDate: prev.endDate ? "" : formatDate(new Date().toISOString().slice(0, 10).replace(/-/g, ".")),
    }));
  };

  const handleDateInput = useCallback((e: React.ChangeEvent<HTMLInputElement>, dateType: "startDate" | "endDate") => {
    setCareerData((prev) => ({ ...prev, [dateType]: e.target.value }));
  }, []);

  return {
    careerData,
    setCareerData,
    handleInputChange,
    handleDetailChange,
    handleAddDetailInput,
    handleDeleteDetailInput,
    handleCheckBoxChange,
    handleDateInput,
  };
};
