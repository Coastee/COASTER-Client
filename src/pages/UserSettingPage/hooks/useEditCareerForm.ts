import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import { useState } from "react";

export const useEditCareerForm = () => {
  const [isCurrentJob, setIsCurrentJob] = useState(false);
  const [detailInputs, setDetailInputs] = useState<string[]>([""]);

  const handleAddDetailInput = () => {
    if (detailInputs.length < MAX_LENGTH.DETAIL_COUNT) {
      setDetailInputs([...detailInputs, ""]);
    }
  };

  const handleDeleteDetailInput = (index: number) => {
    setDetailInputs((prevDetails) => prevDetails.filter((_, i) => i !== index));
  };

  const handleDetailChange = (index: number, value: string) => {
    setDetailInputs((prevDetails) => prevDetails.map((detail, i) => (i === index ? value : detail)));
  };

  return {
    isCurrentJob,
    setIsCurrentJob,
    detailInputs,
    handleAddDetailInput,
    handleDeleteDetailInput,
    handleDetailChange,
  };
};
