import Image from "next/image";
import { Minimize2 } from "lucide-react";

export const games = [
  {
    id: 31,
    content: (
      <>
        <div className="lg:pt-8">
          <div
            className="w-full h-[100px] lg:w-full lg:h-[200px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1400x600
            {/* <Image
              src="/img/home/Spin your way to win in a world of slots.webp"
              width={300}
              height={100}
              alt="Banner"
            /> */}
          </div>
          <div className="lg:mt-5 lg:mb-5">
            <h3 className="text-pretty font-[900] text-white text-xl lg:text-4xl">
              Spin Your Way to Win in a World of Slots
            </h3>
            <div className="text-white text-justify">
              <p className="mt-2">
                There are a lot of exciting video slots at 8k8 Casino that have
                the ability to pay out huge amounts of money. Everyone can find
                something they like here, from old-school fruit machines to new
                video slots with complex stories and bonus features. Leading
                software companies like NetEnt, Microgaming, and Play'n GO power
                our slots, so you can be sure that both the graphics and the
                games are of the highest quality.
              </p>
              <p className="mt-2">
                There's much to keep you entertained with themed slots based on
                TV shows, movies, and dream worlds and progressive jackpots that
                can alter your life with just one spin. Its straightforward
                design makes it easy to browse categories including jackpots,
                new games, and top-rated games. Every turn seems new and
                rewarding with wilds, unique game-specific free spins, and
                multipliers. There are a lot of things you can do, whether
                you're after the win or just some fun.
              </p>
              <p className="mt-2">
                We also have a number of 3-reel slots that take you back to the
                good old days of traditional casinos for players who like a more
                traditional gaming experience. These simple but fun games are
                great for people who like a more basic gaming experience—not too
                many features but still lots of fun.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
    className:
      "w-[300px] h-[200px] lg:w-[400px] lg:h-[400px] place-self-end cursor-pointer rounded-xl",
    thumbnail: "/img/home/bg-check-one.webp",
    previewContent: (
      <>
        <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center transition-colors duration-300 ease-in-out hover:bg-white/50 lg:flex-col">
          <button className="absolute right-5 top-5 text-white">
            <Minimize2 className="text-[#04494C]/50" />
          </button>
          <Image
            src="/img/home/Spin your way to win in a world of slots.webp"
            width={300}
            height={300}
            alt="sample"
            className="hidden lg:flex"
          />
          <h3
            className="text-white text-center font-[900] text-2xl 
          lg:w-[80%]
          lg:uppercase
          lg:text-2xl/8
          lg:pb-6
          "
          >
            Spin Your Way to Win in a World of Slots
          </h3>
        </div>
      </>
    ),
  },
  {
    id: 34,
    content: (
      <>
        <div className="lg:pt-8">
          <div
            className="w-full h-[100px] lg:w-full lg:h-[200px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1400x600
          </div>
          <div className="lg:mt-5 lg:mb-5">
            <h3 className="text-pretty font-[900] text-white text-xl lg:text-4xl">
              Instant Play: No Need to Download
            </h3>
            <div className="text-white text-justify">
              <p className="mt-2">
                The instant play option is one of the best things about the 8k8
                Casino. You don't have to download anything to start playing
                immediately. Once you log into your 8k8 account, you may
                immediately play your preferred games in your web browser. This
                implies you may use any device, whether your phone, a laptop, or
                a desktop PC.
              </p>
              <p className="mt-2">
                8k8 has a fully optimized mobile version of the casino for
                mobile players. You can access all games, features, and account
                control options from your phone or tablet. The mobile game is
                easy to use and responsive, and the quality is not sacrificed.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
    className:
      "w-[300px] h-[200px] lg:w-[400px] lg:h-[400px] cursor-pointer rounded-xl",
    thumbnail: "/img/home/bg-check-four.webp",
    previewContent: (
      <>
        <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center transition-colors duration-300 ease-in-out hover:bg-white/50  lg:flex-col">
          <button className="absolute right-5 top-5 text-white">
            <Minimize2 className="text-[#04494C]/50" />
          </button>
          <Image
            src="/img/home/Instant play- No need to download.webp"
            width={300}
            height={300}
            alt="sample"
            className="hidden lg:flex"
          />
          <h3
            className="text-white text-center font-[900] text-2xl 
          lg:w-[80%]
          lg:uppercase
          lg:text-2xl/8
          lg:pb-6
            "
          >
            Instant Play: No Need to Download
          </h3>
        </div>
      </>
    ),
  },
  {
    id: 32,
    content: (
      <>
        <div className="lg:pt-8">
          <div
            className="w-full h-[100px] lg:w-full lg:h-[200px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1400x600
          </div>
          <div className="lg:mt-5 lg:mb-5">
            <h3 className="text-pretty font-[900] text-white text-xl lg:text-4xl">
              Live dealer games: Let you play like you're in a real casino.
            </h3>
            <div className="text-white text-justify">
              <p className="mt-2">
                If you want to feel like you're really in a casino, 8k8's Live
                Dealer Games are the best choice. Top live casino operators like
                Evolution Gaming have partnered with us to provide you a broad
                spectrum of live-streamed games featuring actual dealers and
                real-time action. Though you might be at home depending on
                whether you select Live Poker, Blackjack, Roulette, or any of
                the other games we offer, our live casino games will make you
                feel like you're playing at a real casino table.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
    className:
      "w-[300px] h-[200px] lg:w-[400px] lg:h-[400px] place-self-end cursor-pointer rounded-xl",
    thumbnail: "/img/home/bg-check-two.webp",
    previewContent: (
      <>
        <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center transition-colors duration-300 ease-in-out hover:bg-white/50 lg:flex-col">
          <button className="absolute right-5 top-5 text-white">
            <Minimize2 className="text-[#04494C]/50" />
          </button>
          <Image
            src="/img/home/Live dealer games- Let you play like you're in a real casino.webp"
            width={300}
            height={300}
            alt="sample"
            className="hidden lg:flex"
          />
          <h3
            className="text-white text-center font-[900] text-2xl 
          lg:w-[80%]
          lg:uppercase
          lg:text-2xl/7
          lg:pb-6
          "
          >
            Live dealer games: Let you play like you're in a real casino
          </h3>
        </div>
      </>
    ),
  },
  {
    id: 33,
    content: (
      <>
        <div className="lg:pt-8">
          <div
            className="w-full h-[100px] lg:w-full lg:h-[200px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1400x600
          </div>
          <div className="lg:mt-5 lg:mb-5">
            <h3 className="text-pretty font-[900] text-white text-xl lg:text-4xl">
              Table games: Classics that will never go out of style
            </h3>
            <div className="text-white text-justify">
              <p className="mt-2">
                8k8 also has a lot of table games for people who like the
                planning and skill that come with traditional casino games. Our
                platform has all the basic casino games that have been around
                for a long time, like Poker, Blackjack, and Baccarat.
              </p>
              <p className="mt-2">
                Our tables offer several varieties of Blackjack, allowing
                players of various ability levels to enjoy the game. Every
                edition has its own betting restrictions, rules, and tactics. In
                the same way, our Baccarat tables bring the style and ease of
                this popular card game right to your computer. Your experience
                does not matter; you can find a table that fits your tastes and
                ability level.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
    className:
      "w-[300px] h-[200px] lg:w-[400px] lg:h-[400px] place-self-start cursor-pointer rounded-xl",
    thumbnail: "/img/home/bg-check-three.webp",
    previewContent: (
      <>
        <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center transition-colors duration-300 ease-in-out hover:bg-white/50  lg:flex-col">
          <button className="absolute right-5 top-5 text-white">
            <Minimize2 className="text-[#04494C]/50" />
          </button>
          <Image
            src="/img/home/Table games- classics that will never go out of style.webp"
            width={300}
            height={300}
            alt="sample"
            className="hidden lg:flex"
          />
          <h3
            className="text-white text-center font-[900] text-2xl 
          lg:w-[80%]
          lg:uppercase
          lg:text-2xl/7
          lg:pb-6
          "
          >
            Table games: Classics that will never go out of style
          </h3>
        </div>
      </>
    ),
  },
];
