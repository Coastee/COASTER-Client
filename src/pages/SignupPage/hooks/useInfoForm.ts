import { SUPPORTING_TEXT } from "@/constants/supportingText";
import { type SignUpFormTypes, defaultSignUpFormValues } from "@/pages/SignupPage/types/signupFormTypes";

import { useCallback, useEffect, useState } from "react";

export const useInfoForm = () => {
  const formData = JSON.parse(sessionStorage.getItem("signup") || "{}");

  const [form, setForm] = useState({
    ...defaultSignUpFormValues,
    ...formData,
  });

  const [nickNameSupportingText, setNickNameSupportingText] = useState("");

  const handleInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, key: keyof SignUpFormTypes) => {
    setForm((prev: SignUpFormTypes) => {
      const updatedForm = {
        ...prev,
        [key]: e.target.value,
      };

      sessionStorage.setItem(
        "signup",
        JSON.stringify({
          ...updatedForm,
        }),
      );

      return updatedForm;
    });
  }, []);

  const handleNickNameMessage = useCallback((nickname: string) => {
    if (nickname.length < 2 || nickname.length > 10) {
      setNickNameSupportingText(SUPPORTING_TEXT.NICKNAME);
      return SUPPORTING_TEXT.NICKNAME;
    }
  }, []);

  const isNickNameError = form.nickname.length > 0 && (form.nickname.length < 2 || form.nickname.length > 10);

  useEffect(() => {
    handleNickNameMessage(form.nickname);
  }, [form.nickname, handleNickNameMessage]);

  return {
    form,
    handleInfoChange,
    handleNickNameMessage,
    nickNameSupportingText,
    isNickNameError,
  };
};
