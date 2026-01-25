"use client";
import { useState } from "react";
import MasonryGallery from "../components/masonarygallery";

export default function StreetPhotography() {
  const [images, setImages] = useState(() => [
    "/assets/images/product.jpeg",
    "/assets/images/ads.jpeg",
    "/assets/images/joker.jpeg",
    "/assets/images/property.jpg",
    "/assets/images/skate-man.jpeg",
    "/assets/images/product.jpeg",
    "/assets/images/ads.jpeg",
    "/assets/images/joker.jpeg",
    "/assets/images/property.jpg",
    "/assets/images/skate-man.jpeg",
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
