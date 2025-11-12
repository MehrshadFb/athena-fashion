import React, { useState } from "react";
import logo from "../assets/athena-fashion-logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-6 py-4 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Athena Fashion Logo"
            className="h-12 w-12 rounded-2xl"
          />
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-base font-normal text-black transition-opacity hover:opacity-70"
          >
            Services
          </a>
          <a
            href="#features"
            className="text-base font-normal text-black transition-opacity hover:opacity-70"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-base font-normal text-black transition-opacity hover:opacity-70"
          >
            Pricing
          </a>
          <a
            href="#how-it-work"
            className="text-base font-normal text-black transition-opacity hover:opacity-70"
          >
            How it work
          </a>
        </div>
        <div className="hidden md:flex">
          <button className="flex items-center gap-2 rounded-full bg-[#2c5b53] px-6 py-3 text-base font-normal text-white transition-all hover:bg-[#234740]">
            Get in touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
        <button
          className="flex md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-6 border-t border-gray-200 pt-6 md:hidden">
          <a
            href="#services"
            className="text-lg font-normal text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#features"
            className="text-lg font-normal text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-lg font-normal text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#how-it-work"
            className="text-lg font-normal text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            How it work
          </a>
          <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#2c5b53] px-6 py-3 text-base font-normal text-white">
            Get in touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
      )}
    </nav>
  );
};

export default Navbar;
