import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Settings,
  Users,
  BarChart3,
  Calendar,
  CheckCircle2,
  ArrowRight,
  FileText,
  MessageSquare,
  Code,
  Layers,
  Sparkles,
  Target,
  DollarSign,
  ClipboardList,
  TrendingUp,
  Bell,
  Shield,
  GitBranch,
  Clock,
  ChevronDown,
  Layout,
  FolderKanban,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dịch Vụ Quản Trị - AutoFlow | Hệ Thống Quản Lý Công Việc",
  description:
    "Giải pháp quản trị công việc toàn diện: Task Management, Project Management, Team Collaboration. Quản lý hiệu quả mọi dự án và nhân sự.",
  keywords: [
    "quản trị công việc",
    "task management",
    "project management",
    "team collaboration",
    "workflow management",
    "productivity tools",
  ],
  openGraph: {
    title: "Dịch Vụ Quản Trị - AutoFlow",
    description: "Hệ thống quản lý công việc chuyên nghiệp cho doanh nghiệp",
    type: "website",
  },
};

export default function ManagementServicesPage() {
  const heroFeatures = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      text: "Quản lý Task Thông Minh",
    },
    {
      icon: <FolderKanban className="w-5 h-5" />,
      text: "Kanban & Gantt Chart",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      text: "Analytics Real-time",
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Collaboration Hub",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Tăng Năng Suất",
      stat: "40%",
      description: "Cải thiện hiệu quả làm việc nhờ quản lý task thông minh",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Tiết Kiệm Thời Gian",
      stat: "30%",
      description: "Giảm thời gian quản lý nhờ tự động hóa quy trình",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Minh Bạch",
      stat: "100%",
      description: "Theo dõi tiến độ dự án real-time, mọi lúc mọi nơi",
      color: "from-[#7A77FF] to-[#6B68E6]",
      bgColor: "bg-purple-50",
      textColor: "text-[#7A77FF]",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Cộng Tác Hiệu Quả",
      stat: "50%",
      description: "Nâng cao khả năng làm việc nhóm và giao tiếp",
      color: "from-[#3DDAB4] to-[#2BC49F]",
      bgColor: "bg-teal-50",
      textColor: "text-[#3DDAB4]",
    },
  ];

  const mainServices = [
    {
      icon: <ClipboardList className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Task Management System",
      description:
        "Hệ thống quản lý công việc toàn diện với khả năng phân công tự động, theo dõi tiến độ real-time và nhắc nhở thông minh",
      features: [
        "Tạo và phân công task tự động theo workflow",
        "Ưu tiên công việc thông minh dựa trên deadline và độ quan trọng",
        "Dashboard theo dõi tiến độ real-time với nhiều view",
        "Thông báo và nhắc nhở tự động qua nhiều kênh",
        "Template task cho công việc lặp lại",
      ],
      useCases: [
        "Quản lý Sprint",
        "Daily Standup",
        "Bug Tracking",
        "Customer Support",
      ],
      timeline: "1-2 tuần",
      color: "from-[#3DDAB4] to-[#2BC49F]",
      bgColor: "bg-[#3DDAB4]/5",
      borderColor: "border-[#3DDAB4]",
      textColor: "text-[#3DDAB4]",
    },
    {
      icon: <FolderKanban className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Project Management Platform",
      description:
        "Nền tảng quản lý dự án với Kanban board, Gantt chart, timeline view và khả năng quản lý tài nguyên, ngân sách toàn diện",
      features: [
        "Kanban board tùy chỉnh với drag-and-drop",
        "Gantt chart timeline cho lập kế hoạch dự án",
        "Quản lý milestone và dependencies",
        "Theo dõi ngân sách và tài nguyên",
        "Báo cáo tiến độ tự động theo chu kỳ",
      ],
      useCases: [
        "Software Development",
        "Marketing Campaign",
        "Event Planning",
        "Construction",
      ],
      timeline: "2-3 tuần",
      color: "from-[#7A77FF] to-[#6B68E6]",
      bgColor: "bg-[#7A77FF]/5",
      borderColor: "border-[#7A77FF]",
      textColor: "text-[#7A77FF]",
    },
    {
      icon: <BarChart3 className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Performance Analytics",
      description:
        "Hệ thống phân tích hiệu suất làm việc với KPI tracking tự động, dashboard real-time và AI insights giúp tối ưu năng suất",
      features: [
        "Dashboard KPI tùy chỉnh theo vai trò",
        "Phân tích năng suất cá nhân và team",
        "Báo cáo tự động hàng tuần/tháng/quý",
        "AI insights và đề xuất cải thiện",
        "Benchmark với industry standards",
      ],
      useCases: [
        "Sales Performance",
        "Dev Team Velocity",
        "Support Metrics",
        "OKR Tracking",
      ],
      timeline: "2-3 tuần",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/5",
      borderColor: "border-blue-500",
      textColor: "text-blue-600",
    },
    {
      icon: <Bell className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Smart Notification System",
      description:
        "Hệ thống thông báo thông minh đa kênh với AI-powered prioritization, cảnh báo deadline và phát hiện bottleneck tự động",
      features: [
        "Thông báo đa kênh (Email, Slack, Teams, SMS)",
        "AI phân loại và ưu tiên thông báo",
        "Cảnh báo deadline và overdue tự động",
        "Phát hiện quá tải công việc và suggest re-assign",
        "Tùy chỉnh quy tắc thông báo chi tiết",
      ],
      useCases: [
        "Deadline Reminder",
        "Status Update",
        "Approval Request",
        "SLA Monitoring",
      ],
      timeline: "1 tuần",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/5",
      borderColor: "border-purple-500",
      textColor: "text-purple-600",
    },
    {
      icon: <Calendar className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Resource Planning & Scheduling",
      description:
        "Công cụ lập kế hoạch và phân bổ nguồn lực tối ưu với capacity planning, conflict detection và load balancing tự động",
      features: [
        "Resource calendar với availability tracking",
        "Capacity planning và load balancing",
        "Conflict detection và resolution suggestions",
        "Time tracking và timesheet tự động",
        "Forecast và scenario planning",
      ],
      useCases: [
        "Team Scheduling",
        "Resource Allocation",
        "Leave Management",
        "Meeting Scheduling",
      ],
      timeline: "2 tuần",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/5",
      borderColor: "border-green-500",
      textColor: "text-green-600",
    },
    {
      icon: <MessageSquare className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Team Collaboration Hub",
      description:
        "Trung tâm cộng tác nhóm tích hợp chat, file sharing, video conference, knowledge base và wiki cho giao tiếp hiệu quả",
      features: [
        "Team chat với channels và threads",
        "File sharing với version control",
        "Video/Audio conference tích hợp",
        "Knowledge base và wiki với search",
        "Integration với 50+ tools phổ biến",
      ],
      useCases: [
        "Remote Work",
        "Team Communication",
        "Document Collaboration",
        "Knowledge Sharing",
      ],
      timeline: "3-4 tuần",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/5",
      borderColor: "border-orange-500",
      textColor: "text-orange-600",
    },
  ];

  const industries = [
    {
      icon: <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Software & IT",
      description: "Quản lý Sprint, Bug tracking, Code review, CI/CD pipeline",
      examples: "Jira-like, Asana, Linear",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Sales & Marketing",
      description: "Campaign management, Lead tracking, Performance analytics",
      examples: "Sales pipeline, Marketing automation",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "HR & Operations",
      description: "Onboarding, Leave management, Performance review, Training",
      examples: "Employee management, Recruitment",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Tài chính & Kế toán",
      description: "Budget tracking, Approval workflow, Audit trail, Reporting",
      examples: "Invoice approval, Expense management",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Layout className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Tư vấn & Dịch vụ",
      description: "Client project, Timesheet, Billing, Resource allocation",
      examples: "Consulting projects, Agency work",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Sản xuất & Logistics",
      description: "Production planning, Inventory tracking, Quality control",
      examples: "Manufacturing operations, Supply chain",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description:
        "Phân tích quy trình làm việc hiện tại, xác định pain points và yêu cầu",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      deliverables: [
        "Process mapping document",
        "Requirements specification",
        "Gap analysis report",
      ],
      duration: "1 tuần",
    },
    {
      number: "02",
      title: "System Design",
      description:
        "Thiết kế kiến trúc hệ thống, workflow và data model phù hợp với tổ chức",
      icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
      deliverables: [
        "System architecture diagram",
        "Workflow design",
        "UI/UX mockups",
      ],
      duration: "1-2 tuần",
    },
    {
      number: "03",
      title: "Development & Setup",
      description:
        "Triển khai hệ thống, tùy chỉnh theo nhu cầu và migrate dữ liệu",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      deliverables: ["Configured system", "Migrated data", "Integration setup"],
      duration: "2-4 tuần",
    },
    {
      number: "04",
      title: "Training & Onboarding",
      description: "Đào tạo end-users và admin, hướng dẫn best practices",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      deliverables: ["Training materials", "User guide", "Admin documentation"],
      duration: "1 tuần",
    },
    {
      number: "05",
      title: "Go-live & Optimization",
      description: "Triển khai chính thức, theo dõi và tối ưu hóa liên tục",
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      deliverables: [
        "Production deployment",
        "Monitoring dashboard",
        "Optimization report",
      ],
      duration: "Ongoing",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-8 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7A77FF]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#3DDAB4]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Breadcrumb
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Dịch vụ", href: "/services" },
              { label: "Quản trị" },
            ]}
          />

          <div className="text-center mt-12 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7A77FF]/10 to-[#3DDAB4]/10 rounded-full mb-6">
              <Settings className="w-5 h-5 text-[#7A77FF]" />
              <span className="text-[#7A77FF] font-semibold">
                Management Solutions
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#7A77FF] to-[#3DDAB4] bg-clip-text text-transparent">
              Dịch Vụ Quản Trị
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Hệ thống quản lý công việc chuyên nghiệp - Quản lý dự án, task,
              nhân sự và tài nguyên hiệu quả với công nghệ hiện đại
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {heroFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 hover:border-[#7A77FF] transition-all"
                >
                  <div className="text-[#7A77FF]">{feature.icon}</div>
                  <span className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#7A77FF] to-[#3DDAB4] text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Tư Vấn Miễn Phí</span>
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-[#7A77FF] text-[#7A77FF] rounded-xl font-semibold hover:bg-[#7A77FF] hover:text-white transition-all flex items-center gap-2"
              >
                <span>Xem Dịch Vụ</span>
                <ChevronDown className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Lợi Ích Vượt Trội Cho Doanh Nghiệp
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Số liệu thực tế từ khách hàng đã triển khai
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-[#7A77FF] hover:shadow-xl transition-all group"
              >
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${benefit.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {benefit.icon}
                  </div>
                  <div
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ${benefit.textColor}`}
                  >
                    {benefit.stat}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section
        id="services"
        className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7A77FF]/10 to-[#3DDAB4]/10 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-[#7A77FF]" />
              <span className="text-[#7A77FF] font-semibold">
                Core Services
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Dịch Vụ Quản Trị Chính
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Giải pháp quản lý toàn diện cho mọi quy mô doanh nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className={`border-2 ${service.borderColor} hover:shadow-2xl transition-all group flex flex-col`}
              >
                <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <h4 className="font-semibold mb-3 text-gray-900">
                      Tính năng chính:
                    </h4>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2
                            className={`w-5 h-5 ${service.textColor} flex-shrink-0 mt-0.5`}
                          />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">
                      Use Cases:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 ${service.bgColor} ${service.textColor} text-xs font-medium rounded-full`}
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="pt-6 border-t border-gray-100 mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      {/* <div>
                        <p className="text-2xl font-bold text-gray-900">
                          {service.pricing}
                        </p>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Clock className="w-4 h-4" />
                          {service.timeline}
                        </p>
                      </div> */}
                      <Link href="/contact" className="cursor-pointer">
                        <button
                          className={`px-6 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white hover:shadow-lg transition-all flex items-center gap-2 font-semibold cursor-pointer hover:scale-105 transition-all duration-300`}
                        >
                          <span>Chi tiết</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ngành Nghề Áp Dụng
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Giải pháp quản trị phù hợp cho mọi lĩnh vực
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-[#7A77FF] hover:shadow-xl transition-all group"
              >
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${industry.color} text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {industry.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    {industry.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Ví dụ:</span>{" "}
                      {industry.examples}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7A77FF]/10 to-[#3DDAB4]/10 rounded-full mb-4">
              <GitBranch className="w-5 h-5 text-[#7A77FF]" />
              <span className="text-[#7A77FF] font-semibold">
                Implementation Process
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Quy Trình Triển Khai 5 Bước
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Phương pháp chuyên nghiệp đảm bảo thành công cho dự án của bạn
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#7A77FF] via-[#3DDAB4] to-[#7A77FF] transform z-0" />
            <div className="block lg:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#7A77FF] via-[#3DDAB4] to-[#7A77FF] transform z-0" />

            <div className="grid lg:grid-cols-5 gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-[#7A77FF] hover:shadow-2xl transition-all bg-white group"
                >
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#7A77FF] to-[#3DDAB4] text-white text-lg sm:text-xl md:text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
                        {step.number}
                      </div>
                      <div className="mb-4 flex justify-center text-[#7A77FF]">
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="font-bold text-base sm:text-lg mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 text-center">
                      {step.description}
                    </p>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs font-semibold text-gray-900 mb-2">
                        Deliverables:
                      </p>
                      <ul className="space-y-1">
                        {step.deliverables.map((item, i) => (
                          <li
                            key={i}
                            className="text-xs text-gray-600 flex items-start gap-1"
                          >
                            <span className="text-[#3DDAB4] mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex items-center gap-1 text-xs text-[#7A77FF] font-medium">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-[#7A77FF] bg-gradient-to-br from-[#7A77FF]/10 via-purple-500/5 to-[#3DDAB4]/10 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7A77FF] to-[#3DDAB4] text-white mb-6">
                <Settings className="w-10 h-10" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Sẵn Sàng Nâng Cao Hiệu Quả Quản Lý?
              </h2>
              <p className="text-gray-600 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                Đặt lịch tư vấn miễn phí để khám phá giải pháp quản trít phù hợp
                nhất cho doanh nghiệp của bạn
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-[#7A77FF] to-[#3DDAB4] text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Đặt Lịch Tư Vấn</span>
                </a>
                <a
                  href="/request"
                  className="px-10 py-4 border-2 border-[#7A77FF] text-[#7A77FF] rounded-xl font-semibold hover:bg-[#7A77FF] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>Tạo Yêu Cầu</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-8 justify-center text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#3DDAB4]" />
                  <span>Tư vấn miễn phí</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#3DDAB4]" />
                  <span>Demo hệ thống thực tế</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#3DDAB4]" />
                  <span>Báo giá chi tiết</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
