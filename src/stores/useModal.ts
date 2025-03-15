import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export const useModalIsOpen = () => useModalStore((state) => state.isOpen);
export const useOpenModal = () => useModalStore((state) => state.openModal);
export const useCloseModal = () => useModalStore((state) => state.closeModal);
