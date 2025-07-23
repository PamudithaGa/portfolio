import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//Compornents
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="w-[90%] ml-[5%]">
        <Navbar />
      </section>
      <section className="w-[90%] ml-[5%] h-[100%]">
        <Hero />
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      
    </>
  );
}

export default App;
