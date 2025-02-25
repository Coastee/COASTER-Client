import type { FormDateTimeTypes, RequestDateType } from "@/pages/CoffeeChatListPage/types/coffeeChatTypes";

export const formatDate = (date: string) => {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(date);
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();

  return year === currentYear ? `${month}/${day}` : `${year}/${month}/${day}`;
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
    simpleDate: `${month}. ${day}`, // "2. 10"
    dayOfWeek, // "수"
  };
};

export const requestFormatTime = (
  dateTime: FormDateTimeTypes,
): {
  startDate: RequestDateType;
  endDate: RequestDateType;
} => {
  const [year, month, day] = dateTime.date
    ? (dateTime.date.split(".").map(Number) as [number, number, number])
    : [0, 1, 0];

  const parseTime = (time: string): [number, number] => {
    const [period, hour, minute] = time.split("/");
    const h = (Number(hour) % 12) + (period === "오후" ? 12 : 0);
    return [h, Number(minute)];
  };

  return {
    startDate: [year, month - 1, day, ...parseTime(dateTime.start), 0, 0],
    endDate: [year, month - 1, day, ...parseTime(dateTime.end), 0, 0],
  };
};

export const formatDateArray = (dateArray: number[]): string => {
  if (dateArray.length < 3) return "";

  const [year, month, day] = dateArray;
  return `${year}. ${month}. ${day}`;
};
