// src/components/QRQueueCard.tsx
"use client";
import Image from "next/image";

interface QRQueueCardProps {
  queueNumber: string;
  serviceName: string;
  estimatedTime: string;
  qrCodeUrl: string; // Path to your QR code image in public folder
  dateTime: string;
  className?: string;
}

export default function QRQueueCard({
  queueNumber,
  serviceName,
  estimatedTime,
  qrCodeUrl,
  dateTime,
  className = "",
}: QRQueueCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-indigo-600 p-4 text-white">
        <h2 className="text-xl font-bold text-center">{serviceName}</h2>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div className="border-4 border-blue-100 p-2 rounded-lg">
            <Image
              src={qrCodeUrl}
              alt="Queue QR Code"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Queue Info */}
        <div className="space-y-4 text-center">
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">Your Queue Number</p>
            <p className="text-4xl font-bold text-indigo-600">{queueNumber}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 text-xs">Estimated Time</p>
              <p className="font-medium">{estimatedTime}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 text-xs">Date & Time</p>
              <p className="font-medium">{dateTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 p-4 border-t">
        <p className="text-center text-sm text-gray-500">
          Please show this QR code when your number is called
        </p>
      </div>
    </div>
  );
}