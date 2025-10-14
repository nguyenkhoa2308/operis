import {
  AuthConfig,
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  UserProfile,
  ProjectsResponse,
  AIRequirementsRequest,
  PricingRequest,
  CreateProjectRequest,
  CreateProjectResponse,
  ChatRequest,
  ChatResponse,
  ReviewResponse,
  ReviewStats,
  GetProjectsParams,
  ProjectListItem,
  PricingData,
  ProjectDetail,
  ChatMessagesResponse,
  SendChatMessageRequest,
  SendChatMessageResponse,
  Transaction,
  Proposal,
  ReviewProposalRequest,
  EscalationsResponse,
  EscalationStatsResponse,
  RespondToEscalationRequest,
  ResolveEscalationRequest,
  FinancialOverview,
  PerformanceData,
  Employee,
  CreateEmployeeRequest,
  UpdateEmployeeRequest,
  AddBonusRequest,
} from "@/types";
import axios from "axios";

// Re-export types for external use
export type {
  ProjectListItem,
  ReviewResponse,
  ReviewStats,
  GetProjectsParams,
  SendChatMessageRequest,
  // ChatMessageData,
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ========================
// Authentication APIs
// ========================

/**
 * Get authentication configuration (Google Client ID)
 */
export async function getAuthConfig(): Promise<AuthConfig> {
  const response = await apiClient.get<AuthConfig>(
    "/accounts/google-oauth-config"
  );
  return response.data;
}

/**
 * Register new user
 */
export async function register(data: RegisterRequest): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>(
    "/accounts/register",
    data
  );
  return response.data;
}

/**
 * Login with email and password
 */
export async function loginWithPassword(
  data: LoginRequest
): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>("/accounts/login", data);
  return response.data;
}

/**
 * Login with Google ID token
 */
export async function loginWithGoogle(idToken: string): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>("/accounts/google-auth", {
    google_token: idToken,
  });
  return response.data;
}

/**
 * Refresh access token using refresh token
 */
export async function refreshToken(
  refreshToken: string
): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>("/accounts/refresh", {
    refresh: refreshToken,
  });
  return response.data;
}

/**
 * Verify email with token
 */
export async function verifyEmail(token: string): Promise<void> {
  const response = await apiClient.post<void>("/accounts/verify-email", {
    token,
  });
  return response.data;
}

/**
 * Resend verification email
 */
export async function resendVerificationEmail(email: string): Promise<void> {
  const response = await apiClient.post<void>("/accounts/resend-verification", {
    email,
  });
  return response.data;
}

/**
 * Request password reset email
 */
export async function forgotPassword(email: string): Promise<void> {
  const response = await apiClient.post<void>(
    "/accounts/request-password-reset",
    {
      email,
    }
  );
  return response.data;
}

/**
 * Reset password with token
 */
export async function resetPassword(
  token: string,
  new_password: string
): Promise<void> {
  const response = await apiClient.post<void>("/accounts/reset-password", {
    token,
    new_password,
  });
  return response.data;
}

// ========================
// User Profile APIs
// ========================

/**
 * Get user profile with access token
 */
