import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedBackground />
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
