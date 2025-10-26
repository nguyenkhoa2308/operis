"use client";

import {
  Clock,
  HelpCircle,
  FileText,
  Video,
  Users,
  ChevronRight,
  Building2,
  Headphones,
  BarChart3,
  RefreshCw,
  Zap,
  CreditCard,
  Target,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo } from "@/lib/contact-info";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CustomerSupportPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: contactInfo.phone.icon,
      title: contactInfo.phone.title,
      value: contactInfo.phone.value,
      description: contactInfo.phone.description,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      action: "Gọi ngay",
      href: contactInfo.phone.href,
    },
    {
      icon: contactInfo.email.icon,
      title: contactInfo.email.title,
      value: contactInfo.email.value,
      description: contactInfo.email.description,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      action: "Gửi email",
      href: contactInfo.email.href,
    },
  ];

  const faqs = [
    {
      question: "Làm thế nào để theo dõi tiến độ dự án của tôi?",
      answer:
        "Truy cập vào mục 'Dự án của tôi' trên sidebar, sau đó chọn dự án bạn muốn xem. Tại đây bạn sẽ thấy chi tiết về timeline, tiến độ hoàn thành, các milestone đã đạt được và có thể chat trực tiếp với team phát triển.",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      question:
        "Tôi có thể thay đổi yêu cầu dự án trong quá trình phát triển không?",
      answer:
        "Có, bạn hoàn toàn có thể thảo luận các thay đổi với Sales Manager hoặc Project Manager qua chat box trong dự án. Mọi thay đổi sẽ được đánh giá về tác động đến timeline và chi phí, sau đó cập nhật proposal mới nếu cần thiết.",
      icon: RefreshCw,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      question: "Thời gian phản hồi hỗ trợ của AutoFlow là bao lâu?",
      answer:
        "Hotline 24/7 của chúng tôi luôn sẵn sàng phản hồi ngay lập tức. Email support sẽ được trả lời trong vòng 24 giờ làm việc. Đối với các vấn đề khẩn cấp, vui lòng gọi hotline để được hỗ trợ nhanh nhất.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
    {
      question: "Các phương thức thanh toán được hỗ trợ?",
      answer:
        "Sau khi proposal được chấp nhận, bạn sẽ nhận email hướng dẫn thanh toán chi tiết. Chúng tôi hỗ trợ chuyển khoản ngân hàng, ví điện tử và các phương thức thanh toán phổ biến khác tại Việt Nam.",
      icon: CreditCard,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      question: "Tôi có thể yêu cầu demo sản phẩm trước khi thanh toán không?",
      answer:
        "Tất nhiên! Sau khi hoàn thành các giai đoạn phát triển, team sẽ tổ chức demo để bạn review và đóng góp ý kiến. Bạn chỉ thanh toán sau khi hài lòng với sản phẩm theo từng milestone đã thỏa thuận.",
      icon: Target,
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
    },
  ];

  const supportResources = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Tài liệu",
      description: "Hướng dẫn sử dụng chi tiết",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video",
      description: "Tutorials ngắn gọn, dễ hiểu",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cộng đồng",
      description: "Kết nối với user khác",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
          </div>

          <div className="text-center space-y-6 py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-500/30 mb-2">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Chúng tôi luôn sẵn sàng hỗ trợ bạn
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Đội ngũ chuyên gia của AutoFlow cam kết mang đến trải nghiệm hỗ
                trợ tốt nhất. Liên hệ với chúng tôi qua bất kỳ kênh nào dưới
                đây.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm z-50">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  />
                  <div
                    className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${method.color} pointer-events-none`}
                  />

                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        className={`flex-shrink-0 w-16 h-16 rounded-2xl ${method.bgColor} flex items-center justify-center ${method.iconColor}`}
                      >
                        <IconComponent className="w-7 h-7" />
                      </motion.div>

                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {method.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3">
                            {method.description}
                          </p>
                          <p className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            {method.value}
                          </p>
                        </div>

                        <motion.a
                          href={method.href}
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }}
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${method.color} text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-shadow duration-300 cursor-pointer`}
                        >
                          {method.action}
                          <ChevronRight className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="mb-12 border-0 shadow-xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

            <CardHeader className="relative">
              <div className="flex items-center gap-3">
                <Building2 className="w-7 h-7" />
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  Thông tin công ty
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="relative">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors"
                    >
                      <contactInfo.address.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-blue-100 mb-1">
                        {contactInfo.address.title}
                      </p>
                      <p className="text-white/90 leading-relaxed">
                        {contactInfo.address.value}
                      </p>
                      <p className="text-white/90 leading-relaxed">
                        {contactInfo.address.subValue}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors"
                    >
                      <Clock className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-blue-100 mb-1">
                        Giờ làm việc
                      </p>
                      <p className="text-white/90">
                        {contactInfo.phone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors"
                    >
                      <contactInfo.phone.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-blue-100 mb-1">
                        {contactInfo.phone.title}
                      </p>
                      <a
                        href={contactInfo.phone.href}
                        className="text-white/90 hover:text-white text-lg font-medium hover:underline transition-colors"
                      >
                        {contactInfo.phone.value}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors"
                    >
                      <contactInfo.email.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-blue-100 mb-1">
                        {contactInfo.email.title}
                      </p>
                      <a
                        href={contactInfo.email.href}
                        className="text-white/90 hover:text-white text-lg font-medium hover:underline transition-colors"
                      >
                        {contactInfo.email.value}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <Card className="mb-12 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                  Câu hỏi thường gặp
                </CardTitle>
                <p className="text-gray-500 text-sm mt-1">
                  Tìm câu trả lời nhanh chóng cho các thắc mắc phổ biến
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const IconComponent = faq.icon;
                const isOpen = openFaqIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="border-2 border-gray-100 rounded-2xl hover:border-blue-200 transition-all duration-300 bg-white overflow-hidden hover:shadow-lg">
                      <motion.button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full flex items-center gap-4 p-6 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/30 transition-all duration-300"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <motion.div
                          animate={{
                            scale: isOpen ? 1.1 : 1,
                            rotate: isOpen ? 360 : 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                          className={`flex-shrink-0 w-12 h-12 rounded-xl ${faq.bgColor} flex items-center justify-center bg-gradient-to-br ${faq.color}`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>

                        <div className="flex-1 text-left">
                          <h3
                            className={`font-bold text-lg transition-all duration-300 ${
                              isOpen
                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                                : "text-gray-900"
                            }`}
                          >
                            {faq.question}
                          </h3>
                        </div>

                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-colors duration-300 ${
                              isOpen ? "text-blue-600" : "text-gray-400"
                            }`}
                          />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                              transition: {
                                height: {
                                  duration: 0.4,
                                  ease: [0.04, 0.62, 0.23, 0.98],
                                },
                                opacity: {
                                  duration: 0.3,
                                  delay: 0.1,
                                },
                              },
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              transition: {
                                height: {
                                  duration: 0.3,
                                  ease: [0.04, 0.62, 0.23, 0.98],
                                },
                                opacity: {
                                  duration: 0.2,
                                },
                              },
                            }}
                            className="overflow-hidden"
                          >
                            <motion.div
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                              className="px-6 pb-6 pt-2"
                            >
                              <div className="pl-16 pr-4">
                                <div className="border-l-4 border-blue-400 pl-4 py-2">
                                  <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Support Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Tài nguyên hỗ trợ
              </CardTitle>
              <p className="text-gray-500 mt-2">
                Khám phá thêm các nguồn học liệu hữu ích
              </p>
            </CardHeader>

            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {supportResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.2 + index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="group relative overflow-hidden rounded-2xl border-2 border-gray-100 p-6 hover:border-transparent hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 },
                      }}
                      className={`w-14 h-14 rounded-2xl ${resource.bgColor} flex items-center justify-center mb-4`}
                    >
                      {resource.icon}
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>

                    <div className="flex items-center text-blue-600 font-semibold">
                      <span className="text-sm">Sắp ra mắt</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
