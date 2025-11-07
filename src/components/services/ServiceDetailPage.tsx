"use client";

import {
  ArrowLeft,
  Edit,
  FileText,
  Clock,
  Users,
  DollarSign,
  CheckCircle,
  Star,
  Zap,
  Calendar,
} from "lucide-react";
import { Challenge, Service } from "@/types";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../ImageWithFallback";

interface ServiceDetailPageProps {
  service: Service;
  onBack: () => void;
  onEdit: () => void;
}

export default function ServiceDetailPage({
  service,
  onBack,
  onEdit,
}: ServiceDetailPageProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${i})`}
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-gray-300 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }

    return <div className="flex gap-0.5">{stars}</div>;
  };

  return (
    <div className="min-h-screen bg-gray-50 -my-6 -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={onBack}
                className="hover:bg-gray-100"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl text-gray-900">{service.name}</h1>
                  {service.is_featured && (
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded">
                      Nổi bật
                    </span>
                  )}
                  {!service.is_active && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                      Ẩn
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{service.category}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={onBack}>
                Đóng
              </Button>
              <Button
                onClick={onEdit}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              >
                <Edit className="w-4 h-4 mr-2" />
                Chỉnh sửa
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 max-w-8xl mx-auto">
        <div className="space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-xs text-gray-500">Đội ngũ</div>
              </div>
              <div className="text-2xl text-gray-900">
                {service.estimated_team_size}
              </div>
              <div className="text-xs text-gray-600 mt-1">người</div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-xs text-gray-500">Thời gian</div>
              </div>
              <div className="text-2xl text-gray-900">
                {service.estimated_duration_min}-
                {service.estimated_duration_max}
              </div>
              <div className="text-xs text-gray-600 mt-1">tuần</div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-orange-600" />
                </div>
                <div className="text-xs text-gray-500">Giá dự kiến</div>
              </div>
              <div className="text-2xl text-gray-900">
                {(service.price_range_min / 1000000).toFixed(0)}M -{" "}
                {(service.price_range_max / 1000000).toFixed(0)}M VNĐ
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg text-gray-900">Mô tả dịch vụ</h2>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              {service.short_description}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.full_description}
            </p>
          </div>

          {/* Key Features */}
          {service.key_features && service.key_features.length > 0 && (
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg text-gray-900">Tính năng chính</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {(service.key_features as Challenge[]).map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Differentiators */}
          {service.differentiators && service.differentiators.length > 0 && (
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-600" />
                <h2 className="text-lg text-gray-900">Điểm khác biệt</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {service.differentiators.map((diff, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100"
                  >
                    <Star className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{diff}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process Stages */}
          {service.process_stages && service.process_stages.length > 0 && (
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-purple-600" />
                <h2 className="text-lg text-gray-900">Quy trình thực hiện</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {service.process_stages.map((stage, idx) => (
                  <div
                    key={idx}
                    className="relative bg-purple-50 border border-purple-200 rounded-lg p-4"
                  >
                    <div className="text-xs text-purple-600 mb-2">
                      Bước {idx + 1}
                    </div>
                    <div className="text-sm text-gray-900">{stage.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Team Structure */}
          {service.team_structure?.members &&
            service.team_structure.members.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Đội ngũ thực hiện dự án
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.team_structure.members.map((member, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <ImageWithFallback
                          src={member.avatar}
                          alt={member.name}
                          className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-gray-900 text-sm">
                            {member.name}
                          </h5>
                          <p className="text-xs text-purple-600 font-medium">
                            {member.role}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            {renderStars(member.rating!)}
                            <span className="text-xs font-semibold text-gray-700">
                              {member.rating?.toFixed(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        {member.experience}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 italic">
                        {member.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Technologies */}
          {service.technologies && service.technologies.length > 0 && (
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-cyan-600" />
                <h2 className="text-lg text-gray-900">Công nghệ sử dụng</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-cyan-50 border border-cyan-200 text-cyan-700 rounded-lg text-sm flex items-center gap-2"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
