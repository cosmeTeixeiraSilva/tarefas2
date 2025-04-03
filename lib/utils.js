import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

//criando uma função de atraso 
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

