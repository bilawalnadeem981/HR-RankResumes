import React from "react";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Results from "../components/landing/Results";
import CTA from "../components/landing/CTA";
import Footer from "../components/common/Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features preview={true} />
      <HowItWorks preview={true} />
      <Results preview={true} />
      <CTA />
      <Footer />
    </>
  );
};

export default LandingPage;