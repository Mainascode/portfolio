import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="py-28 px-6 max-w-4xl mx-auto">
      {/* Title */}
      <motion.h2
        className="text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I’m open to opportunities, collaborations, freelance projects, or any 
        meaningful conversations. Let’s create something amazing together.
      </motion.p>

      {/* Contact Card */}
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 text-center border border-gray-100 dark:border-gray-700"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-3">Send me an email</h3>

        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Connect.
        </p>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mainaemmanuel855@gmail.com"
  target="_blank"
>
  Email Me (Gmail)
</a>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200 dark:border-gray-700"></div>

        <h4 className="text-xl font-semibold mb-4">Connect with me</h4>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-8 mt-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 hover:text-blue-600"
          >
            <Github size={28} />
            <span className="text-sm">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 hover:text-blue-600"
          >
            <Linkedin size={28} />
            <span className="text-sm">LinkedIn</span>
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 hover:text-blue-600"
          >
            <Twitter size={28} />
            <span className="text-sm">Twitter</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

