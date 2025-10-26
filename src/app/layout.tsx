import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import { AuthInitializer } from "@/components/AuthInitializer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Operis | Tự động hóa & quản trị công việc",
  description: "Tối ưu quy trình, tự động hóa tác vụ, nâng hiệu suất đội ngũ.",
  icons: {
    icon: [
      { url: "/operis-favicon.ico", sizes: "any" },
      {
        url: "/operis-favicon-dark-512.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/operis-favicon-light-512.png",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Script src="https://accounts.google.com/gsi/client" /> */}
        <Toaster position="top-right" richColors closeButton />
        <AuthInitializer>
          <main className="min-h-screen">{children}</main>
        </AuthInitializer>
      </body>
    </html>
  );
}
