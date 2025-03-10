import { useCallback, useState } from "react";

export const useUrlForm = () => {
  const formData = JSON.parse(sessionStorage.getItem("signup") || "{}");
  const initialUrls = Array.isArray(formData.urls) ? formData.urls : [""];

  const [urls, setUrls] = useState<string[]>(initialUrls);

  const handleAddInput = useCallback(() => {
    setUrls((prev) => [...prev, ""]);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const handleChange = useCallback((index: number, value: string) => {
    setUrls((prev: string[]) => {
      let updatedUrls = prev.map((url, i) => (i === index ? value : url));

      if (updatedUrls.every((url) => url === "")) {
        updatedUrls = [""];
      }

      sessionStorage.setItem("signup", JSON.stringify({ ...formData, urlList: updatedUrls }));

      return updatedUrls;
    });
  }, []);

  return {
    urls,
    handleAddInput,
    handleChange,
  };
};
