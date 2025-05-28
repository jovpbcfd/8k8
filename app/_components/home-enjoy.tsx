import Download from "./home-download";
import HowToPlay from "./home-how";
import PlayWithRealMoney from "./home-play-real-money";
import { data } from "@/data/real-money";
import Image from "next/image";

export default function Enjoy() {
  return (
    <>
      <section className="lg:py-24">
        <div className="max-w-6xl mx-auto p-2 lg:p-0">
          <div>
            <h2 className="text-[#04494C] font-[900] text-xl tracking-normal mb-2 text-center uppercase lg:mb-5 lg:text-3xl">
              Enjoy casino fun on the go with the 8k8 app
            </h2>
            <p className="mb-2 text-[#04494C] font-semibold text-justify lg:mb-5">
              We at 8k8 Casino know that the best way to play games is in a way
              that doesn&lsquo;t get in the way of your daily life. Since
              that&lsquo;s the case, we made the 8k8 mobile app so you can enjoy
              all the fun, excitement, and chances to win wherever you go. The
              8k8 app lets you play your favorite gambling games whenever and
              wherever you want, whether you&lsquo;re on the go, relaxing at
              home, or on your lunch break.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[url(/img/home/Simple-to-download-get-right-away-background-final.webp)] bg-cover bg-no-repeat">
        <div className="max-w-6xl mx-auto p-2 lg:p-0">
          <Download />
        </div>
      </section>
      <section className="lg:sections-gutter-y">
        <div className="max-w-6xl mx-auto p-2 lg:p-0">
          <div>
            <div className="flex flex-col items-center justify-between gap-2 lg:flex-row lg:gap-15">
              <div className="w-full text-justify lg:w-3/4">
                <h3 className="text-center text-[#04494C] font-[900] uppercase mb-2 lg:mb-5 lg:text-2xl">
                  Full casino experience anywhere and at any time
                </h3>
                <p className="mb-2 lg:mb-5">
                  Not only can you play a few games with the 8k8 mobile app, but
                  you can also access the whole 8k8 casino right from your
                  phone. Our app has the same great slots, live dealer games,
                  table games, and bonus slots as our desktop site, but
                  it&lsquo;s designed to work better on phones. These games are
                  beautifully made, with clear graphics, great sound, and smooth
                  controls that make the experience just as exciting on your
                  phone or computer.
                </p>

                <p className="mb-2 lg:mb-5">
                  For people who love slots, the app has a huge collection of
                  video slots, basic slots, and even games with huge progressive
                  jackpots. You can play Blackjack, Baccarat, Roulette, and
                  other table games. All of them are meant to keep you
                  interested and entertained with smooth gameplay and animations
                  that look and feel real.
                </p>

                <p className="mb-2 lg:mb-5">
                  You can also play live dealer games through the app, which let
                  you enjoy the thrill of playing in real time with trained
                  dealers. While you play Live Blackjack, Live Roulette, and
                  Live Poker, you can talk to the dealers and other players
                  through live chat. All of the games are streamed in high
                  definition video.
                </p>
              </div>
              <div
                className="w-full h-full lg:w-[300px] lg:h-full 
                rounded-xl flex items-center justify-center text-sm text-black/60"
              >
                <Image
                  src="/img/home/NO.741__Full casino experince anywhere and at any time.webp"
                  width={300}
                  height={300}
                  alt="Full casino experince anywhere and at any time"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 lg:flex-row lg:gap-15">
              <div className="w-full text-justify lg:w-3/4">
                <h3 className="text-center text-[#04494C] font-[900] uppercase mb-2 lg:mb-5 lg:text-2xl">
                  Safe and Secure on Mobile
                </h3>
                <p>
                  8k8 puts a lot of emphasis on security, and that doesn&lsquo;t
                  change when you play through the mobile app. We use
                  cutting-edge encryption to keep your personal and financial
                  information safe, whether you&lsquo;re logging into your
                  account, making a deposit, or cashing out your wins. We care a
                  lot about your privacy and safety, so you can play without
                  worrying because you know your information is safe.
                </p>
                <p>
                  The app also lets you pay in a lot of different ways, so you
                  can easily add money and get your rewards no matter where you
                  are. We offer safe, quick, and easy ways to pay, such as
                  credit and debit cards and e-wallets like PayPal and Skrill.
                  This makes handling your account very easy.
                </p>
              </div>
              <div
                className="w-full h-full lg:w-[300px] lg:h-full 
                rounded-xl flex items-center justify-center text-sm text-black/60"
              >
                <Image
                  src="/img/home/NO.742__Safe and Secure on Mobile.webp"
                  width={300}
                  height={300}
                  alt="Safe and Secure on Mobile"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 lg:my-6 lg:flex-row lg:gap-15">
              <div className="w-full text-justify lg:w-3/4">
                <h3 className="text-center text-[#04494C] font-[900] uppercase mb-2 lg:mb-5 lg:text-2xl">
                  Play anywhere and at any time
                </h3>
                <p>
                  The 8k8 mobile app is great because it can be used in many
                  ways. You can play the app whenever and wherever you want,
                  like on your way to work, while you&lsquo;re on holiday, or
                  just while you&lsquo;re relaxing at home. You no longer have
                  to wait until you get back to your computer to play. Just open
                  the app, join in, and you can start right away. It&lsquo;s fun
                  to go to the casino all the time.
                </p>
              </div>
              <div
                className="w-full h-full lg:w-[300px] lg:h-full 
                rounded-xl flex items-center justify-center text-sm text-black/60"
              >
                <Image
                  src="/img/home/NO.743_Play anywhere and at any time.webp"
                  width={300}
                  height={300}
                  alt="Play anywhere and at any time"
                />
              </div>
            </div>

            <HowToPlay />

            <div className="mt-6 lg:mb-8">
              <h3 className="text-center text-[#04494C] font-[900] uppercase mb-2 lg:mb-5 lg:text-2xl">
                Mobile-friendly slot experience
              </h3>
              <p className="text-justify mb-2 lg:mb-5">
                We at 8k8 know that players want to be able to play their best
                real money slots from anywhere. Because of this, our app works
                perfectly on phones and tablets, so you can enjoy gaming without
                any problems. To quickly get to your best games while
                you&lsquo;re on the go, just log in to your 8k8 account through
                your phone&lsquo;s browser or download our mobile app.
              </p>

              <p className="text-justify mb-2 lg:mb-5">
                From the palm of your hand, you can use the mobile app to spin
                the reels, make deposits, cash out winnings, and collect
                bonuses. Everywhere you go, like on the bus, at the beach, or at
                home, there&apos;s always something going on.
              </p>
            </div>

            <div>
              <h3 className="text-center text-[#04494C] font-[900] uppercase mb-2 lg:mb-8 lg:text-2xl">
                Why should you play slots for real money at 8k8?
              </h3>
              <div>
                <PlayWithRealMoney data={data} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
