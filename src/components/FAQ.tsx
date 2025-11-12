import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do you require an appointment?",
    answer:
      "While walk-ins are welcome, appointments ensure dedicated time for consultations and fittings.",
  },
  {
    question: "What types of alterations do you offer?",
    answer:
      "We offer hemming, resizing, tapering, zipper replacements, and more to ensure your clothes fit perfectly.",
  },
  {
    question: "How long does an alteration or custom design take?",
    answer:
      "Turnaround time depends on the complexity of the work. Simple alterations take a few days, while custom designs may take a few weeks.",
  },
  {
    question: "Do I need to bring my own fabric for dressmaking?",
    answer:
      "You're welcome to bring your own fabric, but we also offer a wide selection of high-quality fabrics available for purchase in-store.",
  },
  {
    question: "What should I bring for a fitting or consultation?",
    answer:
      "For alterations, bring the item and the shoes or accessories you'll wear with it. For custom designs, bring inspiration images or sketches if you have them!",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#2c5b53]"></div>
            <span className="text-xs font-normal uppercase tracking-wide text-[#2c5b53] md:text-sm">
              FAQ
            </span>
          </div>
        </div>
        <h2 className="mb-16 text-center font-serif text-3xl font-normal leading-tight text-black md:text-4xl lg:text-5xl">
          Answers to your questions
        </h2>
        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 transition-all last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between py-6 text-left transition-all"
              >
                <span className="pr-6 text-base font-normal text-black md:text-lg lg:text-xl">
                  {faq.question}
                </span>
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#2c5b53] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6">
                  <p className="pr-16 text-sm text-left font-normal leading-relaxed text-gray-600 md:text-base lg:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
