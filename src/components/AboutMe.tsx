import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#2c5b53]"></div>
            <span className="text-xs font-normal uppercase tracking-wide text-[#2c5b53] md:text-sm">
              About Me
            </span>
          </div>
        </div>
        <h2 className="mb-12 text-center font-serif text-3xl font-normal leading-tight text-black md:text-4xl lg:mb-16 lg:text-5xl">
          Who I am
        </h2>
        <p className="mb-12 text-center text-base font-normal leading-relaxed text-gray-600 md:text-lg lg:mb-16 lg:text-xl">
          Hi, I'm Athena, a professional designer and dressmaker with a passion
          for creating timeless fashion. Since 2010, I have been dedicated to
          designing and tailoring bespoke garments that fit beautifully and
          reflect personal style. Whether you need a custom dress for a special
          occasion or expert alterations to perfect your look, I bring
          precision, creativity, and care to every piece.
        </p>
        <div className="flex justify-center">
          <button
            className="flex items-center gap-2 rounded-full bg-[#2c5b53] px-6 py-3 text-base font-normal text-white transition-all hover:bg-[#234740] cursor-pointer"
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
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
