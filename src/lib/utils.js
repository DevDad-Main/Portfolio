import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Using this helper function to essentially encase alot of tailwind classes into one so we dont bloat our elements
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
