import { useState } from "react";

interface AddGroupChatTypes {
  title: string;
  content: string;
  hashTags: string[];
}

interface UseAddGroupChatProps {
  request: AddGroupChatTypes;
  setRequest: React.Dispatch<React.SetStateAction<AddGroupChatTypes>>;
  maxLengths: Record<string, number>;
}

export const useAddGroupChat = ({
  request,
  setRequest,
  maxLengths,
}: UseAddGroupChatProps) => {
  const [fieldFocusState, setFieldFocusState] = useState<
    Record<string, { hasBeenFocused: boolean; isFocused: boolean }>
  >({});

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

  const isFieldError = (field: string, value: string) => {
    return fieldFocusState[field]?.hasBeenFocused && value.trim().length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    const maxLength = maxLengths[field];
    if (value.length > (maxLength ?? 20)) return;

    setRequest((prevRequest) => ({
      ...prevRequest,
      [field]: value,
    }));
  };

  return {
    request,
    fieldFocusState,
    isFieldError,
    handleInputChange,
    handleFocus,
    handleBlur,
  };
};
