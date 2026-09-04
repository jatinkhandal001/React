import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Code2,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext.jsx";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "True Value Infosoft Pvt. Ltd.",
    location: "Jaipur, India",
    duration: "Aug 2026 - Present",
    type: "Current Role",
    shortDescription:
      "Building full-stack and AI-driven applications with modern frontend, backend, database, and payment technologies.",
    description:
      "Working on full-stack and AI-driven applications using Python, ReactJS, FastAPI, and MongoDB, with a focus on scalable APIs, frontend-backend integration, and practical software solutions.",
    achievements: [
      "Developing responsive and reusable interfaces using ReactJS with component-based architecture",
      "Building backend services and RESTful APIs using Python and FastAPI",
      "Integrating MongoDB with FastAPI applications for data storage and CRUD workflows",
      "Working with API integrations, authentication flows, and production-oriented backend workflows",
      "Integrating Razorpay APIs for payment workflows in web applications",
      "Applying Python, NumPy, OpenCV, and machine learning concepts to AI-powered features",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "ReactJS",
      "MongoDB",
      "Razorpay",
      "OpenCV",
      "NumPy",
      "REST APIs",
      "Machine Learning",
      "Git & GitHub",
    ],
    metrics: [
      { value: "Full Stack", label: "Development" },
      { value: "AI/ML", label: "Integration" },
      { value: "REST", label: "APIs" },
    ],
    link: null,
  },
  {
    id: 2,
    title: "Machine Learning / AI Intern",
    company: "LinuxWorld Informatics Pvt. Ltd.",
    location: "Jaipur, India",
    duration: "May 2025 - Aug 2025",
    type: "Internship",
    shortDescription:
      "Developed machine learning pipelines and computer vision solutions using real-world datasets.",
    description:
      "Built and optimized machine learning models using Python and Scikit-learn on datasets with 10,000+ records. Developed end-to-end ML pipelines and computer vision solutions.",
    achievements: [
      "Built and optimized machine learning models using Python and Scikit-learn on datasets with 10,000+ records",
      "Improved Random Forest classifier performance by increasing F1-score from 0.82 to 0.91 through hyperparameter tuning and feature selection",
      "Designed end-to-end machine learning pipelines including preprocessing, feature engineering, training, and evaluation",
      "Developed computer vision solutions using OpenCV for real-time face detection and recognition",
      "Integrated ML and CV models into backend services using RESTful APIs",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "OpenCV",
      "Pandas",
      "NumPy",
      "REST APIs",
      "Machine Learning",
      "Computer Vision",
    ],
    metrics: [
      { value: "10K+", label: "Records" },
      { value: "0.82 → 0.91", label: "F1 Score" },
      { value: "ML + CV", label: "Solutions" },
    ],
    link: null,
  },
  {
    id: 3,
    title: "AI Azure Virtual Intern",
    company: "Microsoft & Edunet Foundation (AICTE)",
    location: "Virtual",
    duration: "May 2025 - Jun 2025",
    type: "Internship",
    shortDescription:
      "Worked with Azure AI and data analytics workloads including intelligent vision workflows.",
    description:
      "Completed a virtual internship focused on AI and data analytics workloads on Microsoft Azure cloud services, including intelligent vision workflows.",
    achievements: [
      "Deployed AI and data analytics workloads on Microsoft Azure cloud services",
      "Implemented intelligent vision workflows using Azure Cognitive Services",
      "Gained hands-on experience with cloud-based AI deployment and scaling",
      "Learned practices for production-ready AI systems on Azure",
    ],
    technologies: [
      "Microsoft Azure",
      "Azure Cognitive Services",
      "AI Workloads",
      "Data Analytics",
      "Cloud Deployment",
    ],
    metrics: [
      { value: "Azure", label: "Cloud" },
      { value: "AI", label: "Workloads" },
      { value: "Vision", label: "Services" },
    ],
    link: "https://drive.google.com/file/d/1lUcFJkcWGixEh-j84WJitrm5m1fLmVcK/view?usp=drive_link",
  },
];

