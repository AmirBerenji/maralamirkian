"use client";
import { useState } from "react";
import MasonryGallery from "../components/masonarygallery";

export default function ProductPhotography() {
  const [images, setImages] = useState(() => [
   "/assets/images/street-photography/street-photography (1)",
"/assets/images/street-photography/street-photography (2)",
"/assets/images/street-photography/street-photography (3)",
"/assets/images/street-photography/street-photography (4)",
"/assets/images/street-photography/street-photography (5)",
"/assets/images/street-photography/street-photography (6)",
"/assets/images/street-photography/street-photography (4)",
"/assets/images/street-photography/street-photography (8)",
"/assets/images/street-photography/street-photography (9)",
"/assets/images/street-photography/street-photography (10)",
"/assets/images/street-photography/street-photography (11)",
"/assets/images/street-photography/street-photography (12)",
  ]);

  return (
    <>
      <MasonryGallery
        imagelist={images}
        topimage="/assets/images/ads.jpeg"
      />
    </>
  );
}