import RequestForm from "@/components/form/RequestForm";

export default function RequestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3DDAB4]/10 via-[#7A77FF]/5 to-white relative overflow-hidden z-10">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-20 z-10"
        style={{
          backgroundImage: `radial-gradient(circle, #3DDAB4 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <RequestForm />
    </div>
  );
}
