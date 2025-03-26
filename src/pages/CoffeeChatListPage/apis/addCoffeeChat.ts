import { formDataInstance } from "@/apis/instance";

// [POST] 티타임 생성
export const createCoffeeChat = async (serverId: number, formData: FormData) => {
  try {
    const response = await formDataInstance.post(`api/v1/servers/${serverId}/meetings`, {
      body: formData,
    });
    return response.json();
  } catch (error) {
    console.error("티타임 생성 실패:", error);
  }
};
