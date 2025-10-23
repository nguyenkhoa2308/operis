"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import {
  Bot,
  Mail,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowLeft,
  ShieldX,
  Sparkles,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { verifyEmail, resendVerificationEmail } from "@/lib/api";
import { ApiError } from "@/types";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<
    | "verifying"
    | "success"
    | "error"
    | "expired"
    | "no-token"
    | "already-verified"
  >("verifying");
  const [message, setMessage] = useState("");
  const [resending, setResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState(3);

  // Cooldown timer for resend button
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(
        () => setResendCooldown(resendCooldown - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  // Countdown for redirect
  useEffect(() => {
    if (
      (status === "success" || status === "already-verified") &&
      countdown > 0
    ) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (
      (status === "success" || status === "already-verified") &&
      countdown === 0
    ) {
      router.push("/login");
    }
  }, [status, countdown, router]);

  useEffect(() => {
    // Block access if no token provided
    if (!token || token.trim() === "") {
      setStatus("no-token");
      setMessage(
        "Truy cập không hợp lệ. Vui lòng sử dụng link xác thực từ email."
      );
      return;
    }

    // Verify email with token
    const verify = async () => {
      try {
        // await verifyEmail(token);
        setStatus("success");
        setMessage("Email đã được xác thực thành công!");
      } catch (error) {
        const apiError = error as ApiError;
        const errorMessage = apiError?.response?.data?.message || "";

        // Check if already verified
        if (
          apiError?.response?.status === 400 ||
          errorMessage.includes("already verified") ||
          errorMessage.includes("đã được xác thực") ||
          errorMessage.includes("đã xác thực")
        ) {
          setStatus("already-verified");
          setMessage("Tài khoản đã được xác thực trước đó.");
        }
        // Check if token is expired
        else if (
          apiError?.response?.status === 410 ||
          errorMessage.includes("expired") ||
          errorMessage.includes("hết hạn")
        ) {
          setStatus("expired");
          setMessage(
            "Link xác thực đã hết hạn. Vui lòng nhập email để gửi lại."
          );
        } else {
          setStatus("error");
          setMessage(
            errorMessage ||
              "Xác thực email thất bại. Token không hợp lệ hoặc đã được sử dụng."
          );
        }
      }
    };

    verify();
  }, [token, router]);

  const handleResendVerification = async () => {
    // Validate email
    if (!email || email.trim() === "") {
      toast.error("Vui lòng nhập email của bạn", {
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email không hợp lệ", {
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

    // Check cooldown
    if (resendCooldown > 0) {
      toast.error(`Vui lòng đợi ${resendCooldown} giây trước khi gửi lại`, {
        position: "top-right",
        duration: 3000,
        style: {
          background: "#f97316",
          color: "#fff",
          padding: "16px",
          borderRadius: "12px",
        },
        icon: null,
      });
      return;
    }

    setResending(true);
    setResendSuccess(false);

    try {
      // await resendVerificationEmail(email);
      setResendSuccess(true);
      setMessage(
        "Email xác thực mới đã được gửi. Vui lòng kiểm tra hộp thư của bạn."
      );

      // Set cooldown to 60 seconds to prevent spam
      setResendCooldown(60);
    } catch (error) {
      const apiError = error as ApiError;
      const errorMsg = apiError?.response?.data?.message || "";

      // Check if already verified
      if (
        apiError?.response?.status === 400 ||
        errorMsg.includes("already verified") ||
        errorMsg.includes("đã được xác thực") ||
        errorMsg.includes("đã xác thực")
      ) {
        setStatus("already-verified");
        setMessage("Tài khoản đã được xác thực trước đó.");
      } else {
        toast.error(errorMsg || "Gửi lại email thất bại. Vui lòng thử lại.", {
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
    } finally {
      setResending(false);
    }
  };

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
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
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

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-lg px-4">
        {/* Back to home button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#7A77FF] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Trang chủ</span>
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
                    <Bot className="w-11 h-11 text-white" />
                  </div>
                  {status === "success" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Status Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={status}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {status === "verifying" && (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#3DDAB4]/20 to-[#7A77FF]/20 mb-6 relative"
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] opacity-20 blur-xl" />
                        <Loader2 className="w-12 h-12 text-[#7A77FF] animate-spin" />
                      </motion.div>
                      <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent mb-3">
                        Đang xác thực email
                      </h1>
                      <p className="text-gray-600 text-lg">
                        Vui lòng đợi trong giây lát...
                      </p>
                      <div className="mt-6 flex items-center justify-center space-x-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-[#7A77FF] rounded-full"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {status === "success" && (
                    <>
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
                          Xác thực thành công! 🎉
                        </h1>
                      </motion.div>
                      <p className="text-gray-600 text-lg mb-6">{message}</p>
                      <div className="bg-gradient-to-r from-[#3DDAB4]/10 to-[#7A77FF]/10 rounded-2xl p-4 mb-6">
                        <div className="flex items-center justify-center space-x-2 text-[#7A77FF]">
                          <Clock className="w-5 h-5" />
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
                    </>
                  )}

                  {status === "error" && (
                    <>
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
                        Xác thực thất bại
                      </h1>
                      <p className="text-gray-600 text-lg mb-6">{message}</p>
                      <div className="space-y-3">
                        <Button
                          onClick={() => router.push("/register")}
                          size="lg"
                          className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                          Quay lại đăng ký
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => router.push("/login")}
                          size="lg"
                          className="w-full border-2 border-[#7A77FF] text-[#7A77FF] hover:bg-[#7A77FF] hover:text-white rounded-xl"
                        >
                          Đăng nhập
                        </Button>
                      </div>
                    </>
                  )}

                  {status === "expired" && (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/20 to-yellow-500/20 mb-6 relative"
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 opacity-20 blur-xl" />
                        <Mail className="w-12 h-12 text-orange-600" />
                      </motion.div>
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        Link đã hết hạn
                      </h1>
                      <p className="text-gray-600 text-lg mb-6">{message}</p>

                      {resendSuccess ? (
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mb-6 relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16" />
                          <div className="relative flex items-start space-x-3">
                            <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                            <div className="text-left flex-1">
                              <p className="text-green-800 font-semibold mb-1">
                                Email đã được gửi thành công!
                              </p>
                              <p className="text-green-700 text-sm">
                                Vui lòng kiểm tra hộp thư của bạn và click vào
                                link xác thực.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="space-y-5">
                          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                            <div className="space-y-3">
                              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                                <Mail className="w-4 h-4 text-[#7A77FF]" />
                                <span>Nhập email để gửi lại mã xác thực</span>
                              </label>
                              <div className="relative">
                                <input
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                      handleResendVerification();
                                    }
                                  }}
                                  placeholder="email@example.com"
                                  className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-[#3DDAB4] focus:ring-4 focus:ring-[#3DDAB4]/20 outline-none transition-all text-base"
                                />
                              </div>
                            </div>
                          </div>

                          <Button
                            onClick={handleResendVerification}
                            disabled={resending || resendCooldown > 0}
                            size="lg"
                            className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-xl disabled:opacity-50 shadow-lg hover:shadow-xl transition-all"
                          >
                            {resending ? (
                              <div className="flex items-center space-x-2">
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Đang gửi...</span>
                              </div>
                            ) : resendCooldown > 0 ? (
                              <div className="flex items-center space-x-2">
                                <Clock className="w-5 h-5" />
                                <span>Gửi lại sau {resendCooldown}s</span>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2">
                                <Sparkles className="w-5 h-5" />
                                <span>Gửi lại email xác thực</span>
                              </div>
                            )}
                          </Button>

                          {resendCooldown > 0 && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-blue-50 border border-blue-200 rounded-xl p-3"
                            >
                              <p className="text-xs text-blue-700 text-center flex items-center justify-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span>
                                  Để tránh spam, vui lòng đợi {resendCooldown}{" "}
                                  giây
                                </span>
                              </p>
                            </motion.div>
                          )}
                        </div>
                      )}

                      <Button
                        variant="outline"
                        onClick={() => router.push("/login")}
                        size="lg"
                        className="mt-6 w-full border-2 border-[#7A77FF] text-[#7A77FF] hover:bg-[#7A77FF] hover:text-white rounded-xl"
                      >
                        Đăng nhập
                      </Button>
                    </>
                  )}

                  {status === "no-token" && (
                    <>
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
                          Trang này chỉ có thể truy cập thông qua link xác thực
                          trong email.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <Button
                          onClick={() => router.push("/register")}
                          size="lg"
                          className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                          Đăng ký tài khoản
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => router.push("/login")}
                          size="lg"
                          className="w-full border-2 border-[#7A77FF] text-[#7A77FF] hover:bg-[#7A77FF] hover:text-white rounded-xl"
                        >
                          Đăng nhập
                        </Button>
                      </div>
                    </>
                  )}

                  {status === "already-verified" && (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-6 relative"
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-xl animate-pulse" />
                        <CheckCircle className="w-12 h-12 text-blue-600" />
                      </motion.div>
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        Đã xác thực rồi ✅
                      </h1>
                      <p className="text-gray-600 text-lg mb-6">{message}</p>
                      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
                        <p className="text-sm text-blue-700">
                          Tài khoản của bạn đã được kích hoạt. Bạn có thể đăng
                          nhập ngay bây giờ.
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-[#3DDAB4]/10 to-[#7A77FF]/10 rounded-2xl p-4 mb-6">
                        <div className="flex items-center justify-center space-x-2 text-[#7A77FF]">
                          <Clock className="w-5 h-5" />
                          <span className="font-medium">
                            Chuyển hướng trong {countdown} giây...
                          </span>
                        </div>
                      </div>
                      <Button
                        onClick={() => router.push("/login")}
                        size="lg"
                        className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                      >
                        Đăng nhập ngay
                      </Button>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
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
