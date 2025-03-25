// 숫자 배열을 "YYYY.MM.DD" 문자열로 변환
export const formatDateArrayToString = (dateArray: number[]) => {
  return `${dateArray[0]}.${String(dateArray[1]).padStart(2, "0")}.${String(dateArray[2]).padStart(2, "0")}`;
};

export const formatDate = (date: string) => {
  if (!/^\d{8}$/.test(date)) {
    return date;
  }
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  return `${year}.${month}.${day}`;
};

export const parseDateStringToArray = (dateString: string) => {
  if (!/^\d{4}\.\d{2}\.\d{2}$/.test(dateString)) return null;

  const parts = dateString.split(".").map(Number);

  return [...parts, 0, 0, 0, 0];
};
