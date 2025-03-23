import { create } from "zustand";

type UserStore = {
  userId: number | null;
  actions: {
    setUserId: (id: number | null) => void;
  };
};

const useUserStore = create<UserStore>((set) => ({
  userId: null,

  actions: {
    setUserId: (userId: number | null) =>
      set({
        userId,
      }),
  },
}));

export const useUserId = () => useUserStore((state) => state.userId);
export const useUserIdAction = () => useUserStore((state) => state.actions);
