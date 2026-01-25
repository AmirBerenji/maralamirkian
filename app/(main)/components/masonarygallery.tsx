"use client";
import React, { useState } from "react";
import { X, Upload } from "lucide-react";
import Image from "next/image";

interface MasonryGalleryProps {
  imagelist: string[];
  topimage: string;
}

export default function MasonryGallery({
  imagelist,
  topimage,
}: MasonryGalleryProps) {
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [images, setImages] = useState(() => shuffleArray(imagelist));

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (result && typeof result === "string") {
          setImages((prev) => [...prev, result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-full mx-auto">
        <div className="mb-8 max-w-2xl mx-auto flex items-center justify-center">
          <Image
            src={topimage}
            alt="Gallery image"
            width={1920}
            height={1080}
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                width={1920}
                height={1080}
                priority
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
