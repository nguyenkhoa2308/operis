import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Target,
  Users,
  TrendingUp,
  Award,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Sparkles,
  BarChart3,
  Lightbulb,
  HeartHandshake,
  Rocket,
  LineChart,
  Database,
  Globe,
  Boxes,
  ArrowRight,
  Star,
  ThumbsUp,
  Bot,
  FolderKanban,
  Workflow,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "Về Chúng Tôi - ToGoGo | Giải Pháp Tự Động Hóa & Quản Trị Doanh Nghiệp",
  description:
    "Tìm hiểu về ToGoGo - Đội ngũ chuyên gia tự động hóa và quản trị giúp doanh nghiệp Việt Nam tiết kiệm 70-90% thời gian, tăng năng suất 3-5 lần với công nghệ hiện đại và hệ thống quản lý thông minh.",
  keywords: [
    "tự động hóa",
    "automation",
    "RPA",
    "workflow automation",
    "task management",
    "project management",
    "team collaboration",
    "kanban",
    "digital transformation",
    "chuyển đổi số",
    "quản trị công việc",
  ],
  openGraph: {
    title: "Về Chúng Tôi - ToGoGo",
    description:
      "Giải pháp tự động hóa và quản trị thông minh cho doanh nghiệp Việt Nam",
    type: "website",
  },
};

