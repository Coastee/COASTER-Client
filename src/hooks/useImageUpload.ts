import type { ChangeEvent, Dispatch, SetStateAction } from "react";

interface UseImageUploadProps {
  setImgUrl: Dispatch<SetStateAction<string>>;
}

const useImageUpload = ({ setImgUrl }: UseImageUploadProps) => {
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
          } else {
            alert(`${reader.result}`);
          }
        };
      } catch (error) {
        console.error(`${error}`);
      }
    }
  };

  return { onImageUpload };
};

export default useImageUpload;
