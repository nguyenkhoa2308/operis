"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Bot,
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  Shield,
  Users,
} from "lucide-react";
// import {
//   GoogleOAuthProvider,
//   GoogleLogin,
//   CredentialResponse,
// } from "@react-oauth/google";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAuthStore } from "@/stores/auth.store";
import { toast } from "sonner";
import { authAPI } from "@/lib/api";
// import { useAuthConfig } from "@/hooks/useAuthConfig";
// import { authAPI } from "@/lib/api";

function LoginPageContent() {
  const { user, loginWithPassword, loginWithGoogle } = useAuthStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  // Real Google OAuth login - handle credential response
  // const handleGoogleSuccess = async (
  //   credentialResponse: CredentialResponse
  // ) => {
  //   if (!credentialResponse.credential) {
  //     alert("Không nhận được thông tin đăng nhập từ Google.");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     // Call zustand store's loginWithGoogle
  //     const success = await loginWithGoogle(credentialResponse.credential);

  //     if (success) {
  //       router.push("/dashboard");
  //     } else {
  //       alert("Đăng nhập Google thất bại. Vui lòng thử lại.");
  //     }
  //   } catch (error) {
  //     console.error("Google login failed:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleGoogleError = () => {
    console.error("Google login error");
    toast.error("Đăng nhập Google thất bại", {
      description: "Vui lòng thử lại hoặc sử dụng phương thức khác.",
      position: "top-right",
    });
  };

  // Email/username and password login
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { ok, role } = await loginWithPassword(email, password);
      if (ok && role) {
        toast.success("Đăng nhập thành công!", {
          description: "Đang chuyển hướng đến dashboard...",
          position: "top-right",
        });
        router.replace(
          `/dashboard/${
            role === "dev" ? "developer" : role === "sale" ? "sales" : role
          }`
        );
      } else {
        toast.error("Đăng nhập thất bại", {
          description: "Email hoặc mật khẩu không chính xác. Vui lòng thử lại.",
          position: "top-right",
        });
      }
    } catch (error: unknown) {
      console.error("Login failed:", error);

      // Extract error message
      let errorMessage = "Đã xảy ra lỗi. Vui lòng thử lại.";
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as {
          response?: { data?: { message?: string; detail?: string } };
        };
        errorMessage =
          axiosError.response?.data?.message ||
          axiosError.response?.data?.detail ||
          errorMessage;
      }

      toast.error("Lỗi đăng nhập", {
        description: errorMessage,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  // Mock forgot password
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call delay

    try {
      const response = await authAPI.forgotPassword(resetEmail);
      if (response.data.success) {
        toast.success("Yêu cầu khôi phục mật khẩu đã được gửi", {
          description: "Vui lòng kiểm tra hộp thư email của bạn để tiếp tục.",
          position: "top-right",
        });
      } else {
        toast.error("Không thể gửi email khôi phục!", {
          description:
            response.data.message ||
            "Vui lòng thử lại sau hoặc liên hệ bộ phận hỗ trợ.",
          position: "top-right",
        });
      }
    } catch (error: unknown) {
      // Extract error message
      let errorMessage = "Đã xảy ra lỗi. Vui lòng thử lại.";
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as {
          response?: { data?: { message?: string; detail?: string } };
        };
        errorMessage =
          axiosError.response?.data?.message ||
          axiosError.response?.data?.detail ||
          errorMessage;
      }

      toast.error("Không thể gửi email khôi phục!", {
        description:
          errorMessage || "Vui lòng thử lại sau hoặc liên hệ bộ phận hỗ trợ.",
        position: "top-right",
      });
    } finally {
      setLoading(false);
      setIsForgotPassword(false);
      setResetEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Split Screen Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Brand & Visual */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-[#3DDAB4]/20 via-[#7A77FF]/15 to-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3DDAB4]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7A77FF]/20 rounded-full blur-3xl animate-pulse" />
          </div>

          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 0.5px 0.5px, #3DDAB4 1px, transparent 0)`,
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="relative z-10 text-center px-12">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-3xl flex items-center justify-center mr-4">
                <Bot className="w-9 h-9 text-white" />
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                AutoFlow
              </span>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Tự động hóa
                <br />
                <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                  quy trình công việc
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Giảm 70% thời gian xử lý công việc lặp đi lặp lại. Tập trung vào
                những việc quan trọng hơn.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "100+", label: "Doanh nghiệp tin tưởng" },
                  { value: "70%", label: "Giảm thời gian xử lý" },
                  { value: "95%", label: "Giảm sai sót" },
                  { value: "6 tháng", label: "ROI payback" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-2xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center items-center p-6 lg:p-12 relative">
          {/* Mobile header for small screens */}
          <div className="lg:hidden absolute top-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <Button
              variant="ghost"
              onClick={() => {
                router.push("/");
              }}
              className="flex items-center space-x-1 text-gray-600 hover:text-[#7A77FF] transition-colors p-1 h-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Trang chủ</span>
            </Button>

            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-lg flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                AutoFlow
              </span>
            </div>
          </div>

          {/* Desktop back button */}
          <div className="hidden lg:block absolute top-8 left-8">
            <Button
              variant="ghost"
              onClick={() => {
                router.push("/");
              }}
              className="flex items-center space-x-2 text-gray-600 hover:text-[#7A77FF] transition-colors rounded-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại trang chủ</span>
            </Button>
          </div>

          <div className="w-full max-w-md mt-20 sm:mt-16 lg:mt-0 px-4 sm:px-0">
            {/* Form Header */}
            <motion.div
              key={isForgotPassword ? "forgot" : "login"}
              initial={{ opacity: 0, x: isForgotPassword ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isForgotPassword ? -20 : 20 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-8"
            >
              <Badge className="mb-4 bg-gradient-to-r from-[#3DDAB4]/20 to-[#7A77FF]/20 text-[#7A77FF] border-[#7A77FF]/30 rounded-full px-4 py-2">
                {isForgotPassword
                  ? "🔐 Khôi phục tài khoản"
                  : "🚀 Truy cập dashboard"}
              </Badge>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {isForgotPassword ? "Quên mật khẩu?" : "Chào mừng trở lại"}
              </h2>

              <p className="text-sm sm:text-base text-gray-600">
                {isForgotPassword
                  ? "Nhập email của bạn để nhận link khôi phục mật khẩu"
                  : "Đăng nhập để quản lý quy trình tự động hóa"}
              </p>
            </motion.div>

            <motion.div
              key={isForgotPassword ? "forgot-form" : "login-form"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white border border-gray-200/50 shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  {isForgotPassword ? (
                    /* Forgot Password Form */
                    <form onSubmit={handleForgotPassword} className="space-y-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="resetEmail"
                          className="text-gray-700 font-medium"
                        >
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="resetEmail"
                            type="email"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            placeholder="email@company.com"
                            className="pl-10 bg-gray-50/50 border-gray-200 rounded-xl focus:border-[#3DDAB4] focus:ring-[#3DDAB4]/20 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button
                          type="submit"
                          disabled={loading || !resetEmail}
                          size="lg"
                          className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-xl py-3 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl"
                        >
                          {loading ? (
                            <div className="flex items-center space-x-2">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              <span>Đang gửi...</span>
                            </div>
                          ) : (
                            "Gửi email khôi phục"
                          )}
                        </Button>

                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => {
                            setIsForgotPassword(false);
                            setResetEmail("");
                          }}
                          className="w-full text-gray-600 hover:text-[#7A77FF]"
                        >
                          Quay lại đăng nhập
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <>
                      {/* Email/Password Form - Đặt lên trên */}
                      <form
                        onSubmit={handleEmailLogin}
                        className="space-y-4 mb-6"
                      >
                        <div className="space-y-2">
                          <Label
                            htmlFor="identifier"
                            className="text-gray-700 font-medium"
                          >
                            Nhập Email
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                              id="identifier"
                              type="text"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="email@company.com hoặc username"
                              className="pl-10 bg-gray-50/50 border-gray-200 rounded-xl focus:border-[#3DDAB4] focus:ring-[#3DDAB4]/20 transition-all duration-300"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="password"
                            className="text-gray-700 font-medium"
                          >
                            Mật khẩu
                          </Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="••••••••"
                              className="pl-10 pr-10 bg-gray-50/50 border-gray-200 rounded-xl focus:border-[#3DDAB4] focus:ring-[#3DDAB4]/20 transition-all duration-300 [&::-ms-reveal]:hidden [&::-webkit-contacts-auto-fill-button]:hidden"
                              autoComplete="current-password"
                              required
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 rounded-lg"
                              tabIndex={-1}
                            >
                              {showPassword ? (
                                <EyeOff className="w-4 h-4" />
                              ) : (
                                <Eye className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 pt-2">
                          <label className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-[#3DDAB4] focus:ring-[#3DDAB4]"
                            />
                            <span>Ghi nhớ đăng nhập</span>
                          </label>
                          <Button
                            type="button"
                            variant="link"
                            onClick={() => setIsForgotPassword(true)}
                            className="text-xs sm:text-sm text-[#7A77FF] hover:text-[#6b69e8] p-0 h-auto justify-start sm:justify-center"
                          >
                            Quên mật khẩu?
                          </Button>
                        </div>

                        <Button
                          type="submit"
                          disabled={loading || !email || !password}
                          size="lg"
                          className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-xl py-3 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl"
                        >
                          {loading ? (
                            <div className="flex items-center space-x-2">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              <span>Đang đăng nhập...</span>
                            </div>
                          ) : (
                            "Đăng nhập"
                          )}
                        </Button>
                      </form>

                      {/* Divider */}
                      <div className="relative my-6">
                        <Separator className="bg-gray-200" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="bg-white px-4 text-sm text-gray-500 font-medium">
                            hoặc
                          </span>
                        </div>
                      </div>

                      {/* Google Login - Đặt xuống dưới */}
                      <div className="w-full [&_iframe]:!w-full">
                        {/* <GoogleLogin
                          onSuccess={handleGoogleSuccess}
                          onError={handleGoogleError}
                          size="large"
                          text="signin_with"
                          shape="rectangular"
                          locale="vi"
                        /> */}
                      </div>

                      {/* Trust indicators */}
                      <div className="mt-6 pt-6 border-t border-gray-200/50">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="flex flex-col items-center space-y-2">
                            <Shield className="w-5 h-5 text-[#3DDAB4]" />
                            <span className="text-xs text-gray-600">
                              Bảo mật SSL
                            </span>
                          </div>
                          <div className="flex flex-col items-center space-y-2">
                            <CheckCircle className="w-5 h-5 text-[#7A77FF]" />
                            <span className="text-xs text-gray-600">
                              Đã xác thực
                            </span>
                          </div>
                          <div className="flex flex-col items-center space-y-2">
                            <Users className="w-5 h-5 text-[#3DDAB4]" />
                            <span className="text-xs text-gray-600">
                              100+ doanh nghiệp
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Sign up prompt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-center"
            >
              <p className="text-gray-600">
                Chưa có tài khoản?{" "}
                <Button
                  variant="link"
                  onClick={() => router.push("/register")}
                  className="text-[#7A77FF] hover:text-[#6b69e8] p-0 font-semibold"
                >
                  Đăng ký miễn phí
                </Button>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  // const { config, loading, error } = useAuthConfig();

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3DDAB4]"></div>
  //     </div>
  //   );
  // }

  // if (error || !config) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-center">
  //         <p className="text-red-500 mb-4">
  //           {error || "Không thể tải cấu hình xác thực"}
  //         </p>
  //         <Button onClick={() => window.location.reload()}>Thử lại</Button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    // <GoogleOAuthProvider clientId={config.client_id}>
    <LoginPageContent />
    // </GoogleOAuthProvider>
  );
}
