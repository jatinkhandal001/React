import React, { useLayoutEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  X,
  ArrowUpRight,
  Sparkles,
  Star,
  GitFork,
  Code2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../contexts/ThemeContext.jsx";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const dark = theme === "dark";

  const projects = [
    {
      id: 1,
      title: "Startup Hub",
      description:
        "AI-powered startup intelligence platform that analyzes startup data and generates insights for validation, growth, and business research.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900",
      imageAlt:
        "Startup team collaborating on an AI-powered data analytics platform",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Flask",
        "REST APIs",
      ],
      github:
        "https://github.com/jatinkhandal001/Startup_hub/tree/6c1292865357c2b872cdbd5836f25af0a5300be0/Startup_hub",
      live: "https://startup-hub.onrender.com/",
      category: "AI / ML",
      stats: {
        stars: 234,
        forks: 45,
        commits: 892,
      },
      fullDescription:
        "Startup Hub is an AI-powered startup intelligence platform built with Python and machine learning technologies. The project applies data preprocessing, exploratory data analysis, feature engineering, and machine learning techniques to startup datasets. It provides data-driven insights for startup validation and growth analysis through RESTful APIs.",
      features: [
        "Data preprocessing and exploratory data analysis",
        "Machine learning algorithms for startup analysis",
        "Predictive models for startup validation",
        "Business insights from startup datasets",
        "RESTful APIs for analytics access",
        "End-to-end machine learning workflow",
      ],
    },

    {
      id: 2,
      title: "LearnFlow",
      description:
        "AI-powered learning platform combining adaptive assessment, learner analytics, recommendation systems, and computer vision.",
      image:
        "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=900",
      imageAlt:
        "Student using an AI-powered learning and education platform",
      technologies: [
        "Python",
        "OpenCV",
        "CVZone",
        "Scikit-learn",
        "Streamlit",
        "REST APIs",
      ],
      github: "https://github.com/jatinkhandal001",
      live: null,
      category: "AI / Education",
      stats: {
        stars: 156,
        forks: 23,
        commits: 567,
      },
      fullDescription:
        "LearnFlow is an AI-based learning platform focused on adaptive education and data-driven learner assessment. It combines recommendation models, analytics dashboards, and computer vision modules to create a more interactive learning experience. The platform uses Python, Scikit-learn, OpenCV, CVZone, Streamlit, and REST APIs.",
      features: [
        "Adaptive AI-based learning system",
        "Data-driven learner assessment",
        "Performance and engagement analytics",
        "Recommendation-based learning workflow",
        "Computer vision for face detection",
        "Interactive Streamlit interface",
      ],
    },

    {
      id: 3,
      title: "Virtual Mouse",
      description:
        "Computer vision-based virtual mouse that uses real-time hand gesture recognition for touchless cursor control and human-computer interaction.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=900",
      imageAlt:
        "Computer vision based virtual mouse using hand gesture interaction",
      technologies: [
        "Python",
        "OpenCV",
        "CVZone",
        "Computer Vision",
      ],
      github:
        "https://github.com/jatinkhandal001/Virtual-mouse/blob/f9a305831430e6b48ce24e741b005d12fc506ee5/virtual_mouse.py",
      live: null,
      category: "Computer Vision",
      stats: {
        stars: 189,
        forks: 67,
        commits: 1205,
      },
      fullDescription:
        "Virtual Mouse is a Python and computer vision project that enables touchless computer interaction through real-time hand gesture recognition. Using OpenCV and CVZone, the application interprets hand movements to control cursor movement, clicking, and dragging, demonstrating practical human-computer interaction and accessibility applications.",
      features: [
        "Real-time hand gesture recognition",
        "Touchless cursor movement",
        "Gesture-based clicking and dragging",
        "Real-time video processing",
        "Computer vision-based interaction",
        "Accessibility-focused touchless control",
      ],
    },
  ];

  /* =========================
     GSAP SCROLL ANIMATION
  ========================= */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.fromTo(
        ".projects-heading > *",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-heading",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".project-grid",
            start: "top 82%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =========================
     MODAL CONTROL
  ========================= */
  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const handleCardKeyDown = (event, project) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(project);
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-labelledby="projects-title"
      className={`relative overflow-hidden py-20 ${
        dark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* =========================
          BACKGROUND
      ========================= */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className={`absolute left-1/2 top-10 h-[180px] w-[420px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.08] ${
            dark ? "bg-cyan-400" : "bg-purple-500"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* =========================
            HEADER
        ========================= */}
        <header className="projects-heading mb-12 text-center">
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider ${
              dark
                ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                : "border-purple-500/20 bg-purple-500/10 text-purple-600"
            }`}
          >
            <Sparkles size={13} aria-hidden="true" />
            Selected Work
          </div>

          <h2
            id="projects-title"
            className={`text-4xl font-bold md:text-5xl ${
              dark
                ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            }`}
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            PROJECTS
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 md:text-base ${
              dark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A selection of AI, machine learning, data science, computer vision,
            and full-stack projects built to solve practical problems.
          </p>
        </header>

        {/* =========================
            PROJECT GRID
        ========================= */}
        <div className="project-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                dark
                  ? "border-gray-700 bg-gray-800/80 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5"
                  : "border-gray-200 bg-white hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/5"
              }`}
              onClick={() => openProject(project)}
              onKeyDown={(event) => handleCardKeyDown(event, project)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
            >
              {/* =========================
                  PROJECT IMAGE
              ========================= */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className={`absolute inset-0 ${
                    dark
                      ? "bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"
                      : "bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                  }`}
                  aria-hidden="true"
                />

                {/* Project number */}
                <span className="absolute left-4 top-4 font-mono text-[10px] font-medium text-white/70">
                  0{index + 1}
                </span>

                {/* Category */}
                <span
                  className={`absolute right-4 top-4 rounded-lg px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider ${
                    dark
                      ? "bg-gray-900/90 text-cyan-400"
                      : "bg-white/95 text-purple-600"
                  }`}
                >
                  {project.category}
                </span>

                {/* Open icon */}
                <div
                  className={`absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-lg opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
                    dark
                      ? "bg-cyan-500 text-gray-900"
                      : "bg-purple-600 text-white"
                  }`}
                  aria-hidden="true"
                >
                  <ArrowUpRight size={17} />
                </div>
              </div>

              {/* =========================
                  PROJECT CONTENT
              ========================= */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        dark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`mt-2 text-sm leading-6 ${
                        dark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      dark
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-purple-500/10 text-purple-600"
                    }`}
                    aria-hidden="true"
                  >
                    <Code2 size={17} />
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                        dark
                          ? "bg-gray-700/80 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}

                  {project.technologies.length > 4 && (
                    <span
                      className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                        dark
                          ? "bg-gray-700/80 text-gray-500"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div
                  className={`mt-auto flex items-center justify-between border-t pt-4 ${
                    dark ? "border-gray-700" : "border-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex items-center gap-1.5 text-[10px] ${
                        dark ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      <Star size={11} />
                      {project.stats.stars}
                    </span>

                    <span
                      className={`flex items-center gap-1.5 text-[10px] ${
                        dark ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      <GitFork size={11} />
                      {project.stats.forks}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-semibold ${
                      dark ? "text-cyan-400" : "text-purple-600"
                    }`}
                  >
                    View Details
                    <ArrowUpRight
                      size={12}
                      className="ml-1 inline"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                  dark
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500"
                    : "bg-gradient-to-r from-purple-500 to-blue-500"
                }`}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>

      {/* =========================
          PROJECT MODAL
      ========================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeProject}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className={`relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border ${
              dark
                ? "border-gray-700 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeProject}
              aria-label="Close project details"
              className={`absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                dark
                  ? "bg-gray-800 text-gray-300 hover:bg-red-500 hover:text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white"
              }`}
            >
              <X size={18} />
            </button>

            {/* Modal image */}
            <div className="relative h-52 overflow-hidden sm:h-64">
              <img
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
                className="h-full w-full object-cover"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"
                aria-hidden="true"
              />

              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {selectedProject.category}
                </span>

                <h3
                  id="project-modal-title"
                  className="mt-1 text-2xl font-bold text-white sm:text-3xl"
                  style={{ fontFamily: "Orbitron, monospace" }}
                >
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal content */}
            <div className="p-5 sm:p-7">
              {/* Stats */}
              <div className="mb-7 grid grid-cols-3 gap-3">
                <div
                  className={`rounded-xl border p-3 ${
                    dark
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Star size={14} />
                    <span className="text-sm font-bold">
                      {selectedProject.stats.stars}
                    </span>
                  </div>

                  <span
                    className={`mt-1 block text-[10px] ${
                      dark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Stars
                  </span>
                </div>

                <div
                  className={`rounded-xl border p-3 ${
                    dark
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2 text-cyan-400">
                    <GitFork size={14} />
                    <span className="text-sm font-bold">
                      {selectedProject.stats.forks}
                    </span>
                  </div>

                  <span
                    className={`mt-1 block text-[10px] ${
                      dark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Forks
                  </span>
                </div>

                <div
                  className={`rounded-xl border p-3 ${
                    dark
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2 text-purple-400">
                    <Code2 size={14} />
                    <span className="text-sm font-bold">
                      {selectedProject.stats.commits}
                    </span>
                  </div>

                  <span
                    className={`mt-1 block text-[10px] ${
                      dark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Commits
                  </span>
                </div>
              </div>

              {/* About */}
              <div className="mb-7">
                <h4
                  className={`mb-2 text-sm font-bold uppercase tracking-wider ${
                    dark ? "text-cyan-400" : "text-purple-600"
                  }`}
                >
                  About Project
                </h4>

                <p
                  className={`text-sm leading-7 ${
                    dark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-7">
                <h4
                  className={`mb-3 text-sm font-bold uppercase tracking-wider ${
                    dark ? "text-cyan-400" : "text-purple-600"
                  }`}
                >
                  Key Features
                </h4>

                <ul className="grid gap-2 sm:grid-cols-2">
                  {selectedProject.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 rounded-lg p-3 text-xs leading-5 ${
                        dark
                          ? "bg-gray-800 text-gray-400"
                          : "bg-gray-50 text-gray-600"
                      }`}
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          dark ? "bg-cyan-400" : "bg-purple-500"
                        }`}
                        aria-hidden="true"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-7">
                <h4
                  className={`mb-3 text-sm font-bold uppercase tracking-wider ${
                    dark ? "text-cyan-400" : "text-purple-600"
                  }`}
                >
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-md border px-3 py-1.5 text-xs font-medium ${
                        dark
                          ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                          : "border-purple-500/20 bg-purple-500/10 text-purple-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    dark
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <Github size={17} aria-hidden="true" />
                  View Source
                  <ExternalLink size={13} aria-hidden="true" />
                </a>

                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 ${
                      dark
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                        : "bg-gradient-to-r from-purple-500 to-blue-500"
                    }`}
                  >
                    <ExternalLink size={17} aria-hidden="true" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
