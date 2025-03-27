import type { FormDateTimeTypes, RequestDateType } from "@/pages/CoffeeChatListPage/types/coffeeChatTypes";

export const formatDate = (date: string) => {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(date);
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();

  return year === currentYear ? `${month}/${day}` : `${year}/${month}/${day}`;
};

export const datePickerFormatDate = (date: Date, includeDayOfWeek = false) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
  return includeDayOfWeek ? `${year}. ${month}. ${day} (${dayOfWeek})` : `${year}. ${month}. ${day}`;
};

export const formatTime = (time: string) => {
  const [hours] = time.split(":").map(Number);

  const period = hours >= 12 ? "오후" : "오전";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;

  return `${period} ${hour12}시`;
};

export const simpleFormatDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

  return {
    simpleDate: `${month}. ${day}`,
    dayOfWeek,
  };
};

export const parseDateArray = (dateArray: number[]) => {
  const [year, month, day, hour, minute] = dateArray;
  const date = new Date(year, month - 1, day, hour, minute);

  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
  const meridiem = hour < 12 ? "오전" : "오후";
  const formattedHour = hour % 12 || 12;

  return {
    year,
    month,
    day,
    defaultHour: hour,
    hour: formattedHour,
    minute,
    dayOfWeek,
    meridiem,
  };
};

export const requestFormatTime = (
  dateTime: FormDateTimeTypes,
): {
  startDate: RequestDateType;
  endDate: RequestDateType;
} => {
  const exceptDayOfWeek = dateTime.date
    .replace(/\s*\(.*\)/, "")
    .trim()
    .replace(/\s+/g, "");

  const [year, month, day] = exceptDayOfWeek
    ? (exceptDayOfWeek.split(".").map(Number) as [number, number, number])
    : [0, 1, 0];

  const parseTime = (time: string): [number, number] => {
    const [period, hour, minute] = time.split("/");
    const h = (Number(hour) % 12) + (period === "오후" ? 12 : 0);
    return [h, Number(minute)];
  };

  return {
    startDate: [year, month, day, ...parseTime(dateTime.start), 0, 0],
    endDate: [year, month, day, ...parseTime(dateTime.end), 0, 0],
  };
};

export const formatDateArray = (dateArray: number[]): string => {
  if (dateArray.length < 3) return "";

  const [year, month, day] = dateArray;
  return `${year}. ${month}. ${day}`;
};

export const formatDateRange = (startDate: number[], endDate?: number[] | null): string => {
  const format = (dateArray: number[]) => `${dateArray[0]}.${dateArray[1]}.${dateArray[2]}`;

  return endDate ? `${format(startDate)} ~ ${format(endDate)}` : format(startDate);
};

export const timeAgo = (dateArray: number[]) => {
  const now = new Date();
  const messageDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4], dateArray[5]);
  const diffInMilliseconds = now.getTime() - messageDate.getTime();
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60)); // 분 단위 차이
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60)); // 시간 단위 차이
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)); // 일 단위 차이

  if (diffInMinutes < 1) {
    return "지금";
  }
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분`;
  }
  if (diffInHours < 24) {
    return `${diffInHours}시간`;
  }
  return `${diffInDays}일`;
};

export const chatFormatTime = (dateArray: number[]) => {
  const { hour, minute, meridiem } = parseDateArray(dateArray);
  return `${meridiem} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
};
