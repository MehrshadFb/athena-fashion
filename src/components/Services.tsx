import React, { JSX } from "react";
import { motion } from "framer-motion";
import scissor from "../assets/scissor.svg";
import dress from "../assets/dress.svg";
import sewing from "../assets/sewing.svg";
import fabric from "../assets/fabric.svg";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <img src={scissor} alt="Scissor Icon" className="h-8 w-8" />,
    title: "Alteration",
    description:
      "We alter and adjust your garments for a flawless fit, ensuring comfort and style every time.",
  },
  {
    icon: <img src={dress} alt="Dress Icon" className="h-8 w-8" />,
    title: "Dressmaking",
    description:
      "From bridal and evening gowns to custom dresses and everyday wear, we craft garments tailored to your style.",
  },
  {
    icon: <img src={sewing} alt="Sewing Icon" className="h-8 w-8" />,
    title: "Sewing",
    description:
      "Expert sewing services for garments, curtains, upholstery, and more—customized to your needs.",
  },
  {
    icon: <img src={fabric} alt="Fabric Icon" className="h-8 w-8" />,
    title: "Others...",
    description:
      "We offer buttonholes, snap buttons, fabric button attachment, and other specialized sewing services.",
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#2c5b53]"></div>
            <span className="text-xs font-normal uppercase tracking-wide text-[#2c5b53] md:text-sm">
              Services
            </span>
          </div>
        </div>
        <h2 className="mb-12 text-center font-serif text-3xl font-normal leading-tight text-black md:text-4xl lg:mb-16 lg:text-5xl">
          Key benefits that set us apart from other tailors
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2c5b53]">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-normal text-black md:text-2xl">
                {service.title}
              </h3>
              <p className="text-sm font-normal leading-relaxed text-gray-600 md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