export async function getUserProfile(
  userId: number,
  accessToken: string
): Promise<UserProfile> {
  const response = await apiClient.get<UserProfile>("/accounts/profile", {
    params: { user_id: userId },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

/**
 * Get all users
 */
export async function getUsers(accessToken: string) {
  const response = await apiClient.get("/accounts/users", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
}

/**
 * Get user
 */
export async function getCustomerInfo(customerId: string, accessToken: string) {
  const response = await apiClient.get(`/accounts/users/${customerId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
}

// ========================
// Project Management APIs
// ========================

/**
 * Get all projects with optional filters and parameters
 */
export async function getProjects(
  accessToken: string,
  params?: GetProjectsParams
): Promise<ProjectsResponse> {
  const queryParams: Record<string, string | number> = {};

  if (params?.status && params.status !== "all") {
    queryParams.status = params.status;
  }

  if (params?.priority && params.priority !== "all") {
    queryParams.priority = params.priority;
  }

  if (params?.page !== undefined) {
    queryParams.page = params.page;
  }

  if (params?.page_size !== undefined && params.page_size !== null) {
    queryParams.page_size = params.page_size;
  }

  const response = await apiClient.get<ProjectsResponse>("/projects/", {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: queryParams,
  });

  return response.data;
}

/**
 * Get project detail by ID
 */
export async function getProjectById(
  projectId: string,
  accessToken: string
): Promise<ProjectDetail> {
  const response = await apiClient.get<ProjectDetail>(
    `/projects/${projectId}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
}

/**
 * Create new project
 */
export async function createProject(
  data: CreateProjectRequest,
  accessToken: string
): Promise<CreateProjectResponse> {
  const response = await apiClient.post<CreateProjectResponse>(
    "/projects/",
    data,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
}

/**
 * Update project status or details
 */
export async function updateProject(
  projectId: string,
  data: { status?: string; [key: string]: unknown },
  accessToken: string
) {
  const response = await apiClient.put(`/projects/${projectId}`, data, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
}

/**
 * Assign project to sales and developer
 */
export async function assignProject(
  projectId: string,
  data: {
    sales_person_id: string;
    developer_id: string;
  },
  accessToken: string
) {
  const response = await apiClient.post(`/projects/${projectId}/assign`, data, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
}

// ========================
// AI Assistant APIs
// ========================

/**
 * Generate AI requirements for project
 */
export async function generateAIRequirements(
  data: AIRequirementsRequest,
  accessToken: string
) {
  const response = await apiClient.post(
    "/projects/ai/generate-requirements",
    data,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response;
}

/**
 * Calculate project price
 */
export async function calculatePrice(
  data: PricingRequest
): Promise<PricingData> {
  const response = await apiClient.post<PricingData>(
    "/ai-sales/calculate-price",
    data
  );
  return response.data;
}

/**
 * Chat with AI Sale assistant
 */
export async function chatWithAI(
  data: ChatRequest,
  accessToken: string
): Promise<ChatResponse> {
  const response = await apiClient.post<ChatResponse>("/ai-sale/chat", data, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
}

// ========================
// Payment Transactions APIs
// ========================

export async function getTransactions(
  accessToken: string
): Promise<Transaction[]> {
  const response = await apiClient.get<Transaction[]>(
    "/payments/transactions",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
}

// ========================
// Reviews APIs
// ========================

/**
 * Get all reviews with optional filters
 */
export async function getReviews(
  params: {
    sentiment?: string;
    priority?: string;
  },
  accessToken: string
): Promise<{ data: ReviewResponse[] }> {
  const searchParams = new URLSearchParams();
  if (params.sentiment && params.sentiment !== "all") {
    searchParams.append("sentiment", params.sentiment);
  }
  if (params.priority && params.priority !== "all") {
    searchParams.append("priority", params.priority);
  }

  const url = `/reviews${searchParams.toString() ? `?${searchParams}` : ""}`;

  const response = await apiClient.get<{ data: ReviewResponse[] }>(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return response.data;
}

/**
 * Get review statistics
 */
export async function getReviewStats(
  accessToken: string
): Promise<{ data: ReviewStats }> {
  const response = await apiClient.get<{ data: ReviewStats }>(
    "/reviews/stats/summary",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  return response.data;
}

/**
 * Respond to a review
 */
export async function respondToReview(
  reviewId: string,
  message: string,
  accessToken: string
): Promise<void> {
  await apiClient.put(
    `/reviews/${reviewId}/respond`,
    { message },
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
}

// ========================
// Project Chat APIs
// ========================

/**
 * Get chat messages for a project
 */
export async function getChatMessages(
  projectId: string,
  accessToken: string
): Promise<ChatMessagesResponse> {
  const response = await apiClient.get<ChatMessagesResponse>(
    `/chat/project/${projectId}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
}

/**
 * Send a chat message to a project
 */
export async function sendChatMessage(
  data: SendChatMessageRequest,
  accessToken: string
): Promise<SendChatMessageResponse> {
  const response = await apiClient.post<SendChatMessageResponse>(
    "/chat/send",
    data,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
}

// ========================
// Proposals APIs
// ========================

/**
 * Get all proposals
 */
export async function getProposals(accessToken: string): Promise<Proposal[]> {
  const response = await apiClient.get<Proposal[]>(
    "/proposals/?status=SUBMITTED",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
}

/**
 * Approve a proposal
 */
export async function approveProposal(
  proposalId: string,
  data: ReviewProposalRequest,
  accessToken: string
): Promise<void> {
  await apiClient.put(`/proposals/${proposalId}/approve`, data, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

/**
 * Reject a proposal
 */
export async function rejectProposal(
  proposalId: string,
  data: ReviewProposalRequest,
  accessToken: string
): Promise<void> {
  await apiClient.put(`/proposals/${proposalId}/reject`, data, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

// ========================
// Escalations APIs
// ========================

/**
 * Get all escalations with optional filters
 */
export async function getEscalations(
  accessToken: string,
  params?: {
    status?: string;
    severity?: string;
  }
): Promise<EscalationsResponse> {
  const queryParams = new URLSearchParams();
  if (params?.status && params.status !== "all") {
    queryParams.append("status", params.status);
  }
  if (params?.severity && params.severity !== "all") {
    queryParams.append("severity", params.severity);
  }

  const url = `/escalations${queryParams.toString() ? `?${queryParams}` : ""}`;

  const response = await apiClient.get<EscalationsResponse>(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return response.data;
}

/**
 * Get escalation statistics
 */
export async function getEscalationStats(
  accessToken: string
): Promise<EscalationStatsResponse> {
  const response = await apiClient.get<EscalationStatsResponse>(
    "/escalations/stats/summary",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  return response.data;
}

/**
 * Respond to an escalation (Admin only)
 */
export async function respondToEscalation(
  escalationId: string,
  data: RespondToEscalationRequest,
  accessToken: string
): Promise<void> {
  await apiClient.put(`/escalations/${escalationId}/respond`, data, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

/**
 * Resolve an escalation (Admin only)
 */
export async function resolveEscalation(
  escalationId: string,
  data: ResolveEscalationRequest,
  accessToken: string
): Promise<void> {
  await apiClient.put(`/escalations/${escalationId}/resolve`, data, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

// ========================
// Financial APIs
// ========================

/**
 * Get financial overview (Admin only)
 */
export async function getFinancialOverview(
  accessToken: string
): Promise<FinancialOverview> {
  const response = await apiClient.get<FinancialOverview>(
    "/financial/overview",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
}

/**
 * Get employee performance data (Admin only)
 */
export async function getEmployeePerformance(
  accessToken: string
): Promise<PerformanceData> {
  const response = await apiClient.get<PerformanceData>(
    "/financial/employee-performance",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
}

// ========================
// Employee Management APIs
// ========================

/**
 * Get all employees (Admin only)
 */
export async function getEmployees(accessToken: string): Promise<Employee[]> {
  const response = await apiClient.get<Employee[]>("/employees", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
}

/**
 * Create new employee (Admin only)
 */
export async function createEmployee(
  data: CreateEmployeeRequest,
  accessToken: string
): Promise<Employee> {
  const response = await apiClient.post<Employee>("/employees", data, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
}

/**
 * Update employee information (Admin only)
 */
export async function updateEmployee(
  employeeId: string,
  data: UpdateEmployeeRequest,
  accessToken: string
): Promise<Employee> {
  const response = await apiClient.put<Employee>(
    `/employees/${employeeId}`,
    data,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
}

/**
 * Add bonus to employee (Admin only)
 */
export async function addEmployeeBonus(
  employeeId: string,
  data: AddBonusRequest,
  accessToken: string
): Promise<Employee> {
  const response = await apiClient.post<Employee>(
    `/employees/${employeeId}/bonus`,
    data,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
}
