export const toHashTag = (text: string) => {
  return `#${text.replace(/ /g, "_")}`;
};

export const toNormalText = (hashTag: string) => {
  return hashTag.replace(/^#/, "").replace(/_/g, " ");
};
