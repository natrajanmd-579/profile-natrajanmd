import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={theme}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;