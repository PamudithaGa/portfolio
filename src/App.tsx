import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="w-[80%] mx-auto">
        <Navbar />
      </section>
      <section className="w-[80%] mx-auto mt-10">
        <Hero />
      </section>

      <section className="mt-30 w-[80%] mx-auto">
        <About />
      </section>
      <section className="mt-30 w-[80%] mx-auto">
        <TechStack />
      </section>
      <section className="mt-30 w-[80%] mx-auto">
        <Project />
      </section>
      <section className="mt-30 w-[80%] mx-auto"></section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
