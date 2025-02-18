import { useRef, useState } from "react";
import { useHashtag } from "@/components/HashtagChip/hooks/usehashTag";

interface AddGroupChatTypes {
  title: string;
  content: string;
  hashTags: string[];
}

interface UseAddGroupChatFormProps {
  request: AddGroupChatTypes;
  setRequest: React.Dispatch<React.SetStateAction<AddGroupChatTypes>>;
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  maxLengths: Record<string, number>;
}

const useAddGroupChatForm = ({
  request,
  setRequest,
  image,
  setImage,
  maxLengths,
}: UseAddGroupChatFormProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [fieldFocusState, setFieldFocusState] = useState<
    Record<string, { hasBeenFocused: boolean; isFocused: boolean }>
  >({});

  const { addHashtag, removeHashtag } = useHashtag<AddGroupChatTypes>(
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const handleFileDelete = () => setImage(null);
  const handleFileClick = () => fileInputRef.current?.click();

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
  };
};

export default useAddGroupChatForm;
