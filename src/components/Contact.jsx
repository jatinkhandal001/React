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

  // =========================================================
  // CONTACT DATA
  // =========================================================

  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "khandaljatin2187@gmail.com",
      href: "mailto:khandaljatin2187@gmail.com",
      color: "#EA4335",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 9664255659",
      href: "tel:+919664255659",
      color: "#34A853",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Jaipur, India",
      href: null,
      color: "#4285F4",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/jatinkhandal001",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/jatinkhandal001",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
  ];

  // =========================================================
  // GSAP
  // =========================================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const animatedElements = gsap.utils.toArray(
        ".contact-animate"
      );

      if (reduceMotion) {
        gsap.set(animatedElements, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
        });

        return;
      }

      gsap.fromTo(
        ".contact-hero",
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
            trigger: ".contact-hero",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".contact-intro",
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
            trigger: ".contact-intro",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".contact-info-item",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-intro",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".contact-social",
        {
          opacity: 0,
          scale: 0.85,
          y: 15,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".contact-socials",
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".contact-form-panel",
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
            trigger: ".contact-form-panel",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".form-field",
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
            trigger: ".contact-form-panel",
            start: "top 78%",
            once: true,
          },
        }
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  // =========================================================
  // FORM SUBMIT
  // =========================================================

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

    window.location.href =
      `mailto:khandaljatin2187@gmail.com?subject=${subject}&body=${body}`;

    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        {
          scale: 0.985,
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

  // =========================================================
  // INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // =========================================================
  // THEME CLASSES
  // =========================================================

  const dark = theme === "dark";

  const headingGradient = dark
    ? "from-cyan-400 via-blue-400 to-purple-400"
    : "from-purple-600 via-blue-600 to-cyan-600";

  const panelClass = dark
    ? "border-white/10 bg-white/[0.035]"
    : "border-gray-200 bg-white";

  const secondaryText = dark
    ? "text-gray-400"
    : "text-gray-600";

  const primaryText = dark
    ? "text-white"
    : "text-gray-900";

  const inputClass = dark
    ? "border-white/10 bg-black/20 text-white placeholder:text-gray-600 focus:border-cyan-400/70"
    : "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-purple-500";

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-title"
      className={`relative overflow-hidden py-20 sm:py-24 lg:py-28 ${
        dark ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className={`absolute left-[10%] top-[15%] h-72 w-72 rounded-full blur-[110px] ${
            dark ? "bg-cyan-500/[0.07]" : "bg-purple-500/[0.08]"
          }`}
        />

        <div
          className={`absolute bottom-[5%] right-[5%] h-80 w-80 rounded-full blur-[120px] ${
            dark ? "bg-purple-500/[0.07]" : "bg-cyan-500/[0.06]"
          }`}
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(34,211,238,0.8) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(34,211,238,0.8) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HERO HEADER
        =================================================== */}

        <div className="contact-hero mb-14 sm:mb-16 lg:mb-20">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div
                className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${
                  dark
                    ? "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400"
                    : "border-purple-300 bg-purple-50 text-purple-600"
                }`}
              >
                <Sparkles size={13} />
                Let's Connect
              </div>

              <h2
                id="contact-title"
                className={`text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl`}
                style={{
                  fontFamily: "Orbitron, monospace",
                }}
              >
                <span
                  className={`bg-gradient-to-r ${headingGradient} bg-clip-text text-transparent`}
                >
                  LET'S BUILD
                </span>
                <br />
                <span className={primaryText}>SOMETHING GREAT.</span>
              </h2>

              <p
                className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${secondaryText}`}
              >
                Have an idea, project, or opportunity in mind?
                Let's turn it into a practical digital solution
                using AI, Machine Learning, Data Science, and
                modern web technologies.
              </p>
            </div>

            {/* Availability */}

            <div
              className={`flex shrink-0 items-center gap-3 self-start rounded-2xl border px-4 py-3 lg:self-end ${
                dark
                  ? "border-emerald-400/20 bg-emerald-400/[0.05]"
                  : "border-emerald-200 bg-emerald-50"
              }`}
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>

              <div>
                <p
                  className={`text-xs font-bold uppercase tracking-wider ${
                    dark
                      ? "text-emerald-400"
                      : "text-emerald-700"
                  }`}
                >
                  Available
                </p>

                <p
                  className={`text-xs ${secondaryText}`}
                >
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            MAIN CONTACT COMPOSITION
        =================================================== */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* =================================================
              LEFT — INTRO / CONTACT
          ================================================= */}

          <div
            className={`contact-intro relative overflow-hidden rounded-3xl border p-6 sm:p-8 lg:p-9 ${panelClass}`}
          >
            {/* Decorative corner */}

            <div
              className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl ${
                dark
                  ? "bg-cyan-400/10"
                  : "bg-purple-400/10"
              }`}
            />

            <div className="relative z-10">
              <div className="mb-8">
                <p
                  className={`mb-2 text-xs font-bold uppercase tracking-[0.22em] ${
                    dark
                      ? "text-cyan-400"
                      : "text-purple-600"
                  }`}
                >
                  Start a conversation
                </p>

                <h3
                  className={`text-2xl font-bold sm:text-3xl ${primaryText}`}
                >
                  Let's talk about your next idea.
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 ${secondaryText}`}
                >
                  Whether you're building an AI product,
                  web application, data solution, or something
                  completely new, feel free to reach out.
                </p>
              </div>

              {/* Skill chips */}

              <div className="mb-8 flex flex-wrap gap-2">
                {[
                  "AI / ML",
                  "Data Science",
                  "Computer Vision",
                  "ReactJS",
                  "FastAPI",
                  "MongoDB",
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                      dark
                        ? "border-white/10 bg-white/[0.04] text-gray-300"
                        : "border-gray-200 bg-gray-50 text-gray-600"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Contact details */}

              <div className="space-y-3">
                {contactDetails.map((contact) => {
                  const content = (
                    <>
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                        style={{
                          backgroundColor: contact.color,
                        }}
                      >
                        {contact.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-xs font-semibold uppercase tracking-wider ${
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
                          size={17}
                          className={`shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${
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
                        className={`contact-info-item group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 ${
                          dark
                            ? "border-white/10 bg-white/[0.025] hover:border-cyan-400/30 hover:bg-white/[0.045]"
                            : "border-gray-200 bg-gray-50 hover:border-purple-300 hover:bg-white"
                        }`}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={contact.label}
                      className={`contact-info-item flex items-center gap-4 rounded-2xl border p-4 ${
                        dark
                          ? "border-white/10 bg-white/[0.025]"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Socials */}

              <div className="contact-socials mt-8 border-t pt-7 border-gray-700/20">
                <div className="mb-4 flex items-center justify-between">
                  <p
                    className={`text-sm font-semibold ${primaryText}`}
                  >
                    Find me online
                  </p>

                  <span
                    className={`text-xs ${secondaryText}`}
                  >
                    Social profiles
                  </span>
                </div>

                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`contact-social group flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${
                        dark
                          ? "border-white/10 bg-white/[0.025] text-gray-400 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-400"
                          : "border-gray-200 bg-white text-gray-600 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600"
                      }`}
                    >
                      {social.icon}
                      <span className="hidden sm:inline">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — FORM
          ================================================= */}

          <div
            className={`contact-form-panel relative overflow-hidden rounded-3xl border p-6 sm:p-8 lg:p-9 ${panelClass}`}
          >
            {/* Form header */}

            <div className="mb-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p
                    className={`mb-2 text-xs font-bold uppercase tracking-[0.22em] ${
                      dark
                        ? "text-purple-400"
                        : "text-purple-600"
                    }`}
                  >
                    Send a message
                  </p>

                  <h3
                    className={`text-2xl font-bold sm:text-3xl ${primaryText}`}
                  >
                    Tell me about it.
                  </h3>
                </div>

                <div
                  className={`hidden h-12 w-12 items-center justify-center rounded-2xl sm:flex ${
                    dark
                      ? "bg-cyan-400/[0.08] text-cyan-400"
                      : "bg-purple-50 text-purple-600"
                  }`}
                >
                  <Send size={21} />
                </div>
              </div>

              <p
                className={`mt-3 max-w-xl text-sm leading-6 ${secondaryText}`}
              >
                Fill in the details below. Your email client
                will open with the message prepared for sending.
              </p>
            </div>

            {/* Form */}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name */}

              <div className="form-field">
                <label
                  htmlFor="name"
                  className={`mb-2 block text-sm font-semibold ${primaryText}`}
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
                  className={`w-full rounded-2xl border px-5 py-4 text-sm outline-none transition-all duration-300 sm:text-base ${inputClass}`}
                  style={{
                    boxShadow:
                      focusedField === "name"
                        ? dark
                          ? "0 0 0 3px rgba(34,211,238,0.08)"
                          : "0 0 0 3px rgba(139,92,246,0.08)"
                        : "none",
                  }}
                />
              </div>

              {/* Email */}

              <div className="form-field">
                <label
                  htmlFor="email"
                  className={`mb-2 block text-sm font-semibold ${primaryText}`}
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
                  className={`w-full rounded-2xl border px-5 py-4 text-sm outline-none transition-all duration-300 sm:text-base ${inputClass}`}
                  style={{
                    boxShadow:
                      focusedField === "email"
                        ? dark
                          ? "0 0 0 3px rgba(34,211,238,0.08)"
                          : "0 0 0 3px rgba(139,92,246,0.08)"
                        : "none",
                  }}
                />
              </div>

              {/* Message */}

              <div className="form-field">
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-semibold ${primaryText}`}
                  >
                    Your Message
                  </label>

                  <span
                    className={`text-xs ${secondaryText}`}
                  >
                    {formData.message.length}/1000
                  </span>
                </div>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => {
                    if (e.target.value.length <= 1000) {
                      handleChange(e);
                    }
                  }}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  rows={7}
                  required
                  className={`w-full resize-none rounded-2xl border px-5 py-4 text-sm leading-6 outline-none transition-all duration-300 sm:text-base ${inputClass}`}
                  style={{
                    boxShadow:
                      focusedField === "message"
                        ? dark
                          ? "0 0 0 3px rgba(34,211,238,0.08)"
                          : "0 0 0 3px rgba(139,92,246,0.08)"
                        : "none",
                  }}
                />
              </div>

              {/* Submit */}

              <div className="form-field pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60 ${
                    dark
                      ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:shadow-cyan-500/20"
                      : "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:shadow-purple-500/20"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Opening Mail...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </span>

                  <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Privacy / behavior note */}

              <div
                className={`flex items-start gap-2 rounded-xl border p-3 text-xs leading-5 ${
                  dark
                    ? "border-white/10 bg-white/[0.02] text-gray-500"
                    : "border-gray-200 bg-gray-50 text-gray-500"
                }`}
              >
                <CheckCircle2
                  size={15}
                  className={`mt-0.5 shrink-0 ${
                    dark
                      ? "text-cyan-400"
                      : "text-purple-600"
                  }`}
                />

                <span>
                  Your message stays in your email workflow.
                  No external form service is used.
                </span>
              </div>

              {/* Status */}

              {submitStatus && (
                <p
                  className={`flex items-center justify-center gap-2 text-center text-sm ${
                    dark
                      ? "text-cyan-400"
                      : "text-purple-600"
                  }`}
                  aria-live="polite"
                >
                  <CheckCircle2 size={16} />
                  {submitStatus}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* ===================================================
            BOTTOM CTA STRIP
        =================================================== */}

        <div
          className={`mt-6 rounded-2xl border px-5 py-4 ${
            dark
              ? "border-white/10 bg-white/[0.02]"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div>
              <p
                className={`text-sm font-semibold ${primaryText}`}
              >
                Building something interesting?
              </p>

              <p
                className={`mt-1 text-xs ${secondaryText}`}
              >
                I'm always interested in meaningful technology
                projects and new ideas.
              </p>
            </div>

            <a
              href="mailto:khandaljatin2187@gmail.com"
              className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                dark
                  ? "text-cyan-400 hover:text-cyan-300"
                  : "text-purple-600 hover:text-purple-700"
              }`}
            >
              Email me
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
