"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
}

export default function Pagination({
  totalPosts,
  postsPerPage,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="flex justify-center gap-2 my-8">
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        return (
          <Link
            key={page}
            href={`?page=${page}`}
            className={`px-4 py-2 rounded-md ${
              currentPage === page
                ? "bg-white text-black font-semibold"
                : "bg-gray-700 text-white"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}
