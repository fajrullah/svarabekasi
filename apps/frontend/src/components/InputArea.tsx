// src/components/InputArea.tsx
"use client";
import { useState } from "react";
import { Building, Car, House, IdCard, IndentIcon, Paperclip, Send } from "lucide-react";

interface InputAreaProps {
  onSend: (message: string) => void;
  selectedService?: string;
}

export default function InputArea({ onSend, selectedService = "General" }: InputAreaProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        console.log("File selected:", files[0]);
      }
    };
    fileInput.click();
  };

  return (
    <div className="sticky bottom-0 bg-transparent p-3 w-4xl">
      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-3 rounded-2xl bg-zinc-100 text-sm focus:outline-none resize-none"
          placeholder="Type your message..."
          rows={4}
        />
        
        <div className="absolute bottom-2 left-0 right-0 px-4 py-2 flex justify-between items-center">
          {/* Left side buttons */}
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 text-xs font-medium">
              <House size={16} /> Pembayaran PBB
            </button>
            <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 text-xs font-medium">
              <Car size={16} /> Pajak Kendaraan
            </button>
            <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 text-xs font-medium">
              <IdCard /> KTP/KK Pindahan
            </button>
          </div>
          
          {/* Right side buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleFileUpload}
              className="p-1.5 rounded-2xl bg-transparent text-gray-500 hover:bg-gray-100 border border-gray-300"
              aria-label="Attach file"
            >
              <Paperclip size={24} />
            </button>
            
            <button
              onClick={handleSend}
              className="p-1.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white"
              aria-label="Send message"
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}