import Link from "next/link";
import {
  Bot,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-2xl flex items-center justify-center">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                Operis
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Giải pháp toàn diện cho doanh nghiệp Việt Nam: Tự động hóa quy
              trình và quản trị team thông minh. Tiết kiệm 70-90% thời gian,
              tăng 3-5x năng suất.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400 hover:text-[#3DDAB4] transition-colors">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="tel:+84853336668" className="text-sm">
                  +84 853 336 668
                </a>
              </div>
              <div className="flex items-center text-gray-400 hover:text-[#3DDAB4] transition-colors">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="mailto:hungle@hagency.vn" className="text-sm">
                  hungle@hagency.vn
                </a>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Chung cư VOV Mễ Trì, Nam Từ Liêm, Hà Nội
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#3DDAB4] rounded-lg flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#3DDAB4] rounded-lg flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#3DDAB4] rounded-lg flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#3DDAB4] rounded-lg flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Giải pháp */}
          <div>
            <h3 className="font-bold mb-4 text-white text-lg">Giải pháp</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/automation"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Automation - Tự động hóa
                </Link>
              </li>
              <li>
                <Link
                  href="/services/management"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Management - Quản trị
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Tất cả dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  href="/software"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Phần mềm
                </Link>
              </li>
            </ul>
          </div>

          {/* Về chúng tôi */}
          <div>
            <h3 className="font-bold mb-4 text-white text-lg">Về chúng tôi</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Đội ngũ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  href="/request"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Gửi yêu cầu
                </Link>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h3 className="font-bold mb-4 text-white text-lg">Hỗ trợ</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/user/documents"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Tài liệu
                </Link>
              </li>
              <li>
                <Link
                  href="/user/support"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Hỗ trợ khách hàng
                </Link>
              </li>
              <li>
                <Link
                  href="/user/progress"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Theo dõi tiến độ
                </Link>
              </li>
              <li>
                <Link
                  href="/user/requests"
                  className="text-gray-400 hover:text-[#3DDAB4] transition-colors text-sm"
                >
                  Yêu cầu của tôi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-12 pb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">
              Nhận tin tức & ưu đãi mới nhất
            </h3>
            <p className="text-gray-400 mb-6">
              Đăng ký để nhận tips tự động hóa, case studies và ưu đãi đặc biệt
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Email của bạn"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#3DDAB4]"
              />
              <Button className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:opacity-90 px-6">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mx-auto container w-full h-100 border-t border-gray-800 mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.899255391922!2d105.78257067608789!3d20.996675130644643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acb49b94ab1b%3A0x58570ca03e970d9a!2zQ2h1bmcgY8awIFZPViBN4buFIFRyw6w!5e0!3m2!1sen!2s!4v1739454201386!5m2!1sen!2s"
          className="w-full h-full border-0 transition-all duration-500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ToGoGo Office Location"
        ></iframe>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} ToGoGo. All rights reserved. Made with ❤️ in
              Vietnam.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-[#3DDAB4] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-[#3DDAB4] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-[#3DDAB4] transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
