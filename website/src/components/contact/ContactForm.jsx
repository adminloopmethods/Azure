import React from "react";

const ContactForm = () => {
  const inputClass =
    "block w-full bg-transparent border-b border-gray-300 px-0 py-3 " +
    "placeholder:text-sm focus:border-black focus:outline-none";
  return (
    <div className="text-black/70 p-6 md:p-10">
      <form className="mx-auto max-w-xl space-y-8">
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
            className={ " max-h-[120px] pt-5 resize-y block w-full bg-transparent border-b border-gray-300 placeholder:text-sm focus:border-black focus:outline-none"}
            required
          />
        </label>

        {/* Button */}
        <button
          type="submit"
          className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-black px-6 py-3 md:px-8 md:py-4
        text-white text-sm md:text-base font-medium transition hover:bg-black/90 active:translate-y-px cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
