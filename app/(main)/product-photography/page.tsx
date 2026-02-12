"use client";
import { useState } from "react";
import MasonryGallery from "../components/masonarygallery";

export default function ProductPhotography() {
  const [images, setImages] = useState(() => [
"/assets/images/product/product (1).jpg",
"/assets/images/product/product (2).jpg",
"/assets/images/product/product (3).jpg",
"/assets/images/product/product (4).jpg",
"/assets/images/product/product (5).jpg",
"/assets/images/product/product (6).jpg",
"/assets/images/product/product (8).jpg",
"/assets/images/product/product (9).jpg",
"/assets/images/product/product (10).jpg",
"/assets/images/product/product (11).jpg",
"/assets/images/product/product (12).jpg",
"/assets/images/product/product (13).jpg",
"/assets/images/product/product (14).jpg",
"/assets/images/product/product (15).jpg",
"/assets/images/product/product (16).jpg",
"/assets/images/product/product (17).jpg",
"/assets/images/product/product (18).jpg",
"/assets/images/product/product (19).jpg",
"/assets/images/product/product (20).jpg",
"/assets/images/product/product (21).jpg",
"/assets/images/product/product (22).jpg",
"/assets/images/product/product (23).jpg",
"/assets/images/product/product (24).jpg",
"/assets/images/product/product (25).jpg",
"/assets/images/product/product (26).jpg",
"/assets/images/product/product (27).jpg",
"/assets/images/product/product (28).jpg",
"/assets/images/product/product (29).jpg",
"/assets/images/product/product (30).jpg",
"/assets/images/product/product (31).jpg",
"/assets/images/product/product (32).jpg",
"/assets/images/product/product (33).jpg",
  ]);

  return (
    <>
      <MasonryGallery
        imagelist={images}
        topimage="/assets/images/product.jpeg"
      />
    </>
  );
}