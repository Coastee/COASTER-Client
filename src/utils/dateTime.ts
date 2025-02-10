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

export { formatDate, formatTime };
