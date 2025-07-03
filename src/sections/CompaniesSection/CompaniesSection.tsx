"use client";

import Image from "next/image";
import { motion } from "motion/react";

import logo_1 from "@assets/images/logo_1.png";
import logo_2 from "@assets/images/logo_2.png";
import logo_3 from "@assets/images/logo_3.png";
import logo_4 from "@assets/images/logo_4.png";
import logo_5 from "@assets/images/logo_5.png";

const companiesItems = [
  { id: 1, image: logo_1, alt: "logo_1" },
  { id: 2, image: logo_2, alt: "logo_2" },
  { id: 3, image: logo_3, alt: "logo_3" },
  { id: 4, image: logo_4, alt: "logo_4" },
  { id: 5, image: logo_5, alt: "logo_5" },
];

export default function CompaniesSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-col items-center gap-4 text-center lg:gap-6"
    >
      <motion.h3
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-custom-black text-sm font-semibold uppercase lg:text-base"
      >
        Trusted by Leading Companies
      </motion.h3>

      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="flex flex-wrap items-center justify-center gap-6 lg:gap-8"
      >
        {companiesItems.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={item.image}
              alt={item.alt}
              className="h-auto max-w-[137px] object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
