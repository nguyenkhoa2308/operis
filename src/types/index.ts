// ========================
// Authentication & User Types
// ========================

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  phone_number?: string;
  role: string;
  avatar: string;
  bio?: string;
  company?: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: UserProfile | null;
  userId: number | null;
  access_token: string | null;
  refresh_token: string | null;
  isInitializing: boolean;
  loginWithPassword: (
    email: string,
    password: string
  ) => Promise<{ ok: boolean; role: string }>;
  loginWithGoogle: (idToken: string) => Promise<boolean>;
  fetchUserProfile: () => Promise<boolean>;
  refreshAccessToken: () => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

export interface AuthConfig {
  client_id: string;
  google_enable: string;
}

export interface AuthResponse {
  access: string;
  access_token: string;
  refresh: string;
  refresh_token: string;
  user: UserProfile;
}

export interface RegisterRequest {
  email: string;
  password: string;
  full_name: string;
  phone: string;
  role: "customer" | "admin" | "sales" | "dev" | string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  role: string;
  company: string;
  is_active: boolean;
  created_at: string;
  last_login: string;
}

// ========================
// API Error Types
// ========================

export interface ApiError {
  response?: {
    status?: number;
    data?: {
      message?: string;
      detail?: string;
    };
  };
  message?: string;
}

// ========================
// Project Types
// ========================

export interface ProjectCustomer {
  id: string;
  company_name: string;
  user_email: string;
  user_name: string;
}

export interface ProjectManager {
  id: string;
  full_name: string;
  email: string;
  role: string;
}

export interface ProjectDetail {
  id: string;
  name: string;
  description: string;
  status: string;
  priority: string;
  customer: ProjectCustomer;
  project_manager: ProjectManager | null;
  start_date: string | null;
  end_date: string | null;
  estimated_hours: number | null;
  budget: number | null;
  repository_url: string | null;
  staging_url: string | null;
  production_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  priority?: string;
  customer?: ProjectCustomer;
  customer_name?: string;
  customer_company?: string;
  project_manager?: ProjectManager | null;
  start_date?: string | null;
  end_date?: string | null;
  deadline?: string;
  estimated_hours?: number | null;
  budget?: number | null;
  total_budget?: number;
  spent_budget?: number;
  repository_url?: string | null;
  staging_url?: string | null;
  production_url?: string | null;
  progress?: number;
  team_size?: number;
  created_at: string;
  updated_at?: string;
}

// export interface ProjectData {
//   id: string;
//   name: string;
//   status: string;
//   description: string;
//   start_date: string;
//   end_date: string;
//   progress: number;
//   repository_url: string | null;
//   staging_url: string | null;
//   production_url: string | null;
//   customer: {
//     id: string;
//     company_name: string;
//     user_name: string;
//     user_email: string;
//   };
//   project_manager: {
//     id: string;
//     full_name: string;
//     email: string;
//   } | null;
//   proposal: {
//     id: string;
//     total_cost: number;
//     estimated_duration: number;
//     team_members: Array<{ name: string; role: string }>;
//   } | null;
//   created_at: string;
//   updated_at?: string;
// }

export interface NegotiationProject {
  id: string;
  name: string;
  service_name?: string;
  status: string;
  project_manager?: {
    full_name: string;
    email: string;
  };
  created_at: string;
}

// ========================
// Proposal Types
// ========================

export interface Proposal {
  id: string;
  project_id?: string;
  // project_name?: string;
  created_by: {
    id: string;
    full_name: string;
    email: string;
    role: string;
  };
  project_analysis: string;
  deposit_amount: number;
  deposit_paid: boolean;
  deposit_paid_at: string;
  payment_submitted: boolean;
  payment_submitted_at: string;
  payment_proof: Record<string, string>;
  total_price: number;
  currency: string;
  estimated_start_date: string;
  estimated_end_date: string;
  estimated_duration_days: number;
  phases: Phase[];
  team_members?: TeamMember[];
  milestone: string[];
  payment_terms: string;
  scope_of_work: string;
  deliverables: {
    penalty: string;
    description: string;
  }[];
  terms_and_conditions: string;
  warranty_terms: string;
  status: string;
  customer_notes: string;
  customer_approvals: Record<string, string>;
  accepted_at: string;
  rejected_at: string;
  rejection_reason: string;
  valid_until: "2025-10-22";
  created_at: string;
  updated_at: string;
}

export interface Phase {
  id?: string;
  name: string;
  days?: number;
  amount: number;
  payment_percentage?: number;
  tasks?: string;
  completed?: boolean;
  completed_at?: string;
  completed_by?: string;
  payment_approved?: boolean;
  payment_approved_at?: string;
  payment_approved_by?: string;
  payment_proof?: {
    amount: string;
    approved_at: string;
    approved_by: string;
    approved_by_name: string;
    auto_approved: boolean;
    phase_name: string;
    status: string;
    submitted_at: string;
    submitted_by: string;
  };
  payment_submitted?: boolean;
  payment_submitted_at?: string;
}

export interface TeamMember {
  id?: string;
  name: string;
  role: string;
  rating?: number;
  avatar?: string;
  experience?: string;
  description?: string;
  age?: number;
  experience_years?: number;
  isReal?: boolean;
  expertise?: string;
  projects?: string;
  image?: string;
}

export interface DefaultTeamMember {
  name: string;
  role: string;
  rating: number;
  age: number;
  experience_years: number;
  isReal: boolean;
  description?: string;
}

