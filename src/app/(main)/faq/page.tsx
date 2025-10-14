import React from "react";
import { Metadata } from "next";
import {
  HelpCircle,
  MessageSquare,
  DollarSign,
  Shield,
  Zap,
  Clock,
  FolderKanban,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQContent from "./components/FAQContent";
import PopularQuestions from "./components/PopularQuestions";

export const metadata: Metadata = {
  title: "Câu Hỏi Thường Gặp - AutoFlow | FAQ Về Tự Động Hóa",
  description:
    "Tìm câu trả lời cho các câu hỏi thường gặp về dịch vụ tự động hóa của AutoFlow. Giá cả, bảo mật, thời gian triển khai và nhiều hơn nữa.",
  keywords: [
    "FAQ",
    "câu hỏi thường gặp",
    "automation FAQ",
    "giá cả",
    "bảo mật",
    "hỗ trợ",
  ],
  openGraph: {
    title: "FAQ - AutoFlow",
    description: "Câu hỏi thường gặp về dịch vụ tự động hóa",
    type: "website",
  },
};

export default function FAQPage() {
  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: <HelpCircle className="w-4 h-4" />,
    },
    {
      id: "general",
      name: "Tổng quan",
      icon: <MessageSquare className="w-4 h-4" />,
    },
    {
      id: "management",
      name: "Quản trị",
      icon: <FolderKanban className="w-4 h-4" />,
    },
    {
      id: "pricing",
      name: "Giá cả",
      icon: <DollarSign className="w-4 h-4" />,
    },
    {
      id: "technical",
      name: "Kỹ thuật",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      id: "security",
      name: "Bảo mật",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      id: "timeline",
      name: "Thời gian",
      icon: <Clock className="w-4 h-4" />,
    },
  ];

  const faqs = [
    // GENERAL - 8 questions
    {
      id: 1,
      category: "general",
      question: "Automation là gì? Tại sao doanh nghiệp tôi cần nó?",
      answer:
        "Automation (tự động hóa) là việc sử dụng công nghệ để thực hiện các tác vụ lặp đi lặp lại mà không cần sự can thiệp của con người. Doanh nghiệp cần automation để tiết kiệm 70-90% thời gian xử lý công việc thủ công, giảm thiểu sai sót, tăng năng suất lên 3-5 lần, và có thể scale up dễ dàng khi phát triển.",
      popular: true,
      relatedQuestions: [2, 5, 9],
    },
    {
      id: 2,
      category: "general",
      question: "Dịch vụ của các bạn khác gì với việc thuê developer?",
      answer:
        "Chúng tôi cung cấp end-to-end solution: tư vấn quy trình, thiết kế kiến trúc, phát triển, kiểm thử, training, documentation và support liên tục. Thuê developer thì bạn phải tự quản lý, tự tư vấn và gánh rủi ro khi developer nghỉ việc. Giá thành của chúng tôi thường thấp hơn 40-60% so với maintain team in-house.",
      popular: false,
      relatedQuestions: [9, 10, 17],
    },
    {
      id: 3,
      category: "general",
      question: "Công ty tôi nhỏ, liệu có phù hợp không?",
      answer:
        "Hoàn toàn phù hợp! SME (doanh nghiệp vừa và nhỏ) lại được lợi nhiều hơn từ automation vì nguồn lực hạn chế cần tối ưu hóa. Chi phí automation thấp hơn nhiều so với thuê thêm nhân viên, có thể bắt đầu từ quy trình nhỏ (10-30 triệu) và ROI nhanh trong 3-6 tháng. Nhiều SME của chúng tôi hoàn vốn chỉ sau 2-3 tháng.",
      popular: true,
      relatedQuestions: [9, 10, 14],
    },
    {
      id: 4,
      category: "general",
      question: "Automation có thay thế nhân viên không?",
      answer:
        "KHÔNG! Automation thay thế công việc nhàm chán, không phải con người. Nhân viên được giải phóng khỏi công việc thủ công để tập trung vào công việc sáng tạo, có giá trị cao hơn như customer service, business development, creative work. Kết quả là nhân viên hạnh phúc hơn (không phải làm việc nhàm chán) và công ty phát triển nhanh hơn.",
      popular: false,
      relatedQuestions: [1, 3],
    },
    {
      id: 5,
      category: "general",
      question: "Loại công việc nào có thể tự động hóa?",
      answer:
        "Hầu hết công việc lặp đi lặp lại đều có thể automation: Data entry, email processing, report generation, invoice processing, order fulfillment, customer onboarding, data scraping, social media posting, backup & sync, reconciliation, approval workflows. Nguyên tắc: Nếu bạn làm lại công việc đó > 10 lần/tháng với cùng pattern → có thể automation.",
      popular: false,
      relatedQuestions: [1, 17, 18],
    },
    {
      id: 6,
      category: "general",
      question: "Có demo hoặc proof of concept không?",
      answer:
        "Có! Chúng tôi cung cấp FREE POC (Proof of Concept) cho 1 quy trình nhỏ (thời gian 3-5 ngày làm việc). Bạn sẽ thấy automation thực sự chạy với data thật. Nếu hài lòng mới tiếp tục, không hài lòng không mất phí gì. 95% khách hàng sau POC đều quyết định triển khai full.",
      popular: false,
      relatedQuestions: [17, 23, 26],
    },
    {
      id: 7,
      category: "general",
      question: "Tôi không biết gì về công nghệ, liệu có khó không?",
      answer:
        "Hoàn toàn không khó! Bạn chỉ cần: (1) Mô tả quy trình hiện tại đang làm như thế nào, (2) Cung cấp file mẫu. Phần còn lại chúng tôi lo! Interface đơn giản như dùng Excel, có training kỹ, documentation đầy đủ tiếng Việt. 80% khách hàng của chúng tôi không có background IT.",
      popular: false,
      relatedQuestions: [17, 18, 21],
    },
    {
      id: 8,
      category: "general",
      question: "Có hỗ trợ cả automation cho mobile app không?",
      answer:
        "Có! Chúng tôi hỗ trợ mobile automation cho iOS và Android: App testing automation, mobile RPA, push notification automation, mobile data sync. Tuy nhiên chi phí cao hơn web automation 30-50% do phức tạp hơn. Recommend là tích hợp qua API thay vì automation UI.",
      popular: false,
      relatedQuestions: [18, 19, 21],
    },

    // MANAGEMENT - 10 questions
    {
      id: 41,
      category: "management",
      question: "Task Management System khác gì với Trello, Asana?",
      answer:
        "Hệ thống của chúng tôi được customize 100% cho quy trình riêng của bạn, không bị giới hạn bởi template có sẵn. Khác biệt chính: (1) Tích hợp sâu với hệ thống nội bộ (ERP, CRM, Email), (2) Automation workflows phức tạp theo business rules riêng, (3) Custom fields, views, reports không giới hạn, (4) On-premise deployment option cho data sensitivity, (5) Không phí recurring user license. Trello/Asana tốt cho general use, chúng tôi tốt cho specific business needs.",
      popular: true,
      relatedQuestions: [42, 43, 45],
    },
    {
      id: 42,
      category: "management",
      question: "Có hỗ trợ Kanban, Gantt chart không?",
      answer:
        "Có đầy đủ! Multiple views: (1) Kanban board - drag & drop tasks giữa các columns, WIP limits, swimlanes, (2) Gantt chart - timeline view, dependencies, critical path, milestone tracking, (3) Calendar view - schedule tasks theo ngày/tuần/tháng, (4) List view - detailed table với filters/sorting, (5) Dashboard view - KPIs và metrics overview. Switch giữa views instantly, mỗi user có thể chọn view ưa thích.",
      popular: false,
      relatedQuestions: [41, 43, 47],
    },
    {
      id: 43,
      category: "management",
      question: "Performance Analytics track những metrics nào?",
      answer:
        "Comprehensive metrics suite: Team metrics: Task completion rate, sprint velocity, cycle time, lead time. Individual metrics: Tasks completed, hours logged, on-time delivery rate, quality score. Project metrics: Budget utilization, schedule variance, scope changes, risk indicators. Business metrics: Revenue impact, cost savings, customer satisfaction. Custom KPIs theo industry: Sales conversion, support response time, code quality metrics, etc. Real-time dashboard + automated weekly/monthly reports.",
      popular: true,
      relatedQuestions: [41, 44, 48],
    },
    {
      id: 44,
      category: "management",
      question: "Smart Notification có spam không? Làm sao quản lý?",
      answer:
        "Không spam nhờ AI-powered intelligent filtering: (1) Priority-based - chỉ notify critical/high items immediately, low priority digest 1 lần/ngày, (2) Smart batching - group related notifications, (3) User preferences - chọn channels (email/Slack/SMS), quiet hours (8PM-8AM không disturb), (4) Auto-mute - nếu bạn đang active trong task thì không notify, (5) Digest mode - summary notification thay vì realtime. Average user nhận 5-10 notifications/ngày thay vì 50-100.",
      popular: false,
      relatedQuestions: [43, 45],
    },
    {
      id: 45,
      category: "management",
      question: "Resource Planning giúp tránh overload như thế nào?",
      answer:
        "Multi-layer protection: (1) Capacity tracking - monitor workload mỗi người real-time (hours allocated vs available), (2) Auto-detection - alert khi allocation > 100%, (3) Smart suggestions - recommend re-assign tasks dựa trên capacity & skills, (4) Workload visualization - heatmap shows team capacity, (5) Forecast planning - predict bottlenecks 2-4 tuần trước. Managers get weekly capacity report. Typical result: Giảm 60% overtime, tăng 40% team satisfaction.",
      popular: false,
      relatedQuestions: [43, 46, 48],
    },
    {
      id: 46,
      category: "management",
      question: "Team Collaboration Hub có video conference không?",
      answer:
        "Có tích hợp! Options: (1) Embedded solution - Zoom/Google Meet/MS Teams integration, click để join meeting ngay trong platform, (2) Built-in solution - own video/audio conference (optional, +cost), (3) Screen sharing + recording, (4) Meeting notes auto-linked to tasks/projects, (5) Calendar sync. Recommend embedded approach (tận dụng license hiện có) vs build from scratch. Also có team chat, file sharing với version control, knowledge base.",
      popular: false,
      relatedQuestions: [47, 48],
    },
    {
      id: 47,
      category: "management",
      question: "Knowledge base có AI search không?",
      answer:
        "Có! AI-powered search với: (1) Semantic search - hiểu ý nghĩa câu hỏi, không chỉ keyword matching, (2) Auto-suggest - gợi ý related articles, (3) Smart categorization - auto-tag documents, (4) Version tracking - track changes, who/when/what, (5) Access control - role-based permissions. Example: Search 'làm sao tạo invoice' → finds 'Hướng dẫn xuất hóa đơn', 'Invoice template', 'Quy trình billing'. Powered by AI như OpenAI/Claude.",
      popular: false,
      relatedQuestions: [46, 48, 21],
    },
    {
      id: 48,
      category: "management",
      question: "Có mobile app để quản lý task on-the-go không?",
      answer:
        "Có! Responsive web app works perfectly trên mobile browser (iOS/Android). Native mobile app (optional, thêm phí 30-50M) với: Offline mode - view/edit tasks without internet, sync khi online, Push notifications native, Camera integration - chụp ảnh attach vào task, Voice notes, Biometric login (Face ID, fingerprint). 90% users hài lòng với web app responsive, chỉ 10% cần native app (field workers, sales reps).",
      popular: false,
      relatedQuestions: [41, 43, 45],
    },
    {
      id: 49,
      category: "management",
      question: "Có template cho Sprint Planning, Scrum không?",
      answer:
        "Có sẵn templates cho Agile/Scrum: (1) Sprint board - backlog, sprint, in-progress, review, done columns, (2) User story format - As a... I want... So that..., story points, acceptance criteria, (3) Sprint planning - capacity planning, velocity charts, (4) Daily standup - yesterday/today/blockers, (5) Retrospective board - Start/Stop/Continue. Also templates cho Waterfall, Kanban, SAFe. Hoặc tạo custom template theo quy trình riêng 100%.",
      popular: false,
      relatedQuestions: [42, 43],
    },
    {
      id: 50,
      category: "management",
      question: "Tích hợp với Email (Gmail, Outlook) như thế nào?",
      answer:
        "2-way sync seamless: Inbound: Forward email to task@yourproject.com → auto tạo task, extract info, assign based on rules. Email thread becomes task comments. Outbound: Comment trong task → gửi email notification, reply email → update task. Attachments sync both ways. Calendar sync: Tasks with due dates → appear in Google/Outlook calendar. Meeting invites → create tasks tự động. Gmail/Outlook add-in để create tasks directly from email. Response time cải thiện 50%.",
      popular: true,
      relatedQuestions: [41, 46, 20],
    },

    // PRICING - 8 questions
    {
      id: 9,
      category: "pricing",
      question: "Chi phí automation là bao nhiêu?",
      answer:
        "Chi phí phụ thuộc độ phức tạp: (1) Basic automation (Excel, Email, simple workflows): 10-30 triệu VNĐ, (2) Medium complexity (API integration, multi-system): 30-80 triệu VNĐ, (3) Complex automation (AI/ML, custom logic, enterprise): 80-200+ triệu VNĐ. Chúng tôi luôn tính toán ROI trước khi bắt đầu để đảm bảo bạn có lợi. POC miễn phí để estimate chính xác.",
      popular: true,
      relatedQuestions: [3, 10, 14],
    },
    {
      id: 10,
      category: "pricing",
      question: "Có gói dịch vụ theo tháng không?",
      answer:
        "Có! Chúng tôi cung cấp nhiều model: (1) One-time project - trả 1 lần, sở hữu vĩnh viễn, (2) Monthly subscription 5-20 triệu/tháng bao gồm hosting + support + maintenance + updates, (3) Retainer model - book số giờ theo tháng (flexible), (4) Revenue share - phù hợp startup, trả % doanh thu thay vì upfront. Recommend subscription cho SME vì predictable cost.",
      popular: false,
      relatedQuestions: [9, 11, 12],
    },
    {
      id: 11,
      category: "pricing",
      question: "Có tính phí license phần mềm không?",
      answer:
        "Phí license phụ thuộc công cụ sử dụng: Zapier/Make (20-100 USD/tháng tùy số tasks), RPA tools như UiPath (400-5000 USD/năm), Cloud services AWS/Azure (10-50 USD/tháng cho SME), AI APIs OpenAI (20-200 USD/tháng). Chúng tôi tư vấn giải pháp tối ưu chi phí, có thể dùng open-source (miễn phí) như n8n, Airflow nếu phù hợp. License không bao gồm trong development fee.",
      popular: false,
      relatedQuestions: [9, 10, 18],
    },
    {
      id: 12,
      category: "pricing",
      question: "ROI (hoàn vốn) thường trong bao lâu?",
      answer:
        "Hầu hết dự án automation hoàn vốn trong 3-6 tháng. Ví dụ cụ thể: Automation tiết kiệm 4 giờ/ngày × 20 ngày × 200k VNĐ/giờ = 16 triệu/tháng. Nếu dự án 40 triệu → hoàn vốn sau 2.5 tháng, từ tháng thứ 3 là lợi nhuận ròng. Chúng tôi có ROI calculator để tính chính xác cho từng case.",
      popular: true,
      relatedQuestions: [9, 14, 3],
    },
    {
      id: 13,
      category: "pricing",
      question: "Chi phí maintenance hàng năm là bao nhiêu?",
      answer:
        "Maintenance fee dao động 15-25% giá trị project/năm, bao gồm: Bug fixes, minor updates, monitoring 24/7, technical support, security patches, quarterly performance review. Ví dụ: Project 50 triệu → maintenance 7.5-12.5 triệu/năm (tức 600k - 1 triệu/tháng). Subscription model thì đã bao gồm maintenance.",
      popular: false,
      relatedQuestions: [10, 11],
    },
    {
      id: 14,
      category: "pricing",
      question: "Có thể trả góp hoặc pay-as-you-grow không?",
      answer:
        "Có! Flexible payment options: (1) Milestone-based - trả theo từng giai đoạn (30% start, 40% UAT, 30% go-live), (2) Monthly payment - chia nhỏ ra 6-12 tháng, (3) Revenue share cho startup không có budget upfront, (4) Performance-based - pay khi đạt metrics nhất định. Chúng tôi ưu tiên long-term partnership hơn là lợi nhuận ngắn hạn.",
      popular: false,
      relatedQuestions: [10, 12, 3],
    },
    {
      id: 15,
      category: "pricing",
      question: "Có discount cho nhiều projects không?",
      answer:
        "Có! Volume discount: 2-3 projects → 10% off, 4-6 projects → 15% off, 7+ projects → 20% off + dedicated team. Package deal cho automation multiple workflows cùng lúc rẻ hơn làm từng cái riêng lẻ 30-40%. Annual contract (1 năm cam kết) discount thêm 15%. Referral bonus: Giới thiệu khách mới được 10% giá trị project.",
      popular: false,
      relatedQuestions: [9, 10],
    },
    {
      id: 16,
      category: "pricing",
      question: "So sánh chi phí automation vs thuê nhân viên?",
      answer:
        "Automation rẻ hơn nhiều long-term: Thuê 1 staff (salary 15M + insurance + benefit) = ~20M/tháng = 240M/năm. Automation 50M one-time = 50M năm 1, maintenance 10M/năm sau đó. Năm 1: Automation đắt hơn 10M. Năm 2+: Tiết kiệm 230M/năm. ROI tích lũy 5 năm: Tiết kiệm ~1 tỷ VNĐ. Bonus: Automation không nghỉ lễ, ốm, về sớm.",
      popular: false,
      relatedQuestions: [12, 14, 3],
    },

    // TECHNICAL - 10 questions
    {
      id: 17,
      category: "technical",
      question: "Tôi cần cung cấp những thông tin gì để bắt đầu?",
      answer:
        "Cần chuẩn bị: (1) Mô tả quy trình hiện tại step-by-step (hoặc record video màn hình), (2) File mẫu input/output (Excel, PDF, email templates), (3) Danh sách hệ thống/phần mềm đang dùng (có API không?), (4) Account demo/test để chúng tôi thử nghiệm, (5) Contact person tech team (nếu có). Đừng lo nếu không rõ kỹ thuật, chúng tôi sẽ schedule call 30-60 phút để làm rõ requirements!",
      popular: false,
      relatedQuestions: [6, 23, 7],
    },
    {
      id: 18,
      category: "technical",
      question: "Automation có hoạt động 24/7 không?",
      answer:
        "Có! Hệ thống chạy trên cloud 24/7/365 với: Auto retry khi có lỗi tạm thời (network timeout, API rate limit), Alert notification real-time qua Slack/Email/SMS khi có issue critical, Monitoring dashboard xem status mọi lúc, Uptime 99.9% guarantee, Automatic failover nếu server chính down, Scheduled maintenance window vào lúc ít traffic (2-4AM). You sleep, bots work!",
      popular: false,
      relatedQuestions: [21, 22, 27],
    },
    {
      id: 19,
      category: "technical",
      question: "Nếu hệ thống/phần mềm hiện tại thay đổi thì sao?",
      answer:
        "Chúng tôi thiết kế automation dễ bảo trì: Modular design - thay đổi 1 phần không ảnh hưởng toàn bộ, Config-based - 90% thay đổi chỉ cần adjust config không cần code lại, Comprehensive documentation, Version control - có thể rollback nếu update lỗi, Sandbox environment test trước khi apply production. Support package bao gồm accommodate changes. Thường 1-3 ngày để adapt changes nhỏ.",
      popular: false,
      relatedQuestions: [21, 22, 18],
    },
    {
      id: 20,
      category: "technical",
      question: "Tích hợp với hệ thống hiện tại có phức tạp không?",
      answer:
        "Chúng tôi làm phần phức tạp giúp bạn! Quy trình: (1) Assessment - đánh giá systems có API không, (2) Design integration architecture, (3) Development trên sandbox environment, (4) UAT - user acceptance testing với test data, (5) Deploy production với zero downtime. 80% hệ thống phổ biến (Salesforce, SAP, Oracle, custom apps) đều có API. Nếu không có API thì dùng RPA hoặc build custom connector.",
      popular: false,
      relatedQuestions: [17, 21, 8],
    },
    {
      id: 21,
      category: "technical",
      question: "Công nghệ nào được sử dụng?",
      answer:
        "Stack tùy vào requirements: (1) RPA: UiPath, Automation Anywhere, Blue Prism, (2) Workflow: Zapier, Make, n8n (open-source), Airflow, (3) Backend: Python, Node.js, Go, (4) AI/ML: OpenAI, Anthropic Claude, TensorFlow, (5) Cloud: AWS, Azure, GCP, (6) Database: PostgreSQL, MongoDB, Redis. Chọn tech stack dựa trên: budget, scalability needs, existing infrastructure, team capability to maintain.",
      popular: false,
      relatedQuestions: [11, 18, 19],
    },
    {
      id: 22,
      category: "technical",
      question: "Có cung cấp API để tôi tích hợp vào hệ thống khác không?",
      answer:
        "Có! Mọi automation chúng tôi build đều expose RESTful API với: Authentication (API key, OAuth 2.0), Rate limiting, Comprehensive documentation (Postman collection, OpenAPI spec), Webhook support cho real-time events, SDK cho Python/JavaScript/PHP nếu cần. Bạn có thể trigger automation từ app khác, nhận notifications, query status/results via API.",
      popular: false,
      relatedQuestions: [20, 21],
    },
    {
      id: 23,
      category: "technical",
      question: "Testing như thế nào trước khi go-live?",
      answer:
        "Comprehensive testing process: (1) Unit testing - test từng component riêng lẻ, (2) Integration testing - test kết nối giữa các systems, (3) UAT (User Acceptance Testing) - bạn test với real scenarios, (4) Load testing - chạy với volume production, (5) Edge case testing - test các cases ngoại lệ, (6) Parallel run - chạy song song manual + automation 1-2 tuần để so sánh results. Không deploy nếu UAT chưa pass 100%.",
      popular: false,
      relatedQuestions: [17, 26, 27],
    },
    {
      id: 24,
      category: "technical",
      question: "Làm sao để monitor và biết automation đang chạy tốt?",
      answer:
        "Dashboard monitoring real-time với: Success rate, execution time, errors log với stack trace, Volume metrics (số tasks processed), Alert rules (email/Slack khi error rate > X%), Performance trends (so sánh với baseline), Schedule adherence (chạy đúng giờ không). Mobile app để check status anywhere. Weekly automated report email summary. On-demand manual trigger nếu cần run ngay.",
      popular: false,
      relatedQuestions: [18, 28],
    },
    {
      id: 25,
      category: "technical",
      question: "Có giới hạn về số lượng tasks có thể xử lý không?",
      answer:
        "Không có hard limit! Architecture thiết kế scalable: Horizontal scaling - thêm workers khi volume tăng, Queue-based processing, Auto-scaling dựa trên load, Batch processing cho volume lớn, Distributed processing cho tasks nặng. Ví dụ: Xử lý 10k invoices/ngày hoặc 100k emails/tháng đều OK. Cost tăng theo volume nhưng marginal (cloud cost), không phải linear.",
      popular: false,
      relatedQuestions: [18, 21],
    },
    {
      id: 26,
      category: "technical",
      question: "Nếu automation bị lỗi, xử lý như thế nào?",
      answer:
        "Multi-layer error handling: (1) Auto retry với exponential backoff (retry 3-5 lần với delay tăng dần), (2) Fallback mechanism - dùng alternative method nếu primary fail, (3) Alert notification ngay lập tức qua multiple channels, (4) Error queue - failed tasks vào queue riêng để review, (5) Circuit breaker - tạm dừng auto nếu error rate quá cao, (6) Manual intervention option. SLA response time: Critical < 1 giờ, High < 4 giờ, Medium < 1 ngày.",
      popular: false,
      relatedQuestions: [18, 23, 28],
    },

    // SECURITY - 6 questions
    {
      id: 27,
      category: "security",
      question: "Dữ liệu của tôi có an toàn không?",
      answer:
        "Bảo mật là ưu tiên hàng đầu với: Data encryption AES-256 at rest, TLS 1.3 for data in transit, RBAC (Role-Based Access Control) + MFA (Multi-Factor Authentication), Tuân thủ GDPR, ISO 27001, SOC 2, Ký NDA (Non-Disclosure Agreement) trước khi bắt đầu, Option deploy on-premise nếu data không được ra khỏi company, Audit logging toàn bộ actions, Annual penetration testing, Regular security updates & patches. Zero data breach trong 5 năm hoạt động.",
      popular: true,
      relatedQuestions: [28, 29, 30],
    },
    {
      id: 28,
      category: "security",
      question: "Ai có quyền truy cập vào hệ thống automation?",
      answer:
        "Kiểm soát chặt chẽ theo principle of least privilege: Development phase: Chỉ 2-3 engineers assigned cho project + tech lead, có ký NDA. Post go-live: Bạn có full admin access, chúng tôi chỉ có read-only monitoring access. Support access: Chỉ khi bạn tạo support ticket và approve, có time limit (expire sau 24-48h), log đầy đủ mọi actions. Yearly access review để revoke unused accounts.",
      popular: false,
      relatedQuestions: [27, 30],
    },
    {
      id: 29,
      category: "security",
      question: "Chính sách backup và disaster recovery như thế nào?",
      answer:
        "Comprehensive BC/DR strategy: Automated hourly incremental backup + daily full backup, Retention 30-90 days (configurable), Multi-region replication (data ở tối thiểu 2 regions), Point-in-time recovery, RTO (Recovery Time Objective) < 4 giờ, RPO (Recovery Point Objective) < 1 giờ, Quarterly disaster recovery drill (test restore process), On-demand export data anytime (JSON, CSV, SQL dump). Backup storage encrypted riêng biệt với production.",
      popular: false,
      relatedQuestions: [27, 30],
    },
    {
      id: 30,
      category: "security",
      question: "Compliance với các quy định về dữ liệu (GDPR, PDPA)?",
      answer:
        "Tuân thủ đầy đủ các regulations: GDPR (EU) - right to be forgotten, data portability, consent management, PDPA (Thailand, Singapore) - personal data protection, Data residency requirements - store data tại region bạn chọn, DPA (Data Processing Agreement) signing, Regular compliance audits, Privacy by design approach, Data anonymization options cho analytics. Có legal team tư vấn compliance cho từng industry cụ thể (healthcare, finance, etc).",
      popular: false,
      relatedQuestions: [27, 28, 29],
    },
    {
      id: 31,
      category: "security",
      question: "Credentials và API keys được quản lý như thế nào?",
      answer:
        "Best practices cho secrets management: Vault service (HashiCorp Vault, AWS Secrets Manager) - không hardcode, Rotation policy - credentials rotate định kỳ (30-90 days), Encrypted storage với separate encryption keys, Separate credentials cho dev/staging/production, Audit log mọi secret access, Expired credentials cleanup tự động, Emergency revoke capability. Developers không bao giờ thấy production credentials plaintext.",
      popular: false,
      relatedQuestions: [27, 28],
    },
    {
      id: 32,
      category: "security",
      question: "Có insurance cho data breach không?",
      answer:
        "Có! Coverage bao gồm: Cyber liability insurance $2M coverage, Professional indemnity insurance, Breach notification costs, Forensic investigation costs, Legal defense costs, Credit monitoring cho affected users, PR crisis management. However, track record 5 năm zero breach. Prevention > insurance. Invest heavily vào security measures để không bao giờ phải dùng insurance.",
      popular: false,
      relatedQuestions: [27, 29],
    },

    // TIMELINE - 8 questions
    {
      id: 33,
      category: "timeline",
      question: "Bao lâu để hoàn thành một dự án automation?",
      answer:
        "Timeline phụ thuộc complexity: Simple automation (email, Excel, single system) - 1-2 tuần, Medium complexity (API integration, 2-3 systems, simple logic) - 3-6 tuần, Complex automation (AI/ML, enterprise systems, advanced logic) - 2-4 tháng, Enterprise rollout (multiple departments, change management) - 4-8 tháng. Chúng tôi chia thành nhiều milestones nhỏ để bạn thấy value sớm (agile approach). 80% projects deliver phase 1 trong 4-6 tuần.",
      popular: false,
      relatedQuestions: [34, 35, 37],
    },
    {
      id: 34,
      category: "timeline",
      question: "Có thể làm nhanh hơn (rush/expedited) không?",
      answer:
        "Có thể với fast-track options: Fast-track (1.5x speed) - +30% phí, dedicated team, Emergency rush (2x speed) - +50% phí, work overtime + weekends. Tuy nhiên minimum timeline vẫn phải đảm bảo quality: Testing không bao giờ bị skip, UAT vẫn cần 3-5 days minimum, Sandbox testing required. Không recommend rush vì risk cao hơn, nhưng nếu business critical thì có thể.",
      popular: false,
      relatedQuestions: [33, 37],
    },
    {
      id: 35,
      category: "timeline",
      question: "Sau khi deploy, bao lâu để hệ thống ổn định?",
      answer:
        "Hypercare period rõ ràng: Week 1-2 (Critical period) - monitor 24/7, fix urgent issues within hours, daily check-in calls, Week 3-4 (Stabilization) - daily monitoring, fix issues within 1-2 days, 3x/week sync, Month 2-3 (Optimization) - fine-tuning performance, weekly sync, best practices training, Month 4+ (BAU - Business As Usual) - monthly check-in, quarterly review. 95% projects stable sau 2 tuần, 99% stable sau 1 tháng. Hypercare support 100% miễn phí.",
      popular: false,
      relatedQuestions: [33, 37, 26],
    },
    {
      id: 36,
      category: "timeline",
      question: "Khi nào tôi bắt đầu thấy ROI?",
      answer:
        "ROI timeline rõ ràng: Week 1-2 sau go-live - thấy time savings ngay (staff không phải làm manual), Month 1 - có numbers cụ thể (X hours saved, Y% accuracy improvement), Month 2-3 - thấy impact rõ (staff reallocated to higher-value work), Month 3-6 - break-even point (hoàn vốn), Month 6+ - pure savings. Quick wins thường xuất hiện ngay, compound benefits tích lũy theo thời gian. Track ROI dashboard monthly.",
      popular: false,
      relatedQuestions: [12, 35],
    },
    {
      id: 37,
      category: "timeline",
      question: "Có thể deploy từng phần (phased rollout) không?",
      answer:
        "Recommend phased approach! Benefits: Lower risk, learn from pilot, adjust before full rollout, smaller budget commitment, easier change management. Typical phases: Phase 1 (Pilot - 1-2 tuần) - 1 quy trình nhỏ, 1 team, validate approach, Phase 2 (Expand - 4-6 tuần) - thêm 2-3 quy trình liên quan, Phase 3 (Scale - 2-3 tháng) - rollout company-wide, integrate systems. Pause giữa phases để review lessons learned.",
      popular: false,
      relatedQuestions: [33, 34, 35],
    },
    {
      id: 38,
      category: "timeline",
      question: "Training nhân viên mất bao lâu?",
      answer:
        "Training plan đầy đủ: Admin training (2-3 ngày) - configure settings, manage users, handle basic issues, End-user training (half day - 1 day) - how to use, where to find help, Train-the-trainer (1-2 days) - internal champions, Video tutorials (10-15 videos × 5-10 phút), Written documentation (Vietnamese), Office hours (2 tuần first month) - Q&A sessions 3x/week. 90% users comfortable sau 1 tuần sử dụng. Continuous learning materials updated quarterly.",
      popular: false,
      relatedQuestions: [7, 35],
    },
    {
      id: 39,
      category: "timeline",
      question: "Khoảng thời gian từ lúc ký hợp đồng đến go-live là bao lâu?",
      answer:
        "End-to-end timeline chi tiết: Week 1 - Kickoff, requirements gathering, system access setup, Week 2-3 - Design & development (sandbox), Week 4 - UAT preparation, test data setup, Week 5 - UAT execution, issue fixes, Week 6 - Production deployment, cutover planning, Week 7 - Go-live, hypercare begins, Week 8-10 - Stabilization, optimization. Total: 6-10 tuần cho typical project. Complex projects 12-16 tuần. Fast-track có thể rút xuống 4-6 tuần.",
      popular: false,
      relatedQuestions: [33, 37],
    },
    {
      id: 40,
      category: "timeline",
      question: "Có cần thời gian downtime khi deploy không?",
      answer:
        "Zero downtime deployment trong hầu hết cases! Strategies: Blue-green deployment - setup parallel, switch over khi ready, Canary release - deploy to 10% users first, Dark launch - deploy nhưng chưa activate, Scheduled maintenance window (nếu thật sự cần) - 2-4AM weekend, impact < 2 hours, Feature flags - deploy code nhưng turn on features từng bước. 95% deployments zero downtime. Nếu cần downtime thì notify 1 tuần trước + có rollback plan.",
      popular: false,
      relatedQuestions: [35, 37],
    },
  ];

  const popularFAQs = faqs.filter((f) => f.popular);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-8 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3DDAB4]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#7A77FF]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Breadcrumb
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Câu hỏi thường gặp" },
            ]}
          />

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3DDAB4]/10 to-[#7A77FF]/10 rounded-full mb-6">
              <HelpCircle className="w-5 h-5 text-[#3DDAB4]" />
              <span className="text-[#3DDAB4] font-semibold">
                Trung tâm hỗ trợ
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Câu Hỏi Thường Gặp
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Tìm câu trả lời nhanh chóng cho mọi thắc mắc về dịch vụ automation
            </p>

            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#3DDAB4] rounded-full" />
                <span className="font-medium">{faqs.length} câu hỏi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#7A77FF] rounded-full" />
                <span className="font-medium">7 danh mục</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="font-medium">Cập nhật liên tục</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <PopularQuestions popularFAQs={popularFAQs} />

      {/* Main FAQ Section */}
      <section id="faq-section" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Tất Cả Câu Hỏi</h2>
            <p className="text-gray-600 text-lg">
              Tìm câu trả lời chi tiết cho mọi thắc mắc của bạn
            </p>
          </div>
          <FAQContent faqs={faqs} categories={categories} />
        </div>
      </section>
    </div>
  );
}
