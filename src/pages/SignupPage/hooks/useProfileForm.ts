import { type SignUpFormTypes, defaultSignUpFormValues } from "@/pages/SignupPage/types/signupFormTypes";
import { useCallback, useState } from "react";

type FormKeys = "job" | "expYears" | "bio";

export const useProfileForm = () => {
  const formData = JSON.parse(sessionStorage.getItem("signup") || "{}");

  const [form, setForm] = useState({
    ...defaultSignUpFormValues,
    ...formData,
  });

  const handleFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: FormKeys) => {
      const value = e.target.value;

      if (key === "expYears" && value !== "" && Number.isNaN(Number(value))) {
        return;
      }

      setForm((prev: SignUpFormTypes) => {
        const updatedForm = {
          ...prev,
          [key]: e.target.value,
        };

        sessionStorage.setItem(
          "signup",
          JSON.stringify({
            ...updatedForm,
            job: updatedForm.job,
            expYears: Number(updatedForm.expYears),
            headline: updatedForm.headline,
          }),
        );

        return updatedForm;
      });
    },
    [],
  );

  return {
    form,
    handleFormChange,
  };
};
