import SubExperience from "./home-sub-experience";
import Image from "next/image";

export default function Experience() {
  return (
    <>
      <section className="lg:pb-[40px]">
        <div className="max-w-6xl mx-auto p-2 lg:p-0">
          <div>
            <h2 className="text-[#04494C] font-[900] text-xl tracking-normal text-center uppercase mb-2 lg:mb-6 lg:text-3xl">
              Experience the best slot games at 8k8
            </h2>
            <p className="text-justify mb-2 lg:mb-5">
              With our excellent range of slot games at 8k8 Casino, you will be
              entertained for hours and have many opportunities to win big. From
              years of experience to complete novice, 8k8 provides a broad
              spectrum of exciting slot machines that will keep you on the edge
              of your seat. From classic three-reel slots to contemporary
              five-reel video slots with thrilling bonus rounds, there is a slot
              game for everyone.
            </p>
            <div className="flex flex-col items-center lg:mb-5 lg:flex-row gap-2 lg:gap-6">
              <div className="w-full text-justify lg:w-3/4">
                <p className="mb-2 lg:mb-5">
                  One thing that makes 8k8 stand out is the huge number of slot
                  games it has. We work with some of the best software companies
                  in the business, like NetEnt, Microgaming, Play&lsquo;n GO,
                  and Betsoft, to bring you high-quality games with amazing
                  graphics, catchy music, and new ways to play. There are a lot
                  of different types of slots players here, from those who like
                  simple games to those who want slots with lots of features and
                  more complicated gameplay.
                </p>
                <p className="mb-2 lg:mb-5">
                  8k8 offers a multitude of 3-reel games that are simple to play
                  and will transport you back in time if you enjoy old-school
                  slots. Usually, these games have straightforward rules
                  including a single payline and frequent symbols include bars,
                  fruits, and sevens. This makes them easy to play while still
                  being fun and profitable.
                </p>
                <p className="mb-2 lg:mb-5">
                  If you&lsquo;re in the mood for something more modern, our
                  five-reel video slots are far more thrilling. These games have
                  many enjoyable elements such as bonus rounds, free spins,
                  wilds, multipliers, and scatter symbols that add uncertainty
                  and excitement to every spin. Like those from ancient periods,
                  the future, or well-known films, the pictures and music are
                  meant to draw you into other locations and times.
                </p>
              </div>
              <div
                className="w-full h-full lg:w-[300px] lg:h-full 
          rounded-xl flex items-center justify-center text-sm text-black/60"
              >
                <Image
                  src="/img/home/Experience the best slot games at 8k8.webp"
                  width={300}
                  height={300}
                  alt="Experience the best slot games at 8k8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubExperience />
    </>
  );
}
