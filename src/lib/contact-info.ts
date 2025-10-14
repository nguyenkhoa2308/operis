import { Mail, Phone, MapPin } from "lucide-react";

export const contactInfo = {
  email: {
    title: "Email",
    value: "hungle@hagency.vn",
    href: "mailto:hungle@hagency.vn",
    description: "Gửi email bất cứ lúc nào",
    icon: Mail,
  },
  phone: {
    title: "Điện thoại",
    value: "+84 779 886 666",
    href: "tel:+84779886666",
    description: "Thứ 2 - Thứ 6, 9:00 - 17:30",
    icon: Phone,
  },
  address: {
    title: "Văn phòng",
    value: "CT1A, Chung cư VOV Mễ Trì",
    subValue: "Quận Nam Từ Liêm, Hà Nội",
    href: "https://maps.google.com",
    description: "24/7",
    icon: MapPin,
  },
} as const;
