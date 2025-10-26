/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * API client for backend communication
 */
import axios from "axios";
import { getCookie, setCookie } from "./utils";

// FORCE port 8001 to avoid conflict with background process on 8000
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Helper to decode JWT and check if it's expired
function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const exp = payload.exp * 1000; // Convert to milliseconds
    // Check if token expires in less than 60 seconds
    return Date.now() >= exp - 60000;
  } catch (error) {
    return true; // If we can't decode, assume expired
  }
}

// Track if we're currently refreshing to avoid multiple refresh calls
let isRefreshing = false;
let refreshPromise: Promise<string> | null = null;

// Function to refresh token
async function refreshAccessToken(): Promise<string> {
  if (isRefreshing && refreshPromise) {
    return refreshPromise;
  }

  isRefreshing = true;
  refreshPromise = (async () => {
    try {
      const refreshToken = getCookie("refresh_token");
      if (!refreshToken) {
        throw new Error("No refresh token");
      }

      const res = await axios.post(`${API_URL}/api/auth/refresh`, {
        refresh_token: refreshToken,
      });

      const newAccess =
        res.data.access_token || res.data.access || res.data.token;
      const newRefresh =
        res.data.refresh_token || res.data.refresh || res.data.new_refresh;

      if (!newAccess) throw new Error("No access token in refresh response");

      // Save new tokens
      setCookie("access_token", newAccess, 7);
      if (newRefresh) {
        setCookie("refresh_token", newRefresh, 7);
      }

      return newAccess;
    } catch (error) {
      // Clear all cookies and redirect to login
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      window.location.href = "/login";
      throw error;
    } finally {
      isRefreshing = false;
      refreshPromise = null;
    }
  })();

  return refreshPromise;
}

