// src/components/ImageLocationCard.tsx
"use client";
import Image from "next/image";

interface ImageLocationCardProps {
  imageSrc: string;
  onCheckLocation?: () => void; // Callback when location button is clicked
  className?: string;
}

export default function ImageLocationCard({
  imageSrc,
  onCheckLocation,
  className = "",
}: ImageLocationCardProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-md ${className}`}>
      {/* Image */}
      <Image
        src={imageSrc}
        alt="Location image"
        width={400}
        height={300}
        className="w-full h-auto object-cover"
      />
      
      {/* Location button overlay */}
      {onCheckLocation && (
        <div className="absolute bottom-4 right-4">
          <button 
            onClick={onCheckLocation}
            className="bg-white px-3 py-2 rounded-full shadow-md flex items-center gap-1 hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="text-sm font-medium">Menuju Lokasi</span>
          </button>
        </div>
      )}
    </div>
  );
}