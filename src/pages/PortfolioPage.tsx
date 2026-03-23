import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import portfolioCategories from "../data/portfolioImages";

interface PortfolioPageProps {
  onNavigateHome: (sectionId?: string) => void;
}

type ColumnCount = 2 | 3 | 4;

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigateHome }) => {
  const [columns, setColumns] = useState<ColumnCount>(3);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const columnOptions: ColumnCount[] = [2, 3, 4];

  const columnClass: Record<ColumnCount, string> = {
    2: "columns-1 sm:columns-2",
    3: "columns-1 sm:columns-2 lg:columns-3",
    4: "columns-1 sm:columns-2 lg:columns-3 xl:columns-4",
  };

  const allImages = portfolioCategories.flatMap((category) => category.images);
  let currentStartIndex = 0;
  const categorySections = portfolioCategories.map((category) => {
    const section = {
      ...category,
      startIndex: currentStartIndex,
    };
    currentStartIndex += category.images.length;

    return section;
  });

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? allImages.length - 1 : lightboxIndex - 1
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === allImages.length - 1 ? 0 : lightboxIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onNavigatePortfolio={() => {}}
        onNavigateHome={onNavigateHome}
        isPortfolioPage
      />

      <main className="w-full px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#2c5b53]"></div>
              <span className="text-xs font-normal uppercase tracking-wide text-[#2c5b53] md:text-sm">
                Portfolio
              </span>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h1 className="font-serif text-3xl font-normal leading-tight text-black md:text-4xl lg:text-5xl">
                Our Work
              </h1>

              {/* Grid size control */}
              {allImages.length > 0 && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-normal text-gray-500">
                    Grid
                  </span>
                  <div className="flex gap-1">
                    {columnOptions.map((col) => (
                      <button
                        key={col}
                        onClick={() => setColumns(col)}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-normal transition-all cursor-pointer ${
                          columns === col
                            ? "bg-[#2c5b53] text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Gallery */}
          {allImages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-200 py-32"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2c5b53]/10">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="3"
                    stroke="#2c5b53"
                    strokeWidth="1.5"
                  />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="#2c5b53" />
                  <path
                    d="M21 15L16 10L5 21"
                    stroke="#2c5b53"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base font-normal text-gray-500">
                Portfolio images coming soon
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {categorySections.map((category, sectionIndex) => (
                <div key={category.name} className="space-y-5">
                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl font-normal text-black md:text-3xl">
                      {category.name}
                    </h2>
                    <div className="h-px w-full bg-gray-200" />
                  </div>

                  <div className={`${columnClass[columns]} gap-4`}>
                    {category.images.map((image, index) => {
                      const globalIndex = category.startIndex + index;
                      const animationIndex = sectionIndex * 6 + index;

                      return (
                        <motion.div
                          key={`${category.name}-${index}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: animationIndex * 0.04 }}
                          className="mb-4 break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group"
                          onClick={() => setLightboxIndex(globalIndex)}
                        >
                          <div className="relative overflow-hidden rounded-2xl">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20 rounded-2xl" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 cursor-pointer"
            onClick={() => setLightboxIndex(null)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {allImages.length > 1 && (
            <>
              <button
                className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}

          <img
            src={allImages[lightboxIndex].src}
            alt={allImages[lightboxIndex].alt}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-normal text-white/60">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PortfolioPage;
