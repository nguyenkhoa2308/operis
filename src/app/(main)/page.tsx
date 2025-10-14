"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Users,
  Phone,
  Bot,
  Cog,
  Shield,
  Calendar,
  Send,
  CheckCircle,
  Settings,
  Clock,
  AlertTriangle,
  TrendingDown,
  RefreshCw,
  BarChart3,
  Database,
  Eye,
  Zap,
  Calculator,
  TrendingUp,
  Briefcase,
  Target,
  DollarSign,
  FileSpreadsheet,
  Mail,
  FileText,
  FolderKanban,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RequestForm from "@/components/form/RequestForm";

// Isometric Workspace Visual Component
// Modern Isometric Workspace Visual Component
const IsometricWorkspace = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[450px] xl:h-[550px] overflow-hidden flex items-center justify-center">
      {/* Mobile-optimized version */}
      <div className="block xl:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block xl:hidden order-1 xl:order-2 py-8"
        >
          <div className="relative h-48 sm:h-56 flex items-center justify-center">
            {/* Simple mobile visual */}
            <div className="relative">
              {/* Central automation icon */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
                className="w-20 h-20 bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <Bot className="w-10 h-10 text-white" />
              </motion.div>

              {/* Orbiting elements */}
              {[
                {
                  icon: FileText,
                  angle: 0,
                  bgClass: "bg-gradient-to-br from-emerald-400 to-emerald-600",
                },
                {
                  icon: Calculator,
                  angle: 120,
                  bgClass: "bg-gradient-to-br from-blue-400 to-blue-600",
                },
                {
                  icon: TrendingUp,
                  angle: 240,
                  bgClass: "bg-gradient-to-br from-purple-400 to-purple-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-12 h-12 ${item.bgClass} rounded-xl flex items-center justify-center shadow-lg`}
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0 0",
                  }}
                  animate={{
                    rotate: [item.angle, item.angle + 360],
                    x: [
                      Math.cos((item.angle * Math.PI) / 180) * 60 - 24,
                      Math.cos(((item.angle + 360) * Math.PI) / 180) * 60 - 24,
                    ],
                    y: [
                      Math.sin((item.angle * Math.PI) / 180) * 60 - 24,
                      Math.sin(((item.angle + 360) * Math.PI) / 180) * 60 - 24,
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}

              {/* Connection lines */}
              <svg
                className="absolute inset-0 w-full h-full -z-10"
                viewBox="0 0 160 160"
              >
                <motion.circle
                  cx="80"
                  cy="80"
                  r="60"
                  fill="none"
                  stroke="url(#mobileGradient)"
                  strokeWidth="2"
                  strokeDasharray="4,6"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <defs>
                  <linearGradient
                    id="mobileGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3DDAB4" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#7A77FF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3DDAB4" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hidden xl:block">
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Layer 1: Holographic Core Particles */}
          {[...Array(8)].map((_, i) => {
            const corePositions = [
              { left: 18, top: 25 },
              { left: 82, top: 30 },
              { left: 30, top: 70 },
              { left: 70, top: 75 },
              { left: 50, top: 20 },
              { left: 25, top: 50 },
              { left: 75, top: 45 },
              { left: 45, top: 85 },
            ];
            const pos = corePositions[i];

            return (
              <motion.div
                key={`core-${i}`}
                className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  background: `conic-gradient(from ${
                    i * 45
                  }deg, #3DDAB4, #7A77FF, #3DDAB4, #7A77FF)`,
                  boxShadow: `
                  0 0 20px rgba(61, 218, 180, 0.4),
                  0 0 40px rgba(122, 119, 255, 0.3),
                  inset 0 0 10px rgba(255, 255, 255, 0.2)
                `,
                  filter: "blur(0.5px)",
                }}
                animate={{
                  rotate: [0, 360],
                  y: [0, -15 - i * 2, 0],
                  x: [0, Math.sin(i) * 4, 0],
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  rotate: { duration: 8 + i, repeat: Infinity, ease: "linear" },
                  y: {
                    duration: 5 + i * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  x: {
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  opacity: {
                    duration: 2.5 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                {/* Inner holographic core */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
                    filter: "blur(1px)",
                  }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2 + i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              </motion.div>
            );
          })}

          {/* Layer 2: Orbital Micro-Particles */}
          {[...Array(16)].map((_, i) => {
            const orbitRadius = 25 + (i % 4) * 15;
            const centerX = 50 + Math.cos(i * 0.5) * 20;
            const centerY = 50 + Math.sin(i * 0.5) * 15;

            return (
              <motion.div
                key={`orbit-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${centerX}%`,
                  top: `${centerY}%`,
                  background:
                    i % 3 === 0
                      ? "linear-gradient(45deg, #3DDAB4, transparent)"
                      : i % 3 === 1
                      ? "linear-gradient(135deg, #7A77FF, transparent)"
                      : "radial-gradient(circle, #3DDAB4, #7A77FF)",
                  boxShadow: `0 0 8px ${
                    i % 2 === 0
                      ? "rgba(61, 218, 180, 0.6)"
                      : "rgba(122, 119, 255, 0.6)"
                  }`,
                  filter: "blur(0.2px)",
                }}
                animate={{
                  x: [
                    Math.cos(0) * orbitRadius,
                    Math.cos(Math.PI / 2) * orbitRadius,
                    Math.cos(Math.PI) * orbitRadius,
                    Math.cos((3 * Math.PI) / 2) * orbitRadius,
                    Math.cos(2 * Math.PI) * orbitRadius,
                  ],
                  y: [
                    Math.sin(0) * orbitRadius * 0.6,
                    Math.sin(Math.PI / 2) * orbitRadius * 0.6,
                    Math.sin(Math.PI) * orbitRadius * 0.6,
                    Math.sin((3 * Math.PI) / 2) * orbitRadius * 0.6,
                    Math.sin(2 * Math.PI) * orbitRadius * 0.6,
                  ],
                  scale: [1, 1.5, 1, 0.8, 1],
                  opacity: [0.4, 0.8, 0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 12 + i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3,
                }}
              />
            );
          })}

          {/* Layer 3: Energy Waves */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute rounded-full border opacity-20"
              style={{
                left: `${45 + i * 2}%`,
                top: `${48 + i * 1}%`,
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                borderColor: i % 2 === 0 ? "#3DDAB4" : "#7A77FF",
                borderWidth: "1px",
                filter: "blur(0.5px)",
              }}
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0, 0.3, 0],
                rotate: [0, i % 2 === 0 ? 180 : -180, 360],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 1.5,
              }}
            />
          ))}

          {/* Layer 4: Constellation Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            {[...Array(5)].map((_, i) => {
              const connections = [
                { x1: "18%", y1: "25%", x2: "50%", y2: "20%" },
                { x1: "50%", y1: "20%", x2: "82%", y2: "30%" },
                { x1: "30%", y1: "70%", x2: "70%", y2: "75%" },
                { x1: "25%", y1: "50%", x2: "75%", y2: "45%" },
                { x1: "45%", y1: "85%", x2: "75%", y2: "45%" },
              ];
              const line = connections[i];

              return (
                <motion.line
                  key={`line-${i}`}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="url(#gradient)"
                  strokeWidth="0.5"
                  strokeDasharray="2,3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 1.2,
                  }}
                />
              );
            })}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3DDAB4" />
                <stop offset="50%" stopColor="#7A77FF" />
                <stop offset="100%" stopColor="#3DDAB4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Layer 5: Prismatic Ambient Glows */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`prism-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${30 + i * 20}%`,
                top: `${40 + i * 10}%`,
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                background: `
                radial-gradient(circle at 30% 30%, 
                  rgba(61, 218, 180, 0.15) 0%,
                  rgba(122, 119, 255, 0.10) 30%,
                  rgba(61, 218, 180, 0.05) 60%,
                  transparent 100%
                )
              `,
                filter: `blur(${20 + i * 10}px)`,
                mixBlendMode: "screen",
              }}
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, Math.sin(i) * 10, 0],
                y: [0, Math.cos(i) * 8, 0],
              }}
              transition={{
                duration: 10 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}

          {/* Layer 6: Floating Sparkles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: "2px",
                height: "2px",
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360],
                y: [0, -30, -60],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(45deg, #3DDAB4, #7A77FF)`,
                  boxShadow: `0 0 6px ${
                    Math.random() > 0.5 ? "#3DDAB4" : "#7A77FF"
                  }`,
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Main workspace container */}
        <div className="relative perspective-1000">
          {/* Glassmorphism base platform */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative"
            style={{
              transform: "rotateX(65deg) rotateY(-25deg) rotateZ(8deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Enhanced desk surface */}
            <div className="w-[450px] h-[300px] relative">
              {/* Main glass surface */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-white/30 rounded-[3rem] shadow-[0_25px_50px_rgba(0,0,0,0.15)] border border-white/20 backdrop-blur-xl">
                {/* Surface highlights */}
                <div className="absolute inset-[3px] rounded-[2.8rem] bg-gradient-to-br from-white/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-32 h-16 bg-gradient-to-br from-white/30 to-transparent rounded-2xl blur-sm" />

                {/* Holographic reflection */}
                <motion.div
                  className="absolute inset-0 rounded-[3rem] opacity-20"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(61,218,180,0.3) 50%, rgba(122,119,255,0.3) 70%, transparent)",
                  }}
                  animate={{
                    background: [
                      "linear-gradient(45deg, transparent 30%, rgba(61,218,180,0.3) 50%, rgba(122,119,255,0.3) 70%, transparent)",
                      "linear-gradient(225deg, transparent 30%, rgba(122,119,255,0.3) 50%, rgba(61,218,180,0.3) 70%, transparent)",
                      "linear-gradient(45deg, transparent 30%, rgba(61,218,180,0.3) 50%, rgba(122,119,255,0.3) 70%, transparent)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Floating desk legs */}
              <div className="absolute -bottom-8 left-16 right-16 h-6 bg-gradient-to-r from-gray-400/30 via-gray-500/40 to-gray-400/30 rounded-full blur-lg" />
            </div>

            {/* Ultra-modern Laptop - Center position */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: 20 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="absolute top-12 left-1/2 transform -translate-x-1/2"
              style={{ transform: "translateX(-50%) rotateX(-8deg)" }}
            >
              {/* Laptop base with premium materials */}
              <div className="w-40 h-24 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 relative">
                {/* Main chassis */}
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[1.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-slate-700/50 relative overflow-hidden">
                  {/* Metallic surface texture */}
                  <div className="absolute inset-[2px] rounded-[1.3rem] bg-gradient-to-br from-slate-800/90 via-slate-700/50 to-slate-900/90" />

                  {/* Premium keyboard area */}
                  <div className="absolute bottom-3 left-3 right-3 h-16 bg-gradient-to-br from-slate-700/80 to-slate-800/90 rounded-xl border border-slate-600/30 backdrop-blur-sm">
                    {/* Backlit keys simulation */}
                    <div className="grid grid-cols-14 gap-[2px] p-3 h-full">
                      {[...Array(42)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="rounded-sm bg-gradient-to-b from-slate-600 to-slate-700 border border-slate-500/30"
                          animate={{
                            boxShadow: [
                              "0 0 0 rgba(61,218,180,0)",
                              "0 0 4px rgba(61,218,180,0.4)",
                              "0 0 0 rgba(61,218,180,0)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.05,
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        />
                      ))}
                    </div>

                    {/* Trackpad */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-slate-600 to-slate-700 rounded-lg border border-slate-500/30" />
                  </div>

                  {/* Brand logo area */}
                  <motion.div
                    className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] rounded-full flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(61,218,180,0)",
                        "0 0 20px rgba(61,218,180,0.6)",
                        "0 0 0 rgba(61,218,180,0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Bot className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Ultra-modern laptop screen */}
              <motion.div
                initial={{ rotateX: 0, opacity: 0 }}
                animate={{ rotateX: -25, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
                className="absolute -top-16 sm:-top-20 md:-top-24 lg:-top-28 left-0 w-40 h-24 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 origin-bottom"
              >
                {/* Screen with edge-to-edge display */}
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-[1.5rem] shadow-[0_25px_50px_rgba(0,0,0,0.4)] border border-slate-700/50 relative overflow-hidden">
                  {/* Premium screen bezel */}
                  <div className="absolute inset-[3px] rounded-[1.2rem] bg-gradient-to-br from-slate-800/90 to-black/95 overflow-hidden">
                    {/* OLED-style display */}
                    <div className="absolute inset-3 bg-black rounded-xl overflow-hidden">
                      {/* Ambient display lighting */}
                      <motion.div
                        className="absolute inset-0 opacity-40"
                        animate={{
                          background: [
                            "radial-gradient(circle at 30% 30%, rgba(61,218,180,0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 70% 70%, rgba(122,119,255,0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 30% 30%, rgba(61,218,180,0.3) 0%, transparent 50%)",
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Enhanced dashboard interface */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="relative z-10 p-4 h-full text-white"
                      >
                        {/* Modern header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex space-x-2">
                            <motion.div
                              className="w-3 h-3 rounded-full"
                              animate={{
                                backgroundColor: [
                                  "#ef4444",
                                  "#ef4444",
                                  "#ef4444",
                                ],
                              }}
                            />
                            <motion.div
                              className="w-3 h-3 rounded-full"
                              animate={{
                                backgroundColor: [
                                  "#eab308",
                                  "#eab308",
                                  "#eab308",
                                ],
                              }}
                            />
                            <motion.div
                              className="w-3 h-3 rounded-full"
                              animate={{
                                backgroundColor: [
                                  "#22c55e",
                                  "#22c55e",
                                  "#22c55e",
                                ],
                              }}
                            />
                          </div>
                          <motion.div
                            animate={{
                              rotate: 360,
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              rotate: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                              },
                              scale: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              },
                            }}
                            className="w-6 h-6 bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] rounded-lg flex items-center justify-center shadow-lg"
                          >
                            <Bot className="w-3 h-3 text-white" />
                          </motion.div>
                        </div>

                        {/* AI processing status */}
                        <div className="space-y-3">
                          {[
                            {
                              label: "Data Processing",
                              progress: 94,
                              color: "from-[#3DDAB4] to-[#22c55e]",
                            },
                            {
                              label: "AI Analysis",
                              progress: 87,
                              color: "from-[#7A77FF] to-[#3DDAB4]",
                            },
                            {
                              label: "Report Generation",
                              progress: 72,
                              color: "from-[#22c55e] to-[#7A77FF]",
                            },
                          ].map((item, i) => (
                            <div key={i} className="space-y-1">
                              <div className="flex justify-between text-xs opacity-80">
                                <span>{item.label}</span>
                                <span>{item.progress}%</span>
                              </div>
                              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${item.color} rounded-full relative`}
                                  initial={{ width: "0%" }}
                                  animate={{ width: `${item.progress}%` }}
                                  transition={{
                                    duration: 2,
                                    delay: 1.6 + i * 0.3,
                                    ease: "easeOut",
                                  }}
                                >
                                  {/* Animated shine effect */}
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{
                                      duration: 2,
                                      delay: 2 + i * 0.3,
                                      repeat: Infinity,
                                      repeatDelay: 3,
                                    }}
                                  />
                                </motion.div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Real-time analytics chart */}
                        <div className="mt-4 flex items-end justify-between h-12 px-1">
                          {[65, 45, 80, 35, 90, 55, 75, 40, 85, 60].map(
                            (height, i) => (
                              <motion.div
                                key={i}
                                className="bg-gradient-to-t from-[#3DDAB4]/60 via-[#7A77FF]/40 to-[#3DDAB4]/80 rounded-t-sm flex-1 mx-[1px] relative"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                  height: `${height}%`,
                                  opacity: 1,
                                }}
                                transition={{
                                  duration: 0.6,
                                  delay: 2.2 + i * 0.08,
                                  ease: "easeOut",
                                }}
                              >
                                {/* Data point glow */}
                                <motion.div
                                  className="absolute -top-1 left-0 right-0 h-2 bg-[#3DDAB4] rounded-full opacity-60 blur-sm"
                                  animate={{ opacity: [0.6, 1, 0.6] }}
                                  transition={{
                                    duration: 1.5,
                                    delay: 3 + i * 0.1,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                />
                              </motion.div>
                            )
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Screen reflection effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
                      }}
                      animate={{
                        background: [
                          "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
                          "linear-gradient(315deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
                          "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
                        ],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>

                  {/* Enhanced screen glow */}
                  <motion.div
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -inset-2 bg-gradient-to-br from-[#3DDAB4]/30 via-[#7A77FF]/20 to-[#3DDAB4]/30 rounded-[1.7rem] blur-lg -z-10"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Modern floating input elements */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="absolute top-8 left-4"
              style={{ transform: "rotateX(-8deg) rotateY(12deg)" }}
            >
              <div className="space-y-4">
                {/* Excel data source */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.08, rotateY: 5 }}
                  animate={{
                    y: [0, -8, 0],
                    rotateZ: [0, 2, 0],
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotateZ: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="w-16 h-18 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 rounded-2xl shadow-[0_8px_32px_rgba(16,185,129,0.4)] flex items-center justify-center border border-white/20 backdrop-blur-sm relative overflow-hidden"
                >
                  <FileSpreadsheet className="w-7 h-7 text-white z-10" />
                  {/* Glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                  {/* Data flow animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/60 to-white/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>

                {/* Email automation */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.08, rotateY: -5 }}
                  animate={{
                    y: [0, -6, 0],
                    rotateZ: [0, -1, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    },
                    rotateZ: {
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    },
                  }}
                  className="w-16 h-18 bg-gradient-to-br from-red-400 via-rose-500 to-red-600 rounded-2xl shadow-[0_8px_32px_rgba(239,68,68,0.4)] flex items-center justify-center border border-white/20 backdrop-blur-sm relative overflow-hidden"
                >
                  <Mail className="w-7 h-7 text-white z-10" />
                  {/* Glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                  {/* Notification pulse */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* CRM integration */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.08, rotateY: 5 }}
                  animate={{
                    y: [0, -10, 0],
                    rotateZ: [0, 1.5, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    },
                    rotateZ: {
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                  className="w-16 h-18 bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600 rounded-2xl shadow-[0_8px_32px_rgba(139,92,246,0.4)] flex items-center justify-center border border-white/20 backdrop-blur-sm relative overflow-hidden"
                >
                  <Users className="w-7 h-7 text-white z-10" />
                  {/* Glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                </motion.div>
              </div>
            </motion.div>

            {/* Modern floating output elements */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
              className="absolute top-8 right-4"
              style={{ transform: "rotateX(-8deg) rotateY(-12deg)" }}
            >
              <div className="space-y-4">
                {/* AI Dashboard */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.08, rotateY: -5 }}
                  animate={{
                    y: [0, -12, 0],
                    rotateZ: [0, -2, 0],
                    boxShadow: [
                      "0 8px 32px rgba(122, 119, 255, 0.4)",
                      "0 12px 48px rgba(61, 218, 180, 0.5)",
                      "0 8px 32px rgba(122, 119, 255, 0.4)",
                    ],
                  }}
                  transition={{
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    rotateZ: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    boxShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="w-16 h-18 bg-gradient-to-br from-[#7A77FF] via-[#6366f1] to-[#3DDAB4] rounded-2xl shadow-[0_8px_32px_rgba(122,119,255,0.4)] flex items-center justify-center border border-white/20 backdrop-blur-sm relative overflow-hidden"
                >
                  <BarChart3 className="w-7 h-7 text-white z-10" />
                  {/* Enhanced glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-2xl" />
                  {/* AI processing indicator */}
                  <motion.div
                    className="absolute top-1 left-1 right-1 h-0.5 bg-gradient-to-r from-white/0 via-white/80 to-white/0"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Smart Database */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.08, rotateY: 5 }}
                  animate={{
                    y: [0, -7, 0],
                    rotateZ: [0, 1, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7,
                    },
                    rotateZ: {
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7,
                    },
                  }}
                  className="w-16 h-18 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 rounded-2xl shadow-[0_8px_32px_rgba(59,130,246,0.4)] flex items-center justify-center border border-white/20 backdrop-blur-sm relative overflow-hidden"
                >
                  <Database className="w-7 h-7 text-white z-10" />
                  {/* Glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                  {/* Data sync indicator */}
                  <motion.div
                    className="absolute bottom-1 left-1 right-1 h-0.5 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Automated Reports */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.08, rotateY: -5 }}
                  animate={{
                    y: [0, -9, 0],
                    rotateZ: [0, -1.5, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2,
                    },
                    rotateZ: {
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2,
                    },
                  }}
                  className="w-16 h-18 bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 rounded-2xl shadow-[0_8px_32px_rgba(245,158,11,0.4)] flex items-center justify-center border border-white/20 backdrop-blur-sm relative overflow-hidden"
                >
                  <FileText className="w-7 h-7 text-white z-10" />
                  {/* Glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                  {/* Generation progress */}
                  <motion.div className="absolute left-1 right-1 bottom-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white/80 rounded-full"
                      animate={{ width: ["0%", "100%", "0%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Automation Flow Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ transform: "rotateX(-5deg)" }}
            >
              <defs>
                <linearGradient
                  id="flowGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3DDAB4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#7A77FF" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              {/* Flow from input to laptop */}
              <motion.path
                d="M 80 100 Q 140 90 180 100"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,12"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />

              {/* Flow from laptop to output */}
              <motion.path
                d="M 260 100 Q 320 90 370 100"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,12"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </svg>

            {/* Premium AI Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
              className="absolute -top-20 left-1/2 transform -translate-x-1/2"
              style={{ transform: "translateX(-50%) rotateX(8deg)" }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Badge glow effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-[#3DDAB4]/40 via-[#7A77FF]/40 to-[#3DDAB4]/40 rounded-3xl blur-xl"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Main badge */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white/50">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      className="relative w-8 h-8 bg-gradient-to-br from-[#3DDAB4] via-[#7A77FF] to-[#3DDAB4] rounded-xl flex items-center justify-center shadow-lg"
                    >
                      <Bot className="w-4 h-4 text-white z-10" />
                      {/* Inner glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl"
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>

                    <div className="flex flex-col">
                      <span className="text-sm font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                        AI Automation
                      </span>
                      <motion.span
                        className="text-xs text-gray-500"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        Active Processing
                      </motion.span>
                    </div>

                    {/* Status indicator */}
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Subtle internal border */}
                  <div className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-gradient-to-br from-white/20 via-transparent to-white/10 pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>

            {/* Ambient lighting effects */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              {/* Spotlight effect on workspace */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-white/10 via-white/5 to-transparent rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Side accent lights */}
              <motion.div
                className="absolute top-20 left-10 w-32 h-64 bg-gradient-to-r from-[#3DDAB4]/10 to-transparent blur-3xl"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute top-20 right-10 w-32 h-64 bg-gradient-to-l from-[#7A77FF]/10 to-transparent blur-3xl"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Background floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.3,
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              delay: i * 0.3,
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${
              i % 3 === 0
                ? "w-8 h-8 rounded-full"
                : i % 3 === 1
                ? "w-6 h-6 rounded-xl"
                : "w-4 h-12 rounded-full"
            } bg-gradient-to-br ${
              i % 2 === 0
                ? "from-[#3DDAB4]/20 to-[#3DDAB4]/5"
                : "from-[#7A77FF]/20 to-[#7A77FF]/5"
            }`}
            style={{
              left: `${5 + i * 15}%`,
              top: `${10 + i * 15}%`,
            }}
          />
        ))}

        {/* Glowing corner orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#3DDAB4]/30 to-transparent rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-[#7A77FF]/20 to-transparent rounded-full blur-2xl"
        />

        {/* Performance metrics - floating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex items-center justify-center space-x-6">
            {/* Workflow Status Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.7 }}
              className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/40"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                System Active
              </span>
            </motion.div>

            {/* Processing Speed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.9 }}
              className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/40"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">
                Processing
              </span>
            </motion.div>

            {/* Data Flow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.1 }}
              className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/40"
            >
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    animate={{
                      x: [0, 8, 0],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                Data Flow
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Wave divider component
const WaveDivider = ({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) => (
  <div className={`relative ${className}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`w-full h-12 ${flip ? "transform rotate-180" : ""}`}
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        className="fill-current text-white"
      />
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        className="fill-current text-white"
      />
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        className="fill-current text-white"
      />
    </svg>
  </div>
);

export default function Home() {
  const workflowSteps = [
    {
      icon: <Send className="w-8 h-8 text-[#3DDAB4]" />,
      title: "Gửi yêu cầu",
      description: "Mô tả công việc cần tự động hóa và upload file mẫu",
    },
    {
      icon: <Bot className="w-8 h-8 text-[#3DDAB4]" />,
      title: "Phân tích & báo giá",
      description: "Chúng tôi phân tích quy trình và đưa ra báo giá chi tiết",
    },
    {
      icon: <Cog className="w-8 h-8 text-[#3DDAB4]" />,
      title: "Triển khai",
      description: "Phát triển và cấu hình hệ thống tự động hóa",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#3DDAB4]" />,
      title: "Bàn giao",
      description: "Training và bàn giao hệ thống hoàn chỉnh",
    },
    {
      icon: <Settings className="w-8 h-8 text-[#3DDAB4]" />,
      title: "Hỗ trợ",
      description: "Maintenance và nâng cấp liên tục",
    },
  ];

  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Nhập liệu thủ công",
      description:
        "Nhân viên tốn hàng giờ mỗi ngày để nhập dữ liệu từ file Excel, email, form...",
      category: "automation",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Task rải rác, mất phối hợp",
      description:
        "Công việc trong email, chat, Excel, khó theo dõi tiến độ và deadline",
      category: "management",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Sai sót & thiếu minh bạch",
      description:
        "Lỗi nhập liệu, thông tin rải rác, không biết ai đang làm gì",
      category: "both",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-red-500" />,
      title: "Lặp lại & kém hiệu quả",
      description:
        "Làm đi làm lại công việc thủ công, họp nhiều nhưng không hiệu quả",
      category: "both",
    },
  ];

  const automationFeatures = [
    {
      icon: (
        <Bot className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#3DDAB4]" />
      ),
      title: "RPA & Workflow Automation",
      description:
        "Tự động hóa quy trình từ đơn giản đến phức tạp, loại bỏ công việc thủ công",
    },
    {
      icon: (
        <Database className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#3DDAB4]" />
      ),
      title: "Data Integration & Sync",
      description:
        "Đồng bộ dữ liệu tự động giữa các hệ thống, Excel, database, API",
    },
    {
      icon: (
        <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#3DDAB4]" />
      ),
      title: "Smart Triggers & Actions",
      description:
        "Tự động phản ứng theo sự kiện: email mới, form submit, schedule...",
    },
    {
      icon: (
        <FileText className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#3DDAB4]" />
      ),
      title: "Auto Report & Notification",
      description:
        "Tạo báo cáo, gửi email, thông báo tự động theo lịch hoặc điều kiện",
    },
  ];

  const managementFeatures = [
    {
      icon: (
        <FolderKanban className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#7A77FF]" />
      ),
      title: "Task & Project Management",
      description:
        "Kanban board, Gantt chart, Sprint planning cho mọi loại dự án",
    },
    {
      icon: (
        <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#7A77FF]" />
      ),
      title: "Team Collaboration Hub",
      description:
        "Chat real-time, video call, file sharing, comment trong một nền tảng",
    },
    {
      icon: (
        <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#7A77FF]" />
      ),
      title: "Performance Analytics",
      description:
        "Dashboard KPI, productivity metrics, burndown chart theo dõi team",
    },
    {
      icon: (
        <Eye className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#7A77FF]" />
      ),
      title: "Real-time Visibility",
      description:
        "Theo dõi ai đang làm gì, tiến độ task, workload của từng người",
    },
  ];

  const useCases = [
    {
      icon: (
        <Calculator className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#3DDAB4]" />
      ),
      title: "Kế toán",
      category: "automation",
      tasks: [
        "Tự động nhập hóa đơn từ email vào hệ thống",
        "Đối soát và phân loại giao dịch tự động",
        "Tạo báo cáo tài chính hàng tháng",
        "Tính lương, thuế và phụ cấp",
      ],
    },
    {
      icon: (
        <Users className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#7A77FF]" />
      ),
      title: "Nhân sự - HR",
      category: "both",
      tasks: [
        "Automation: Xử lý CV, onboarding tự động",
        "Management: Kanban board tuyển dụng",
        "Automation: Tính KPI, chấm công tự động",
        "Management: Dashboard OKR & hiệu suất team",
      ],
    },
    {
      icon: (
        <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#3DDAB4]" />
      ),
      title: "Bán hàng - Sales",
      category: "both",
      tasks: [
        "Automation: Lead scoring, gửi email nurturing",
        "Management: CRM pipeline tracking",
        "Automation: Tạo báo giá, hợp đồng tự động",
        "Management: Sales performance dashboard",
      ],
    },
    {
      icon: (
        <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#7A77FF]" />
      ),
      title: "Quản lý dự án",
      category: "management",
      tasks: [
        "Kanban/Gantt chart quản lý task",
        "Team collaboration: chat, file, comment",
        "Dashboard theo dõi tiến độ real-time",
        "Resource planning & workload balancing",
      ],
    },
  ];

  const valueProps = [
    {
      icon: (
        <Clock className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#3DDAB4]" />
      ),
      title: "Tiết kiệm 70% thời gian",
      description:
        "Giảm thời gian xử lý công việc thủ công từ 8 giờ xuống 2 giờ mỗi ngày",
    },
    {
      icon: (
        <Target className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#3DDAB4]" />
      ),
      title: "Giảm 95% sai sót",
      description: "Loại bỏ human error, đảm bảo độ chính xác tuyệt đối",
    },
    {
      icon: (
        <Eye className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#3DDAB4]" />
      ),
      title: "Tăng minh bạch 100%",
      description: "Mọi hoạt động được track và audit trail đầy đủ",
    },
    {
      icon: (
        <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#3DDAB4]" />
      ),
      title: "ROI 300% sau 6 tháng",
      description:
        "Chi phí đầu tư được hoàn vốn nhanh nhờ tiết kiệm chi phí vận hành",
    },
  ];

  const faqs = [
    {
      question: "Thời gian triển khai automation mất bao lâu?",
      answer:
        "Tùy độ phức tạp: Simple workflow dưới 5 ngày, Complex system 4-6 tuần. Chúng tôi sẽ có timeline chi tiết sau khi phân tích yêu cầu.",
    },
    {
      question: "Chi phí có bao gồm training và support không?",
      answer:
        "Có! Gói Pro và Enterprise bao gồm training team và support. Chúng tôi đảm bảo team bạn sử dụng thành thạo hệ thống.",
    },
    {
      question: "Có tích hợp được với hệ thống hiện tại không?",
      answer:
        "Có thể tích hợp với 99% hệ thống thông qua API, database connection, file export/import. Chúng tôi đã làm với SAP, Oracle, Salesforce...",
    },
    {
      question: "Bảo mật dữ liệu như thế nào?",
      answer:
        "Tuân thủ ISO 27001, mã hóa AES-256, access control chi tiết. Dữ liệu được backup tự động và có disaster recovery plan.",
    },
    {
      question: "Nếu cần thay đổi quy trình sau khi deploy?",
      answer:
        "Trong thời gian warranty miễn phí. Sau đó có gói maintenance với chi phí hợp lý để điều chỉnh theo nhu cầu kinh doanh.",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <section className="pt-6 sm:pt-12 lg:pt-16 xl:pt-20 pb-12 sm:pb-16 lg:pb-20 xl:pb-24 relative overflow-hidden">
        {/* Mesh gradient background - xanh ngọc + tím pastel */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3DDAB4]/15 via-[#7A77FF]/8 to-white"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#3DDAB4]/5 to-[#7A77FF]/10"></div>

        {/* Dot grid pattern overlay - mờ để tạo chiều sâu */}
        <div
          className="absolute inset-0 opacity-10 sm:opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #3DDAB4 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-5 sm:opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle, #7A77FF 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            transform: "translateX(14px) translateY(14px)",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <Badge className="inline-flex mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-[#3DDAB4]/20 to-[#7A77FF]/20 text-[#7A77FF] border-[#7A77FF]/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
                ⚡ Trusted by 100+ companies
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Quản trị hệ thống tổng thể &{" "}
                <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                  kết hợp tự động, bán tự động
                </span>{" "}
                trong công việc
              </h1>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Giải phóng 90% thời gian thủ công với Automation. Tăng 60% hiệu
                quả team với quản trị thông minh. Giải pháp toàn diện được cá
                biệt hóa quy trình cho mỗi doanh nghiệp.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12 justify-center lg:justify-start">
                <Link
                  href={"/request"}
                  className="w-full sm:w-auto sm:flex-1 lg:flex-none"
                >
                  <motion.button
                    className={`w-full relative overflow-hidden bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] hover:from-[#35c5a3] hover:to-[#6b69e8] text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl lg:rounded-2xl shadow-lg transition-all duration-300 cursor-pointer font-bold`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(122, 119, 255, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] opacity-0 blur-xl`}
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 inline-flex items-center justify-center font-bold">
                      <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Gửi yêu cầu ngay
                    </span>
                  </motion.button>
                </Link>

                <Button
                  asChild
                  variant="outline"
                  size={null}
                  className="w-full sm:w-auto sm:flex-1 lg:flex-none text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-[#7A77FF]/30 text-[#7A77FF] hover:bg-[#7A77FF]/5 rounded-xl lg:rounded-2xl hover:text-[#7A77FF] font-bold"
                >
                  <a
                    href="tel:+84779886666" // E.164 format cho ổn định: +84 cho VN
                    aria-label="Gọi tư vấn 0779 886 666"
                    target="_self"
                  >
                    <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    <span className="hidden sm:inline">
                      Gọi tư vấn: 0779 886 666
                    </span>
                    <span className="sm:hidden">0779 886 666</span>
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-200/50 max-w-md mx-auto lg:max-w-none lg:mx-0">
                {[
                  { value: "90%", label: "Giảm thời gian" },
                  { value: "99%", label: "Giảm sai sót" },
                  { value: "24/7", label: "Hỗ trợ" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Isometric Workspace */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2 flex items-center justify-center px-4 sm:px-0"
            >
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-none">
                <IsometricWorkspace />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section - Creative & Engaging */}
      <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-white">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large gradient circles */}
          <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-[#3DDAB4]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-[#7A77FF]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-[#3DDAB4]/10 to-[#7A77FF]/10 border-2 border-[#3DDAB4]/20 px-6 py-2.5 rounded-full">
              <Sparkles className="w-4 h-4 text-[#3DDAB4]" />
              <span className="font-bold text-sm tracking-wide bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                LÝ DO CHỌN CHÚNG TÔI
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-5 leading-tight">
              3 cam kết làm nên
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                  sự khác biệt
                </span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="8"
                  viewBox="0 0 300 8"
                  fill="none"
                >
                  <motion.path
                    d="M5 5C75 2 225 2 295 5"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3DDAB4" />
                      <stop offset="100%" stopColor="#7A77FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              100+ doanh nghiệp đã tin tưởng và đồng hành cùng Operis
            </p>
          </motion.div>

          {/* Timeline-style Features */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3DDAB4] via-[#5DC4AA] to-[#7A77FF] hidden lg:block" />

            <div className="space-y-12 lg:space-y-16">
              {/* Feature 1: Speed */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Number circle */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#3DDAB4] to-[#2DC49E] flex items-center justify-center shadow-lg shadow-[#3DDAB4]/20 lg:relative lg:z-10">
                    <span className="text-white text-xl font-black">1</span>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 relative overflow-hidden bg-white rounded-2xl p-6 lg:p-8 shadow-lg border-2 border-[#3DDAB4]/20 hover:border-[#3DDAB4]/40 transition-all duration-300 hover:shadow-xl group">
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          "linear-gradient(135deg, rgba(61, 218, 180, 0.05) 0%, rgba(61, 218, 180, 0.02) 50%, transparent 100%)",
                          "linear-gradient(135deg, transparent 0%, rgba(61, 218, 180, 0.05) 50%, rgba(61, 218, 180, 0.02) 100%)",
                          "linear-gradient(135deg, rgba(61, 218, 180, 0.02) 0%, transparent 50%, rgba(61, 218, 180, 0.05) 100%)",
                          "linear-gradient(135deg, rgba(61, 218, 180, 0.05) 0%, rgba(61, 218, 180, 0.02) 50%, transparent 100%)",
                        ],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3DDAB4]/10 to-[#3DDAB4]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Zap className="w-6 h-6 text-[#3DDAB4]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              Tốc độ triển khai
                            </h3>
                            <p className="text-[#3DDAB4] font-semibold text-sm">
                              Không làm bạn chờ đợi
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#3DDAB4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Clock className="w-4 h-4 text-[#3DDAB4]" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 text-base">
                                Demo ngay trong ngày
                              </p>
                              <p className="text-sm text-gray-600">
                                Tính từ khi chốt dự án, bạn sẽ thấy demo ngay
                                thì e để là chỉ cần bạn muốn, sẽ demo sơ bộ quy
                                trình công việc theo đúng yêu cầu cá biệt hóa
                                doanh nghiệp của bạn
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#3DDAB4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-[#3DDAB4]" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">
                                Bàn giao dưới 7 ngày
                              </p>
                              <p className="text-sm text-gray-600">
                                Cam kết với các dự án vừa và nhỏ
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#3DDAB4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <TrendingUp className="w-4 h-4 text-[#3DDAB4]" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">
                                Quy trình tối ưu
                              </p>
                              <p className="text-sm text-gray-600">
                                Không chậm trễ, không phát sinh thêm chi phí
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Big stat */}
                      <div className="text-center bg-gradient-to-br from-[#3DDAB4]/10 to-transparent px-6 py-5 rounded-xl">
                        <div className="text-5xl font-black bg-gradient-to-r from-[#3DDAB4] to-[#2DC49E] bg-clip-text text-transparent">
                          7x
                        </div>
                        <p className="text-xs font-semibold text-gray-600 mt-1.5">
                          Nhanh hơn
                          <br />
                          thông thường
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2: Customization */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#7A77FF] to-[#6865E8] flex items-center justify-center shadow-lg shadow-[#7A77FF]/20 lg:relative lg:z-10">
                    <span className="text-white text-xl font-black">2</span>
                  </div>

                  <div className="flex-1 relative overflow-hidden bg-white rounded-2xl p-6 lg:p-8 shadow-lg border-2 border-[#7A77FF]/20 hover:border-[#7A77FF]/40 transition-all duration-300 hover:shadow-xl group">
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          "linear-gradient(135deg, rgba(122, 119, 255, 0.05) 0%, rgba(122, 119, 255, 0.02) 50%, transparent 100%)",
                          "linear-gradient(135deg, transparent 0%, rgba(122, 119, 255, 0.05) 50%, rgba(122, 119, 255, 0.02) 100%)",
                          "linear-gradient(135deg, rgba(122, 119, 255, 0.02) 0%, transparent 50%, rgba(122, 119, 255, 0.05) 100%)",
                          "linear-gradient(135deg, rgba(122, 119, 255, 0.05) 0%, rgba(122, 119, 255, 0.02) 50%, transparent 100%)",
                        ],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7A77FF]/10 to-[#7A77FF]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Settings className="w-6 h-6 text-[#7A77FF]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              Tùy biến 100%
                            </h3>
                            <p className="text-[#7A77FF] font-semibold text-sm">
                              Được build riêng cho bạn
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#7A77FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Cog className="w-4 h-4 text-[#7A77FF]" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">
                                Chức năng riêng biệt
                              </p>
                              <p className="text-sm text-gray-600">
                                Xây dựng theo yêu cầu quản trị của doanh nghiệp
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#7A77FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <RefreshCw className="w-4 h-4 text-[#7A77FF]" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">
                                Chỉnh sửa linh hoạt
                              </p>
                              <p className="text-sm text-gray-600">
                                Thay đổi chức năng, luồng việc theo thực tế
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#7A77FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Shield className="w-4 h-4 text-[#7A77FF]" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">
                                Giải pháp độc quyền
                              </p>
                              <p className="text-sm text-gray-600">
                                Chỉ dành riêng cho doanh nghiệp bạn, không share
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center bg-gradient-to-br from-[#7A77FF]/10 to-transparent px-6 py-5 rounded-xl">
                        <div className="text-5xl font-black bg-gradient-to-r from-[#7A77FF] to-[#6865E8] bg-clip-text text-transparent">
                          ∞
                        </div>
                        <p className="text-xs font-semibold text-gray-600 mt-1.5">
                          Khả năng
                          <br />
                          tùy biến
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 3: Cost */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#3DDAB4] via-[#5DC4AA] to-[#7A77FF] flex items-center justify-center shadow-lg shadow-[#3DDAB4]/20 lg:relative lg:z-10">
                    <span className="text-white text-xl font-black">3</span>
                  </div>

                  <div className="flex-1 relative overflow-hidden bg-white rounded-2xl p-6 lg:p-8 shadow-lg border-2 border-[#3DDAB4]/20 hover:border-[#7A77FF]/40 transition-all duration-300 hover:shadow-xl group">
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          "linear-gradient(135deg, rgba(61, 218, 180, 0.05) 0%, rgba(122, 119, 255, 0.02) 100%)",
                          "linear-gradient(135deg, rgba(122, 119, 255, 0.05) 0%, rgba(61, 218, 180, 0.02) 100%)",
                          "linear-gradient(135deg, rgba(61, 218, 180, 0.02) 0%, rgba(122, 119, 255, 0.05) 100%)",
                          "linear-gradient(135deg, rgba(61, 218, 180, 0.05) 0%, rgba(122, 119, 255, 0.02) 100%)",
                        ],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3DDAB4]/10 via-[#5DC4AA]/5 to-[#7A77FF]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <DollarSign className="w-6 h-6 text-[#3DDAB4]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              Chi phí hợp lý
                            </h3>
                            <p className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent font-semibold text-sm">
                              Minh bạch & tiết kiệm
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#3DDAB4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-[#3DDAB4]" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">
                                Dự án vừa và nhỏ dưới 10 triệu
                              </p>
                              <p className="text-sm text-gray-600">
                                Cam kết phù hợp với mọi quy mô doanh nghiệp
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#7A77FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Calculator className="w-4 h-4 text-[#7A77FF]" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">
                                Tùy chỉnh theo độ phức tạp
                              </p>
                              <p className="text-sm text-gray-600">
                                Báo giá chi tiết, rõ ràng từng hạng mục công
                                việc
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#3DDAB4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <TrendingDown className="w-4 h-4 text-[#3DDAB4]" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">
                                Tiết kiệm hơn nhiều
                              </p>
                              <p className="text-sm text-gray-600">
                                So với thuê nhân sự chuyên trách hoặc team
                                outsource
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center bg-gradient-to-br from-[#3DDAB4]/10 via-[#5DC4AA]/5 to-[#7A77FF]/10 px-6 py-5 rounded-xl">
                        <div className="text-5xl font-black bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                          50%
                        </div>
                        <p className="text-xs font-semibold text-gray-600 mt-1.5">
                          Tiết kiệm
                          <br />
                          chi phí
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 lg:mt-16"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#3DDAB4] via-[#5DC4AA] to-[#7A77FF] p-1">
              <div className="bg-white rounded-2xl p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="text-center lg:text-left flex-1">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3">
                      Bắt đầu với Operis
                      <span className="block bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                        ngay hôm nay
                      </span>
                    </h3>
                    <p className="text-base text-gray-600">
                      Nhận tư vấn miễn phí & demo trong ngày
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/request">
                      <button className="group relative overflow-hidden bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:shadow-[#3DDAB4]/30 transition-all duration-300">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                        />
                        <span className="relative flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Gửi yêu cầu ngay
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pt-16 pb-20 relative overflow-hidden">
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #3DDAB4 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          >
            <div className="text-center">
              <Badge className="mb-4 bg-gradient-to-r from-[#3DDAB4]/20 to-[#7A77FF]/20 text-[#7A77FF] border-[#7A77FF]/30 rounded-full px-4 py-2">
                ⚡ Miễn phí tư vấn và báo giá
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Mô tả{" "}
                <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                  quy trình
                </span>{" "}
                cần tự động hóa
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Chỉ cần 2 phút để mô tả. Chúng tôi sẽ phân tích và đưa ra giải
                pháp phù hợp trong 24h.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Locked Form with Overlay */}
        <div className="relative">
          {/* Form content - slightly blurred */}
          <div className="filter blur-[2px] pointer-events-none select-none opacity-40">
            <RequestForm />
          </div>

          {/* Simple Lock Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center bg-white/20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 mx-4 border border-gray-200"
            >
              {/* Lock Icon */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-4"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#3DDAB4] to-[#7A77FF] rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Tính năng sắp ra mắt
              </h3>

              <p className="text-gray-600 mb-6">
                Mở lại sau ngày{" "}
                <span className="font-bold text-[#7A77FF]">17/10</span>
              </p>

              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] text-white hover:opacity-90 px-6 py-3 rounded-xl font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Liên hệ ngay
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Problem Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Những <span className="text-red-500">nỗi đau</span> doanh nghiệp
                đang gặp phải
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Công việc thủ công, nhân lực phân tán cản trở tăng trưởng, lãng
                phí thời gian
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {problems.map((problem, index) => (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  key={index}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotate: 2,
                      y: -4,
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="h-full"
                  >
                    <Card className="border-red-200/50 hover:border-red-300/50 transition-all duration-300 p-6 h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl">
                      <CardContent className="p-0 text-center">
                        <motion.div
                          className="mb-6 flex justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-4 bg-red-50 rounded-2xl">
                            {problem.icon}
                          </div>
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {problem.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {problem.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider className="text-white" flip />

      {/* Solution Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Giải pháp{" "}
              <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                tự động hóa, cá biệt hoá{" "}
              </span>
              cho doanh nghiệp của bạn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi phát triển hệ thống automation riêng cho từng doanh
              nghiệp, phù hợp 100% với quy trình và nhu cầu hiện tại
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {[
                  {
                    icon: Bot,
                    title: "AI-Powered Analysis",
                    description:
                      "Phân tích quy trình hiện tại và đề xuất giải pháp tự động hóa tối ưu nhất",
                    color: "from-[#3DDAB4] to-[#7A77FF]",
                  },
                  {
                    icon: Cog,
                    title: "Custom Development",
                    description:
                      "Phát triển riêng theo yêu cầu, không dùng template có sẵn",
                    color: "from-[#7A77FF] to-[#3DDAB4]",
                  },
                  {
                    icon: Shield,
                    title: "Enterprise Security",
                    description:
                      "Bảo mật cấp enterprise với mã hóa và audit trail đầy đủ",
                    color: "from-[#3DDAB4] to-[#7A77FF]",
                  },
                  {
                    icon: Users,
                    title: "Full Support",
                    description:
                      "Training team, technical support và maintenance lâu dài",
                    color: "from-[#7A77FF] to-[#3DDAB4]",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-gray-200/50 shadow-2xl p-8 bg-gradient-to-br from-[#3DDAB4]/5 via-white to-[#7A77FF]/5 rounded-3xl">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Before vs After Automation
                  </h3>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <h4 className="font-bold text-red-600 mb-4 text-lg">
                          ❌ Trước khi automation
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li className="p-2 bg-red-50 rounded-xl">
                            8 giờ/ngày nhập liệu
                          </li>
                          <li className="p-2 bg-red-50 rounded-xl">
                            5-10% tỷ lệ sai sót
                          </li>
                          <li className="p-2 bg-red-50 rounded-xl">
                            Báo cáo manual mất 2 ngày
                          </li>
                          <li className="p-2 bg-red-50 rounded-xl">
                            Khó track và audit
                          </li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-green-600 mb-4 text-lg">
                          ✅ Sau khi automation
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li className="p-2 bg-green-50 rounded-xl">
                            2 giờ/ngày giám sát
                          </li>
                          <li className="p-2 bg-green-50 rounded-xl">
                            0.1% tỷ lệ sai sót
                          </li>
                          <li className="p-2 bg-green-50 rounded-xl">
                            Báo cáo real-time tự động
                          </li>
                          <li className="p-2 bg-green-50 rounded-xl">
                            100% audit trail
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#3DDAB4]/20 to-[#7A77FF]/20 rounded-2xl p-4 text-center">
                      <p className="font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent text-lg">
                        Kết quả: Tiết kiệm 75% thời gian + 95% giảm sai sót
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider className="text-gray-50" />

      {/* Workflow Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Quy trình triển khai{" "}
              <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                5 bước
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Từ ý tưởng đến hệ thống hoàn chỉnh chỉ trong 1-3 tuần tùy độ phức
              tạp hệ thống
            </p>
          </div>

          {/* Mobile/Tablet: Vertical Timeline */}
          <div className="md:hidden space-y-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3DDAB4]/20 to-[#7A77FF]/20 rounded-2xl flex items-center justify-center border border-[#3DDAB4]/30">
                      {step.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  {/* Connecting Line */}
                  {index < workflowSteps.length - 1 && (
                    <div className="w-0.5 h-6 bg-gradient-to-b from-[#7A77FF]/30 to-transparent mx-auto mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal Layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#3DDAB4]/20 to-[#7A77FF]/20 rounded-3xl flex items-center justify-center mx-auto border border-[#3DDAB4]/30">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute top-10 left-full w-8 border-t-2 border-dashed border-[#7A77FF]/30" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto border border-white/50">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Timeline dự kiến
              </h3>
              <div className="grid sm:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    icon: Calendar,
                    title: "Trao đổi - Demo",
                    duration: "1 ngày",
                    description:
                      "Trao đổi thông tin và demo sản phẩm trong ngày",
                    color: "from-green-400 to-green-600",
                  },
                  {
                    icon: Calendar,
                    title: "Thực hiện dự án",
                    duration: "4 ngày",
                    description:
                      "Tiến hành thiết kế, lập trình và hoàn thiện các chức năng chính của dự án vừa và nhỏ",
                    color: "from-green-400 to-green-600",
                  },
                  {
                    icon: Calendar,
                    title: "Chỉnh sửa & Bàn giao",
                    duration: "2 ngày",
                    description:
                      "Tiếp nhận phản hồi, điều chỉnh chi tiết và bàn giao sản phẩm hoàn thiện",
                    color: "from-yellow-400 to-yellow-600",
                  },
                  {
                    icon: Calendar,
                    title: "Cam kết & Hỗ trợ",
                    duration: "7 ngày",
                    description:
                      "Bảo hành, hỗ trợ kỹ thuật và tối ưu sau khi bàn giao dự án",
                    color: "from-red-400 to-red-600",
                  },
                ].map((timeline, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${timeline.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                    >
                      <timeline.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                      {timeline.title}
                    </h4>
                    <p className="text-gray-600 font-semibold text-base sm:text-lg">
                      {timeline.duration}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {timeline.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Hai giải pháp{" "}
              <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                toàn diện
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Kết hợp tự động hóa thông minh và quản trị công việc hiệu quả để
              tối ưu hóa hoạt động doanh nghiệp
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Automation Service */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all h-full bg-gradient-to-br from-[#3DDAB4]/5 to-white">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#3DDAB4] to-[#22c55e] flex items-center justify-center mb-4 sm:mb-6">
                    <Bot className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
                    Automation - Tự động hóa
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                    Giải phóng nhân sự khỏi công việc lặp đi lặp lại, tăng năng
                    suất 3-5 lần với RPA và workflow automation
                  </p>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DDAB4] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        Tự động nhập liệu, xử lý dữ liệu từ nhiều nguồn
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DDAB4] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        Tích hợp hệ thống, đồng bộ dữ liệu tự động
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DDAB4] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        Tạo báo cáo, gửi email, thông báo tự động
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DDAB4] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        AI automation cho phân tích và dự đoán
                      </p>
                    </div>
                  </div>

                  <Link href="/services/automation">
                    <Button className="w-full bg-gradient-to-r from-[#3DDAB4] to-[#22c55e] hover:opacity-90 text-white font-semibold text-sm sm:text-base">
                      Xem chi tiết Automation
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Management Service */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all h-full bg-gradient-to-br from-[#7A77FF]/5 to-white">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#7A77FF] to-[#6b67ff] flex items-center justify-center mb-4 sm:mb-6">
                    <FolderKanban className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
                    Management - Quản trị
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                    Quản lý công việc, dự án và team hiệu quả với công cụ hiện
                    đại, tăng 40% năng suất làm việc nhóm
                  </p>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#7A77FF] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        Kanban, Gantt chart và Sprint planning
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#7A77FF] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        Team collaboration với chat, video call
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#7A77FF] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        Performance analytics và KPI dashboard
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#7A77FF] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        Knowledge base và document management
                      </p>
                    </div>
                  </div>

                  <Link href="/services/management">
                    <Button className="w-full bg-gradient-to-r from-[#7A77FF] to-[#6b67ff] hover:opacity-90 text-white font-semibold text-sm sm:text-base">
                      Xem chi tiết Management
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Combined Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="border-0 shadow-lg bg-gradient-to-r from-[#3DDAB4]/10 via-white to-[#7A77FF]/10">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Sparkles className="w-8 h-8 text-[#7A77FF] mx-auto mb-3" />
                  <h4 className="text-xl font-bold mb-2">
                    Kết hợp cả hai = Hiệu quả tối đa
                  </h4>
                  <p className="text-gray-600">
                    Tự động hóa quy trình + Quản trị team = Doanh nghiệp vận
                    hành thông minh, tiết kiệm chi phí và tăng trưởng bền vững
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent mb-2">
                      70-90%
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Giảm thời gian thủ công
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent mb-2">
                      3-5x
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Tăng năng suất team
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent mb-2">
                      95%+
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Giảm lỗi sai sót
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider className="text-white" flip />

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Tính năng{" "}
              <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                nổi bật
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Giải pháp toàn diện kết hợp Automation và Management để tối ưu hóa
              vận hành doanh nghiệp
            </p>
          </div>

          {/* Automation Features */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#3DDAB4] to-[#22c55e] flex items-center justify-center">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Automation - Tự động hóa
              </h3>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {automationFeatures.map((feature, index) => (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    key={index}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                        rotate: 1,
                        y: -4,
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="h-full group"
                    >
                      <Card className="border-gray-200/50 hover:border-[#7A77FF]/30 hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 lg:p-8 h-full bg-gradient-to-br from-white to-gray-50/50 rounded-2xl sm:rounded-3xl">
                        <CardContent className="p-0 text-center">
                          <motion.div
                            className="mb-4 sm:mb-6"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#7A77FF]/10 to-[#3DDAB4]/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto relative overflow-hidden">
                              {/* Glow effect on hover */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#3DDAB4]/20 to-[#7A77FF]/20 rounded-3xl opacity-0"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className="relative z-10">
                                {feature.icon}
                              </div>
                            </div>
                          </motion.div>
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                            {feature.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Management Features */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#7A77FF] to-[#6b67ff] flex items-center justify-center">
                <FolderKanban className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Management - Quản trị
              </h3>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {managementFeatures.map((feature, index) => (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    key={index}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                        rotate: 1,
                        y: -4,
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="h-full group"
                    >
                      <Card className="border-gray-200/50 hover:border-[#3DDAB4]/30 hover:shadow-2xl transition-all duration-300 p-8 h-full bg-gradient-to-br from-white to-gray-50/50 rounded-3xl">
                        <CardContent className="p-0 text-center">
                          <motion.div
                            className="mb-6"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="w-20 h-20 bg-gradient-to-br from-[#7A77FF]/10 to-[#3DDAB4]/10 rounded-3xl flex items-center justify-center mx-auto relative overflow-hidden">
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#3DDAB4]/20 to-[#7A77FF]/20 rounded-3xl opacity-0"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className="relative z-10">
                                {feature.icon}
                              </div>
                            </div>
                          </motion.div>
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                            {feature.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider className="text-gradient-to-br from-[#3DDAB4]/10 to-[#7A77FF]/10" />

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-[#3DDAB4]/10 to-[#7A77FF]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ứng dụng{" "}
              <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                thực tế
              </span>{" "}
              theo từng phòng ban
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Mỗi phòng ban có nhu cầu tự động hóa và quản trị riêng, chúng tôi
              có giải pháp phù hợp cho từng bộ phận
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-gray-200/50 hover:border-[#3DDAB4]/30 hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 lg:p-8 h-full bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-[#3DDAB4]/10 to-[#7A77FF]/10 rounded-2xl sm:rounded-3xl mr-3 sm:mr-4">
                        {useCase.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                        {useCase.title}
                      </h3>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      {useCase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] rounded-full flex items-center justify-center mt-0.5 mr-2 sm:mr-3">
                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                          </div>
                          <span className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            {task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider className="text-white" flip />

      {/* Value Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Lợi ích{" "}
              <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                cụ thể
              </span>{" "}
              cho doanh nghiệp
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Những con số thực tế từ khách hàng đã triển khai automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {valueProps.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-gray-200/50 hover:border-[#3DDAB4]/30 hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 lg:p-8 h-full bg-gradient-to-br from-white to-[#3DDAB4]/5 rounded-2xl sm:rounded-3xl">
                  <CardContent className="p-0 flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
                    <div className="flex-shrink-0 p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-[#3DDAB4]/10 to-[#7A77FF]/10 rounded-2xl sm:rounded-3xl">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider className="text-gray-50" />

      {/* FAQ */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Câu hỏi{" "}
              <span className="bg-gradient-to-r from-[#3DDAB4] to-[#7A77FF] bg-clip-text text-transparent">
                thường gặp
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Những thắc mắc phổ biến từ khách hàng về dịch vụ automation
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200/50 rounded-2xl px-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-[#7A77FF] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider
        className="text-gradient-to-r from-[#7A77FF] to-[#3DDAB4]"
        flip
      />

      {/* Closing CTA với gradient background */}
      <section className="py-20 bg-gradient-to-r from-[#7A77FF] to-[#3DDAB4] relative overflow-hidden">
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/15 rounded-full blur-lg"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Hãy để chúng tôi{" "}
              <span className="text-white/90">tự động hóa công việc</span> – Bạn
              chỉ cần tập trung vào{" "}
              <span className="text-white/90">kinh doanh</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed">
              Tham gia cùng 500+ doanh nghiệp đã tăng hiệu suất 70% nhờ
              automation.
              <br />
              Tư vấn miễn phí và báo giá trong 24 giờ.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={"/request"}
                className="bg-white inline-flex items-center justify-center text-[#7A77FF] hover:bg-gray-100 text-xl px-12 py-4 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Gửi yêu cầu miễn phí
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
              <Button
                variant="outline"
                size={null}
                className="text-lg px-8 py-4 border-2 border-[#7A77FF]/30 text-[#7A77FF] hover:bg-white/80 rounded-2xl hover:text-[#7A77FF] font-bold"
              >
                <Phone className="mr-2 w-5 h-5" />
                Gọi ngay: 1900 1234
              </Button>
            </div>

            <div className="mt-12 text-white/80">
              <p className="text-sm">
                ⚡ Tư vấn miễn phí • 📞 Phản hồi trong 2 giờ • ✅ Báo giá cố
                định
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
