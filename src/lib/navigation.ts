import {
  Home,
  Users,
  FolderKanban,
  Package,
  DollarSign,
  Wallet,
  BarChart3,
  Briefcase,
  MessageSquare,
} from "lucide-react";

export const getAllMenuItems = (role?: string) => {
  switch (role) {
    case "admin":
      return [
        { icon: Home, label: "Tổng quan", href: "/dashboard/admin" },
        { icon: Users, label: "Người dùng", href: "/dashboard/admin/users" },
        {
          icon: FolderKanban,
          label: "Dự án",
          href: "/dashboard/admin/projects",
        },
        { icon: Package, label: "Dịch vụ", href: "/dashboard/admin/services" },
        {
          icon: DollarSign,
          label: "Thanh toán",
          href: "/dashboard/admin/transactions",
        },
        { icon: Wallet, label: "Tài chính", href: "/dashboard/admin/finance" },
        { icon: BarChart3, label: "Báo cáo", href: "/dashboard/admin/reports" },
      ];

    case "sale":
    case "sales":
      return [
        { icon: Home, label: "Tổng quan", href: "/dashboard/sales" },
        {
          icon: Users,
          label: "Khách hàng",
          href: "/dashboard/sales/customers",
        },
        {
          icon: FolderKanban,
          label: "Dự án",
          href: "/dashboard/sales/projects",
        },
        {
          icon: Briefcase,
          label: "Đề xuất",
          href: "/dashboard/sales/proposals",
        },
      ];

    case "dev":
    case "developer":
      return [
        { icon: Home, label: "Tổng quan", href: "/dashboard/developer" },
        {
          icon: FolderKanban,
          label: "Dự án",
          href: "/dashboard/developer/projects",
        },
        {
          icon: MessageSquare,
          label: "Chat",
          href: "/dashboard/developer/chat",
        },
      ];

    case "customer":
      return [
        { icon: Home, label: "Tổng quan", href: "/dashboard/customer" },
        {
          icon: FolderKanban,
          label: "Dự án của tôi",
          href: "/dashboard/customer/projects",
        },
        {
          icon: MessageSquare,
          label: "Hỗ trợ",
          href: "/dashboard/customer/support",
        },
      ];

    default:
      return [
        { icon: Home, label: "Tổng quan", href: "/dashboard" },
        { icon: FolderKanban, label: "Dự án", href: "/dashboard/projects" },
      ];
  }
};
