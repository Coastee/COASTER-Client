import { create } from "zustand";

export type Member = {
  name: string;
  image: string;
  id: string;
};

interface DrawerStore {
  isOpen: boolean;
  content: Member[];

  actions: {
    openMenuBar: (content: Member[]) => void;
    closeMenuBar: () => void;
    setContent: (content: Member) => void;
  };
}

const useStore = create<DrawerStore>((set) => ({
  isOpen: false,
  content: [],

  actions: {
    openMenuBar: (content: Member[]) =>
      set({
        isOpen: true,
        content,
      }),
    closeMenuBar: () =>
      set({
        isOpen: false,
        content: [],
      }),
    setContent: (content: Member) =>
      set((prev) => ({
        content: [...prev.content, content],
      })),
  },
}));

export const useMenuBarIsOpen = () => useStore((state) => state.isOpen);
export const useMenuBarContent = () => useStore((state) => state.content);
export const useMenuBarAction = () => useStore((state) => state.actions);
