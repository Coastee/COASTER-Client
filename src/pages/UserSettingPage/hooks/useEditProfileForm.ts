import { SUPPORTING_TEXT } from "@/constants/supportingText";
import { MAX_LENGTH, MIN_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import type { ProfileEditTypes } from "@/pages/UserSettingPage/types/profile";
import { useCallback, useState } from "react";

export const useEditProfileForm = ({ ...data }: ProfileEditTypes) => {
  const [form, setForm] = useState({ ...data });

  const isNickNameError = form.nickName.length < MIN_LENGTH.NICKNAME || form.nickName.length > MAX_LENGTH.NICKNAME;
  const isCareerError = form.career.length < MIN_LENGTH.CAREER || form.career.length > MAX_LENGTH.CAREER;
  const isCareerYearError = Number.isNaN(Number(form.careerYear));
  const isOneLineIntroError = form.oneLineIntro.length > MAX_LENGTH.ONELINE_INTRO;
  const isIntroError = form.intro.length > MAX_LENGTH.INTRO;

  const handleInfoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: keyof ProfileEditTypes) => {
      const { value } = e.target;

      setForm((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    [],
  );

  const handleSupportingText = useCallback(
    (key: keyof ProfileEditTypes) => {
      switch (key) {
        case "nickName":
          return isNickNameError ? SUPPORTING_TEXT.NICKNAME : "";
        case "career":
          return isCareerError ? SUPPORTING_TEXT.CAREER : "";
        case "careerYear":
          return isCareerYearError ? SUPPORTING_TEXT.CAREER_YEAR : "";
        case "oneLineIntro":
          return isOneLineIntroError ? SUPPORTING_TEXT.ONE_LINE_INTRO : "";
        case "intro":
          return isIntroError ? SUPPORTING_TEXT.INTRO : "";
        default:
          return "";
      }
    },
    [isNickNameError, isCareerError, isCareerYearError, isOneLineIntroError, isIntroError],
  );

  return {
    form,
    handleInfoChange,
    handleSupportingText,
    isNickNameError,
    isCareerError,
    isCareerYearError,
    isOneLineIntroError,
    isIntroError,
  };
};
