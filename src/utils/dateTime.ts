import type { formDateTimeTypes, requestDateType } from "@/pages/CoffeeChatListPage/types/coffeeChatTypes";

export const formatDate = (date: string) => {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(date);
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();

  return year === currentYear ? `${month}/${day}` : `${year}/${month}/${day}`;
};

export const datePickerFormatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
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
    hour: formattedHour,
    minute,
    dayOfWeek,
    meridiem,
  };
};

export const requestFormatTime = (
  dateTime: formDateTimeTypes
): {
  startDate: requestDateType;
  endDate: requestDateType;
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
