import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Contact from "./components/Coontact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import IntroLoader from "./components/IntroLoader";
import ScrollProgressRail from "./components/ScrollProgressRail";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <IntroLoader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ScrollProgressRail />
            <section id="home" className="w-[98%] mx-auto ">
              <Hero />
            </section>

            <section id="about" className="lg:w-[80%] w-[100%] mt-0 lg:h-[100dvh] mx-auto">
              <About />
            </section>

            <section id="tech-stack" className="mt-0 lg:h-[100dvh]">
              <TechStack />
            </section>
            
            <section id="projects" className="mt-10 w-[98%] h-[99dvh] lg:h-[95dvh] mx-auto">
              <Project />
            </section>
            
            <section id="contact" className="lg:mt-20 mt-10 w-[90%] mx-auto">
              <Contact />
            </section>
            
            <section className="mt-10">
              <Footer />
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

