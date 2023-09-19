"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components";
import { projects } from "@/constants";
import { containerVariants, cardVariants } from "@/variants";
import { motion } from "framer-motion";

const ProjectCard = () => {
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
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        ref={elementRef}
        className="w-full h-full  project-grid cursor-pointer"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="bg-white rounded-lg relative"
          >
            <div className="w-full rounded-2xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="object-contain"
                height={500}
                width={600}
              />
            </div>
            <div className="flex item-center absolute top-3 -left-1">
              {project.tech.map((techType) => (
                <div key={techType.altText} className="bg-orange-400 p-2 z-20">
                  <Image
                    src={techType.iconSrc}
                    alt={techType.altText}
                    className="object-contain"
                    height={25}
                    width={25}
                  />
                </div>
              ))}
            </div>
            <div className="px-5 py-4">
              <div className="pb-10">
                <h3 className="project-text mb-3 text-yellow-500">
                  {project.title}
                </h3>
                <p className="text-res text-gray-900">{project.description}</p>
              </div>
            </div>
            <div className="flex gap-3 z-20 absolute bottom-2 right-2">
              <Link href={project.site} target="_blank">
                <CustomButton
                  title="View Site"
                  containerStyles="bg-yellow-500 hover:bg-gray-800 hover:text-yellow-500 hover:rounded-lg"
                />
              </Link>
              <Link href={project.github} target="_blank">
                <CustomButton
                  title="Github Repo"
                  containerStyles="bg-blue-900 text-white hover:bg-gray-700 hover:text-white hover:rounded-lg"
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectCard;
