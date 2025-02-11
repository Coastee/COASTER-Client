import { useRef, useState } from "react";

interface UseAddGroupChatFormProps {
  request: {
    title: string;
    content: string;
    hashTags: Array<{ id: number; content: string }>;
  };
  setRequest: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
      hashTags: Array<{ id: number; content: string }>;
    }>
  >;
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

const useAddGroupChatForm = ({
  request,
  setRequest,
  image,
  setImage,
}: UseAddGroupChatFormProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [hasBeenFocused, setHasBeenFocused] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // 해시태그 추가 임시 로직
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

  const handleFileDelete = () => {
    setImage(null);
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRequest((prevRequest) => ({
      ...prevRequest,
      title: e.target.value,
    }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRequest((prevRequest) => ({
      ...prevRequest,
      content: e.target.value,
    }));
  };

  const handleFocus = () => {
    setHasBeenFocused(true);
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const isError = hasBeenFocused && request.title.trim().length === 0;

  return {
    request,
    image,
    fileInputRef,
    hasBeenFocused,
    setHasBeenFocused,
    isFocused,
    addHashtag,
    removeHashtag,
    handleFileChange,
    handleFileDelete,
    handleFileClick,
    handleTitleChange,
    handleContentChange,
    handleFocus,
    handleBlur,
    isError,
  };
};

export default useAddGroupChatForm;
