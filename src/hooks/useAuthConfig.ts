import { useEffect, useState } from "react";
// import { getAuthConfig } from "@/lib/api";
import { AuthConfig } from "@/types";

const AUTH_CONFIG_KEY = "auth_config";
const CONFIG_EXPIRY_KEY = "auth_config_expiry";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export function useAuthConfig() {
  const [config, setConfig] = useState<AuthConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        // Check if cached config exists and is still valid
        const cachedConfig = localStorage.getItem(AUTH_CONFIG_KEY);
        const expiry = localStorage.getItem(CONFIG_EXPIRY_KEY);

        if (cachedConfig && expiry) {
          const expiryTime = parseInt(expiry, 10);
          const now = Date.now();

          // Use cached config if not expired
          if (now < expiryTime) {
            setConfig(JSON.parse(cachedConfig));
            setLoading(false);
            return;
          }
        }

        // Fetch fresh config from API
        // const freshConfig = await getAuthConfig();

        // Save to localStorage with expiry
        // localStorage.setItem(AUTH_CONFIG_KEY, JSON.stringify(freshConfig));
        localStorage.setItem(
          CONFIG_EXPIRY_KEY,
          (Date.now() + CACHE_DURATION).toString()
        );

        // setConfig(freshConfig);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch auth config:", err);
        setError("Không thể tải cấu hình xác thực");

        // Try to use cached config even if expired
        const cachedConfig = localStorage.getItem(AUTH_CONFIG_KEY);
        if (cachedConfig) {
          setConfig(JSON.parse(cachedConfig));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, loading, error };
}

/**
 * Clear cached auth config (useful for debugging or force refresh)
 */
export function clearAuthConfigCache() {
  localStorage.removeItem(AUTH_CONFIG_KEY);
  localStorage.removeItem(CONFIG_EXPIRY_KEY);
}
