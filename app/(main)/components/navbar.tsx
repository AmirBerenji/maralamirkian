"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "Street Photography",
    "Properties",
    "Product Photography",
    "Ads And Events",
    "About",
    "Contact",
  ];

  return (
    <>
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
                <Link
                  key={index}
                  href={
                    item === "Home"
                      ? "/"
                      : `${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="text-sm tracking-wide text-gray-800 hover:text-red-600 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
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
              <Link
                key={index}
                href={
                  item === "Home"
                    ? "/"
                    : `${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                className="block text-base py-2 text-gray-700 hover:text-red-600 active:text-red-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
