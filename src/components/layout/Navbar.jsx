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

  // Dropdown hover/focus with small delay
  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setDropDown(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setDropDown(false), 200);
  };

  // Close dropdown with Esc key for accessibility
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setDropDown(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-transparent border-b border-gray-200">
      <nav className="px-4 sm:px-8 py-4 flex justify-between items-center max-w-[120em] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/Images/logo.svg"
            alt="Orbyt Logo"
            className="w-44 md:w-80 h-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDropDown(!dropDown)}
              className="font-Poppins lg:text-lg text-base flex items-center text-black font-light space-x-2 hover:text-[#732ad3] transition duration-300"
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
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md p-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {Links.map((link) => (
                  <Link
                    key={link.id}
                    to={link.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-200 transition-colors duration-200"
                  >
                    {link.labels}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="black">APPLY ONLINE</Button>
          <Button variant="outlineBlack">DOWNLOAD APPLICATION FORM</Button>
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
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-6 py-6 space-y-6">
          {/* Mobile Dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => setDropDown(!dropDown)}
              className="w-full flex justify-between items-center text-black font-light text-base hover:text-[#732ad3] transition-colors duration-200"
            >
              <span>ABOUT ALHA</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  dropDown ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropDown && (
              <div className="mt-2 flex flex-col space-y-2">
                {Links.map((link) => (
                  <Link
                    key={link.id}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-200 transition-colors duration-200"
                  >
                    {link.labels}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-3">
            <Button variant="black" className="w-full">
              APPLY ONLINE
            </Button>
            <Button variant="outlineBlack" className="w-full">
              DOWNLOAD APPLICATION FORM
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
