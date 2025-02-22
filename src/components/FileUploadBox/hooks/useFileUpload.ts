import { useRef, useState } from "react";

export const useFileUpload = () => {
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const handleFileDelete = () => setImage(null);

  const handleFileClick = () => fileInputRef.current?.click();

  return {
    image,
    fileInputRef,
    handleFileChange,
    handleFileDelete,
    handleFileClick,
  };
};
