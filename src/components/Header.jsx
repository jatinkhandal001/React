import React, { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext.jsx";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  // --------------------------------
  // Detect scroll
  // --------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --------------------------------
  // Smooth scroll
  // --------------------------------

  const scrollToSection = (href) => {
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "border-gray-800 bg-gray-950/95 shadow-lg shadow-black/20"
            : "border-gray-200 bg-white/95 shadow-lg shadow-black/10"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =================================
            Main Navbar
        ================================= */}

        <div className="flex h-16 items-center justify-between gap-3">
          {/* =================================
              Logo
          ================================= */}

          <button
            type="button"
            onClick={() => scrollToSection("#hero")}
            aria-label="Go to home"
            className="shrink-0 font-bold tracking-wider transition-transform duration-200 hover:scale-105"
            style={{
              fontFamily: "Orbitron, monospace",
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xl text-transparent">
              JK
            </span>
          </button>

          {/* =================================
              Desktop Navigation
          ================================= */}

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  theme === "dark"
                    ? "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                    : "text-gray-600 hover:bg-gray-100 hover:text-purple-600"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* =================================
              Right Controls
          ================================= */}

          <div className="flex shrink-0 items-center gap-2">
            {/* Theme Toggle */}

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } theme`}
              className={`rounded-full p-2 transition-all duration-200 hover:scale-110 ${
                theme === "dark"
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* Resume - Desktop */}

            <a
              href="https://docs.google.com/document/d/1NtpXVOfE7WgeqBKKcmO5kbBm_vb6Z_Nr/edit?usp=drivesdk&ouid=102820377739370740071&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 sm:flex"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu */}

            <button
              type="button"
              onClick={() =>
                setIsMobileMenuOpen((prev) => !prev)
              }
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              className={`rounded-full p-2 transition-all duration-200 hover:scale-105 md:hidden ${
                theme === "dark"
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {isMobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* =================================
            Mobile Menu
        ================================= */}

        <div
          className={`grid transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`border-t py-3 ${
                theme === "dark"
                  ? "border-gray-800"
                  : "border-gray-200"
              }`}
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() =>
                    scrollToSection(item.href)
                  }
                  className={`block w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition-all duration-200 ${
                    theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800 hover:pl-5 hover:text-cyan-400"
                      : "text-gray-700 hover:bg-gray-100 hover:pl-5 hover:text-purple-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Resume */}

              <a
                href="https://docs.google.com/document/d/1NtpXVOfE7WgeqBKKcmO5kbBm_vb6Z_Nr/edit?usp=drivesdk&ouid=102820377739370740071&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
