import { useEffect, useState } from "react";

export function useSearchWithDebounce(queryParam: { keyword: string; tags: string[] }, delay: number) {
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSearching(queryParam.keyword !== "" || queryParam.tags.length > 0);
    }, delay);

    return () => clearTimeout(timeout);
  }, [queryParam, delay]);

  return isSearching;
}
