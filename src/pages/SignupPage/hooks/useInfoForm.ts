import { useCallback, useEffect, useState } from "react";

import { SUPPORTING_TEXT } from "@/pages/SignupPage/constants/supportingText";

type InfoFormKeys = "name" | "nickName" | "birth";

export const useInfoForm = () => {
  const [info, setInfo] = useState({
    name: "",
    nickName: "",
    birth: "",
  });

  const [nickNameSupportingText, setNickNameSupportingText] = useState("");
  const [birthSupportingText, setBirthSupportingText] = useState("");

  const handleInfoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, key: InfoFormKeys) => {
      const { value } = e.target;

      setInfo((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    []
  );

  const handleNickNameMessage = useCallback((nickName: string) => {
    if (nickName.length < 2 || nickName.length > 10) {
      setNickNameSupportingText(SUPPORTING_TEXT.NICKNAME);

      return SUPPORTING_TEXT.NICKNAME;
    }
  }, []);

  const handleBirthMessage = useCallback((birth: string) => {
    if (birth.length !== 8) {
      setBirthSupportingText(SUPPORTING_TEXT.BIRTH);

      return SUPPORTING_TEXT.BIRTH;
    }
  }, []);

  const isNickNameError =
    info.nickName.length > 0 &&
    (info.nickName.length < 2 || info.nickName.length > 10);
  const isBirthError = info.birth.length > 0 && info.birth.length !== 8;

  useEffect(() => {
    handleNickNameMessage(info.nickName);
  }, [info.nickName, handleNickNameMessage]);

  useEffect(() => {
    handleBirthMessage(info.birth);
  }, [info.birth, handleBirthMessage]);

  return {
    info,
    handleInfoChange,
    handleNickNameMessage,
    handleBirthMessage,
    nickNameSupportingText,
    birthSupportingText,
    isNickNameError,
    isBirthError,
  };
};
