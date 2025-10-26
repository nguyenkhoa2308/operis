import { useEffect, useRef } from "react";
import { useAuthStore } from "@/stores/auth.store";

/**
 * Hook to initialize auth state on app load
 * - Hydrates tokens from cookies
 * - Fetches user profile if tokens exist
 */
export function useAuthInit() {
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    // Hydrate auth state from cookies
    useAuthStore.getState().hydrate();
  }, []);
}
