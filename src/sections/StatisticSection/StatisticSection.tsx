"use client";

import Image from "next/image";
import { motion } from "motion/react";

import green_circle from "@assets/icons/green_circle.svg";
import pink_circle from "@assets/icons/pink_circle.svg";
import orange_circle from "@assets/icons/orange_circle.svg";
import blue_circle from "@assets/icons/blue_circle.svg";
import office_image from "@assets/images/office-image.jpg";

const statisticItems = [
  { id: 1, stat: "240", subtitle: "Community Growth", image: green_circle },
  { id: 2, stat: "99", subtitle: "Technology Uptime", image: blue_circle },
  { id: 3, stat: "50", subtitle: "Happy Members", image: pink_circle },
  {
    id: 4,
    stat: "100",
    subtitle: "Renewable Energy Sources",
    image: orange_circle,
  },
];

export default function StatisticSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-col items-center gap-6 text-center lg:flex-row lg:gap-8 lg:text-start"
    >
      <motion.div
        className="w-full lg:w-1/2"
        variants={{
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="text-custom-black mb-2 text-sm leading-[150%] font-semibold lg:mb-4 lg:text-base"
        >
          Cowork in Numbers
        </motion.p>

        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-custom-black mb-4 max-w-[616px] text-[28px] leading-[120%] font-bold lg:mb-8 lg:text-[48px]"
        >
          Transformative Statistics That Speak Volumes
        </motion.h3>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid w-full grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2 lg:gap-8"
        >
          {statisticItems.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="space-y-1 lg:space-y-2"
            >
              <div className="relative">
                <h4 className="text-custom-black relative z-20 text-[28px] leading-[120%] font-bold lg:text-[48px]">
                  {item.stat}%
                </h4>

                <Image
                  src={item.image}
                  alt="Circle Icon"
                  className="absolute top-2 left-40 z-10 h-auto w-[30px] object-cover sm:left-92 lg:top-6 lg:left-12 lg:w-[36px]"
                />
              </div>

              <span className="text-custom-black/90 text-sm leading-[180%] lg:text-base">
                {item.subtitle}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-2 h-[340px] w-full max-w-[640px] md:h-[440px] lg:mt-4 lg:h-[540px] lg:w-1/2"
      >
        <Image
          src={office_image}
          alt="Office Image"
          className="h-full w-full rounded-[48px] object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
