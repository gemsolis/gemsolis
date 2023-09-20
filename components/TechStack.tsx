"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Title } from "@/components";
import { containerVariants, cardVariants } from "@/variants";
import { techIcons } from "@/constants";
import { motion } from "framer-motion";

const TechStack = () => {
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
    <div id="stack">
      <div className="section-wrapper px-5 bg-white rounded-[200px]">
        <div className="flex flex-col items-center justify-center text-center">
          <Title title="Tech Stack" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            ref={elementRef}
            className="w-full grid grid-cols-6 gap-10 justify-center items-center mt-[100px] mb-[100px] px-20 max-sm:px-1 max-sm:grid-cols-4"
          >
            {Object.entries(techIcons).map(([key, techIcon]) => (
              <motion.div key={key}>
                <motion.div
                  variants={cardVariants}
                  className="h-full flex flex-col gap-2 items-center justify-start hover:scale-[1.1] duration-300"
                >
                  <Image
                    src={techIcon.iconSrc}
                    alt={techIcon.altText}
                    width={50}
                    height={50}
                    className="object-container"
                  />
                  <p className="text-yellow-500 text-sm max-sm:text-xs">
                    {techIcon.altText}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
