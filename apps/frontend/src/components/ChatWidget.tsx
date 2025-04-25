// src/components/ChatWidget.tsx
"use client";
import { useState } from "react";

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="w-full max-w-md h-[500px] border rounded-2xl shadow-lg flex flex-col overflow-hidden bg-white dark:bg-zinc-900">
      {/* Header */}
      <div className="bg-indigo-600 text-white p-4 text-lg font-semibold">
        Chat Support
      </div>

      {/* Message List */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-zinc-100 dark:bg-zinc-800">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[80%] px-4 py-2 rounded-xl ${
              msg.sender === "user"
                ? "bg-indigo-500 text-white self-end ml-auto"
                : "bg-gray-300 text-gray-800 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="p-3 border-t flex items-center gap-2 bg-white dark:bg-zinc-900">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-700 text-sm focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full"
        >
          Send
        </button>
      </div>
    </div>
  );
}
