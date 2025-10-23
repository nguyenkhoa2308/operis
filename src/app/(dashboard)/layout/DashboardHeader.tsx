"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bell,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  FolderKanban,
  Users,
  Briefcase,
  DollarSign,
  BarChart3,
  Package,
  MessageSquare,
  ChevronDown,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/stores/auth.store";
import Link from "next/link";

interface DashboardHeaderProps {
  user: {
    full_name: string;
    email: string;
    role: string;
  };
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
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

  const getRoleColor = (role: string) => {
    const colors: Record<string, string> = {
      admin: "bg-red-100 text-red-800 border-red-300",
      sale: "bg-blue-100 text-blue-800 border-blue-300",
      sales: "bg-blue-100 text-blue-800 border-blue-300",
      dev: "bg-green-100 text-green-800 border-green-300",
      developer: "bg-green-100 text-green-800 border-green-300",
      customer: "bg-purple-100 text-purple-800 border-purple-300",
    };
    return colors[role] || "bg-gray-100 text-gray-800 border-gray-300";
  };

  const getRoleLabel = (role: string) => {
    const labels: Record<string, string> = {
      admin: "Quản trị viên",
      sale: "Nhân viên kinh doanh",
      sales: "Nhân viên kinh doanh",
      dev: "Lập trình viên",
      developer: "Lập trình viên",
      customer: "Khách hàng",
    };
    return labels[role] || role;
  };

  // Mock notifications
  const notifications = [
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

          {/* Desktop Navigation */}
          {/* <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => router.push(item.href)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav> */}

          <div className="hidden md:flex items-center flex-1 max-w-md ml-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                placeholder="Tìm kiếm dự án, khách hàng..."
                className="pl-10 rounded-2xl border-gray-200 bg-white/70 backdrop-blur-sm text-gray-800 placeholder:text-gray-400"
              />
            </div>
          </div>

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
              {/* <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
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
              </button> */}

              {/* Profile Dropdown */}
              {/* <AnimatePresence>
                {isProfileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {user.full_name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="font-bold">{user.full_name}</p>
                          <p className="text-sm text-white/80">{user.email}</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${getRoleColor(
                            user.role
                          )}`}
                        >
                          {getRoleLabel(user.role)}
                        </span>
                      </div>
                    </div>

                    <div className="py-2">
                      <button
                        onClick={() => router.push("/dashboard/profile")}
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <User className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">
                          Thông tin cá nhân
                        </span>
                      </button>
                      <button
                        onClick={() => router.push("/dashboard/settings")}
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <Settings className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">Cài đặt</span>
                      </button>
                    </div>

                    <div className="border-t py-2">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-50 transition-colors text-red-600"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm font-semibold">Đăng xuất</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence> */}

              <DropdownMenu
                open={isProfileMenuOpen}
                onOpenChange={setIsProfileMenuOpen}
              >
                <DropdownMenuTrigger asChild>
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors outline-none"
                  >
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
                  className="w-64 p-0 overflow-hidden bg-white rounded-xl"
                >
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              {user.full_name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="font-bold">{user.full_name}</p>
                            <p className="text-sm text-white/80">
                              {user.email}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${getRoleColor(
                              user.role
                            )}`}
                          >
                            {getRoleLabel(user.role)}
                          </span>
                        </div>
                      </div>

                      <div className="py-2">
                        <button
                          onClick={() => router.push("/dashboard/profile")}
                          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                          <User className="w-4 h-4 text-gray-600" />
                          <span className="text-sm text-gray-700">
                            Thông tin cá nhân
                          </span>
                        </button>
                        <button
                          onClick={() => router.push("/dashboard/settings")}
                          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                          <Settings className="w-4 h-4 text-gray-600" />
                          <span className="text-sm text-gray-700">Cài đặt</span>
                        </button>
                      </div>

                      <div className="border-t py-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-50 transition-colors text-red-600"
                        >
                          <LogOut className="w-4 h-4" />
                          <span className="text-sm font-semibold">
                            Đăng xuất
                          </span>
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {/* {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="px-4 py-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    router.push(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )} */}
      </div>
    </header>
  );
}
