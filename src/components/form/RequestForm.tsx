"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  GripVertical,
  Trash2,
  Plus,
  Mail,
  Users,
  Phone,
  Sparkles,
  Building2,
  User,
} from "lucide-react";
import { servicesAPI } from "@/lib/api";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAuthStore } from "@/stores/auth.store";
import { WorkflowStep } from "@/types";

interface RequestFormProps {
  serviceId?: string;
}

const FUNCTION_OPTIONS = [
  "Admin (Quản trị hệ thống)",
  "Sale (Bán hàng)",
  "Marketing",
  "Kế toán",
  "Chăm sóc khách hàng",
  "Developer (Lập trình viên)",
  "Quản lý nhân sự (HR)",
  "Kho vận",
  "Báo cáo & Thống kê",
  "Khác (vui lòng ghi rõ)",
];

export default function RequestForm({
  serviceId = "a2ecedf1-f537-4c9e-8c47-7e4634a671c9",
}: RequestFormProps) {
  const { user } = useAuthStore();
  const pathname = usePathname();
  const router = useRouter();
  const isDashboard = pathname.startsWith("/dashboard");
  const [formData, setFormData] = useState({
    company_name: "",
    contact_name: "",
    contact_phone: "",
    zalo_number: "",
    contact_email: "",
    system_users_count: "",
    required_functions: [] as string[],
    other_function_description: "",
    special_requirements: "",
  });

  const [workflows, setWorkflows] = useState<WorkflowStep[]>([
    {
      id: "1",
      description: "",
    },
  ]);

  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        company_name: user.company || "",
        contact_name: user.full_name || "",
        contact_email: user.email || "",
        contact_phone: user.phone_number || "",
      }));
    }
  }, [user]);

  const addWorkflowStep = () => {
    const newStep: WorkflowStep = {
      id: Date.now().toString(),
      description: "",
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

  const handleFunctionToggle = (func: string) => {
    setFormData((prev) => ({
      ...prev,
      required_functions: prev.required_functions.includes(func)
        ? prev.required_functions.filter((f) => f !== func)
        : [...prev.required_functions, func],
    }));
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

  const stringifyWorkflows = (steps: WorkflowStep[]) =>
    steps
      .map((s, i) => `${i + 1}. ${s.description?.trim() || ""}`)
      .filter((line) => line.replace(/^\d+\.\s*/, "").length > 0) // bỏ dòng trống
      .join("\n");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const workflow_description = stringifyWorkflows(workflows);
      const response = await servicesAPI.createRequest({
        service_id: serviceId,
        ...formData,
        workflow_description,
        system_users_count: parseInt(formData.system_users_count),
      });

      // Redirect to project page if project_id is returned
      if (response.data.project_id) {
        router.push(`/dashboard/customer/projects/${response.data.project_id}`);
      } else {
        setSuccess(true);
        // Reset form
        setFormData({
          company_name: "",
          contact_name: "",
          contact_phone: "",
          zalo_number: "",
          contact_email: "",
          system_users_count: "",
          required_functions: [],
          other_function_description: "",
          special_requirements: "",
        });
        setWorkflows([{ id: "1", description: "" }]);
      }
    } catch (err) {
      const axiosErr = err as AxiosError<{ detail?: string }>;
      setError(
        axiosErr.response?.data?.detail ||
          axiosErr.message ||
          "Có lỗi xảy ra, vui lòng thử lại"
      );
    } finally {
      setSubmitting(false);
    }
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
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-6 sm:p-10 border-2 border-indigo-200 shadow-2xl ${
          isDashboard ? "my-4" : "max-w-7xl mx-auto my-8"
        }`}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl -z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 backdrop-blur-3xl rounded-full blur-3xl -z-0"></div>

        <div className="relative z-10">
          {/* Header Section */}
          <div className="text-center mb-8 pb-6 border-b-2 border-indigo-200/50">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Đăng ký tư vấn miễn phí
            </h4>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Điền thông tin chi tiết để chúng tôi tư vấn giải pháp phù hợp nhất
              cho doanh nghiệp của bạn
            </p>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 text-green-800 px-6 py-5 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-lg">Đăng ký thành công!</p>
              </div>
              <p className="text-sm mb-3 ml-13">
                Chúng tôi sẽ liên hệ với bạn trong vòng 24h. Cảm ơn bạn đã tin
                tưởng Operis!
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="text-sm underline hover:no-underline text-green-700 font-medium ml-13"
              >
                Đăng ký dịch vụ khác →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section 1: Thông tin liên hệ */}
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border-2 border-white/80 shadow-lg">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] rounded-lg text-white font-bold text-sm shadow-md">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg">
                      Thông tin liên hệ
                    </h5>
                    <p className="text-xs text-gray-500">
                      Thông tin cơ bản về công ty và người liên hệ
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      Tên công ty <span className="text-red-500">*</span>
                    </Label>
                    <input
                      type="text"
                      required
                      value={formData.company_name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company_name: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 shadow-sm"
                      placeholder="VD: Công ty TNHH ABC"
                    />
                  </div>

                  {/* Contact Name */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-indigo-600" />
                      Tên người yêu cầu <span className="text-red-500">*</span>
                    </Label>
                    <input
                      type="text"
                      required
                      value={formData.contact_name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contact_name: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 shadow-sm"
                      placeholder="VD: Nguyễn Văn A"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-600" />
                      Số điện thoại <span className="text-red-500">*</span>
                    </Label>
                    <input
                      type="tel"
                      required
                      value={formData.contact_phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contact_phone: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 shadow-sm"
                      placeholder="VD: 0901234567"
                    />
                  </div>

                  {/* Zalo */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-blue-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 2.066.629 3.982 1.706 5.571L2 22l4.429-1.706A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                      </svg>
                      Số Zalo <span className="text-red-500">*</span>
                    </Label>
                    <input
                      type="tel"
                      required
                      value={formData.zalo_number}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          zalo_number: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 shadow-sm"
                      placeholder="VD: 0901234567"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-purple-600" />
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <input
                      type="email"
                      required
                      value={formData.contact_email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contact_email: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 shadow-sm"
                      placeholder="VD: example@company.com"
                    />
                  </div>

                  {/* System Users Count */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Users className="w-4 h-4 text-orange-600" />
                      Số người sử dụng <span className="text-red-500">*</span>
                    </Label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.system_users_count}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          system_users_count: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 shadow-sm"
                      placeholder="VD: 20"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Chức năng & Yêu cầu */}
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border-2 border-white/80 shadow-lg">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] rounded-lg text-white font-bold text-sm shadow-md">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg">
                      Chức năng & Yêu cầu đặc biệt
                    </h5>
                    <p className="text-xs text-gray-500">
                      Xác định các tính năng cần thiết cho hệ thống
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Required Functions */}
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#3DDAB4] rounded-full"></div>
                      Chức năng cần có <span className="text-red-500">*</span>
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {FUNCTION_OPTIONS.map((func) => (
                        <motion.label
                          key={func}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 select-none ${
                            formData.required_functions.includes(func)
                              ? "border-[#7A77FF] bg-gradient-to-br from-[#3DDAB4]/20 to-[#7A77FF]/20 shadow-md"
                              : "border-gray-200 bg-white/60 hover:border-[#7A77FF]/50 hover:shadow-sm"
                          }`}
                        >
                          <div className="relative flex items-center justify-center">
                            <input
                              type="checkbox"
                              checked={formData.required_functions.includes(
                                func
                              )}
                              onChange={() => handleFunctionToggle(func)}
                              className="sr-only"
                              title="Checkbox"
                            />
                            <motion.div
                              animate={{
                                scale: formData.required_functions.includes(
                                  func
                                )
                                  ? 1
                                  : 1,
                              }}
                              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                                formData.required_functions.includes(func)
                                  ? "border-[#7A77FF] bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] shadow-sm"
                                  : "border-gray-300 bg-white"
                              }`}
                            >
                              <AnimatePresence>
                                {formData.required_functions.includes(func) && (
                                  <motion.svg
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-3.5 h-3.5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </motion.svg>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          </div>
                          <span
                            className={`text-sm flex-1 ${
                              formData.required_functions.includes(func)
                                ? "text-gray-900 font-medium"
                                : "text-gray-700"
                            }`}
                          >
                            {func}
                          </span>
                          {formData.required_functions.includes(func) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] rounded-full flex items-center justify-center shadow-lg"
                            >
                              <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </motion.div>
                          )}
                        </motion.label>
                      ))}
                    </div>
                    {formData.required_functions.length === 0 && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Vui lòng chọn ít nhất 1 chức năng
                      </p>
                    )}

                    {/* Other Function Description */}
                    <AnimatePresence>
                      {formData.required_functions.includes(
                        "Khác (vui lòng ghi rõ)"
                      ) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          <Label className="text-sm font-semibold text-gray-700">
                            Vui lòng ghi rõ chức năng khác{" "}
                            <span className="text-red-500">*</span>
                          </Label>
                          <input
                            type="text"
                            required
                            value={formData.other_function_description}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                other_function_description: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 shadow-sm"
                            placeholder="VD: Quản lý vận chuyển, Tích hợp ERP bên thứ 3..."
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Special Requirements */}
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#3DDAB4] rounded-full"></div>
                      Những yêu cầu đặc biệt{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <p className="text-xs text-gray-500">
                      VD: Sử dụng hình ảnh là chính, cần tính năng upload ảnh
                      hàng loạt, tích hợp camera AI...
                    </p>
                    <Textarea
                      required
                      rows={4}
                      value={formData.special_requirements}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          special_requirements: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 shadow-sm resize-none"
                      placeholder="Mô tả chi tiết các yêu cầu đặc biệt của bạn..."
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Luồng công việc */}
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border-2 border-white/80 shadow-lg">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] rounded-lg text-white font-bold text-sm shadow-md">
                    3
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-gray-900 text-lg">
                      Luồng công việc chi tiết
                    </h5>
                    <p className="text-xs text-gray-500">
                      Mô tả từng bước trong quy trình làm việc của bạn
                    </p>
                  </div>
                  <Button
                    type="button"
                    onClick={addWorkflowStep}
                    className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#3DDAB4]/90 hover:to-[#7A77FF]/90 text-white rounded-xl shadow-md self-start sm:self-auto whitespace-nowrap"
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Thêm bước
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-[#3DDAB4]/10 to-[#7A77FF]/10 border border-[#7A77FF]/30 rounded-xl p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium mb-1">
                        💡 Mẹo nhỏ:
                      </p>
                      <p className="text-xs text-gray-700">
                        Càng chi tiết càng tốt! Kéo thả để sắp xếp lại thứ tự
                        các bước. Mô tả cụ thể từng hành động, ai làm gì, dùng
                        công cụ/phần mềm nào.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
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
                        onDragOver={(e) => handleDragOver(e as React.DragEvent)}
                        onDrop={(e) =>
                          handleDrop(e as React.DragEvent, step.id)
                        }
                        onDragEnd={(e) =>
                          handleDragEnd(e as unknown as React.DragEvent)
                        }
                        className={`group relative bg-white/90 backdrop-blur-sm border-2 border-[#7A77FF]/20 rounded-2xl p-5 hover:shadow-xl hover:border-[#7A77FF]/40 transition-all duration-200 ${
                          draggedItem === step.id
                            ? "opacity-50 scale-95 border-[#7A77FF]/60"
                            : ""
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          {/* Drag Handle & Number */}
                          <div className="flex-shrink-0 flex flex-col items-center gap-2">
                            <GripVertical className="w-5 h-5 text-gray-400 cursor-grab active:cursor-grabbing hover:text-[#7A77FF] transition-colors" />
                            <div className="relative">
                              <div className="w-10 h-10 bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold">
                                  {index + 1}
                                </span>
                              </div>
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                            </div>
                          </div>

                          <div className="flex-1 space-y-3">
                            {/* Step Header */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-900">
                                  Bước {index + 1}
                                </span>
                                <span className="text-xs px-2 py-0.5 bg-[#7A77FF]/10 text-[#7A77FF] rounded-full font-medium">
                                  {step.description
                                    ? "✓ Hoàn thành"
                                    : "Chưa điền"}
                                </span>
                              </div>
                              {workflows.length > 1 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeWorkflowStep(step.id)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all"
                                >
                                  <Trash2 className="w-4 h-4 mr-1" />
                                  <span className="hidden sm:inline">Xóa</span>
                                </Button>
                              )}
                            </div>

                            {/* Step Description */}
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
                              className="w-full px-4 py-3 bg-white border-2 border-[#7A77FF]/20 rounded-xl focus:ring-2 focus:ring-[#7A77FF] focus:border-[#7A77FF] transition-all duration-200 hover:border-[#7A77FF]/40 shadow-sm resize-none"
                              autoComplete="off"
                              data-1p-ignore
                              data-lpignore="true"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="bg-gradient-to-br from-[#3DDAB4]/20 to-[#7A77FF]/25 rounded-2xl p-6 border-2 border-[#7A77FF]/40 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-900">
                    Tiến độ hoàn thành form
                  </span>
                  <span className="text-sm font-bold text-[#7A77FF] bg-white/80 px-3 py-1 rounded-full shadow-sm">
                    {
                      [
                        formData.company_name &&
                          formData.contact_name &&
                          formData.contact_phone &&
                          formData.zalo_number &&
                          formData.contact_email &&
                          formData.system_users_count,
                        formData.required_functions.length > 0 &&
                          formData.special_requirements,
                        workflows.every((w) => w.description),
                      ].filter(Boolean).length
                    }{" "}
                    / 3 phần
                  </span>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 space-y-1.5">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 shadow-sm ${
                        formData.company_name &&
                        formData.contact_name &&
                        formData.contact_phone &&
                        formData.zalo_number &&
                        formData.contact_email &&
                        formData.system_users_count
                          ? "bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] shadow-[#7A77FF]/20"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    <p className="text-xs text-gray-600 text-center">
                      Thông tin
                    </p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 shadow-sm ${
                        formData.required_functions.length > 0 &&
                        formData.special_requirements
                          ? "bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] shadow-[#7A77FF]/20"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    <p className="text-xs text-gray-600 text-center">
                      Chức năng
                    </p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 shadow-sm ${
                        workflows.every((w) => w.description)
                          ? "bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] shadow-[#7A77FF]/20"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    <p className="text-xs text-gray-600 text-center">
                      Luồng việc
                    </p>
                  </div>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 text-red-700 px-5 py-4 rounded-xl text-sm flex items-center gap-3 shadow-md"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={
                  submitting || formData.required_functions.length === 0
                }
                whileHover={{ scale: submitting ? 1 : 1.02 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
                className="relative w-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white py-5 rounded-2xl font-semibold hover:from-[#3DDAB4]/90 hover:to-[#7A77FF]/90 transition-all duration-200 shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center gap-3">
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span className="text-lg">Đang gửi đăng ký...</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      <span className="text-lg">Gửi đăng ký ngay</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
