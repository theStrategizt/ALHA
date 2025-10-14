import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-gray-200 text-left">
        {/* ===== Table Header ===== */}
        <thead className="bg-[#1D9389] text-white">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="py-3 px-4 sm:px-6 text-[0.7rem] sm:text-sm md:text-base font-semibold border-b border-gray-300"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* ===== Table Body ===== */}
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="bg-[#FFFBEC]" 
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="py-3 px-4 sm:px-6 text-[0.65rem] sm:text-sm md:text-base text-gray-800 border border-gray-200 whitespace-normal break-words"
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
