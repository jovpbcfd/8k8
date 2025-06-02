import Image from "next/image";

export default function BonusForSocialMedia() {
  return (
    <section className="lg:pb-[40px]">
      <div className="max-w-6xl mx-auto p-2 lg:p-0">
        <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-6">
          <div className="w-full lg:w-3/4">
            <h2 className="text-[#04494C] font-[900] text-xl tracking-normal text-center uppercase mb-2 lg:mb-5 lg:text-3xl">
              Bonus for social media: Like and share on Facebook
            </h2>
            <p className="text-justify">
              When you share your excitement on 8k8.com, you can win great
              prizes! With our Social Media Bonus, it&lsquo;s easy to make extra
              cash by following us and talking about our posts. You can get up
              to P588 if you like and share our Facebook posts. All you need is
              a phone and your finger.
            </p>
            <p className="text-justify">
              You can increase your chances of making money and help spread the
              word about our great platform by taking part in our social media
              activities. Everyone wins! This easy job can quickly turn into
              real cash, no matter how much you play or how much you promote.
              Stay tuned for more ways to get the most out of your prizes if you
              like our Facebook page. Share right away!
            </p>
          </div>
          <div
            className="w-full h-full lg:w-[300px] lg:h-full 
          rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            <Image
              src="/img/promotion/PROMOTION 4.webp"
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
