
// ======================
// FILE: src/components/Hero.jsx
// ======================
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-5">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I'm <span className="text-blue-600">MAINA</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        A Software Developer specializing in clean UI/UX and modern web applications.
      </motion.p>

      <a
        href="#skills"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Explore My Work
      </a>
    </section>
  );
}




