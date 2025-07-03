"use client";

import { motion } from "motion/react";
import { clientItems } from "@/constants";
import Image from "next/image";

export default function ClientReviewSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-col items-center gap-2 text-center lg:gap-4"
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4 }}
        className="text-custom-black text-sm leading-[150%] font-semibold lg:text-base"
      >
        Cowork in Words
      </motion.p>

      <motion.h3
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="text-custom-black mb-4 max-w-[616px] text-[28px] leading-[120%] font-bold lg:mb-8 lg:text-[48px]"
      >
        Hear It from Our Clients
      </motion.h3>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex w-full flex-wrap items-center justify-center gap-4 lg:gap-6"
      >
        {clientItems.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: item.bg_color }}
            className="flex max-w-full flex-col items-center rounded-2xl px-6 py-8 text-center shadow-sm lg:max-w-xs"
          >
            <div className="mb-4 h-16 w-16 overflow-hidden rounded-full">
              <Image
                src={item.image}
                alt={`${item.name} avatar`}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mb-6 text-sm font-medium text-gray-900">
              {`"${item.desc}"`}
            </p>

            <div className="flex flex-col items-center text-sm">
              <h4 className="text-custom-black font-bold uppercase">
                {item.name}
              </h4>

              <p className="text-gray-700">{item.job}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
