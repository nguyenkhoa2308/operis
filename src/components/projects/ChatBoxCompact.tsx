"use client";

import { useState, useEffect, useRef } from "react";
import { projectsAPI } from "@/lib/api";
import { Message } from "@/types";
import { ChevronDown } from "lucide-react";

// Extending Message with API-specific fields
interface ChatMessage extends Message {
  sender: {
    id: string;
    full_name: string;
    email: string;
    role: string;
  };
  message_type: string;
}

interface ChatBoxProps {
  projectId: string;
  currentUserId: string;
}

export default function ChatBoxCompact({
  projectId,
  currentUserId,
}: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Debug: Log currentUserId
  useEffect(() => {
    console.log("ChatBox - Current User ID:", currentUserId);
  }, [currentUserId]);

  const scrollToBottom = (smooth = true) => {
    const container = messagesContainerRef.current;
    if (!container) return;

    if (smooth) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    } else {
      container.scrollTop = container.scrollHeight;
    }
  };

  // Check if user is near bottom of messages container
  const isNearBottom = () => {
    const container = messagesContainerRef.current;
    if (!container) return true;

    const threshold = 100; // pixels from bottom
    const position = container.scrollTop + container.clientHeight;
    const height = container.scrollHeight;

    return height - position < threshold;
  };

  // Handle scroll event to show/hide scroll-to-bottom button
  const handleScroll = () => {
    if (!messagesContainerRef.current) return;

    const isNear = isNearBottom();
    setShowScrollButton(!isNear);
  };

  const loadMessages = async (shouldScroll: boolean = false) => {
    try {
      const response = await projectsAPI.listMessages(projectId, 100);
      const newMessages = response.data;

      setMessages(newMessages);
      setLoading(false);

      // Scroll to bottom if needed
      if (shouldScroll) {
        setTimeout(() => scrollToBottom(true), 100);
      }
    } catch (error) {
      console.error("Failed to load messages:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial load - scroll to bottom without animation
    loadMessages(false);
    setTimeout(() => scrollToBottom(false), 200);

    // Polling - DO NOT scroll automatically
    const interval = setInterval(() => loadMessages(false), 5000);
    return () => clearInterval(interval);
  }, [projectId]);

  // Auto scroll to bottom when new messages arrive (only if user is already near bottom)
  useEffect(() => {
    if (messages.length > 0 && isNearBottom()) {
      setTimeout(() => scrollToBottom(true), 100);
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    setSending(true);
    try {
      await projectsAPI.sendMessage(projectId, {
        message: newMessage,
        message_type: "text",
      });
      setNewMessage("");
      // Scroll to bottom after sending message
      await loadMessages(true);
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Không thể gửi tin nhắn. Vui lòng thử lại.");
    } finally {
      setSending(false);
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "Vừa xong";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} phút`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} giờ`;

    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const isMyMessage = (message: Message) => {
    // Convert both to string and compare
    const senderId = String(message.sender.id);
    const userId = String(currentUserId);
    const result = senderId === userId;

    // Debug logging
    // console.log('isMyMessage check:', {
    //   senderId,
    //   userId,
    //   senderName: message.sender.full_name,
    //   result,
    //   rawSenderId: message.sender.id,
    //   rawUserId: currentUserId,
    // });

    return result;
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-xl border-2 border-gray-200 overflow-hidden">
      {/* Compact Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="font-bold text-sm">Chat với Sale</span>
        </div>
        <span className="text-xs text-blue-100">
          {messages.length} tin nhắn
        </span>
      </div>

      {/* Messages Area - Compact */}
      <div
        ref={messagesContainerRef}
        onScroll={handleScroll}
        className="overflow-y-auto p-4 space-y-3 relative"
        style={{ height: "500px", minHeight: "500px", maxHeight: "500px" }}
      >
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <svg
              className="w-12 h-12 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <p className="text-sm font-semibold">Bắt đầu trò chuyện</p>
          </div>
        ) : (
          <>
            {messages.map((message) => {
              const isMe = isMyMessage(message);
              const isSystem = message.message_type === "system";

              // Debug log
              // if (!isSystem) {
              //   console.log("Message:", {
              //     senderId: message.sender.id,
              //     senderName: message.sender.full_name,
              //     currentUserId: currentUserId,
              //     isMe: isMe,
              //   });
              // }

              if (isSystem) {
                return (
                  <div key={message.id} className="flex justify-center">
                    <div className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">
                      {message.message}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={message.id}
                  className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex gap-2 max-w-[80%] ${
                      isMe ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Compact Avatar */}
                    <div
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs ${
                        isMe ? "bg-blue-500" : "bg-green-500"
                      }`}
                    >
                      {message.sender.full_name.charAt(0)}
                    </div>

                    {/* Message Bubble - Compact */}
                    <div>
                      <div
                        className={`rounded-2xl px-3 py-2 ${
                          isMe
                            ? "bg-blue-500 text-white rounded-tr-none"
                            : "bg-gray-100 text-gray-900 rounded-tl-none"
                        }`}
                      >
                        {!isMe && (
                          <p className="text-xs font-semibold mb-0.5 opacity-70">
                            {message.sender.full_name}
                          </p>
                        )}
                        <p className="text-sm whitespace-pre-wrap break-words">
                          {message.message}
                        </p>
                      </div>
                      <p
                        className={`text-xs text-gray-400 mt-0.5 ${
                          isMe ? "text-right" : "text-left"
                        }`}
                      >
                        {formatTime(message.created_at)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </>
        )}

        {/* Scroll to Bottom Button */}
        {showScrollButton && !loading && messages.length > 0 && (
          <div className="sticky bottom-4 left-0 right-0 flex justify-center pointer-events-none">
            <button
              type="button"
              onClick={() => scrollToBottom(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-2 pointer-events-auto"
              aria-label="Scroll to bottom"
            >
              <ChevronDown className="w-4 h-4" />
              <span className="text-sm font-medium">Tin nhắn mới</span>
            </button>
          </div>
        )}
      </div>

      {/* Compact Input Area */}
      <div className="border-t border-gray-200 p-3 bg-gray-50">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Nhập tin nhắn..."
            className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            disabled={sending}
          />
          <button
            type="submit"
            disabled={!newMessage.trim() || sending}
            className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center flex-shrink-0"
          >
            {sending ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
