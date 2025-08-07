import React from "react";

const ContactForm = () => {
  return (
    <div className="text-black/60 p-20">
      <form className="flex flex-col gap-10 w-[550px]">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col justify-between">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="border-0 border-b border-gray-400 focus:outline-none focus:border-black py-2"
            />
          </div>
          <div className="flex flex-col justify-between">
            <label htmlFor="lastName">Last Name</label>

            <input
              type="text"
              id="lastName"
              className="border-0 border-b border-gray-400 focus:outline-none focus:border-black py-2"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="border-0 border-b border-gray-400 focus:outline-none focus:border-black py-2"
            />
          </div>
          <div className="flex flex-col justify-between">
            <label htmlFor="phoneNumber">Phone Number</label>

            <input
              type="text"
              id="phoneNumber"
              className="border-0 border-b border-gray-400 focus:outline-none focus:border-black py-2"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
            placeholder="Write you message"
            className="  border-0 border-b placeholder:text-sm border-gray-400 focus:outline-none focus:border-black py-2"
          />
        </div>

        <button className="relative w-[235px] h-[60px] rounded-4xl left-79 bg-black text-white">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
