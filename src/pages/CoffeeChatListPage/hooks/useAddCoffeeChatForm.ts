import { useRef, useState } from "react";

interface CoffeeChatRequest {
  title: string;
  description: string;
  hashTags: Array<{ id: number; content: string }>;
  participants: number;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  locationDetail: string;
}

interface UseAddCoffeeChatFormProps {
  request: CoffeeChatRequest;
  setRequest: React.Dispatch<React.SetStateAction<CoffeeChatRequest>>;
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  maxLengths: Record<string, number>;
}

const useAddCoffeeChatForm = ({
  request,
  setRequest,
  image,
  setImage,
  maxLengths,
}: UseAddCoffeeChatFormProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  const addHashtag = (content: string) => {
    setRequest((prev) => ({
      ...prev,
      hashTags: [...prev.hashTags, { id: Date.now(), content }],
    }));
  };

  const removeHashtag = (id: number) => {
    setRequest((prev) => ({
      ...prev,
      hashTags: prev.hashTags.filter((hashtag) => hashtag.id !== id),
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

export default useAddCoffeeChatForm;
