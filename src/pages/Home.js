import React from "react";
import Hero from "../components/Hero";
import Insurance from "../components/Insurance";
import Navbar from "../components/Navbar";
import Qualified from "../components/Qualified";
import Services from "../components/Services";
import Articles from "../components/Articles"

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Insurance/>
      <Qualified/>
      <Articles/>
    </div>
  );
}

export default Home;
