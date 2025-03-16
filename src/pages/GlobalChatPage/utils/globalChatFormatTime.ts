import { parseDateArray } from "@/utils/dateTime";

export const globalChatFormatTime = (dateArray: number[]) => {
  const { hour, minute, meridiem } = parseDateArray(dateArray);
  return `${meridiem} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
};
