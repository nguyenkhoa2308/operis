import React from "react";
import { Wrench, Hammer, HardHat } from "lucide-react";
import { ImageWithFallback } from "../ImageWithFallback";

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
}

export function ComingSoon({
  title = "Tính năng đang được phát triển",
  subtitle = "Sẽ sớm có mặt trong thời gian tới",
}: ComingSoonProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating construction icons */}
        <div className="absolute top-20 left-20 opacity-10">
          <Wrench
            className="w-8 h-8 text-orange-500 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          />
        </div>
        <div className="absolute top-32 right-24 opacity-10">
          <Hammer
            className="w-6 h-6 text-yellow-500 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          />
        </div>
        <div className="absolute bottom-24 left-32 opacity-10">
          <HardHat
            className="w-7 h-7 text-orange-600 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3.5s" }}
          />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10">
          <Wrench
            className="w-5 h-5 text-yellow-600 animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
          />
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-16 right-16 w-4 h-4 bg-orange-200 rotate-45 opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-32 left-16 w-6 h-6 bg-yellow-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-40 left-1/4 w-3 h-3 bg-orange-300 opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="text-center max-w-lg relative z-10">
        {/* Construction Illustration */}
        <div className="mb-10">
          <div className="relative">
            <ImageWithFallback
              src="/images/under_construction.png"
              alt="Under Construction"
              className="w-72 h-72 mx-auto object-contain"
            />
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Main Title - More prominent */}
          <div className="relative">
            <h1 className="text-slate-900 text-3xl font-semibold mb-3 relative">
              {title}
            </h1>
            {/* Decorative underline */}
            <div className="mx-auto w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"></div>
            {/* Construction tape effect */}
            <div className="absolute -inset-x-4 -inset-y-2 border-2 border-dashed border-orange-300/40 rounded-lg -z-10"></div>
          </div>

          {/* Subtitle - Enhanced */}
          <p className="text-slate-700 text-lg font-medium">{subtitle}</p>

          {/* Status indicator with construction theme */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-4 max-w-sm mx-auto">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse mr-3"></div>
                <HardHat className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-orange-800 font-medium">
                  Đang phát triển
                </span>
              </div>
            </div>
          </div>

          {/* Construction warning tape */}
          <div className="relative">
            <div className="flex items-center justify-center space-x-2 py-2">
              <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 transform -skew-x-12"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 transform -skew-x-12"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 transform -skew-x-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
