import React from "react";
import clsx from "clsx";

export const Card = ({ className = "", children }) => {
  const baseStyles = "flex flex-col w-full max-w-xl py-2 px-4 bg-gray-50 rounded-md  ";

  return (
    <>
      <div className={clsx(baseStyles, className)}>{children}</div>
    </>
  );
};
