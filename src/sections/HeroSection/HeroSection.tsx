"use client";

import vector from "@assets/images/green-hero-vector.svg";
import hero_image from "@assets/images/hero-image.jpg";
import Image from "next/image";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="flex w-full flex-col items-center justify-center gap-6 overflow-hidden lg:flex-row lg:justify-between lg:gap-0"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex w-full flex-col items-center space-y-4 text-center lg:w-1/2 lg:items-start lg:space-y-6 lg:text-start"
      >
        <h1 className="text-custom-black text-[48px] leading-[120%] font-bold lg:text-[86px]">
          Elevate Your Workspace with Cowork
        </h1>

        <p className="text-custom-black text-sm leading-[180%] lg:text-base">
          Welcome to Cowork – where innovation meets collaboration in the heart
          of productivity! Unleash 🚀 your potential in our thoughtfully
          designed coworking spaces, tailored to inspire creativity and foster
          connections.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-custom-black flex cursor-pointer items-center justify-center rounded-full px-4 py-2 text-white outline-none lg:px-5 lg:py-3"
        >
          Clain Your Spot
        </motion.button>

        <Image
          src={vector}
          alt="Vector"
          className="absolute top-32 left-54 h-auto w-[122px] object-cover md:top-16 md:left-96 lg:top-48 lg:left-54 lg:w-[336px]"
        />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[340px] w-full md:h-[440px] lg:h-[540px] lg:w-1/2"
      >
        <Image
          src={hero_image}
          alt="Hero Image"
          className="h-full w-full rounded-[48px] object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
