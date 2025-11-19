import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>

    </>
  );
}

export default App;
