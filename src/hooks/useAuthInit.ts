import { useEffect, useRef, useState } from "react";
import { useAuthStore } from "@/stores/auth.store";

/**
 * Hook to initialize auth state on app load
 * - Fetches user profile if access token exists
 * - Handles token refresh if needed
 */
export function useAuthInit() {
  const [hydrated, setHydrated] = useState(false);
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Wait for zustand persist to hydrate from localStorage
    const unsubscribe = useAuthStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });

    // Check if already hydrated
    if (useAuthStore.persist.hasHydrated()) {
      setHydrated(true);
    }

    return unsubscribe;
  }, []);

  useEffect(() => {
    // Only run after hydration is complete
    if (!hydrated || hasInitialized.current) return;

    const initialize = async () => {
      const { access_token, isLoggedIn, user } = useAuthStore.getState();

      // Only fetch if we have a token but no user data yet
      if (isLoggedIn && access_token && !user) {
        await useAuthStore.getState().fetchUserProfile();
      } else {
        // No token, mark as initialized
        useAuthStore.setState({ isInitializing: false });
      }

      hasInitialized.current = true;
    };

    initialize();
  }, [hydrated]);
}
