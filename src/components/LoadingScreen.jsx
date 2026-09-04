import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const subtitleRef = useRef(null);
  const scannerRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const progress = progressRef.current;
    const subtitle = subtitleRef.current;
    const scanner = scannerRef.current;
    const particlesContainer = particlesRef.current;

    if (
      !container ||
      !text ||
      !progress ||
      !subtitle ||
      !scanner ||
      !particlesContainer
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      // ==========================================
      // CREATE LIGHTWEIGHT PARTICLES
      // ==========================================

      const particleCount = window.innerWidth < 768 ? 14 : 24;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("span");

        particle.className =
          "absolute block h-1 w-1 rounded-full bg-cyan-400";

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${0.2 + Math.random() * 0.5}`;

        particlesContainer.appendChild(particle);

        // Very small movement
        gsap.to(particle, {
          y: gsap.utils.random(-30, 30),
          x: gsap.utils.random(-20, 20),
          opacity: gsap.utils.random(0.2, 0.7),
          duration: gsap.utils.random(1.5, 2.5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random(),
        });
      }

      // ==========================================
      // INITIAL STATE
      // ==========================================

      gsap.set(text, {
        opacity: 0,
        scale: 0.65,
        y: 20,
      });

      gsap.set(subtitle, {
        opacity: 0,
        y: 15,
      });

      gsap.set(progress, {
        width: "0%",
      });

      gsap.set(scanner, {
        xPercent: -100,
      });

      // ==========================================
      // MAIN TIMELINE
      // ==========================================

      const tl = gsap.timeline();

      // JATIN entrance
      tl.to(text, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.65,
        ease: "back.out(1.7)",
      });

      // Subtitle
      tl.to(
        subtitle,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.25"
      );

      // Loading progress
      tl.to(
        progress,
        {
          width: "100%",
          duration: 1.25,
          ease: "power2.inOut",
        },
        "-=0.1"
      );

      // Small glow pulse
      tl.to(
        text,
        {
          textShadow:
            "0 0 15px rgba(34,211,238,0.8), 0 0 35px rgba(139,92,246,0.5)",
          duration: 0.25,
          ease: "power2.out",
        },
        "-=0.7"
      );

      // ==========================================
      // SCANNER
      // ==========================================

      gsap.to(scanner, {
        xPercent: 200,
        duration: 1.2,
        repeat: 1,
        ease: "power2.inOut",
      });

      // ==========================================
      // FINISH
      // ==========================================

      tl.to(container, {
        opacity: 0,
        scale: 1.03,
        duration: 0.45,
        ease: "power2.inOut",
        delay: 0.15,
        onComplete: () => {
          if (onComplete) {
            onComplete();
          }
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050816]"
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

        {/* Purple glow */}

        <div className="absolute left-[20%] top-[20%] h-64 w-64 rounded-full bg-purple-500/10 blur-[90px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* ==========================================
          PARTICLES
      ========================================== */}

      <div
        ref={particlesRef}
        className="pointer-events-none absolute inset-0"
      />

      {/* ==========================================
          SCANNER
      ========================================== */}

      <div
        ref={scannerRef}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
      />

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <div className="relative z-10 w-full max-w-xl px-6 text-center">
        {/* Small status */}

        <div className="mb-5 flex items-center justify-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400/80">
            SYSTEM ONLINE
          </span>
        </div>

        {/* ==========================================
            NAME
        ========================================== */}

        <h1
          ref={textRef}
          className="mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-6xl font-black tracking-[0.08em] text-transparent sm:text-7xl md:text-8xl"
          style={{
            fontFamily: "Orbitron, monospace",
          }}
        >
          JATIN
        </h1>

        {/* ==========================================
            LOADING BAR
        ========================================== */}

        <div className="mx-auto w-full max-w-xs">
          <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-gray-500">
            <span>Loading</span>
            <span>Portfolio</span>
          </div>

          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800/80">
            <div
              ref={progressRef}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
              style={{
                width: "0%",
              }}
            />
          </div>
        </div>

        {/* ==========================================
            SUBTITLE
        ========================================== */}

        <p
          ref={subtitleRef}
          className="mt-5 font-mono text-xs tracking-[0.18em] text-gray-500 sm:text-sm"
        >
          INITIALIZING PORTFOLIO MATRIX...
        </p>

        {/* Decorative line */}

        <div className="mx-auto mt-8 flex max-w-xs items-center gap-3 opacity-50">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400" />

          <div className="h-1.5 w-1.5 rotate-45 border border-cyan-400" />

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-400" />
        </div>
      </div>

      {/* ==========================================
          CORNER UI
      ========================================== */}

      <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-cyan-400/40" />

      <div className="pointer-events-none absolute right-5 top-5 h-8 w-8 border-r border-t border-purple-400/40" />

      <div className="pointer-events-none absolute bottom-5 left-5 h-8 w-8 border-b border-l border-cyan-400/40" />

      <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r border-purple-400/40" />
    </div>
  );
};

export default LoadingScreen;

