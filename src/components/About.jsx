import React from 'react';
import { Code, Zap, Heart } from 'lucide-react';
import { useTheme } from "../contexts/ThemeContext.jsx";

const About = () => {
  const { theme } = useTheme();

  const cards = [
    {
      icon: <Code size={24} />,
      title: 'AI/ML Developer',
      description: 'Building and optimizing machine learning models with expertise in classification, regression, and computer vision.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Data Science Expert',
      description: 'Proficient in data preprocessing, feature engineering, EDA, and statistical analysis using Python and cloud platforms.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Cloud AI Solutions',
      description: 'Hands-on experience deploying AI solutions on Microsoft Azure and Google Cloud Platform with RESTful APIs.'
    }
  ];

  return (
    <section
      id="about"
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'dark' 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
            }`}
            style={{ fontFamily: 'Orbitron, monospace' }}
            data-aos="fade-up"
          >
            About Me
          </h2>
          <p 
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            B.Tech Artificial Intelligence and Data Science student with practical internship experience
            in Machine Learning and Computer Vision development. Proficient in ML algorithms, data
            preprocessing, feature engineering, and building API-driven AI applications. Hands-on experience 
            deploying AI solutions on cloud platforms. Actively seeking AI/ML roles to work on
            production-ready, scalable AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`about-card group relative overflow-hidden p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                  : 'bg-white/50 border-gray-200 hover:bg-white/70'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
              }`}>
                {card.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {card.title}
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;