import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";


const getFullYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#FFFBEF] min flex flex-col items-center justify-center">
      {/* Background image */}
      <img
        src="./Images/field-bg.png"
        className="w-full h-auto object-cover"
        aria-hidden="true"
      />

      {/* Main Content */}
      {/* Changes: Added 'flex-wrap', 'flex-col sm:flex-row', and 'justify-center sm:justify-between' for responsiveness */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between w-full max-w-[120em] px-6 sm:px-10 py-8 md:py-10 lg:py-12 gap-8 sm:gap-6">

        {/* Logo - Order 1 on small screens (always visible) */}
        <img
          src="./Images/lagos-logo.svg"
          className="w-20 md:w-24 h-full object-contain order-1 sm:order-none"
          alt="Lagos State Ministry of Agriculture"
        />

        {/* Subscription - Order 3 (middle) on small screens, expands to full width */}
        <div className="flex items-center justify-center flex-col w-full sm:w-auto -mt-2 order-3 sm:order-none">
          <h3 className="text-lg md:text-[1em] text-center font-medium mb-3 font-Poppins">
            Never miss an update, subscribe now
          </h3>
          <form action='submit'  className="flex items-center justify-center gap-2 mb-6 w-full max-w-sm sm:max-w-none">
            <input
              type="email"
              placeholder="Enter your email address"
              // Adjusted input width to be more fluid
              className="flex-grow border font-Poppins border-gray-300 rounded-md py-2 px-4 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-none placeholder:text-[0.65em]" 
              style={{ width: '100%', maxWidth: '24em' }} 
            />
            <button className="bg-transperant border border-black/40 text-dark px-4 py-2 rounded-md hover:bg-[#18AB55]/80 duration-300 font-medium hover:text-white cursor-pointer transition-all whitespace-nowrap text-[0.65em]">
              Subscribe
            </button>
          </form>
        </div>

        {/* Socials - Order 2 on small screens, moves next to the logo or above subscription */}
        <div className="flex flex-col  items-center justify-center gap-3 text-sm order-2 sm:order-none mr-0 sm:mr-4">
          <div className="flex gap-3 text-green-700">
            <a
              href="#"
              className="p-2 bg-dark rounded-full shadow hover:bg-green-100"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 bg-dark rounded-full shadow hover:bg-green-100"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-dark rounded-full shadow hover:bg-green-100"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-dark rounded-full shadow hover:bg-green-100"
            >
              <FaTwitter />
            </a>
          </div>
           <a
            href="mailto:lagosagric@lagosstate.gov.ng"
            className="text-black underline hover:text-green-600 text-sm"
          >
            lagosagric@lagosstate.gov.ng
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 w-full text-center py-3 border-t border-gray-200 text-xs text-gray-600 mt-2">
        © {getFullYear} Ministry of Agriculture. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;