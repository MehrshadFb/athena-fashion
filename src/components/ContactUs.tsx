import React, { useState } from "react";
import { motion } from "framer-motion";
import athena from "../assets/athena.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    show: boolean;
    success: boolean;
    message: string;
  }>({
    show: false,
    success: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ show: false, success: false, message: "" });
    const formDataToSend = new FormData(e.target as HTMLFormElement);
    formDataToSend.append(
      "access_key",
      process.env.REACT_APP_FORM_SUBMISSION_API || ""
    );
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus({
          show: true,
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          comment: "",
        });
        // Hide the message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ show: false, success: false, message: "" });
        }, 5000);
      } else {
        setSubmitStatus({
          show: true,
          success: false,
          message: "Oops! Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        show: true,
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact-us"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#2c5b53] px-6 py-16 rounded-3xl md:px-8 md:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 flex items-start">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white"></div>
                <span className="text-xs font-normal uppercase tracking-wide text-white md:text-sm">
                  Contact us
                </span>
              </div>
            </div>
            <h2 className="mb-8 font-serif text-3xl text-left font-normal leading-tight text-white md:text-4xl lg:mb-12 lg:text-5xl">
              Get in touch with our experts team
            </h2>
            {submitStatus.show && (
              <div
                className={`mb-6 rounded-xl px-6 py-4 ${
                  submitStatus.success
                    ? "bg-green-500/20 border border-green-500/30"
                    : "bg-red-500/20 border border-red-500/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  {submitStatus.success ? (
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  <p
                    className={`text-sm font-medium md:text-base ${
                      submitStatus.success ? "text-green-100" : "text-red-100"
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border-none bg-[#234740] px-6 py-4 text-base text-white placeholder-gray-400 outline-none transition-all focus:bg-[#1e3d37]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border-none bg-[#234740] px-6 py-4 text-base text-white placeholder-gray-400 outline-none transition-all focus:bg-[#1e3d37]"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border-none bg-[#234740] px-6 py-4 text-base text-white placeholder-gray-400 outline-none transition-all focus:bg-[#1e3d37]"
                required
              />
              <textarea
                name="comment"
                placeholder="How Can We Help?"
                value={formData.comment}
                onChange={handleChange}
                rows={6}
                className="w-full resize-none rounded-xl border-none bg-[#234740] px-6 py-4 text-base text-white placeholder-gray-400 outline-none transition-all focus:bg-[#1e3d37]"
                required
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-full bg-white px-6 py-4 text-base font-normal text-[#2c5b53] transition-all hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit your Form"}
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
            </form>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl lg:h-[600px]">
              <img
                src={athena}
                alt="Professional Tailor"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
