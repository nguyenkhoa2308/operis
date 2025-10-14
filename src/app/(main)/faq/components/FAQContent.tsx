"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
  popular?: boolean;
  relatedQuestions?: number[]; // IDs of related questions
}

interface FAQContentProps {
  faqs: FAQ[];
  categories: Array<{ id: string; name: string; icon: React.ReactNode }>;
}

const ITEMS_PER_PAGE = 10;

export default function FAQContent({ faqs, categories }: FAQContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredFAQs = faqs.filter((faq) => {
    const matchCategory = activeTab === "all" || faq.category === activeTab;
    const matchSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredFAQs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedFAQs = filteredFAQs.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleRelatedClick = (relatedId: number) => {
    // Find the FAQ with this ID
    const relatedFaqIndex = faqs.findIndex((faq) => faq.id === relatedId);
    if (relatedFaqIndex === -1) return;

    // Calculate which page this FAQ is on
    const filteredIndex = filteredFAQs.findIndex((faq) => faq.id === relatedId);
    if (filteredIndex === -1) return;

    const targetPage = Math.floor(filteredIndex / ITEMS_PER_PAGE) + 1;
    setCurrentPage(targetPage);

    // Open the FAQ after a short delay to allow page change
    setTimeout(() => {
      const indexInPage = filteredIndex % ITEMS_PER_PAGE;
      setOpenIndex(indexInPage);

      // Scroll to the FAQ
      const element = document.getElementById(`faq-${relatedId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const getRelatedQuestions = (faq: FAQ) => {
    if (!faq.relatedQuestions || faq.relatedQuestions.length === 0) return [];
    return faq.relatedQuestions
      .map((id) => faqs.find((f) => f.id === id))
      .filter((f): f is FAQ => f !== undefined);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-12">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
        <Input
          type="text"
          placeholder="Tìm kiếm câu hỏi... (vd: giá cả, bảo mật, thời gian)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-14 pr-6 h-16 border-2 border-gray-200 focus:border-[#3DDAB4] rounded-2xl text-lg shadow-lg"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <span className="text-sm font-medium">Xóa</span>
          </button>
        )}
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full h-auto p-2 bg-gray-100 rounded-2xl grid grid-cols-3 md:grid-cols-7 gap-2 mb-12">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#3DDAB4] data-[state=active]:to-[#7A77FF] data-[state=active]:text-white transition-all font-medium"
            >
              {cat.icon}
              <span className="hidden md:inline">{cat.name}</span>
              <span className="md:hidden">{cat.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="mt-0">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-6">
                <div className="mb-6 pb-4 border-b border-gray-200 flex items-center justify-between">
                  <p className="text-gray-600 font-medium">
                    <span className="text-[#3DDAB4] font-bold">
                      {filteredFAQs.length}
                    </span>{" "}
                    câu hỏi
                    {cat.id !== "all" && ` trong ${cat.name}`}
                  </p>
                  {totalPages > 1 && (
                    <p className="text-sm text-gray-500">
                      Trang {currentPage} / {totalPages}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  {paginatedFAQs.map((faq, index) => {
                    const relatedQuestions = getRelatedQuestions(faq);
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={faq.id}
                        id={`faq-${faq.id}`}
                        className="border-2 border-gray-100 bg-white rounded-2xl shadow-sm hover:shadow-md hover:border-[#3DDAB4]/30 transition-all overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full px-6 py-5 text-left flex items-start gap-4 hover:bg-gradient-to-r hover:from-[#3DDAB4]/5 hover:to-[#7A77FF]/5 transition-colors"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] flex items-center justify-center text-white text-sm font-bold">
                            {startIndex + index + 1}
                          </div>
                          <div className="flex-1 pr-4">
                            <h3 className="font-bold text-gray-900 group-hover:text-[#3DDAB4] transition-colors">
                              {faq.question}
                            </h3>
                          </div>
                          <ChevronDown
                            className={`flex-shrink-0 w-5 h-5 text-gray-400 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-6 pb-6 pt-2">
                              <div className="pl-12 text-gray-700 leading-relaxed mb-4">
                                {faq.answer}
                              </div>

                              {/* Related Questions */}
                              {relatedQuestions.length > 0 && (
                                <div className="pl-12 pt-4 border-t border-gray-100">
                                  <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-[#3DDAB4]" />
                                    Câu hỏi liên quan
                                  </p>
                                  <div className="space-y-2">
                                    {relatedQuestions.map((related) => (
                                      <button
                                        key={related.id}
                                        onClick={() =>
                                          handleRelatedClick(related.id)
                                        }
                                        className="w-full text-left px-4 py-3 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[#3DDAB4] hover:shadow-md transition-all group"
                                      >
                                        <p className="text-sm text-gray-700 group-hover:text-[#3DDAB4] font-medium flex items-start gap-2">
                                          <span className="text-[#3DDAB4] mt-0.5">
                                            →
                                          </span>
                                          {related.question}
                                        </p>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8 pt-8 border-t border-gray-200">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-[#3DDAB4] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Trước</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => {
                          // Show first page, last page, current page, and pages around current
                          const showPage =
                            page === 1 ||
                            page === totalPages ||
                            Math.abs(page - currentPage) <= 1;

                          if (!showPage) {
                            // Show ellipsis
                            if (
                              page === currentPage - 2 ||
                              page === currentPage + 2
                            ) {
                              return (
                                <span key={page} className="px-2 text-gray-400">
                                  ...
                                </span>
                              );
                            }
                            return null;
                          }

                          return (
                            <button
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                                currentPage === page
                                  ? "bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white shadow-lg"
                                  : "border-2 border-gray-200 hover:border-[#3DDAB4] text-gray-700"
                              }`}
                            >
                              {page}
                            </button>
                          );
                        }
                      )}
                    </div>

                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-[#3DDAB4] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium"
                    >
                      <span className="hidden sm:inline">Sau</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-12 text-center">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Không tìm thấy kết quả
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Thử tìm kiếm với từ khóa khác
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
