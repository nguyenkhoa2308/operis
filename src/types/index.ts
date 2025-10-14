// ========================
// Authentication Types
// ========================

export interface UserProfile {
  id: number;
  email: string;
  full_name: string;
  phone_number?: string;
  role: "CUSTOMER" | "ADMIN" | "SALES" | "DEVELOPER" | string;
  avatar?: string;
  bio?: string;
  company?: string;
  address?: string;
  gender?: "M" | "F" | "O";
  birth_date?: string;
  is_active?: boolean;
  is_email_verified?: boolean;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: UserProfile | null;
  access_token: string | null;
  refresh_token: string | null;
}

export interface AuthConfig {
  client_id: string;
  google_enable: string;
}

export interface AuthResponse {
  access: string;
  refresh: string;
  user: UserProfile;
}

export interface RegisterRequest {
  email: string;
  password: string;
  full_name: string;
  company: string;
  birth_date?: string;
  gender?: string;
  address?: string;
  phone_number?: string;
  role: "CUSTOMER" | "ADMIN" | "SALES" | "DEVELOPER" | string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

// ========================
// User Types
// ========================

export interface ProjectCustomer {
  _id: string;
  fullName: string;
  email: string;
  username?: string;
  companyName?: string;
}

// ========================
// Project Types
// ========================

export interface ProjectBudget {
  estimated?: number;
  actual?: number;
}

export interface ProjectListItem {
  id: string;
  code: string;
  name: string;
  description: string;
  status: string;
  priority: string;
  budget: number;
  progress: number;
  customer_name: string;
  developer_name: string;
  sales_person_name: string;
  created_at: string;
}

export interface ProjectDetail extends ProjectListItem {
  requirements: string;
  project_type: string;
  actual_cost: number;
  ai_generated_requirements?: Record<string, unknown>;
  ai_analysis?: Record<string, unknown>;
  timeline: string;
  deadline: string;
  customer_id: string;
  sales_person_id: string;
  developer_id: string;
  updated_at: string;
}

export interface ProjectsResponse {
  items: ProjectListItem[];
  count: number;
}

export interface GetProjectsParams {
  status?: string;
  priority?: string;
  page?: number;
  page_size?: number | null;
}

export interface CreateProjectRequest {
  name: string;
  description: string;
  requirements: string;
  project_type: string;
  budget?: number;
  timeline?: string;
  deadline: string;
  priority: string;
}

export interface CreateProjectResponse {
  success: boolean;
  data: ProjectDetail;
}

// ========================
// Transaction Types
// ========================

export interface Transaction {
  id: string;
  project_id: string;
  project_code: string;
  project_name: string;
  customer_id: string;
  customer_name: string;
  amount: 0;
  transaction_type: string;
  status: string;
  payment_method: string;
  qr_code_url: string;
  reference_number: string;
  sepay_transaction_id: string;
  bank_code: string;
  bank_account: string;
  notes: string;
  created_at: string;
  verified_at: string;
}

export interface TransactionStats {
  totalAmount: number;
  pendingAmount: number;
  completedTransactions: number;
  pendingTransactions: number;
}

// ========================
// Review Types
// ========================

export interface ReviewResponse {
  _id: string;
  projectId: {
    _id: string;
    projectName: string;
    projectCode: string;
  };
  customerId: ProjectCustomer;
  overallRating: number;
  ratings: {
    quality: number;
    timeline: number;
    communication: number;
    value: number;
  };
  title: string;
  comment: string;
  aiAnalysis: {
    sentiment: "positive" | "negative" | "neutral" | "mixed";
    sentimentScore: number;
    keywords: Array<{ word: string; relevance: number; category: string }>;
    categories: string[];
    priority: "low" | "medium" | "high" | "critical";
  };
  autoResponse: {
    enabled: boolean;
    draftMessage: string;
    suggestedActions: Array<{
      action: string;
      priority: string;
      assignTo: string;
    }>;
  };
  teamResponse?: {
    respondedBy: { username: string; email: string };
    message: string;
    respondedAt: string;
  };
  status: "pending" | "reviewed" | "responded" | "resolved";
  createdAt: string;
}

export interface ReviewStats {
  totalReviews: number;
  avgRating: number;
  positiveReviews: number;
  negativeReviews: number;
  neutralReviews: number;
  criticalIssues: number;
  pendingReviews: number;
}

// ========================
// AI Assistant Types
// ========================

export interface AIRequirementsRequest {
  description: string;
  projectName: string;
  projectType: string;
  industry: string;
  userCount: number;
  priorityFeatures: string;
  companySize: string;
  budgetRange?: string;
  expectedTimeline?: string;
}

export interface AIRequirementsResponse {
  functional_requirements?: string[];
  non_functional_requirements?: string[];
  technical_requirements?: string[];
  user_stories?: string[];
  acceptance_criteria?: string[];
}

export interface PricingRequest {
  userCount: number;
  modules: string[];
  features: string[];
  timeline: "standard";
  rush_days: 0;
  integrations: [];
  automation_workflows: 0;
  technology: "web";
  support_level: "basic";
  estimated_months: 1;
}

export interface PricingBreakdown {
  description: string;
  amount: number;
}

export interface DeliveryTime {
  demo: string;
  implementation: string;
}

export interface PricingData {
  totalPrice: number;
  breakdown?: PricingBreakdown[];
  deliveryTime?: DeliveryTime;
  validity: string;
  isLargeProject?: boolean;
  message?: string;
}

export interface PricingResponse {
  success: boolean;
  data: PricingData;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatContext {
  projectTitle: string;
  projectType: string;
  projectDescription: string;
  requirements: string;
  quotedPrice: PricingData | null;
}

export interface ChatRequest {
  message: string;
  context: ChatContext;
}

export interface ChatResponse {
  success: boolean;
  data: {
    response: string;
  };
}

// ========================
// Project Chat Types
// ========================

export interface ChatMessageSender {
  _id: string;
  fullName: string;
  email: string;
  role: string;
}

export interface ChatMessageData {
  _id: string;
  project: string;
  sender: ChatMessageSender;
  message: string;
  messageType: string;
  isEdited: boolean;
  reactions: Array<{
    user: string;
    emoji: string;
  }>;
  createdAt: string;
}

export interface ChatMessagesResponse {
  success: boolean;
  data: ChatMessageData[];
}

export interface SendChatMessageRequest {
  projectId: string;
  message: string;
  messageType: string;
}

export interface SendChatMessageResponse {
  success: boolean;
  data: ChatMessageData;
}

// ========================
// Proposal Types
// ========================

export interface ProposalPricing {
  estimatedHours?: number;
  hourlyRate?: number;
  totalPrice?: number;
  depositAmount?: number;
}

export interface ProposalTimeline {
  estimatedDuration?: number;
  estimatedDays?: number;
}

export interface ProposalAdminReview {
  reviewNotes?: string;
  reviewedBy?: string;
  reviewedAt?: string;
}

export interface Proposal {
  id: string;
  project_id: string;
  project_name: string;
  customer_name: string;
  status: string;
  total_price: 0;
  estimated_days: 0;
  submitted_at: string;
  created_at: string;
}

export interface ReviewProposalRequest {
  reviewNotes: string;
}

// ========================
// Escalation Types
// ========================

export interface EscalationProject {
  _id: string;
  projectName: string;
  projectCode: string;
  status: string;
}

export interface EscalationUser {
  _id: string;
  username: string;
  email: string;
  role: string;
}

export interface EscalationAdminResponse {
  respondedBy: {
    username: string;
    email: string;
  };
  message: string;
  action: string;
  actionDetails?: string;
  respondedAt: string;
}

export interface EscalationResolution {
  resolvedBy: {
    username: string;
    email: string;
  };
  solution: string;
  resolvedAt: string;
}

export interface Escalation {
  _id: string;
  projectId: EscalationProject;
  reportedBy: EscalationUser;
  reporterRole: string;
  title: string;
  description: string;
  category: string;
  severity: "low" | "medium" | "high" | "critical";
  urgency: string;
  impact: string;
  adminResponse?: EscalationAdminResponse;
  resolution?: EscalationResolution;
  status: "open" | "in_progress" | "resolved" | "closed";
  createdAt: string;
  isSlaBreach?: boolean;
  priorityScore?: number;
}

export interface EscalationsResponse {
  success: boolean;
  data: Escalation[];
}

export interface EscalationStats {
  totalEscalations: number;
  openEscalations: number;
  inProgressEscalations: number;
  resolvedEscalations: number;
  criticalEscalations: number;
  avgResponseTime: number;
  avgResolutionTime: number;
}

export interface EscalationStatsResponse {
  success: boolean;
  data: EscalationStats;
}

export interface RespondToEscalationRequest {
  message: string;
  action: string;
  actionDetails?: string;
}

export interface ResolveEscalationRequest {
  solution: string;
}

// ========================
// Financial Types
// ========================

export interface FinancialRevenue {
  total: number;
  completedProjects: number;
  averagePerProject: number;
}

export interface FinancialCosts {
  totalSalaries: number;
  totalBonuses: number;
  total: number;
}

export interface FinancialProfit {
  amount: number;
  margin: string;
}

export interface FinancialProjects {
  total: number;
  completed: number;
  inProgress: number;
  pending: number;
}

export interface FinancialEmployees {
  total: number;
  sales: number;
  developers: number;
}

export interface FinancialOverview {
  revenue: FinancialRevenue;
  costs: FinancialCosts;
  profit: FinancialProfit;
  projects: FinancialProjects;
  employees: FinancialEmployees;
}

export interface EmployeePerformance {
  employeeId: string;
  employeeCode: string;
  fullName: string;
  role: "sales" | "developer" | "admin";
  projectsCompleted: number;
  averageRating: number;
  totalRevenue: number;
  totalBonus: number;
  baseSalary: number;
  estimatedIncome: number;
  efficiency: number;
}

export interface PerformanceSummary {
  topPerformer: EmployeePerformance | null;
  totalEmployees: number;
  averageRating: number;
  totalRevenue: number;
}

export interface PerformanceData {
  performance: EmployeePerformance[];
  summary: PerformanceSummary;
}

// ========================
// Employee Types
// ========================

export interface EmployeeBonus {
  _id: string;
  amount: number;
  reason: string;
  date: string;
}

export interface Employee {
  _id: string;
  employeeCode: string;
  fullName: string;
  email: string;
  role: "sales" | "developer" | "admin";
  baseSalary: number;
  commissionRate: number;
  totalBonus: number;
  totalCommission: number;
  projectsCompleted: number;
  averageRating: number;
  status: "active" | "inactive";
  bonuses: EmployeeBonus[];
}

export interface CreateEmployeeRequest {
  fullName: string;
  email: string;
  password: string;
  role: "sales" | "developer";
  baseSalary: number;
  commissionRate: number;
}

export interface UpdateEmployeeRequest {
  baseSalary?: number;
  commissionRate?: number;
  status?: "active" | "inactive";
}

export interface AddBonusRequest {
  amount: number;
  reason: string;
}
