import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import PortfolioTeaser from "./components/PortfolioTeaser";
import PortfolioPage from "./pages/PortfolioPage";

type Page = "home" | "portfolio";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "portfolio") {
    return (
      <PortfolioPage onNavigateHome={() => navigateTo("home")} />
    );
  }

  return (
    <div className="App">
      <Navbar onNavigatePortfolio={() => navigateTo("portfolio")} />
      <Hero />
      <Services />
      <AboutMe />
      <HowItWorks />
      <PortfolioTeaser onViewPortfolio={() => navigateTo("portfolio")} />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
