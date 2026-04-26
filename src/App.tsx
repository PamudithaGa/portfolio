import "./App.css";
import Hero from "./components/Hero";
import About from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Contact from "./components/Coontact";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <section id="home" className="w-[98%] mx-auto">
        <Hero />
      </section>

      <section id="about" className="mt-30 w-[90%] mx-auto">
        <About />
      </section>

      <section id="tech-stack" className="mt-30 w-[90%] mx-auto">
        <TechStack />
      </section>
      
      <section id="projects" className="mt-30 w-[90%] mx-auto">
        <Project />
      </section>
      
      <section id="contact" className="mt-30 w-[90%] mx-auto">
        <Contact />
      </section>
      
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
