import Image from "next/image";

export default function Jackpot() {
  return (
    <section className="bg-[#d2ede8] lg:pb-[40px]">
      <div className="max-w-6xl mx-auto p-2 lg:p-0">
        <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-6">
          <div className="w-full lg:w-3/4">
            <h2 className="text-[#04494C] font-[900] text-xl tracking-normal text-center uppercase mb-2 lg:mb-5 lg:text-3xl">
              There is an 8k8 mystery jackpot with a 1 billion bonus every 8th
              of the month.
            </h2>
            <p className="text-justify">
              Surprises are fun for everyone. This is the next level of surprise
              at 8k8.com: the 8k8 Mystery Jackpot. Every month on the 8th, we
              pick a person at random and give them a huge 1 billion bonus. To
              improve your chances of winning the jackpot, all you have to do is
              stay busy and play your favorite games.
            </p>
            <p className="text-justify">
              The Mystery Jackpot is fun because you can&lsquo;t tell what will
              happen next. Once a month, one lucky player&lsquo;s life goes from
              normal to amazing in an instant. Are you going to be the next
              billionaire? Keep playing and moving around at 8k8.com this month,
              and good luck!
            </p>
          </div>
          <div
            className="w-full h-full lg:w-[300px] lg:h-full 
          rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            <Image
              src="/img/promotion/PROMOTION 2.webp"
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
