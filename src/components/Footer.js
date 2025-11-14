import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Maina.dev  All rights reserved.
    </footer>
  );
}
