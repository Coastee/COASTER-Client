import { create } from "zustand";

type UserStore = {
  userId: number;
  actions: {
    setUserId: (id: number | null) => void;
  };
};

const useUserStore = create<UserStore>((set) => ({
  userId: Number(localStorage.getItem("userId")),

  actions: {
    setUserId: (userId: number | null) =>
      set({
        userId: userId ?? 0,
      }),
  },
}));

export const useUserId = () => useUserStore((state) => state.userId);
export const useUserIdAction = () => useUserStore((state) => state.actions);
