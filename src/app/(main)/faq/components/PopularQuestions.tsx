"use client";

import React from "react";
import { Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FAQ } from "@/types";

interface PopularQuestionsProps {
  popularFAQs: FAQ[];
}

export default function PopularQuestions({ popularFAQs }: PopularQuestionsProps) {
  const scrollToFAQ = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('faq-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Star className="w-6 h-6 text-[#3DDAB4]" />
          <h2 className="text-3xl font-bold">Câu hỏi phổ biến</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {popularFAQs.map((faq, index) => (
            <a
              key={index}
              href="#faq-section"
              className="block"
              onClick={scrollToFAQ}
            >
              <Card className="border-2 border-[#3DDAB4]/20 hover:border-[#3DDAB4] hover:shadow-lg transition-all cursor-pointer h-full group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-2 group-hover:text-[#3DDAB4] transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {faq.answer}
                      </p>
                      <p className="text-[#3DDAB4] text-sm font-semibold mt-2 flex items-center gap-1">
                        Xem chi tiết
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#faq-section"
            onClick={scrollToFAQ}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            <span>Xem tất cả câu hỏi</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
