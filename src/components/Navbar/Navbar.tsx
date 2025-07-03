"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AlignJustify, X } from "lucide-react";

const navLinks = [
  { id: 1, link: "About", path: "#" },
  { id: 2, link: "Pricing", path: "#" },
  { id: 3, link: "Blog", path: "#b-" },
  { id: 4, link: "Events", path: "# " },
];

const navItemVariant = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [toggled, setToggled] = useState(false);

  const handleToggled = () => setToggled((prev) => !prev);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex w-full items-center justify-between"
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
        <Link
          href="/"
          translate="no"
          className={`${
            toggled ? "text-white" : "text-custom-black"
          } text-2xl font-bold lg:text-3xl`}
        >
          Cowork
        </Link>
      </motion.div>

      <nav className="hidden items-center gap-4 lg:flex lg:gap-10">
        <ul className="flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              {...navItemVariant}
              whileHover={{ scale: 1.05 }}
              className="text-custom-black text-sm font-medium lg:text-base"
            >
              <a href={link.path}>{link.link}</a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4 lg:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" }}
            className="text-custom-black bg-custom-white border-custom-black flex cursor-pointer items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold shadow outline-none lg:px-6 lg:py-3 lg:text-base"
          >
            Log In
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" }}
            className="bg-custom-black flex cursor-pointer items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow outline-none lg:px-6 lg:py-3 lg:text-base"
          >
            Sign Up
          </motion.button>
        </div>
      </nav>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleToggled}
        className="bg-custom-black flex items-center justify-center rounded-full px-3 py-2 lg:hidden"
      >
        <AlignJustify className="h-5 w-5 text-white" />
      </motion.button>

      <AnimatePresence>
        {toggled && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-custom-black fixed inset-0 z-10 flex h-screen w-full flex-col items-start justify-between gap-6 px-4 text-white lg:hidden"
          >
            <div className="flex w-full items-center justify-between pt-3 lg:hidden">
              <Link
                href="/"
                translate="no"
                className="text-whit text-2xl font-bold"
              >
                Cowork
              </Link>

              <button
                onClick={handleToggled}
                className="bg-custom-black flex items-center justify-center rounded-full px-3 py-2"
              >
                <X className="h-8 w-8 text-white" />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="mb-12 space-y-6"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  variants={menuVariants}
                  transition={{ duration: 0.3 }}
                  onClick={() => setToggled(false)}
                  className="text-[48px] leading-[120%] font-bold text-white"
                >
                  <a href={link.path}>{link.link}</a>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mb-6 flex w-full items-end justify-end">
              <div className="flex items-center gap-4 lg:gap-6">
                <button className="flex cursor-pointer items-center justify-center text-base font-semibold text-white outline-none">
                  Sign Up
                </button>

                <button className="flex cursor-pointer items-center justify-center rounded-full bg-white px-4 py-2 text-base font-semibold text-black shadow outline-none">
                  Log In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
