import { tokenInstance } from "@/apis/instance";
import type { ScheduleResponseTypes } from "@/pages/HomePage/types/ScheduleTypes";

// [GET] 스케줄 조회
export const fetchSchedule = async (): Promise<ScheduleResponseTypes> => {
  try {
    const response: ScheduleResponseTypes = await tokenInstance("api/v1/schedules").json();
    return response;
  } catch (error) {
    console.error("스케줄 조회 실패:", error);
    throw error;
  }
};
