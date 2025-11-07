"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Bell,
  LogOut,
  Menu,
  X,
  Home,
  ChevronDown,
  Search,
  type LucideIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/stores/auth.store";
import { getAllMenuItems } from "@/lib/navigation";

interface DashboardHeaderProps {
  user: {
    full_name: string;
    email: string;
    role: string;
  };
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

interface MenuItem {
  icon: LucideIcon;
  label: string;
  href: string;
  color?: string;
}

interface MenuItems {
  commonItems: MenuItem[];
  quickAccessItems: MenuItem[];
  // profileItems: MenuItem[];
}

interface Notification {
  id: number;
  title: string;
  time: string;
  unread: boolean;
}

export default function DashboardHeader({
  user,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: DashboardHeaderProps) {
  const router = useRouter();
  const { logout } = useAuthStore();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const getRoleColor = (role: string): string => {
    const colors: Record<string, string> = {
      admin: "bg-red-500/80 border-red-500",
      sales: "bg-blue-500/80 border-blue-500",
      sale: "bg-blue-500/80 border-blue-500",
      dev: "bg-green-500/80 border-green-500",
      customer: "bg-purple-500/80 border-purple-500",
    };
    return colors[role] || "bg-gray-500 text-gray-700 border-gray-500";
  };

  const getRoleLabel = (role: string): string => {
    const labels: Record<string, string> = {
      admin: "Quản trị viên",
      sales: "Nhân viên kinh doanh",
      sale: "Nhân viên kinh doanh",
      dev: "Lập trình viên",
      customer: "Khách hàng",
    };
    return labels[role] || role;
  };

  // Get menu items from navigation - same as sidebar
  const sidebarMenuItems = getAllMenuItems(user.role);

  const menuItems: MenuItems = {
    commonItems: [
      { icon: Home, label: "Về trang chủ", href: "/", color: "text-blue-600" },
    ],
    quickAccessItems: sidebarMenuItems.map((item) => ({
      icon: item.icon,
      label: item.label,
      href: item.href,
    })),
    // profileItems: [
    //   { icon: User, label: "Thông tin cá nhân", href: "/dashboard/profile" },
    //   { icon: Settings, label: "Cài đặt", href: "/dashboard/settings" },
    // ],
  };

  // Mock notifications
  const notifications: Notification[] = [
    { id: 1, title: "Dự án mới được tạo", time: "5 phút trước", unread: true },
    {
      id: 2,
      title: "Thanh toán đã được xác nhận",
      time: "1 giờ trước",
      unread: true,
    },
    {
      id: 3,
      title: "Feedback mới từ khách hàng",
      time: "2 giờ trước",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm w-screen min-w-full">
      <div className="">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <Link href={"/"}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">O</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    OPERIS
                  </h1>
                  <p className="text-xs text-gray-500 hidden sm:block">
                    Software Management System
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* <div className="hidden md:flex items-center flex-1 max-w-md ml-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                placeholder="Tìm kiếm dự án, khách hàng..."
                className="pl-10 rounded-2xl border-gray-200 bg-white/70 backdrop-blur-sm text-gray-800 placeholder:text-gray-400"
              />
            </div>
          </div> */}

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Bell className="w-5 h-5 text-gray-600" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3">
                    <h3 className="font-bold">Thông báo</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`px-4 py-3 border-b hover:bg-gray-50 cursor-pointer transition-colors ${
                          notif.unread ? "bg-blue-50" : ""
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {notif.unread && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          )}
                          <div className="flex-1">
                            <p
                              className={`text-sm ${
                                notif.unread
                                  ? "font-semibold text-gray-900"
                                  : "text-gray-700"
                              }`}
                            >
                              {notif.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {notif.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-center">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold">
                      Xem tất cả thông báo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Menu */}
            <div className="relative">
              <DropdownMenu
                open={isProfileMenuOpen}
                onOpenChange={setIsProfileMenuOpen}
              >
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors outline-none">
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {user.full_name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-semibold text-gray-900">
                        {user.full_name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {getRoleLabel(user.role)}
                      </p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-600 hidden md:block" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  sideOffset={8}
                  className="w-72 p-0 overflow-hidden bg-white rounded-xl shadow-2xl border-0"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {user.full_name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold truncate">{user.full_name}</p>
                        <p className="text-sm text-white/80 truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span
                        className={`inline-flex items-center px-3 py-1.5 rounded-lg text-[13px] font-semibold border ${getRoleColor(
                          user.role
                        )}`}
                      >
                        {getRoleLabel(user.role)}
                      </span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  {menuItems.commonItems.length > 0 && (
                    <div className="py-2 border-b">
                      {menuItems.commonItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            router.push(item.href);
                            setIsProfileMenuOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 transition-colors group"
                        >
                          <item.icon
                            className={`w-5 h-5 ${
                              item.color || "text-gray-600"
                            } group-hover:scale-110 transition-transform`}
                          />
                          <span className="text-sm text-gray-700 font-medium">
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Quick access items */}
                  {menuItems.quickAccessItems.length > 0 && (
                    <div className="py-2 border-b">
                      {menuItems.quickAccessItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            router.push(item.href);
                            setIsProfileMenuOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors group"
                        >
                          <item.icon className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                          <span className="text-sm text-gray-700">
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Profile items */}
                  {/* <div className="py-2 border-b">
                    {menuItems.profileItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          router.push(item.href);
                          setIsProfileMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors group"
                      >
                        <item.icon className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                        <span className="text-sm text-gray-700">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div> */}

                  {/* Logout */}
                  <div className="py-2">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition-colors text-red-600 group"
                    >
                      <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold">Đăng xuất</span>
                    </button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
