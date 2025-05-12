"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CloseIcon } from "./icons/close";
import { OpenIcon } from "./icons/open";
import Navigation from "./navigation";
import Breadcrumb from "./breadcrumb";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-[#7E8E8B] text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent lg:w-[80px] lg:h-[40px]"
          >
            <Image
              src="/img/8k8-logo-1-1.webp"
              width={80}
              height={40}
              alt="Logo"
            />
          </Link>

          <nav className="hidden md:block">
            <div className="max-w-6xl mx-auto px-4">
              <Navigation className="flex items-center justify-center space-x-6 py-3 text-sm font-medium" />
            </div>
          </nav>

          <div className="hidden md:flex space-x-3">
            <Link
              href="#"
              className="bg-[#04494C] hover:bg-[#04494C]/20 border border-transparent hover:border-[#04494C]  w-[100px] text-center text-white px-4 py-2 rounded-md text-sm font-semibold transition"
            >
              Register
            </Link>
            <Link
              href="#"
              className="border border-[#04494C] hover:bg-[#04494C]/90 w-[100px] text-center text-[#04494C] hover:text-white px-4 py-2 rounded-md text-sm font-semibold transition"
            >
              Login
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <CloseIcon /> : <OpenIcon />}
            </button>
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#04494C]/90 backdrop-blur-md shadow-lg text-white text-sm font-semibold p-6 z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Navigation className="space-y-5 pt-16" />
        </div>
      </header>
      <Breadcrumb />
    </>
  );
}
