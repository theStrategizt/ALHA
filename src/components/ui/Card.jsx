import React from "react";
import clsx from "clsx";

/**
 * A flexible, reusable Card component.
 * Supports hover effects, shadows, variants, and responsive padding.
 */
export const Card = ({
  className = "",
  children,
  variant = "default", // "default" | "outlined" | "ghost"
  hover = false,
  padding = "md", // "sm" | "md" | "lg"
}) => {
  const variantStyles = {
    default: "bg-white shadow-sm border border-gray-200",
    outlined: "bg-transparent border border-gray-300",
    ghost: "bg-transparent border-0 shadow-none",
  };

  const paddingStyles = {
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
  };

  const hoverStyles = hover
    ? "transition-all duration-200 hover:shadow-md hover:scale-[1.01]"
    : "";

  const baseStyles = clsx(
    "flex flex-col rounded-xl w-full",
    variantStyles[variant],
    paddingStyles[padding],
    hoverStyles,
    className
  );

  return <div className={baseStyles}>{children}</div>;
};
