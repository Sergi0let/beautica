import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const discountPercentage = (oldPrice: number, newPrice: number) =>
  Math.round(((oldPrice - newPrice) / oldPrice) * 100);

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);

  // Перевірка на валідність дати
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  const formattedDate = new Intl.DateTimeFormat("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return formattedDate;
};
