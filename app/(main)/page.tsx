"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

const PhotographyPortfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    {
      id: "street",
      title: "Street Photography",
      image: "/assets/images/street-photograpy.jpeg",
      description: "Capturing life in motion",
    },
    {
      id: "properties",
      title: "Properties",
      image: "/assets/images/property.jpg",
      description: "Architecture and interiors",
    },
    {
      id: "product",
      title: "Product",
      image: "/assets/images/product.jpeg",
      description: "Commercial photography",
    },
    {
      id: "ads",
      title: "Ads And Events",
      image: "/assets/images/ads.jpeg",
      description: "Professional coverage",
    },
  ];

  const navItems = [
    "Home",
    "Street Photography",
    "Properties",
    "Product Photography",
    "Ads And Events",
    "About",
    "Contact",
  ];

  const handleCategoryClick = (categoryId: string) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setActiveCategory(activeCategory === categoryId ? null : categoryId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`w-full top-0 z-50 transition-all duration-300 absolute  ${
          scrolled ? " shadow-lg py-5 fixed bg-white/80 " : "py-5 bg-white/30 "
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Image
                  src="/assets/images/logo.png"
                  alt="Logo"
                  width={1920}
                  height={1080}
                  priority
                  className=" w-24 md:w-36 lg:w-36 -mt-2 object-cover object-center"
                ></Image>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm tracking-wide text-gray-800 hover:text-red-600 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 border-t" : "max-h-0"
          }`}
        >
          <div className="px-4 py-4 space-y-3 bg-white">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-base py-2 text-gray-700 hover:text-red-600 active:text-red-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen ">
        <div className="absolute inset-0  z-10"></div>
        <Image
          src="/assets/images/skate-man.jpeg"
          alt="Hero"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* Quote Section */}
      <section className="bg-stone-100 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-serif text-[#5A4B2E] leading-relaxed mb-4 sm:mb-6">
            "THE BEST THING ABOUT A PICTURE IS THAT IT NEVER CHANGES, EVEN WHEN
            THE PEOPLE IN IT DO."
          </blockquote>
          <cite className="text-base sm:text-lg md:text-xl text-[#5A4B2E] not-italic">
            Andy Warhol
          </cite>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-stone-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative h-64 sm:h-80 md:h-96 overflow-hidden cursor-pointer touch-manipulation"
                onMouseEnter={() =>
                  typeof window !== "undefined" &&
                  window.innerWidth >= 768 &&
                  setActiveCategory(category.id)
                }
                onMouseLeave={() =>
                  typeof window !== "undefined" &&
                  window.innerWidth >= 768 &&
                  setActiveCategory(null)
                }
                onClick={() => handleCategoryClick(category.id)}
              >
                <Image
                  alt={category.title}
                  width={1920}
                  height={1080}
                  priority
                  src={category.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-105"
                ></Image>

                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeCategory === category.id
                      ? "bg-black/60"
                      : "bg-black/40"
                  }`}
                ></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8">
                  <h3
                    className={`text-2xl sm:text-3xl md:text-3xl font-serif mb-2 text-center transform transition-transform duration-500 ${
                      activeCategory === category.id ? "-translate-y-2" : ""
                    }`}
                  >
                    {category.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm tracking-widest text-center transition-all duration-500 ${
                      activeCategory === category.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 md:opacity-0"
                    }`}
                  >
                    {category.description}
                  </p>
                  {/* <button
                    className={`mt-4 sm:mt-6 px-4 sm:px-6 py-2 text-sm sm:text-base border border-white text-white hover:bg-white hover:text-black active:bg-gray-200 active:text-black transition-all duration-300 ${
                      activeCategory === category.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 md:opacity-0"
                    }`}
                  >
                    VIEW GALLERY
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5A4B2E] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-gray-100 text-center sm:text-right">
              Copyright © 2026 Maral Amirkian | Powered by Nofeh Code Studio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhotographyPortfolio;
