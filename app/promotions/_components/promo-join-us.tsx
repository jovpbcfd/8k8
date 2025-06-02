import Image from "next/image";

export default function MembershipDayJoinUs() {
  return (
    <section className="bg-[#d2ede8] lg:pb-[40px]">
      <div className="max-w-6xl mx-auto p-2 lg:p-0">
        <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-6">
          <div className="w-full lg:w-3/4">
            <h2 className="text-[#04494C] font-[900] text-xl tracking-normal text-center uppercase mb-2 lg:mb-5 lg:text-3xl">
              Membership Day is every 18th of the month. Please join us!
            </h2>
            <p className="text-justify">
              There are lots of cool things about being a member of 8k8.com, and
              Membership Day is one of the most fun ones! We honor our community
              by giving a 1 billion bonus to all active members on the 18th of
              every month. It&lsquo;s our way of saying thanks for all your
              continued help and involvement.
            </p>
            <p className="text-justify">
              No need to do anything extra—just keep using the platform, and
              you&lsquo;ll be entered into this amazing giveaway right away.
              Membership Day is a time to thank and honor the people who make
              8k8.com a great place to be a member. Sign in, play your best
              games, and wait for the bonuses to come in!
            </p>
          </div>
          <div
            className="w-full h-full lg:w-[300px] lg:h-full 
          rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            <Image
              src="/img/promotion/PROMOTION 3.webp"
              width={300}
              height={300}
              alt="8k8 mystery jackpot with a 1 billion bonus"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
