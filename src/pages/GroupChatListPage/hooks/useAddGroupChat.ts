import { createGroupChat } from "@/pages/GroupChatListPage/apis/addGroupChat";
import { useMutation } from "@tanstack/react-query";
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
  setIsVisible: (isVisible: boolean) => void;
  globalServer: { id: number } | null;
  image: File | null;
}

export const useAddGroupChat = ({ request, setRequest, maxLengths, setIsVisible, globalServer, image }: UseAddGroupChatProps) => {
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

  const isFieldError = (field: string, value: string) => {
    return focusedField[field]?.hasBeenFocused && value.trim().length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    const maxLength = maxLengths[field];
    if (value.length > (maxLength ?? 20)) return;

    setRequest((prevRequest) => ({
      ...prevRequest,
      [field]: value,
    }));
  };

  const { mutate: uploadGroupChat, isError, error } = useMutation({
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

      return createGroupChat(serverId, formData);
    },
    onSuccess: () => {
      setIsVisible(false);
    },
    onError: (error) => {
      console.error("그룹챗 생성 실패:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!globalServer) {
      console.error("서버 정보가 없습니다.");
      return;
    }

    uploadGroupChat({ serverId: globalServer.id, file: image });
  };

  return {
    isFieldError,
    handleInputChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    isError,
    error,
  };
};
