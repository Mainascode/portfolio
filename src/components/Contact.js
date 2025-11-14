// src/pages/ContactPage.jsx
import React from "react";

export default function ContactPage() {
  return (
    <section className="py-32 max-w-3xl mx-auto px-5 text-center">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
        I'm open to opportunities, collaborations, or any interesting ideas.
        Feel free to reach out anytime!
      </p>

      <a
        href="mailto:mainaemmanuel855@gmail.com"
        className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-lg"
      >
        Send Email
      </a>

      <div className="mt-10 text-gray-500 dark:text-gray-400">
        Or find me on:
        <div className="flex items-center justify-center gap-6 mt-4">
          <a href="https://github.com/" className="hover:text-blue-600">GitHub</a>
          <a href="https://linkedin.com/" className="hover:text-blue-600">LinkedIn</a>
          <a href="https://twitter.com/" className="hover:text-blue-600">Twitter</a>
        </div>
      </div>
    </section>
  );
}

