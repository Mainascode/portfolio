// ======================
import React from "react";

export default function Skills() {
  const skills = [
    "React", "JavaScript", "Node.js",
    "HTML", "CSS", "Tailwind", "MySQL", "Git", 
  ];

  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-5">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((s) => (
          <div
            key={s}
            className="p-4 bg-white dark:bg-gray-800 shadow rounded-xl text-center"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}