import React from "react";
import { Pills } from "../../components/ui/Pills";

// Still needs to reworked upon

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-[20rem] sm:min-h-[35rem] lg:min-h-[50rem] pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-16 text-black overflow-hidden mt-8 lg:mt-24 px-4 text-center"
      >
        <div className="flex flex-col items-center justify-center space-y-6">
          <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
            <span className="text-[#f99056]">AGRIC</span>-LAND{" "}
            <span className="text-[#66B5A9]">ALLOCATION</span>
          </h3>

          <img
            src="/Images/showcase.svg"
            alt="Hero-Showcase"
            className="w-[85%] sm:w-[70%] md:w-[55%] lg:w-[90%] h-auto object-contain sm:mt-2 lg:mt-20"
            loading="eager"
          />
        </div>
      </section>

      {/* INFORMATION GRID SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 max-w-[130rem] mx-auto">
        {/* LEFT SIDE */}
        <div className="flex flex-col space-y-4 text-left">
          <h2 className="text-2xl sm:text-5xl md:text-5xl font-medium leading-tight py-4 border-b border-gray-300">
            <span className="text-[#66B5A9]">Agriculture Estate</span>
            <br /> Development Scheme
          </h2>

          {/* Reusable Pills */}
          <div className="flex flex-col space-y-5 sm:space-y-7 mt-6 sm:mt-8">
            <Pills variant="sunset">
              <p className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-left text-gray-700 ">
                EPE DEVELOPMENT SCHEME
              </p>
            </Pills>

            <Pills variant="babyBlue">
              <p className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-left text-gray-700">
                IKORODU DEVELOPMENT SCHEME
              </p>
            </Pills>

            <Pills variant="lightGreen">
              <p className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-left text-gray-700">
                BADAGRY DEVELOPMENT SCHEME
              </p>
            </Pills>

            <Pills variant="paleYellow">
              <p className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-left text-gray-700">
                LEKKI PENINSULA DEVELOPMENT SCHEME
              </p>
            </Pills>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="flex justify-center items-center px-2 sm:px-6 lg:px-8 py-4 sm:py-10">
          <div className="flex flex-col w-full max-w-4xl bg-[#F5EFDF] rounded-2xl sm:rounded-3xl lg:rounded-4xl p-4 sm:p-8 lg:p-12  shadow-sm h-full">
            <h4 className="bg-[#1D9389] text-white text-md sm:text-xl md:text-lg  font-light px-4 py-2 rounded-md w-fit">
              THINGS YOU SHOULD KNOW
            </h4>

            <p className="mt-4 sm:mt-6 text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg font-medium font-Poppins">
              ALHA aligns with the vision of the Ministry of Agriculture and the
              Lagos State Government to achieve food security and provide
              sustainable economic growth for the people.
            </p>

            <p className="mt-4 sm:mt-6 text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg font-medium font-Poppins">
              The allocated lands are those reserved and zoned for agricultural
              purposes within Lagos State or other locations where the state has
              land holdings.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
