"use client";

interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}

interface ChatMessagesProps {
  messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] px-4 py-2 rounded-xl ${
              msg.sender === "user"
                ? "bg-gray-100 text-gray-800"
                : "text-gray-600"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
}
