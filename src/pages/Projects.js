// ======================
import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern UI/UX portfolio built with React.",
      tech: ["React", "CSS", "Tailwind"],
      link: "https://github.com/yourprofile",
    },
    {
      title: "E-commerce Backend",
      desc: "Node.js + MongoDB backend API.",
      tech: ["Node", "Express", "MongoDB"],
      link: "https://github.com/yourprofile",
    },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-5">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}