import React from "react";
import Features from "../components/ui/Features";
import Pricing from "../components/ui/Pricing";
import Stats from "../components/ui/Stats";
import Team from "../components/ui/Team";
import Testimonials from "../components/ui/Testimonials";
import Cta from "../components/ui/Cta";

function About() {
  return (
    <div>
      <Features />
      <Pricing />
      <Team />
      <Stats />
      <Testimonials />
      <Cta />
    </div>
  );
}

export default About;
