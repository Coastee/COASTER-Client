import { useCallback, useState } from "react";

type FormKeys = "belonging" | "introduction";

export const useProfileForm = () => {
  const formData = JSON.parse(sessionStorage.getItem("signup") || "{}");

  const [form, setForm] = useState({
    belonging: formData.belonging || "",
    introduction: formData.introduction || "",
  });

  const handleFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: FormKeys) => {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));

      const prev = JSON.parse(sessionStorage.getItem("signup") || "{}");

      const data = {
        ...prev,
        belonging: form.belonging,
        introduction: form.introduction,
      };

      sessionStorage.setItem("signup", JSON.stringify(data));
    },
    [form.belonging, form.introduction],
  );

  return {
    form,
    handleFormChange,
  };
};
