"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  if (pathSegments.length === 0) return null; // Hide breadcrumb on homepage

  return (
    <div className="bg-[#241D56] pb-6 pt-3">
      <nav className="max-w-[1200px] h-[27px] mx-auto text-[16px]">
        <ol className="flex items-center space-x-2 ml-[10px] md:ml-[20px]  md:relative">
          <li>
            <Link href="/" className="text-gray-300 font-bold hover:underline">
              Home
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;

            return (
              <li
                key={href}
                className="flex items-center justify-center gap-2 capitalize font-semibold"
              >
                <span className="text-2xl text-white mb-1">»</span>
                {isLast ? (
                  <span className="text-gray-300">
                    {decodeURIComponent(segment)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-gray-300 capitalize hover:underline"
                  >
                    {decodeURIComponent(segment)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
