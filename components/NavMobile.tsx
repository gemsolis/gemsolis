"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import Image from "next/image";

const NavMobile = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.url) as HTMLElement;

        if (section) {
          const offset = section.offsetTop;
          const height = section.offsetHeight;
          const sectionScope = offset + height;

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
    <div className="w-full fixed bottom-0 bg-yellow-500 sm:hidden z-40 text-gray-800">
      <nav>
        <div className="flex justify-between">
          {navLinks.map((link) => (
            <div key={link.title}>
              <Link
                href={link.url}
                className={`flex flex-col items-center text-sm py-3 px-10 duration-300 max-sm:px-3 ${
                  activeLink === link.url ? "active-mobile" : ""
                }`}
              >
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={20}
                  height={20}
                />
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavMobile;
