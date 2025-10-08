import React from "react";
import clsx from "clsx"; // helps combine class names conditionally

const Button = ({
  variant = "primary",
  className = "",
  children,
  onClick,
  type = "button",
}) => {
  const baseStyles =
    "px-4 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    black: "bg-black/80 text-white font-light hover:bg-gray-900 focus:ring-gray-800/40",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500/50",
    outlineBlack: "border border-black text-black hover:bg-black/10  focus:ring-black/30",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
