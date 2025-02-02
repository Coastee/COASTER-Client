import { SUPPORTING_TEXT } from "@/pages/SignupPage/constants/supportingText";
import { defaultSignUpFormValues, type signUpFormTypes } from "@/pages/SignupPage/types/signupFormTypes";

import { formatDate } from "@/pages/SignupPage/utils/date";
import { useCallback, useEffect, useState } from "react";

export const useInfoForm = () => {
  const formData = JSON.parse(sessionStorage.getItem("signup") || "{}");

  const [form, setForm] = useState({
    ...defaultSignUpFormValues,
    ...formData,
  });

  const [nickNameSupportingText, setNickNameSupportingText] = useState("");
  const [birthSupportingText, setBirthSupportingText] = useState("");

  const handleInfoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, key: keyof signUpFormTypes) => {
      setForm((prev: signUpFormTypes) => ({
        ...prev,
        [key]: e.target.value,
      }));

      sessionStorage.setItem(
        "signup",
        JSON.stringify({
          ...form,
          name: form.name,
          nickName: form.nickName,
          birth: formatDate(form.birth),
        }),
      );
    },
    [form],
  );

  const handleNickNameMessage = useCallback((nickName: string) => {
    if (nickName.length < 2 || nickName.length > 10) {
      setNickNameSupportingText(SUPPORTING_TEXT.NICKNAME);
      return SUPPORTING_TEXT.NICKNAME;
    }
  }, []);

  const handleBirthMessage = useCallback((birth: string) => {
    if (formatDate(birth).length !== 10) {
      setBirthSupportingText(SUPPORTING_TEXT.BIRTH);
      return SUPPORTING_TEXT.BIRTH;
    }
  }, []);

  const isNickNameError = form.nickName.length > 0 && (form.nickName.length < 2 || form.nickName.length > 10);

  const isBirthError = form.birth.length > 0 && formatDate(form.birth).length !== 10;

  useEffect(() => {
    handleNickNameMessage(form.nickName);
  }, [form.nickName, handleNickNameMessage]);

  useEffect(() => {
    handleBirthMessage(form.birth);
  }, [form.birth, handleBirthMessage]);

  return {
    form,
    handleInfoChange,
    handleNickNameMessage,
    handleBirthMessage,
    nickNameSupportingText,
    birthSupportingText,
    isNickNameError,
    isBirthError,
  };
};
