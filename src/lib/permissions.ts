// Page access control configuration
export type UserRole = "CUSTOMER" | "SALES" | "DEVELOPER" | "ADMIN" | string;

export interface PagePermission {
  path: string;
  roles: UserRole[];
  title: string;
}

// Define page permissions matching the sidebar menu items
export const pagePermissions: PagePermission[] = [
  {
    path: "/dashboard",
    roles: ["CUSTOMER", "SALES", "DEVELOPER", "ADMIN"],
    title: "Dashboard",
  },
  {
    path: "/dashboard/projects",
    roles: ["CUSTOMER", "SALES", "DEVELOPER", "ADMIN"],
    title: "Dự Án",
  },
  {
    path: "/dashboard/chat",
    roles: ["SALES", "ADMIN"],
    title: "Chat",
  },
  {
    path: "/dashboard/transactions",
    roles: ["CUSTOMER", "SALES", "ADMIN"],
    title: "Thanh Toán",
  },
  {
    path: "/dashboard/my-earnings",
    roles: ["DEVELOPER", "SALES"],
    title: "Lương & Thưởng",
  },
  {
    path: "/dashboard/proposals",
    roles: ["SALES", "ADMIN"],
    title: "Báo Giá",
  },
  {
    path: "/dashboard/reviews",
    roles: ["CUSTOMER", "SALES", "DEVELOPER", "ADMIN"],
    title: "Đánh Giá",
  },
  {
    path: "/dashboard/escalations",
    roles: ["SALES", "DEVELOPER", "ADMIN"],
    title: "Báo Cáo Gấp",
  },
  {
    path: "/dashboard/employees",
    roles: ["ADMIN"],
    title: "Nhân viên",
  },
  {
    path: "/dashboard/financial",
    roles: ["ADMIN"],
    title: "Tài chính",
  },
  {
    path: "/dashboard/settings",
    roles: ["CUSTOMER", "SALES", "DEVELOPER", "ADMIN"],
    title: "Cài Đặt",
  },
];

/**
 * Check if a user has access to a specific page
 * @param pathname - The page path to check
 * @param userRole - The role of the current user
 * @returns true if user has access, false otherwise
 */
export function hasPageAccess(
  pathname: string,
  userRole: UserRole | null | undefined
): boolean {
  if (!userRole) return false;

  // Find the permission config for the current path or its parent path
  const permission = pagePermissions.find((p) => {
    // Exact match
    if (pathname === p.path) return true;
    // Check if pathname starts with the permission path (for nested routes)
    // e.g. /dashboard/projects/123 should match /dashboard/projects
    if (p.path !== "/dashboard" && pathname.startsWith(p.path + "/"))
      return true;
    return false;
  });

  // If no specific permission found, allow access (default pages)
  if (!permission) return true;

  // Check if user's role is in the allowed roles
  return permission.roles.includes(userRole);
}

/**
 * Get the permission configuration for a specific page
 * @param pathname - The page path
 * @returns PagePermission object or undefined
 */
export function getPagePermission(
  pathname: string
): PagePermission | undefined {
  return pagePermissions.find((p) => {
    if (pathname === p.path) return true;
    if (p.path !== "/dashboard" && pathname.startsWith(p.path + "/"))
      return true;
    return false;
  });
}
