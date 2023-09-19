"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "@/components";
import { navLinks } from "@/constants";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.url) as HTMLElement;

        if (section) {
          const offset = section.offsetTop;
          const height = section.offsetHeight;
          const sectionScope = offset * height;

          if (scrollPosition >= offset && scrollPosition <= sectionScope) {
            setActiveLink(link.url);
          }
        }
      });

      const heroSection = document.querySelector("#hero") as HTMLElement;
      if (heroSection && scrollPosition < heroSection.offsetHeight) {
        setActiveLink("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="w-full px-5 py-5 flex justify-between items-center fixed bg-gradient-to-b from-gray-900 to-transparent opacity-95 text-white z-30 max-md:px-1"
    >
      <h1 className="px-3">
        <Link
          href="/"
          passHref
          className="text-lg text-white flex items-center"
        >
          <Image src="/assets/gem-logo.png" alt="logo" width={32} height={32} />
          <span className="px-2">GEM.DEV</span>
        </Link>
      </h1>

      <nav>
        <div className="glass flex border-2 border-white rounded-full max-sm:hidden">
          {navLinks.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              className={`rounded-full px-10 py-2 ${
                activeLink === link.url ? "active" : ""
              } hover:scale-[1.1] hover:bg-yellow-500 hover:text-black duration-300`}
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </nav>

      <SocialLinks />
    </motion.div>
  );
};

export default Navbar;
