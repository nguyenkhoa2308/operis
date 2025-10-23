"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserProfile } from "@/types";
import DashboardHeader from "./layout/DashboardHeader";
import DashboardSidebar from "./layout/DashboardSidebar";
import { useAuthStore } from "@/stores/auth.store";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  // const [user, setUser] = useState<UserProfile | null>(null);
  const { user } = useAuthStore();
  console.log("user", user);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobileMenuOpen(false); // ẩn sidebar trên mobile, tablet
      } else {
        setIsMobileMenuOpen(true); // hiển thị trên desktop
      }
    };

    handleResize(); // chạy lần đầu
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   // Check if user is logged in
  //   const token =
  //     localStorage.getItem("access_token") || localStorage.getItem("token");
  //   const userData = localStorage.getItem("user");

  //   if (!token || !userData) {
  //     router.push("/login");
  //     return;
  //   }

  //   setUser(JSON.parse(userData));
  // }, [router]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-2xl mx-auto mb-4 animate-pulse">
            <span className="text-white font-bold text-3xl">O</span>
          </div>
          <div className="text-xl font-semibold text-gray-700">Loading...</div>
          <div className="text-sm text-gray-500 mt-2">
            Đang tải thông tin người dùng
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <DashboardHeader
        user={user}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <DashboardSidebar user={user} open={isMobileMenuOpen} />

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 mt-16 py-6 px-4 sm:px-6 lg:px-8 ${
          isMobileMenuOpen ? "lg:ml-[280px]" : "lg:ml-0"
        }`}
      >
        {children}
      </main>

      {/* Footer */}
      {/* <DashboardFooter /> */}
    </div>
  );
}
