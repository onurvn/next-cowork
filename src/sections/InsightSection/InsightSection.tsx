"use client";

import Image from "next/image";
import { motion } from "motion/react";

import insightSectionImage from "@assets/images/insightSectionImage.png";

import { insightItems } from "@/constants";
import { ChevronRight } from "lucide-react";

export default function InsightSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-col items-center gap-4 text-center lg:gap-6"
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4 }}
        className="text-custom-black text-sm leading-[150%] font-semibold lg:text-base"
      >
        Cowork Chronicles
      </motion.p>

      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="flex max-w-xl flex-wrap items-center justify-center gap-2 text-[24px] leading-[140%] font-bold lg:text-[48px]"
      >
        <span>Insights, Innovation, and</span>

        <Image
          src={insightSectionImage}
          alt="Image"
          className="h-[34px] w-[120px] object-cover lg:h-auto lg:w-[180px]"
        />

        <span>Inspiration</span>
      </motion.h2>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4 }}
        className="text-custom-black max-w-2xl text-sm leading-[180%] lg:text-base"
      >
        Stay updated on the latest trends in coworking, productivity tips, and
        success stories that define the Cowork experience.
      </motion.p>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {insightItems.map((card) => (
          <motion.div
            key={card.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow"
          >
            <Image
              src={card.image}
              alt={card.title}
              className="h-[200px] w-full rounded-t-2xl object-cover"
            />

            <div className="space-y-2 p-4 text-left lg:space-y-4">
              <div className="text-custom-black/80 flex items-center space-x-4 text-sm">
                <span
                  style={{ backgroundColor: `${card.duration_bg}` }}
                  className="text-custom-black rounded-md px-2 py-1 text-xs font-semibold lg:text-sm"
                >
                  {card.category}
                </span>

                <span>{card.duration}</span>
              </div>

              <h3 className="text-custom-black text-base leading-tight font-semibold lg:text-lg">
                {card.title}
              </h3>

              <a
                href="#readMore"
                className="text-custom-black flex items-center gap-1 text-xs font-medium hover:underline lg:text-sm"
              >
                Read more <ChevronRight className="h-3 w-3 lg:h-4 lg:w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-custom-black border-custom-black mt-6 flex cursor-pointer items-center justify-center rounded-full border bg-white px-4 py-2 shadow outline-none lg:mt-8 lg:px-5 lg:py-3"
      >
        View All
      </motion.button>
    </motion.section>
  );
}
