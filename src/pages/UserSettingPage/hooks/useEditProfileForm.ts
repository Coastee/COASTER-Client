import { SUPPORTING_TEXT } from "@/constants/supportingText";
import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import type { ProfileEditTypes } from "@/pages/UserSettingPage/types/profile";
import { useCallback, useState } from "react";

export const useEditProfileForm = ({ ...data }: ProfileEditTypes) => {
  const [form, setForm] = useState({ ...data });
  const [supportingText, setSupportingText] = useState({
    nickName: "",
    career: "",
    careerYear: "",
    oneLineIntro: "",
    intro: "",
  });

  const handleInfoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: keyof ProfileEditTypes) => {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    },
    [],
  );

  const handleNickNameMessage = useCallback((nickName: string) => {
    setSupportingText((prev) => ({
      ...prev,
      nickName:
        nickName.length < MAX_LENGTH.NICKNAME_MIN || nickName.length > MAX_LENGTH.NICKNAME_MAX
          ? SUPPORTING_TEXT.NICKNAME
          : "",
    }));
  }, []);

  const handleCareerMessage = useCallback((career: string) => {
    setSupportingText((prev) => ({
      ...prev,
      career: career.length > MAX_LENGTH.CAREER ? SUPPORTING_TEXT.CAREER : "",
    }));
  }, []);

  const handleCareerYearMessage = useCallback((careerYear: number) => {
    setSupportingText((prev) => ({
      ...prev,
      careerYear: Number.isNaN(careerYear) ? SUPPORTING_TEXT.CAREER_YEAR : "",
    }));
  }, []);

  const handleOneLineIntroMessage = useCallback((oneLineIntro: string) => {
    setSupportingText((prev) => ({
      ...prev,
      oneLineIntro: oneLineIntro.length < MAX_LENGTH.ONELINE_INTRO ? SUPPORTING_TEXT.ONE_LINE_INTRO : "",
    }));
  }, []);

  const handleIntroMessage = useCallback((intro: string) => {
    setSupportingText((prev) => ({
      ...prev,
      intro: intro.length < MAX_LENGTH.INTRO ? SUPPORTING_TEXT.INTRO : "",
    }));
  }, []);

  const isNickNameError = form.nickName.length > 0 && (form.nickName.length < 2 || form.nickName.length > 10);

  return {
    form,
    handleInfoChange,
    handleNickNameMessage,
    handleCareerMessage,
    handleCareerYearMessage,
    handleOneLineIntroMessage,
    handleIntroMessage,
    supportingText,
    isNickNameError,
  };
};