const Experience = () => {
  const rootRef = useRef(null);
  const [activeId, setActiveId] = useState(1);
  const { theme } = useTheme();

  const dark = theme === "dark";

  const toggleExperience = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      /* Header */
      gsap.fromTo(
        ".experience-header > *",
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
            trigger: ".experience-header",
            start: "top 85%",
            once: true,
          },
        }
      );

      /* Timeline items */
      gsap.fromTo(
        ".timeline-item",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-wrapper",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* Timeline progress */
      const progress = rootRef.current?.querySelector(
        ".timeline-progress"
      );

      if (progress) {
        gsap.fromTo(
          progress,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-wrapper",
              start: "top 75%",
              end: "bottom 70%",
              scrub: 0.5,
            },
          }
        );
      }

      /* Stats */
      gsap.fromTo(
        ".experience-stat",
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".experience-stats",
            start: "top 90%",
            once: true,
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="experience"
      className={`relative overflow-hidden py-20 ${
        dark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-0
        h-[300px] w-[550px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.07]
        ${dark ? "bg-cyan-400" : "bg-purple-500"}`}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="experience-header mb-12 text-center md:mb-14">

          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full border
            px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${
              dark
                ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                : "border-purple-500/20 bg-purple-500/10 text-purple-600"
            }`}
          >
            <Sparkles size={12} />
            Career Journey
          </div>

          <h2
            className={`text-4xl font-bold sm:text-5xl md:text-6xl ${
              dark
                ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
            }`}
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            EXPERIENCE
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base ${
              dark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            From cloud AI to machine learning and software engineering —
            a journey of building real-world technology.
          </p>
        </div>

        {/* ================= JOURNEY NAV ================= */}

        <div className="mb-10 flex justify-center">
          <div
            className={`inline-flex items-center rounded-xl border p-1 ${
              dark
                ? "border-gray-700 bg-gray-800"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            {experiences.map((exp, index) => {
              const active = activeId === exp.id;

              return (
                <button
                  key={exp.id}
                  onClick={() => toggleExperience(exp.id)}
                  className={`relative flex items-center gap-2 rounded-lg
                  px-3 py-2 text-xs font-semibold transition-colors sm:px-4 ${
                    active
                      ? dark
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-purple-500/10 text-purple-600"
                      : dark
                      ? "text-gray-500 hover:text-gray-300"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <span className="font-mono">
                    0{index + 1}
                  </span>

                  <span className="hidden sm:inline">
                    {index === 0
                      ? "Software"
                      : index === 1
                      ? "ML / AI"
                      : "Azure"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= TIMELINE ================= */}

        <div className="timeline-wrapper relative">

          {/* Timeline base */}
          <div
            className={`absolute bottom-0 left-[15px] top-0 w-px
            md:left-1/2 md:-translate-x-1/2 ${
              dark ? "bg-gray-700" : "bg-gray-200"
            }`}
          />

          {/* Timeline progress */}
          <div
            className={`timeline-progress absolute bottom-0 left-[15px] top-0
            w-[2px] origin-top md:left-1/2 md:-translate-x-1/2 ${
              dark
                ? "bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500"
                : "bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"
            }`}
          />

          <div className="space-y-7 md:space-y-10">

            {experiences.map((exp, index) => {
              const isActive = activeId === exp.id;
              const isEven = index % 2 === 0;
              const isCurrent = exp.type === "Current Role";

              return (
                <div
                  key={exp.id}
                  className="timeline-item relative"
                >

                  {/* Timeline Node */}
                  <button
                    onClick={() => toggleExperience(exp.id)}
                    aria-label={`Toggle ${exp.title}`}
                    className={`absolute left-[15px] top-6 z-20
                    flex h-8 w-8 -translate-x-1/2 items-center justify-center
                    rounded-full border-4 transition-transform duration-300
                    md:left-1/2 ${
                      dark
                        ? "border-cyan-400 bg-gray-900"
                        : "border-purple-500 bg-white"
                    } ${isActive ? "scale-125" : "scale-100"}`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isActive
                          ? dark
                            ? "bg-cyan-300"
                            : "bg-purple-600"
                          : dark
                          ? "bg-gray-600"
                          : "bg-gray-300"
                      }`}
                    />
                  </button>

                  {/* Card */}
                  <div
                    className={`pl-9 md:w-[47%] md:pl-0 ${
                      isEven
                        ? "md:mr-auto md:pr-6"
                        : "md:ml-auto md:pl-6"
                    }`}
                  >
                    <article
                      className={`group relative overflow-hidden rounded-xl
                      border transition-all duration-300 ${
                        dark
                          ? `border-gray-700 bg-gray-800 ${
                              isActive
                                ? "border-cyan-500/50"
                                : "hover:border-gray-600"
                            }`
                          : `border-gray-200 bg-white ${
                              isActive
                                ? "border-purple-400"
                                : "hover:border-gray-300"
                            }`
                      }`}
                    >
                      {/* Active top line */}
                      {isActive && (
                        <div
                          className={`absolute left-0 right-0 top-0 h-[2px] ${
                            dark
                              ? "bg-gradient-to-r from-cyan-400 to-purple-500"
                              : "bg-gradient-to-r from-purple-500 to-blue-500"
                          }`}
                        />
                      )}

                      <div className="p-4 sm:p-5">

                        {/* Card header */}
                        <div className="flex items-start gap-3">

                          <div
                            className={`flex h-10 w-10 shrink-0 items-center
                            justify-center rounded-lg ${
                              dark
                                ? "bg-cyan-500/10 text-cyan-400"
                                : "bg-purple-500/10 text-purple-600"
                            }`}
                          >
                            <Briefcase size={18} />
                          </div>

                          <div className="min-w-0 flex-1">

                            <div className="flex flex-wrap items-center gap-2">
                              <h3
                                className={`text-base font-bold sm:text-lg ${
                                  dark
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {exp.title}
                              </h3>

                              {isCurrent && (
                                <span
                                  className={`rounded-full px-2 py-0.5
                                  text-[8px] font-bold uppercase tracking-wider ${
                                    dark
                                      ? "bg-cyan-500/10 text-cyan-400"
                                      : "bg-green-50 text-green-600"
                                  }`}
                                >
                                  ● Current
                                </span>
                              )}
                            </div>

                            <p
                              className={`mt-0.5 text-xs font-semibold sm:text-sm ${
                                dark
                                  ? "text-cyan-400"
                                  : "text-purple-600"
                              }`}
                            >
                              {exp.company}
                            </p>
                          </div>

                          {/* Expand */}
                          <button
                            onClick={() => toggleExperience(exp.id)}
                            aria-label="Expand experience"
                            className={`shrink-0 rounded-lg p-1.5 ${
                              dark
                                ? "text-gray-500 hover:bg-gray-700 hover:text-white"
                                : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                            }`}
                          >
                            <ChevronDown
                              size={17}
                              className={`transition-transform duration-300 ${
                                isActive ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {/* Meta */}
                        <div
                          className={`mt-3 flex flex-wrap gap-x-4 gap-y-1
                          text-[10px] sm:text-xs ${
                            dark ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {exp.duration}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>

                        {/* Short description */}
                        <p
                          className={`mt-4 text-xs leading-5 sm:text-sm ${
                            dark
                              ? "text-gray-400"
                              : "text-gray-600"
                          }`}
                        >
                          {isActive
                            ? exp.description
                            : exp.shortDescription}
                        </p>

                        {/* Metrics */}
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          {exp.metrics.map((metric) => (
                            <div
                              key={metric.label}
                              className={`rounded-lg px-2 py-2 text-center ${
                                dark
                                  ? "bg-gray-900"
                                  : "bg-gray-50"
                              }`}
                            >
                              <div
                                className={`text-xs font-bold sm:text-sm ${
                                  dark
                                    ? "text-cyan-400"
                                    : "text-purple-600"
                                }`}
                              >
                                {metric.value}
                              </div>

                              <div
                                className={`mt-0.5 text-[8px] sm:text-[9px] ${
                                  dark
                                    ? "text-gray-600"
                                    : "text-gray-500"
                                }`}
                              >
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Expandable content */}
                        <div
                          className={`grid transition-all duration-300 ${
                            isActive
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">

                            {/* Achievements */}
                            <div className="mt-5">

                              <div className="mb-2 flex items-center gap-2">
                                <TrendingUp
                                  size={13}
                                  className={
                                    dark
                                      ? "text-cyan-400"
                                      : "text-purple-600"
                                  }
                                />

                                <h4
                                  className={`text-[10px] font-bold uppercase
                                  tracking-wider ${
                                    dark
                                      ? "text-gray-300"
                                      : "text-gray-700"
                                  }`}
                                >
                                  Key Achievements
                                </h4>
                              </div>

                              <ul className="space-y-2">
                                {exp.achievements.map(
                                  (achievement, i) => (
                                    <li
                                      key={i}
                                      className={`flex items-start gap-2
                                      text-[11px] leading-5 sm:text-xs ${
                                        dark
                                          ? "text-gray-400"
                                          : "text-gray-600"
                                      }`}
                                    >
                                      <CheckCircle2
                                        size={12}
                                        className={`mt-1 shrink-0 ${
                                          dark
                                            ? "text-cyan-400"
                                            : "text-purple-500"
                                        }`}
                                      />

                                      <span>{achievement}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div className="mt-5">

                              <div className="mb-2 flex items-center gap-2">
                                <Code2
                                  size={13}
                                  className={
                                    dark
                                      ? "text-purple-400"
                                      : "text-blue-600"
                                  }
                                />

                                <h4
                                  className={`text-[10px] font-bold uppercase
                                  tracking-wider ${
                                    dark
                                      ? "text-gray-300"
                                      : "text-gray-700"
                                  }`}
                                >
                                  Tech Stack
                                </h4>
                              </div>

                              <div className="flex flex-wrap gap-1.5">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className={`rounded-md px-2 py-1 text-[9px] ${
                                      dark
                                        ? "bg-gray-700 text-gray-400"
                                        : "bg-gray-100 text-gray-600"
                                    }`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Link */}
                            {exp.link && (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-5 inline-flex items-center gap-1.5
                                text-xs font-semibold ${
                                  dark
                                    ? "text-cyan-400"
                                    : "text-purple-600"
                                }`}
                              >
                                View Certificate
                                <ExternalLink size={12} />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Explore */}
                        <button
                          onClick={() => toggleExperience(exp.id)}
                          className={`mt-4 flex w-full items-center justify-center
                          gap-1 border-t pt-3 text-[10px] font-semibold ${
                            dark
                              ? "border-gray-700 text-gray-500 hover:text-cyan-400"
                              : "border-gray-100 text-gray-500 hover:text-purple-600"
                          }`}
                        >
                          {isActive
                            ? "Collapse Details"
                            : "Explore Experience"}

                          <ChevronDown
                            size={12}
                            className={`transition-transform ${
                              isActive ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Bottom accent */}
                      <div
                        className={`absolute bottom-0 left-0 h-[2px]
                        transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        } ${
                          dark
                            ? "bg-gradient-to-r from-cyan-400 to-purple-500"
                            : "bg-gradient-to-r from-purple-500 to-blue-500"
                        }`}
                      />
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div className="experience-stats mt-12 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-4">

          {[
            ["01+", "Years Experience"],
            ["03", "Internships"],
            ["15+", "Technologies"],
            ["10K+", "Records Worked"],
          ].map(([value, label]) => (
            <div
              key={label}
              className={`experience-stat rounded-xl border px-3 py-4
              text-center sm:px-5 sm:py-5 ${
                dark
                  ? "border-gray-700 bg-gray-800"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div
                className={`text-xl font-bold sm:text-2xl ${
                  dark ? "text-cyan-400" : "text-purple-600"
                }`}
              >
                {value}
              </div>

              <div
                className={`mt-1 text-[10px] sm:text-xs ${
                  dark ? "text-gray-500" : "text-gray-500"
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

export default Experience;
