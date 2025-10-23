"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import {
  Bot,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowLeft,
  ShieldX,
  KeyRound,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { resetPassword } from "@/lib/api";
import { ApiError } from "@/types";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "no-token"
  >("idle");
  const [message, setMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countdown, setCountdown] = useState(3);

  // Check token on mount
  useEffect(() => {
    if (!token || token.trim() === "") {
      setStatus("no-token");
      setMessage(
        "Truy cập không hợp lệ. Vui lòng sử dụng link khôi phục mật khẩu từ email."
      );
    } else {
      setStatus("idle");
    }
  }, [token]);

  // Countdown for redirect after success
  useEffect(() => {
    if (status === "success" && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (status === "success" && countdown === 0) {
      router.push("/login");
    }
  }, [status, countdown, router]);

  const validatePassword = () => {
    if (!newPassword || newPassword.trim() === "") {
      toast.error("Vui lòng nhập mật khẩu mới", {
        position: "top-right",
        duration: 3000,
        style: {
          background: "#ef4444",
          color: "#fff",
          padding: "16px",
          borderRadius: "12px",
        },
        icon: null,
      });
      return false;
    }

    if (newPassword.length < 8) {
      toast.error("Mật khẩu phải có ít nhất 8 ký tự", {
        position: "top-right",
        duration: 3000,
        style: {
          background: "#ef4444",
          color: "#fff",
          padding: "16px",
          borderRadius: "12px",
        },
        icon: null,
      });
      return false;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu xác nhận không khớp", {
        position: "top-right",
        duration: 3000,
        style: {
          background: "#ef4444",
          color: "#fff",
          padding: "16px",
          borderRadius: "12px",
        },
        icon: null,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePassword()) {
      return;
    }

    if (!token) {
      toast.error("Token không hợp lệ", {
        position: "top-right",
        duration: 3000,
        style: {
          background: "#ef4444",
          color: "#fff",
          padding: "16px",
          borderRadius: "12px",
        },
        icon: null,
      });
      return;
    }

    setStatus("submitting");

    try {
      // await resetPassword(token, newPassword);
      setStatus("success");
      setMessage("Mật khẩu đã được thay đổi thành công!");
    } catch (error) {
      console.error("Reset password failed:", error);

      const apiError = error as ApiError;
      const errorMessage = apiError?.response?.data?.message || "";

      if (
        apiError?.response?.status === 410 ||
        errorMessage.includes("expired") ||
        errorMessage.includes("hết hạn")
      ) {
        setStatus("error");
        setMessage("Link khôi phục mật khẩu đã hết hạn. Vui lòng yêu cầu lại.");
      } else {
        setStatus("error");
        setMessage(
          errorMessage ||
            "Không thể đổi mật khẩu. Vui lòng thử lại hoặc yêu cầu link mới."
        );
      }

      toast.error(errorMessage || "Đổi mật khẩu thất bại. Vui lòng thử lại.", {
        position: "top-right",
        duration: 4000,
        style: {
          background: "#ef4444",
          color: "#fff",
          padding: "16px",
          borderRadius: "12px",
        },
        icon: null,
      });
    }
  };

  const getPasswordStrength = (password: string) => {
    if (password.length === 0) return { strength: 0, label: "", color: "" };
    if (password.length < 6)
      return { strength: 1, label: "Yếu", color: "bg-red-500" };
    if (password.length < 10)
      return { strength: 2, label: "Trung bình", color: "bg-yellow-500" };
    return { strength: 3, label: "Mạnh", color: "bg-green-500" };
  };

  const passwordStrength = getPasswordStrength(newPassword);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden flex items-center justify-center">
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerStyle={{
          top: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            padding: "16px",
            fontSize: "14px",
            fontWeight: "500",
          },
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#3DDAB4]/20 to-[#3DDAB4]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#7A77FF]/20 to-[#7A77FF]/5 rounded-full blur-3xl"
        />
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 0.5px 0.5px, #3DDAB4 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-lg px-4">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Button
            variant="ghost"
            onClick={() => router.push("/login")}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#7A77FF] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Đăng nhập</span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Card className="bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              {/* Logo with animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2,
                }}
                className="flex items-center justify-center mb-8"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-3xl flex items-center justify-center shadow-lg">
                    <KeyRound className="w-11 h-11 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Status Content */}
              <div className="text-center">
                <AnimatePresence mode="wait">
                  {(status === "idle" || status === "submitting") && (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <>
                        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent mb-3">
                          Đặt lại mật khẩu
                        </h1>
                        <p className="text-gray-600 text-base sm:text-lg mb-8">
                          Nhập mật khẩu mới cho tài khoản của bạn
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                          {/* New Password */}
                          <div className="space-y-2 text-left">
                            <Label
                              htmlFor="newPassword"
                              className="text-sm font-semibold text-gray-700 flex items-center space-x-2"
                            >
                              <Lock className="w-4 h-4 text-[#7A77FF]" />
                              <span>Mật khẩu mới</span>
                            </Label>
                            <div className="relative">
                              <Input
                                id="newPassword"
                                type={showNewPassword ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Nhập mật khẩu mới"
                                className="pl-4 pr-12 py-3 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-[#3DDAB4] focus:ring-4 focus:ring-[#3DDAB4]/20 outline-none transition-all"
                                disabled={status === "submitting"}
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setShowNewPassword(!showNewPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                              >
                                {showNewPassword ? (
                                  <EyeOff className="w-5 h-5" />
                                ) : (
                                  <Eye className="w-5 h-5" />
                                )}
                              </button>
                            </div>

                            {/* Password Strength Indicator */}
                            {newPassword && (
                              <div className="space-y-1">
                                <div className="flex space-x-1">
                                  {[1, 2, 3].map((level) => (
                                    <div
                                      key={level}
                                      className={`h-1 flex-1 rounded-full transition-all ${
                                        level <= passwordStrength.strength
                                          ? passwordStrength.color
                                          : "bg-gray-200"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <p
                                  className={`text-xs ${
                                    passwordStrength.strength === 1
                                      ? "text-red-500"
                                      : passwordStrength.strength === 2
                                      ? "text-yellow-500"
                                      : "text-green-500"
                                  }`}
                                >
                                  Độ mạnh: {passwordStrength.label}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Confirm Password */}
                          <div className="space-y-2 text-left">
                            <Label
                              htmlFor="confirmPassword"
                              className="text-sm font-semibold text-gray-700 flex items-center space-x-2"
                            >
                              <Lock className="w-4 h-4 text-[#7A77FF]" />
                              <span>Xác nhận mật khẩu</span>
                            </Label>
                            <div className="relative">
                              <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                                placeholder="Nhập lại mật khẩu mới"
                                className="pl-4 pr-12 py-3 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-[#3DDAB4] focus:ring-4 focus:ring-[#3DDAB4]/20 outline-none transition-all"
                                disabled={status === "submitting"}
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                              >
                                {showConfirmPassword ? (
                                  <EyeOff className="w-5 h-5" />
                                ) : (
                                  <Eye className="w-5 h-5" />
                                )}
                              </button>
                            </div>

                            {/* Match Indicator */}
                            {confirmPassword && (
                              <div className="flex items-center space-x-2">
                                {newPassword === confirmPassword ? (
                                  <>
                                    <Check className="w-4 h-4 text-green-500" />
                                    <p className="text-xs text-green-500">
                                      Mật khẩu khớp
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <AlertCircle className="w-4 h-4 text-red-500" />
                                    <p className="text-xs text-red-500">
                                      Mật khẩu không khớp
                                    </p>
                                  </>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Submit Button */}
                          <Button
                            type="submit"
                            disabled={status === "submitting"}
                            size="lg"
                            className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                          >
                            {status === "submitting" ? (
                              <div className="flex items-center space-x-2">
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Đang xử lý...</span>
                              </div>
                            ) : (
                              "Đặt lại mật khẩu"
                            )}
                          </Button>
                        </form>

                        {/* Password Requirements */}
                        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl text-left">
                          <p className="text-xs text-blue-700 font-semibold mb-2">
                            Yêu cầu mật khẩu:
                          </p>
                          <ul className="text-xs text-blue-600 space-y-1">
                            <li>• Tối thiểu 8 ký tự</li>
                            <li>
                              • Nên sử dụng chữ hoa, chữ thường, số và ký tự đặc
                              biệt
                            </li>
                          </ul>
                        </div>
                      </>
                    </motion.div>
                  )}

                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 mb-6 relative"
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-20 blur-xl animate-pulse" />
                        <CheckCircle className="w-12 h-12 text-green-600" />
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                          Thành công! 🎉
                        </h1>
                      </motion.div>
                      <p className="text-gray-600 text-lg mb-6">{message}</p>
                      <div className="bg-gradient-to-r from-[#3DDAB4]/10 to-[#7A77FF]/10 rounded-2xl p-4 mb-6">
                        <div className="flex items-center justify-center space-x-2 text-[#7A77FF]">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-medium">
                            Chuyển hướng trong {countdown} giây...
                          </span>
                        </div>
                      </div>
                      <Button
                        onClick={() => router.push("/login")}
                        size="lg"
                        className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-xl shadow-lg hover:shadow-xl transition-all px-8"
                      >
                        Đăng nhập ngay
                      </Button>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 mb-6 relative"
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-orange-500 opacity-20 blur-xl" />
                        <AlertCircle className="w-12 h-12 text-red-600" />
                      </motion.div>
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        Không thành công
                      </h1>
                      <p className="text-gray-600 text-lg mb-6">{message}</p>
                      <div className="space-y-3">
                        <Button
                          onClick={() => router.push("/login")}
                          size="lg"
                          className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                          Về trang đăng nhập
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {status === "no-token" && (
                    <motion.div
                      key="no-token"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 mb-6 relative"
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-orange-500 opacity-20 blur-xl" />
                        <ShieldX className="w-12 h-12 text-red-600" />
                      </motion.div>
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        Truy cập bị chặn
                      </h1>
                      <p className="text-gray-600 text-lg mb-6">{message}</p>
                      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
                        <p className="text-sm text-red-700">
                          Trang này chỉ có thể truy cập thông qua link khôi phục
                          mật khẩu trong email.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <Button
                          onClick={() => router.push("/login")}
                          size="lg"
                          className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                          Về trang đăng nhập
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Help text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          Cần hỗ trợ?{" "}
          <a
            href="/contact"
            className="text-[#7A77FF] hover:text-[#6b69e8] font-medium hover:underline transition-colors"
          >
            Liên hệ với chúng tôi
          </a>
        </motion.p>
      </div>
    </div>
  );
}
