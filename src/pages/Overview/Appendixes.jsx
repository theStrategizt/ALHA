import React from "react";
import Table from "../../components/ui/Table";
import { assests, locations, zones, results } from "../../constants/index";

const Appendixes = () => {
  return (
    <>
      <section className="flex mt-8 flex-col px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 max-w-[130em] mx-auto bg-[#FFFBEC]">
        <div className="flex flex-col space-y-4 py-4 sm:space-y-6 w-full   sm:text-left">
          <span className="border-gray-300 border-b space-y-3  pb-4">
            <h2 className=" text-lg sm:text-4xl lg:text-5xl font-semibold leading-tight ">
              <span className="text-[#1D9389]">Appendix 1:</span> Summary of
              Land Asset in Hectares
            </h2>

            <p className=" mx-auto text-gray-800 leading-relaxed text-[0.45em] sm:text-sm md:text-base lg:text-[1rem] font-Poppins font-light" >
              Please see the table below for the list of ALHA land assets across
              the country.
            </p>
          </span>
        </div>

        {/* ===== Table Section ===== */}
        <div className="w-full mt-10 overflow-x-auto rounded-lg shadow-md bg-white">
          <Table columns={locations} data={assests} />
        </div>
      </section>

      <section className="flex mt-8 flex-col px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 max-w-[130em] mx-auto bg-[#FFFBEC]">
        <div className="flex flex-col space-y-4 py-4 sm:space-y-6 w-full   sm:text-left">
          <span className="border-gray-300 border-b space-y-5 pb-4">
            <h2 className=" text-lg sm:text-4xl lg:text-5xl font-semibold leading-tight ">
              <span className="text-[#1D9389]">Appendix 2:</span> Available Land
              Already Allocated for Agricultural Purpose
            </h2>
          </span>
        </div>

        {/* ===== Table Section ===== */}
        <div className="w-full mt-10 overflow-x-auto rounded-lg shadow-md bg-white">
          <Table columns={zones} data={results} />
        </div>
      </section>
    </>
  );
};

export default Appendixes;
