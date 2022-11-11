import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer />
      <div className="h-[380px] md:h-[370px]" />
    </div>
  );
}

export default App;
