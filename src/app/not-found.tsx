"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowLeft,
  Sparkles,
  Construction,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { contactInfo } from "@/lib/contact-info";

export default function NotFound() {
  const IconMail = contactInfo.email.icon;
  const IconPhone = contactInfo.phone.icon;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[#3DDAB4]/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-[#7A77FF]/10 to-transparent rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Card */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div className="relative bg-gradient-to-r from-[#3DDAB4] via-[#7A77FF] to-[#3DDAB4] bg-[length:200%_100%] p-8 md:p-12 text-white overflow-hidden">
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-[#3DDAB4] via-[#7A77FF] to-[#3DDAB4] bg-[length:200%_100%]"
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2,
                      }}
                      className="flex justify-center mb-6"
                    >
                      <div className="relative">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
                          <Construction className="w-12 h-12 text-white" />
                        </div>
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                        >
                          <Sparkles className="w-4 h-4 text-yellow-900" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl md:text-5xl font-bold text-center mb-4"
                    >
                      Tính năng đang được phát triển
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-center text-white/90 text-lg max-w-2xl mx-auto"
                    >
                      Chúng tôi đang nỗ lực hoàn thiện tính năng này để mang đến
                      trải nghiệm tuyệt vời nhất cho bạn
                    </motion.p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 md:p-12">
                  {/* Launch Date Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Card className="border-2 border-[#7A77FF]/20 shadow-lg bg-gradient-to-br from-white to-indigo-50/50 mb-8">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7A77FF] to-[#3DDAB4] flex items-center justify-center">
                              <Calendar className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                              <h2 className="text-xl font-semibold text-gray-800">
                                Dự kiến ra mắt
                              </h2>
                              <Badge
                                variant="outline"
                                className="border-green-500 text-green-700 bg-green-50"
                              >
                                <Rocket className="w-3 h-3 mr-1" />
                                Sắp ra mắt
                              </Badge>
                            </div>
                            {/* <p className="text-3xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                              17 tháng 10, 2025
                            </p> */}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Contact Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-8"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Có thắc mắc hoặc cần hỗ trợ?
                      </h3>
                      <p className="text-gray-600">
                        Liên hệ với chúng tôi, đội ngũ sẵn sàng hỗ trợ bạn 24/7
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Email Card */}
                      <motion.a
                        href={contactInfo.email.href}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card className="border-2 border-[#3DDAB4]/30 hover:border-[#3DDAB4] hover:shadow-lg transition-all h-full">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#3DDAB4] to-[#2bc9a0] flex items-center justify-center">
                                <IconMail className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm text-gray-500 mb-1">
                                  {contactInfo.email.title}
                                </div>
                                <div className="font-bold text-gray-800 mb-1 truncate">
                                  {contactInfo.email.value}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {contactInfo.email.description}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.a>

                      {/* Phone Card */}
                      <motion.a
                        href={contactInfo.phone.href}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card className="border-2 border-[#7A77FF]/30 hover:border-[#7A77FF] hover:shadow-lg transition-all h-full">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#7A77FF] to-[#6b67ff] flex items-center justify-center">
                                <IconPhone className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm text-gray-500 mb-1">
                                  {contactInfo.phone.title}
                                </div>
                                <div className="font-bold text-gray-800 mb-1 truncate">
                                  {contactInfo.phone.value}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {contactInfo.phone.description}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Back to Home Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex justify-center"
                  >
                    <Link href="/">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:opacity-90 text-white font-bold shadow-lg hover:shadow-xl transition-all group"
                      >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Về trang chủ
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-6 text-gray-600"
          >
            <p className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#7A77FF]" />
              Cảm ơn bạn đã quan tâm đến dịch vụ của chúng tôi
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
