"use client";

import BekasiTaxCalculatorCard from "./BekasiTaxCalculator";
import ImageLocationCard from "./ImageLocationCard";
import LinkPreview from "./LinkPreview";
import QRQueueCard from "./QRqueueCard";

interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}

interface ChatMessagesProps {
  messages: Message[];
  classNames?: string;
}

export default function ChatMessages({ messages, classNames }: ChatMessagesProps) {
  return (
    <div className={`flex-1 p-2 overflow-y-auto ${classNames}`}>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] px-2 py-2 rounded-xl ${classNames} ${
              msg.sender === "user"
                ? "bg-gray-100 text-gray-800"
                : "text-gray-600"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      {[
        { id: 4, sender: "bot", text: "Ini alamatnya ya:" }].map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] px-2 py-1 rounded-xl ${classNames} ${
              msg.sender === "user"
                ? "bg-gray-100 text-gray-800"
                : "text-gray-600"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}

      {[
        { id: 5, sender: "bot", text: "1. Fotokopi Kartu Keluarga (KK)" },
        { id: 6, sender: "bot", text: "2. Datang langsung buat perekaman (foto, sidik jari, tanda tangan)" },
      ].map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] px-2 py-1 rounded-xl ${classNames} ${
              msg.sender === "user"
                ? "bg-gray-100 text-gray-800"
                : "text-gray-600"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
       <div className="p-4 space-y-2">
        <ImageLocationCard 
          imageSrc="/dummy.png" 
          onCheckLocation={() => window.open("https://maps.google.com")}
          className="max-w-md"
        />
        <LinkPreview url="https://www.google.com/maps?s=web&lqi=ChRkdWtjYXBpbCBiZWthc2kga290YUia6M3y862AgAhaLhAAEAEQAhgBGAIiFGR1a2NhcGlsIGJla2FzaSBrb3RhKggIAhAAEAEQAjICaWSSARFnb3Zlcm5tZW50X29mZmljZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VRMk4zSlFMVTlCRUFFqgE9EAEyHxABIhtYLp3F_zR7WGW4zJ5DSLjny909XY0mTI8NtW0yGBACIhRkdWtjYXBpbCBiZWthc2kga290YfoBBAgAEEg&vet=12ahUKEwjn4O7A-_eMAxW9zjgGHXRKIHUQ1YkKegQIGxAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KZE93wCCjmkuMVP_fRGj10Cj&daddr=Jl.+Insinyur+H.+Juanda+No.100,+RT.001/RW.005,+Margahayu,+Kec.+Bekasi+Tim.,+Kota+Bks,+Jawa+Barat+17113&hl=id" className="max-w-md" />
        {[
        { id: 5, sender: "user", text: "tolong buat antrian" },
        { id: 6, sender: "bot", text: "baik, ini adalah nomor antrian anda, gunakan ini saat anda datang ke kecamatan" },
        ].map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-2 py-1 rounded-xl ${classNames} ${
                msg.sender === "user"
                  ? "bg-gray-100 text-gray-800"
                  : "text-gray-600"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <QRQueueCard
          queueNumber="A42"
          serviceName="Antrian Kecamatan Pindahan KK"
          estimatedTime="11:30 AM - 12:00 PM"
          qrCodeUrl="/qr_dummy.png"
          dateTime="Apr 27, 2025 • 10:15 AM"
          className="max-w-sm mx-auto"
        />
        {[
        { id: 5, sender: "user", text: "saya ingin membayar pajak kendaraan B1234ABC" },
        { id: 5, sender: "bot", text: "Pajak kendaraan B1234ABC adalah sebagai berikut" },
        ].map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-2 py-1 rounded-xl ${classNames} ${
                msg.sender === "user"
                  ? "bg-gray-100 text-gray-800"
                  : "text-gray-600"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <BekasiTaxCalculatorCard />
      </div>
    </div>
  );
}
