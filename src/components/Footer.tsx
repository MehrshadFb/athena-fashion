import React from "react";
import logo from "../assets/athena-fashion-logo.webp";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2c5b53] p-2">
                <img
                  src={logo}
                  alt="Athena Fashion Logo"
                  className="h-full w-full"
                />
              </div>
              <span className="text-xl font-semibold text-black md:text-2xl">
                Athena Fashion
              </span>
            </div>
            <p className="mb-6 text-sm text-left font-normal leading-relaxed text-gray-600 md:text-base">
              2nd Floor, 685 Queen St W, Toronto, ON M6J 1E6
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold text-black md:text-lg">
              Menu
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-sm font-normal text-gray-600 transition-colors hover:text-black md:text-base cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm font-normal text-gray-600 transition-colors hover:text-black md:text-base cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm font-normal text-gray-600 transition-colors hover:text-black md:text-base cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm font-normal text-gray-600 transition-colors hover:text-black md:text-base cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("faq")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="text-sm font-normal text-gray-600 transition-colors hover:text-black md:text-base cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact-us")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold text-black md:text-lg">
              Follow us:
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/athena.fashion.ca/"
                  className="text-sm font-normal text-gray-600 transition-colors hover:text-black md:text-base"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/atena-rahimisadegh-0325192b5/"
                  className="text-sm font-normal text-gray-600 transition-colors hover:text-black md:text-base"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold text-black md:text-lg">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:athena.fashion.ca@gmail.com"
                  className="text-sm font-normal text-gray-600 transition-colors hover:text-black md:text-base"
                >
                  athena.fashion.ca@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+123456789"
                  className="text-sm font-normal text-gray-600 transition-colors hover:text-black md:text-base"
                >
                  +1 (437) 602 3940
                </a>
              </li>
              <li>
                <p className="text-sm font-normal text-gray-600 md:text-base">
                  Toronto, Canada
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-300 pt-8 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Copyright@2025</span>
            <span className="text-gray-400">●</span>
            <span>Athena Fashion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
