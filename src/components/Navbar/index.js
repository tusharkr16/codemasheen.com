'use client';

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Red_Hat_Text } from "next/font/google";
import { Menu, X } from "lucide-react";
import logo from "../../../public/CODEMASHEENLOGOfooter.svg"
import Image from "next/image";


const redHatText = Red_Hat_Text({ subsets: ["latin"], weight: "500" });

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/About" },
  { label: "Services", path: "/Services" },
  // { label: "Consultation", path: "/Consultation" },
  // { label: "Consultation", path: "/Consultation" },
  // { label: "Hire Developers", path: "/hire-developers" },
  { label: "Contact", path: "/Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle scroll to apply blur background
  useEffect(() => {
    setMounted(true); // Ensures client-side rendering only
  }, []);

  // Handle scroll events for dynamic changes on client-side
  useEffect(() => {
    if (mounted) {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [mounted]);

  // Ensure no SSR mismatch by only rendering client-side content
  if (!mounted) {
    return null; // Prevent rendering on the server
  }

  return (
    <nav
      className={`sticky top-0 w-full px-5 lg:w-[90%] lg:mx-auto z-50  transition-all duration-300 ${scrolled ? "mt-0 min-w-[100%] backdrop-blur-2xl" : "bg-transparent "
        }`}
    >
      <div className="flex justify-between items-center">

        <Link href="/" className="text-[#3867D6] text-[24px] leading-[21px] tracking-[3.48px]">
          <Image
            alt="planet"
            src={logo}
            width={180}
            height={120}
            sizes="10vw"

          />
        </Link>

        {/* Desktop Navbar */}
        <ul className="hidden lg:flex gap-x-16">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.path} className={`${redHatText.className} hover:underline`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden block text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Close Button */}
        <button className="absolute top-5 right-5 text-gray-700" onClick={() => setMenuOpen(false)}>
          <X size={28} />
        </button>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-start mt-16 space-y-6 pl-6">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.path}
                className={`${redHatText.className} text-lg hover:underline`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
