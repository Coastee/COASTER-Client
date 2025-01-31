import { useCallback, useState } from "react";

type FormKeys = "belonging" | "introduction";

export const useProfileForm = () => {
  const formData = JSON.parse(sessionStorage.getItem("signup") || "{}");

  const [form, setForm] = useState({
    belonging: formData.belonging || "",
    introduction: formData.introduction || "",
  });

  const handleFormChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      key: FormKeys
    ) => {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    },
    []
  );

  return {
    form,
    handleFormChange,
  };
};
