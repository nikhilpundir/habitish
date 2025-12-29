import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as XLSX from "xlsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const downloadExcel = (data: any) => {
  const formattedData = data.map((item: any) => ({
    ID: item.id,
    Name: item.name,
    Description: item.description,
    "Completed Dates": item.completedDates.join(", "),
    "Created At": new Date(item.createdAt).toLocaleString(),
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Tasks");
  XLSX.writeFile(workbook, "tasks.xlsx");
};
