import type {
  AddCoffeeChatTypes,
  UseAddCoffeeChatProps,
} from "@/pages/CoffeeChatListPage/types/coffeeChatTypes";
import { requestFormatTime } from "@/utils/dateTime";
import { useState } from "react";

export const useAddCoffeeChat = ({
  dateTime,
  setDateTime,
  setRequest,
  maxLengths,
}: UseAddCoffeeChatProps) => {
  const [fieldFocusState, setFieldFocusState] = useState<
    Record<string, { hasBeenFocused: boolean; isFocused: boolean }>
  >({});

  const DEFAULT_MAX_LENGTH = 20;

  const handleFocus = (field: string) => {
    setFieldFocusState((prev) => ({
      ...prev,
      [field]: { hasBeenFocused: true, isFocused: true },
    }));
  };

  const handleBlur = (field: string) => {
    setFieldFocusState((prev) => ({
      ...prev,
      [field]: { ...prev[field], isFocused: false },
    }));
  };

  const isFieldError = (field: string, value: string, required?: string) => {
    if (required) {
      return (
        fieldFocusState[field]?.hasBeenFocused && value.trim().length === 0
      );
    }
    return false;
  };

  const handleInputChange = (
    field: keyof AddCoffeeChatTypes,
    value: string
  ) => {
    const maxLength = maxLengths[field];
    if (value.length > (maxLength ?? DEFAULT_MAX_LENGTH)) return;

    setRequest((prevRequest) => ({
      ...prevRequest,
      [field]: value,
    }));
  };

  const handleMaxCountChange = (action: "increment" | "decrement") => {
    setRequest((prevRequest) => {
      const count =
        action === "increment"
          ? prevRequest.maxCount + 1
          : prevRequest.maxCount - 1;
      return {
        ...prevRequest,
        maxCount: Math.max(2, count),
      };
    });
  };

  const formatDateTime = () => {
    const { startDate, endDate } = requestFormatTime(dateTime);

    setRequest((prev) => ({
      ...prev,
      startDate,
      endDate,
    }));
  };

  return {
    fieldFocusState,
    isFieldError,
    handleInputChange,
    handleFocus,
    handleBlur,
    handleMaxCountChange,
    formatDateTime,
    setDateTime,
  };
};
