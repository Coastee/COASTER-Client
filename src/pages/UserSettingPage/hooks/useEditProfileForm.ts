import type { UserDetailTypes } from "@/pages/MyPage/types";
import { MAX_LENGTH, MIN_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import type { ProfileEditTypes, UserProfileTypes } from "@/pages/UserSettingPage/types/profile";
import { useCallback, useState } from "react";

export const useEditProfileForm = ({ ...data }: UserDetailTypes) => {
  const [form, setForm] = useState<UserProfileTypes>({
    nickname: data.nickname,
    headline: data.userIntro.headline,
    job: data.userIntro.job,
    expYears: data.userIntro.expYears,
    bio: data.bio,
    urlList: data.urlList || [],
  });

  const isNickNameError = form.nickname.length < MIN_LENGTH.NICKNAME || form.nickname.length > MAX_LENGTH.NICKNAME;
  const isCareerError = form.job.length < MIN_LENGTH.CAREER || form.job.length > MAX_LENGTH.CAREER;
  const isCareerYearError = Number.isNaN(Number(form.expYears));
  const isOneLineIntroError = form.headline.length > MAX_LENGTH.ONELINE_INTRO;
  const isIntroError = form.bio.length > MAX_LENGTH.INTRO;

  const handleInfoChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { value: string | string[] } },
      key: keyof ProfileEditTypes,
    ) => {
      let { value } = e.target;
      if (typeof value === "string") {
        const maxLength = MAX_LENGTH[key as keyof typeof MAX_LENGTH];
        if (maxLength && value.length > maxLength) {
          value = value.slice(0, maxLength);
        }
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
