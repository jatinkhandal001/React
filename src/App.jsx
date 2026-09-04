import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingOrbs from "./components/FloatingOrbs";
import BackToTop from "./components/BackToTop";
import PortfolioMotion from "./components/PortfolioMotion";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext.jsx";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {!isLoading && (
        <div
          className={`min-h-screen ${
            theme === "dark" ? "bg-gray-900" : "bg-gray-50"
          }`}
        >
          <FloatingOrbs />
          <Header />

          <main className="relative z-10">
            <PortfolioMotion>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Certificates />
              <Technologies />
              <Contact />
              <Footer />
            </PortfolioMotion>
          </main>

          <BackToTop />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
