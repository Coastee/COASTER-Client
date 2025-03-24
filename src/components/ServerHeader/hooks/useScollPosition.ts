import { useRef, useState } from "react";

export const useScrollPosition = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const listRef = useRef<HTMLUListElement | null>(null);

  const handleScroll = () => {
    if (listRef.current) {
      setScrollTop(listRef.current.scrollTop);
    }
  };

  return { scrollTop, listRef, handleScroll };
};
