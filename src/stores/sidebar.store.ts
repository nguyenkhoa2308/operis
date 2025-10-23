import { create } from "zustand";
import { SidebarState } from "@/types";

export const useSidebarStore = create<SidebarState>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
