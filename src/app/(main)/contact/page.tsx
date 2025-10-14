import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Liên Hệ - AutoFlow | Tư Vấn Giải Pháp Tự Động Hóa",
  description:
    "Liên hệ với AutoFlow để được tư vấn miễn phí về giải pháp tự động hóa quy trình làm việc. Phản hồi trong vòng 1-2 giờ làm việc.",
  keywords: ["liên hệ", "tư vấn", "automation", "contact", "support"],
  openGraph: {
    title: "Liên Hệ - AutoFlow",
    description: "Liên hệ để được tư vấn giải pháp tự động hóa",
    type: "website",
  },
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "hungle@hagency.vn",
      subContent: "Gửi email bất cứ lúc nào",
      link: "mailto:hungle@hagency.vn",
      color: "from-[#3DDAB4] to-[#2bc9a0]",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Điện thoại",
      content: "+84 779 886 666",
      subContent: "Thứ 2 - Thứ 6, 9:00 - 17:30",
      link: "tel:+84779886666",
      color: "from-[#7A77FF] to-[#6b67ff]",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Văn phòng",
      content: "CT1A, Chung cư VOV Mễ Trì",
      subContent: "Quận Nam Từ Liêm, Hà Nội",
      link: "https://maps.google.com",
      color: "from-pink-400 to-rose-500",
    },
  ];

  const workingHours = [
    { day: "Thứ Hai - Chủ Nhật", hours: "24/7", available: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3DDAB4]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#7A77FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <section className="pt-8 pb-12 px-4">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb
              items={[{ label: "Trang chủ", href: "/" }, { label: "Liên hệ" }]}
            />

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#3DDAB4] via-[#7A77FF] to-[#3DDAB4] bg-clip-text text-transparent leading-tight">
                Liên Hệ Với Chúng Tôi
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sẵn sàng lắng nghe và tư vấn giải pháp tự động hóa phù hợp nhất
                cho bạn
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-3xl font-bold mb-6">Thông tin liên hệ</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-md hover:shadow-lg transition-all"
                    >
                      <CardContent className="p-5">
                        <a
                          href={info.link}
                          target={
                            info.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-start gap-4"
                        >
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} text-white flex items-center justify-center`}
                          >
                            {info.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-gray-500 mb-1">
                              {info.title}
                            </div>
                            <div className="font-bold mb-1 truncate">
                              {info.content}
                            </div>
                            <div className="text-sm text-gray-500">
                              {info.subContent}
                            </div>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Working Hours */}
                <Card className="border-0 shadow-md bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] text-white flex items-center justify-center">
                        <Clock className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">Giờ làm việc</h3>
                    </div>
                    <div className="space-y-3">
                      {workingHours.map((schedule, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between py-3 px-4 rounded-xl ${
                            schedule.available ? "bg-green-50" : "bg-gray-50"
                          }`}
                        >
                          <span className="text-gray-700 font-medium">
                            {schedule.day}
                          </span>
                          <span
                            className={`font-bold ${
                              schedule.available
                                ? "text-green-600"
                                : "text-gray-500"
                            }`}
                          >
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="border-0 shadow-xl sticky top-8">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-3">
                        Gửi tin nhắn cho chúng tôi
                      </h2>
                      <p className="text-gray-600 text-lg">
                        Điền thông tin và chúng tôi sẽ phản hồi trong vòng 1-2
                        giờ làm việc
                      </p>
                    </div>

                    <ContactForm />

                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl mt-6">
                      <Sparkles className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-900">
                        <strong>Lưu ý:</strong> Thông tin của bạn được bảo mật
                        tuyệt đối. Chúng tôi chỉ sử dụng để liên hệ và tư vấn.
                      </p>
                    </div>

                    <div className="mt-6">
                      <Link href={"/request"}>
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full border-2 border-[#7A77FF] text-[#7A77FF] hover:bg-[#7A77FF] hover:text-white transition-all font-bold"
                        >
                          Hoặc gửi yêu cầu chi tiết
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Response Promise */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white overflow-hidden relative">
              <CardContent className="p-12 relative z-10">
                <div className="text-center mb-10">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                  <h2 className="text-4xl font-bold mb-4">
                    Cam Kết Phản Hồi Nhanh
                  </h2>
                  <p className="text-xl opacity-90 max-w-2xl mx-auto">
                    Chúng tôi hiểu thời gian của bạn rất quý giá
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-3">{"< 1h"}</div>
                    <p className="opacity-90">
                      Phản hồi email/tin nhắn trong giờ làm việc
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-3">{"< 24h"}</div>
                    <p className="opacity-90">
                      Đánh giá yêu cầu và báo giá sơ bộ
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-3">100%</div>
                    <p className="opacity-90">Đảm bảo phản hồi mọi tin nhắn</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
