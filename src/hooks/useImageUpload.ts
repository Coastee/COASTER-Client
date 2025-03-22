import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useState } from "react";
interface UseImageUploadProps {
  setImgUrl: Dispatch<SetStateAction<string>>;
}

const useImageUpload = ({ setImgUrl }: UseImageUploadProps) => {
  const [file, setFile] = useState<File | null>(null);

  const onImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      try {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = (e) => {
          const target = e.target as FileReader;

          if (target) {
            setImgUrl(target.result as string);
            setFile(file);
          } else {
            alert(`${reader.result}`);
          }
        };
      } catch (error) {
        console.error(`${error}`);
      }
    }
  };

  return { onImageUpload, file };
};

export default useImageUpload;
