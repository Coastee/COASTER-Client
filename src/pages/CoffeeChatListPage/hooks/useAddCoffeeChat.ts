import { createCoffeeChat } from "@/pages/CoffeeChatListPage/apis/addCoffeeChat";
import type {
  AddCoffeeChatTypes,
  FormDateTimeTypes,
  UseAddCoffeeChatProps,
} from "@/pages/CoffeeChatListPage/types/coffeeChatTypes";
import { requestFormatTime } from "@/utils/dateTime";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const DEFAULT_MAX_LENGTH = 20;

export const useAddCoffeeChat = ({
  request,
  setRequest,
  dateTime,
  setDateTime,
  maxLengths,
  setIsVisible,
  globalServer,
  image,
}: UseAddCoffeeChatProps) => {
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

  const formatDateTime = (updatedDateTime: FormDateTimeTypes = dateTime) => {
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

  const {
    mutate: uploadCoffeeChat,
    isError,
    error,
  } = useMutation({
    mutationFn: async ({ serverId, file }: { serverId: number; file: File | null }) => {
      if (!serverId) throw new Error("서버 정보가 없습니다.");

      const formData = new FormData();
      formData.append("request", JSON.stringify(request));

      if (file) {
        const fileType = file.type || "";
        const fileBlob = new Blob([file], { type: fileType });
        formData.append("image", fileBlob, file.name);
      } else {
        formData.append("image", new Blob([], { type: "" }), "");
      }

      return createCoffeeChat(serverId, formData);
    },
    onSuccess: () => {
      setIsVisible(false);
    },
    onError: (error) => {
      console.error("티타임 생성 실패:", error);
      alert("티타임 생성에 실패했습니다.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formatDateTime();
    if (!globalServer) {
      console.error("서버 정보가 없습니다.");
      return;
    }

    uploadCoffeeChat({ serverId: globalServer.id, file: image });
  };

  return {
    isFieldError,
    handleDateChange,
    handleInputChange,
    handleFocus,
    handleBlur,
    handleMaxCountChange,
    setDateTime,
    handleSubmit,
    isError,
    error,
  };
};
