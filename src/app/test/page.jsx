"use client"

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Project 1" },
  { id: 2, title: "Project 2" },
  { id: 3, title: "Project 3" },
  { id: 4, title: "Project 4" },
  { id: 5, title: "Project 5" },
];

const ScrollableProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Center project index

  const updateIndex = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) return projects.length - 1; // Wrap around to last project
      if (newIndex >= projects.length) return 0; // Wrap around to first project
      return newIndex;
    });
  };

  return (
    <div className="relative flex flex-col items-center mt-20">
      <p className="text-2xl font-bold text-white text-center mb-5">Projects</p>

      {/* Projects Container */}
      <div className="relative w-[650px] h-[250px] flex justify-center items-center overflow-hidden">
        {projects.map((project, index) => {
          let position = index - currentIndex;

          // Handle wrap-around scrolling
          if (position < -1) position += projects.length;
          if (position > 1) position -= projects.length;

          return (
            <motion.div
              key={project.id}
              animate={{
                opacity: position === 0 ? 1 : 0.6,
                scale: position === 0 ? 1.2 : 1,
                zIndex: position === 0 ? 10 : 5,
                x: position * 220, // Keeps center project in place
              }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="absolute w-64 h-40 rounded-xl flex items-center justify-center text-white font-bold shadow-xl bg-gradient-to-r from-blue-500 to-purple-600"
            >
              {project.title}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-5 mt-5">
        <button
          onClick={() => updateIndex(-1)}
          className="bg-gray-800 px-4 py-2 rounded text-white"
        >
          ← Prev
        </button>
        <button
          onClick={() => updateIndex(1)}
          className="bg-gray-800 px-4 py-2 rounded text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ScrollableProjects;
