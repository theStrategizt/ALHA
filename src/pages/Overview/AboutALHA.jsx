import React, { useState, useEffect } from "react";

const AboutALHA = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center w-full min-h-[20rem] sm:min-h-[30rem] lg:min-h-[35rem] pt-20 sm:pt-24 lg:pt-28 pb-12 text-black bg-[#FFFBEC] overflow-hidden"
    >
      {/* Hero Image */}
      <img
        src="/Images/field-img.svg"
        alt="Agricultural field illustration"
        className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-[75%] h-auto object-contain transition-transform duration-300 hover:scale-[1.02] rounded-md"
      />

      {/* Description */}
      <div className="mt-8 sm:mt-10 px-4 sm:px-8 md:px-12 lg:px-20 text-center">
        <p className="max-w-[48rem] mx-auto text-gray-800 leading-relaxed text-[0.45em] sm:text-sm md:text-base lg:text-lg font-Poppins font-medium">
          The Lagos State Agricultural Land Holdings Authority (ALHA) was
          established through an edict to grant and allocate agricultural land
          holdings by way of sublease to successful applicants, supporting the
          state’s mission to promote sustainable agricultural development.
        </p>

        <div className="max-w-[65rem] w-full border-b border-gray-300 my-6 sm:my-8" />

        <p className="max-w-[48rem] mx-auto mb-4 text-gray-800 leading-relaxed text-[0.45em] sm:text-sm md:text-base lg:text-[1rem] font-Poppins font-light">
          (Lands being allocated are those zoned for agricultural purposes
          relative to the Regional Plan of the Lagos State Government. This
          process further culminated in creation of the Agricultural Estate
          Development Scheme, which comprises the land resources represented
          diagrammatically below.)
        </p>
      </div>

      {/* Conditional Diagram */}
      {isMobile ? (
        <img
          src="/Images/diagram-vertical.svg"
          alt="Agricultural Estate Vertical Diagram"
          loading="lazy"
          className="w-[40%] sm:w-[60%] h-auto object-contain transition-transform duration-300 hover:scale-[1.02] rounded-md"
        />
      ) : (
        <img
          src="/Images/diagram-horizontal.svg"
          alt="Agricultural Estate Horizontal Diagram"
          loading="lazy"
          className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-[75%] h-auto object-contain transition-transform duration-300 hover:scale-[1.02] rounded-md"
        />
      )}

      <div className="mt-8 sm:mt-10 px-4 sm:px-8 md:px-12 lg:px-20 text-center">
        <p className="max-w-[48rem] mx-auto mt-4 mb-4 text-gray-800 leading-relaxed text-[0.45em] sm:text-sm md:text-base lg:text-[1rem] font-Poppins font-light">
          Summarily the edict supports accelerated development of agriculture in
          Lagos State through allocation of land holdings to qualified applicants
          for agricultural purposes only. It further positions the agency to
          assist qualified applicants in enhancing development and effective
          usage of lands allocated.
        </p>
      </div>
    </section>
  );
};

export default AboutALHA;
