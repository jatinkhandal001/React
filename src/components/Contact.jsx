import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../contexts/ThemeContext.jsx";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const { theme } = useTheme();

  // ==========================================
  // CONTACT DATA
  // ==========================================

  const contactDetails = [
    {
      icon: <Mail size={21} />,
      label: "Email",
      value: "khandaljatin2187@gmail.com",
      href: "mailto:khandaljatin2187@gmail.com",
      color: "#EA4335",
    },
    {
      icon: <Phone size={21} />,
      label: "Phone",
      value: "+91 9664255659",
      href: "tel:+919664255659",
      color: "#34A853",
    },
    {
      icon: <MapPin size={21} />,
      label: "Location",
      value: "Jaipur, India",
      href: null,
      color: "#4285F4",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={21} />,
      href: "https://github.com/jatinkhandal001",
      label: "GitHub",
      color: "#ffffff",
    },
    {
      icon: <Linkedin size={21} />,
      href: "https://linkedin.com/in/jatinkhandal001",
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: <Twitter size={21} />,
      href: "https://twitter.com",
      label: "Twitter",
      color: "#1DA1F2",
    },
  ];

  // ==========================================
  // GSAP ANIMATION
  // ==========================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const heading = section.querySelector(".contact-heading");
      const subtitle = section.querySelector(".contact-subtitle");
      const info = section.querySelector(".contact-info");
      const form = section.querySelector(".contact-form");
      const cards = gsap.utils.toArray(".contact-card");
      const socials = gsap.utils.toArray(".social-link");
      const details = gsap.utils.toArray(".contact-detail");

      // ========================================
      // Reduced Motion
      // ========================================

      if (reduceMotion) {
        gsap.set(
          [
            heading,
            subtitle,
            info,
            form,
            ...cards,
            ...socials,
            ...details,
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          }
        );

        return;
      }

      // ========================================
      // Heading
      // ========================================

      gsap.fromTo(
        heading,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        subtitle,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitle,
            start: "top 88%",
            once: true,
          },
        }
      );

      // ========================================
      // Left Side
      // ========================================

      gsap.fromTo(
        info,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: info,
            start: "top 82%",
            once: true,
          },
        }
      );

      // ========================================
      // Contact Cards
      // ========================================

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 25,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: info,
            start: "top 80%",
            once: true,
          },
        }
      );

      // ========================================
      // Social Icons
      // ========================================

      gsap.fromTo(
        socials,
        {
          opacity: 0,
          y: 15,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: socials[0],
            start: "top 90%",
            once: true,
          },
        }
      );

      // ========================================
      // Form
      // ========================================

      gsap.fromTo(
        form,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: form,
            start: "top 82%",
            once: true,
          },
        }
      );

      // ========================================
      // Form Fields
      // ========================================

      gsap.fromTo(
        details,
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: form,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  // ==========================================
  // FORM SUBMIT
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    // Open email client
    window.location.href =
      `mailto:khandaljatin2187@gmail.com?subject=${subject}&body=${body}`;

    // Small success animation
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        {
          scale: 0.98,
        },
        {
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        }
      );
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus(
        "Your email app should open with the message ready to send."
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 500);
  };

  // ==========================================
  // INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`relative overflow-hidden py-20 sm:py-24 ${
        theme === "dark"
          ? "bg-gray-900"
          : "bg-gray-50"
      }`}
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}

        <div
          className={`absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-[110px] ${
            theme === "dark"
              ? "bg-cyan-500/10"
              : "bg-purple-500/10"
          }`}
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(34,211,238,0.7) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(34,211,238,0.7) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* ==========================================
          CONTAINER
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ==========================================
            HEADING
        ========================================== */}

        <div className="mb-14 text-center sm:mb-16">
          <h2
            className={`contact-heading mb-5 text-4xl font-bold sm:text-5xl md:text-6xl ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
            }`}
            style={{
              fontFamily: "Orbitron, monospace",
            }}
          >
            CONNECT
          </h2>

          <p
            className={`contact-subtitle mx-auto max-w-3xl text-base sm:text-lg md:text-xl ${
              theme === "dark"
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            Let's build something extraordinary together
          </p>
        </div>

        {/* ==========================================
            CONTENT
        ========================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ========================================
              CONTACT INFO
          ======================================== */}

          <div className="contact-info">
            <div className="mb-8">
              <span
                className={`mb-2 block text-sm font-medium uppercase tracking-[0.2em] ${
                  theme === "dark"
                    ? "text-cyan-400"
                    : "text-purple-600"
                }`}
              >
                Contact
              </span>

              <h3
                className={`text-3xl font-bold sm:text-4xl ${
                  theme === "dark"
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                Get In Touch
              </h3>
            </div>

            {/* Contact Cards */}

            <div className="space-y-4">
              {contactDetails.map((contact) => {
                const content = (
                  <>
                    {/* Icon */}

                    <div
                      className="contact-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: contact.color,
                      }}
                    >
                      {contact.icon}
                    </div>

                    {/* Text */}

                    <div className="min-w-0 flex-1">
                      <p
                        className={`mb-1 text-sm font-semibold ${
                          theme === "dark"
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {contact.label}
                      </p>

                      <p
                        className={`break-all text-sm sm:text-base ${
                          theme === "dark"
                            ? "text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        {contact.value}
                      </p>
                    </div>

                    {/* Arrow */}

                    {contact.href && (
                      <ArrowUpRight
                        size={18}
                        className={`shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 ${
                          theme === "dark"
                            ? "text-cyan-400"
                            : "text-purple-600"
                        }`}
                      />
                    )}
                  </>
                );

                if (contact.href) {
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className={`contact-card group flex items-center gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                        theme === "dark"
                          ? "border-gray-700 bg-gray-800 hover:border-cyan-500/50"
                          : "border-gray-200 bg-white hover:border-purple-400/50"
                      }`}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={contact.label}
                    className={`contact-card group flex items-center gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                      theme === "dark"
                        ? "border-gray-700 bg-gray-800 hover:border-cyan-500/50"
                        : "border-gray-200 bg-white hover:border-purple-400/50"
                    }`}
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* ========================================
                SOCIALS
            ======================================== */}

            <div className="mt-10">
              <h4
                className={`mb-5 text-lg font-semibold ${
                  theme === "dark"
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                Follow My Journey
              </h4>

              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`social-link group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                      theme === "dark"
                        ? "border-gray-700 bg-gray-800 text-gray-400"
                        : "border-gray-200 bg-white text-gray-600"
                    }`}
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      {link.icon}
                    </span>

                    <span
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        backgroundColor: link.color,
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================
              FORM
          ======================================== */}

          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form space-y-5"
            >
              {/* Name */}

              <div className="contact-detail">
                <label
                  htmlFor="name"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your name"
                  required
                  className={`w-full rounded-xl border px-5 py-4 text-sm outline-none transition-all duration-300 sm:text-base ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-800 text-white placeholder:text-gray-600 focus:border-cyan-400"
                      : "border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-purple-500"
                  }`}
                  style={{
                    boxShadow:
                      focusedField === "name"
                        ? theme === "dark"
                          ? "0 0 0 3px rgba(6,182,212,0.10)"
                          : "0 0 0 3px rgba(139,92,246,0.10)"
                        : "none",
                  }}
                />
              </div>

              {/* Email */}

              <div className="contact-detail">
                <label
                  htmlFor="email"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="you@example.com"
                  required
                  className={`w-full rounded-xl border px-5 py-4 text-sm outline-none transition-all duration-300 sm:text-base ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-800 text-white placeholder:text-gray-600 focus:border-cyan-400"
                      : "border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-purple-500"
                  }`}
                  style={{
                    boxShadow:
                      focusedField === "email"
                        ? theme === "dark"
                          ? "0 0 0 3px rgba(6,182,212,0.10)"
                          : "0 0 0 3px rgba(139,92,246,0.10)"
                        : "none",
                  }}
                />
              </div>

              {/* Message */}

              <div className="contact-detail">
                <label
                  htmlFor="message"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className={`w-full resize-none rounded-xl border px-5 py-4 text-sm outline-none transition-all duration-300 sm:text-base ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-800 text-white placeholder:text-gray-600 focus:border-cyan-400"
                      : "border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-purple-500"
                  }`}
                  style={{
                    boxShadow:
                      focusedField === "message"
                        ? theme === "dark"
                          ? "0 0 0 3px rgba(6,182,212,0.10)"
                          : "0 0 0 3px rgba(139,92,246,0.10)"
                        : "none",
                  }}
                />
              </div>

              {/* Submit */}

              <div className="contact-detail pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-cyan-500/20"
                      : "bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-purple-500/20"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={19} />
                        Launch Message
                      </>
                    )}
                  </span>

                  {/* Hover shine */}

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </div>

              {/* Status */}

              {submitStatus && (
                <p
                  className={`text-center text-sm ${
                    theme === "dark"
                      ? "text-cyan-400"
                      : "text-purple-600"
                  }`}
                  aria-live="polite"
                >
                  {submitStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;