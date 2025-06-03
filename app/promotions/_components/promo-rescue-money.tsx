import Image from "next/image";

export default function RescueMoney() {
  return (
    <section className="lg:pb-[40px]">
      <div className="max-w-6xl mx-auto p-2 lg:p-0">
        <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-6">
          <div className="w-full lg:w-3/4">
            <h2 className="text-[#04494C] font-[900] text-xl tracking-normal text-center uppercase mb-2 lg:mb-5 lg:text-3xl">
              If you lose a game, get rescue money
            </h2>
            <p className="text-justify">
              We know that luck doesn&lsquo;t always go your way. That&lsquo;s
              why 8k8.com lets you play all of their slots and fishing games
              with Rescue Money. We&lsquo;ll be here for you if you lose your
              balance during a rough patch. You can play with peace of mind
              because our rescue money tool helps you lose as little as
              possible.
            </p>
            <p className="text-justify">
              You won&lsquo;t be left empty-handed even when the odds are
              against you thanks to this feature. We care about responsible
              gaming and player happiness, so we&lsquo;re giving you this safety
              net. It&lsquo;s okay if some rounds are hard; just keep playing
              your best games and know that 8k8.com has your back.
            </p>
          </div>
          <div
            className="w-full h-full lg:w-[300px] lg:h-full
          rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            <Image
              src="/img/promotion/PROMOTION 6.webp"
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
