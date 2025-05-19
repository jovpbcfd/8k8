import { data } from "@/data/bonusesAndPromotion";
import BandPCarousel from "./home-bap-list";

const OPTIONS = { loop: true };

export default function BonusesAndPromotion() {
  return (
    <section className="lg:sections-gutter-y">
      <div className="max-w-6xl mx-auto p-2 lg:p-0">
        <div>
          <h2 className="text-[#04494C] font-[900] text-xl tracking-normal text-center uppercase mb-2 lg:mb-5 lg:text-3xl">
            Bonuses and promotions: Increase your chances of winning
          </h2>
          <p className="text-justify lg:text-center">
            8k8 has a lot of bonuses and special deals for both new and old
            players to make your game experience even better. There are many
            ways to get extra money and play longer, such as welcome bonuses,
            loyalty awards, and free spins. Our deals are meant to give you more
            value and more chances to win big.
          </p>
        </div>
        <div className="relative mx-auto max-w-4xl lg:mt-5">
          <div className="overflow-hidden">
            <div className="flex gap-2">
              <BandPCarousel slides={data} options={OPTIONS} />
            </div>
          </div>
        </div>
        <div className="text-justify lg:text-center lg:mt-6">
          <p className="font-bold text-[#04494C]">
            Sign up for 8k8 right now and take advantage of these great deals
            and freebies. Get the app right now and start playing!
          </p>
        </div>
      </div>
    </section>
  );
}
