import React from "react";
import { Metadata } from "next";
import {
  Bot,
  Workflow,
  Database,
  Cloud,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Code,
  Globe,
  RefreshCw,
  BarChart3,
  Clock,
  TrendingUp,
  Shield,
  Target,
  Users,
  Layers,
  MessageSquare,
  DollarSign,
  Briefcase,
  FileText,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dịch Vụ Tự Động Hóa - AutoFlow | RPA & AI Automation",
  description:
    "Khám phá các dịch vụ tự động hóa chuyên nghiệp của AutoFlow: RPA, API Integration, AI Automation. Hệ thống tự động thực hiện công việc thay bạn.",
  keywords: [
    "dịch vụ automation",
    "RPA",
    "API integration",
    "AI automation",
    "workflow automation",
    "process automation",
  ],
  openGraph: {
    title: "Dịch Vụ Tự Động Hóa - AutoFlow",
    description: "Hệ thống tự động thực hiện công việc cho doanh nghiệp",
    type: "website",
  },
};

export default function AutomationServicesPage() {
  const heroFeatures = [
    { icon: <Zap className="w-5 h-5" />, text: "Tiết kiệm 70-90% thời gian" },
    { icon: <Shield className="w-5 h-5" />, text: "Giảm 95% lỗi sai" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Tăng năng suất x3-5" },
    { icon: <Clock className="w-5 h-5" />, text: "Hoạt động 24/7" },
  ];

  const mainServices = [
    {
      icon: <Bot className="w-10 h-10" />,
      title: "RPA (Robotic Process Automation)",
      description:
        "Robot tự động hóa các tác vụ lặp đi lặp lại, giải phóng nhân lực cho công việc có giá trị cao",
      features: [
        "Tự động nhập liệu từ Excel, PDF, Email",
        "Xử lý hóa đơn, chứng từ tự động",
        "Robot làm việc 24/7 không nghỉ",
        "Giảm 90% thời gian xử lý thủ công",
        "Tích hợp với mọi ứng dụng desktop",
      ],
      useCases: [
        "Xử lý hóa đơn tự động",
        "Nhập liệu từ email vào CRM",
        "Tạo báo cáo định kỳ",
        "Sao chép dữ liệu giữa hệ thống",
      ],
      timeline: "2-3 tuần",
      color: "from-[#3DDAB4] to-[#2BC49F]",
      borderColor: "border-[#3DDAB4]",
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      title: "Workflow Automation",
      description:
        "Kết nối và tự động hóa quy trình làm việc giữa các phòng ban, hệ thống và ứng dụng",
      features: [
        "Tự động phê duyệt, chuyển tiếp công việc",
        "Notification & Alert thông minh",
        "Quản lý task và deadline tự động",
        "Dashboard theo dõi real-time",
        "Tích hợp Slack, Teams, Email",
      ],
      useCases: [
        "Quy trình phê duyệt đơn từ",
        "Onboarding nhân viên mới",
        "Xử lý đơn hàng tự động",
        "Workflow marketing campaign",
      ],
      timeline: "1-2 tuần",
      color: "from-[#7A77FF] to-[#6B68E6]",
      borderColor: "border-[#7A77FF]",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "API Integration & Data Sync",
      description:
        "Kết nối các hệ thống và đồng bộ dữ liệu tự động giữa nhiều nền tảng khác nhau",
      features: [
        "Tích hợp CRM, ERP, Accounting software",
        "Đồng bộ data real-time hoặc scheduled",
        "Custom API development",
        "Data transformation & mapping",
        "Error handling và retry logic",
      ],
      useCases: [
        "Đồng bộ Shopee/Lazada → ERP",
        "CRM ↔ Email Marketing",
        "Accounting ↔ Banking",
        "Inventory sync đa kênh",
      ],
      timeline: "3-4 tuần",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "AI-Powered Automation",
      description:
        "Sử dụng AI và Machine Learning để tự động hóa các tác vụ phức tạp cần suy nghĩ",
      features: [
        "Document understanding (OCR + AI)",
        "Chatbot & Virtual Assistant",
        "Predictive analytics",
        "Smart decision automation",
        "Natural Language Processing",
      ],
      useCases: [
        "Chatbot hỗ trợ khách hàng",
        "Phân loại email/ticket tự động",
        "Trích xuất data từ document",
        "Dự báo nhu cầu inventory",
      ],
      timeline: "4-6 tuần",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500",
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Automation & DevOps",
      description:
        "Tự động hóa infrastructure, deployment và monitoring trên cloud platform",
      features: [
        "CI/CD pipeline automation",
        "Infrastructure as Code (IaC)",
        "Auto-scaling & optimization",
        "Monitoring & alerting setup",
        "Backup & disaster recovery",
      ],
      useCases: [
        "Auto deploy khi push code",
        "Tự động scale server theo traffic",
        "Backup database định kỳ",
        "Alert khi có issue",
      ],
      timeline: "3-5 tuần",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500",
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: "Email & Communication Automation",
      description:
        "Tự động hóa email marketing, notification và communication workflows",
      features: [
        "Email marketing automation",
        "Drip campaigns tự động",
        "Personalized messaging",
        "A/B testing tự động",
        "Analytics & reporting",
      ],
      useCases: [
        "Welcome email series",
        "Abandoned cart recovery",
        "Lead nurturing campaign",
        "Event reminder automation",
      ],
      timeline: "1-2 tuần",
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500",
    },
  ];

  const industries = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      name: "E-commerce",
      description: "Tự động xử lý đơn hàng, inventory, customer service",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      name: "Tài chính - Ngân hàng",
      description: "Automation quy trình phê duyệt, reconciliation, reporting",
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "HR & Recruitment",
      description: "Tự động screening CV, onboarding, payroll processing",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      name: "Marketing",
      description: "Campaign automation, lead scoring, analytics",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      name: "Kế toán",
      description: "Tự động hóa invoice, expense, báo cáo tài chính",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Logistics",
      description: "Track & trace, warehouse automation, route optimization",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Tiết kiệm 70-90% thời gian",
      description:
        "Công việc từng mất hàng giờ giờ chỉ còn vài phút hoặc tự động hoàn toàn",
      stat: "90%",
      color: "text-[#3DDAB4]",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Tăng năng suất x3-5 lần",
      description:
        "Nhân viên tập trung vào công việc có giá trị thay vì làm việc thủ công",
      stat: "5x",
      color: "text-[#7A77FF]",
    },
    {
      icon: <CheckCircle2 className="w-12 h-12" />,
      title: "Giảm 95% lỗi sai",
      description:
        "Hệ thống tự động loại bỏ sai sót do con người, đảm bảo độ chính xác cao",
      stat: "95%",
      color: "text-green-500",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "ROI trong 3-6 tháng",
      description: "Hoàn vốn nhanh chóng với chi phí vận hành giảm 60-80%",
      stat: "6 tháng",
      color: "text-blue-500",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description:
        "Phân tích quy trình hiện tại, xác định pain points và cơ hội automation. Workshop với team để hiểu rõ workflow.",
      icon: <Target className="w-6 h-6" />,
      deliverables: ["Process map", "Pain points analysis", "ROI estimation"],
    },
    {
      number: "02",
      title: "Solution Design",
      description:
        "Thiết kế kiến trúc automation, chọn công nghệ phù hợp và lập timeline chi tiết.",
      icon: <Layers className="w-6 h-6" />,
      deliverables: ["Architecture design", "Tech stack", "Timeline & budget"],
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "Phát triển automation scripts/bots, test kỹ lưỡng trên sandbox environment.",
      icon: <Code className="w-6 h-6" />,
      deliverables: ["Working automation", "Test cases", "Documentation"],
    },
    {
      number: "04",
      title: "Deployment & Training",
      description:
        "Deploy lên production, đào tạo team sử dụng và quản lý hệ thống automation.",
      icon: <Zap className="w-6 h-6" />,
      deliverables: [
        "Production deployment",
        "Training materials",
        "User guides",
      ],
    },
    {
      number: "05",
      title: "Support & Optimize",
      description:
        "Hypercare support 2-4 tuần, monitoring và continuous improvement dựa trên feedback.",
      icon: <RefreshCw className="w-6 h-6" />,
      deliverables: [
        "24/7 support",
        "Performance reports",
        "Optimization recommendations",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-8 pb-20 px-4 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#3DDAB4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7A77FF]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mt-12 mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#3DDAB4]/15 to-[#7A77FF]/15 rounded-full mb-6 border border-[#3DDAB4]/20">
              <Bot className="w-5 h-5 text-[#3DDAB4]" />
              <span className="text-[#3DDAB4] font-semibold">
                Automation Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Dịch Vụ Tự Động Hóa
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Hệ thống tự động{" "}
              <span className="text-[#3DDAB4] font-semibold">
                thực hiện công việc thay bạn
              </span>{" "}
              - Từ RPA đơn giản đến AI-powered automation phức tạp
            </p>

            {/* Hero Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {heroFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-100"
                >
                  <div className="text-[#3DDAB4]">{feature.icon}</div>
                  <span className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/request">
                <button className="px-8 py-4 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Tư vấn miễn phí
                </button>
              </Link>
              <Link href="#services">
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold text-lg hover:border-[#3DDAB4] hover:text-[#3DDAB4] transition-all">
                  Xem dịch vụ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lợi Ích Khi Tự Động Hóa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kết quả thực tế mà khách hàng của chúng tôi đạt được
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-[#3DDAB4] hover:shadow-xl transition-all"
              >
                <CardContent className="p-8 text-center">
                  <div className={`mb-6 flex justify-center ${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <div className={`text-5xl font-bold mb-3 ${benefit.color}`}>
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section
        id="services"
        className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Dịch Vụ Automation Chính
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Giải pháp tự động hóa toàn diện cho mọi quy trình doanh nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className={`border-2 ${service.borderColor} hover:shadow-2xl transition-all group flex flex-col`}
              >
                <CardContent className="p-8 flex flex-col flex-1">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6 flex-1">
                    <h4 className="font-semibold text-sm text-gray-500 mb-3 uppercase">
                      Tính năng
                    </h4>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#3DDAB4] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg">
                    <h4 className="font-semibold text-sm text-gray-500 mb-3 uppercase">
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-full border border-gray-200"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 flex items-center justify-between mt-auto">
                    {/* <div>
                      <p className="text-sm text-gray-500 mb-1">Từ</p>
                      <p className="text-2xl font-bold text-[#3DDAB4]">
                        {service.pricing}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        ⏱️ {service.timeline}
                      </p>
                    </div> */}
                    <Link href="/contact" className="cursor-pointer">
                      <button
                        className={`px-5 py-3 rounded-lg bg-gradient-to-r ${service.color} text-white hover:shadow-lg transition-all flex items-center gap-2 font-semibold cursor-pointer hover:scale-105 transition-all duration-300`}
                      >
                        Liên hệ
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ngành Nghề Áp Dụng
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automation phù hợp với mọi lĩnh vực và quy mô doanh nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:border-[#7A77FF] hover:shadow-lg transition-all group"
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#3DDAB4]/10 to-[#7A77FF]/10 flex items-center justify-center text-[#3DDAB4] group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{industry.name}</h3>
                    <p className="text-sm text-gray-600">
                      {industry.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quy Trình Làm Việc
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Phương pháp 5 bước chuyên nghiệp, minh bạch và hiệu quả
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-[#3DDAB4] hover:shadow-xl transition-all"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] text-white text-3xl font-bold flex items-center justify-center mb-4">
                        {step.number}
                      </div>
                      <div className="flex justify-center text-[#3DDAB4]">
                        {step.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm font-semibold text-gray-500 mr-2">
                          Deliverables:
                        </span>
                        {step.deliverables.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-[#3DDAB4]/10 text-[#3DDAB4] text-sm font-medium rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-[#3DDAB4] bg-gradient-to-br from-[#3DDAB4]/10 via-emerald-500/5 to-[#7A77FF]/10 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] text-white mb-6">
                <Bot className="w-10 h-10" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sẵn Sàng Tự Động Hóa?
              </h2>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Đặt lịch tư vấn miễn phí để khám phá cách automation có thể giúp
                doanh nghiệp của bạn tiết kiệm thời gian và chi phí
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/request">
                  <button className="px-10 py-4 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Tư Vấn Miễn Phí Ngay</span>
                  </button>
                </Link>
                <Link href="/faq">
                  <button className="px-10 py-4 border-2 border-[#3DDAB4] text-[#3DDAB4] rounded-xl font-semibold hover:bg-[#3DDAB4] hover:text-white transition-all flex items-center justify-center gap-2">
                    <span>Tìm Hiểu Thêm</span>
                  </button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-8 justify-center text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#3DDAB4]" />
                  <span>Tư vấn 100% miễn phí</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#3DDAB4]" />
                  <span>Báo giá minh bạch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#3DDAB4]" />
                  <span>Không ràng buộc dài hạn</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="hidden py-20 px-4 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Bot className="w-20 h-20 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sẵn Sàng Tự Động Hóa?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Đặt lịch tư vấn miễn phí để khám phá cách automation có thể giúp
            doanh nghiệp của bạn tiết kiệm thời gian và chi phí
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request">
              <button className="px-8 py-4 bg-white text-[#3DDAB4] rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2 mx-auto sm:mx-0">
                <MessageSquare className="w-5 h-5" />
                Tư Vấn Miễn Phí Ngay
              </button>
            </Link>
            <Link href="/faq">
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#7A77FF] transition-all">
                Tìm Hiểu Thêm
              </button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Tư vấn 100% miễn phí</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Báo giá minh bạch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Không ràng buộc dài hạn</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
