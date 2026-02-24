"use client";
import React, { useState, useRef, useEffect } from "react";
import { sendEmail } from "../../../utils/sendEmail";
import { RxCross2 } from "react-icons/rx";

const EnquireNow = ({ onClose, productName }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState(""); // track textarea value

  const formRef = useRef(null);

  const inputClass =
    "block w-full bg-transparent border-b border-gray-300 px-0 py-1 placeholder:text-sm focus:border-black focus:outline-none";

  // 👇 Products array
  const products = [
    "iPhone 17",
    "MacBook Pro",
    "iPad Air",
    "Apple Watch",
    "AirPods",
  ];

  // if productName comes from parent, pre-fill message
  useEffect(() => {
    if (productName) {
      setMessage(`I am interested in ${productName}`);
    }
  }, [productName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(formRef.current);

    const result = await sendEmail({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      product: formData.get("product"),
      message: `Product: ${formData.get("product")}\nMessage: ${message}`,
    });

    if (result.success) {
      setStatus("✅ Message sent successfully!");

      if (formRef.current) {
        formRef.current.reset();
        setMessage("");
      }

      setTimeout(() => {
        onClose();
      }, 2000);
    } else {
      setStatus("❌ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="relative bg-white w-11/12 md:w-1/2 text-black/70 p-6 md:p-10 rounded-lg shadow-lg">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-black transition cursor-pointer"
      >
        <RxCross2 size={24} />
      </button>

      <form
        ref={formRef}
        className="mx-auto max-w-xl space-y-8"
        onSubmit={handleSubmit}
      >
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

        {/* Product dropdown */}
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Product</span>
          <select
            id="product"
            name="product"
            defaultValue={productName || ""}
            className="block w-full bg-transparent border-b border-gray-300 px-0 py-3 text-sm focus:border-black focus:outline-none"
            required
          >
            <option value="">Select a product</option>
            {products.map((prod, idx) => (
              <option key={idx} value={prod}>
                {prod}
              </option>
            ))}
          </select>
        </label>

        {/* Message */}
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Message</span>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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

        {/* Status Message */}
        {status && <p className="-mt-4 font-light">{status}</p>}
      </form>
    </div>
  );
};

export default EnquireNow;
