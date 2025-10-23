"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { getAllMenuItems } from "@/lib/navigation";

interface DashboardSidebarProps {
  user: { role: string };
  open: boolean;
}

export default function DashboardSidebar({
  user,
  open,
}: DashboardSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 bottom-0 bg-white/70 backdrop-blur-lg border-r border-gray-200/50 shadow-sm transition-all duration-300 overflow-hidden z-0",
        open ? "w-[280px]" : "w-0"
      )}
    >
      <div className="h-full overflow-y-auto pt-4">
        <nav className="px-3 space-y-1">
          {getAllMenuItems(user.role).map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (pathname.startsWith(item.href + "/") &&
                !item.href.match(
                  /dashboard\/(admin|sales|developer|customer)$/
                ));

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => router.push(item.href)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100/50"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
