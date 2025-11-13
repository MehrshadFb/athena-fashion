import React from "react";
import { motion } from "framer-motion";
import ideaImage from "../assets/idea.png";
import fabricImage from "../assets/fabric.png";
import craftImage from "../assets/craft.png";
import adjustmentImage from "../assets/adjustment.png";
import deliveryImage from "../assets/delivery.png";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
  alignment: "left" | "right";
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Schedule a consultation to discuss your style preferences and project needs. We'll take measurements and understand your vision for the perfect fit.",
    image: ideaImage,
    alignment: "right",
  },
  {
    number: "02",
    title: "Design & Fabric Selection",
    description:
      "Choose from our curated collection of premium fabrics or bring your own. We'll help you select the perfect materials and finalize your design details.",
    image: fabricImage,
    alignment: "left",
  },
  {
    number: "03",
    title: "Expert Craftsmanship",
    description:
      "Our skilled tailors begin crafting your custom piece with meticulous attention to detail, ensuring every stitch meets our high standards of quality.",
    image: craftImage,
    alignment: "right",
  },
  {
    number: "04",
    title: "Fitting & Adjustments",
    description:
      "Try on your garment for a fitting session. We'll make any necessary adjustments to ensure a perfect, comfortable fit that exceeds your expectations.",
    image: adjustmentImage,
    alignment: "left",
  },
  {
    number: "05",
    title: "Final Delivery",
    description:
      "Receive your beautifully crafted, custom-fitted garment. Walk away with confidence knowing your clothing fits perfectly and reflects your unique style.",
    image: deliveryImage,
    alignment: "right",
  },
];

const HowItWorks = () => {
  return (
    <motion.section
      id="how-it-works"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#2c5b53]"></div>
            <span className="text-xs font-normal uppercase tracking-wide text-[#2c5b53] md:text-sm">
              How it works
            </span>
          </div>
        </div>
        <h2 className="mb-12 text-center font-serif text-3xl font-normal leading-tight text-black md:text-4xl lg:mb-16 lg:text-5xl">
          A proven process to bring your dream outfit to life.
        </h2>
        <div className="relative space-y-20 lg:space-y-32">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 ${
                step.alignment === "left" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`relative flex ${
                  step.alignment === "left"
                    ? "lg:order-2 lg:justify-start"
                    : "lg:justify-end"
                }`}
              >
                <div className="relative w-full overflow-hidden rounded-3xl lg:w-4/5">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover md:h-80 lg:h-88"
                  />
                </div>
              </div>
              <div
                className={`flex flex-col items-center text-center lg:justify-center lg:text-left ${
                  step.alignment === "left"
                    ? "lg:order-1 lg:items-end lg:text-right"
                    : "lg:items-start"
                }`}
              >
                <div className="relative mb-6 inline-flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2c5b53] text-sm font-medium text-white lg:h-14 lg:w-14 lg:text-base">
                    {step.number}
                  </div>
                </div>
                <h3 className="mb-4 font-serif text-2xl font-normal text-black md:text-3xl lg:text-4xl">
                  {step.title}
                </h3>
                <p className="max-w-md text-sm font-normal leading-relaxed text-gray-600 md:text-base lg:text-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
