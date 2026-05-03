import React from "react";
import Hero from "../components/ui/Hero";
import Gallery from "../components/ui/Gallery";
import Pricing from "../components/ui/Pricing";
import Testimonials from "../components/ui/Testimonials";
import Cta from "../components/ui/Cta";

function Home() {
  return (
    <div>
      <Hero />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Cta />
    </div>
  );
}

export default Home;
