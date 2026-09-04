import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext.jsx";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-50 rounded-full p-3 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:scale-105 sm:bottom-7 sm:right-7 ${
        theme === "dark"
          ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
          : "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
      }`}
    >
      <ChevronUp size={20} />
    </button>
  );
};

export default BackToTop;
