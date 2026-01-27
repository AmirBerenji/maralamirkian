"use client";
import { useState } from "react";
import MasonryGallery from "../components/masonarygallery";

export default function StreetPhotography() {
  const [images, setImages] = useState(() => [
     "/assets/images/street-photography/street-photography (1).jpg",
"/assets/images/street-photography/street-photography (2).jpg",
"/assets/images/street-photography/street-photography (3).jpg",
"/assets/images/street-photography/street-photography (4).jpg",
"/assets/images/street-photography/street-photography (5).jpg",
"/assets/images/street-photography/street-photography (6).jpg",
"/assets/images/street-photography/street-photography (8).jpg",
"/assets/images/street-photography/street-photography (9).jpg",
"/assets/images/street-photography/street-photography (10).jpg",
"/assets/images/street-photography/street-photography (11).jpg",
"/assets/images/street-photography/street-photography (12).jpg",
  ]);

  return (
    <>
      <MasonryGallery
        imagelist={images}
        topimage="/assets/images/skate-man.jpeg"
      />
    </>
  );
}
