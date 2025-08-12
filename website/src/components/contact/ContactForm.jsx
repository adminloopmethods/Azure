"use client"
import React, { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const inputClass =
    "block w-full bg-transparent border-b border-gray-300 px-0 py-3 placeholder:text-sm focus:border-black focus:outline-none";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    try {
      await emailjs.send(
        "service_8k0pjbn", // Replace with your EmailJS service ID
        "template_nrojx1d", // Replace with your EmailJS template ID
        {
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phoneNumber: formData.get("phoneNumber"),
          message: formData.get("message"),
        },
        { publicKey: "vR7bL3KlTc9VAquPq" } // Replace with your public key
      );

      setStatus("✅ Message sent successfully!");
      e.target.reset();
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", error);
        setStatus("❌ EmailJS failed. Check console.");
        return;
      }
      console.log("ERROR", error);
      setStatus("❌ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="text-black/70 p-6 md:p-10">
      <form className="mx-auto max-w-xl space-y-8" onSubmit={handleSubmit}>
        {/* Name row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">First Name</span>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className={inputClass}
              required
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Last Name</span>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className={inputClass}
              required
            />
          </label>
        </div>

        {/* Contact row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Email</span>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              className={inputClass}
              required
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Phone Number</span>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              inputMode="tel"
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
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Status Message */}
        {status && <p className="mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
