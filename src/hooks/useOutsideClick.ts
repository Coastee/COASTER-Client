import { useCallback, useEffect, useRef } from "react";

export const useOutsideClick = <T extends HTMLElement = HTMLDivElement>(onClose: () => void) => {
  const ref = useRef<T>(null);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (!ref.current || !(event.target instanceof HTMLElement)) return;

      if (!ref.current.contains(event.target as Node)) {
        onClose?.();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
  }, [handleOutsideClick]);

  return ref;
};