export default function AboutPage() {
  const highlights = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Automation thông minh",
      description: "RPA & AI tự động hóa quy trình",
      color: "from-[#3DDAB4] to-[#2bc9a0]",
    },
    {
      icon: <FolderKanban className="w-8 h-8" />,
      title: "Quản trị hiệu quả",
      description: "Task, Project & Team Management",
      color: "from-[#7A77FF] to-[#6b67ff]",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Tối ưu toàn diện",
      description: "Giảm chi phí, tăng năng suất",
      color: "from-[#3DDAB4] to-[#7A77FF]",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "An toàn & Bảo mật",
      description: "Enterprise-grade security",
      color: "from-[#7A77FF] to-[#3DDAB4]",
    },
  ];

  const problems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Lãng phí thời gian",
      description:
        "Công việc thủ công lặp lại và quản lý task thiếu tổ chức chiếm mất hàng giờ mỗi ngày",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Chi phí vận hành cao",
      description:
        "Chi phí nhân sự tăng khi phải làm thủ công và thiếu công cụ quản trị hiện đại",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Sai sót & mất phối hợp",
      description:
        "Làm thủ công dễ sai, team thiếu đồng bộ dẫn đến lỗi và giao tiếp kém",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Khó scale & theo dõi",
      description:
        "Không theo kịp tốc độ tăng trưởng và thiếu visibility vào tiến độ công việc",
    },
  ];

  const solutions = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tự động hóa thông minh",
      description:
        "Chuyển đổi quy trình thủ công thành hệ thống tự động hoàn toàn, giảm 80% thời gian xử lý",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quản trị công việc",
      description:
        "Hệ thống quản lý task, project và team collaboration giúp tăng 40% năng suất làm việc nhóm",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "An toàn & Tin cậy",
      description:
        "Đảm bảo bảo mật dữ liệu tuyệt đối và vận hành ổn định 24/7 với độ chính xác cao",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Tối ưu chi phí",
      description:
        "Giảm 60% chi phí vận hành và tăng năng suất làm việc lên 3-5 lần",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Tư vấn chuyên sâu",
      description:
        "Đội ngũ chuyên gia tư vấn và thiết kế giải pháp phù hợp với từng doanh nghiệp",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description:
        "Dashboard theo dõi KPI real-time và báo cáo hiệu suất giúp ra quyết định nhanh chóng",
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Phân tích & Tư vấn",
      description:
        "Nghiên cứu sâu quy trình hiện tại, xác định điểm nghẽn và cơ hội tối ưu",
    },
    {
      step: "02",
      title: "Thiết kế Giải pháp",
      description:
        "Xây dựng kiến trúc hệ thống phù hợp với yêu cầu và quy mô doanh nghiệp",
    },
    {
      step: "03",
      title: "Triển khai & Kiểm thử",
      description:
        "Phát triển và test kỹ lưỡng trước khi đưa vào vận hành thực tế",
    },
    {
      step: "04",
      title: "Đào tạo & Hỗ trợ",
      description:
        "Hướng dẫn sử dụng chi tiết và hỗ trợ liên tục sau triển khai",
    },
  ];

  const values = [
    {
      icon: <Zap className="w-10 h-10 text-[#3DDAB4]" />,
      title: "Sáng tạo & Đổi mới",
      description:
        "Luôn tìm kiếm công nghệ và phương pháp mới nhất để giải quyết vấn đề",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-[#3DDAB4]" />,
      title: "Khách hàng là trung tâm",
      description:
        "Mọi quyết định hướng đến việc mang lại giá trị tốt nhất cho khách hàng",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#3DDAB4]" />,
      title: "Hiệu quả & Đo lường",
      description: "Tập trung vào kết quả thực tế, minh bạch và đo lường được",
    },
    {
      icon: <Shield className="w-10 h-10 text-[#3DDAB4]" />,
      title: "Tin cậy & Bảo mật",
      description:
        "Cam kết an toàn dữ liệu và tính ổn định của hệ thống ở mức cao nhất",
    },
  ];

  const commitments = [
    {
      icon: <CheckCircle className="w-6 h-6 text-[#3DDAB4]" />,
      text: "Tư vấn miễn phí và báo giá chi tiết trước khi thực hiện",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#3DDAB4]" />,
      text: "Bàn giao đầy đủ tài liệu và đào tạo sử dụng",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#3DDAB4]" />,
      text: "Hỗ trợ kỹ thuật liên tục sau triển khai",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#3DDAB4]" />,
      text: "Bảo mật thông tin và dữ liệu tuyệt đối",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Giải pháp tùy biến",
      description:
        "Không copy-paste. Mỗi giải pháp được thiết kế riêng cho quy trình và nhu cầu cụ thể của bạn.",
      color: "from-[#3DDAB4] to-[#2bc9a0]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dễ hiểu, dễ sử dụng",
      description:
        "Giao diện đơn giản, trực quan. Nhân viên của bạn có thể làm quen nhanh chóng mà không cần kiến thức kỹ thuật.",
      color: "from-[#7A77FF] to-[#6b67ff]",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Hỗ trợ tận tâm",
      description:
        "Luôn sẵn sàng lắng nghe và giải đáp thắc mắc. Không bỏ rơi bạn sau khi bàn giao dự án.",
      color: "from-[#3DDAB4] to-[#7A77FF]",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Kết quả đo lường được",
      description:
        "Báo cáo rõ ràng về thời gian tiết kiệm, lỗi giảm, và ROI từng giai đoạn.",
      color: "from-[#7A77FF] to-[#3DDAB4]",
    },
  ];

  const technologies = [
    {
      icon: <Bot className="w-6 h-6" />,
      name: "RPA & Automation",
      description: "Python, Zapier, Make, custom bots",
    },
    {
      icon: <FolderKanban className="w-6 h-6" />,
      name: "Project Management",
      description: "Kanban, Gantt, Sprint planning tools",
    },
    {
      icon: <Database className="w-6 h-6" />,
      name: "Database & APIs",
      description: "MySQL, PostgreSQL, REST APIs",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Web Technologies",
      description: "React, Next.js, Node.js frameworks",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      name: "Analytics & BI",
      description: "Real-time dashboards, KPI tracking",
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Collaboration Tools",
      description: "Chat, video call, file sharing",
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      name: "Cloud & Infrastructure",
      description: "AWS, Google Cloud, scalable systems",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      name: "Security & Compliance",
      description: "Encryption, authentication, GDPR",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-[#3DDAB4]" />,
      title: "Tiết kiệm 70-90% thời gian",
      description:
        "Công việc từng mất hàng giờ giờ chỉ còn vài phút hoặc tự động hoàn toàn",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#7A77FF]" />,
      title: "Tăng năng suất x3-5 lần",
      description:
        "Nhân viên tập trung vào công việc có giá trị thay vì nhập liệu, sao chép dữ liệu",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#3DDAB4]" />,
      title: "Giảm 95% lỗi sai",
      description:
        "Hệ thống tự động loại bỏ sai sót do con người, đảm bảo dữ liệu chính xác",
    },
    {
      icon: <LineChart className="w-8 h-8 text-[#7A77FF]" />,
      title: "Dễ dàng mở rộng",
      description:
        "Xử lý khối lượng công việc tăng lên mà không cần tuyển thêm nhân sự",
    },
  ];

  const caseStudy = {
    industry: "E-commerce & Logistics",
    problem:
      "Công ty phải xử lý hàng trăm đơn hàng mỗi ngày từ nhiều kênh (Website, Facebook, Shopee), nhập thủ công vào hệ thống, mất 3-4 giờ/ngày. Team vận hành 15 người làm việc thiếu đồng bộ, task rải rác trong email và Excel, khó theo dõi tiến độ giao hàng, thường trễ deadline và mất phối hợp.",
    solution:
      "Chúng tôi triển khai giải pháp kép: (1) Automation - Tự động đồng bộ đơn hàng từ tất cả kênh về một nơi, phân loại, tạo phiếu giao hàng và cập nhật kho. (2) Management - Hệ thống Kanban quản lý task vận hành, chat team real-time, dashboard theo dõi KPI giao hàng, và notification tự động khi có vấn đề.",
    results: [
      { label: "Tiết kiệm thời gian", value: "85%" },
      { label: "Giảm lỗi sai", value: "98%" },
      { label: "Tăng on-time delivery", value: "40%" },
      { label: "ROI trong", value: "2 tháng" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3DDAB4]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#7A77FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#3DDAB4]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section with Breadcrumb */}
        <section className="pt-8 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb
              items={[
                { label: "Trang chủ", href: "/" },
                { label: "Giới thiệu" },
              ]}
            />

            <div className="text-center max-w-4xl mx-auto mb-20">
              <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-[#3DDAB4] via-[#7A77FF] to-[#3DDAB4] bg-clip-text text-transparent leading-tight font-bold">
                Về Chúng Tôi
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Chúng tôi là đội ngũ đam mê công nghệ, mong muốn giúp doanh
                nghiệp Việt Nam làm việc hiệu quả hơn thông qua tự động hóa quy
                trình và quản trị công việc thông minh
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-white to-gray-50 h-full"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-4`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tại sao chúng tôi làm điều này?
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed text-left">
                <p>
                  Chúng tôi bắt đầu với niềm tin rằng:{" "}
                  <span className="text-[#3DDAB4] font-semibold">
                    công nghệ nên phục vụ con người, chứ không phải ngược lại
                  </span>
                  . Mỗi doanh nghiệp đều có những quy trình riêng, những thách
                  thức riêng, và xứng đáng có được giải pháp phù hợp.
                </p>
                <p>
                  Trong quá trình làm việc với các doanh nghiệp, chúng tôi nhận
                  thấy hai vấn đề lớn: Một là{" "}
                  <span className="text-[#3DDAB4] font-semibold">
                    công việc thủ công lặp đi lặp lại
                  </span>{" "}
                  - nhập liệu, sao chép dữ liệu, tạo báo cáo... lãng phí hàng
                  giờ mỗi ngày. Hai là{" "}
                  <span className="text-[#7A77FF] font-semibold">
                    quản lý team không hiệu quả
                  </span>{" "}
                  - task rải rác, giao tiếp kém, thiếu theo dõi tiến độ, dẫn đến
                  deadline trễ và mất phối hợp.
                </p>
                <p>
                  Đó là lý do chúng tôi phát triển{" "}
                  <span className="text-[#3DDAB4] font-semibold">
                    giải pháp Automation
                  </span>{" "}
                  để loại bỏ công việc thủ công, và{" "}
                  <span className="text-[#7A77FF] font-semibold">
                    hệ thống Management
                  </span>{" "}
                  để team làm việc đồng bộ hơn. Chúng tôi không hứa hẹn điều gì
                  quá lớn lao, nhưng cam kết sẽ lắng nghe, đồng hành và làm việc
                  chăm chỉ để giúp bạn tiết kiệm thời gian và tăng hiệu quả.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Hai hướng đi{" "}
                <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                  chính
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chúng tôi cung cấp giải pháp toàn diện giúp doanh nghiệp vừa tự
                động hóa quy trình, vừa quản trị team hiệu quả
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Automation Service */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all h-full bg-gradient-to-br from-[#3DDAB4]/5 to-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3DDAB4] to-[#22c55e] flex items-center justify-center mb-6">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Automation - Tự động hóa
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Giải phóng nhân sự khỏi công việc thủ công lặp đi lặp lại,
                    tăng năng suất và giảm chi phí vận hành
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#3DDAB4]/10 flex items-center justify-center flex-shrink-0">
                        <Workflow className="w-5 h-5 text-[#3DDAB4]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Workflow Automation
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Tự động hóa quy trình nghiệp vụ từ đầu đến cuối
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#3DDAB4]/10 flex items-center justify-center flex-shrink-0">
                        <Database className="w-5 h-5 text-[#3DDAB4]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Data Integration</h4>
                        <p className="text-gray-600 text-sm">
                          Đồng bộ và xử lý dữ liệu từ nhiều nguồn tự động
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#3DDAB4]/10 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-[#3DDAB4]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">AI Automation</h4>
                        <p className="text-gray-600 text-sm">
                          Ứng dụng AI cho phân tích, dự đoán và ra quyết định
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="/services/automation">
                    <Button className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#22c55e] hover:opacity-90 text-white font-semibold">
                      Tìm hiểu Automation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Management Service */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all h-full bg-gradient-to-br from-[#7A77FF]/5 to-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7A77FF] to-[#6b67ff] flex items-center justify-center mb-6">
                    <FolderKanban className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Management - Quản trị
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Quản lý công việc, dự án và team một cách khoa học, tăng
                    hiệu quả cộng tác và đạt mục tiêu nhanh hơn
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#7A77FF]/10 flex items-center justify-center flex-shrink-0">
                        <FolderKanban className="w-5 h-5 text-[#7A77FF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Task & Project Management
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Kanban, Gantt, Sprint planning cho mọi loại dự án
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#7A77FF]/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-[#7A77FF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Team Collaboration
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Chat, video call, file sharing trong một nền tảng
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#7A77FF]/10 flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-5 h-5 text-[#7A77FF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Analytics & Reporting
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Dashboard theo dõi KPI và hiệu suất team real-time
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="/services/management">
                    <Button className="w-full bg-gradient-to-r from-[#7A77FF] to-[#6b67ff] hover:opacity-90 text-white font-semibold">
                      Tìm hiểu Management
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Combined Impact */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-[#3DDAB4]/10 via-white to-[#7A77FF]/10">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Rocket className="w-10 h-10 text-[#7A77FF] mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-3">
                    Tác động khi kết hợp cả hai
                  </h4>
                  <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    Automation loại bỏ công việc thủ công, Management tối ưu
                    cộng tác team - cùng nhau tạo nên doanh nghiệp vận hành
                    thông minh
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent mb-2">
                      70-90%
                    </div>
                    <p className="text-gray-600 font-medium">
                      Tiết kiệm thời gian
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent mb-2">
                      3-5x
                    </div>
                    <p className="text-gray-600 font-medium">Năng suất tăng</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent mb-2">
                      95%+
                    </div>
                    <p className="text-gray-600 font-medium">Giảm lỗi sai</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent mb-2">
                      60%
                    </div>
                    <p className="text-gray-600 font-medium">
                      Cắt giảm chi phí
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Problems & Solutions */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Problems */}
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  Thách thức doanh nghiệp gặp phải
                </h2>
                <div className="space-y-4">
                  {problems.map((problem, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-md hover:shadow-lg transition-all"
                    >
                      <CardContent className="p-5 flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                          {problem.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">
                            {problem.title}
                          </h3>
                          <p className="text-gray-600">{problem.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  Giải pháp của chúng tôi
                </h2>
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-md hover:shadow-lg transition-all bg-gradient-to-br from-white to-[#3DDAB4]/5"
                    >
                      <CardContent className="p-5 flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] flex items-center justify-center text-white">
                          {solution.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">
                            {solution.title}
                          </h3>
                          <p className="text-gray-600">
                            {solution.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Phương pháp làm việc
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quy trình 4 bước chuyên nghiệp, đảm bảo hiệu quả và minh bạch
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all h-full bg-gradient-to-br from-white via-white to-gray-50 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#3DDAB4]/10 to-[#7A77FF]/10 rounded-bl-full" />
                  <CardContent className="p-6 relative z-10">
                    <div className="text-6xl font-bold bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent opacity-20 mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-[#3DDAB4]/10 via-white to-white hover:shadow-2xl transition-all h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3DDAB4] to-[#2bc9a0] flex items-center justify-center mr-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Sứ Mệnh</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Mang công nghệ tự động hóa và quản trị thông minh đến gần
                    hơn với các doanh nghiệp Việt Nam. Giúp họ giải phóng khỏi
                    công việc thủ công lặp lại, quản lý team hiệu quả hơn, và có
                    thêm thời gian tập trung vào những việc thực sự tạo giá trị.
                    Chúng tôi muốn làm cho công nghệ hiện đại trở nên dễ tiếp
                    cận và phù hợp với mọi quy mô doanh nghiệp.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-[#7A77FF]/10 via-white to-white hover:shadow-2xl transition-all h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7A77FF] to-[#6b67ff] flex items-center justify-center mr-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Tầm Nhìn</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Trở thành đối tác tin cậy hàng đầu trong lĩnh vực tự động
                    hóa và quản trị doanh nghiệp tại Việt Nam. Được khách hàng
                    đánh giá cao về sự tận tâm, chất lượng dịch vụ và khả năng
                    thấu hiểu nhu cầu thực tế. Chúng tôi mong muốn đồng hành lâu
                    dài với các doanh nghiệp trong hành trình chuyển đổi số và
                    tối ưu vận hành, từng bước một, từng giải pháp một.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Core Values */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-12">
                Giá Trị Cốt Lõi
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all h-full bg-gradient-to-br from-white via-white to-gray-50 group"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 p-3 bg-gradient-to-br from-[#3DDAB4]/10 to-[#7A77FF]/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tại sao chọn chúng tôi?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Những điểm khác biệt làm nên giá trị của dịch vụ
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {whyChooseUs.map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all h-full bg-gradient-to-br from-white to-gray-50"
                >
                  <CardContent className="p-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-6`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lợi ích bạn nhận được
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kết quả cụ thể sau khi triển khai giải pháp tự động hóa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all h-full"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#3DDAB4]/5 to-[#7A77FF]/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white rounded-full mb-4">
                <Star className="w-4 h-4 inline mr-2" />
                Case Study
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Câu chuyện thành công
              </h2>
              <p className="text-xl text-gray-600">
                Một ví dụ thực tế về cách chúng tôi giúp khách hàng
              </p>
            </div>

            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#3DDAB4]/10 to-[#7A77FF]/10 p-8">
                  <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold mb-4">
                    {caseStudy.industry}
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Thách thức</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <ArrowRight className="w-6 h-6 text-[#3DDAB4]" />
                    Giải pháp
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-8">
                    {caseStudy.solution}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent mb-2">
                          {result.value}
                        </div>
                        <p className="text-gray-600 font-semibold">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#3DDAB4]/5 to-[#7A77FF]/5 p-6 flex items-center justify-center gap-2 text-[#3DDAB4] font-semibold">
                  <ThumbsUp className="w-5 h-5" />
                  <span className="text-lg">
                    Khách hàng rất hài lòng và tiếp tục mở rộng hợp tác
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Công nghệ chúng tôi sử dụng
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Áp dụng các công nghệ hiện đại và phù hợp nhất cho từng dự án
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-all h-full bg-gradient-to-br from-white to-gray-50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3DDAB4]/20 to-[#7A77FF]/20 flex items-center justify-center text-[#3DDAB4]">
                        {tech.icon}
                      </div>
                      <h3 className="text-lg font-bold">{tech.name}</h3>
                    </div>
                    <p className="text-gray-600">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-gray-50 to-white inline-block">
                <CardContent className="p-6">
                  <p className="text-gray-600 text-lg">
                    <Sparkles className="w-5 h-5 inline text-[#3DDAB4] mr-2" />
                    Luôn cập nhật và học hỏi công nghệ mới để mang lại giải pháp
                    tốt nhất
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cam kết với khách hàng
              </h2>
              <p className="text-xl text-gray-600">
                Những điều chúng tôi đảm bảo trong mọi dự án
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0">{commitment.icon}</div>
                  <p className="text-gray-700 text-lg">{commitment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
              <CardContent className="p-12 md:p-16 text-center relative z-10">
                <Rocket className="w-16 h-16 mx-auto mb-6 text-white" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Cùng bắt đầu nhé?
                </h2>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                  Chia sẻ với chúng tôi về công việc thủ công đang làm mỗi ngày
                  hoặc thách thức quản lý team hiện tại. Chúng tôi sẽ tư vấn
                  giải pháp Automation và Management phù hợp nhất cho bạn
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={"/request"}>
                    <Button
                      size="lg"
                      className="bg-white text-[#3DDAB4] hover:bg-gray-50 px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all border-2 border-transparent"
                    >
                      Gửi yêu cầu ngay
                    </Button>
                  </Link>
                  <Link href={"/contact"}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-[#7A77FF] font-bold px-8 py-6 text-lg"
                    >
                      Liên hệ tư vấn
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Tư vấn miễn phí</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Báo giá minh bạch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Không ràng buộc</span>
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
