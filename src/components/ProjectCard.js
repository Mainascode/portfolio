import React from "react";

export default function ProjectCard({ title, desc, tech, link }) {
  return (
    <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>

      <div className="mt-3 text-sm text-blue-500">{tech?.join(" • ")}</div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline mt-2 block"
      >
        View Project →
      </a>
    </div>
  );
}

