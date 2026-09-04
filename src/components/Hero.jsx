import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext.jsx";

const Hero = () => {
  const heroRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(".hero-kicker, .hero-title, .hero-subtitle, .hero-cta, .hero-scroll", {
        opacity: 0,
      });

      gsap.set(".hero-kicker", { y: 18 });
      gsap.set(".hero-title", { y: 35, scale: 0.96 });
      gsap.set(".hero-subtitle", { y: 22 });
      gsap.set(".hero-cta", { y: 20, scale: 0.96 });
      gsap.set(".hero-scroll", { y: 10 });

      tl.to(".hero-kicker", {
        opacity: 1,
        y: 0,
        duration: 0.45,
      })
        .to(
          ".hero-title",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.4)",
          },
          "-=0.2"
        )
        .to(
          ".hero-subtitle",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .to(
          ".hero-cta",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
          },
          "-=0.2"
        )
        .to(
          ".hero-scroll",
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          "-=0.1"
        );

      gsap.to(".hero-glow", {
        scale: 1.12,
        opacity: 0.55,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className={`relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-16 ${
        theme === "dark"
          ? "bg-[#050816]"
          : "bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50"
      }`}
    >
      {/* Lightweight background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`hero-glow absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] sm:h-[420px] sm:w-[420px] ${
            theme === "dark" ? "bg-cyan-500/20" : "bg-purple-400/15"
          }`}
        />

        <div
          className={`absolute inset-0 opacity-[0.055] ${
            theme === "dark" ? "" : "opacity-[0.035]"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(${theme === "dark" ? "rgba(34,211,238,.8)" : "rgba(124,58,237,.6)"} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === "dark" ? "rgba(34,211,238,.8)" : "rgba(124,58,237,.6)"} 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <div className="hero-kicker mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 font-mono text-[10px] tracking-[0.28em] text-cyan-400 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
          AI • SOFTWARE • DATA
        </div>

        <h1
          className={`hero-title text-5xl font-black tracking-tight sm:text-7xl md:text-8xl ${
            theme === "dark"
              ? "bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              : "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
          }`}
          style={{ fontFamily: "Orbitron, monospace" }}
        >
          JATIN KHANDAL
        </h1>

        <p
          className={`hero-subtitle mx-auto mt-6 max-w-3xl text-base leading-7 sm:text-xl md:text-2xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          B.Tech AI & Data Science Student
          <span className="mx-2 text-cyan-400">|</span>
          Software & AI Developer
        </p>

        <div className="hero-cta mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02]"
          >
            Explore My Universe
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>

          <a
            href="#projects"
            className={`rounded-full border px-7 py-4 font-semibold transition-all duration-200 hover:-translate-y-1 ${
              theme === "dark"
                ? "border-gray-700 text-gray-200 hover:border-cyan-400/60 hover:text-cyan-400"
                : "border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-600"
            }`}
          >
            View Projects
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className={`hero-scroll absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs ${
          theme === "dark" ? "text-cyan-400" : "text-purple-600"
        }`}
        aria-label="Scroll to About"
      >
        <span className="font-mono tracking-widest">SCROLL</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
};

export default Hero;
