import type { SelectedItemTypes } from "@/pages/HomePage/types/selectedItemTypes";
import { useState } from "react";

export function useSelectedItem() {
  const [selectedItem, setSelectedItem] = useState<SelectedItemTypes>({ id: null, type: null });

  const handleItemClick = (type: string, id: string) => {
    setSelectedItem({ type, id });
  };

  return { selectedItem, setSelectedItem, handleItemClick };
}
