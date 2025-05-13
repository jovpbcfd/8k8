import Link from "next/link";
import Image from "next/image";

import { navigation } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-[#d2ede8] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent"
          >
            <Image
              src="/img/8k8-logo-1-1.webp"
              width={80}
              height={40}
              alt="Logo"
            />
          </Link>
          <p className="text-[#04494C] text-sm max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            maxime assumenda quidem error molestiae a.
          </p>
        </div>

        <div>
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-[#04494C] flex items-center space-x-2 hover:text-[#FF5561] transition-colors duration-200"
            >
              <span className="text-base">»</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-[#04494C]/20 text-[#04494C]/90 py-6 text-center text-sm">
        © {new Date().getFullYear()} 8K8. All rights reserved.
      </div>
    </footer>
  );
}
