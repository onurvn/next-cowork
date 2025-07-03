"use client";

import Image from "next/image";
import { motion } from "motion/react";

import why_section_image from "@assets/images/why-section-image.png";
import user_list_icon from "@assets/icons/user-list-icon.svg";
import credit_card from "@assets/icons/credit-card-icon.svg";
import planet_icon from "@assets/icons/planet-icon.svg";

const whySectionItems = [
  {
    id: 1,
    title: "Flexible Spaces",
    desc: "Whether you're a solopreneur, startup, or an established enterprise, our flexible office solutions cater to your evolving needs.",
    icon: planet_icon,
  },
  {
    id: 2,
    title: "Transparent Pricing",
    desc: "Choose a plan that suits your budget and business objectives, and experience the value of a premium coworking space without breaking the bank.",
    icon: credit_card,
  },
  {
    id: 3,
    title: "Tailored Memberships",
    desc: "Whether you prefer the flexibility of a hot desk or the exclusivity of a private office, Cowork offers tailored solutions to suit every working style.",
    icon: user_list_icon,
  },
];

export default function WhySection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-col items-center gap-6 text-center lg:gap-12"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-center gap-2 text-[24px] leading-[140%] font-bold lg:text-[48px]"
      >
        <span>Why choose</span>

        <Image
          src={why_section_image}
          alt="Image"
          className="h-[34px] w-[120px] object-cover lg:h-auto lg:w-[180px]"
        />

        <span>Cowork?</span>
      </motion.h2>

      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex flex-col items-center justify-center gap-6 text-center lg:flex-row lg:gap-8"
      >
        {whySectionItems.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-4 lg:gap-6"
          >
            <Image
              src={item.icon}
              alt="Icon"
              className="h-auto w-[28px] lg:w-[45px]"
            />

            <h3 className="text-custom-black text-[16px] leading-[140%] font-bold lg:text-[24px]">
              {item.title}
            </h3>

            <p className="text-custom-black max-w-md text-sm leading-[180%] lg:text-base">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
