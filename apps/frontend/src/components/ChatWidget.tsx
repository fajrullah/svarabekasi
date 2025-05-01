// src/components/ChatWidget.tsx
"use client";
import { useState } from "react";
import ChatMessages from "./ChatMessages";
import InputArea from "./InputArea";
import LinkPreview from "./LinkPreview";
import ImageLocationCard from "./ImageLocationCard";
interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}


export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "user", text: "Saya baru saja berusia 17thn mau buat KTP gimana?" },
    { id: 2, sender: "bot", text: "Wihh selamat ya udah 17 tahun! 🎉" },
    { id: 3, sender: "bot", text: "Buat KTP pertama kali gampang kok! Kamu tinggal datang ke kantor Disdukcapil (Dinas Kependudukan dan Catatan Sipil) di Margahayu. Bawa berkas ini ya:" },
  ]);
  const [selectedService, setSelectedService] = useState("General");

  const handleSend = (message: string) => {
    setMessages([...messages, { id: Date.now(), sender: "user", text: message }]);
  };
  
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <ChatMessages messages={messages} />
      <InputArea onSend={handleSend} selectedService={selectedService} />
    </div>
  );
}