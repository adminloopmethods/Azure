


"use client";
import React, { useState, useEffect } from "react";
import { sendEmail } from "../../utils/sendEmail";
import { RxCross2 } from "react-icons/rx";

const ContactUsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const inputClass =
    "block w-full bg-transparent border-b border-gray-300 px-0 py-2 placeholder:text-sm focus:border-black focus:outline-none";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const result = await sendEmail({
        name: formData.name,
        lastName: "",
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      });

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setTimeout(() => {
          setIsOpen(false);
          setFormData({ name: "", phoneNumber: "", email: "", message: "" });
          setStatus("");
        }, 2000);
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      setStatus("❌ Something went wrong.");
    }

    setLoading(false);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({ name: "", phoneNumber: "", email: "", message: "" });
    setStatus("");
  };

  // ✅ Guard inside the component, not outside
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative bg-white w-11/12 md:w-1/2 text-black/70 p-6 md:p-10 rounded-lg shadow-lg">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition cursor-pointer"
        >
          <RxCross2 size={24} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Contact Us
          </h2>
          <p className="text-sm mt-2">
            Have a question? Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form className="mx-auto  space-y-8 p-4" onSubmit={handleSubmit}>

          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex flex-col gap-2 w-full">
              <span className="text-sm font-medium">Name</span>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </label>
            <label className="flex flex-col gap-2 w-full">
              <span className="text-sm font-medium">Email</span>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium">Phone Number</span>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                inputMode="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={inputClass}
              />
            </label>
          </div>

          {/* Message */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Message</span>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="max-h-[120px] pt-5 resize-y block w-full bg-transparent border-b border-gray-300 placeholder:text-sm focus:border-black focus:outline-none"
              required
            />
          </label>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-black px-6 py-3 md:px-8 md:py-4 text-white text-sm md:text-base font-medium transition hover:bg-black/90 active:translate-y-px cursor-pointer"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          {/* Status */}
          {status && <p className="-mt-4 font-light">{status}</p>}
        </form>
      </div >
    </div >
  );
}

export default ContactUsModal;