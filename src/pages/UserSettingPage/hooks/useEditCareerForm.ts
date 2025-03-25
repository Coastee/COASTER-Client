import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import type { CareerContentTypes, CareerResponseTypes, ExperienceTypes } from "@/pages/UserSettingPage/types/career";
import { formatDate, formatDateArrayToString } from "@/pages/UserSettingPage/utils/date";
import { type ChangeEvent, useCallback, useState } from "react";

export const useEditCareerForm = (data?: ExperienceTypes) => {
  const [careerData, setCareerData] = useState<CareerResponseTypes>({
    title: data?.title ?? "",
    contentList: data?.contentList ?? [""],
    startDate: data?.startDate ? formatDateArrayToString(data.startDate) : "",
    endDate: data?.endDate ? formatDateArrayToString(data.endDate) : "",
  });

  const handleInputChange = useCallback((key: keyof CareerContentTypes, value: string | number[]) => {
    const maxLength = MAX_LENGTH[key as keyof typeof MAX_LENGTH];

    let slicedValue = value;

    if (typeof value === "string" && value.length > maxLength) {
      slicedValue = value.slice(0, maxLength - 1);
    }

    setCareerData((prev) => ({ ...prev, [key]: slicedValue }));
  }, []);

  const handleDetailChange = useCallback((index: number, value: string) => {
    let slicedValue = value;

    if (value.length > MAX_LENGTH.DETAIL) {
      slicedValue = value.slice(0, MAX_LENGTH.DETAIL - 1);
    }

    setCareerData((prev) => ({
      ...prev,
      contentList: prev.contentList.map((detail, i) => (i === index ? slicedValue : detail)),
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

  const handleCheckBoxChange = () => {
    setCareerData((prev) => ({
      ...prev,
      endDate: prev.endDate ? "" : formatDate(new Date().toISOString().slice(0, 10).replace(/-/g, ".")),
    }));
  };

  const handleDateInput = useCallback((e: ChangeEvent<HTMLInputElement>, dateType: "startDate" | "endDate") => {
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
