import {
  type signUpFormTypes,
  defaultSignUpFormValues,
} from "@/pages/SignupPage/types/signupFormTypes";
import { useCallback, useState } from "react";

type FormKeys = "belonging" | "introduction";

export const useProfileForm = () => {
  const formData = JSON.parse(sessionStorage.getItem("signup") || "{}");

  const [form, setForm] = useState({
    ...defaultSignUpFormValues,
    ...formData,
  });

  const handleFormChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      key: FormKeys
    ) => {
      setForm((prev: signUpFormTypes) => {
        const updatedForm = {
          ...prev,
          [key]: e.target.value,
        };

        sessionStorage.setItem(
          "signup",
          JSON.stringify({
            ...updatedForm,
            belonging: updatedForm.belonging,
            introduction: updatedForm.introduction,
          })
        );

        return updatedForm;
      });
    },
    []
  );

  return {
    form,
    handleFormChange,
  };
};
