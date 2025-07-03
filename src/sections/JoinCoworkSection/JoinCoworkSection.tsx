"use client";

import { motion } from "motion/react";
import Image from "next/image";
import joinCoworkImage from "@assets/images/joinCoworkImage.png";

export default function JoinCoworkSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.2,
          },
        },
      }}
      className="flex flex-col items-center gap-4 text-center lg:gap-6"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-custom-black flex flex-wrap items-center justify-center gap-2 text-[36px] leading-[120%] font-bold lg:text-[86px]"
      >
        <span>Seize</span>

        <Image
          src={joinCoworkImage}
          alt="Image"
          className="h-[34px] w-[120px] object-cover lg:h-auto lg:w-[180px]"
        />

        <span>The Moment - </span>

        <span>Join Cowork Today!</span>
      </motion.h2>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-custom-black max-w-2xl text-sm leading-[180%] lg:text-base"
      >
        Uncover the transformative power of Cowork as echoed by those
        who&apos;ve made it their professional haven. This is more than finding
        a desk; it&apos;s discovering a community that fuels your journey to
        success.
      </motion.p>

      <motion.button
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-custom-black flex cursor-pointer items-center justify-center rounded-full px-4 py-2 text-white outline-none lg:px-5 lg:py-3"
      >
        Claim Your Spot
      </motion.button>
    </motion.section>
  );
}
