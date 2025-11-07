"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/vi";
// import toast, { Toaster } from "react-hot-toast";
import { toast } from "sonner";
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
  User,
  Phone,
  Building,
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
// import { useAuthStore } from "@/stores/auth.store";
import { authAPI } from "@/lib/api";
// import { useAuthConfig } from "@/hooks/useAuthConfig";

dayjs.locale("vi");

function RegisterPageContent() {
  const router = useRouter();
  // const { loginWithGoogle } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    full_name: "",
    // company: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Real Google OAuth register - handle credential response
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
  //       router.push("/user");
  //     } else {
  //       alert("Đăng ký Google thất bại. Vui lòng thử lại.");
  //     }
  //   } catch (error) {
  //     console.error("Google register failed:", error);
  //     alert("Đăng ký Google thất bại. Vui lòng thử lại.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleGoogleError = () => {
  //   console.error("Google register error");
  //   alert("Đăng ký Google thất bại. Vui lòng thử lại.");
  // };

  // Form validation
  const validateForm = () => {
    // Check required fields
    if (!formData.full_name.trim()) {
      toast.error("Đăng ký thất bại", {
        description: "Vui lòng nhập đầy đủ họ tên",
        position: "top-right",
      });
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Đăng ký thất bại", {
        description: "Email không hợp lệ",
        position: "top-right",
      });
      return false;
    }

    // Phone validation (Vietnam format)
    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      toast.error("Đăng ký thất bại", {
        description: "Số điện thoại không hợp lệ",
        position: "top-right",
      });
      return false;
    }

    // Password validation: min 6 chars
    if (formData.password.length < 8) {
      toast.error("Đăng ký thất bại", {
        description: "Mật khẩu phải có ít nhất 8 ký tự",
        position: "top-right",
      });
      return false;
    }

    // Check password match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Đăng ký thất bại", {
        description: "Mật khẩu không khớp",
        position: "top-right",
      });
      return false;
    }

    return true;
  };

  // Email/password register
  const handleEmailRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await authAPI.register({
        email: formData.email,
        password: formData.password,
        full_name: formData.full_name,
        // company: formData.company,
        phone: formData.phone,
        role: "customer",
      });

      // Show success toast
      toast.success("Đăng ký thành công!", {
        duration: 5000,
        position: "top-right",
        // description: " Vui lòng kiểm tra email để xác thực tài khoản.",
        style: {
          background: "#10b981",
          color: "#fff",
          padding: "16px",
          borderRadius: "12px",
        },
        icon: "📧",
      });

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        // company: "",
        password: "",
        confirmPassword: "",
      });

      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error) {
      console.error("Registration failed:", error);
      let errorMessage = "Đăng ký thất bại. Vui lòng thử lại.";
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as {
          response?: { data?: { message?: string } };
        };
        errorMessage = axiosError.response?.data?.message || errorMessage;
      }
      toast.error(errorMessage, {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#ef4444",
          color: "#fff",
          padding: "16px",
          borderRadius: "12px",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Truy cập dashboard quản lý",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Tư vấn miễn phí từ chuyên gia",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Demo sản phẩm 1-1",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Báo giá chi tiết theo nhu cầu",
    },
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* <Toaster /> */}
      {/* Split Screen Layout */}
      <div className="grid lg:grid-cols-2">
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
                Bắt đầu hành trình
                <br />
                <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                  tự động hóa ngay
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tham gia cùng 500+ doanh nghiệp đã tối ưu hóa quy trình làm việc
                với AutoFlow
              </p>

              <div className="space-y-4 max-w-md mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-left"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] flex items-center justify-center text-white">
                      {benefit.icon}
                    </div>
                    <p className="text-gray-700 font-medium">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="flex flex-col justify-center items-center p-6 lg:p-12 relative">
          {/* Mobile header for small screens */}
          <div className="lg:hidden absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
            <Button
              variant="ghost"
              onClick={() => router.push("/")}
              className="flex items-center space-x-1 text-gray-600 hover:text-[#7A77FF] transition-colors p-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Trang chủ</span>
            </Button>

            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-xl flex items-center justify-center">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                AutoFlow
              </span>
            </div>
          </div>

          {/* Desktop back button */}
          <div className="hidden lg:block absolute top-8 left-8">
            <Button
              variant="ghost"
              onClick={() => router.push("/")}
              className="flex items-center space-x-2 text-gray-600 hover:text-[#7A77FF] transition-colors rounded-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại trang chủ</span>
            </Button>
          </div>

          <div className="w-full max-w-md mt-16 sm:mt-20 lg:mt-0">
            {/* Form Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6 sm:mb-8"
            >
              <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-[#3DDAB4]/20 to-[#7A77FF]/20 text-[#7A77FF] border-[#7A77FF]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                ✨ Miễn phí trải nghiệm
              </Badge>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                Tạo tài khoản mới
              </h2>

              <p className="text-sm sm:text-base text-gray-600">
                Hoàn toàn miễn phí, chỉ mất 2 phút
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-white border border-gray-200/50 shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  {/* Email/Password Form */}
                  <form
                    onSubmit={handleEmailRegister}
                    className="space-y-4 mb-6"
                  >
                    <div className="space-y-2">
                      <Label
                        htmlFor="fullName"
                        className="text-gray-700 font-medium"
                      >
                        Họ và tên *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="fullName"
                          name="full_name"
                          type="text"
                          value={formData.full_name}
                          onChange={handleChange}
                          placeholder="Nguyễn Văn A"
                          className="pl-10 bg-gray-50/50 border-gray-200 rounded-xl focus:border-[#3DDAB4] focus:ring-[#3DDAB4]/20"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-gray-700 font-medium"
                      >
                        Email *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@company.com"
                          className="pl-10 bg-gray-50/50 border-gray-200 rounded-xl focus:border-[#3DDAB4] focus:ring-[#3DDAB4]/20"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-gray-700 font-medium"
                      >
                        Số điện thoại *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0123456789"
                          className="pl-10 bg-gray-50/50 border-gray-200 rounded-xl focus:border-[#3DDAB4] focus:ring-[#3DDAB4]/20"
                          required
                        />
                      </div>
                    </div>

                    {/* <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-gray-700 font-medium"
                      >
                        Công ty *
                      </Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Hagency"
                          className="pl-10 bg-gray-50/50 border-gray-200 rounded-xl focus:border-[#3DDAB4] focus:ring-[#3DDAB4]/20"
                          required
                        />
                      </div>
                    </div> */}

                    <div className="space-y-2">
                      <Label
                        htmlFor="password"
                        className="text-gray-700 font-medium"
                      >
                        Mật khẩu *
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="••••••••"
                          className="pl-10 pr-10 bg-gray-50/50 border-gray-200 rounded-xl focus:border-[#3DDAB4] focus:ring-[#3DDAB4]/20 [&::-ms-reveal]:hidden [&::-webkit-contacts-auto-fill-button]:hidden"
                          autoComplete="new-password"
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

                    <div className="space-y-2">
                      <Label
                        htmlFor="confirmPassword"
                        className="text-gray-700 font-medium"
                      >
                        Xác nhận mật khẩu *
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="••••••••"
                          className="pl-10 pr-10 bg-gray-50/50 border-gray-200 rounded-xl focus:border-[#3DDAB4] focus:ring-[#3DDAB4]/20 [&::-ms-reveal]:hidden [&::-webkit-contacts-auto-fill-button]:hidden"
                          autoComplete="new-password"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 rounded-lg"
                          tabIndex={-1}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 pt-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#3DDAB4] focus:ring-[#3DDAB4] mt-1"
                        required
                        title="Checkbox đồng ý điều khoản"
                      />
                      <label className="text-sm text-gray-600">
                        Tôi đồng ý với{" "}
                        <a
                          href="/terms"
                          className="text-[#7A77FF] hover:underline"
                        >
                          Điều khoản dịch vụ
                        </a>{" "}
                        và{" "}
                        <a
                          href="/privacy"
                          className="text-[#7A77FF] hover:underline"
                        >
                          Chính sách bảo mật
                        </a>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-xl py-3 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl"
                    >
                      {loading ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Đang tạo tài khoản...</span>
                        </div>
                      ) : (
                        "Tạo tài khoản"
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

                  {/* Google Register */}
                  {/* <div className="w-full [&_iframe]:!w-full">
                    <GoogleLogin
                      onSuccess={handleGoogleSuccess}
                      onError={handleGoogleError}
                      size="large"
                      text="signup_with"
                      shape="rectangular"
                      locale="vi"
                    />
                  </div> */}

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
                          Miễn phí 100%
                        </span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <Users className="w-5 h-5 text-[#3DDAB4]" />
                        <span className="text-xs text-gray-600">
                          500+ doanh nghiệp
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sign in prompt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-center"
            >
              <p className="text-gray-600">
                Đã có tài khoản?{" "}
                <Button
                  variant="link"
                  onClick={() => router.push("/login")}
                  className="text-[#7A77FF] hover:text-[#6b69e8] p-0 font-semibold"
                >
                  Đăng nhập ngay
                </Button>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
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
    <RegisterPageContent />
    // </GoogleOAuthProvider>
  );
}
