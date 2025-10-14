"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success(
        "Đã gửi tin nhắn thành công! Chúng tôi sẽ liên hệ lại trong vòng 24h."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base">
            Họ và tên <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="h-12 border-2 border-gray-200 focus:border-[#3DDAB4] rounded-xl"
            placeholder="Nguyễn Văn A"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            required
            className="h-12 border-2 border-gray-200 focus:border-[#3DDAB4] rounded-xl"
            placeholder="email@company.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-base">
            Số điện thoại <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
            required
            className="h-12 border-2 border-gray-200 focus:border-[#3DDAB4] rounded-xl"
            placeholder="0901 234 567"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-base">
            Công ty / Tổ chức
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) =>
              setFormData({
                ...formData,
                company: e.target.value,
              })
            }
            className="h-12 border-2 border-gray-200 focus:border-[#3DDAB4] rounded-xl"
            placeholder="Tên công ty (không bắt buộc)"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-base">
          Nội dung tin nhắn <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
          required
          rows={6}
          className="border-2 border-gray-200 focus:border-[#3DDAB4] rounded-xl resize-none"
          placeholder="Chia sẻ với chúng tôi về nhu cầu tự động hóa hoặc câu hỏi của bạn..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:opacity-90 text-white h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Đang gửi...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Gửi tin nhắn
          </>
        )}
      </Button>
    </form>
  );
}