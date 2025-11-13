import React from "react";
import { motion } from "framer-motion";
import sewingMachine from "../assets/sewing-machine.webp";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white px-6 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#2c5b53] px-8 py-16 md:px-12 lg:px-16 lg:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <div className="mb-8 flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                        fill="white"
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-base font-normal text-white">
                  Rated 4.9/5
                </span>
              </div>
              <h1 className="mb-6 font-serif text-4xl text-left font-normal leading-tight text-white md:text-5xl lg:text-6xl">
                Custom Tailoring that Fits Your Life Perfectly
              </h1>
              <p className="mb-8 text-base font-normal text-left leading-relaxed text-white/90 md:text-lg lg:text-xl">
                Experience clothing crafted to your style, measurements, and
                comfort. Our expert tailors deliver precision, elegance, and a
                personal touch with every stitch.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-normal text-[#2c5b53] transition-all hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    document
                      .getElementById("contact-us")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book Now
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33325 8.00004H14.6666M14.6666 8.00004L7.99992 1.33337M14.6666 8.00004L7.99992 14.6667"
                      stroke="#2c5b53"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="text-base font-normal text-white transition-opacity hover:opacity-80 cursor-pointer"
                  onClick={() => {
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  See Our Services
                </button>
              </div>
            </div>
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl lg:h-[500px]">
                <img
                  src={sewingMachine}
                  alt="Sewing Machine"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
