"use client";

import Link from "next/link";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.main
      id="hero"
      className="hero-container flex flex-col items-center text-center pt-[250px] px-3 relative text-white"
    >
      <motion.h1 className="hero-title flex flex-col mb-2 text-yellow-400 uppercase">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="self-start text-2xl border-2 border-white rounded-xl px-4 py-3 mr-10"
        >
          Hello!
        </motion.span>
        <motion.span
          className="hero-title"
          initial={{ opacity: 0, x: "200px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          I am Gem Solis.
        </motion.span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: "100px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="p-text max-sm:w-[90%] w-[50%]"
      >
        I am an aspiring front-end developer based in the Philippines,
        specializing in crafting engaging Web Experiences with REACT and a
        passion for Innovative Design.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: "100px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex justify-center gap-5 mt-5"
      >
        <Link
          href="https://drive.google.com/file/d/1O6ijP_LkJLV66g9lAwkrJ-ww-inB8Hxh/view?usp=sharing"
          target="_blank"
        >
          <CustomButton
            title="Download CV"
            containerStyles="bg-transparent border-2 border-white text-white hover:bg-black hover:text-white hover:rounded-lg"
          />
        </Link>
        <Link href="#contacts">
          <CustomButton
            title="Contact Me"
            containerStyles="bg-yellow-500 hover:bg-gray-700 hover:text-yellow-500 hover:rounded-lg"
          />
        </Link>
      </motion.div>
      <div className="gem-overlay">
        <Image
          src="/assets/gemstone-1.png"
          alt="gemstone"
          width={200}
          height={200}
          className="absolute top-[10%] right-[5%] max-lg:scale-[0.5]"
        />
      </div>
    </motion.main>
  );
};

export default Hero;
