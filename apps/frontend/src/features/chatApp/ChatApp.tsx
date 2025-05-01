// src/features/chatApp/ChatApp.tsx
"use client";

import { useState } from 'react';
import { PanelLeftClose, PanelLeftOpen, Menu } from 'lucide-react';
import Sidebar from "@/components/Sidebar";
import ChatWidget from "@/components/ChatWidget";

export default function ChatApp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <aside className={`
        ${isSidebarOpen ? 'w-72' : 'w-0'}
        flex-shrink-0 flex-col border-r border-gray-200 bg-white
        transition-all duration-300 ease-in-out overflow-hidden
      `}>
        <header className="flex items-center justify-between px-4 py-2 text-lg font-semibold text-gray-600">
          Svara Bekasi
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded hover:bg-gray-100"
            aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isSidebarOpen ? (
              <PanelLeftClose className="w-5 h-5 text-gray-600" />
            ) : (
              <PanelLeftOpen className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </header>
        <div className="flex-1 overflow-y-auto">
          <Sidebar />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col bg-white overflow-hidden">
        <header className="flex items-center p-4 text-xl font-bold text-gray-600">
          {!isSidebarOpen && (
            <button 
              onClick={toggleSidebar}
              className="mr-2 p-1 rounded hover:bg-gray-100"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          )}
          Bekasi Bantuin
        </header>
        <section className="flex-1 overflow-y-auto px-4 md:px-[10%]">
          <ChatWidget />
        </section>
      </main>
    </div>
  );
}