// middleware.ts (đặt ở project root hoặc src/middleware.ts)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 4 role hợp lệ
const ROLES = new Set(["admin", "sales", "dev", "customer"]);
const ROLE_HOME: Record<string, string> = {
  admin: "/dashboard/admin",
  sales: "/dashboard/sales",
  dev: "/dashboard/developer",
  customer: "/dashboard/customer",
};

const norm = (r?: string | null) => {
  if (!r) return null;
  r = r.toLowerCase().trim();
  if (r === "sale") r = "sales";
  if (r === "developer") r = "dev";
  return ROLES.has(r) ? r : null;
};

// ====== (TẠM TẮT) Chưa dùng: đọc role từ access_token JWT ======
// const b64url = (s: string) =>
//   atob((s + "=".repeat((4 - (s.length % 4)) % 4)).replace(/-/g, "+").replace(/_/g, "/"));
// const getRoleFromJWT = (token?: string | null): string | null => {
//   if (!token) return null;
//   token = token.trim().replace(/^Bearer\s+/i, "");
//   const [, payload] = token.split(".");
//   if (!payload) return null;
//   try {
//     const p = JSON.parse(b64url(payload));
//     let r = String(p.role ?? p.user?.role ?? "").toLowerCase().trim();
//     if (r === "sale") r = "sales";
//     if (r === "developer") r = "dev";
//     return ROLES.has(r) ? r : null;
//   } catch { return null; }
// };
// ================================================================

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Cho qua các route khác; chỉ canh /dashboard + /login|/register
  if (
    !pathname.startsWith("/dashboard") &&
    pathname !== "/login" &&
    pathname !== "/register"
  ) {
    return NextResponse.next();
  }

  const hasToken = !!req.cookies.get("access_token")?.value; // chỉ check tồn tại token
  const role = norm(req.cookies.get("user_role")?.value);

  // Đã login mà vào /login|/register -> đẩy về dashboard/<role> nếu có role
  if (pathname === "/login" || pathname === "/register") {
    return hasToken && role
      ? NextResponse.redirect(new URL(ROLE_HOME[role], req.url))
      : NextResponse.next();
  }

  // Mọi /dashboard/* phải có token + role (chữa cháy dựa vào cookie 'role')
  if (!hasToken || !role) {
    const url = new URL("/login", req.url);
    url.searchParams.set("from", pathname + (search || ""));
    return NextResponse.redirect(url);
  }

  // /dashboard -> đẩy về /dashboard/<role>
  if (pathname === "/dashboard") {
    return NextResponse.redirect(new URL(ROLE_HOME[role], req.url));
  }

  // Nếu vào nhánh role khác -> chặn
  const seg = (pathname.split("/")[2] || "").toLowerCase();
  if (ROLES.has(seg) && seg !== role) {
    return NextResponse.redirect(new URL("/403", req.url));
  }

  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*", "/login", "/register"] };
