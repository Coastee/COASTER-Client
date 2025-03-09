import type {
  AddCoffeeChatTypes,
  UseAddCoffeeChatProps,
  formDateTimeTypes,
} from "@/pages/CoffeeChatListPage/types/coffeeChatTypes";
import { requestFormatTime } from "@/utils/dateTime";
import { useState } from "react";

const DEFAULT_MAX_LENGTH = 20;

export const useAddCoffeeChat = ({ dateTime, setDateTime, setRequest, maxLengths }: UseAddCoffeeChatProps) => {
  const [focusedField, setFocusedField] = useState<Record<string, { hasBeenFocused: boolean; isFocused: boolean }>>({});

  const handleFocus = (field: string) => {
    setFocusedField((prev) => ({
      ...prev,
      [field]: { hasBeenFocused: true, isFocused: true },
    }));
  };

  const handleBlur = (field: string) => {
    setFocusedField((prev) => ({
      ...prev,
      [field]: { ...prev[field], isFocused: false },
    }));
  };

  const isFieldError = (field: string, value: string, required?: string) => {
    if (required) {
      return focusedField[field]?.hasBeenFocused && value.trim().length === 0;
    }
    return false;
  };

  const formatDateTime = (updatedDateTime: formDateTimeTypes = dateTime) => {
    const { startDate, endDate } = requestFormatTime(updatedDateTime);

    setRequest((prev) => ({
      ...prev,
      startDate,
      endDate,
    }));
  };

  const handleDateChange = (selectedDate: string) => {
    setDateTime((prev) => {
      const newDateTime = { ...prev, date: selectedDate };
      formatDateTime(newDateTime);
      return newDateTime;
    });
  };

  const handleInputChange = (field: keyof AddCoffeeChatTypes, value: string) => {
    const maxLength = maxLengths[field];
    if (value.length > (maxLength ?? DEFAULT_MAX_LENGTH)) return;

    setRequest((prevRequest) => ({
      ...prevRequest,
      [field]: value,
    }));
  };

  const handleMaxCountChange = (action: "increment" | "decrement") => {
    setRequest((prevRequest) => {
      const count = action === "increment" ? prevRequest.maxCount + 1 : prevRequest.maxCount - 1;
      return {
        ...prevRequest,
        maxCount: Math.max(2, count),
      };
    });
  };

  return {
    isFieldError,
    handleDateChange,
    handleInputChange,
    handleFocus,
    handleBlur,
    handleMaxCountChange,
    formatDateTime,
    setDateTime,
  };
};
