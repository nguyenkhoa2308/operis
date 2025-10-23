import React from "react";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { BreadcrumbItem } from "@/types";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-8">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          {index === 0 ? (
            item.href ? (
              <Link
                href={item.href}
                className="flex items-center text-gray-600 hover:text-[#3DDAB4] transition-colors"
              >
                <Home className="w-4 h-4 mr-1" />
                <span>{item.label}</span>
              </Link>
            ) : (
              <span className="flex items-center text-gray-600">
                <Home className="w-4 h-4 mr-1" />
                <span>{item.label}</span>
              </span>
            )
          ) : index === items.length - 1 ? (
            <span className="text-[#7A77FF]">{item.label}</span>
          ) : item.href ? (
            <Link
              href={item.href}
              className="text-gray-600 hover:text-[#3DDAB4] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-600">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
