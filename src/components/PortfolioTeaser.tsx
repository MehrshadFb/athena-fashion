import React from "react";
import { motion } from "framer-motion";

interface PortfolioTeaserProps {
  onViewPortfolio: () => void;
}

const PortfolioTeaser: React.FC<PortfolioTeaserProps> = ({
  onViewPortfolio,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#f5f3ef] px-8 py-16 md:px-12 lg:px-16 lg:py-20">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#2c5b53]"></div>
              <span className="text-xs font-normal uppercase tracking-wide text-[#2c5b53] md:text-sm">
                Portfolio
              </span>
            </div>

            <h2 className="mb-6 font-serif text-3xl font-normal leading-tight text-black md:text-4xl lg:text-5xl">
              See the work we're proud of
            </h2>

            <p className="mb-10 max-w-xl text-base font-normal leading-relaxed text-gray-600 md:text-lg">
              Browse our portfolio of custom-made designs, where every garment is thoughtfully created and sewn to perfection.
            </p>

            <button
              onClick={onViewPortfolio}
              className="flex items-center gap-2 rounded-full bg-[#2c5b53] px-8 py-4 text-base font-normal text-white transition-all hover:bg-[#234740] cursor-pointer"
            >
              View Portfolio
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

          {/* Decorative background dots */}
          <div
            className="pointer-events-none absolute right-8 top-8 opacity-20"
            aria-hidden="true"
          >
            <div className="grid grid-cols-4 gap-3">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-[#2c5b53]"
                />
              ))}
            </div>
          </div>
          <div
            className="pointer-events-none absolute bottom-8 left-8 opacity-20"
            aria-hidden="true"
          >
            <div className="grid grid-cols-4 gap-3">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-[#2c5b53]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioTeaser;
