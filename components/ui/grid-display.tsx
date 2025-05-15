import React from "react";
import { cn } from "@/lib/utils";

interface GridDisplayProps {
  alignment: string;
  items: React.ReactNode[];
}

const parseAlignment = (alignment: string, itemCount: number): number[][] => {
  const parts = alignment.split("/").map(Number);
  const rows: number[][] = [];
  let index = 0;

  if (parts.length > 1) {
    for (let i = 0; i < parts.length; i++) {
      const count = parts[i];
      rows.push(Array.from({ length: count }, (_, j) => index + j));
      index += count;
    }
  } else {
    const count = parts[0];
    while (index < itemCount) {
      const remaining = itemCount - index;
      const rowCount = Math.min(count, remaining);
      rows.push(Array.from({ length: rowCount }, (_, j) => index + j));
      index += rowCount;
    }
  }

  return rows;
};

export default function GridDisplay({ alignment, items }: GridDisplayProps) {
  const rows = parseAlignment(alignment, items.length);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-1">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid gap-6 place-content-center
            ${
              row.length === 1
                ? "grid-cols-1"
                : row.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3"
            }`}
        >
          {row.map((itemIndex) => (
            <div
              key={itemIndex}
              className={cn(
                "text-center min-h-[420px] w-full max-w-sm mx-auto"
              )}
            >
              {items[itemIndex]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
