import { formDataInstance } from "@/apis/instance";

// [POST] 그룹챗 생성
export const createGroupChat = async (serverId: number, formData: FormData) => {
  try {
    const response = await formDataInstance.post(`api/v1/servers/${serverId}/groups`, {
      body: formData,
    });
    return response.json();
  } catch (error) {
    console.error("그룹챗 생성 실패:", error);
  }
};