export interface Commitment {
  id?: string;
  title: string;
  description: string;
}

// ========================
// Transaction & Financial Types
// ========================

export interface Transaction {
  id: string;
  project_id: string;
  project_name: string;
  customer_name: string;
  customer_email: string;
  transaction_type: string;
  status: string;
  amount: number;
  phase_index: number | null;
  phase_name: string | null;
  payment_method: string;
  transaction_reference: string | null;
  description: string | null;
  created_at: string;
  completed_at: string | null;
  processed_by: {
    id: string;
    name: string;
  } | null;
}

export interface FinancialDashboard {
  summary: {
    total_revenue: number;
    total_deposit: number;
    total_phase_payments: number;
    pending_revenue: number;
    total_projects: number;
    completed_projects: number;
    in_progress_projects: number;
    total_proposals: number;
    accepted_proposals: number;
  };
  breakdown: {
    by_status: FinancialStatusBreakdown[];
  };
}

export interface FinancialStatusBreakdown {
  status: "completed" | "in_progress" | string; // có thể mở rộng thêm
  count: number;
  revenue: number;
}

export interface TopCustomer {
  customer_id: string;
  customer_name: string;
  customer_email: string;
  project_count: number;
  total_revenue: number;
}

export interface TopCustomersResponse {
  top_customers: TopCustomer[];
  total_customers: number;
}

export interface PaymentStatusResponse {
  deposits: DepositStatus;
  phases: PhaseStatus;
  overall: OverallStatus;
}

export interface DepositStatus {
  paid_count: number;
  pending_count: number;
  total_paid_amount: number;
  total_pending_amount: number;
  payment_rate_percent: number;
}

export interface PhaseStatus {
  total: number;
  completed: number;
  paid: number;
  pending: number;
  total_revenue: number;
  pending_revenue: number;
  payment_rate_percent: number;
}

export interface OverallStatus {
  total_revenue: number;
  pending_revenue: number;
}

export interface ProjectFinancial {
  id: string;
  name: string;
  customer: string;
  total_budget: number;
  received: number;
  pending: number;
  status: string;
}

export interface FinancialSummary {
  total_budget: number;
  total_paid: number;
  total_pending: number;
  payment_progress: number;
  transactions: Transaction[];
}

// ========================
// Service Types
// ========================

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: string;
  short_description: string;
  full_description: string;
  key_features: (string | Challenge)[]; // Can be strings OR challenge objects
  differentiators: string[];
  process_stages: ProcessStage[];
  team_structure: Record<string, number>;
  estimated_team_size: number;
  estimated_duration_min: number;
  estimated_duration_max: number;
  price_range_min: number;
  price_range_max: number;
  icon: string;
  thumbnail: string | null;
  gallery: string[];
  is_active: boolean;
  is_featured: boolean;
  technologies: string[];
  created_at: string;
  updated_at: string;
}

export interface ProcessStage {
  stage?: number;
  order?: number;
  name: string;
  description: string;
  duration: string;
  details?: string[];
  deliverables?: string[];
  commitment?: Record<string, string>;
  supervision?: string;
  warranty_packages?: string[];
  icon?: string;
}

export interface Challenge {
  type?: string;
  title: string;
  description: string;
  solution?: string;
}

export interface ServiceSummary {
  id: string;
  name: string;
  status: string;
  created_at: string;
  total_cost: number;
  estimated_duration: number;
}

export interface ServiceDetail extends ServiceSummary {
  description: string;
  phases: {
    name: string;
    duration: number;
    status: string;
  }[];
  team_members: {
    name: string;
    role: string;
    avatar: string;
  }[];
  progress: number;
}

// ========================
// Request & Form Types
// ========================

export interface WorkflowStep {
  id: string;
  description: string;
}

// ========================
// Message & Chat Types
// ========================

export interface Message {
  id: string;
  project_id: string;
  sender: {
    id: string;
    full_name: string;
    email: string;
    role: string;
  };
  message: string;
  message_type: string;
  attachments: string[];
  is_read: boolean;
  read_at: string | null;
  created_at: string;
}

export interface UnreadCount {
  count: number;
}

// ========================
// FAQ Types
// ========================

export interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
  popular?: boolean;
  relatedQuestions?: number[];
}

// ========================
// Dashboard & Report Types
// ========================

export interface Dashboard {
  total_projects: number;
  active_projects: number;
  completed_projects: number;
  total_revenue: number;
  monthly_revenue: Array<{
    month: string;
    revenue: number;
  }>;
  project_status: Array<{
    status: string;
    count: number;
  }>;
  recent_activities: Array<{
    id: string;
    type: string;
    description: string;
    timestamp: string;
  }>;
}

export interface Feedback {
  id: string;
  project_id: string;

  customer: { id: string; full_name: string; email: string };

  acceptance_status: "pending" | "accepted" | "rejected";
  accepted_at: string | null;
  rejected_at: string | null;

  rating: 1 | 2 | 3 | 4 | 5 | null;

  feedback: string;
  complaint: string | null;
  revision_details: string | null;

  feature_request: string | null;
  upgrade_request: string | null;

  admin_response: string | null;
  admin_responded_at: string | null;
  responded_by: { id: string; full_name: string; email: string } | null;

  revision_completed: boolean;
  revision_completed_at: string | null;

  created_at: string;
  updated_at: string;
}

// ========================
// UI Component Types
// ========================

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SidebarState {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

// ========================
// View Mode Types
// ========================

export type ViewMode = "list" | "detail" | "form";
