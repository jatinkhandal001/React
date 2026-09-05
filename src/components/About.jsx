import React from "react";
import { Code, Zap, Heart } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext.jsx";

const About = () => {
  const { theme } = useTheme();

  const cards = [
    {
      icon: <Code size={24} aria-hidden="true" />,
      title: "AI & Machine Learning",
      description:
        "Building and optimizing machine learning models for classification, regression, and computer vision applications using Python and modern AI techniques.",
    },
    {
      icon: <Zap size={24} aria-hidden="true" />,
      title: "Data Science",
      description:
        "Working with data preprocessing, exploratory data analysis, feature engineering, statistical analysis, and machine learning workflows to turn data into useful insights.",
    },
    {
      icon: <Heart size={24} aria-hidden="true" />,
      title: "AI & Cloud Solutions",
      description:
        "Developing practical AI applications and RESTful APIs with experience across Microsoft Azure and Google Cloud Platform for scalable software solutions.",
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className={`py-20 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2
            id="about-title"
            className={`mb-4 text-4xl font-bold md:text-5xl ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            }`}
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            About Me
          </h2>

          <p
            className={`mx-auto max-w-3xl text-xl leading-8 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I am Jatin Khandal, a B.Tech Artificial Intelligence and Data
            Science student focused on building practical AI and software
            solutions. My experience spans{" "}
            <strong>Python, Machine Learning, Data Science, and Computer Vision</strong>,
            along with modern web technologies such as{" "}
            <strong>ReactJS, FastAPI, and MongoDB</strong>.
          </p>

          <p
            className={`mx-auto mt-5 max-w-3xl text-base leading-7 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            I enjoy transforming ideas into production-oriented applications,
            from data preprocessing and model development to RESTful APIs and
            cloud-based AI solutions. My goal is to create scalable,
            intelligent systems that solve real-world problems.
          </p>
        </div>

        {/* Expertise cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={index}
              className={`about-card group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-800/50 hover:bg-gray-800/70"
                  : "border-gray-200 bg-white/50 hover:bg-white/70"
              }`}
            >
              {/* Icon */}
              <div
                className={`mb-4 inline-flex rounded-lg p-3 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                }`}
                aria-hidden="true"
              >
                {card.icon}
              </div>

              {/* Card heading */}
              <h3
                className={`mb-3 text-xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {card.title}
              </h3>

              {/* Card description */}
              <p
                className={`leading-7 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
