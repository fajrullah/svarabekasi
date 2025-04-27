// src/components/ChatWidget.tsx
"use client";
import { useState } from "react";
import ChatMessages from "./ChatMessages";
import InputArea from "./InputArea";
interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}
export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "user", text: "Hi! Bot How can I help you today?" },
    { id: 2, sender: "bot", text: "Hi User! How can I help you today?" },
  ]);
  const [selectedService, setSelectedService] = useState("General");

  const handleSend = (message: string) => {
    setMessages([...messages, { id: Date.now(), sender: "user", text: message }]);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <ChatMessages messages={messages} />
      <InputArea onSend={handleSend} selectedService={selectedService} />
    </div>
  );
}