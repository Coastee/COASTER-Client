type dateType = [number, number, number, number, number, number, number];

const formatDate = (date: string) => {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(date);
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();

  return year === currentYear ? `${month}/${day}` : `${year}/${month}/${day}`;
};

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);

  const period = hours >= 12 ? "오후" : "오전";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;

  return `${period} ${hour12}시`;
};

const requestFormatTime = (dateTime: {
  date: string;
  start: string;
  end: string;
}): {
  startDate: dateType;
  endDate: dateType;
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

export { formatDate, formatTime, requestFormatTime };
