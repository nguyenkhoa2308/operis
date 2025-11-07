import React from "react";
import { Metadata } from "next";
import {
  Boxes,
  Star,
  ExternalLink,
  DollarSign,
  Users,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  BarChart,
  Truck,
  Package,
  ShoppingCart,
  FileText,
  ClipboardList,
  UserCheck,
  TrendingUp,
  Factory,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Danh Sách Phần Mềm - AutoFlow | Sản Phẩm Của Chúng Tôi",
  description:
    "Khám phá các giải pháp phần mềm tự động hóa được phát triển bởi AutoFlow cho các ngành hàng khác nhau: logistics, eCommerce, manufacturing và nhiều hơn nữa.",
  keywords: [
    "phần mềm automation",
    "giải pháp tự động hóa",
    "phần mềm logistics",
    "phần mềm eCommerce",
    "phần mềm quản lý",
  ],
  openGraph: {
    title: "Danh Sách Phần Mềm - AutoFlow",
    description: "Sản phẩm phần mềm tự động hóa của chúng tôi",
    type: "website",
  },
};

export default function SoftwarePage() {
  const software = [
    {
      name: "AutoFlow Logistics Pro",
      category: "logistics",
      logo: <Truck className="w-12 h-12 text-blue-600" />,
      tagline: "Giải pháp quản lý vận chuyển toàn diện",
      description:
        "Hệ thống quản lý logistics tự động từ nhận đơn đến giao hàng. Tích hợp với các đơn vị vận chuyển, tracking real-time, tối ưu hóa tuyến đường.",
      version: "v2.5.0",
      status: "Stable",
      pricing: "Từ 50 triệu VNĐ",
      features: [
        "Quản lý đơn hàng tự động",
        "Tích hợp đơn vị vận chuyển (GHN, GHTK, Viettel Post)",
        "Tracking real-time",
        "Tối ưu hóa tuyến đường bằng AI",
        "Báo cáo và phân tích",
        "Mobile app cho shipper",
      ],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Google Maps API",
      ],
      clients: "15+ khách hàng",
      useCases: ["Công ty logistics", "eCommerce lớn", "Chuỗi phân phối"],
      screenshots: 8,
      demo: true,
      popular: true,
    },
    {
      name: "AutoFlow eCommerce Suite",
      category: "ecommerce",
      logo: <ShoppingCart className="w-12 h-12 text-purple-600" />,
      tagline: "Tự động hóa toàn bộ quy trình bán hàng online",
      description:
        "All-in-one platform cho eCommerce: quản lý sản phẩm, đơn hàng, inventory, marketing automation, CRM tích hợp. Sync đa kênh (Shopee, Lazada, TikTok Shop).",
      version: "v3.1.0",
      status: "Stable",
      pricing: "Từ 40 triệu VNĐ",
      features: [
        "Multi-channel sync (Shopee, Lazada, TikTok)",
        "Quản lý inventory thông minh",
        "Marketing automation",
        "Customer segmentation & CRM",
        "Automated pricing & promotion",
        "Analytics dashboard",
      ],
      technologies: ["Next.js", "NestJS", "MongoDB", "Elasticsearch", "AWS"],
      clients: "30+ khách hàng",
      useCases: ["Shop online", "Multi-brand retailers", "Dropshipping"],
      screenshots: 12,
      demo: true,
      popular: true,
    },
    {
      name: "AutoFlow Manufacturing MES",
      category: "manufacturing",
      logo: <Factory className="w-12 h-12 text-orange-600" />,
      tagline: "Hệ thống quản lý sản xuất thông minh",
      description:
        "Manufacturing Execution System (MES) tự động hóa quy trình sản xuất: lập kế hoạch, theo dõi tiến độ, quản lý chất lượng, báo cáo sản xuất real-time.",
      version: "v2.0.0",
      status: "Stable",
      pricing: "Từ 80 triệu VNĐ",
      features: [
        "Lập kế hoạch sản xuất tự động",
        "Theo dõi tiến độ real-time",
        "Quản lý chất lượng (QC/QA)",
        "Quản lý nguyên vật liệu",
        "OEE & KPI tracking",
        "IoT integration",
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "MQTT", "InfluxDB"],
      clients: "8+ khách hàng",
      useCases: ["Nhà máy sản xuất", "Xưởng gia công", "Food & Beverage"],
      screenshots: 10,
      demo: true,
      popular: false,
    },
    {
      name: "AutoFlow CRM Plus",
      category: "crm",
      logo: <Users className="w-12 h-12 text-green-600" />,
      tagline: "CRM & Sales automation cho SME",
      description:
        "Hệ thống CRM toàn diện: quản lý khách hàng, sales pipeline, marketing automation, email campaigns, báo cáo doanh số. Dễ dùng, phù hợp SME.",
      version: "v2.8.0",
      status: "Stable",
      pricing: "Từ 25 triệu VNĐ",
      features: [
        "Contact & lead management",
        "Sales pipeline automation",
        "Email marketing automation",
        "Task & activity tracking",
        "Mobile CRM app",
        "Integration với Zalo, Facebook",
      ],
      technologies: ["React", "Laravel", "MySQL", "Redis", "Firebase"],
      clients: "45+ khách hàng",
      useCases: ["SME", "Sales team", "Marketing agency"],
      screenshots: 9,
      demo: true,
      popular: true,
    },
    {
      name: "AutoFlow Invoice Pro",
      category: "finance",
      logo: <FileText className="w-12 h-12 text-indigo-600" />,
      tagline: "Tự động hóa hóa đơn và kế toán",
      description:
        "Giải pháp tự động hóa quy trình kế toán: OCR hóa đơn, tự động ghi sổ, đối soát công nợ, báo cáo tài chính. Tuân thủ luật kế toán Việt Nam.",
      version: "v1.9.0",
      status: "Stable",
      pricing: "Từ 30 triệu VNĐ",
      features: [
        "OCR hóa đơn tự động",
        "Tự động ghi sổ kế toán",
        "Đối soát công nợ",
        "Báo cáo tài chính",
        "Tích hợp ngân hàng",
        "Tuân thủ chuẩn VAS",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Tesseract OCR",
        "OpenAI",
      ],
      clients: "20+ khách hàng",
      useCases: ["Phòng kế toán", "Dịch vụ kế toán", "SME"],
      screenshots: 7,
      demo: true,
      popular: false,
    },
    {
      name: "AutoFlow HR Manager",
      category: "crm",
      logo: <UserCheck className="w-12 h-12 text-teal-600" />,
      tagline: "Quản lý nhân sự và chấm công tự động",
      description:
        "Hệ thống quản lý nhân sự toàn diện: chấm công, tính lương, quản lý phép, đánh giá KPI, tuyển dụng. Tích hợp thiết bị chấm công và mobile app.",
      version: "v2.3.0",
      status: "Stable",
      pricing: "Từ 35 triệu VNĐ",
      features: [
        "Chấm công tự động (thiết bị + app)",
        "Tính lương tự động",
        "Quản lý phép, OT",
        "KPI & performance review",
        "Tuyển dụng và onboarding",
        "Tích hợp BHXH điện tử",
      ],
      technologies: ["Vue.js", "Express.js", "MySQL", "Socket.io", "Flutter"],
      clients: "25+ khách hàng",
      useCases: ["SME", "Enterprise", "Nhà máy sản xuất"],
      screenshots: 11,
      demo: true,
      popular: false,
    },
    {
      name: "AutoFlow Report Builder",
      category: "finance",
      logo: <BarChart className="w-12 h-12 text-red-600" />,
      tagline: "Tạo báo cáo tự động từ nhiều nguồn dữ liệu",
      description:
        "Công cụ tạo báo cáo và dashboard tự động. Kết nối nhiều nguồn dữ liệu (database, API, Excel), tự động tổng hợp, phân tích, và gửi báo cáo theo lịch.",
      version: "v1.5.0",
      status: "Beta",
      pricing: "Từ 20 triệu VNĐ",
      features: [
        "Kết nối đa nguồn dữ liệu",
        "Drag-and-drop report builder",
        "Automated scheduling",
        "Export đa định dạng (PDF, Excel, CSV)",
        "Email & Slack integration",
        "Custom branding",
      ],
      technologies: [
        "React",
        "Python",
        "PostgreSQL",
        "Apache Superset",
        "Celery",
      ],
      clients: "12+ khách hàng",
      useCases: ["Management team", "Business analyst", "CFO dashboard"],
      screenshots: 6,
      demo: true,
      popular: false,
    },
    {
      name: "AutoFlow Order Sync",
      category: "ecommerce",
      logo: <Package className="w-12 h-12 text-cyan-600" />,
      tagline: "Đồng bộ đơn hàng đa kênh real-time",
      description:
        "Đồng bộ đơn hàng tự động từ tất cả kênh bán hàng (website, marketplace, social) về hệ thống quản lý tập trung. Real-time sync, auto update inventory.",
      version: "v2.1.0",
      status: "Stable",
      pricing: "Từ 15 triệu VNĐ",
      features: [
        "Sync 10+ marketplace",
        "Real-time inventory update",
        "Auto order routing",
        "Duplicate detection",
        "Webhook & API integration",
        "Conflict resolution",
      ],
      technologies: ["Node.js", "RabbitMQ", "Redis", "MongoDB", "Docker"],
      clients: "40+ khách hàng",
      useCases: ["Multi-channel sellers", "Brand owners", "Distributors"],
      screenshots: 5,
      demo: true,
      popular: true,
    },
    {
      name: "AutoFlow Task Manager",
      category: "crm",
      logo: <ClipboardList className="w-12 h-12 text-violet-600" />,
      tagline: "Quản lý công việc và workflow automation",
      description:
        "Hệ thống quản lý công việc và workflow: tạo task tự động, assign, tracking tiến độ, notification, integration với email và chat apps. Kanban + Gantt chart.",
      version: "v1.8.0",
      status: "Stable",
      pricing: "Từ 18 triệu VNĐ",
      features: [
        "Kanban & Gantt chart",
        "Auto task creation & assignment",
        "Time tracking",
        "Team collaboration",
        "Integration (Email, Slack, Teams)",
        "Custom workflow builder",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
      clients: "35+ khách hàng",
      useCases: ["Project teams", "Agencies", "Software development"],
      screenshots: 8,
      demo: true,
      popular: false,
    },
  ];

  const popularSoftware = software.filter((s) => s.popular);

  const stats = [
    {
      icon: <Boxes className="w-8 h-8" />,
      value: software.length,
      label: "Sản phẩm",
      color: "text-[#3DDAB4]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "180+",
      label: "Khách hàng",
      color: "text-[#7A77FF]",
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "4.8/5",
      label: "Đánh giá",
      color: "text-yellow-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "98%",
      label: "Uptime",
      color: "text-green-500",
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
            items={[{ label: "Trang chủ", href: "/" }, { label: "Phần mềm" }]}
          />

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3DDAB4]/10 to-[#7A77FF]/10 rounded-full mb-6">
              <Boxes className="w-5 h-5 text-[#3DDAB4]" />
              <span className="text-[#3DDAB4] font-semibold">Our Products</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sản Phẩm Phần Mềm Của Chúng Tôi
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Các giải pháp phần mềm tự động hóa được phát triển bởi AutoFlow,
              tối ưu hóa quy trình và nâng cao hiệu quả cho doanh nghiệp của bạn
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
                  <div className={`flex justify-center mb-3 ${stat.color}`}>
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

      {/* Popular Software */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-yellow-500" />
            <h2 className="text-3xl font-bold">Sản Phẩm Nổi Bật</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularSoftware.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-[#3DDAB4]/30 hover:border-[#3DDAB4] hover:shadow-xl transition-all group flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
                      {item.logo}
                    </div>
                    <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-lg">
                      {item.status}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-[#3DDAB4] text-sm font-semibold mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-4 text-sm mt-auto">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{item.pricing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{item.clients}</span>
                    </div>
                  </div>

                  <button className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                    <span>Xem chi tiết</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Software */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Tất Cả Sản Phẩm</h2>
            <p className="text-gray-600">
              Danh sách đầy đủ các giải pháp phần mềm được phát triển bởi
              AutoFlow
            </p>
          </div>

          <div className="space-y-6">
            {software.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-[#7A77FF] hover:shadow-lg transition-all"
              >
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-12 gap-6">
                    {/* Left: Logo & Basic Info */}
                    <div className="md:col-span-3">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 inline-flex mb-4">
                        {item.logo}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-[#7A77FF] text-sm font-semibold mb-3">
                        {item.tagline}
                      </p>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-gray-600">
                            {item.status} - {item.version}
                          </span>
                        </div>
                        <div className="text-gray-600">💰 {item.pricing}</div>
                        <div className="text-gray-600">👥 {item.clients}</div>
                        <div className="text-gray-600">
                          📸 {item.screenshots} screenshots
                        </div>
                      </div>
                    </div>

                    {/* Middle: Details */}
                    <div className="md:col-span-6">
                      <p className="text-gray-700 mb-4">{item.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">
                          Tính năng chính:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {item.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#3DDAB4] flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">
                          Tech stack:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Use Cases & CTA */}
                    <div className="md:col-span-3">
                      <h4 className="font-semibold text-sm mb-2">
                        Phù hợp cho:
                      </h4>
                      <div className="space-y-2 mb-6">
                        {item.useCases.map((useCase, i) => (
                          <div
                            key={i}
                            className="px-3 py-2 bg-gradient-to-r from-[#3DDAB4]/10 to-[#7A77FF]/10 rounded-lg text-sm text-gray-700"
                          >
                            {useCase}
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <button className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                          <span>Xem demo</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button className="flex items-center justify-center gap-2 w-full px-4 py-2 border-2 border-[#7A77FF] text-[#7A77FF] rounded-lg font-semibold hover:bg-[#7A77FF] hover:text-white transition-all">
                          <MessageSquare className="w-4 h-4" />
                          <span>Liên hệ</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-[#3DDAB4] bg-gradient-to-br from-[#3DDAB4]/5 to-[#7A77FF]/5">
            <CardContent className="p-12 text-center">
              <Sparkles className="w-16 h-16 text-[#3DDAB4] mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Cần Giải Pháp Tùy Chỉnh?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Chúng tôi có thể phát triển phần mềm theo yêu cầu riêng của bạn.
                Liên hệ để được tư vấn và báo giá chi tiết.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Liên Hệ Ngay</span>
                </a>
                <a
                  href="/services"
                  className="px-8 py-3 border-2 border-[#3DDAB4] text-[#3DDAB4] rounded-xl font-semibold hover:bg-[#3DDAB4] hover:text-white transition-all"
                >
                  Xem Dịch Vụ
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
