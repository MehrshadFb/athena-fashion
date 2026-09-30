import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface NotFoundPageProps {
  onNavigateHome: (sectionId?: string) => void;
  onNavigatePortfolio: () => void;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigatePortfolio,
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onNavigatePortfolio={onNavigatePortfolio}
        onNavigateHome={onNavigateHome}
        isSubPage
      />
      <main className="w-full px-6 py-24 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="mb-6 font-serif text-3xl font-normal leading-tight text-black md:text-4xl lg:text-5xl">
            Page not found
          </h1>
          <p className="mb-10 text-base font-normal leading-relaxed text-gray-600 md:text-lg">
            The page you're looking for doesn't exist. Explore our tailoring and
            dressmaking services instead.
          </p>
          <a
            href="/"
            className="flex items-center gap-2 rounded-full bg-[#2c5b53] px-8 py-4 text-base font-normal text-white transition-all hover:bg-[#234740] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
          >
            Back to home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
