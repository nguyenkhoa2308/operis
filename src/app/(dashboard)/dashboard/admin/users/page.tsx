"use client";

import { useState, useEffect } from "react";
import {
  Users,
  UserPlus,
  Edit,
  Trash2,
  Mail,
  Shield,
  Calendar,
  CheckCircle,
  XCircle,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { User } from "@/types";
import { authAPI, userAPI } from "@/lib/api";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Create user form
  const [createForm, setCreateForm] = useState({
    email: "",
    password: "",
    full_name: "",
    role: "customer",
  });

  // Edit user form
  const [editForm, setEditForm] = useState({
    full_name: "",
    role: "",
    is_active: true,
  });

  useEffect(() => {
    loadUsers();
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (showCreateModal || showEditModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showCreateModal, showEditModal]);

  const loadUsers = async () => {
    try {
      const user = await userAPI.list({ page: 1, page_size: 100 });
      setUsers(user.data);
    } catch (err) {
      console.error("Failed to load users:", err);
      toast.error("Không thể tải danh sách người dùng");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async () => {
    if (!createForm.email || !createForm.password || !createForm.full_name) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    try {
      await authAPI.register(createForm);
      toast.success("Tạo người dùng thành công");
      setShowCreateModal(false);
      setCreateForm({
        email: "",
        password: "",
        full_name: "",
        role: "customer",
      });
      loadUsers();
    } catch (err) {
      console.error("Failed to create user:", err);
      toast.error("Lỗi khi tạo người dùng");
    }
  };

  const handleEditUser = async () => {
    if (!selectedUser || !editForm.full_name) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    try {
      await userAPI.update(selectedUser.id, editForm);
      toast.success("Cập nhật người dùng thành công");
      setShowEditModal(false);
      setSelectedUser(null);
      loadUsers();
    } catch (err) {
      console.error("Failed to update user:", err);
      toast.error("Lỗi khi cập nhật người dùng");
    }
  };

  const handleDeleteUser = async (userId: string, userName: string) => {
    if (!confirm(`Bạn có chắc muốn xóa người dùng "${userName}"?`)) return;

    try {
      await userAPI.delete(userId);
      toast.success("Xóa người dùng thành công");
      loadUsers();
    } catch (err) {
      console.error("Failed to delete user:", err);
      toast.error("Lỗi khi xóa người dùng");
    }
  };

  const openEditModal = (user: User) => {
    setSelectedUser(user);
    setEditForm({
      full_name: user.full_name,
      role: user.role,
      is_active: user.is_active,
    });
    setShowEditModal(true);
  };

  const getRoleBadge = (role: string) => {
    const styles = {
      admin:
        "bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 text-red-700",
      sales:
        "bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 text-blue-700",
      dev: "bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-700",
      customer:
        "bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 text-purple-700",
    };
    return (
      styles[role as keyof typeof styles] ||
      "bg-gray-50 border-2 border-gray-200 text-gray-700"
    );
  };

  const getRoleLabel = (role: string) => {
    const labels = {
      admin: "Quản trị viên",
      sales: "Nhân viên bán hàng",
      dev: "Lập trình viên",
      customer: "Khách hàng",
    };
    return labels[role as keyof typeof labels] || role;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const filteredUsers = users.filter(
    (user) =>
      user.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="p-8">
        {/* Header Section */}
        <div className="mb-8">
          <div>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    Quản lý Người dùng
                  </h1>
                  <p className="text-gray-600">
                    Tổng số:{" "}
                    <span className="font-bold text-blue-600">
                      {filteredUsers.length}
                    </span>{" "}
                    người dùng
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setShowCreateModal(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Thêm người dùng
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Tìm kiếm theo tên hoặc email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 border-2 focus:border-blue-500 transition-colors bg-white/50"
              />
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b-2 border-gray-200">
                  <th className="text-left py-5 px-6 font-bold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Tên
                    </div>
                  </th>
                  <th className="text-left py-5 px-6 font-bold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </div>
                  </th>
                  <th className="text-left py-5 px-6 font-bold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Vai trò
                    </div>
                  </th>
                  <th className="text-left py-5 px-6 font-bold text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Trạng thái
                    </div>
                  </th>
                  <th className="text-left py-5 px-6 font-bold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Ngày tạo
                    </div>
                  </th>
                  <th className="text-center py-5 px-6 font-bold text-gray-700">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                          <Users className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500">
                          Không tìm thấy người dùng nào
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user, index) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all group"
                    >
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                            {user.full_name.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-bold text-gray-900">
                            {user.full_name}
                          </span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-gray-600">{user.email}</td>
                      <td className="py-5 px-6">
                        <span
                          className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold ${getRoleBadge(
                            user.role
                          )}`}
                        >
                          {getRoleLabel(user.role)}
                        </span>
                      </td>
                      <td className="py-5 px-6">
                        {user.is_active ? (
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-700 rounded-xl text-sm font-bold">
                            <CheckCircle className="w-4 h-4" />
                            Hoạt động
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 text-gray-700 rounded-xl text-sm font-bold">
                            <XCircle className="w-4 h-4" />
                            Ngừng
                          </span>
                        )}
                      </td>
                      <td className="py-5 px-6 text-gray-600">
                        {formatDate(user.created_at)}
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex items-center justify-center gap-2 transition-all">
                          <Button
                            onClick={() => openEditModal(user)}
                            size="sm"
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Sửa
                          </Button>
                          <Button
                            onClick={() =>
                              handleDeleteUser(user.id, user.full_name)
                            }
                            size="sm"
                            className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Xóa
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Create User Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-t-3xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <UserPlus className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    Thêm người dùng mới
                  </h2>
                  <p className="text-blue-100">
                    Tạo tài khoản người dùng mới trong hệ thống
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="create-email"
                    className="text-sm font-bold text-gray-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="create-email"
                    type="email"
                    value={createForm.email}
                    onChange={(e) =>
                      setCreateForm({ ...createForm, email: e.target.value })
                    }
                    className="border-2 focus:border-blue-500 transition-colors"
                    placeholder="user@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="create-password"
                    className="text-sm font-bold text-gray-700"
                  >
                    Mật khẩu <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="create-password"
                    type="password"
                    value={createForm.password}
                    onChange={(e) =>
                      setCreateForm({ ...createForm, password: e.target.value })
                    }
                    className="border-2 focus:border-blue-500 transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="create-name"
                    className="text-sm font-bold text-gray-700"
                  >
                    Họ và tên <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="create-name"
                    type="text"
                    value={createForm.full_name}
                    onChange={(e) =>
                      setCreateForm({
                        ...createForm,
                        full_name: e.target.value,
                      })
                    }
                    className="border-2 focus:border-blue-500 transition-colors"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="create-role"
                    className="text-sm font-bold text-gray-700"
                  >
                    Vai trò <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={createForm.role}
                    onValueChange={(value) =>
                      setCreateForm({ ...createForm, role: value })
                    }
                  >
                    <SelectTrigger className="border-2 focus:border-blue-500 transition-colors">
                      <SelectValue placeholder="Chọn vai trò" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer">Khách hàng</SelectItem>
                      <SelectItem value="sales">Nhân viên bán hàng</SelectItem>
                      <SelectItem value="dev">Lập trình viên</SelectItem>
                      <SelectItem value="admin">Quản trị viên</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button
                  onClick={handleCreateUser}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 py-6"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Tạo người dùng
                </Button>
                <Button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 shadow-lg hover:shadow-xl transition-all py-6"
                >
                  Hủy
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && selectedUser && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-t-3xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Edit className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    Chỉnh sửa người dùng
                  </h2>
                  <p className="text-blue-100">Cập nhật thông tin tài khoản</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="edit-email"
                    className="text-sm font-bold text-gray-700"
                  >
                    Email
                  </Label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={selectedUser.email}
                    disabled
                    className="border-2 bg-gray-50 text-gray-500"
                  />
                  <p className="text-xs text-gray-500">
                    Email không thể thay đổi
                  </p>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="edit-name"
                    className="text-sm font-bold text-gray-700"
                  >
                    Họ và tên <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="edit-name"
                    type="text"
                    value={editForm.full_name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, full_name: e.target.value })
                    }
                    className="border-2 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="edit-role"
                    className="text-sm font-bold text-gray-700"
                  >
                    Vai trò <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={editForm.role}
                    onValueChange={(value) =>
                      setEditForm({ ...editForm, role: value })
                    }
                  >
                    <SelectTrigger className="border-2 focus:border-blue-500 transition-colors">
                      <SelectValue placeholder="Chọn vai trò" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer">Khách hàng</SelectItem>
                      <SelectItem value="sales">Nhân viên bán hàng</SelectItem>
                      <SelectItem value="dev">Lập trình viên</SelectItem>
                      <SelectItem value="admin">Quản trị viên</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <Label
                          htmlFor="edit-active"
                          className="cursor-pointer font-bold text-gray-700"
                        >
                          Trạng thái tài khoản
                        </Label>
                        <p className="text-xs text-gray-600 mt-1">
                          {editForm.is_active
                            ? "Tài khoản đang hoạt động"
                            : "Tài khoản đã bị vô hiệu hóa"}
                        </p>
                      </div>
                    </div>
                    <Switch
                      id="edit-active"
                      checked={editForm.is_active}
                      onCheckedChange={(checked) =>
                        setEditForm({ ...editForm, is_active: checked })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button
                  onClick={handleEditUser}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 py-6"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Cập nhật
                </Button>
                <Button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 shadow-lg hover:shadow-xl transition-all py-6"
                >
                  Hủy
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
