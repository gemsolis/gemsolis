"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
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
    <div
      id="about"
      className="section-wrapper w-[100%] flex flex-col justify-center items-center pt-[60px]"
    >
      <motion.div className="mt-5 w-[60%] p-8rounded-md max-md:w-[90%] flex gap-10 justify-center items-start max-xl:flex-col">
        <div className="w-full text-center" ref={elementRef}>
          <motion.h2
            initial={{ opacity: 0, y: "-100px" }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : "100px",
            }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="text-yellow-500 text-[70px] max-md:text-[40px] max-sm:text-[40px]"
          >
            Welcome to my Portfolio!
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : "100px",
          }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-left mx-5 pl-10 border-l-2 border-gray-700 max-xl:border-none max-xl:pl-0"
        >
          <p className="mb-5 p-text text-justify">
            I'm a passionate front-end web developer trained at Village88, a
            prestigious bootcamp known for its rigorous curriculum and hands-on
            learning approach. Throughout the program, I immersed myself in
            HTML, CSS, and JavaScript, gaining expertise in creating engaging
            and user-friendly websites.
          </p>
          <p className="mb-5 p-text text-justify">
            At Village88, I honed my skills in responsive layouts, optimizing
            web performance, and ensuring seamless user experiences across
            devices and browsers. I also developed a keen eye for design
            principles, transforming wireframes into visually stunning and
            intuitive interfaces.
          </p>
          <p className="mb-5 p-text text-justify">
            As a lifelong learner, I stay up-to-date with the latest industry
            trends and advancements. I'm always eager to explore new
            technologies, frameworks, and libraries to enhance my skill set and
            deliver cutting-edge solutions.
          </p>
        </motion.div>

        {/* <div className="rounded-full w-[150px] h-[150px] overflow-hidden border-yellow-500 border-4 absolute top-[-40px] right-10">
          <Image
            src="/assets/aboutme-photo.jpg"
            alt="Gem Solis Photo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div> */}
      </motion.div>
    </div>
  );
};

export default AboutMe;
