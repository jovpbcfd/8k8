"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navigation } from "@/data";

type NavigationProps = {
  className?: string;
  mobileColor?: string;
  desktopColor?: string;
};

export default function Navigation({
  className = "text-[#04494C]/90",
  mobileColor = "text-inherit",
  desktopColor = "text-inherit",
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {navigation.map((item, idx) => {
        const isActive = pathname === item.href;
        return (
          <li
            key={idx}
            className={cn(
              className,
              mobileColor,
              desktopColor,
              "hover:text-[#04494C]",
              "transition-colors"
            )}
          >
            <Link
              href={item.href}
              className={cn(
                "block w-full h-full",
                isActive && "font-bold",
                mobileColor,
                `lg:${desktopColor}`
              )}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
