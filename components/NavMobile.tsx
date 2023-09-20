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
          const sectionScope = offset + height - 100;

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
    <div className="w-full fixed bottom-0 bg-yellow-500 lg:hidden z-40 text-gray-800 shadow-md overflow-x-hidden">
      <nav>
        <div className="w-full flex justify-between items-center ">
          {navLinks.map((link) => (
            <div key={link.title} className="w-full">
              <Link
                href={link.url}
                className={`w-full flex flex-col items-center text-sm py-3 duration-300  ${
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
