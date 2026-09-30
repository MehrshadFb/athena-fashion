import React, { useState } from "react";
import logo from "../assets/athena-fashion-logo.webp";

interface NavbarProps {
  onNavigatePortfolio?: () => void;
  onNavigateHome?: (sectionId?: string) => void;
  isSubPage?: boolean;
}

const navLinks: { label: string; sectionId?: string; href: string }[] = [
  { label: "Services", sectionId: "services", href: "/#services" },
  { label: "About Me", sectionId: "about", href: "/#about" },
  { label: "How it works", sectionId: "how-it-works", href: "/#how-it-works" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", sectionId: "faq", href: "/#faq" },
  { label: "Contact Us", sectionId: "contact-us", href: "/#contact-us" },
];

const Navbar: React.FC<NavbarProps> = ({
  onNavigatePortfolio,
  onNavigateHome,
  isSubPage = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionLink = (id: string) => {
    setIsMenuOpen(false);
    if (isSubPage && onNavigateHome) {
      onNavigateHome(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId?: string
  ) => {
    e.preventDefault();
    if (sectionId) {
      handleSectionLink(sectionId);
    } else {
      setIsMenuOpen(false);
      onNavigatePortfolio?.();
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (isSubPage && onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleContactClick = () => handleSectionLink("contact-us");

  return (
    <nav
      aria-label="Main"
      className="w-full bg-white px-6 py-4 md:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="flex items-center gap-2" onClick={handleLogoClick}>
          <img
            src={logo}
            alt="Athena Fashion – Toronto tailor and dressmaker"
            width={48}
            height={48}
            className="h-12 w-12 rounded-2xl"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-normal text-black transition-opacity hover:opacity-70 cursor-pointer"
              onClick={(e) => handleNavClick(e, link.sectionId)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <button
            className="flex items-center gap-2 rounded-full bg-[#2c5b53] px-6 py-3 text-base font-normal text-white transition-all hover:bg-[#234740] cursor-pointer"
            onClick={handleContactClick}
          >
            Get in touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1.33325 8.00004H14.6666M14.6666 8.00004L7.99992 1.33337M14.6666 8.00004L7.99992 14.6667"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {!isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-6 border-t border-gray-200 pt-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-normal text-black cursor-pointer"
              onClick={(e) => handleNavClick(e, link.sectionId)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#2c5b53] px-6 py-3 text-base font-normal text-white cursor-pointer"
            onClick={handleContactClick}
          >
            Get in touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M1.33325 8.00004H14.6666M14.6666 8.00004L7.99992 1.33337M14.6666 8.00004L7.99992 14.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
