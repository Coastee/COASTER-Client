export const useHashtag = <T extends { hashTags: string[] }>(
  data: T,
  setData: React.Dispatch<React.SetStateAction<T>>
) => {
  const addHashtag = (content: string) => {
    setData((prev) => ({
      ...prev,
      hashTags: [...prev.hashTags, content],
    }));
  };

  const removeHashtag = (content: string) => {
    setData((prev) => ({
      ...prev,
      hashTags: prev.hashTags.filter((tag) => tag !== content),
    }));
  };

  return {
    addHashtag,
    removeHashtag,
  };
};
