"use client";

import { JSX } from "react";
import RequestForm from "../form/RequestForm";
import { Service, Challenge } from "@/types";
// import Image from "next/image";

interface ServiceAccordionProps {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
  isLoadingDetails?: boolean;
}

export default function ServiceAccordion({
  service,
  isOpen,
  onToggle,
  isLoadingDetails,
}: ServiceAccordionProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      building: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      globe: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    };
    return icons[iconName] || icons.building;
  };

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
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* Header - Always Visible */}
      <div
        onClick={onToggle}
        className="cursor-pointer p-6 hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
            {getIconComponent(service.icon!)}
          </div>

          {/* Title and Description */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              {service.name}
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.short_description}
            </p>
          </div>

          {/* Stats - Quick View */}
          <div className="hidden lg:flex gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {formatPrice(service.price_range_min)}
              </div>
              <div className="text-xs text-gray-500 mt-1">Chi phí TB</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {service.estimated_duration_min} ngày
              </div>
              <div className="text-xs text-gray-500 mt-1">Thời gian TB</div>
            </div>
            {service.estimated_team_size && (
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {service.estimated_team_size} người
                </div>
                <div className="text-xs text-gray-500 mt-1">Nhân sự TB</div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4 lg:hidden">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">
              {(service.price_range_min / 1000000).toFixed(0)}M
            </div>
            <div className="text-xs text-gray-500">Chi phí TB</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">
              {service.estimated_duration_min} ngày
            </div>
            <div className="text-xs text-gray-500">Thời gian</div>
          </div>
          {service.estimated_team_size && (
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">
                {service.estimated_team_size} người
              </div>
              <div className="text-xs text-gray-500">Nhân sự</div>
            </div>
          )}
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 pb-6 space-y-8 border-t border-gray-100 pt-6">
          {isLoadingDetails ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Đang tải chi tiết...</p>
            </div>
          ) : (
            <>
              {/* Challenges Section - BEFORE Differentiators */}
              {service.key_features &&
                Array.isArray(service.key_features) &&
                service.key_features.length > 0 &&
                typeof service.key_features[0] === "object" &&
                service.key_features[0] !== null &&
                "title" in service.key_features[0] && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Những vấn đề khó giải quyết khi làm hệ thống tùy biến
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {(service.key_features as Challenge[]).map(
                        (feature: Challenge, idx) => (
                          <div
                            key={idx}
                            className="bg-red-50 border-2 border-red-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                <svg
                                  className="w-6 h-6 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h5 className="font-bold text-red-900 mb-1">
                                  {feature.title}
                                </h5>
                                <p className="text-sm text-red-700">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                            <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                              <p className="text-xs text-green-900">
                                <strong className="text-green-700">
                                  ✓ Giải pháp Operis:
                                </strong>{" "}
                                {feature.solution}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* Key Differentiators */}
              {service.differentiators &&
                service.differentiators.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Điểm khác biệt của Operis
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.differentiators.map((diff, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg"
                        >
                          <svg
                            className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-700">{diff}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Process Stages - Enhanced */}
              {service.process_stages && service.process_stages.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                    Quy trình thực hiện chi tiết
                  </h4>
                  <div className="space-y-4">
                    {service.process_stages.map((stage, idx) => (
                      <div key={idx} className="relative">
                        {idx < service.process_stages!.length - 1 && (
                          <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-gray-200"></div>
                        )}
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-md z-10">
                            {stage.stage}
                          </div>
                          <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-semibold text-gray-900">
                                {stage.name}
                              </h5>
                              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                                {stage.duration}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                              {stage.description}
                            </p>

                            {/* Details */}
                            {stage.details && stage.details.length > 0 && (
                              <ul className="space-y-1.5 mb-3">
                                {stage.details.map((detail, detailIdx) => (
                                  <li
                                    key={detailIdx}
                                    className="flex items-start gap-2 text-sm text-gray-700"
                                  >
                                    <svg
                                      className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* Commitment (for stage 1) */}
                            {stage.commitment && (
                              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-3">
                                <div className="font-medium text-sm text-yellow-900 mb-2 flex items-center gap-1">
                                  <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  Cam kết bồi thường khi chậm tiến độ:
                                </div>
                                <ul className="text-sm text-yellow-800 space-y-1">
                                  {Object.entries(stage.commitment).map(
                                    ([key, value]) => (
                                      <li
                                        key={key}
                                        className="flex items-center gap-2"
                                      >
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                        <span>{value}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}

                            {/* Supervision (for stage 2) */}
                            {stage.supervision && (
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 mt-2 text-sm text-blue-800">
                                <strong>Lưu ý:</strong> {stage.supervision}
                              </div>
                            )}

                            {/* Warranty packages (for stage 4) */}
                            {stage.warranty_packages && (
                              <div className="mt-3">
                                <div className="font-medium text-sm text-gray-900 mb-2">
                                  Gói bảo hành:
                                </div>
                                <div className="grid gap-2">
                                  {stage.warranty_packages.map(
                                    (pkg, pkgIdx) => (
                                      <div
                                        key={pkgIdx}
                                        className="flex items-center gap-2 text-sm text-gray-700 bg-white p-2 rounded border border-gray-200"
                                      >
                                        <svg
                                          className="w-4 h-4 text-purple-500"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                        {pkg}
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Team Members with Ratings */}
              {/* {service.team_structure?.members &&
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
                            <Image
                              src={member.avatar!}
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
                )} */}

              {/* Registration Form */}
              <RequestForm serviceId={service.id} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
