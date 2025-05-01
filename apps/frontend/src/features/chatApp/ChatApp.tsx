// src/features/chatApp/ChatApp.tsx
"use client";

import { useState } from 'react';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import Sidebar from "@/components/Sidebar";
import ChatWidget from "@/components/ChatWidget";

export default function ChatApp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-full h-screen bg-gray-50">
      {/* Sidebar with display/visibility control */}
      <aside
        className={`${isSidebarOpen ? 'block visible' : 'hidden invisible'}
        w-72 flex-shrink-0 flex-col border-r border-gray-200 bg-white
        transition-opacity duration-300 ease-in-out`}
      >
        <header className="flex items-center justify-between px-4 py-3 text-lg font-semibold text-gray-700">
          <span>Svara Bekasi</span>
          <button 
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg hover:bg-gray-100"
          >
            <PanelLeftClose className="w-5 h-5 text-gray-600" />
          </button>
        </header>
        <div className="flex-1 overflow-y-auto">
          <Sidebar />
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 flex flex-col ${isSidebarOpen ? '' : '!ml-0'}`}>
        <header className="flex items-center p-4 border-b border-gray-200 bg-white">
          {!isSidebarOpen && (
            <button 
              onClick={toggleSidebar}
              className="mr-3 p-1.5 rounded-lg hover:bg-gray-100"
            >
              <PanelLeftOpen className="w-5 h-5 text-gray-600" />
            </button>
          )}
          <h1 className="text-xl font-bold text-gray-700">Bekasi Bantuin</h1>
        </header>
        
        <section className="flex-1 overflow-y-auto p-4 md:px-[10%]">
          <ChatWidget />
        </section>
      </main>
    </div>
  );
}