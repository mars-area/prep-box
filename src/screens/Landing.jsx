import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Results from "../components/Sections/Results";
import Testimonial from "../components/Sections/Testimonial";
import Team from "../components/Sections/Team";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import FAQ from "../components/Sections/FAQ"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Results />
      <Testimonial />
      <Services />
      <Team />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}


