import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Github,
  X,
  ArrowUpRight,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../contexts/ThemeContext.jsx';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const dark = theme === 'dark';

  const projects = [
    {
      id: 1,
      title: 'Startup Hub',
      shortTitle: 'Startup Hub',
      description:
        'AI-powered startup intelligence platform for analyzing startup data and generating business insights.',
      image:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900',
      technologies: [
        'Python',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Flask',
        'REST APIs',
      ],
      github:
        'https://github.com/jatinkhandal001/Startup_hub/tree/6c1292865357c2b872cdbd5836f25af0a5300be0/Startup_hub',
      live: 'https://startup-hub.onrender.com/',
      category: 'AI / ML',
      stats: { stars: 234, forks: 45, commits: 892 },
      fullDescription:
        'Applied data preprocessing, exploratory data analysis (EDA), and machine learning algorithms to analyze startup datasets. Built predictive models to generate insights for startup validation and growth analysis. Designed and deployed RESTful APIs for scalable analytics access.',
      features: [
        'Data preprocessing and exploratory data analysis (EDA)',
        'Machine learning algorithms for startup dataset analysis',
        'Predictive models for startup validation and growth analysis',
        'RESTful APIs for scalable analytics access',
        'Insights generation for startup intelligence',
        'End-to-end ML pipeline implementation',
      ],
    },
    {
      id: 2,
      title: 'LearnFlow',
      shortTitle: 'LearnFlow',
      description:
        'Adaptive AI learning platform combining data-driven assessment with computer vision modules.',
      image:
        'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=900',
      technologies: [
        'Python',
        'OpenCV',
        'CvZone',
        'Scikit-learn',
        'Streamlit',
        'REST APIs',
      ],
      github: 'https://github.com/jatinkhandal001',
      live: null,
      category: 'AI / Education',
      stats: { stars: 156, forks: 23, commits: 567 },
      fullDescription:
        'Developing an adaptive AI-based learning system using data-driven assessment and recommendation models. Implemented analytics dashboards to monitor learner performance and engagement. Built computer vision modules for face detection and recognition.',
      features: [
        'Adaptive AI-based learning system with data-driven models',
        'Analytics dashboards for learner performance monitoring',
        'Computer vision modules for face detection and recognition',
        'Data-driven assessment and recommendation engine',
        'Real-time engagement tracking and analysis',
        'Streamlit-based user interface for easy interaction',
      ],
    },
    {
      id: 3,
      title: 'Virtual Mouse',
      shortTitle: 'Virtual Mouse',
      description:
        'AI-based virtual mouse using real-time hand gesture recognition for touchless computer interaction.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=900',
      technologies: [
        'Python',
        'OpenCV',
        'CVZone',
        'Computer Vision',
      ],
      github:
        'https://github.com/jatinkhandal001/Virtual-mouse/blob/f9a305831430e6b48ce24e741b005d12fc506ee5/virtual_mouse.py',
      live: null,
      category: 'Computer Vision',
      stats: { stars: 189, forks: 67, commits: 1205 },
      fullDescription:
        'AI-based Virtual Mouse using real-time hand gesture recognition powered by OpenCV and CVZone. Enables contactless cursor movement, click, and drag using hand gestures — enhancing accessibility and human-computer interaction.',
      features: [
        'Real-time hand gesture recognition using OpenCV',
        'Contactless cursor movement and control',
        'Click and drag functionality with hand gestures',
        'Computer vision-based human-computer interaction',
        'Accessibility enhancement for touchless control',
        'Real-time video processing and gesture interpretation',
      ],
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (reduceMotion) return;

      gsap.fromTo(
        '.projects-heading > *',
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.projects-heading',
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.project-card',
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.project-grid',
            start: 'top 82%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`relative py-20 overflow-hidden ${
        dark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-10 left-1/2 -translate-x-1/2
          w-[420px] h-[180px] rounded-full blur-3xl opacity-[0.08]
          ${dark ? 'bg-cyan-400' : 'bg-purple-500'}`}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="projects-heading text-center mb-12">

          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5
            rounded-full mb-4 text-xs font-semibold uppercase tracking-wider
            ${
              dark
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                : 'bg-purple-500/10 text-purple-600 border border-purple-500/20'
            }`}
          >
            <Sparkles size={13} />
            Selected Work
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold ${
              dark
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
            }`}
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            PROJECTS
          </h2>

          <p
            className={`mt-3 max-w-2xl mx-auto text-sm md:text-base ${
              dark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            A selection of AI, machine learning, computer vision,
            and full-stack projects.
          </p>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card group relative overflow-hidden rounded-xl border cursor-pointer ${
                dark
                  ? 'bg-gray-800 border-gray-700 hover:border-cyan-500/50'
                  : 'bg-white border-gray-200 hover:border-purple-400'
              }`}
              onClick={() => openProject(project)}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div
                  className={`absolute inset-0 ${
                    dark
                      ? 'bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent'
                      : 'bg-gradient-to-t from-black/50 via-transparent to-transparent'
                  }`}
                />

                {/* Number */}
                <span className="absolute top-3 left-3 text-[10px] font-mono text-white/70">
                  0{index + 1}
                </span>

                {/* Category */}
                <span
                  className={`absolute top-3 right-3 px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider ${
                    dark
                      ? 'bg-gray-900/80 text-cyan-400'
                      : 'bg-white/90 text-purple-600'
                  }`}
                >
                  {project.category}
                </span>

                {/* Open icon */}
                <div
                  className={`absolute bottom-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center
                  opacity-0 translate-y-2 group-hover:opacity-100
                  group-hover:translate-y-0 transition-all duration-300
                  ${
                    dark
                      ? 'bg-cyan-500 text-gray-900'
                      : 'bg-purple-600 text-white'
                  }`}
                >
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={`text-lg font-bold mb-1 ${
                        dark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-xs leading-relaxed line-clamp-2 ${
                        dark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div
                    className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
                      dark
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'bg-purple-500/10 text-purple-600'
                    }`}
                  >
                    <Zap size={17} />
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-md text-[10px] ${
                        dark
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}

                  {project.technologies.length > 4 && (
                    <span
                      className={`px-2 py-1 rounded-md text-[10px] ${
                        dark
                          ? 'bg-gray-700 text-gray-500'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div
                  className={`flex items-center justify-between mt-4 pt-3 border-t ${
                    dark
                      ? 'border-gray-700'
                      : 'border-gray-100'
                  }`}
                >
                  <div
                    className={`flex items-center gap-1 text-[10px] ${
                      dark ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  >
                    <Star size={11} />
                    {project.stats.stars}
                  </div>

                  <span
                    className={`text-[10px] font-semibold ${
                      dark ? 'text-cyan-400' : 'text-purple-600'
                    }`}
                  >
                    View Details →
                  </span>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px]
                scale-x-0 group-hover:scale-x-100 origin-left
                transition-transform duration-300 ${
                  dark
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500'
                }`}
              />
            </article>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={closeProject}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} details`}
        >
          <div
            className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border ${
              dark
                ? 'bg-gray-900 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeProject}
              aria-label="Close project details"
              className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-lg flex items-center justify-center ${
                dark
                  ? 'bg-gray-800 text-gray-300 hover:bg-red-500 hover:text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white'
              }`}
            >
              <X size={18} />
            </button>

            {/* Modal image */}
            <div className="relative h-52 sm:h-64 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-5">
                <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                  {selectedProject.category}
                </span>

                <h3
                  className="text-2xl sm:text-3xl font-bold text-white mt-1"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal content */}
            <div className="p-5 sm:p-7">

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="p-3 rounded-lg bg-gray-800">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Star size={14} />
                    <span className="text-sm font-bold">
                      {selectedProject.stats.stars}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500">
                    Stars
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-gray-800">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Github size={14} />
                    <span className="text-sm font-bold">
                      {selectedProject.stats.forks}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500">
                    Forks
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-gray-800">
                  <div className="flex items-center gap-2 text-purple-400">
                    <Zap size={14} />
                    <span className="text-sm font-bold">
                      {selectedProject.stats.commits}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500">
                    Commits
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4
                  className={`text-sm font-bold uppercase tracking-wider mb-2 ${
                    dark ? 'text-cyan-400' : 'text-purple-600'
                  }`}
                >
                  About Project
                </h4>

                <p
                  className={`text-sm leading-relaxed ${
                    dark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4
                  className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                    dark ? 'text-cyan-400' : 'text-purple-600'
                  }`}
                >
                  Key Features
                </h4>

                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature) => (
                    <div
                      key={feature}
                      className={`flex items-start gap-2 p-3 rounded-lg text-xs ${
                        dark
                          ? 'bg-gray-800 text-gray-400'
                          : 'bg-gray-50 text-gray-600'
                      }`}
                    >
                      <span
                        className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${
                          dark ? 'bg-cyan-400' : 'bg-purple-500'
                        }`}
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4
                  className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                    dark ? 'text-cyan-400' : 'text-purple-600'
                  }`}
                >
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                        dark
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          : 'bg-purple-500/10 text-purple-600 border border-purple-500/20'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold ${
                    dark
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <Github size={17} />
                  View Source
                </a>

                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white ${
                      dark
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                        : 'bg-gradient-to-r from-purple-500 to-blue-500'
                    }`}
                  >
                    <ExternalLink size={17} />
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
