"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { toast } from "sonner";
import { servicesAPI } from "../../lib/api";
import {
  ArrowLeft,
  FileText,
  Sparkles,
  Users,
  DollarSign,
  Settings,
  Plus,
  CheckCircle,
  Star,
  Zap,
  Clock,
  X,
  Save,
} from "lucide-react";
import { Service } from "@/types";

interface ServiceFormPageProps {
  service?: Service;
  onBack: () => void;
  onSuccess: () => void;
}

export default function ServiceFormPage({
  service,
  onBack,
  onSuccess,
}: ServiceFormPageProps) {
  const [activeTab, setActiveTab] = useState("basic");
  const [formData, setFormData] = useState<Partial<Service>>({
    name: service?.name || "",
    slug: service?.slug || "",
    category: service?.category || "",
    short_description: service?.short_description || "",
    full_description: service?.full_description || "",
    key_features: service?.key_features || [],
    differentiators: service?.differentiators || [],
    process_stages: service?.process_stages || [],
    team_structure: service?.team_structure || {},
    estimated_team_size: service?.estimated_team_size || 1,
    estimated_duration_min: service?.estimated_duration_min || 0,
    estimated_duration_max: service?.estimated_duration_max || 0,
    price_range_min: service?.price_range_min || 0,
    price_range_max: service?.price_range_max || 0,
    icon: service?.icon || "briefcase",
    thumbnail: service?.thumbnail || "",
    gallery: service?.gallery || [],
    technologies: service?.technologies || [],
    is_active: service?.is_active ?? true,
    is_featured: service?.is_featured ?? false,
    // order: service?.order || 0,
  });

  const [newFeature, setNewFeature] = useState("");
  const [newDifferentiator, setNewDifferentiator] = useState("");
  const [newStage, setNewStage] = useState("");
  const [newTech, setNewTech] = useState("");
  const [teamRole, setTeamRole] = useState("");
  const [teamCount, setTeamCount] = useState("1");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (service?.id) {
        // await servicesAPI.update(service.id, formData);
        toast.success("Cập nhật dịch vụ thành công!");
      } else {
        await servicesAPI.create(formData);
        toast.success("Thêm dịch vụ thành công!");
      }
      onSuccess();
      onBack();
    } catch (error) {
      toast.error("Có lỗi xảy ra!");
    }
  };

  const addToArray = (
    field: keyof Service,
    value: string,
    setter: (v: string) => void
  ) => {
    if (!value.trim()) return;
    setFormData({
      ...formData,
      [field]: [...(formData[field] as string[]), value.trim()],
    });
    setter("");
  };

  const removeFromArray = (field: keyof Service, index: number) => {
    setFormData({
      ...formData,
      [field]: (formData[field] as string[]).filter((_, i) => i !== index),
    });
  };

  const addTeamMember = () => {
    if (!teamRole.trim() || !teamCount) return;
    setFormData({
      ...formData,
      team_structure: {
        ...formData.team_structure,
        [teamRole.trim()]: parseInt(teamCount),
      },
    });
    setTeamRole("");
    setTeamCount("1");
  };

  const removeTeamMember = (role: string) => {
    const newTeam = { ...formData.team_structure };
    delete newTeam[role];
    setFormData({
      ...formData,
      team_structure: newTeam,
    });
  };

  const tabs = [
    {
      id: "basic",
      label: "Cơ bản",
      icon: FileText,
      gradient: "from-blue-600 to-blue-500",
    },
    {
      id: "features",
      label: "Tính năng",
      icon: Sparkles,
      gradient: "from-purple-600 to-pink-500",
    },
    {
      id: "team",
      label: "Đội ngũ",
      icon: Users,
      gradient: "from-green-600 to-emerald-500",
    },
    {
      id: "pricing",
      label: "Giá & Thời gian",
      icon: DollarSign,
      gradient: "from-orange-600 to-amber-500",
    },
    {
      id: "settings",
      label: "Cài đặt",
      icon: Settings,
      gradient: "from-gray-600 to-slate-500",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 -my-6 -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Header - Glass morphism style */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between max-w-8xl mx-auto">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={onBack}
                className="hover:bg-gray-100/80 transition-all hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {service ? "Chỉnh sửa dịch vụ" : "Thêm dịch vụ mới"}
                  </h1>
                  {service && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      Đang chỉnh sửa
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  {service
                    ? `Cập nhật thông tin cho "${service.name}"`
                    : "Điền đầy đủ thông tin để tạo dịch vụ mới"}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={onBack}
                className="border-2 hover:bg-gray-50 transition-all hover:scale-105"
              >
                Hủy
              </Button>
              <Button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 hover:from-blue-700 hover:via-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Save className="w-4 h-4 mr-2" />
                {service ? "Cập nhật" : "Thêm mới"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Modern pill design */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-gray-200/50">
        <div className="px-8 py-5">
          <div className="max-w-8xl mx-auto">
            <div className="flex gap-2 bg-gray-100 p-1.5 rounded-xl w-fit">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-white text-blue-600 shadow-md"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-8">
        <div className="max-w-8xl mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Basic Tab */}
            {activeTab === "basic" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                {/* Header Card */}
                <div className="bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-purple-500/10 border-2 border-blue-200/50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Thông tin cơ bản
                      </h3>
                      <p className="text-sm text-gray-600">
                        Các trường đánh dấu{" "}
                        <span className="text-red-500">*</span> là bắt buộc
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm text-gray-700">
                          Tên dịch vụ <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="VD: Phát triển ứng dụng web"
                          className="border-2 focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="slug" className="text-sm text-gray-700">
                          Slug <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="slug"
                          value={formData.slug}
                          onChange={(e) =>
                            setFormData({ ...formData, slug: e.target.value })
                          }
                          placeholder="VD: phat-trien-ung-dung-web"
                          className="border-2 focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="category"
                        className="text-sm text-gray-700"
                      >
                        Danh mục <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="category"
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        placeholder="VD: Enterprise Software"
                        className="border-2 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="short_description"
                        className="text-sm text-gray-700"
                      >
                        Mô tả ngắn <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="short_description"
                        value={formData.short_description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            short_description: e.target.value,
                          })
                        }
                        rows={3}
                        placeholder="Mô tả ngắn gọn về dịch vụ..."
                        className="border-2 focus:border-blue-500 transition-colors resize-none"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="full_description"
                        className="text-sm text-gray-700"
                      >
                        Mô tả đầy đủ <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="full_description"
                        value={formData.full_description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            full_description: e.target.value,
                          })
                        }
                        rows={8}
                        placeholder="Mô tả chi tiết về dịch vụ, lợi ích, và giá trị mang lại..."
                        className="border-2 focus:border-blue-500 transition-colors resize-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === "features" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                {/* Header Card */}
                <div className="bg-gradient-to-r from-purple-500/10 via-pink-400/10 to-purple-500/10 border-2 border-purple-200/50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Tính năng & Điểm nổi bật
                      </h3>
                      <p className="text-sm text-gray-600">
                        Thêm các tính năng chính và điểm khác biệt của dịch vụ
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {/* Key Features */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <Label className="text-base font-bold">
                        Tính năng chính
                      </Label>
                    </div>
                    <div className="flex gap-3 mb-4">
                      <Input
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        placeholder="Nhập tính năng..."
                        className="flex-1 border-2 focus:border-blue-500 transition-colors"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addToArray(
                              "key_features",
                              newFeature,
                              setNewFeature
                            );
                          }
                        }}
                      />
                      <Button
                        type="button"
                        onClick={() =>
                          addToArray("key_features", newFeature, setNewFeature)
                        }
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Thêm
                      </Button>
                    </div>
                    {formData.key_features &&
                      formData.key_features.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {formData.key_features.map((feature, idx: number) => (
                            <span
                              key={idx}
                              className="group px-4 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 text-blue-700 rounded-xl text-sm flex items-center gap-2 hover:shadow-md transition-all"
                            >
                              <CheckCircle className="w-4 h-4" />
                              {typeof feature === "string"
                                ? feature
                                : feature.title}
                              <button
                                type="button"
                                onClick={() =>
                                  removeFromArray("key_features", idx)
                                }
                                className="ml-1 hover:text-red-600 transition-colors"
                                title="Xoá tính năng"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                  </div>

                  {/* Differentiators */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-lg flex items-center justify-center">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <Label className="text-base font-bold">
                        Điểm khác biệt
                      </Label>
                    </div>
                    <div className="flex gap-3 mb-4">
                      <Input
                        value={newDifferentiator}
                        onChange={(e) => setNewDifferentiator(e.target.value)}
                        placeholder="Nhập điểm khác biệt..."
                        className="flex-1 border-2 focus:border-yellow-500 transition-colors"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addToArray(
                              "differentiators",
                              newDifferentiator,
                              setNewDifferentiator
                            );
                          }
                        }}
                      />
                      <Button
                        type="button"
                        onClick={() =>
                          addToArray(
                            "differentiators",
                            newDifferentiator,
                            setNewDifferentiator
                          )
                        }
                        className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Thêm
                      </Button>
                    </div>
                    {formData.differentiators &&
                      formData.differentiators.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {formData.differentiators.map((diff, idx: number) => (
                            <span
                              key={idx}
                              className="group px-4 py-2.5 bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 text-yellow-700 rounded-xl text-sm flex items-center gap-2 hover:shadow-md transition-all"
                            >
                              <Star className="w-4 h-4" />
                              {diff}
                              <button
                                type="button"
                                onClick={() =>
                                  removeFromArray("differentiators", idx)
                                }
                                className="ml-1 hover:text-red-600 transition-colors"
                                title="Xoá điểm khác biệt"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                  </div>

                  {/* Process Stages */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <Label className="text-base font-bold">
                        Quy trình thực hiện
                      </Label>
                    </div>
                    <div className="flex gap-3 mb-4">
                      <Input
                        value={newStage}
                        onChange={(e) => setNewStage(e.target.value)}
                        placeholder="Nhập giai đoạn..."
                        className="flex-1 border-2 focus:border-purple-500 transition-colors"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addToArray("process_stages", newStage, setNewStage);
                          }
                        }}
                      />
                      <Button
                        type="button"
                        onClick={() =>
                          addToArray("process_stages", newStage, setNewStage)
                        }
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Thêm
                      </Button>
                    </div>
                    {formData.process_stages &&
                      formData.process_stages.length > 0 && (
                        <div className="grid grid-cols-2 gap-4">
                          {formData.process_stages.map((stage, idx: number) => (
                            <div
                              key={idx}
                              className="relative bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5 group hover:shadow-lg transition-all"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-7 h-7 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white text-xs">
                                  {idx + 1}
                                </div>
                                <span className="text-xs text-purple-600">
                                  Bước {idx + 1}
                                </span>
                              </div>
                              <div className="text-sm text-gray-900 pr-8">
                                {stage.name}
                              </div>
                              <button
                                type="button"
                                onClick={() =>
                                  removeFromArray("process_stages", idx)
                                }
                                className="absolute top-3 right-3 text-purple-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all"
                                title="Xoá giai đoạn"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                  </div>

                  {/* Technologies */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <Label className="text-base font-bold">
                        Công nghệ sử dụng
                      </Label>
                    </div>
                    <div className="flex gap-3 mb-4">
                      <Input
                        value={newTech}
                        onChange={(e) => setNewTech(e.target.value)}
                        placeholder="Nhập công nghệ..."
                        className="flex-1 border-2 focus:border-cyan-500 transition-colors"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addToArray("technologies", newTech, setNewTech);
                          }
                        }}
                      />
                      <Button
                        type="button"
                        onClick={() =>
                          addToArray("technologies", newTech, setNewTech)
                        }
                        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Thêm
                      </Button>
                    </div>
                    {formData.technologies &&
                      formData.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {formData.technologies.map((tech, idx: number) => (
                            <span
                              key={idx}
                              className="group px-4 py-2.5 bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 text-cyan-700 rounded-xl text-sm flex items-center gap-2 hover:shadow-md transition-all"
                            >
                              <Zap className="w-4 h-4" />
                              {tech}
                              <button
                                type="button"
                                onClick={() =>
                                  removeFromArray("technologies", idx)
                                }
                                className="ml-1 hover:text-red-600 transition-colors"
                                title="Xoá công nghệ"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            )}

            {/* Team Tab */}
            {activeTab === "team" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                {/* Header Card */}
                <div className="bg-gradient-to-r from-green-500/10 via-emerald-400/10 to-green-500/10 border-2 border-green-200/50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Cấu trúc đội ngũ
                      </h3>
                      <p className="text-sm text-gray-600">
                        Định nghĩa quy mô và cấu trúc đội ngũ thực hiện
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Team Size */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                    <div className="space-y-4">
                      <Label
                        htmlFor="estimated_team_size"
                        className="text-base font-bold"
                      >
                        Quy mô đội ngũ (người)
                      </Label>
                      <Input
                        id="estimated_team_size"
                        type="number"
                        value={formData.estimated_team_size}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            estimated_team_size: parseInt(e.target.value) || 0,
                          })
                        }
                        placeholder="VD: 10"
                        className="border-2 focus:border-green-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Team Structure */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                    <Label className="text-base font-bold mb-6 block">
                      Chi tiết cấu trúc đội ngũ
                    </Label>
                    <div className="flex gap-3 mb-6">
                      <Input
                        value={teamRole}
                        onChange={(e) => setTeamRole(e.target.value)}
                        placeholder="Vai trò (VD: Frontend Developer)"
                        className="flex-1 border-2 focus:border-green-500 transition-colors"
                      />
                      <Input
                        type="number"
                        value={teamCount}
                        onChange={(e) => setTeamCount(e.target.value)}
                        placeholder="Số lượng"
                        className="w-32 border-2 focus:border-green-500 transition-colors"
                      />
                      <Button
                        type="button"
                        onClick={addTeamMember}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Thêm
                      </Button>
                    </div>
                    {Object.keys(formData.team_structure || {}).length > 0 && (
                      <div className="space-y-3">
                        {Object.entries(formData.team_structure || {}).map(
                          ([role, count]) => (
                            <div
                              key={role}
                              className="flex items-center justify-between p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl group hover:shadow-md transition-all"
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                                  <Users className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <div className="text-sm text-gray-900">
                                    {role}
                                  </div>
                                  <div className="text-xs text-green-600">
                                    {count} người
                                  </div>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeTeamMember(role)}
                                className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                                title="Xoá vai trò"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Pricing Tab */}
            {activeTab === "pricing" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                {/* Header Card */}
                <div className="bg-gradient-to-r from-orange-500/10 via-amber-400/10 to-orange-500/10 border-2 border-orange-200/50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Giá & Thời gian
                      </h3>
                      <p className="text-sm text-gray-600">
                        Ước tính chi phí và thời gian thực hiện dự án
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Duration */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-base font-bold text-gray-900">
                        Thời gian thực hiện
                      </h4>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="estimated_duration_min"
                          className="text-sm text-gray-700"
                        >
                          Tối thiểu (tuần)
                        </Label>
                        <Input
                          id="estimated_duration_min"
                          type="number"
                          value={formData.estimated_duration_min}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              estimated_duration_min:
                                parseInt(e.target.value) || 0,
                            })
                          }
                          placeholder="VD: 6"
                          className="border-2 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="estimated_duration_max"
                          className="text-sm text-gray-700"
                        >
                          Tối đa (tuần)
                        </Label>
                        <Input
                          id="estimated_duration_max"
                          type="number"
                          value={formData.estimated_duration_max}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              estimated_duration_max:
                                parseInt(e.target.value) || 0,
                            })
                          }
                          placeholder="VD: 8"
                          className="border-2 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-base font-bold text-gray-900">
                        Phạm vi giá
                      </h4>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="price_range_min"
                          className="text-sm text-gray-700"
                        >
                          Giá tối thiểu (VNĐ)
                        </Label>
                        <Input
                          id="price_range_min"
                          type="number"
                          value={formData.price_range_min}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              price_range_min: parseInt(e.target.value) || 0,
                            })
                          }
                          placeholder="VD: 50000000"
                          className="border-2 focus:border-green-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="price_range_max"
                          className="text-sm text-gray-700"
                        >
                          Giá tối đa (VNĐ)
                        </Label>
                        <Input
                          id="price_range_max"
                          type="number"
                          value={formData.price_range_max}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              price_range_max: parseInt(e.target.value) || 0,
                            })
                          }
                          placeholder="VD: 80000000"
                          className="border-2 focus:border-green-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                {/* Header Card */}
                <div className="bg-gradient-to-r from-gray-500/10 via-slate-400/10 to-gray-500/10 border-2 border-gray-200/50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-slate-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Cài đặt nâng cao
                      </h3>
                      <p className="text-sm text-gray-600">
                        Cấu hình hiển thị và các tùy chọn khác
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Basic Settings */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="icon" className="text-sm text-gray-700">
                          Icon
                        </Label>
                        <Input
                          id="icon"
                          value={formData.icon}
                          onChange={(e) =>
                            setFormData({ ...formData, icon: e.target.value })
                          }
                          placeholder="briefcase"
                          className="border-2 focus:border-gray-500 transition-colors"
                        />
                      </div>
                      {/* <div className="space-y-2">
                        <Label
                          htmlFor="order"
                          className="text-sm text-gray-700"
                        >
                          Thứ tự hiển thị
                        </Label>
                        <Input
                          id="order"
                          type="number"
                          value={formData.order}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              order: parseInt(e.target.value) || 0,
                            })
                          }
                          placeholder="0"
                          className="border-2 focus:border-gray-500 transition-colors"
                        />
                      </div> */}
                    </div>
                  </div>

                  {/* Toggle Settings */}
                  <div className="space-y-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all">
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-emerald-50">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                            <CheckCircle className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <Label
                              htmlFor="is_active"
                              className="cursor-pointer text-base"
                            >
                              Kích hoạt dịch vụ
                            </Label>
                            <p className="text-xs text-gray-600 mt-1">
                              Dịch vụ sẽ hiển thị công khai
                            </p>
                          </div>
                        </div>
                        <Switch
                          id="is_active"
                          checked={formData.is_active}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, is_active: checked })
                          }
                        />
                      </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all">
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-yellow-50 to-amber-50">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                            <Star className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <Label
                              htmlFor="is_featured"
                              className="cursor-pointer text-base"
                            >
                              Đánh dấu nổi bật
                            </Label>
                            <p className="text-xs text-gray-600 mt-1">
                              Hiển thị trong mục dịch vụ nổi bật
                            </p>
                          </div>
                        </div>
                        <Switch
                          id="is_featured"
                          checked={formData.is_featured}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, is_featured: checked })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
