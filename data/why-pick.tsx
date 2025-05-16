import { JSX } from "react";

export type WhyPickType = {
  id: number;
  title: string;
  content: JSX.Element | React.ReactNode;
};

export const data = [
  {
    id: 1,
    title: "Proven Platform",
    content: (
      <>
        <ul className="h-full text-justify">
          <li className="mb-2">
            <strong className="text-[#04494C]">Licensed and regulated: </strong>
            8k8 is fully licensed and controlled by well-known gaming
            authorities, which makes sure that the games are safe and fair.
          </li>
          <li className="mb-2">
            <strong className="text-[#04494C]">
              Very Good Software Providers:{" "}
            </strong>
            We work with big names in software like NetEnt, Microgaming, and
            Play'n GO to bring you fair, high-quality games.
          </li>
          <li className="mb-2">
            <strong className="text-[#04494C]">Positive image: </strong>
            8k8 has a strong image for reliable service and happy customers,
            which is why many loyal players keep coming back.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "Peace of mind and safety",
    content: (
      <>
        <ul className="h-full text-justify">
          <li className="mb-2">
            <strong className="text-[#04494C]">SSL Encryption:</strong> All
            transactions and data transfers are protected by cutting-edge SSL
            encryption technology. This keeps your personal and financial data
            safe from people who shouldn&lsquo;t have access to it.
          </li>
          <li className="mb-2">
            <strong className="text-[#04494C]">
              Two-Factor Authentication (2FA):{" "}
            </strong>
            Players can turn on 2FA to make their accounts safer from people who
            aren&lsquo;t supposed to be there.
          </li>
          <li className="mb-2">
            <strong className="text-[#04494C]">A fair game: </strong>
            All of 8k8&lsquo;s games use certified Random Number Generators
            (RNG) to make sure that the results are fair and neutral.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "A Lot of Games",
    content: (
      <>
        <ul className="h-full text-justify">
          <li className="mb-2">
            <strong className="text-[#04494C]">
              Large Selection of Games:{" "}
            </strong>
            8k8 has a lot of games for all kinds of people, whether they like
            slots, table games, live players, or jackpot games.
          </li>
          <li className="mb-2">
            <strong className="text-[#04494C]">Brand-new books: </strong>
            Get the newest games as soon as they come out. We&lsquo;re always
            adding new games to keep things interesting.
          </li>
          <li className="mb-2">
            <strong className="text-[#04494C]">Mobile-Friendly: </strong>
            The 8k8 site and app are mobile-friendly, so you can play all your
            favorite games on the go.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Playing Games Safely",
    content: (
      <>
        <ul className="h-full text-justify">
          <li>
            <strong className="text-[#04494C]">Safe Play: </strong>
            8k8 encourages responsible gaming and gives players tools to control
            their gaming habits, such as deposit limits and self-exclusion
            choices.
          </li>
          <li>
            <strong className="text-[#04494C]">Fair Play Commitment: </strong>
            We follow strict rules to make sure that all of our players can play
            in a safe and honest atmosphere.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "World Wide Access",
    content: (
      <>
        <ul className="h-full text-justify">
          <li>
            <strong className="text-[#04494C]">International Access: </strong>
            8k8 can be played in many places around the world, and it supports
            many languages and currencies, so it&lsquo;s a great game for people
            from all over the world.
          </li>
          <li>
            <strong className="text-[#04494C]">Localized Support: </strong>
            For a more personalized game experience, get customer service and
            deals that are specific to your area.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "There are no hidden costs",
    content: (
      <>
        <ul className="h-full text-justify">
          <li>
            <strong className="text-[#04494C]">
              Transparent Transactions:{" "}
            </strong>
            We believe in being open and honest, so there are no hidden fees
            when you transfer or withdraw money. Enjoy an easy time with terms
            that are clear and fair.
          </li>
        </ul>
      </>
    ),
  },
];
