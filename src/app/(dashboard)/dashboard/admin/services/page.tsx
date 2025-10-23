"use client";

import { useEffect, useState } from "react";
import { servicesAPI } from "@/lib/api";
import ServiceCard from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import ServiceFormPage from "@/components/services/ServiceFormPage";
import { Service } from "@/types";

type ViewMode = "list" | "detail" | "form";

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    serviceId: string | null;
  }>({
    open: false,
    serviceId: null,
  });

  const loadServices = async () => {
    try {
      const response = await servicesAPI.list();
      setServices(response.data);
    } catch (error) {
      console.error("Error loading services:", error);
      toast.error("Không tải được danh sách dịch vụ!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  // Xem chi tiết
  const handleView = async (slug: string) => {
    try {
      const res = await servicesAPI.get(slug);
      setSelectedService(res.data);
      setViewMode("detail");
    } catch (err) {
      console.error("Error loading service details:", err);
      toast.error("Không xem được chi tiết dịch vụ!");
    }
  };

  // Xóa dịch vụ
  const handleDelete = async (id: string) => {
    setDeleteDialog({ open: true, serviceId: id });
  };

  const confirmDelete = async () => {
    if (!deleteDialog.serviceId) return;

    try {
      // await servicesAPI.delete(deleteDialog.serviceId);
      toast.success("Xóa dịch vụ thành công!");
      loadServices();
    } catch (err) {
      console.error("Error deleting service:", err);
      toast.error("Xóa thất bại!");
    } finally {
      setDeleteDialog({ open: false, serviceId: null });
    }
  };

  // Tạo mới
  const handleAddNew = () => {
    setSelectedService(null);
    setViewMode("form");
  };

  // Chỉnh sửa
  const handleEdit = async (slug?: string) => {
    try {
      if (slug) {
        const res = await servicesAPI.get(slug);
        setSelectedService(res.data);
      }
      setViewMode("form");
    } catch (err) {
      toast.error("Không lấy được thông tin dịch vụ!");
    }
  };

  // Quay lại danh sách
  const handleBackToList = () => {
    setViewMode("list");
    setSelectedService(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-lg">Đang tải...</div>
      </div>
    );
  }

  // Render Detail Page
  if (viewMode === "detail" && selectedService) {
    return (
      <ServiceDetailPage
        service={selectedService || undefined}
        onBack={handleBackToList}
        onEdit={() => handleEdit()}
      />
    );
  }

  // Render Form Page
  if (viewMode === "form") {
    return (
      <ServiceFormPage
        service={selectedService || undefined}
        onBack={handleBackToList}
        onSuccess={loadServices}
      />
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="rounded-2xl mb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1">
            <h1 className="text-3xl text-gray-900 font-bold mb-2">
              Quản lý Dịch vụ
            </h1>
            <p className="text-gray-600">
              Thêm, chỉnh sửa hoặc quản lý các dịch vụ của Operis
            </p>
          </div>
          <Button
            onClick={handleAddNew}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all text-base"
          >
            <Plus className="w-4 h-4 mr-2" /> Thêm dịch vụ mới
          </Button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <div className="text-2xl text-gray-900 mb-1">{services.length}</div>
            <div className="text-sm text-gray-600">Tổng dịch vụ</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <div className="text-2xl text-green-600 mb-1">
              {services.filter((s) => s.is_active).length}
            </div>
            <div className="text-sm text-gray-600">Đang hoạt động</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <div className="text-2xl text-yellow-600 mb-1">
              {services.filter((s) => s.is_featured).length}
            </div>
            <div className="text-sm text-gray-600">Dịch vụ nổi bật</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <div className="text-2xl text-gray-600 mb-1">
              {services.filter((s) => !s.is_active).length}
            </div>
            <div className="text-sm text-gray-600">Đang ẩn</div>
          </div>
        </div>
      </div>

      {/* Grid danh sách dịch vụ */}
      {services.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service) => (
            <div key={service.id} className="relative group flex">
              <ServiceCard
                service={service}
                onView={() => handleView(service.slug)}
                onEdit={() => handleEdit(service.slug)}
              />
              {/* Delete button - appears on hover */}
              <button
                onClick={() => handleDelete(service.id!)}
                className="absolute top-3 right-3 p-2 bg-white rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:border-red-200 border"
                title="Xóa dịch vụ"
              >
                <Trash2 className="w-5 h-5 text-red-600" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          Hiện chưa có dịch vụ nào.
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={deleteDialog.open}
        onOpenChange={(open) => setDeleteDialog({ open, serviceId: null })}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc muốn xóa dịch vụ này không? Hành động này không thể
              hoàn tác.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Xóa
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
