import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserProfile, AuthState } from "@/types";
import { authAPI, userAPI } from "@/lib/api";
import { deleteCookie, setCookie } from "@/lib/utils";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      access_token: null,
      refresh_token: null,
      user: null,
      userId: null,
      isLoggedIn: false,
      isInitializing: true,

      loginWithPassword: async (email: string, password: string) => {
        try {
          // Step 1: Login with password to get tokens
          const { data: loginResponse } = await authAPI.login(email, password);
          const { access_token, refresh_token, user } = loginResponse;

          if (!access_token) {
            console.error("❌ Không nhận được access_token từ server");
            return { ok: false, role: "" };
          }

          // Set axios default authorization header
          axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;

          // Step 2: Save tokens to both localStorage AND cookies
          setCookie("access_token", access_token);
          setCookie("refresh_token", refresh_token);
          setCookie("user_role", user.role);

          set({
            access_token: access_token,
            refresh_token: refresh_token,
            isLoggedIn: true,
            userId: user.id,
          });

          // Step 3: Fetch user profile (kept in memory only)
          await get().fetchUserProfile();

          return { ok: true, role: user.role };
        } catch (err) {
          console.error("❌ Lỗi đăng nhập:", err);
          return { ok: false, role: "" };
        }
      },

      loginWithGoogle: async (idToken: string) => {
        try {
          // Step 1: Login with Google to get tokens
          const { data: loginResponse } = await authAPI.loginWithGoogle(
            idToken
          );

          if (!loginResponse.access_token) {
            console.error("❌ Không nhận được access_token từ server");
            return false;
          }

          // Set axios default authorization header
          axios.defaults.headers.common.Authorization = `Bearer ${loginResponse.access_token}`;

          // Step 2: Save tokens to both localStorage AND cookies
          setCookie("access_token", loginResponse.access_token);
          setCookie("refresh_token", loginResponse.refresh_token);

          set({
            access_token: loginResponse.access_token,
            refresh_token: loginResponse.refresh_token,
            isLoggedIn: true,
            userId: loginResponse.user.id,
          });

          // Step 3: Fetch user profile (kept in memory only)
          await get().fetchUserProfile();

          return true;
        } catch (err) {
          console.error("❌ Lỗi đăng nhập Google:", err);
          return false;
        }
      },

      fetchUserProfile: async () => {
        try {
          set({ isInitializing: true });
          const { userId, access_token } = get();

          if (!userId || !access_token) {
            console.error("❌ Không có access token");
            set({ isInitializing: false });
            return false;
          }

          const { data: userProfile } = await userAPI.getMe();

          if (!userProfile) {
            console.error("❌ Không lấy được thông tin người dùng");
            set({ isInitializing: false });
            return false;
          }

          // Update only user data in memory (not persisted to localStorage)
          set({
            user: {
              id: userProfile.id,
              email: userProfile.email,
              full_name: userProfile.full_name || userProfile.email,
              avatar:
                userProfile.avatar ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  userProfile.full_name || userProfile.email
                )}&background=3DDAB4&color=fff&size=128`,
              company: userProfile.company || "Công ty ABC",
              phone_number: userProfile.phone || "",
              role: userProfile.role || "User",
            },
            isInitializing: false,
          });

          return true;
        } catch (err) {
          console.error("❌ Lỗi lấy thông tin user:", err);

          // If fetch profile fails (e.g. token expired), try to refresh
          if (axios.isAxiosError(err) && err.response?.status === 401) {
            const refreshSuccess = await get().refreshAccessToken();
            if (refreshSuccess) {
              // Retry fetch profile after refresh
              return await get().fetchUserProfile();
            }
          }

          set({ isInitializing: false });
          return false;
        }
      },

      refreshAccessToken: async () => {
        try {
          const { refresh_token } = get();

          if (!refresh_token) {
            console.error("❌ Không có refresh token");
            get().logout();
            return false;
          }

          console.log("🔄 Đang refresh access token...");
          const { data: response } = await authAPI.refresh(refresh_token);

          // Update cookies
          setCookie("access_token", response.access_token);
          setCookie("refresh_token", response.refresh_token);
          setCookie("user_role", response.user.role);

          // Update access token and refresh token
          set({
            access_token: response.access,
            refresh_token: response.refresh,
          });

          // Update axios default header
          axios.defaults.headers.common.Authorization = `Bearer ${response.access}`;

          console.log("✅ Refresh token thành công");
          return true;
        } catch (err) {
          console.error("❌ Lỗi refresh token:", err);
          // Clear auth state if refresh fails
          get().logout();
          return false;
        }
      },

      logout: () => {
        // Clear cookies
        deleteCookie("access_token");
        deleteCookie("refresh_token");
        deleteCookie("user_role");

        set({
          user: null,
          access_token: null,
          refresh_token: null,
          isLoggedIn: false,
        });
        delete axios.defaults.headers.common.Authorization;
      },

      updateProfile: (updates: Partial<UserProfile>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: { ...currentUser, ...updates },
          });
        }
      },
    }),
    {
      name: "auth-storage",
      // IMPORTANT: Only persist tokens, NOT user data
      partialize: (state) => ({
        access_token: state.access_token,
        refresh_token: state.refresh_token,
        isLoggedIn: state.isLoggedIn,
        userId: state.userId,
        // user is NOT persisted - will be fetched from API on page load
      }),
    }
  )
);
