"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  GripVertical,
  Trash2,
  Plus,
  Upload,
  Send,
  Bot,
  CheckCircle,
  Mail,
  FileSpreadsheet,
  Users,
  Database,
  BarChart,
  MessageSquare,
  Clock,
  DollarSign,
  Phone,
  ArrowRight,
  Sparkles,
  Target,
  FileText,
  AlertCircle,
  Calendar,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
// import { useAuthStore } from "@/stores/auth.store";
import { usePathname } from "next/navigation";

interface AppConfig {
  [appName: string]: string; // Chỉ lưu string cho trường dữ liệu
}

interface WorkflowStep {
  id: string;
  description: string;
  selectedApps: string[];
  appConfigs: AppConfig;
}

type RequestFormData = {
  name: string;
  phone: string;
  email: string;
  files: File[]; // <-- dùng File của DOM
};

const AVAILABLE_APPS = [
  { name: "Gmail", icon: Mail, color: "from-red-400 to-red-600" },
  {
    name: "Excel",
    icon: FileSpreadsheet,
    color: "from-green-400 to-green-600",
  },
  { name: "CRM", icon: Users, color: "from-blue-400 to-blue-600" },
  {
    name: "Google Drive",
    icon: Upload,
    color: "from-yellow-400 to-yellow-600",
  },
  { name: "Power BI", icon: BarChart, color: "from-purple-400 to-purple-600" },
  { name: "Slack", icon: MessageSquare, color: "from-pink-400 to-pink-600" },
  { name: "SAP", icon: Database, color: "from-indigo-400 to-indigo-600" },
  { name: "Salesforce", icon: Users, color: "from-cyan-400 to-cyan-600" },
];

