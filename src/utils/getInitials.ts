export const getInitials = (name: string): string => {
  if (!name) return "";

  const initials = name
    .slice(1)
    .split("")
    .map((char) => char.normalize("NFD").charAt(0).toUpperCase())
    .join("");

  return initials;
};
