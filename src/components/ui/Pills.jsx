import React from "react";
import clsx from "clsx";

export  const Pills = ({ variant = "sunset", className = "", children }) => {
  const baseStyles =
    "inline-flex items-center font-Poppins justify-start px-6 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 gap-3 w-fit";

  const variants = {
    sunset: "bg-[#FFD8B3]",
    babyBlue: "bg-[#CEF4F1]",
    lightGreen: "bg-[#D5EFC0]",
    paleYellow: "bg-[#F5F5BC]",
  };

  return (
    <div className={clsx(baseStyles, variants[variant], className)}>
      {/* Decorative Dot */}
      <span className="w-3 h-3 bg-[#1D9389] rounded-full flex-shrink-0"></span>
      {/* Text */}
      <span className="text-gray-800">{children}</span>
    </div>
  );
};


export const InfoPills = ({ variant = "outline", className = "", children }) => {
  const baseStyles = "inline-flex items-center justify-start px-6 py-2 rounded-md font-medium font-Poppins transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 gap-3 w-fit";

  const variants = {
    outline: 'bg-[#FEF5DF]'
  };


  return (
    <div className={clsx(baseStyles, variants[variant], className)}>
      {/* Decorative Dot */}
      <span className="w-3 h-3 bg-[#1D9389] rounded-full flex-shrink-0"></span>
      {/* Text */}
      <span className="text-gray-800">{children}</span>
    </div>
  );
}


