"use client";

import Image from "next/image";
import { motion } from "motion/react";

import explore_section_image from "@assets/images/explore_section_image.png";
import kitchen_image from "@assets/images/kitchen-image.jpg";
import play_icon from "@assets/icons/play-icon.svg";

export default function ExploreSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-col items-center gap-6 text-center lg:gap-8"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="flex max-w-3xl flex-wrap items-center justify-center gap-2 text-[24px] leading-[140%] font-bold lg:text-[48px]"
      >
        <span>Explore Cowork Through Our</span>

        <Image
          src={explore_section_image}
          alt="Image"
          className="h-[34px] w-[120px] object-cover lg:h-auto lg:w-[180px]"
        />

        <span>Lens</span>
      </motion.h2>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-custom-black max-w-4xl text-sm leading-[180%] lg:text-base"
      >
        Experience the essence of Cowork before setting foot in our dynamic
        spaces. Our immersive video tour gives you a sneak peek into the vibrant
        atmosphere, cutting-edge facilities, and collaborative energy that
        define the Cowork experience.
      </motion.p>

      <motion.button
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        }}
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 0.4,
          delay: 0.4,
        }}
        className="border-custom-black text-custom-black flex cursor-pointer items-center justify-center rounded-full border bg-white px-4 py-2 shadow outline-none lg:px-5 lg:py-3"
      >
        Explore Spaces
      </motion.button>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          backgroundImage: `url(${kitchen_image.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative mt-4 flex h-[300px] w-full items-center justify-center rounded-[48px] lg:mt-6 lg:h-[500px]"
      >
        <Image
          src={play_icon}
          alt="Play Icon"
          className="h-auto w-[60px] cursor-pointer object-cover lg:w-[90px]"
        />
      </motion.div>
    </motion.section>
  );
}
