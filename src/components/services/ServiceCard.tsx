"use client";

import { FileText, Clock, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  onView: () => void;
  onEdit: () => void;
}

export default function ServiceCard({
  service,
  onView,
  onEdit,
}: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow flex flex-col h-full w-full">
      {/* Status badges - fixed height */}
      <div className="flex gap-2 mb-3 h-6 items-start">
        {service.is_featured && (
          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded">
            Nổi bật
          </span>
        )}
        {/* {!service.is_active && (
          <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
            Ẩn
          </span>
        )} */}
      </div>

      {/* Icon */}
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <FileText className="w-6 h-6 text-blue-600" />
      </div>

      {/* Category - fixed height */}
      <div className="text-xs text-blue-600 mb-2 h-4">{service.category}</div>

      {/* Title - fixed height */}
      <h3 className="text-gray-900 mb-3 line-clamp-2 h-8 text-lg font-semibold">
        {service.name}
      </h3>

      {/* Description - fixed height */}
      <p className="text-base text-gray-600 mb-4 line-clamp-2 min-h-10">
        {service.short_description}
      </p>

      {/* Meta info */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          <span>
            {service.estimated_duration_max === service.estimated_duration_min
              ? service.estimated_duration_min
              : `${service.estimated_duration_min} -
                  ${service.estimated_duration_max}`}{" "}
            tuần
          </span>
        </div>
        {/* <div className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5" />
          <span>{service.estimated_team_size} người</span>
        </div> */}
      </div>

      {/* Price */}
      <div className="mb-4 pb-4 border-b border-gray-100">
        <div className="text-sm text-gray-500 mb-1">Giá dự kiến</div>
        <div className="text-base text-gray-900">
          {service.price_range_min === service.price_range_max
            ? `${(service.price_range_min / 1_000_000).toFixed(0)}M VNĐ`
            : `${(service.price_range_min / 1_000_000).toFixed(0)}M - ${(
                service.price_range_max / 1_000_000
              ).toFixed(0)}M VNĐ`}
        </div>
      </div>

      {/* Spacer to push buttons to bottom */}
      <div className="flex-grow"></div>

      {/* Actions - always at bottom */}
      <div className="flex gap-2">
        <Button
          onClick={onView}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Xem chi tiết
        </Button>
        <Button
          onClick={onEdit}
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:text-gray-900 hover:bg-gray-700/20"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.166 2.5009C14.3849 2.28203 14.6447 2.10842 14.9307 1.98996C15.2167 1.87151 15.5232 1.81055 15.8327 1.81055C16.1422 1.81055 16.4487 1.87151 16.7347 1.98996C17.0206 2.10842 17.2805 2.28203 17.4993 2.5009C17.7182 2.71977 17.8918 2.97961 18.0103 3.26558C18.1287 3.55154 18.1897 3.85804 18.1897 4.16757C18.1897 4.4771 18.1287 4.7836 18.0103 5.06956C17.8918 5.35553 17.7182 5.61537 17.4993 5.83424L6.24935 17.0842L1.66602 18.3342L2.91602 13.7509L14.166 2.5009Z"
              stroke="currentColor"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
