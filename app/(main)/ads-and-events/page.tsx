"use client";
import { useState } from "react";
import MasonryGallery from "../components/masonarygallery";

export default function AdsAndEvents() {
  const [images, setImages] = useState(() => [
    "/assets/images/events/events (1).jpg",
"/assets/images/events/events (2).jpg",
"/assets/images/events/events (3).jpg",
"/assets/images/events/events (4).jpg",
"/assets/images/events/events (5).jpg",
"/assets/images/events/events (6).jpg",
"/assets/images/events/events (8).jpg",
"/assets/images/events/events (9).jpg",
"/assets/images/events/events (10).jpg",
"/assets/images/events/events (11).jpg",
"/assets/images/events/events (12).jpg",
"/assets/images/events/events (13).jpg",
"/assets/images/events/events (14).jpg",
"/assets/images/events/events (15).jpg",
"/assets/images/events/events (16).jpg",
"/assets/images/events/events (17).jpg",
"/assets/images/events/events (18).jpg",
"/assets/images/events/events (19).jpg",
"/assets/images/events/events (20).jpg",
"/assets/images/events/events (21).jpg",
"/assets/images/events/events (22).jpg",
"/assets/images/events/events (23).jpg",
"/assets/images/events/events (24).jpg",
"/assets/images/events/events (25).jpg",
"/assets/images/events/events (26).jpg",
"/assets/images/events/events (27).jpg",
"/assets/images/events/events (28).jpg",
"/assets/images/events/events (29).jpg",
"/assets/images/events/events (30).jpg",
"/assets/images/events/events (31).jpg",
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