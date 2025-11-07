"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Menu, User, X, LogOut, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/stores/auth.store";
import { getAllMenuItems } from "@/lib/navigation";

export default function Header() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setUserDropdownOpen(false);
      }
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setUserDropdownOpen(false);
    router.push("/");
  };

  const menuItems = [
    { label: "Giới thiệu", href: "/about" },
    { label: "Đội ngũ", href: "/team" },
    { label: "Danh sách phần mềm", href: "/software" },
    { label: "FAQ", href: "/faq" },
    { label: "Liên hệ", href: "/contact" },
  ];

  const servicesItems = [
    // {
    //   label: "Dịch vụ Tự động hóa",
    //   href: "/services/automation",
    //   description: "Hệ thống tự động thực hiện công việc",
    // },
    {
      label: "Dịch vụ Quản trị",
      href: "/services/management",
      description: "Hệ thống quản lý công việc chuyên nghiệp",
    },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href={"/"} className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-xl sm:rounded-2xl flex items-center justify-center">
                <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                Operis
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-[#7A77FF] transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                {item.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="text-gray-700 hover:text-[#7A77FF] transition-colors duration-300 font-medium text-sm xl:text-base flex items-center gap-1"
              >
                Dịch vụ
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                  >
                    {servicesItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                      >
                        <div className="font-medium text-gray-900">
                          {item.label}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden lg:flex items-center">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100/50 rounded-xl transition-colors"
                >
                  {user.avatar ? (
                    <>
                      <Avatar className="w-7 lg:w-8 h-7 lg:h-8">
                        <AvatarImage src={user?.avatar} />
                        <AvatarFallback className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white font-medium text-sm">
                          {user?.full_name?.charAt(0)?.toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <span className="hidden sm:block font-medium text-sm">
                        {user?.full_name || "User"}
                      </span>
                      <ChevronDown className="hidden sm:block w-4 h-4" />
                    </>
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>

                <AnimatePresence>
                  {userDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200/50 py-2 z-50"
                    >
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">
                          {user.full_name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>

                      <div className="py-1">
                        {getAllMenuItems(user.role).map((item) => (
                          <button
                            key={item.href}
                            onClick={() => {
                              router.push(item.href);
                              setUserDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                          </button>
                        ))}
                      </div>

                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Đăng xuất
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-1 py-1 bg-gray-100/80 rounded-xl">
                <Button
                  onClick={() => router.push("/login")}
                  variant="ghost"
                  className="text-gray-700 hover:text-[#7A77FF] hover:bg-white/80 rounded-lg px-4 py-1.5 h-auto text-sm"
                >
                  Đăng nhập
                </Button>
                <Button
                  onClick={() => router.push("/register")}
                  className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-lg px-4 py-1.5 h-auto shadow-md text-sm"
                >
                  Đăng ký
                </Button>
              </div>
            )}
            <div className="hidden lg:block lg:ml-4">
              <Button
                onClick={() => router.push("/")}
                className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-lg px-4 py-1.5 h-auto shadow-md text-sm"
              >
                Demo
              </Button>
            </div>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-xl p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-3 py-4 space-y-4">
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-[#7A77FF] transition-colors font-medium py-2 block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Services Dropdown */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: menuItems.length * 0.05, duration: 0.3 }}
                >
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full text-left text-gray-700 hover:text-[#7A77FF] transition-colors font-medium py-2 flex items-center justify-between"
                  >
                    Dịch vụ
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 mt-2 space-y-2"
                      >
                        {servicesItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            onClick={() => {
                              setMobileServicesOpen(false);
                              setMobileMenuOpen(false);
                            }}
                            className="block py-2 text-sm text-gray-600 hover:text-[#7A77FF] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </nav>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="pt-3 border-t border-gray-200/50 space-y-3"
              >
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                      {user.avatar ? (
                        <Image
                          src={user.avatar}
                          alt={user.full_name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {user.full_name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      {getAllMenuItems(user.role).map((item) => (
                        <button
                          key={item.href}
                          onClick={() => {
                            router.push(item.href);
                            setUserDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <item.icon className="w-4 h-4" />
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 px-1 py-1 bg-gray-100/80 rounded-xl">
                    <Button
                      onClick={() => {
                        router.push("/login");
                        setMobileMenuOpen(false);
                      }}
                      variant="ghost"
                      className="flex-1 text-gray-700 hover:text-[#7A77FF] hover:bg-white/80 rounded-lg text-sm"
                    >
                      Đăng nhập
                    </Button>
                    <Button
                      onClick={() => {
                        router.push("/register");
                        setMobileMenuOpen(false);
                      }}
                      className="flex-1 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-lg shadow-md text-sm"
                    >
                      Đăng ký
                    </Button>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