export default function RequestForm() {
  // const { user } = useAuthStore();
  const [formData, setFormData] = useState<RequestFormData>({
    name: "",
    phone: "",
    email: "",
    files: [],
  });

  const [workflows, setWorkflows] = useState<WorkflowStep[]>([
    {
      id: "1",
      description: "",
      selectedApps: [],
      appConfigs: {},
    },
  ]);

  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [showResults, setShowResults] = useState(false);
  //   const [submissionData, setSubmissionData] = useState<any>(null);

  const addWorkflowStep = () => {
    const newStep: WorkflowStep = {
      id: Date.now().toString(),
      description: "",
      selectedApps: [],
      appConfigs: {},
    };
    setWorkflows([...workflows, newStep]);
  };

  const removeWorkflowStep = (id: string) => {
    if (workflows.length > 1) {
      setWorkflows(workflows.filter((step) => step.id !== id));
    }
  };

  const updateWorkflowDescription = (id: string, description: string) => {
    setWorkflows(
      workflows.map((step) =>
        step.id === id ? { ...step, description } : step
      )
    );
  };

  const toggleApp = (stepId: string, appName: string) => {
    setWorkflows(
      workflows.map((step) => {
        if (step.id === stepId) {
          const selectedApps = step.selectedApps.includes(appName)
            ? step.selectedApps.filter((a) => a !== appName)
            : [...step.selectedApps, appName];

          // Initialize or remove app config
          const newAppConfigs = { ...step.appConfigs };
          if (selectedApps.includes(appName) && !step.appConfigs[appName]) {
            // Initialize với string rỗng
            newAppConfigs[appName] = "";
          } else if (!selectedApps.includes(appName)) {
            // Remove config cho app không được chọn
            delete newAppConfigs[appName];
          }

          return { ...step, selectedApps, appConfigs: newAppConfigs };
        }
        return step;
      })
    );
  };

  const updateAppConfig = (stepId: string, appName: string, value: string) => {
    setWorkflows(
      workflows.map((step) => {
        if (step.id === stepId) {
          return {
            ...step,
            appConfigs: {
              ...step.appConfigs,
              [appName]: value,
            },
          };
        }
        return step;
      })
    );
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    setDraggedItem(id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();

    if (!draggedItem || draggedItem === targetId) return;

    const draggedIndex = workflows.findIndex((step) => step.id === draggedItem);
    const targetIndex = workflows.findIndex((step) => step.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const newWorkflows = [...workflows];
    const [draggedStep] = newWorkflows.splice(draggedIndex, 1);
    newWorkflows.splice(targetIndex, 0, draggedStep);

    setWorkflows(newWorkflows);
    setDraggedItem(null);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    setDraggedItem(null);
    e.dataTransfer.dropEffect = "none";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files ?? []);
    setFormData((prev) => ({ ...prev, files: [...prev.files, ...picked] }));
    e.target.value = ""; // cho phép chọn lại cùng file tên cũ
  };

  const getAppPlaceholder = (appName: string) => {
    const placeholders = {
      Gmail: "VD: Tiêu đề email, File đính kèm, Địa chỉ người gửi",
      Excel: "VD: Mã NV, Tên NV, Ngày công, Lương cơ bản",
      CRM: "VD: Tên khách hàng, Số điện thoại, Email, Trạng thái deal",
      "Google Drive": "VD: Tên file, Thư mục, Người chia sẻ",
      "Power BI": "VD: Dataset, Biểu đồ, Metrics, Filters",
      Slack: "VD: Channel, Message, User, Timestamp",
      SAP: "VD: Module, Transaction code, User ID",
      Salesforce: "VD: Lead, Opportunity, Account, Contact",
    };
    return (
      placeholders[appName as keyof typeof placeholders] ??
      `VD: Trường 1, Trường 2, Trường 3`
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  // const handleConfirmRequest = () => {
  //   if (onSubmitSuccess && submissionData) {
  //     onSubmitSuccess(submissionData);
  //   } else {
  //     // For guest users, navigate to dashboard or show success
  //     toast.success("Yêu cầu đã được xác nhận!", {
  //       description:
  //         "Chúng tôi sẽ bắt đầu triển khai theo timeline đã báo cáo.",
  //     });
  //     if (onClose) onClose();
  //   }
  // };

  const handleRequestSupport = () => {
    toast.success("Yêu cầu tư vấn đã được ghi nhận!", {
      description: "Chuyên viên sẽ liên hệ với bạn trong vòng 30 phút.",
    });
  };

  const renderAppConfig = (stepId: string, appName: string, value: string) => {
    const app = AVAILABLE_APPS.find((a) => a.name === appName);
    if (!app) return null;

    return (
      <div
        key={appName}
        className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gradient-to-r from-gray-50/50 to-blue-50/50 rounded-xl border border-gray-200/30"
      >
        <div className="flex items-center mb-3">
          <app.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 flex-shrink-0" />
          <h5 className="font-medium text-gray-900 text-sm sm:text-base">
            Trường dữ liệu cần thiết - {appName}
          </h5>
        </div>
        <div>
          <Label className="text-xs sm:text-sm text-gray-700 mb-2 block">
            Nhập các trường dữ liệu (phân cách bằng dấu phẩy hoặc xuống dòng)
          </Label>
          <Textarea
            value={value}
            onChange={(e) => updateAppConfig(stepId, appName, e.target.value)}
            placeholder={getAppPlaceholder(appName)}
            rows={3}
            className="rounded-lg border-gray-200 resize-none focus:border-[#7A77FF] focus:ring-[#7A77FF]/20 text-sm"
            autoComplete="off"
            data-1p-ignore
            data-lpignore="true"
          />
          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
            Bạn có thể nhập tự do, sử dụng dấu phẩy hoặc xuống dòng để phân tách
            các trường
          </p>
        </div>
      </div>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate workflow descriptions
    const hasEmptySteps = workflows.some((step) => !step.description.trim());
    if (hasEmptySteps) {
      toast.error("Vui lòng mô tả tất cả các bước trong luồng công việc");
      return;
    }

    // Validate required fields for guest users
    // if (!user) {
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin liên hệ");
      return;
    }
    // }

    // Start analyzing
    setIsSending(true);
    setShowResults(false);

    // Simulate AI analysis
    setTimeout(() => {
      // const data = {
      //   id: `REQ-${Date.now()}`,
      //   title: workflows[0]?.description || "Yêu cầu tự động hóa",
      //   workflows: workflows,
      //   submittedAt: new Date().toISOString(),
      //   contactInfo: {
      //     name: formData.name,
      //     phone: formData.phone,
      //     email: formData.email,
      //   },
      //   files: formData.files,
      // };

      //   setSubmissionData(data);
      setIsSending(false);
      setShowResults(true);

      toast.success("Phân tích hoàn tất!", {
        description: "Báo giá và timeline đã sẵn sàng.",
      });
    }, 3000);
  };

  return (
    <>
      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
          -webkit-text-fill-color: inherit !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
      <div className="bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto p-2 sm:p-4 lg:p-6 py-4 sm:py-6 lg:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="backdrop-blur-xl bg-white/80 border border-white/30 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#3DDAB4]/10 to-[#7A77FF]/10 border-b border-white/20 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
                        Tạo yêu cầu tự động hóa
                      </CardTitle>
                      <p className="text-gray-600 mt-1 text-sm sm:text-base">
                        Mô tả luồng công việc theo từng bước với Flow Builder
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 lg:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 sm:space-y-8"
                  autoComplete="off"
                  data-form="request-form"
                >
                  {/* Personal Information - Only for guests */}
                  {/* {!user && ( */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-gray-200/50 pb-4 sm:pb-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                        Thông tin liên hệ
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        <div>
                          <Label
                            htmlFor="name"
                            className="text-gray-700 font-medium"
                          >
                            Họ tên *
                          </Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            className="mt-1 rounded-xl border-gray-200/50 focus:border-[#7A77FF] focus:ring-[#7A77FF]/20 bg-white/50"
                            placeholder="Nhập họ tên của bạn"
                            autoComplete="off"
                            data-1p-ignore
                            data-lpignore="true"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="phone"
                            className="text-gray-700 font-medium"
                          >
                            Số điện thoại *
                          </Label>
                          <Input
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                            className="mt-1 rounded-xl border-gray-200/50 focus:border-[#7A77FF] focus:ring-[#7A77FF]/20 bg-white/50"
                            placeholder="0987654321"
                            autoComplete="off"
                            data-1p-ignore
                            data-lpignore="true"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="email"
                            className="text-gray-700 font-medium"
                          >
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            className="mt-1 rounded-xl border-gray-200/50 focus:border-[#7A77FF] focus:ring-[#7A77FF]/20 bg-white/50"
                            placeholder="example@company.com"
                            autoComplete="off"
                            data-1p-ignore
                            data-lpignore="true"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  {/* )} */}

                  {/* Flow Builder */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        Flow Builder - Mô tả luồng công việc *
                      </h3>
                      <Button
                        type="button"
                        onClick={addWorkflowStep}
                        className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white rounded-xl shadow-md self-start sm:self-auto"
                        size="sm"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Thêm bước
                      </Button>
                    </div>

                    <div className="space-y-6">
                      <AnimatePresence>
                        {workflows.map((step, index) => (
                          <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            draggable
                            onDragStart={(e) =>
                              handleDragStart(
                                e as unknown as React.DragEvent<HTMLDivElement>,
                                step.id
                              )
                            }
                            onDragOver={(e) =>
                              handleDragOver(e as React.DragEvent)
                            }
                            onDrop={(e) =>
                              handleDrop(e as React.DragEvent, step.id)
                            }
                            onDragEnd={(e) =>
                              handleDragEnd(e as unknown as React.DragEvent)
                            }
                            className={`group border border-gray-200/50 rounded-2xl p-4 sm:p-6 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-200 ${
                              draggedItem === step.id
                                ? "opacity-50 scale-95"
                                : ""
                            }`}
                          >
                            <div className="flex items-start space-x-3 sm:space-x-4">
                              {/* Drag Handle */}
                              <div className="flex-shrink-0 pt-2">
                                <div className="flex flex-col items-center space-y-2">
                                  <GripVertical className="w-5 h-5 text-gray-400 cursor-grab hover:text-[#7A77FF] transition-colors" />
                                  <div className="w-8 h-8 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">
                                      {index + 1}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex-1 space-y-3 sm:space-y-4">
                                {/* Step Title */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                                    Bước {index + 1}
                                  </h4>
                                  {workflows.length > 1 && (
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="sm"
                                      onClick={() =>
                                        removeWorkflowStep(step.id)
                                      }
                                      className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all text-xs sm:text-sm self-start"
                                    >
                                      <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                      <span className="hidden sm:inline">
                                        Xóa
                                      </span>
                                    </Button>
                                  )}
                                </div>

                                {/* Step Description */}
                                <div>
                                  <Label className="text-gray-700 font-medium mb-2 block text-sm sm:text-base">
                                    Mô tả công việc *
                                  </Label>
                                  <Textarea
                                    required
                                    rows={2}
                                    value={step.description}
                                    onChange={(e) =>
                                      updateWorkflowDescription(
                                        step.id,
                                        e.target.value
                                      )
                                    }
                                    placeholder="VD: Thu thập dữ liệu bán hàng từ CRM và tạo báo cáo Excel hàng tháng..."
                                    className="rounded-xl border-gray-200/50 focus:border-[#7A77FF] focus:ring-[#7A77FF]/20 bg-white/70 resize-none text-sm sm:text-base"
                                    autoComplete="off"
                                    data-1p-ignore
                                    data-lpignore="true"
                                  />
                                </div>

                                {/* App Selection */}
                                <div>
                                  <Label className="text-gray-700 font-medium mb-3 block text-sm sm:text-base">
                                    Chọn ứng dụng liên quan (tùy chọn)
                                  </Label>
                                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                                    {AVAILABLE_APPS.map((app) => (
                                      <button
                                        key={app.name}
                                        type="button"
                                        onClick={() =>
                                          toggleApp(step.id, app.name)
                                        }
                                        className={`flex items-center justify-center px-2 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 min-w-0 text-center ${
                                          step.selectedApps.includes(app.name)
                                            ? `bg-gradient-to-r ${app.color} text-white shadow-md`
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                      >
                                        <app.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                                        <span className="truncate">
                                          {app.name}
                                        </span>
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                {/* App Configurations */}
                                {step.selectedApps.map((appName) =>
                                  renderAppConfig(
                                    step.id,
                                    appName,
                                    step.appConfigs[appName] || ""
                                  )
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* File uploade */}
                  {!(usePathname() === "/") && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <Label className="text-gray-700 font-medium text-sm sm:text-base">
                          Upload file mẫu (tùy chọn)
                        </Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6 text-center hover:border-[#3DDAB4] hover:bg-[#3DDAB4]/5 transition-all duration-300 cursor-pointer group">
                          <label
                            htmlFor="uploadFile"
                            className="cursor-pointer"
                          >
                            <div className="flex flex-col items-center justify-center py-4 sm:pt-5 sm:pb-6">
                              <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-[#3DDAB4] mx-auto mb-2 transition-colors" />
                              <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700">
                                <span className="font-medium text-[#3DDAB4]">
                                  Chọn file
                                </span>{" "}
                                <span className="hidden sm:inline">
                                  hoặc kéo thả vào đây
                                </span>
                              </p>
                              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                Excel, PDF, Word, hình ảnh (tối đa 10MB)
                              </p>
                            </div>
                            <input
                              id="uploadFile"
                              type="file"
                              multiple
                              className="hidden"
                              accept=".xlsx,.xls,.csv,.pdf,.doc,.docx"
                              onChange={handleFileChange}
                              title="Updload file mẫu"
                            />
                          </label>
                        </div>
                        <AnimatePresence initial={false} mode="popLayout">
                          {(formData.files ?? []).map((file, index) => (
                            <motion.div
                              key={`${file.name}-${file.size}-${file.lastModified}`}
                              layout
                              initial={{
                                opacity: 0,
                                y: 8,
                                scale: 0.98,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                y: -8,
                                scale: 0.98,
                                height: 0,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                                mass: 0.6,
                              }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3 p-3 bg-white/70 rounded-xl border border-gray-200/50">
                                <div className="flex items-center justify-between gap-2">
                                  <div className="flex items-center min-w-0 flex-1">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-gray-700 truncate">
                                      {file.name}
                                    </span>
                                  </div>

                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                      setFormData((prev) => ({
                                        ...prev,
                                        files: prev.files.filter(
                                          (_, i) => i !== index
                                        ),
                                      }))
                                    }
                                    className="text-red-500 hover:text-red-700 rounded-xl p-1 sm:p-2 flex-shrink-0"
                                  >
                                    <motion.span whileTap={{ scale: 0.9 }}>
                                      <X className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </motion.span>
                                  </Button>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center pt-4 sm:pt-6 border-t border-gray-200/50"
                  >
                    <motion.button
                      className="relative overflow-hidden bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white text-sm sm:text-lg px-6 sm:px-12 py-3 sm:py-4 rounded-2xl shadow-lg transition-all duration-300 disabled:opacity-50 w-full sm:w-auto"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(122, 119, 255, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      disabled={isSending}
                      type="submit"
                    >
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] opacity-0 blur-xl"
                        whileHover={{ opacity: 0.7 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />

                      <span className="relative z-10 inline-flex items-center justify-center font-bold">
                        {isSending ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                            >
                              <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                            </motion.div>
                            <span>Đang gửi...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            <span className="hidden sm:inline">
                              Gửi yêu cầu tự động hóa
                            </span>
                            <span className="sm:hidden">Gửi yêu cầu</span>
                          </>
                        )}
                      </span>
                    </motion.button>
                  </motion.div>

                  {/* Terms */}
                  <p className="text-xs text-gray-500 text-center px-4 leading-relaxed">
                    Bằng việc gửi yêu cầu, bạn đồng ý với{" "}
                    <a href="#" className="text-[#7A77FF] hover:underline">
                      Điều khoản dịch vụ
                    </a>{" "}
                    của chúng tôi
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}
