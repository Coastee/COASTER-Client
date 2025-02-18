import { useHashtag } from "@/components/HashtagChip/hooks/usehashTag";
import type {
  AddCoffeeChatTypes,
  UseAddCoffeeChatProps,
} from "@/pages/CoffeeChatListPage/types/coffeeChatTypes";
import { requestFormatTime } from "@/utils/dateTime";
import { useRef, useState } from "react";

export const DEFAULT_COFFEE_CHAT_VALUES: AddCoffeeChatTypes = {
  title: "",
  content: "",
  hashTags: [],
  maxCount: 2,
  startDate: [0, 0, 0, 0, 0, 0, 0],
  endDate: [0, 0, 0, 0, 0, 0, 0],
  location: "",
  details: "",
};

export const useAddCoffeeChat = ({
  dateTime,
  setDateTime,
  request,
  setRequest,
  image,
  setImage,
  maxLengths,
}: UseAddCoffeeChatProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fieldFocusState, setFieldFocusState] = useState<
    Record<string, { hasBeenFocused: boolean; isFocused: boolean }>
  >({});

  const { addHashtag, removeHashtag } = useHashtag<AddCoffeeChatTypes>(
    request,
    setRequest
  );

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
    if (value.length > (maxLength ?? 20)) return;

    setRequest((prevRequest) => ({
      ...prevRequest,
      [field]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const handleFileDelete = () => setImage(null);
  const handleFileClick = () => fileInputRef.current?.click();

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
    request,
    image,
    fileInputRef,
    fieldFocusState,
    isFieldError,
    handleInputChange,
    handleFocus,
    handleBlur,
    addHashtag,
    removeHashtag,
    handleFileChange,
    handleFileDelete,
    handleFileClick,
    handleMaxCountChange,
    formatDateTime,
    setDateTime,
  };
};
