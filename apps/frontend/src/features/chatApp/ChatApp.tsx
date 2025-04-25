// src/features/chatApp/ChatApp.tsx
"use client";

import Sidebar from "@/components/Sidebar";
import ChatWidget from "@/components/ChatWidget";

export default function ChatApp() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      {/* Sidebar column */}
      <div className="w-64 border-r border-zinc-200 dark:border-zinc-800">
        <Sidebar />
      </div>

      {/* Main content column */}
      <div className="flex-1 p-6 overflow-y-auto">
        <ChatWidget />
      </div>
    </div>
  );
}
