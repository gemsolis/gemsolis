"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Title, CustomButton } from "@/components";
import { motion } from "framer-motion";

const CaseStudyCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mt-[200px] flex flex-col justify-center items-center shadow-lg">
      <Title title="Case Study" />
      <motion.div
        ref={elementRef}
        initial={{ opacity: 0, y: "-100px" }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : "100px",
        }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-[100px] py-20 px-10 flex justify-center items-center gap-3 bg-hero-bg bg-no-repeat bg-cover bg-fixed rounded-2xl max-xl:w-[100%] max-sm:px-3 max-xl:flex-col "
      >
        <Image
          src="/assets/casestudy-photo2.png"
          alt="Aurras App"
          width={600}
          height={600}
          className="object-contain"
        />
        <div className="px-10 max-md:px-2 max-sm:px-2">
          <h2 className="text-2xl my-10 text-yellow-500">About</h2>
          <p className="mb-10 p-text">
            Aurras is a music player application that offers instrumental
            streaming services and is built for artist to showcase their crafted
            music. It also has a feature that let the users add environmental
            sounds, pure waves, and happiness frequency in the background to
            serve therapeutic and meditative purpose to the listeners.
          </p>

          <div className="py-3 px-2 flex gap-2 justify-between items-center max-sm:flex-col max-sm:items-start">
            <div className="flex gap-4 bg-yellow-500 py-2 px-2 rounded-md">
              <Image
                src="/assets/figma.png"
                alt="Figma"
                width={30}
                height={30}
                className="object-contain max-md:scale-[0.7]"
              />
              <Image
                src="/assets/xd.png"
                alt="Adobe XD"
                width={30}
                height={30}
                className="object-contain max-md:scale-[0.7]"
              />
            </div>
            <div>
              <Link
                href="https://www.behance.net/gallery/117264097/Aurras-Instrumental-Music-Player-Case-Study"
                target="_blank"
              >
                <CustomButton
                  title="View Vision Board"
                  containerStyles="bg-yellow-600 border-2 border-white text-white hover:bg-black hover:text-white hover:rounded-lg flex-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudyCard;
