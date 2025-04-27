// src/components/LinkPreview.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Link2, ExternalLink } from "lucide-react";

interface LinkPreviewProps {
  url: string;
  className?: string;
}

export default function LinkPreview({ url, className = "" }: LinkPreviewProps) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        // Use a free thumbnail API (no key required)
        const apiUrl = `https://api.peekalink.io/api/preview?url=${encodeURIComponent(url)}`;
        
        // Alternative services you can use:
        // - https://www.linkpreview.net/
        // - https://microlink.io/
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.image) {
          setThumbnail(data.image);
        }
        if (data.title) {
          setTitle(data.title);
        }
      } catch (err) {
        console.error("Failed to fetch link preview:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPreview();
  }, [url]);

  if (loading) return (
    <div className={`flex items-center justify-center p-4 bg-gray-100 rounded-lg ${className}`}>
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-lg bg-gray-200 h-20 w-20"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );

  if (error || !thumbnail) return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors ${className}`}
    >
      <div className="bg-gray-100 p-2 rounded mr-3">
        <Link2 className="text-gray-500" size={20} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{url}</p>
        <p className="text-xs text-gray-500">Click to open link</p>
      </div>
      <ExternalLink className="text-gray-400 ml-2" size={16} />
    </a>
  );

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`block border rounded-lg overflow-hidden hover:shadow-md transition-shadow ${className}`}
    >
      <div className="relative aspect-video bg-gray-100">
        <Image
          src={'pubclic/file.svg'}
          alt={title || "Link preview"}
          fill
          className="object-cover"
          unoptimized // Recommended for dynamic external images
        />
      </div>
      <div className="p-3">
        {title && (
          <p className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            {title}
          </p>
        )}
        <p className="text-xs text-gray-500 truncate flex items-center">
          <span className="truncate">{new URL(url).hostname.replace('www.', '')}</span>
          <ExternalLink className="ml-1 inline-block" size={12} />
        </p>
      </div>
    </a>
  );
}