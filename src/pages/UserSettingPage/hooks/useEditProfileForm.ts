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
      let { value } = e.target;
      const maxLength = MAX_LENGTH[key as keyof typeof MAX_LENGTH];

      if (maxLength && value.length > maxLength) {
        value = value.slice(0, maxLength - 1);
      }

      setForm((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    [],
  );

  return {
    form,
    handleInfoChange,
    isNickNameError,
    isCareerError,
    isCareerYearError,
    isOneLineIntroError,
    isIntroError,
  };
};
