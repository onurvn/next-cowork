"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CircleChevronDown } from "lucide-react";
import { faqItems } from "@/constants";

export default function FaqSection() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleIsOpen = (id: number) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };

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
          transition: { duration: 0.6, staggerChildren: 0.2 },
        },
      }}
      className="flex flex-col gap-6 text-center lg:flex-row lg:gap-8 lg:text-start"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="w-full lg:w-1/3"
      >
        <p className="text-custom-black mb-2 text-sm leading-[150%] font-semibold uppercase lg:mb-4 lg:text-base">
          Frequently Asked Questions
        </p>

        <h3 className="text-custom-black mb-4 text-[28px] leading-[120%] font-bold lg:mb-6 lg:text-[48px]">
          Your Roadmap to Coworking Clarity
        </h3>

        <p className="text-custom-black text-sm leading-[150%] lg:text-base">
          Frequently asked questions ordered by popularity. Remember that if the
          visitor has not committed to the call to action, they may still have
          questions (doubts) that can be answered.
        </p>
      </motion.div>

      <motion.div
        className="w-full space-y-4 lg:w-2/3 lg:space-y-6"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {faqItems.map((faq) => (
          <motion.div
            key={faq.id}
            onClick={() => handleIsOpen(faq.id)}
            className="flex cursor-pointer flex-col items-start gap-4 text-start"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex w-full items-center justify-between">
              <h3 className="text-custom-black text-sm leading-[150%] font-semibold lg:text-base">
                {faq.question}
              </h3>

              <CircleChevronDown
                className={`w-4 transition-transform duration-300 lg:w-5 ${
                  isOpen === faq.id ? "rotate-180" : ""
                }`}
              />
            </div>

            <AnimatePresence initial={false}>
              {isOpen === faq.id && (
                <motion.p
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-custom-black max-w-md overflow-hidden text-sm leading-[150%] lg:text-base"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>

            <div className="bg-custom-black h-[1px] w-1/4" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
