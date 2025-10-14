import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import ScrollToTopButton from "@/components/specific/ScrollToTopButton";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
