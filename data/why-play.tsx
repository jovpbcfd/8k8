import React, { JSX } from "react";
import Image from "next/image";

export type WhyPlay = {
  image: JSX.Element | React.ReactNode;
  title: string;
  content: string;
};

export const data: WhyPlay[] = [
  {
    image: (
      <>
        <div className="w-full h-full lg:w-[250px] lg:h-[250px] mx-auto flex items-center justify-center text-sm text-black/60">
          <Image
            src="/img/home/shouldplay/NO.739_Variety of different games.webp"
            width={250}
            height={250}
            alt="Banner"
          />
        </div>
      </>
    ),
    title: "Variety of different games:",
    content:
      "From old-school 3-reel slots to new-age 5-reel video slots and big jackpots, so there is something for every player.",
  },
  {
    image: (
      <>
        <div className="w-full h-full lg:w-[250px] lg:h-[250px] mx-auto flex items-center justify-center text-sm text-black/60">
          <Image
            src="/img/home/shouldplay/NO.739_Very Good Software Providers.webp"
            width={250}
            height={250}
            alt="Banner"
          />
        </div>
      </>
    ),
    title: "Very Good Software Providers:",
    content:
      " You can play great games made by top companies like NetEnt, Microgaming, and Play&lsquo;n GO.",
  },
  {
    image: (
      <>
        <div className="w-full h-full lg:w-[250px] lg:h-[250px] mx-auto flex items-center justify-center text-sm text-black/60">
          <Image
            src="/img/home/shouldplay/NO.739_ Phone-Friendly.webp"
            width={250}
            height={250}
            alt="Banner"
          />
        </div>
      </>
    ),
    title: "Phone-Friendly:",
    content: "You can play on the go with our fully designed phone platform.",
  },
  {
    image: (
      <>
        <div className="w-full h-full lg:w-[250px] lg:h-[250px] mx-auto flex items-center justify-center text-sm text-black/60">
          <Image
            src="/img/home/shouldplay/NO.739_Exciting Bonuses.webp"
            width={250}
            height={250}
            alt="Banner"
          />
        </div>
      </>
    ),
    title: "Exciting Bonuses:",
    content:
      "Use our slot promotions, like free spins and welcome bonuses, to your benefit.",
  },
  {
    image: (
      <>
        <div className="w-full h-full lg:w-[250px] lg:h-[250px] mx-auto flex items-center justify-center text-sm text-black/60">
          <Image
            src="/img/home/shouldplay/NO.739_Safe and Reliable.webp"
            width={250}
            height={250}
            alt="Banner"
          />
        </div>
      </>
    ),
    title: "Safe and Reliable:",
    content:
      "Thanks to cutting edge security technology, you can play without worrying about the safety of your account and data.",
  },
];
