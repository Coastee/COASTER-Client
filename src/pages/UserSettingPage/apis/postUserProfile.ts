import { formDataInstance } from "@/apis/instance";
import type { UserProfileTypes } from "@/pages/UserSettingPage/types/profile";

export const postUserProfile = async (userId: number, data: UserProfileTypes, file: File | null) => {
  const formData = new FormData();
  formData.append("request", JSON.stringify(data));

  if (file) {
    const fileType = file.type || "";
    const fileBlob = new Blob([file], { type: fileType });

    formData.append("image", fileBlob, file.name);
  } else {
    formData.append("image", new Blob([], { type: "" }), "");
  }

  const response = await formDataInstance
    .post(`api/v1/users/${userId}`, {
      body: formData,
    })
    .json();

  console.log(response);

  return response;
};
