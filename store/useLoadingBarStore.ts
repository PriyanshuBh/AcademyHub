import { create } from "zustand";

interface LoadingBarState {
  progress: number;
  setProgress: (progress: number) => void;
}

const useLoadingBarStore = create<LoadingBarState>((set) => ({
  progress: 0,
  setProgress: (progress: number) => set({ progress }),
}));

export default useLoadingBarStore;
