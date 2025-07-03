"use client";

import { motion } from "motion/react";

import { footerLinks, legalLinks } from "@constant/index";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className=""
    >
      <div className="bg-custom-black mx-auto grid grid-cols-1 gap-10 rounded-[40px] px-4 py-6 text-center md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-12 lg:text-start">
        <div className="col-span-2 space-y-2 lg:space-y-3">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-white lg:text-2xl"
          >
            Cowork
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-white lg:text-base"
          >
            Join our newsletter to stay up to date on features and releases.
          </motion.p>

          <motion.form
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:items-center lg:items-start"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="placeholder:text-custom-grey text-custom-grey w-full border-b border-white bg-transparent py-2 text-sm focus:outline-none sm:w-auto lg:text-base"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-full bg-white px-5 py-2 text-sm font-medium whitespace-nowrap text-black"
            >
              Subscribe
            </motion.button>
          </motion.form>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 5 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-custom-grey mt-5 text-xs lg:mt-6 lg:text-sm"
          >
            By subscribing you agree to our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and provide consent to receive updates from our company.
          </motion.p>
        </div>

        <div className="col-span-2 flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start">
          {footerLinks.map((section) => (
            <motion.div
              key={section.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, staggerChildren: 0.3 }}
              className="space-y-4 lg:space-y-6"
            >
              <h4 className="text-sm font-semibold text-white uppercase lg:text-base">
                {section.title}
              </h4>

              <ul className="text-custom-grey space-y-2 text-sm">
                {section.links.map((link) => (
                  <motion.li
                    key={link}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="mt-4 flex flex-col items-center justify-between gap-4 pt-6 text-xs text-gray-500 md:flex-row lg:mt-8"
      >
        <p className="text-custom-black text-sm lg:text-base">
          © 2025 Cowork. All rights reserved.
        </p>

        <div className="flex space-x-4">
          {legalLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-custom-black text-xs hover:underline lg:text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
}
