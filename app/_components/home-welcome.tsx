import Image from "next/image";

export default function Welcome() {
  return (
    <section className="mt-[30px] lg:pb-[40px]">
      <div className="max-w-6xl mx-auto p-2 lg:p-0">
        <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-6">
          <div className="w-full lg:w-3/4">
            <h1
              className="text-[#04494C] text-2xl text-pretty uppercase tracking-wide font-[900] tracking-normal mb-2
            lg:text-balance
            lg:mb-5 lg:text-4xl"
            >
              Welcome to 8k8 – Your Premier Online Casino Experience
            </h1>
            <div className="text-justify">
              <p>
                At 8k8, we believe in providing a top-notch online gaming
                experience that includes exciting games, safe transactions, and
                great customer service. 8k8 is made to be fun and exciting for
                everyone, whether you&lsquo;ve played at online casinos before
                or this is your first time. It has a lot of games and features
                that will keep you entertained from the moment you log in.
              </p>
              <p className="lg:mt-2">
                You can play a huge number of different games on our platform,
                which will keep you busy for hours. We have a lot of different
                games, from Blackjack, Roulette, and Baccarat to video slots.
                There is something for everyone. Our games are powered by
                top-notch software providers, so you can look forward to
                stunning images, smooth gameplay, and new features that make 8k8
                stand out from other online casinos. 8k8 has something for
                everyone, whether you like the high stakes action of live player
                tables or the thrill of jackpot slots.
              </p>
            </div>
          </div>
          <div
            className="w-full h-full lg:w-[400px] lg:h-[400px] 
          rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            <Image
              src="/img/home/Welcome to 8k8 – Your Premier Online Casino Experience.webp"
              width={400}
              height={400}
              alt="Welcome to 8k8 – Your Premier Online Casino Experience"
            />
          </div>
        </div>

        <div className="text-justify">
          <p className="break-normal whitespace-normal">
            If you like to play while you&lsquo;re on the go, 8k8&lsquo;s mobile
            app will make sure you never miss a game. Our app is made to give
            you the same smooth and immersive experience as the PC version. You
            can easily access all of your favorite games. Get the app now to
            play your favorite gambling games anywhere and at any time.
          </p>
          <p className="mt-2 break-normal whitespace-normal lg:mt-4">
            At 8k8, security is very important to us, so we use the most
            up-to-date encryption technology to keep your personal and business
            data safe. There are also a lot of different ways to pay on our
            site, which makes deposits and withdrawals quick, easy, and safe.
            You don&lsquo;t have to worry about the safety of your transactions
            whether you&lsquo;re playing for fun or real money.
          </p>
          <p className="mt-2 break-normal whitespace-normal lg:mt-4">
            We&lsquo;re also proud of how well 8k8 treats its customers. We have
            people on work 24 hours a day, seven days a week to help you with
            anything. This makes sure that playing games is always simple and
            smooth.
          </p>
          <p className="mt-2 break-normal whitespace-normal lg:mt-4">
            Come play with us at 8k8 today and see why we&lsquo;re the best
            place for online casino fun. Get ready to enjoy the thrills,
            benefits, and fun that only 8k8 can provide. We are excited to have
            you at the game!
          </p>
        </div>
      </div>
    </section>
  );
}
