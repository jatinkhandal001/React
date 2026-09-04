import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";

const FloatingOrbs = () => {
  const { theme } = useTheme();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`absolute left-[8%] top-[12%] h-40 w-40 rounded-full blur-3xl opacity-20 ${
          theme === "dark" ? "bg-cyan-500" : "bg-purple-300"
        }`}
      />
      <div
        className={`absolute right-[8%] top-[32%] h-48 w-48 rounded-full blur-3xl opacity-15 ${
          theme === "dark" ? "bg-purple-500" : "bg-blue-300"
        }`}
      />
      <div
        className={`absolute bottom-[12%] left-[35%] h-44 w-44 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-blue-500" : "bg-cyan-300"
        }`}
      />
    </div>
  );
};

export default FloatingOrbs;
