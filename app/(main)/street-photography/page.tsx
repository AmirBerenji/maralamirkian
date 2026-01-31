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
"/assets/images/street-photography/street-photography (13).jpg",
"/assets/images/street-photography/street-photography (14).jpg",
"/assets/images/street-photography/street-photography (15).jpg",
"/assets/images/street-photography/street-photography (16).jpg",
"/assets/images/street-photography/street-photography (17).jpg",
"/assets/images/street-photography/street-photography (18).jpg",
"/assets/images/street-photography/street-photography (19).jpg",
"/assets/images/street-photography/street-photography (20).jpg",
"/assets/images/street-photography/street-photography (21).jpg",
"/assets/images/street-photography/street-photography (22).jpg",
"/assets/images/street-photography/street-photography (23).jpg",
"/assets/images/street-photography/street-photography (24).jpg",
"/assets/images/street-photography/street-photography (25).jpg",
"/assets/images/street-photography/street-photography (26).jpg",
"/assets/images/street-photography/street-photography (27).jpg",
"/assets/images/street-photography/street-photography (28).jpg",
"/assets/images/street-photography/street-photography (29).jpg",
"/assets/images/street-photography/street-photography (30).jpg",
"/assets/images/street-photography/street-photography (31).jpg",
"/assets/images/street-photography/street-photography (32).jpg",
"/assets/images/street-photography/street-photography (33).jpg",
"/assets/images/street-photography/street-photography (34).jpg",
"/assets/images/street-photography/street-photography (35).jpg",
"/assets/images/street-photography/street-photography (36).jpg",
"/assets/images/street-photography/street-photography (37).jpg",
"/assets/images/street-photography/street-photography (38).jpg",
"/assets/images/street-photography/street-photography (39).jpg",
"/assets/images/street-photography/street-photography (40).jpg",
"/assets/images/street-photography/street-photography (41).jpg",
"/assets/images/street-photography/street-photography (42).jpg",
"/assets/images/street-photography/street-photography (43).jpg",
"/assets/images/street-photography/street-photography (44).jpg",
"/assets/images/street-photography/street-photography (45).jpg",
"/assets/images/street-photography/street-photography (46).jpg",
"/assets/images/street-photography/street-photography (47).jpg",
"/assets/images/street-photography/street-photography (48).jpg",
"/assets/images/street-photography/street-photography (49).jpg",
"/assets/images/street-photography/street-photography (50).jpg",
"/assets/images/street-photography/street-photography (51).jpg",
"/assets/images/street-photography/street-photography (52).jpg",
"/assets/images/street-photography/street-photography (53).jpg",
"/assets/images/street-photography/street-photography (54).jpg",
"/assets/images/street-photography/street-photography (55).jpg",
"/assets/images/street-photography/street-photography (56).jpg",
"/assets/images/street-photography/street-photography (57).jpg",
"/assets/images/street-photography/street-photography (58).jpg",
"/assets/images/street-photography/street-photography (59).jpg",
"/assets/images/street-photography/street-photography (60).jpg",
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
