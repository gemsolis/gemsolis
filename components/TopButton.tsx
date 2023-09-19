"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`z-40 fixed bottom-20 right-4 duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link href="/">
        <button className="bg-yellow-500 p-2 rounded-xl">
          <Image src="/assets/up.png" width={30} height={30} alt="Top" />
        </button>
      </Link>
    </div>
  );
};

export default TopButton;
