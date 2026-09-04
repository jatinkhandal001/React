import React, { useLayoutEffect, useRef } from 'react';
import { Award, ExternalLink, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../contexts/ThemeContext.jsx';

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);

  const certificates = [
    {
      id: 1,
      title: 'ISRO IIRS Certification',
      issuer: 'ISRO',
      date: '2025',
      link: 'https://www.linkedin.com/posts/jatinkhandal001_isro-certificate-activity-7333334563525382144-s5Dq',
      description: 'Application of AI/ML Models for Crop Acreage Mapping',
      category: 'AI / ML',
    },
    {
      id: 2,
      title: 'Generative AI Certification',
      issuer: 'Google Cloud',
      date: '2024-2025',
      link: null,
      description: 'Generative AI model development and deployment',
      category: 'Gen AI',
    },
    {
      id: 3,
      title: 'Oracle Cloud Infrastructure AI Foundations',
      issuer: 'Oracle',
      date: '2025',
      link: null,
      description: 'Cloud-based AI services and deployment',
      category: 'Cloud / AI',
    },
    {
      id: 4,
      title: 'Google Career Launchpad Program',
      issuer: 'Google',
      date: '2026',
      link: null,
      description: 'Data Analytics certification program',
      category: 'Analytics',
    },
    {
      id: 5,
      title: 'AI Azure Virtual Internship',
      issuer: 'Microsoft & Edunet Foundation',
      date: '2025',
      link: 'https://drive.google.com/file/d/1lUcFJkcWGixEh-j84WJitrm5m1fLmVcK/view?usp=drive_link',
      description: 'Azure AI and data analytics workloads',
      category: 'Azure / AI',
    },
    {
      id: 6,
      title: 'Google Cloud Computing Certification',
      issuer: 'Google',
      date: '2023-2024',
      link: 'https://www.linkedin.com/posts/jatinkhandal001_ai-cloudcomputing-gdsc-activity-7121384437715546112-1qi6',
      description: 'Cloud computing foundations and services',
      category: 'Cloud',
    },
    {
      id: 7,
      title: 'NPTEL - Employability Communication',
      issuer: 'NPTEL',
      date: '2025',
      link: null,
      description: 'Professional communication skills',
      category: 'Skills',
    },
    {
      id: 8,
      title: 'NPTEL - Developing Soft Skills',
      issuer: 'NPTEL',
      date: '2024',
      link: null,
      description: 'Soft skills and personality development',
      category: 'Skills',
    },
  ];

  const stats = [
    ['08', 'Certificates'],
    ['05', 'AI / ML'],
    ['03', 'Cloud'],
    ['02', 'Professional'],
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (reduceMotion) return;

      gsap.fromTo(
        '.certificate-card',
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.certificate-grid',
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.certificate-stat',
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.certificate-stats',
            start: 'top 90%',
            once: true,
          },
        }
      );

      document.querySelectorAll('.certificate-card').forEach((card) => {
        const icon = card.querySelector('.cert-icon');

        const enter = () => {
          gsap.to(card, {
            y: -4,
            duration: 0.2,
            ease: 'power2.out',
          });

          gsap.to(icon, {
            scale: 1.08,
            duration: 0.2,
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.2,
          });

          gsap.to(icon, {
            scale: 1,
            duration: 0.2,
          });
        };

        card.addEventListener('mouseenter', enter);
        card.addEventListener('mouseleave', leave);

        card._enter = enter;
        card._leave = leave;
      });
    }, sectionRef);

    return () => {
      document.querySelectorAll('.certificate-card').forEach((card) => {
        card.removeEventListener('mouseenter', card._enter);
        card.removeEventListener('mouseleave', card._leave);
      });

      ctx.revert();
    };
  }, []);

  const dark = theme === 'dark';

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className={`py-16 overflow-hidden ${
        dark ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 mb-3 rounded-full text-xs font-semibold ${
              dark
                ? 'bg-cyan-500/10 text-cyan-400'
                : 'bg-purple-500/10 text-purple-600'
            }`}
          >
            <Sparkles size={13} />
            Professional Credentials
          </div>

          <h2
            className={`text-3xl md:text-4xl font-bold ${
              dark
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
            }`}
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            Certificates
          </h2>

          <p
            className={`mt-3 text-sm max-w-xl mx-auto ${
              dark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Certifications in AI, cloud computing, data analytics,
            and professional development.
          </p>
        </div>

        {/* Cards */}
        <div className="certificate-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, index) => (
            <article
              key={cert.id}
              className={`certificate-card relative flex flex-col min-h-[285px] p-4 rounded-xl border overflow-hidden ${
                dark
                  ? 'bg-gray-900 border-gray-700 hover:border-cyan-500/50'
                  : 'bg-white border-gray-200 hover:border-purple-400'
              }`}
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`cert-icon w-10 h-10 rounded-lg flex items-center justify-center ${
                    dark
                      ? 'bg-gradient-to-br from-cyan-500 to-purple-600'
                      : 'bg-gradient-to-br from-purple-500 to-blue-600'
                  }`}
                >
                  <Award size={20} className="text-white" />
                </div>

                <span
                  className={`text-[10px] font-mono ${
                    dark ? 'text-gray-600' : 'text-gray-400'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')} / 08
                </span>
              </div>

              {/* Category */}
              <span
                className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${
                  dark ? 'text-cyan-400' : 'text-purple-600'
                }`}
              >
                {cert.category}
              </span>

              {/* Title */}
              <h3
                className={`text-base font-bold leading-snug mb-1 ${
                  dark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {cert.title}
              </h3>

              {/* Issuer + Date */}
              <p
                className={`text-xs font-medium ${
                  dark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {cert.issuer}
                <span className="mx-1.5 opacity-40">•</span>
                {cert.date}
              </p>

              {/* Description */}
              <p
                className={`text-xs leading-relaxed mt-3 ${
                  dark ? 'text-gray-500' : 'text-gray-500'
                }`}
              >
                {cert.description}
              </p>

              {/* Button */}
              <div className="mt-auto pt-4">
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                      dark ? 'text-cyan-400' : 'text-purple-600'
                    }`}
                  >
                    View Certificate
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span
                    className={`text-[10px] ${
                      dark ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  >
                    Link unavailable
                  </span>
                )}
              </div>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-4 right-4 h-px ${
                  dark
                    ? 'bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-purple-400/40 to-transparent'
                }`}
              />
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="certificate-stats grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {stats.map(([value, label]) => (
            <div
              key={label}
              className={`certificate-stat flex items-center gap-3 px-4 py-3 rounded-lg border ${
                dark
                  ? 'bg-gray-900/70 border-gray-700'
                  : 'bg-white border-gray-200'
              }`}
            >
              <span
                className={`text-xl font-bold ${
                  dark ? 'text-cyan-400' : 'text-purple-600'
                }`}
              >
                {value}
              </span>

              <span
                className={`text-xs ${
                  dark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
