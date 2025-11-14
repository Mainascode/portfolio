import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white dark:bg-gray-800 shadow">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Maina.dev
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        <div className={`md:flex gap-6 ${open ? "block" : "hidden"}`}>
          <Link to="/" className="hover:text-blue-600 block py-2">Home</Link>
          <a href="#skills" className="hover:text-blue-600 block py-2">Skills</a>
          <Link to="/projects" className="hover:text-blue-600 block py-2">Projects</Link>
          <Link to="/contact" className="hover:text-blue-600 block py-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
