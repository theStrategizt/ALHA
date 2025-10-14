import React, { useState, useEffect } from "react";

const Duities = () => {
     const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // run once on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <>
     <section className="flex mt-8 flex-col px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 max-w-[130em] mx-auto bg-[#FFFBEC]">

  {/* ===== Header Section ===== */}
      <div className="flex flex-col space-y-4 sm:space-y-6 w-full sm:text-left">
        <h2 className="text-lg sm:text-4xl lg:text-5xl font-semibold leading-tight py-3 border-b border-gray-300">
          <span className="text-[#1D9389]">Duties</span> of the Authority 
        </h2>

      <p className=" mx-auto text-gray-800 leading-relaxed text-[0.45em] sm:text-sm md:text-base lg:text-lg font-Poppins font-medium">

            The agency allocates land for agricultural purposes within Lagos State or other locations where the state has land holdings. Such allocation shall be from available acreage in her ‘Land Bank’, generally classified as, reserved & available, or reserved & un-available (acquisition is done if land is so required).

        </p>

     <p className=" mx-auto  text-gray-800 leading-relaxed text-[0.45em] sm:text-sm md:text-base lg:text-[1rem] font-Poppins font-light">
            This delineation may further be categorized as Internal (i.e. Land Holdings within Lagos State) or External (i.e. Land Holdings outside Lagos State). These holdings support the vision of the Ministry of Agriculture – towards becoming major contributor to sustainable economic growth and social well-being in Lagos State Nigeria.

        </p>
        
     
      </div>

      <div className="flex flex-col space-y-5 items-center justify-center mt-8">
         {isMobile ? (
        <img
          src="/Images/land-bank-mobile.svg"
          alt="Agricultural Estate Vertical Diagram"
          loading="lazy"
          className="w-[40%] sm:w-[60%] h-auto object-contain transition-transform duration-300 hover:scale-[1.02] rounded-md"
        />
      ) : (
        <img
          src="/Images/land-bank-desktop.svg"
          alt="Agricultural Estate Horizontal Diagram"
          loading="lazy"
          className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-[65%] h-auto object-contain transition-transform duration-300 hover:scale-[1.02] rounded-md"
        />
      )}


      <h2 className="font-medium font-Poppins mt-8 text-[1em] sm:text-[0.7em]]md:text-2xl  leading-tight py-3">
        LAND AVAILABILTY & EVALUATION
      </h2>
      <p className="text-center mx-auto  text-gray-800 leading-relaxed text-[0.45em] sm:text-sm md:text-base lg:text-[1rem] font-Poppins font-light">
        The Agricultural Land Holdings Authority (ALHA) has lands already allocated and available across the five Lagos Zones and in other states in Nigeria.
      </p>
      </div>



     </section>
    </>
  )
}

export default Duities