import { useCallback, useState } from "react";

export const useUrlForm = () => {
  const formData = JSON.parse(sessionStorage.getItem("signup") || "{}");
  const initialUrls = Array.isArray(formData.urls) ? formData.urls : [""];

  const [urls, setUrls] = useState<string[]>(initialUrls);

  const handleAddInput = useCallback(() => {
    setUrls((prev) => [...prev, ""]);
  }, []);

  const handleChange = useCallback((index: number, value: string) => {
    setUrls((prev) => prev.map((url, i) => (i === index ? value : url)));
  }, []);

  return {
    urls,
    handleAddInput,
    handleChange,
  };
};
