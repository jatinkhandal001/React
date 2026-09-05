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
  Sparkles,
  CheckCircle2,
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
  const dark = theme === "dark";

  // ==========================================
  // CONTACT DATA
  // ==========================================

  const contactDetails = [
    {
      icon: <Mail size={20} aria-hidden="true" />,
      label: "Email",
      value: "khandaljatin2187@gmail.com",
      href: "mailto:khandaljatin2187@gmail.com",
      color: "#EA4335",
    },
    {
      icon: <Phone size={20} aria-hidden="true" />,
      label: "Phone",
      value: "+91 9664255659",
      href: "tel:+919664255659",
      color: "#34A853",
    },
    {
      icon: <MapPin size={20} aria-hidden="true" />,
      label: "Location",
      value: "Jaipur, India",
      href: null,
      color: "#4285F4",
    },
  ];

  // IMPORTANT:
  // Existing social links are preserved exactly.
  const socialLinks = [
    {
      icon: <Github size={20} aria-hidden="true" />,
      href: "https://github.com/jatinkhandal001",
      label: "GitHub",
      color: "#ffffff",
    },
    {
      icon: <Linkedin size={20} aria-hidden="true" />,
      href: "https://linkedin.com/in/jatinkhandal001",
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: <Twitter size={20} aria-hidden="true" />,
      href: "https://twitter.com",
      label: "Twitter",
      color: "#1DA1F2",
    },
  ];

  // ==========================================
  // GSAP
  // ==========================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const elements = {
        badge: section.querySelector(".contact-badge"),
        heading: section.querySelector(".contact-heading"),
        subtitle: section.querySelector(".contact-subtitle"),
        info: section.querySelector(".contact-info"),
        cards: gsap.utils.toArray(".contact-card"),
        socials: gsap.utils.toArray(".social-link"),
        form: section.querySelector(".contact-form-panel"),
        fields: gsap.utils.toArray(".contact-field"),
      };

      if (reduceMotion) {
        gsap.set(
          [
            elements.badge,
            elements.heading,
            elements.subtitle,
            elements.info,
            elements.form,
            ...elements.cards,
            ...elements.socials,
            ...elements.fields,
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

      // Header
      gsap.fromTo(
        [elements.badge, elements.heading, elements.subtitle],
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elements.heading,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Left side
      gsap.fromTo(
        elements.info,
        {
          opacity: 0,
          x: -45,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elements.info,
            start: "top 82%",
            once: true,
          },
        }
      );

      // Cards
      gsap.fromTo(
        elements.cards,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elements.info,
            start: "top 78%",
            once: true,
          },
        }
      );

      // Socials
      if (elements.socials.length) {
        gsap.fromTo(
          elements.socials,
          {
            opacity: 0,
            scale: 0.85,
            y: 12,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.07,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: elements.socials[0],
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      // Form
      gsap.fromTo(
        elements.form,
        {
          opacity: 0,
          x: 45,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elements.form,
            start: "top 82%",
            once: true,
          },
        }
      );

      // Fields
      gsap.fromTo(
        elements.fields,
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elements.form,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // ==========================================
  // FORM SUBMIT
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("Please complete all fields.");
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

    // Existing mailto functionality preserved.
    window.location.href =
      `mailto:khandaljatin2187@gmail.com?subject=${subject}&body=${body}`;

    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { scale: 0.985 },
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

    if (submitStatus) {
      setSubmitStatus("");
    }
  };

  // ==========================================
  // INPUT STYLE
  // ==========================================

  const inputClass = (field) => `
    w-full rounded-xl border px-4 py-3.5
    text-sm sm:text-base
    outline-none
    transition-all duration-300
    ${
      dark
        ? "border-gray-700 bg-gray-950/70 text-white placeholder:text-gray-600 focus:border-cyan-400"
        : "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-purple-500"
    }
  `;

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-title"
      className={`relative overflow-hidden py-20 sm:py-24 ${
        dark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Main glow */}
        <div
          className={`absolute left-1/2 top-0 h-[500px] w-[500px]
          -translate-x-1/2 rounded-full blur-[130px]
          ${
            dark
              ? "bg-cyan-500/10"
              : "bg-purple-500/10"
          }`}
        />

        {/* Secondary glow */}
        <div
          className={`absolute bottom-0 right-0 h-[300px] w-[300px]
          rounded-full blur-[120px]
          ${
            dark
              ? "bg-purple-500/8"
              : "bg-blue-500/8"
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
          MAIN CONTAINER
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ==========================================
            HEADER
        ========================================== */}

        <header className="mb-14 text-center sm:mb-16">

          <div
            className={`contact-badge mb-5 inline-flex items-center gap-2
            rounded-full border px-4 py-2 text-xs font-semibold
            ${
              dark
                ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                : "border-purple-500/20 bg-purple-500/10 text-purple-600"
            }`}
          >
            <Sparkles
              size={14}
              aria-hidden="true"
            />

            <span>LET'S CONNECT</span>
          </div>

          <h2
            id="contact-title"
            className={`contact-heading text-4xl font-bold tracking-tight
            sm:text-5xl md:text-6xl ${
              dark
                ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
                : "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"
            } bg-clip-text text-transparent`}
            style={{
              fontFamily: "Orbitron, monospace",
            }}
          >
            CONNECT
          </h2>

          <p
            className={`contact-subtitle mx-auto mt-5 max-w-2xl
            text-base leading-relaxed sm:text-lg ${
              dark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Have an idea, project, collaboration, or opportunity?
            Let's turn it into something meaningful with technology.
          </p>
        </header>

        {/* ==========================================
            CONTENT
        ========================================== */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

          {/* ========================================
              LEFT — CONTACT INFO
          ======================================== */}

          <div className="contact-info">

            <div
              className={`mb-6 rounded-2xl border p-6 sm:p-7 ${
                dark
                  ? "border-gray-800 bg-gray-950/50"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Status */}

              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full
                border px-3 py-1.5 text-xs font-medium ${
                  dark
                    ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                    : "border-emerald-500/20 bg-emerald-500/10 text-emerald-600"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full
                    animate-ping rounded-full bg-emerald-400 opacity-75"
                  />
                  <span
                    className="relative inline-flex h-2 w-2
                    rounded-full bg-emerald-500"
                  />
                </span>

                Available for opportunities
              </div>

              <h3
                className={`text-2xl font-bold sm:text-3xl ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                Let's Work Together
              </h3>

              <p
                className={`mt-3 text-sm leading-relaxed ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm interested in AI, Machine Learning, Data Science,
                Computer Vision, and modern software development.
                If you have an interesting idea or opportunity,
                feel free to reach out.
              </p>
            </div>

            {/* Contact cards */}

            <address className="space-y-3 not-italic">
              {contactDetails.map((contact) => {
                const content = (
                  <>
                    <div
                      className="flex h-11 w-11 shrink-0 items-center
                      justify-center rounded-xl text-white
                      transition-transform duration-300
                      group-hover:scale-110"
                      style={{
                        backgroundColor: contact.color,
                      }}
                      aria-hidden="true"
                    >
                      {contact.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-medium uppercase
                        tracking-wider ${
                          dark
                            ? "text-gray-500"
                            : "text-gray-400"
                        }`}
                      >
                        {contact.label}
                      </p>

                      <p
                        className={`mt-1 break-all text-sm font-medium ${
                          dark
                            ? "text-gray-200"
                            : "text-gray-800"
                        }`}
                      >
                        {contact.value}
                      </p>
                    </div>

                    {contact.href && (
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className={`shrink-0 opacity-0
                        transition-all duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        group-hover:opacity-100 ${
                          dark
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
                      aria-label={`${contact.label}: ${contact.value}`}
                      className={`contact-card group flex items-center
                      gap-4 rounded-2xl border p-4
                      transition-all duration-300
                      hover:-translate-y-1
                      focus:outline-none focus:ring-2 ${
                        dark
                          ? "border-gray-800 bg-gray-950/60 hover:border-cyan-500/40 focus:ring-cyan-400/30"
                          : "border-gray-200 bg-white hover:border-purple-400/50 focus:ring-purple-500/30"
                      }`}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={contact.label}
                    className={`contact-card group flex items-center
                    gap-4 rounded-2xl border p-4 ${
                      dark
                        ? "border-gray-800 bg-gray-950/60"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    {content}
                  </div>
                );
              })}
            </address>

            {/* Social */}

            <div className="mt-7">
              <h4
                className={`mb-4 text-sm font-semibold ${
                  dark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Find me online
              </h4>

              <nav
                aria-label="Social media profiles"
                className="flex gap-3"
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${link.label} profile`}
                    className={`social-link group relative flex h-11
                    w-11 items-center justify-center overflow-hidden
                    rounded-xl border transition-all duration-300
                    hover:-translate-y-1 hover:scale-105
                    focus:outline-none focus:ring-2 ${
                      dark
                        ? "border-gray-800 bg-gray-950 text-gray-400 focus:ring-cyan-400/30"
                        : "border-gray-200 bg-white text-gray-600 focus:ring-purple-500/30"
                    }`}
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      {link.icon}
                    </span>

                    <span
                      className="absolute inset-0 opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100"
                      style={{
                        backgroundColor: link.color,
                      }}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* ========================================
              RIGHT — FORM
          ======================================== */}

          <div
            ref={formRef}
            className={`contact-form-panel rounded-3xl border p-6
            shadow-2xl sm:p-8 ${
              dark
                ? "border-gray-800 bg-gray-950/80 shadow-black/20"
                : "border-gray-200 bg-white shadow-gray-200/50"
            }`}
          >
            {/* Form heading */}

            <div className="mb-7">
              <div
                className={`mb-3 flex h-10 w-10 items-center
                justify-center rounded-xl ${
                  dark
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "bg-purple-500/10 text-purple-600"
                }`}
              >
                <Mail
                  size={19}
                  aria-hidden="true"
                />
              </div>

              <h3
                className={`text-2xl font-bold ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                Send a Message
              </h3>

              <p
                className={`mt-2 text-sm ${
                  dark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Tell me what you're working on and I'll get back to you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              aria-label="Contact form"
              className="space-y-5"
            >
              {/* Name */}

              <div className="contact-field">
                <label
                  htmlFor="contact-name"
                  className={`mb-2 block text-sm font-medium ${
                    dark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  aria-required="true"
                  className={inputClass("name")}
                  style={{
                    boxShadow:
                      focusedField === "name"
                        ? dark
                          ? "0 0 0 3px rgba(6,182,212,0.10)"
                          : "0 0 0 3px rgba(139,92,246,0.10)"
                        : "none",
                  }}
                />
              </div>

              {/* Email */}

              <div className="contact-field">
                <label
                  htmlFor="contact-email"
                  className={`mb-2 block text-sm font-medium ${
                    dark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  aria-required="true"
                  className={inputClass("email")}
                  style={{
                    boxShadow:
                      focusedField === "email"
                        ? dark
                          ? "0 0 0 3px rgba(6,182,212,0.10)"
                          : "0 0 0 3px rgba(139,92,246,0.10)"
                        : "none",
                  }}
                />
              </div>

              {/* Message */}

              <div className="contact-field">
                <label
                  htmlFor="contact-message"
                  className={`mb-2 block text-sm font-medium ${
                    dark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  rows={6}
                  required
                  aria-required="true"
                  className={`${inputClass("message")} resize-none`}
                  style={{
                    boxShadow:
                      focusedField === "message"
                        ? dark
                          ? "0 0 0 3px rgba(6,182,212,0.10)"
                          : "0 0 0 3px rgba(139,92,246,0.10)"
                        : "none",
                  }}
                />
              </div>

              {/* Submit */}

              <div className="contact-field pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className={`group relative flex w-full
                  items-center justify-center gap-3 overflow-hidden
                  rounded-xl px-6 py-4 font-semibold text-white
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                  focus:outline-none focus:ring-2
                  disabled:cursor-not-allowed disabled:opacity-60 ${
                    dark
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-cyan-500/20 focus:ring-cyan-400/30"
                      : "bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-purple-500/20 focus:ring-purple-500/30"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <span
                          className="h-5 w-5 animate-spin rounded-full
                          border-2 border-white border-t-transparent"
                          aria-hidden="true"
                        />

                        Sending...
                      </>
                    ) : (
                      <>
                        <Send
                          size={18}
                          aria-hidden="true"
                        />

                        Launch Message
                      </>
                    )}
                  </span>

                  <span
                    className="absolute inset-0 -translate-x-full
                    bg-gradient-to-r from-transparent via-white/15
                    to-transparent transition-transform duration-700
                    group-hover:translate-x-full"
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Status */}

              {submitStatus && (
                <div
                  className={`flex items-center justify-center gap-2
                  rounded-xl border px-4 py-3 text-sm ${
                    submitStatus.includes("complete")
                      ? dark
                        ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
                        : "border-yellow-500/20 bg-yellow-500/10 text-yellow-700"
                      : dark
                        ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                        : "border-purple-500/20 bg-purple-500/10 text-purple-600"
                  }`}
                  aria-live="polite"
                  role="status"
                >
                  <CheckCircle2
                    size={16}
                    aria-hidden="true"
                  />

                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
