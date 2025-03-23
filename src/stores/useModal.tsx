import { create } from "zustand";

export type ModalType = "link" | "certification" | "server-enter" |  "server-exit";

interface ModalState {
  isOpen: boolean;
  modalType: ModalType | null;
  openModal: (modalType: ModalType) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  openModal: (modalType) => set({ isOpen: true, modalType }),
  closeModal: () => set({ isOpen: false, modalType: null }),
}));

export const useModalIsOpen = () => useModalStore((state) => state.isOpen);
export const useModalType = () => useModalStore((state) => state.modalType);
export const useOpenModal = () => useModalStore((state) => state.openModal);
export const useCloseModal = () => useModalStore((state) => state.closeModal);
