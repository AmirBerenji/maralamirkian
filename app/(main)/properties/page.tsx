"use client";
import { useState } from "react";
import MasonryGallery from "../components/masonarygallery";

export default function Properties() {
  const [images, setImages] = useState(() => [
    "/assets/images/properties/properties (1).jpg",
"/assets/images/properties/properties (2).jpg",
"/assets/images/properties/properties (3).jpg",
"/assets/images/properties/properties (4).jpg",
"/assets/images/properties/properties (5).jpg",
"/assets/images/properties/properties (6).jpg",
"/assets/images/properties/properties (8).jpg",
"/assets/images/properties/properties (9).jpg",
"/assets/images/properties/properties (10).jpg",
"/assets/images/properties/properties (11).jpg",
"/assets/images/properties/properties (12).jpg",
"/assets/images/properties/properties (13).jpg",
"/assets/images/properties/properties (14).jpg",
"/assets/images/properties/properties (15).jpg",
"/assets/images/properties/properties (16).jpg",
"/assets/images/properties/properties (17).jpg",
"/assets/images/properties/properties (18).jpg",
"/assets/images/properties/properties (19).jpg",
"/assets/images/properties/properties (20).jpg",
"/assets/images/properties/properties (21).jpg",
"/assets/images/properties/properties (22).jpg",
"/assets/images/properties/properties (23).jpg",
"/assets/images/properties/properties (24).jpg",
"/assets/images/properties/properties (25).jpg",
"/assets/images/properties/properties (26).jpg",
"/assets/images/properties/properties (27).jpg",
"/assets/images/properties/properties (28).jpg",
"/assets/images/properties/properties (29).jpg",
"/assets/images/properties/properties (30).jpg",
"/assets/images/properties/properties (31).jpg",
"/assets/images/properties/properties (32).jpg",
"/assets/images/properties/properties (33).jpg",
"/assets/images/properties/properties (34).jpg",
"/assets/images/properties/properties (35).jpg",
"/assets/images/properties/properties (36).jpg",
"/assets/images/properties/properties (37).jpg",
"/assets/images/properties/properties (38).jpg",
"/assets/images/properties/properties (39).jpg",
"/assets/images/properties/properties (40).jpg",
"/assets/images/properties/properties (41).jpg",
"/assets/images/properties/properties (42).jpg",
"/assets/images/properties/properties (43).jpg",
"/assets/images/properties/properties (44).jpg",
"/assets/images/properties/properties (45).jpg",
"/assets/images/properties/properties (46).jpg",
"/assets/images/properties/properties (47).jpg",
"/assets/images/properties/properties (48).jpg",
  ]);

  return (
    <>
      <MasonryGallery
        imagelist={images}
        topimage="/assets/images/property.jpg"
      />
    </>
  );
}