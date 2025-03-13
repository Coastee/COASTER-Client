// /api/v1/users/{userId}/dms
import { tokenInstance } from "@/apis/instance";
import type { DMResponseTypes } from "@/pages/DMPage/types/dmTypes";

// [GET] DM 리스트 조회
export const fetchAllDms = async (): Promise<DMResponseTypes> => {
  try {
    const response: DMResponseTypes = await tokenInstance("api/v1/dms").json();
    return response;
  } catch (error) {
    console.error("DM 리스트 조회 실패:", error);
    throw error;
  }
};
