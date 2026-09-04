import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioMotion = ({ children }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray("section");
      const cards = gsap.utils.toArray(
        ".about-card, .project-card, .certificate-card"
      );

      if (reduceMotion) {
        gsap.set(cards, { opacity: 1, y: 0, x: 0, scale: 1 });
        return;
      }

      sections.forEach((section) => {
        const heading = section.querySelector("h2");
        const intro = section.querySelector("h2 + p");

        if (heading) {
          gsap.fromTo(
            heading,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                once: true,
              },
            }
          );
        }

        if (intro) {
          gsap.fromTo(
            intro,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              delay: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: intro,
                start: "top 90%",
                once: true,
              },
            }
          );
        }
      });

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isMobile = window.innerWidth < 768;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: isMobile ? 28 : 38,
            x: isMobile ? 0 : index % 2 === 0 ? -18 : 18,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.6,
            delay: (index % 4) * 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
};

export default PortfolioMotion;
