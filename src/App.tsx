import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <HowItWorks />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
