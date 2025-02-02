export const formatDate = (date: string) => {
  if (!/^\d{8}$/.test(date)) {
    return date;
  }
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  return `${year}.${month}.${day}`;
};
