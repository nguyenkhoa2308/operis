"use client";

import { useAuthInit } from "@/hooks/useAuthInit";
import { useAuthStore } from "@/stores/auth.store";
import { usePathname } from "next/navigation";

/**
 * Client component wrapper to initialize auth state
 * Shows loading screen only on initial page load, not during navigation
 */
export function AuthInitializer({ children }: { children: React.ReactNode }) {
  useAuthInit();
  const { isInitializing } = useAuthStore();
  const pathname = usePathname();

  // Don't show loading on login/register pages
  const isAuthPage = pathname === "/login" || pathname === "/register";

  if (isInitializing && !isAuthPage) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3DDAB4]"></div>
      </div>
    );
  }

  return <>{children}</>;
}
