import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTheme } from "../contexts/ThemeContext.jsx";

const technologies = [
  { name: "Python", icon: "🐍", color: "#3776AB", description: "Fluent" },
  { name: "Machine Learning", icon: "🤖", color: "#FF6B6B", description: "Scikit-learn" },
  { name: "Computer Vision", icon: "👁️", color: "#4ECDC4", description: "OpenCV, CvZone" },
  { name: "Data Analytics", icon: "📊", color: "#45B7D1", description: "Pandas, NumPy" },
  { name: "Deep Learning", icon: "🧠", color: "#96CEB4", description: "ANN, CNN" },
  { name: "Cloud Platforms", icon: "☁️", color: "#FFEAA7", description: "Azure, GCP" },
  { name: "SQL & R", icon: "🗄️", color: "#336791", description: "Database & Stats" },
  { name: "APIs", icon: "🔗", color: "#98D8C8", description: "RESTful APIs" },
  { name: "ReactJS", icon: "⚛️", color: "#61DAFB", description: "Components, Hooks" },
  { name: "FastAPI", icon: "⚡", color: "#009688", description: "Python Backend" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", description: "NoSQL Database" },
  { name: "Razorpay", icon: "💳", color: "#3395FF", description: "Payment APIs" },
];

const Technologies = () => {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".tech-card");
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      cards.forEach((card) => {
        const icon = card.querySelector(".tech-icon");
        const handleEnter = () => {
          if (window.innerWidth < 768) return;
          gsap.to(card, { y: -7, scale: 1.025, duration: 0.25, ease: "power2.out" });
          gsap.to(icon, { scale: 1.12, rotate: 4, duration: 0.25, ease: "back.out(1.5)" });
        };
        const handleLeave = () => {
          if (window.innerWidth < 768) return;
          gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
          gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
        };
        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);
        card._cleanup = () => {
          card.removeEventListener("mouseenter", handleEnter);
          card.removeEventListener("mouseleave", handleLeave);
        };
      });
    }, container);

    return () => {
      cards.forEach((card) => card._cleanup?.());
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="technologies"
      className={`relative overflow-hidden py-20 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${
            theme === "dark" ? "#22d3ee" : "#8b5cf6"
          } 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2
            className={`mb-5 text-4xl font-bold sm:text-5xl md:text-6xl ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            }`}
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            TECH ARSENAL
          </h2>
          <p
            className={`mx-auto max-w-3xl text-base sm:text-lg md:text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Cutting-edge technologies powering my digital creations
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6"
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={`tech-card group relative overflow-hidden rounded-2xl border p-4 text-center transition-colors duration-300 sm:p-5 ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-800 hover:border-cyan-400/60"
                  : "border-gray-200 bg-white hover:border-purple-400/60"
              }`}
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
                style={{ backgroundColor: tech.color }}
              />

              <div
                className="tech-icon relative z-10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-transform duration-300 sm:h-14 sm:w-14"
                style={{
                  backgroundColor: `${tech.color}18`,
                  border: `1px solid ${tech.color}55`,
                }}
              >
                {tech.icon}
              </div>

              <h3
                className={`relative z-10 text-sm font-semibold sm:text-base ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {tech.name}
              </h3>

              <p
                className={`relative z-10 mt-1 text-xs ${
                  theme === "dark" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {tech.description}
              </p>

              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: tech.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
