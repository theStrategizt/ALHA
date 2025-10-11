// Adjusted Navbar with responsive sizing for tablet (768px)
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Links } from "../../constants";
import Button from "../ui/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const closeTimeout = useRef(null);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setDropDown(true);
  };
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setDropDown(false), 200);
  };

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setDropDown(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-transparent border-b border-gray-200">
      <nav className="px-4 sm:px-6 md:px-8 py-3 md:py-4 flex justify-between items-center max-w-[120em] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/Images/logo.svg"
            alt="ALHA Logo"
            className="w-40 sm:w-40 md:w-52 lg:w-60 h-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 md:space-x-8">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDropDown(!dropDown)}
              className="font-Poppins text-sm  md:text-[0.75em]  flex items-center text-black font-light space-x-1 md:space-x-2 hover:text-[#732ad3] transition duration-300"
              aria-expanded={dropDown}
            >
              <span>ABOUT ALHA</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  dropDown ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropDown && (
              <div className="absolute top-full left-0 mt-1 md:mt-2 w-36 md:w-44 lg:w-48 bg-white shadow-lg border border-gray-200 rounded-md p-1 md:p-2">
                {Links.map((link) => (
                  <Link
                    key={link.id}
                    to={link.path}
                    className="block px-2 md:px-3 py-1 md:py-2 text-sm lg:text-[0.65em] md:text-[0.55em] text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-200 transition-colors duration-200 border-b border-gray-200 "
                  >
                    {link.labels}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-2 sm:space-x-4 md:space-x-6">
          <Button
            variant="black"
            className="px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-1.5 text-sm sm:text-sm md:text-[0.65em] lg:text-[0.65em]"
          >
            APPLY ONLINE
          </Button>
          <Button
            variant="outlineBlack"
            className="px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 text-sm sm:text-sm md:text-[0.65em] lg:text-[0.65em]"
          >
            DOWNLOAD APPLICATION FORM
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex">
          <button className="focus:outline-none" onClick={handleToggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 sm:px-6 py-4 sm:py-6 space-y-4 ">
          <div className="flex flex-col mb-8">
            <button
              onClick={() => setDropDown(!dropDown)}
              className="w-full flex justify-between items-center text-black/60 font-light text-sm sm:text-base hover:text-[#732ad3] transition-colors duration-200 py-2"
            >
              <span className="font-medium font-Poppins">ABOUT ALHA</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  dropDown ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropDown && (
              <div className="mt-1 flex flex-col space-y-1">
                {Links.map((link) => (
                  <Link
                    key={link.id}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-2 sm:px-3 py-1 font-Poppins font-light text-sm sm:text-base text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-200 transition-colors duration-200 "
                  >
                    {link.labels}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-3 sm:space-y-3">
            <Button
              variant="black"
              className="w-full text-sm sm:text-base py-2 sm:py-2.5 rounded-md"
            >
              APPLY ONLINE
            </Button>
            <Button
              variant="outlineBlack"
              className=" rounded-md w-full text-sm sm:text-base py-2 sm:py-2.5"
            >
              DOWNLOAD APPLICATION FORM
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
