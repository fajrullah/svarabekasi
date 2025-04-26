// src/features/chatApp/ChatApp.tsx
"use client";


import Sidebar from "@/components/Sidebar";
import ChatWidget from "@/components/ChatWidget";
import { useState } from "react";

import { 
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  MessageSquarePlus,
} from "lucide-react";

export function SidebarControls({ isOpen, toggleSidebar }: { 
  isOpen: boolean, 
  toggleSidebar: () => void 
}) {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200">
      {/* Sidebar Toggle (Icon only) */}
      <button 
        onClick={toggleSidebar}
        className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label={isOpen ? "Hide sidebar" : "Show sidebar"}
      >
        {isOpen ? (
          <PanelLeftClose className="w-5 h-5 text-gray-600" />
        ) : (
          <PanelLeftOpen className="w-5 h-5 text-gray-600" />
        )}
      </button>
      <button 
        className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Search"
      >
        <Search className="w-5 h-5 text-gray-600" />
      </button>
      <div className="flex-1" />
      <button 
        className="p-1.5 rounded-lg text-indigo-500 hover:bg-indigo-50 transition-colors"
        aria-label="New chat"
      >
        <MessageSquarePlus className="w-5 h-5" />
      </button>
    </div>
  );
}
export default function ChatApp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar (20%) - DeepSeek exact style */}
      <aside className="w-64 min-w-[200px] flex flex-col">
        <header className="p-4 text-lg font-semibold">
          Svara Bekasi
          <SidebarControls 
          isOpen={isSidebarOpen} 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        </header>
        <div className="flex-1 overflow-y-auto">
          <Sidebar />
        </div>
      </aside>

      {/* Main Content (80%) */}
      <main className="flex-1 flex flex-col bg-white">
        <header className="p-4 text-xl font-bold border-b">
          AI Chat Assistant
        </header>
        <section className="flex-1 overflow-y-auto px-[10%]">
          <ChatWidget />
        </section>
      </main>
    </div>
  );
}