"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavigationProps = {
  className?: string;
};

export default function Navigation({ className = "" }: NavigationProps) {
  const pathname = usePathname();
  return (
    <ul className={`${className}`}>
      {[
        { name: "HOME", href: "/" },
        { name: "PROMOTIONS", href: "/promotions" },
        { name: "BLOGS", href: "/blogs" },
      ].map((item, idx) => (
        <li key={idx} className="hover:text-[#04494C] transition-colors">
          <Link
            href={item.href}
            className={cn(
              "block w-full h-full",
              pathname === item.href ? "text-[#04494C]" : ""
            )}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
