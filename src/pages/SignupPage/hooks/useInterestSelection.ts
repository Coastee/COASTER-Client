import type { SignUpFormTypes } from "@/pages/SignupPage/types/signupFormTypes";
import { useCallback, useState } from "react";

export const useInterestSelection = () => {
  const formData: Partial<SignUpFormTypes> = JSON.parse(sessionStorage.getItem("signup") || "{}");
  const initialSelection: number[] = Array.isArray(formData.serverIdList) ? formData.serverIdList : [];

  const [selectedIds, setSelectedIds] = useState<number[]>(initialSelection);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const handleCheckboxChange = useCallback(
    (id: number) => {
      setSelectedIds((prev) => {
        const updatedIds = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];

        const prevData = JSON.parse(sessionStorage.getItem("signup") || "{}");
        sessionStorage.setItem(
          "signup",
          JSON.stringify({
            ...prevData,
            serverIdList: updatedIds,
          }),
        );

        return updatedIds;
      });
    },
    [selectedIds],
  );

  const handleReset = useCallback(() => {
    setSelectedIds([]);
    const prevData = JSON.parse(sessionStorage.getItem("signup") || "{}");

    sessionStorage.setItem("signup", JSON.stringify({ ...prevData, serverIdList: [] }));
  }, []);

  return {
    selectedIds,
    handleCheckboxChange,
    handleReset,
  };
};
