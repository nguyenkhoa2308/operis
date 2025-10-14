import React from "react";
import { Metadata } from "next";
import {
  Users,
  Linkedin,
  Mail,
  Award,
  Sparkles,
  Target,
  Heart,
  Zap,
  Trophy,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";
import TeamCarousel from "@/app/(main)/team/components/TeamCarousel";

export const metadata: Metadata = {
  title: "Đội Ngũ - AutoFlow | Chuyên Gia Tự Động Hóa",
  description:
    "Gặp gỡ đội ngũ chuyên gia tự động hóa giàu kinh nghiệm của AutoFlow. Chúng tôi cam kết mang đến giải pháp automation tốt nhất cho doanh nghiệp.",
  keywords: [
    "đội ngũ",
    "chuyên gia automation",
    "team AutoFlow",
    "leadership",
    "developers",
  ],
  openGraph: {
    title: "Đội Ngũ - AutoFlow",
    description: "Gặp gỡ đội ngũ chuyên gia của chúng tôi",
    type: "website",
  },
};

export default function TeamPage() {
  const leadership = [
    {
      name: "Nguyễn Văn A",
      role: "CEO & Founder",
      bio: "10+ năm kinh nghiệm trong lĩnh vực tự động hóa và chuyển đổi số. Từng làm việc tại các tập đoàn công nghệ hàng đầu.",
      image: "/images/team/ceo.jpg",
      linkedin: "#",
      email: "ceo@autoflow.vn",
      achievements: ["Forbes 30 Under 30", "MBA Harvard", "Ex-Google"],
    },
    {
      name: "Trần Thị B",
      role: "CTO",
      bio: "Chuyên gia về AI và Machine Learning với hơn 8 năm kinh nghiệm. Đam mê xây dựng hệ thống automation thông minh.",
      image: "/images/team/cto.jpg",
      linkedin: "#",
      email: "cto@autoflow.vn",
      achievements: ["PhD AI", "Ex-Microsoft", "15+ Patents"],
    },
    {
      name: "Lê Văn C",
      role: "COO",
      bio: "Quản lý vận hành với 12 năm kinh nghiệm tối ưu hóa quy trình doanh nghiệp. Chuyên gia Process Optimization.",
      image: "/images/team/coo.jpg",
      linkedin: "#",
      email: "coo@autoflow.vn",
      achievements: ["Six Sigma Black Belt", "PMP Certified", "Ex-McKinsey"],
    },
  ];

  const team = [
    {
      name: "Phạm Văn D",
      role: "Lead Automation Engineer",
      expertise: "RPA, Python, APIs",
      projects: "50+ projects",
      image: "/images/team/lead1.jpg",
    },
    {
      name: "Hoàng Thị E",
      role: "Senior Developer",
      expertise: "Full-stack, Cloud, DevOps",
      projects: "40+ projects",
      image: "/images/team/dev1.jpg",
    },
    {
      name: "Đỗ Văn F",
      role: "AI/ML Engineer",
      expertise: "AI, ML, Data Science",
      projects: "30+ projects",
      image: "/images/team/ai1.jpg",
    },
    {
      name: "Vũ Thị G",
      role: "Solution Architect",
      expertise: "System Design, Integration",
      projects: "45+ projects",
      image: "/images/team/architect1.jpg",
    },
    {
      name: "Bùi Văn H",
      role: "QA Engineer",
      expertise: "Testing, Quality Assurance",
      projects: "60+ projects",
      image: "/images/team/qa1.jpg",
    },
    {
      name: "Đinh Thị I",
      role: "Business Analyst",
      expertise: "Process Analysis, Requirements",
      projects: "55+ projects",
      image: "/images/team/ba1.jpg",
    },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tập trung khách hàng",
      description: "Thành công của bạn là mục tiêu của chúng tôi",
      color: "from-[#3DDAB4] to-[#2BC49F]",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Sáng tạo & Đổi mới",
      description: "Luôn tìm kiếm giải pháp tốt nhất và hiện đại nhất",
      color: "from-[#7A77FF] to-[#6B68E6]",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Tận tâm",
      description: "Chúng tôi quan tâm đến từng chi tiết nhỏ nhất",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hiệu quả",
      description: "Tối ưu hóa mọi quy trình, tiết kiệm thời gian",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const stats = [
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "150+",
      label: "Dự án hoàn thành",
      color: "text-[#3DDAB4]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "20+",
      label: "Thành viên chuyên nghiệp",
      color: "text-[#7A77FF]",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "98%",
      label: "Khách hàng hài lòng",
      color: "text-green-500",
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "15+",
      label: "Năm kinh nghiệm",
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-8 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3DDAB4]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#7A77FF]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Breadcrumb
            items={[{ label: "Trang chủ", href: "/" }, { label: "Đội ngũ" }]}
          />

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3DDAB4]/10 to-[#7A77FF]/10 rounded-full mb-6">
              <Users className="w-5 h-5 text-[#3DDAB4]" />
              <span className="text-[#3DDAB4] font-semibold">Our Team</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gặp Gỡ Đội Ngũ Của Chúng Tôi
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Đội ngũ chuyên gia giàu kinh nghiệm, đam mê công nghệ và tận tâm
              với sứ mệnh giúp doanh nghiệp của bạn phát triển thông qua tự động
              hóa
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-[#3DDAB4] hover:shadow-lg transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 mb-4 ${stat.color}`}
                  >
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ban Lãnh Đạo</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Những người dẫn dắt tầm nhìn và chiến lược phát triển của AutoFlow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-[#3DDAB4] hover:shadow-xl transition-all group"
              >
                <CardContent className="p-8">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-[#3DDAB4]/20 to-[#7A77FF]/20">
                    <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-[#3DDAB4]">
                      {leader.name.charAt(0)}
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                    <p className="text-[#7A77FF] font-semibold mb-3">
                      {leader.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>

                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {leader.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-[#3DDAB4]/10 to-[#7A77FF]/10 text-xs font-medium text-gray-700 rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center pt-4 border-t border-gray-100">
                    <a
                      href={leader.linkedin}
                      className="p-2 rounded-lg bg-gray-50 hover:bg-[#3DDAB4] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="p-2 rounded-lg bg-gray-50 hover:bg-[#7A77FF] hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section - Carousel */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Đội Ngũ Chuyên Gia</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Những người thực hiện và biến ý tưởng thành hiện thực
            </p>
          </div>

          <TeamCarousel team={team} />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Giá Trị Cốt Lõi</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Những nguyên tắc dẫn dắt cách chúng tôi làm việc mỗi ngày
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all group"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-[#3DDAB4] bg-gradient-to-br from-[#3DDAB4]/5 to-[#7A77FF]/5">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Muốn Gia Nhập Đội Ngũ?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Chúng tôi luôn tìm kiếm những tài năng đam mê công nghệ và muốn
                tạo ra tác động thực sự
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Xem Vị Trí Tuyển Dụng
                </a>
                <a
                  href="mailto:careers@autoflow.vn"
                  className="px-8 py-3 border-2 border-[#3DDAB4] text-[#3DDAB4] rounded-xl font-semibold hover:bg-[#3DDAB4] hover:text-white transition-all"
                >
                  Gửi CV
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