export const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const rawAPI = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token and refresh if needed
api.interceptors.request.use(
  async (config) => {
    let token = getCookie("access_token");

    // Check if token is expired or about to expire
    if (token && isTokenExpired(token)) {
      try {
        // Refresh the token before making the request
        token = await refreshAccessToken();
      } catch (error) {
        // If refresh fails, the refreshAccessToken function will handle redirect
        return Promise.reject(error);
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config || {};

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = getCookie("refresh_token");
      if (!refreshToken) {
        // Clear all cookies and redirect to login
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(
              /=.*/,
              "=;expires=" + new Date().toUTCString() + ";path=/"
            );
        });
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        const res = await axios.post(`${API_URL}/api/auth/refresh`, {
          refresh_token: refreshToken,
        });

        const newAccess =
          res.data.access_token || res.data.access || res.data.token;
        const newRefresh =
          res.data.refresh_token || res.data.refresh || res.data.new_refresh;

        if (!newAccess) throw new Error("No access token in refresh response");

        // Tokens will be saved by Zustand store's refresh method
        // Just update the request header
        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccess}`,
        };

        return api(originalRequest);
      } catch (refreshError) {
        // Clear all cookies and redirect to login
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(
              /=.*/,
              "=;expires=" + new Date().toUTCString() + ";path=/"
            );
        });
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (data: any) => rawAPI.post("/auth/register", data),
  login: (email: string, password: string) =>
    rawAPI.post("/auth/login", { email, password }),
  refresh: (refreshToken: string) =>
    rawAPI.post("/auth/refresh", { refresh_token: refreshToken }),
  loginWithGoogle: (idToken: string) =>
    rawAPI.post("/auth/google-auth", {
      google_token: idToken,
    }),
  // verifyEmail: (email: string) => rawAPI.post("/auth/verify-email", email),
  // resetPassword: (token: string, newPassword: string) =>
  //   rawAPI.post("/auth/reset-password", newPassword),
};

// User API
export const userAPI = {
  getMe: () => api.get("/users/me"),
  list: (params?: any) => api.get("/users", { params }),
  get: (id: string) => api.get(`/users/${id}`),
  update: (id: string, data: any) => api.put(`/users/${id}`, data),
  delete: (id: string) => api.delete(`/users/${id}`),
};

// Services API
export const servicesAPI = {
  list: (params?: any) => api.get("/services", { params }),
  get: (slug: string) => api.get(`/services/${slug}`),
  create: (data: any) => api.post("/services", data),

  // Service Requests
  createRequest: (data: any) => api.post("/services/requests", data),
  listRequests: (params?: any) => api.get("/services/requests", { params }),
  getRequest: (id: string) => api.get(`/services/requests/${id}`),
  updateRequest: (id: string, data: any) =>
    api.put(`/services/requests/${id}`, data),
};

// Projects API
export const projectsAPI = {
  list: (params?: any) => api.get("/projects", { params }),
  all: (params?: any) => api.get("/projects/all", { params }),
  get: (id: string) => api.get(`/projects/${id}`),
  delete: (id: string) => api.delete(`/projects/${id}`),
  create: (data: any) => api.post("/projects", data),
  update: (id: string, data: any) => api.put(`/projects/${id}`, data),

  // Chat
  listMessages: (projectId: string, limit?: number) =>
    api.get(`/projects/${projectId}/messages`, { params: { limit } }),
  sendMessage: (projectId: string, data: any) =>
    api.post(`/projects/${projectId}/messages`, data),
  markMessageRead: (projectId: string, messageId: string) =>
    api.post(`/projects/${projectId}/messages/${messageId}/read`),
  getUnreadCount: (projectId: string) =>
    api.get(`/projects/${projectId}/unread-count`),
};

// Proposals API
export const proposalsAPI = {
  // List proposals for a project
  list: (projectId: string) => api.get(`/projects/${projectId}/proposals`),

  // Get single proposal
  get: (proposalId: string) => api.get(`/proposals/${proposalId}`),

  // Create new proposal (sales only)
  create: (projectId: string, data: any) =>
    api.post(`/projects/${projectId}/proposals`, data),

  // Update proposal (sales only, draft only)
  update: (proposalId: string, data: any) =>
    api.put(`/proposals/${proposalId}`, data),

  // Send proposal to customer (sales only)
  send: (proposalId: string) => api.post(`/proposals/${proposalId}/send`, {}),

  // Customer accepts proposal
  accept: (proposalId: string, data?: any) =>
    api.post(`/proposals/${proposalId}/accept`, data || {}),

  // Customer rejects proposal
  reject: (proposalId: string, data?: any) =>
    api.post(`/proposals/${proposalId}/reject`, data || {}),

  // === DEPOSIT PAYMENT (Initial payment) ===
  // Customer submits deposit payment notification (waiting for admin approval)
  submitPayment: (proposalId: string) =>
    api.post(`/proposals/${proposalId}/submit-payment`, {}),

  // Admin/Sales approves customer's deposit payment submission
  approvePayment: (proposalId: string) =>
    api.post(`/proposals/${proposalId}/approve-payment`, {}),

  // Admin/Sales rejects customer's deposit payment submission
  rejectPayment: (proposalId: string) =>
    api.post(`/proposals/${proposalId}/reject-payment`, {}),

  // === PHASE-BASED PAYMENT (Per milestone) ===
  // Sales/Admin marks phase as completed
  markPhaseComplete: (proposalId: string, phaseIndex: number) =>
    api.post(`/proposals/${proposalId}/phases/${phaseIndex}/complete`, {}),

  // Customer submits phase payment
  submitPhasePayment: (proposalId: string, phaseIndex: number) =>
    api.post(
      `/proposals/${proposalId}/phases/${phaseIndex}/submit-payment`,
      {}
    ),

  // Admin/Sales approves phase payment
  approvePhasePayment: (proposalId: string, phaseIndex: number) =>
    api.post(
      `/proposals/${proposalId}/phases/${phaseIndex}/approve-payment`,
      {}
    ),

  // Admin/Sales rejects phase payment
  rejectPhasePayment: (proposalId: string, phaseIndex: number) =>
    api.post(
      `/proposals/${proposalId}/phases/${phaseIndex}/reject-payment`,
      {}
    ),

  // [DEPRECATED] Use approvePayment instead
  confirmPayment: (proposalId: string) =>
    api.post(`/proposals/${proposalId}/confirm-payment`, {}),
};

// Financials API
export const financeAPI = {
  getDashboard: () => api.get(`/finance/finance/dashboard`),
  getTopCustomers: (params?: any) =>
    api.get(`/finance/finance/top-customers`, { params }),
  getPaymentStatusSummary: () =>
    api.get(`/finance/finance/payment-status-summary`),
};

// Transactions API
export const transactionsAPI = {
  list: (params?: any) => api.get("/transactions/transactions", { params }),
  get: (id: string) => api.get(`/transactions/transactions/${id}`),

  createManual: (data: any) => api.post("/transactions/manual", data),
  approve: (id: string) =>
    api.post(`/transactions/transactions/${id}/approve`, {}),
  reject: (id: string, reason: string) =>
    api.post(`/transactions/transactions/${id}/reject`, { reason }),

  projectTransactions: (projectId: string) =>
    api.get(`/transactions/projects/${projectId}/transactions`),
  financialSummary: (projectId: string) =>
    api.get(`/transactions/projects/${projectId}/financial-summary`),
};

// Acceptance & Feedback API
export const feedbackAPI = {
  get: (projectId: string) =>
    api.get(`/feedback/projects/${projectId}/acceptance`),
  create: (projectId: string, data: any) =>
    api.post(`/projects/${projectId}/feedback`, data),
  update: (feedbackId: string, data: any) =>
    api.put(`/feedback/${feedbackId}`, data),
  delete: (feedbackId: string) => api.delete(`/feedback/${feedbackId}`),
};

// Support API
export const supportAPI = {
  createTicket: (data: {
    subject: string;
    message: string;
    priority?: string;
  }) => api.post("/support/tickets", data),
  listTickets: (params?: any) => api.get("/support/tickets", { params }),
  getTicket: (id: string) => api.get(`/support/tickets/${id}`),
};
