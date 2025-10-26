"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { getCookie } from "@/lib/utils";
import {
  MessageSquare,
  Send,
  ArrowLeft,
  FolderKanban,
  Users,
  Clock,
  Paperclip,
} from "lucide-react";
import Link from "next/link";
import { authAPI, projectsAPI, userAPI } from "@/lib/api";
import { Message, Project, User } from "@/types";

export default function ProjectChatPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;

  const [project, setProject] = useState<Project | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadProjectAndMessages();
    // Poll for new messages every 5 seconds
    const interval = setInterval(loadMessages, 5000);
    return () => clearInterval(interval);
  }, [projectId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadProjectAndMessages = async () => {
    try {
      const token = getCookie("access_token");
      if (!token) {
        router.push("/login");
        return;
      }

      const userResponse = (await userAPI.getMe()).data;
      setCurrentUser(userResponse);

      const projectResponse = (await projectsAPI.get(projectId)).data;
      setProject(projectResponse);

      // Load messages
      await loadMessages();
    } catch (err) {
      console.error("Failed to load data:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async () => {
    try {
      const response = (await projectsAPI.listMessages(projectId, 100)).data;
      setMessages(response);

      if (response.length > 0) {
        const lastMessage = response[response.length - 1];
        if (lastMessage.sender.id !== currentUser?.id) {
          await projectsAPI.markMessageRead(projectId, lastMessage.id);
        }
      }
    } catch (err) {
      console.error("Failed to load messages:", err);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    setSending(true);
    try {
      const response = (
        await projectsAPI.sendMessage(projectId, {
          message: newMessage,
          message_type: "text",
          attachments: [],
        })
      ).data;
      setMessages([...messages, response]);
      setNewMessage("");
      scrollToBottom();
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setSending(false);
    }
  };

  const formatMessageTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);

    if (diffMins < 1) return "Vừa xong";
    if (diffMins < 60) return `${diffMins} phút trước`;
    if (diffHours < 24)
      return date.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      });
    return date.toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      in_progress: "bg-blue-100 text-blue-800",
      pending_acceptance: "bg-purple-100 text-purple-800",
      completed: "bg-green-100 text-green-800",
      on_hold: "bg-orange-100 text-orange-800",
      revision_required: "bg-pink-100 text-pink-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      in_progress: "Đang thực hiện",
      pending_acceptance: "Chờ nghiệm thu",
      completed: "Hoàn thành",
      on_hold: "Tạm dừng",
      revision_required: "Cần sửa đổi",
    };
    return labels[status] || status;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-gray-600">Không tìm thấy dự án</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href={"/dashboard/developer/chat"}
                // onClick={() => router.push()}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div className="flex items-center gap-3">
                <FolderKanban className="w-6 h-6 text-blue-600" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {project.name}
                  </h1>
                  <div className="flex items-center gap-2 mt-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {project.customer?.company_name ||
                        project.customer?.user_name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span
              className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(
                project.status
              )}`}
            >
              {getStatusLabel(project.status)}
            </span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={messageContainerRef}
        className="flex-1 overflow-y-auto bg-gray-50 px-6 py-6"
      >
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                Chưa có tin nhắn nào. Hãy bắt đầu cuộc trò chuyện!
              </p>
            </div>
          ) : (
            messages.map((message) => {
              const isCurrentUser =
                currentUser && message.sender.id === currentUser.id;
              const isSystem = message.message_type === "system";

              if (isSystem) {
                return (
                  <div key={message.id} className="flex justify-center">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 max-w-md">
                      <p className="text-sm text-blue-800 text-center">
                        {message.message}
                      </p>
                      <p className="text-xs text-blue-600 text-center mt-1">
                        {formatMessageTime(message.created_at)}
                      </p>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={message.id}
                  className={`flex ${
                    isCurrentUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-md ${
                      isCurrentUser ? "order-2" : "order-1"
                    }`}
                  >
                    <div className="flex items-end gap-2">
                      {!isCurrentUser && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {message.sender.full_name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div
                        className={`flex-1 ${
                          isCurrentUser ? "text-right" : "text-left"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {!isCurrentUser && (
                            <p className="text-xs font-semibold text-gray-700">
                              {message.sender.full_name}
                            </p>
                          )}
                          <p className="text-xs text-gray-500">
                            {formatMessageTime(message.created_at)}
                          </p>
                        </div>
                        <div
                          className={`rounded-2xl px-4 py-3 ${
                            isCurrentUser
                              ? "bg-blue-600 text-white rounded-br-sm"
                              : "bg-white text-gray-900 border border-gray-200 rounded-bl-sm"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap break-words">
                            {message.message}
                          </p>
                        </div>
                      </div>
                      {isCurrentUser && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {message.sender.full_name.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={sendMessage} className="flex items-end gap-3">
            <div className="flex-1">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(e);
                  }
                }}
                placeholder="Nhập tin nhắn... (Enter để gửi, Shift+Enter để xuống dòng)"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="p-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl transition-colors"
                title="Đính kèm file (Sắp ra mắt)"
              >
                <Paperclip className="w-5 h-5" />
              </button>
              <button
                type="submit"
                disabled={!newMessage.trim() || sending}
                className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Tin nhắn sẽ được gửi đến khách hàng và team members của dự án
          </p>
        </div>
      </div>
    </div>
  );
}
