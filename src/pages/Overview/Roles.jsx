import React from "react";
import Table from "../../components/ui/Table";
import { data, columns } from "../../constants";

const Roles = () => {
  return (
   <>
    <section className="flex flex-col px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 max-w-[130em] mx-auto bg-[#FFFBEC]">
      {/* ===== Header Section ===== */}
      <div className="flex flex-col space-y-4 sm:space-y-6 w-full  sm:text-left">
        <h2 className="text-lg sm:text-4xl lg:text-5xl font-semibold leading-tight py-3 border-b border-gray-300">
          <span className="text-[#1D9389]">Roles</span> of Administrative Members of the Authority
        </h2>
      </div>

      {/* ===== Table Section ===== */}
      <div className="w-full mt-10 overflow-x-auto rounded-lg shadow-md bg-white">
        <Table columns={columns} data={data} />
      </div>
    </section>






   </>


  );
};

export default Roles;




