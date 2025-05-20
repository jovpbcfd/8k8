import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// output -> dd/mm/yyyy
export function getFormattedDate(dateStr: string) {
  const date = new Date(dateStr)

  return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
  }).format(date)
}
