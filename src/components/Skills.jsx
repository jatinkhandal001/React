import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../contexts/ThemeContext.jsx";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Python", level: 95, color: "#3776AB" },
  { name: "Machine Learning", level: 90, color: "#FF6B6B" },
  { name: "Computer Vision", level: 85, color: "#4ECDC4" },
  { name: "Data Analytics", level: 88, color: "#45B7D1" },
  { name: "Deep Learning", level: 75, color: "#96CEB4" },
  { name: "Cloud Platforms", level: 80, color: "#E8C547" },
  { name: "SQL & R", level: 70, color: "#A855F7" },
  { name: "APIs & Deployment", level: 85, color: "#14B8A6" },
  { name: "FastAPI", level: 90, color: "#009688" },
  { name: "React", level: 95, color: "#61DAFB" },
  { name: "Razorpay", level: 79, color: "#3395FF" },
  { name: "Git & GitHub", level: 70, color: "#F0A500" },
];

const Skills = () => {
  const skillsRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = skillsRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = container.querySelectorAll(".skill-item");
      const bars = container.querySelectorAll(".progress-bar");
      const percentages = container.querySelectorAll(".progress-text");
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) return;

      items.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, y: 32, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.6,
            delay: (index % 2) * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      bars.forEach((bar, index) => {
        gsap.fromTo(bar,
          { width: "0%" },
          {
            width: `${skills[index].level}%`,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 92%",
              once: true,
            },
          }
        );
      });

      percentages.forEach((percentage) => {
        gsap.fromTo(percentage,
          { opacity: 0, scale: 0.75 },
          {
            opacity: 1, scale: 1, duration: 0.45,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: percentage,
              start: "top 92%",
              once: true,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      className={`relative overflow-hidden py-20 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          theme === "dark"
            ? "bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_50%)]"
            : "bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.08),transparent_50%)]"
        }`}
      />

      <div
        ref={skillsRef}
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        {/* =========================
            Heading
        ========================= */}

        <div className="mb-14 text-center">
          <h2
            className={`mb-5 text-4xl font-bold md:text-5xl ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
            }`}
            style={{
              fontFamily: "Orbitron, monospace",
            }}
          >
            SKILLS MATRIX
          </h2>

          <p
            className={`mx-auto max-w-2xl text-lg ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies and tools I use to build intelligent
            and scalable applications.
          </p>
        </div>

        {/* =========================
            Skills Grid
        ========================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`skill-item group relative overflow-hidden rounded-2xl border p-5 will-change-transform ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Large Hover Glow */}

              <div
                className="skill-glow pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl"
                style={{
                  backgroundColor: skill.color,
                }}
              />

              {/* Secondary Glow */}

              <div
                className="pointer-events-none absolute bottom-0 left-1/2 h-20 w-1/2 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-10"
                style={{
                  backgroundColor: skill.color,
                }}
              />

              {/* Top Border */}

              <div
                className="pointer-events-none absolute left-0 top-0 h-[2px] w-0 skill-accent"
                style={{
                  backgroundColor: skill.color,
                  boxShadow: `0 0 15px ${skill.color}`,
                }}
              />

              {/* =========================
                  Header
              ========================= */}

              <div className="relative z-10 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Icon */}

                  <div
                    className="skill-icon flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white shadow-lg will-change-transform"
                    style={{
                      backgroundColor: skill.color,
                      boxShadow: `0 0 0px ${skill.color}`,
                    }}
                  >
                    {skill.name.charAt(0)}
                  </div>

                  {/* Name */}

                  <div>
                    <span
                      className={`font-semibold ${
                        theme === "dark"
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {skill.name}
                    </span>

                    <p
                      className={`mt-1 text-xs ${
                        theme === "dark"
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      Technical Skill
                    </p>
                  </div>
                </div>

                {/* Percentage */}

                <span
                  className={`progress-text text-sm font-bold will-change-transform ${
                    theme === "dark"
                      ? "text-cyan-400"
                      : "text-purple-600"
                  }`}
                >
                  {skill.level}%
                </span>
              </div>

              {/* =========================
                  Progress
              ========================= */}

              <div className="relative z-10">
                <div
                  className={`h-2.5 w-full overflow-hidden rounded-full ${
                    theme === "dark"
                      ? "bg-gray-700"
                      : "bg-gray-200"
                  }`}
                >
                  <div
                    className="progress-bar h-full origin-center rounded-full will-change-transform"
                    style={{
                      width: "0%",
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                      boxShadow: `0 0 8px ${skill.color}`,
                    }}
                  />
                </div>

                {/* Labels */}

                <div className="mt-2 flex justify-between">
                  <span
                    className={`text-xs ${
                      theme === "dark"
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    Proficiency
                  </span>

                  <span
                    className={`text-xs ${
                      theme === "dark"
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    {skill.level >= 90
                      ? "Advanced"
                      : skill.level >= 80
                      ? "Strong"
                      : "Intermediate"}
                  </span>
                </div>
              </div>

              {/* Bottom Accent */}

              <div
                className="skill-accent pointer-events-none absolute bottom-0 left-0 h-[2px] w-0"
                style={{
                  backgroundColor: skill.color,
                  boxShadow: `0 0 12px ${skill.color}`,
                }}
              />
            </div>
          ))}
        </div>

        {/* =========================
            Stats
        ========================= */}

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["12+", "Core Skills"],
            ["5+", "AI Domains"],
            ["10+", "Development Tools"],
            ["3+", "Cloud & APIs"],
          ].map(([value, label]) => (
            <div
              key={label}
              className={`group rounded-xl border p-5 text-center transition-all duration-300 hover:-translate-y-2 ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-900/80 hover:border-cyan-400/50"
                  : "border-gray-200 bg-white hover:border-purple-400/50"
              }`}
            >
              <div
                className={`mb-1 text-2xl font-bold transition-transform duration-300 group-hover:scale-125 ${
                  theme === "dark"
                    ? "text-cyan-400"
                    : "text-purple-600"
                }`}
              >
                {value}
              </div>

              <div
                className={`text-xs ${
                  theme === "dark"
                    ? "text-gray-500"
                    : "text-gray-500"
                }`}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
