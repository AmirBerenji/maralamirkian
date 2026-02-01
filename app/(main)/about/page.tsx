"use client";

import Image from "next/image";
import React from "react";

export default function AboutPage(): React.ReactElement {
    return (
       <>
        <div className="w-full h-screen bg-gray-900  " >
            <Image
                src="/assets/images/about.jpeg"
                alt="About Us"
                width={1024}
                height={300}
                priority
                className="w-full h-full object-cover object-center opacity-60" 
            />
            <div className="absolute inset-0 flex items-center justify-center p-20 lg:p-48 md:p-48 ">
                <h1 className="text-white text-xl md:text-2xl  font-['Times_New_Roman',sans-serif] lg:text-2xl text-justify  " >
                    As a passionate photographer with over six years of experience, I specialize in capturing the vibrant essence of street life, traditional markets, and the intricate details of products. My journey in photography began as a hobby and has since blossomed into a profound professional pursuit. Each frame I capture tells a story, whether it’s the dynamic interplay of light and shadow in a bustling street or the polished elegance of a product shoot. My goal is to not just take pictures but to create visual narratives that resonate with viewers and preserve fleeting moments of everyday beauty alongside showcasing the unique appeal of products.
                </h1>
            </div>
        </div>
       </>
    );
}