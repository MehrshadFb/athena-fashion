import React, { useEffect, useState } from "react";
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
import NotFoundPage from "./pages/NotFoundPage";
import pageMeta from "./data/pageMeta.json";

type Page = "home" | "portfolio" | "notFound";

const pathForPage: Record<Exclude<Page, "notFound">, string> = {
  home: pageMeta.home.path,
  portfolio: pageMeta.portfolio.path,
};

const pageFromPath = (pathname: string): Page => {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === pathForPage.home) return "home";
  if (path === pathForPage.portfolio) return "portfolio";
  return "notFound";
};

interface AppProps {
  // Set when prerendering at build time, where there is no window.
  initialPath?: string;
}

function App({ initialPath }: AppProps) {
  const [currentPage, setCurrentPage] = useState<Page>(() =>
    pageFromPath(initialPath ?? window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () =>
      setCurrentPage(pageFromPath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = pageMeta[currentPage].title;
    // Unknown URLs are served index.html by the host, so tell crawlers not to
    // index them (avoids soft-404 duplicates of the home page).
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (currentPage === "notFound") {
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }
      robots.content = "noindex";
    } else {
      robots?.remove();
    }
  }, [currentPage]);

  const navigateTo = (page: Exclude<Page, "notFound">, scrollTarget?: string) => {
    if (window.location.pathname !== pathForPage[page]) {
      window.history.pushState(null, "", pathForPage[page]);
    }
    setCurrentPage(page);
    if (scrollTarget) {
      setTimeout(() => {
        document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (currentPage === "portfolio") {
    return (
      <PortfolioPage
        onNavigateHome={(sectionId) => navigateTo("home", sectionId)}
      />
    );
  }

  if (currentPage === "notFound") {
    return (
      <NotFoundPage
        onNavigateHome={(sectionId) => navigateTo("home", sectionId)}
        onNavigatePortfolio={() => navigateTo("portfolio")}
      />
    );
  }

  return (
    <div className="App">
      <Navbar onNavigatePortfolio={() => navigateTo("portfolio")} />
      <main>
        <Hero />
        <Services />
        <AboutMe />
        <HowItWorks />
        <PortfolioTeaser onViewPortfolio={() => navigateTo("portfolio")} />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
