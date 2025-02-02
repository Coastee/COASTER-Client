import { type signUpFormTypes } from "@/pages/SignupPage/types/signupFormTypes";
import { useCallback, useState } from "react";

export const useInterestSelection = () => {
  const formData: Partial<signUpFormTypes> = JSON.parse(
    sessionStorage.getItem("signup") || "{}"
  );
  const initialSelection = Array.isArray(formData.interests)
    ? formData.interests
    : [];

  const [interests, setInterests] = useState<string[]>(initialSelection);

  const handleCheckboxChange = useCallback((interest: string) => {
    setInterests((prev) => {
      const updatedInterests = prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest];

      const prevData = JSON.parse(sessionStorage.getItem("signup") || "{}");
      sessionStorage.setItem(
        "signup",
        JSON.stringify({ ...prevData, interests: updatedInterests })
      );

      return updatedInterests;
    });
  }, []);

  const handleReset = useCallback(() => {
    setInterests([]);
    const prevData = JSON.parse(sessionStorage.getItem("signup") || "{}");
    sessionStorage.setItem(
      "signup",
      JSON.stringify({ ...prevData, interests: [] })
    );
  }, []);

  return {
    interests,
    handleCheckboxChange,
    handleReset,
  };
};
